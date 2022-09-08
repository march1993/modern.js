"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[36120],{54852:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(86215),a=(r(49231),r(54852));const o={sidebar_position:0},i="\u6982\u89c8",s={unversionedId:"apis/generator/overview",id:"apis/generator/overview",title:"\u6982\u89c8",description:"Modern.js \u63d0\u4f9b\u4e86 create \u5de5\u5177\u7528\u4e8e\u521d\u59cb\u5316\u4e0d\u540c\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u3002",source:"@site/docs/apis/generator/overview.md",sourceDirName:"apis/generator",slug:"/apis/generator/overview",permalink:"/docs/apis/generator/overview",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"apisGeneratorSidebar",next:{title:"\u4ecb\u7ecd",permalink:"/docs/apis/generator/config/introduce"}},p={},c=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," \u5de5\u5177\u7528\u4e8e\u521d\u59cb\u5316\u4e0d\u540c\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u3002"),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create [projectDir]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: create [projectDir]\n\n\u521b\u5efa @modern-js \u5e94\u7528\n\nOptions:\n  -c, --config <config>  \u521b\u5efa\u9879\u76ee\u9ed8\u8ba4\u914d\u7f6e(JSON \u5b57\u7b26\u4e32) (default: "{}")\n  --mwa                  \u4e00\u952e\u521b\u5efa\u5e94\u7528\u5de5\u7a0b(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e) (default: false)\n  --module               \u4e00\u952e\u521b\u5efa\u6a21\u5757\u5de5\u7a0b(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e) (default: false)\n  --monorepo             \u4e00\u952e\u5e38\u89c1 Monorepo \u5e94\u7528(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e) (default: false)\n  --dist-tag <distTag>   \u751f\u6210\u9879\u76ee\u65f6\u751f\u6210\u5668\u4f7f\u7528\u7279\u6b8a\u7684 npm Tag (default: "")\n  --registry <registry>  \u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\u5b9a\u5236 npm Registry (default: "")\n  -d,--debug             \u5f00\u542f Debug \u6a21\u5f0f\uff0c\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f (default: false)\n  -h, --help             display help for command\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e0d\u9700\u8981\u5168\u5c40\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create"),"\uff0c\u4f7f\u7528 npx \u6309\u9700\u8fd0\u884c\u5373\u53ef\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u59cb\u7ec8\u8fd0\u884c\u6700\u65b0\u7248\u672c\u7684\u9879\u76ee\u751f\u6210\u5668\u3002"))))}d.isMDXComponent=!0}}]);