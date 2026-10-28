import{d as u,g as b,a as k,c as w,s as x,m as S}from"./Box-Dugl1T69.js";import{j as p,r as R,a as M,c as $,o as f,p as m}from"./index-BRGcE4GQ.js";function U(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function L(t){return parseFloat(t)}const P=u(p.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),B=u(p.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}));function j(t){return b("MuiSkeleton",t)}k("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const A=t=>{const{classes:e,variant:a,animation:n,hasChildren:s,width:i,height:o}=t;return w({root:["root",a,n,s&&"withChildren",s&&!i&&"fitContent",s&&!o&&"heightAuto"]},j,e)},r=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,l=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,z=typeof r!="string"?f`
        animation: ${r} 2s ease-in-out 0.5s infinite;
      `:null,I=typeof l!="string"?f`
        &::after {
          animation: ${l} 2s linear 0.5s infinite;
        }
      `:null,X=x("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(S(({theme:t})=>{const e=U(t.shape.borderRadius)||"px",a=L(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:z||{animation:`${r} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:I||{"&::after":{animation:`${l} 2s linear 0.5s infinite`}}}]}})),E=R.forwardRef(function(e,a){const n=M({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:o="span",height:h,style:g,variant:v="text",width:y,...c}=n,d={...n,animation:s,component:o,variant:v,hasChildren:!!c.children},C=A(d);return p.jsx(X,{as:o,ref:a,className:$(C.root,i),ownerState:d,...c,style:{width:y,height:h,...g}})});export{P as F,B as L,E as S};
