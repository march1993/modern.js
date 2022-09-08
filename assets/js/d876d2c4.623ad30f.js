"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[77086],{54852:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(49231);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,f=c["".concat(l,".").concat(u)]||c[u]||s[u]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var m=2;m<a;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=t(86215),i=(t(49231),t(54852));const a={sidebar_position:12,title:"defineConfig"},o=void 0,p={unversionedId:"apis/module/runtime/app/define-config",id:"apis/module/runtime/app/define-config",title:"defineConfig",description:"\u7528\u4e8e\u52a8\u6001\u914d\u7f6e\u5e94\u7528\u3002",source:"@site/docs/apis/module/runtime/app/define-config.md",sourceDirName:"apis/module/runtime/app",slug:"/apis/module/runtime/app/define-config",permalink:"/docs/apis/module/runtime/app/define-config",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"defineConfig"},sidebar:"apisModuleSidebar",previous:{title:"createApp",permalink:"/docs/apis/module/runtime/app/create-app"},next:{title:"model",permalink:"/docs/apis/module/runtime/model/model_"}},l={},m=[{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:m};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7528\u4e8e\u52a8\u6001\u914d\u7f6e\u5e94\u7528\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@modern-js/runtime';\n")))),(0,i.kt)("p",null,"Runtime \u914d\u7f6e\u901a\u5e38\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \u7a7a\u95f4\u4e0b\u914d\u7f6e\uff0c\u5982 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/router"},"runtime.router")," \u7b49\u3002\n\u4f46\u5982\u679c\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\u662f\u8fd0\u884c\u65f6\u83b7\u53d6\u7684\uff0c\u6216\u8005\u914d\u7f6e\u53c2\u6570\u662f\u6765\u81ea\u4e8e\u6e90\u7801\u4e2d\u7684\u4e00\u4e2a\u6a21\u5757\uff08\u5982\u7ec4\u4ef6\uff09\uff0c\u5f00\u53d1\u8005\u5c31\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"defineConfig")," API \u8fdb\u884c\u8fd0\u884c\u65f6\u7684\u914d\u7f6e\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js/app-tools")," \u62e5\u6709\u540c\u540d API \uff0c\u7528\u4e8e",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6\u914d\u7f6e\u5b9a\u4e49"),"\uff0c\u8bf7\u5f00\u53d1\u8005\u52a0\u4ee5\u533a\u5206\u3002"))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defineConfig(Component, config): any")),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Component\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"React.ComponentType<any>"),"\uff0cApp \u6839\u7ec4\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"config\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Record<string, any>"),"\uff0c\u8fd0\u884c\u65f6\u7684\u914d\u7f6e\u3002")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function App () {\n  ...\n}\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false\n  }\n})\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u91cc\u53ef\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/state"},"runtime.state"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/router"},"runtime.router")," \u7b49\u8fd0\u884c\u65f6\u914d\u7f6e\u3002\u5b57\u6bb5\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," \u914d\u7f6e\u5b57\u6bb5\u4e00\u81f4\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u5728\u914d\u7f6e\u67d0\u4e2a\u5c5e\u6027\u4e4b\u524d\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"router"),"\uff0c\u9700\u8981\u786e\u4fdd ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u5df2\u7ecf\u914d\u7f6e\u5f00\u542f\u4e86\u8be5\u529f\u80fd\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u4f20\u5165\u7684\u914d\u7f6e\u4f1a\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u91cd\u7684\u914d\u7f6e\u6d45 merge\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"router")," \u4e3a\u4f8b\uff0c\u6700\u7ec8\u5e94\u7528\u7684\u914d\u7f6e\u5982\u4e0b\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  // \u6765\u81ea `modern.config.js` \u914d\u7f6e\n  ...runtime.router\n  // \u6765\u81ea `defineConfig` \u914d\u7f6e\n  ...config.router\n}\n")))}s.isMDXComponent=!0}}]);