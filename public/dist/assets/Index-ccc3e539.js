import{i as s}from"./main-d72f38de.js";import{i as a}from"./ipcRenderer-5e19eaee.js";import{_ as o,r as e,o as t,b as n,g as d,a as i,w as c,e as r,p as l,f as p}from"./index-a129fdb2.js";const u={data:()=>({type:1}),methods:{exec(o){const e={id:o};a.invoke(s.requestGoApi,e).then((s=>{console.log("res:",s);const a=s.data||null;this.$message.info(`go服务返回: ${a}`)}))}}},f={id:"app-cross-go"},m=(s=>(l("data-v-37d812a8"),s=s(),p(),s))((()=>d("div",{class:"one-block-1"},[d("span",null," 1. 向go服务发送http请求 ")],-1))),g={class:"one-block-2"};const v=o(u,[["render",function(s,a,o,l,p,u){const v=e("a-button"),_=e("a-space");return t(),n("div",f,[m,d("div",g,[i(_,null,{default:c((()=>[i(v,{onClick:a[0]||(a[0]=s=>u.exec(1))},{default:c((()=>[r(" 点击 ")])),_:1})])),_:1})])])}],["__scopeId","data-v-37d812a8"]]);export{v as default};
