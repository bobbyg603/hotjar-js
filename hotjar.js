"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=()=>"undefined"!=typeof window,r=()=>!(!t()||!window.hj),e=(r,...e)=>{if(t()&&window.hj)return window.hj(r,...e);throw Error("Hotjar is not available, make sure init has been called.")},n=(t,e)=>{if(!((t,r)=>{try{const e=document.getElementById(r)||document.createElement("script");return e.id=r,e.innerText=t,e.crossOrigin="anonymous",document.head.appendChild(e),!0}catch(t){return!1}})(`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${t},hjsv:${e}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,"hotjar-init-script")||!r())throw Error("Failed to initialize Hotjar tracking script.")},o={init:(t,r)=>{try{return n(t,r),!0}catch(t){return console.error("Error:",t),!1}},identify:(t,r)=>{try{return e("identify",t,r),!0}catch(t){return console.error("Error:",t),!1}},stateChange:t=>{try{return e("stateChange",t),!0}catch(t){return console.error("Error:",t),!1}},isReady:r};exports.default=o;
//# sourceMappingURL=index.js.map