var __async=(e,t,n)=>new Promise(((o,l)=>{var s=e=>{try{r(n.next(e))}catch(t){l(t)}},i=e=>{try{r(n.throw(e))}catch(t){l(t)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,i);r((n=n.apply(e,t)).next())}));import{b as defineComponent,y as onMounted,o as openBlock,f as createElementBlock,d2 as defHttp}from"./index.js";const _hoisted_1={id:"load-gist"},_sfc_main=defineComponent({setup(__props){const gistUrl="https://gist.github.com/sjlei/7edba626fed9201a87b0a48b363a59f6.js",url="/helper/transit?url="+encodeURIComponent(gistUrl);let _resolve,mounted=new Promise((e=>_resolve=e));function load(){return __async(this,null,(function*(){let body=yield defHttp.get({url:url},{isTransformResponse:!1});if(!body)return;let lines=body.split("\n"),html=[];for(let e=0;e<lines.length;e++)lines[e]=lines[e].replace(/^document\.write\(/,"html.push(");eval(lines.join("\n")),yield mounted,document.getElementById("load-gist").innerHTML=html.join("\n")}))}return onMounted((()=>_resolve())),load(),(e,t)=>(openBlock(),createElementBlock("div",_hoisted_1))}});export{_sfc_main as default};
