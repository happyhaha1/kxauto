import{i as a}from"./main-d72f38de.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{_ as s,r as t,o as n,b as l,g as d,a as o,w as c,e as i,F as r,d as u,p,f,c as b,t as k}from"./index-a129fdb2.js";const m={data:()=>({data:[]}),methods:{getScreen(s){e.invoke(a.getScreen,s).then((a=>{this.data=a}))}}},_=a=>(p("data-v-496a45d2"),a=a(),f(),a),v={id:"app-base-screen"},g=_((()=>d("div",{class:"one-block-1"},[d("span",null," 1. 屏幕信息 ")],-1))),S={class:"one-block-2"},h=_((()=>d("div",{class:"one-block-1"},[d("span",null," 结果： ")],-1))),j={class:"one-block-2"};const C=s(m,[["render",function(a,e,s,p,f,m){const _=t("a-button"),C=t("a-space"),x=t("a-descriptions-item"),w=t("a-descriptions");return n(),l("div",v,[g,d("div",S,[o(C,null,{default:c((()=>[o(_,{onClick:e[0]||(e[0]=a=>m.getScreen(0))},{default:c((()=>[i("获取当前鼠标位置")])),_:1}),o(_,{onClick:e[1]||(e[1]=a=>m.getScreen(1))},{default:c((()=>[i("获取主屏幕")])),_:1}),o(_,{onClick:e[2]||(e[2]=a=>m.getScreen(2))},{default:c((()=>[i("获取所有屏幕")])),_:1})])),_:1})]),h,d("div",j,[o(w,{title:""},{default:c((()=>[(n(!0),l(r,null,u(f.data,((a,e)=>(n(),b(x,{key:e,label:a.title},{default:c((()=>[i(k(a.desc),1)])),_:2},1032,["label"])))),128))])),_:1})])])}],["__scopeId","data-v-496a45d2"]]);export{C as default};
