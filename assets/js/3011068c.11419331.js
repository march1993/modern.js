"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[31532],{54852:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(49231);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,j=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(j,o(o({ref:n},u),{},{components:t})):a.createElement(j,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(86215),r=(t(49231),t(54852));const i={sidebar_label:"jsPath"},o="output.jsPath",s={unversionedId:"apis/module/config/output/js-path",id:"apis/module/config/output/js-path",title:"output.jsPath",description:"* \u7c7b\u578b\uff1a string",source:"@site/docs/apis/module/config/output/js-path.md",sourceDirName:"apis/module/config/output",slug:"/apis/module/config/output/js-path",permalink:"/docs/apis/module/config/output/js-path",tags:[],version:"current",frontMatter:{sidebar_label:"jsPath"},sidebar:"apisModuleSidebar",previous:{title:"importStyle",permalink:"/docs/apis/module/config/output/import-style"},next:{title:"packageFields",permalink:"/docs/apis/module/config/output/package-fields"}},p={},l=[{value:"\u5e94\u7528\u5de5\u7a0b",id:"\u5e94\u7528\u5de5\u7a0b",level:3},{value:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",id:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",level:3}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"outputjspath"},"output.jsPath"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5de5\u7a0b\u4e2d: ",(0,r.kt)("inlineCode",{parentName:"li"},"static/js")),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5de5\u7a0b\u4e2d: ",(0,r.kt)("inlineCode",{parentName:"li"},"js"))))),(0,r.kt)("p",null,"\u8bbe\u7f6e js \u6587\u4ef6\u5728\u8f93\u51fa\u76ee\u5f55\u4e2d\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,r.kt)("h3",{id:"\u5e94\u7528\u5de5\u7a0b"},"\u5e94\u7528\u5de5\u7a0b"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5728\u5e94\u7528\u5de5\u7a0b\u4e2d\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build")," \u4e4b\u540e\uff0c js \u4ea7\u7269\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 static\n    \u2514\u2500\u2500 js\n \xa0\xa0     \u251c\u2500\u2500 2.9b520d98.chunk.js\n \xa0\xa0     \u251c\u2500\u2500 2.9b520d98.chunk.js.map\n \xa0\xa0     \u251c\u2500\u2500 main.ef911a7c.chunk.js\n \xa0\xa0     \u251c\u2500\u2500 main.ef911a7c.chunk.js.map\n \xa0\xa0     \u251c\u2500\u2500 runtime-main.6acd5045.js\n \xa0\xa0     \u2514\u2500\u2500 runtime-main.6acd5045.js.map\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"output.jsPath")," \u4e4b\u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    jsPath: './js-assets',\n  },\n});\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"\uff0c\u5bf9\u5e94 js \u4ea7\u7269\u5728 dist \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 js-assets\n    \u251c\u2500\u2500 2.9b520d98.chunk.js\n    \u251c\u2500\u2500 2.9b520d98.chunk.js.map\n    \u251c\u2500\u2500 main.ef911a7c.chunk.js\n    \u251c\u2500\u2500 main.ef911a7c.chunk.js.map\n    \u251c\u2500\u2500 runtime-main.6acd5045.js\n    \u2514\u2500\u2500 runtime-main.6acd5045.js.map\n")),(0,r.kt)("h3",{id:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"},"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," \u4e4b\u540e\uff0c js \u4ea7\u7269\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 js\n    \u251c\u2500\u2500 modern\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u251c\u2500\u2500 node\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u2514\u2500\u2500 treeshaking\n        \u251c\u2500\u2500 index.js\n        \u251c\u2500\u2500 index.d.ts\n        \u2514\u2500\u2500 index.js.map\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"output.jsPath")," \u4e4b\u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  output: {\n    jsPath: './js-assets',\n  },\n});\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"\uff0c\u5bf9\u5e94 js \u4ea7\u7269\u5728 dist \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 js\n    \u251c\u2500\u2500 modern\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u251c\u2500\u2500 node\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u2514\u2500\u2500 treeshaking\n        \u251c\u2500\u2500 index.js\n        \u251c\u2500\u2500 index.d.ts\n        \u2514\u2500\u2500 index.js.map\n")))}d.isMDXComponent=!0}}]);