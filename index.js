import path from 'path'
import {isDev, isV3} from './utils/adapter.js'
import {_paths, _version, loadClasses} from './utils/common.js'
import {createImport, GI, GID, incrVersion} from './utils/guobaImport.js'
import {createHotLoad} from './utils/hotLoad.js'

let isInit = true

const apps = {}

global.Guoba = {GI, GID, createImport}

if (isV3) {
  let appsPath = path.join(_paths.pluginRoot, 'apps')
  // 加载 apps 下的所有类
  await loadClasses(appsPath, plugin, apps)
  await init()

  logger.mark(`[Guoba] 欢迎使用锅巴插件，当前版本：${_version}`)
} else {
  logger.error(`[Guoba] 锅巴插件不支持Yunzai2.x版本哦。`)
}

export {apps}

async function init() {
  // dev 模式下，监听文件变化，自动重启服务器
  if (isDev) {
    let skip = true
    let staticPath = path.join(_paths.pluginRoot, 'server/static')
    createHotLoad(path.join(_paths.pluginRoot, 'server'), {
      wait: 100,
      immediate: true,
      filter: (type, p) => {
        if (type === 'immediate') {
          return true
        }
        if (skip) return false
        if (p.startsWith(staticPath)) {
          return false
        }
        return /\.c?js$/.test(p)
      },
      handler: () => reload().then(() => setTimeout(() => skip = false, 1000)),
    })
  } else {
    reload()
  }

  /** 退出事件 */
  process.on('exit', async (code) => {
    if (Guoba && Guoba.server) {
      Guoba.server.close()
    }
  })
}

async function reload() {
  if (!isInit) {
    incrVersion()
  }
  let flag = await new Promise((resolve) => {
    if (!Guoba.server) {
      resolve(true)
      return
    }
    Guoba.server.close(err => {
      if (err) {
        logger.error('[Guoba] 重载失败', err)
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
  if (flag) {
    delete Guoba.app
    delete Guoba.server
    // 创建服务器
    let newServer
    try {
      let {createServer} = await GI('#/index.js')
      newServer = await createServer({isInit})
    } catch (error) {
      if (error?.stack && error.stack.includes('Cannot find package')) {
        packageTips(error)
      } else {
        if (error.stack) {
          logger.error(`[Guoba] 服务锅巴启动失败`)
          logger.error(decodeURI(error.stack))
        } else {
          logger.error(error)
        }
      }
      return
    }
    let {app, server} = newServer
    Guoba.app = app
    Guoba.server = server
    Guoba.reload = reload
    if (!isInit) {
      logger.mark('[Guoba] 服务重载成功~')
    }
    isInit = false
  }
}

function packageTips(error) {
  logger.mark('---- 锅巴启动失败 ----')
  let pack = error.stack.match(/'(.+?)'/g)[0].replace(/'/g, '')
  logger.mark(`缺少依赖：${logger.red(pack)}`)
  logger.mark(`请执行安装依赖命令：${logger.red('pnpm add ' + pack + ' -w')}`)
  logger.mark('---------------------')
}
