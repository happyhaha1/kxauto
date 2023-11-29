import{i as e,s as n}from"./main-d72f38de.js";import{i as s}from"./ipcRenderer-5e19eaee.js";import{_ as o,r as a,o as l,b as i,g as d,a as t,w as c,e as g,t as u,p as r,f as k}from"./index-a129fdb2.js";const m={data:()=>({messageString:"",message1:"",message2:"",message3:"",mainWCid:0}),mounted(){this.init()},methods:{init(){s.removeAllListeners(e.ipcSendMsg),s.on(e.ipcSendMsg,((n,s)=>{console.log("[ipcRenderer] [socketMsgStart] result:",s),this.messageString=s,n.sender.send(e.hello,"electron-egg")})),s.removeAllListeners(n.window1ToWindow2),s.on(n.window1ToWindow2,((e,n)=>{this.$message.info(n)}))},sendMsgStart(){s.send(e.ipcSendMsg,{type:"start",content:"开始"})},sendMsgStop(){s.send(e.ipcSendMsg,{type:"end",content:""})},handleInvoke(){s.invoke(e.ipcInvokeMsg,"异步-回调").then((e=>{console.log("r:",e),this.message1=e}))},async handleInvoke2(){const n=await s.invoke(e.ipcInvokeMsg,"异步");console.log("msg:",n),this.message2=n},handleSendSync(){const n=s.sendSync(e.ipcSendSyncMsg,"同步");this.message3=n},sendTosubWindow(){s.invoke(e.getWCid,"main").then((e=>{this.mainWCid=e,s.sendTo(this.mainWCid,n.window2ToWindow1,"窗口2 通过 sendTo 给主窗口发送消息")}))}}},p=e=>(r("data-v-eff30726"),e=e(),k(),e),f={id:"app-base-subwindow-ipc"},v=p((()=>d("div",{class:"one-block-1"},[d("span",null," 1. 发送异步消息 ")],-1))),S={class:"one-block-2"},h=p((()=>d("p",null,null,-1))),w=p((()=>d("div",{class:"one-block-1"},[d("span",null," 2. 同步消息（不推荐，阻塞执行） ")],-1))),C={class:"one-block-2"},b=p((()=>d("div",{class:"one-block-1"},[d("span",null," 3. 长消息： 服务端持续向前端页面发消息 ")],-1))),_={class:"one-block-2"},M=p((()=>d("div",{class:"one-block-1"},[d("span",null," 4. 多窗口通信：窗口之间互相通信 ")],-1))),W={class:"one-block-2"};const y=o(m,[["render",function(e,n,s,o,r,k){const m=a("a-button"),p=a("a-space");return l(),i("div",f,[v,d("div",S,[t(p,null,{default:c((()=>[t(m,{onClick:k.handleInvoke},{default:c((()=>[g("发送 - 回调")])),_:1},8,["onClick"]),g(" 结果："+u(r.message1),1)])),_:1}),h,t(p,null,{default:c((()=>[t(m,{onClick:k.handleInvoke2},{default:c((()=>[g("发送 - async/await")])),_:1},8,["onClick"]),g(" 结果："+u(r.message2),1)])),_:1})]),w,d("div",C,[t(p,null,{default:c((()=>[t(m,{onClick:k.handleSendSync},{default:c((()=>[g("同步消息")])),_:1},8,["onClick"]),g(" 结果："+u(r.message3),1)])),_:1})]),b,d("div",_,[t(p,null,{default:c((()=>[t(m,{onClick:k.sendMsgStart},{default:c((()=>[g("开始")])),_:1},8,["onClick"]),t(m,{onClick:k.sendMsgStop},{default:c((()=>[g("结束")])),_:1},8,["onClick"]),g(" 结果："+u(r.messageString),1)])),_:1})]),M,d("div",W,[t(p,null,{default:c((()=>[t(m,{onClick:n[0]||(n[0]=e=>k.sendTosubWindow())},{default:c((()=>[g("向主窗口发消息")])),_:1})])),_:1})])])}],["__scopeId","data-v-eff30726"]]);export{y as default};
