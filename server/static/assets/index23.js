import{a as e,b as t,eL as a,dR as s,bQ as o,r as i,e as r,o as n,i as l,j as m,k as p,f as d,h as u,F as c,bg as j,dH as f,bU as y,bT as g}from"./index.js";import{P as v}from"./index12.js";import{C as x,q as b}from"./ConfigForm.js";import"./index14.js";import"./onMountedOrActivated.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./transButton.js";import"./BasicForm.js";import"./index2.js";import"./_baseIteratee.js";import"./get.js";import"./index4.js";import"./index5.js";import"./index6.js";import"./useFormItem.js";import"./index3.js";import"./FullscreenOutlined.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";import"./useForm.js";import"./CardForm.js";import"./usePrompt.js";import"./Prompt.js";import"./ArrayForm.js";var k=e(t({components:{PageWrapper:v,Skeleton:a,Tabs:s,TabPane:s.TabPane,ConfigForm:x},setup(){const{prefixCls:e}=o("system-config"),t=i(!0),a=i(!0),s=i([]),r=i("");return function(){return e=this,o=null,i=function*(){t.value=!0;try{s.value=yield b(),r.value=s.value[0].key}finally{t.value=!1,a.value=!1}},new Promise(((t,a)=>{var s=e=>{try{n(i.next(e))}catch(t){a(t)}},r=e=>{try{n(i.throw(e))}catch(t){a(t)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,r);n((i=i.apply(e,o)).next())}));var e,o,i}(),{prefixCls:e,pageLoading:a,loading:t,configTabs:s,activeKey:r}}}),[["render",function(e,t,a,s,o,i){const v=r("Skeleton"),x=r("TabPane"),b=r("Tabs"),k=r("ConfigForm"),F=r("a-col"),P=r("a-row"),C=r("PageWrapper");return e.pageLoading?(n(),l(v,{key:0,active:""})):(n(),l(C,{key:1,title:"配置管理",content:"在这里可以配置机器人的基础设置以及原神相关设置",loading:e.loading,sticky:""},{footer:m((()=>[p(b,{activeKey:e.activeKey,"onUpdate:activeKey":t[0]||(t[0]=t=>e.activeKey=t)},{default:m((()=>[(n(!0),d(c,null,u(e.configTabs,(e=>(n(),l(x,{key:e.key,tab:e.title},null,8,["tab"])))),128))])),_:1},8,["activeKey"])])),default:m((()=>[p(P,{class:g([e.prefixCls]),justify:"center"},{default:m((()=>[p(F,{xxl:16,xl:18,lg:20,md:22,sm:24,xs:24},{default:m((()=>[(n(!0),d(c,null,u(e.configTabs,(t=>(n(),l(j,{key:t.key,name:"scroll-x-transition",mode:"out-in"},{default:m((()=>[(n(),l(f,null,[e.activeKey===t.key?(n(),l(k,{key:0,cards:t.cards},null,8,["cards"])):y("",!0)],1024))])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])])),_:1},8,["loading"]))}]]);export{k as default};
