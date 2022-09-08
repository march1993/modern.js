"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[83296],{54852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||l[u]||o;return t?r.createElement(f,p(p({ref:n},c),{},{components:t})):r.createElement(f,p({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var d=2;d<o;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(86215),a=(t(49231),t(54852));const o={sidebar_position:8},p=void 0,i={unversionedId:"apis/app/commands/upgrade",id:"apis/app/commands/upgrade",title:"upgrade",description:"modern upgrade \u547d\u4ee4\uff0c\u7528\u4e8e\u5347\u7ea7\u9879\u76ee Modern.js \u76f8\u5173\u4f9d\u8d56\u81f3\u6700\u65b0\u7248\u672c\u3002",source:"@site/docs/apis/app/commands/upgrade.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/upgrade",permalink:"/docs/apis/app/commands/upgrade",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"apisAppSidebar",previous:{title:"inspect",permalink:"/docs/apis/app/commands/inspect"},next:{title:"\u547d\u4ee4",permalink:"/docs/apis/app/runtime/"}},s={},d=[],c={toc:d};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: modern upgrade [options]\n\n\u5347\u7ea7 Modern.js \u5230\u6700\u65b0\u7248\u672c\n\nOptions:\n  --registry <registry>  \u5b9a\u5236 npm registry (default: "")\n  -d,--debug             \u5f00\u542f Debug \u6a21\u5f0f\uff0c\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f (default: false)\n  --cwd <cwd>            \u9879\u76ee\u8def\u5f84 (default: "")\n  -h, --help             display help for command\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modern upgrade")," \u547d\u4ee4\uff0c\u7528\u4e8e\u5347\u7ea7\u9879\u76ee Modern.js \u76f8\u5173\u4f9d\u8d56\u81f3\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"npx modern upgrade"),"\uff0c\u4f1a\u9ed8\u8ba4\u5c06\u5f53\u524d\u6267\u884c\u547d\u4ee4\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 Modern.js \u76f8\u5173\u4f9d\u8d56\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u547d\u4ee4\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/app-tools")," \u7248\u672c >= 1.17.0 \u63d0\u4f9b\uff0c\u4e4b\u524d\u7248\u672c\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npx @modern-js/upgrade")," \u8fdb\u884c\u5347\u7ea7\u3002"))))}l.isMDXComponent=!0}}]);