import{i as e}from"./main-d72f38de.js";import{i as t}from"./ipcRenderer-5e19eaee.js";import{_ as i,h as a,r as s,o as n,b as l,g as o,a as r,w as d,e as c,t as u,p as m,f as v}from"./index-a129fdb2.js";const p={data:()=>({defaultDeviceName:"",printerList:[],views:[{type:"html",content:"/public/html/view_example.html"}]}),mounted(){this.init()},methods:{init(){t.removeAllListeners(e.printStatus),t.on(e.printStatus,((e,t)=>{console.log("result",t),this.$message.info("打印中...")}))},getPrinter(){t.invoke(e.getPrinterList,{}).then((e=>{this.printerList=e}))},doPrint(i){console.log("defaultDeviceName:",this.defaultDeviceName);const s={view:a(this.views[i]),deviceName:this.defaultDeviceName};t.send(e.print,s)},defaultDevice(e){let t="";return e.isDefault&&(t="- 默认",this.defaultDeviceName=e.name),t}}},f=e=>(m("data-v-2a0e2511"),e=e(),v(),e),h={id:"app-hw-bluetooth"},b=f((()=>o("div",{class:"one-block-1"},[o("span",null," 1. 打印机设备 ")],-1))),k={class:"one-block-2"},D={class:"one-block-2"},_=f((()=>o("div",null,"设备列表",-1))),g=f((()=>o("div",{class:"one-block-1"},[o("span",null," 2. 打印内容 ")],-1))),N={class:"one-block-2"};const w=i(p,[["render",function(e,t,i,a,m,v){const p=s("a-button"),f=s("a-list-item"),w=s("a-list");return n(),l("div",h,[b,o("div",k,[r(p,{onClick:t[0]||(t[0]=e=>v.getPrinter())},{default:d((()=>[c(" 获取打印机列表 ")])),_:1})]),o("div",D,[r(w,{size:"small",bordered:"","data-source":m.printerList},{renderItem:d((({item:e})=>[r(f,null,{default:d((()=>[c(u(e.displayName)+" "+u(v.defaultDevice(e)),1)])),_:2},1024)])),header:d((()=>[_])),_:1},8,["data-source"])]),g,o("div",N,[r(p,{onClick:t[1]||(t[1]=e=>v.doPrint(0))},{default:d((()=>[c(" 打印一个页面 ")])),_:1})])])}],["__scopeId","data-v-2a0e2511"]]);export{w as default};
