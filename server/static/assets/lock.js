var o=(o,t,e)=>new Promise(((n,s)=>{var r=o=>{try{l(e.next(o))}catch(t){s(t)}},c=o=>{try{l(e.throw(o))}catch(t){s(t)}},l=o=>o.done?n(o.value):Promise.resolve(o.value).then(r,c);l((e=e.apply(o,t)).next())}));import{dS as t,dT as e,dU as n,d1 as s}from"./index.js";const r=t({id:"app-lock",state:()=>({lockInfo:e.getLocal(n)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),e.setLocal(n,this.lockInfo,!0)},resetLockInfo(){e.removeLocal(n,!0),this.lockInfo=null},unLock(t){return o(this,null,(function*(){var e;const n=s();if((null==(e=this.lockInfo)?void 0:e.pwd)===t)return this.resetLockInfo(),!0;return yield(()=>o(this,null,(function*(){var o;try{const e=null==(o=n.getUserInfo)?void 0:o.username,s=yield n.login({username:e,password:t,goHome:!1,mode:"none"});return s&&this.resetLockInfo(),s}catch(e){return!1}})))()}))}}});export{r as u};
