(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{265:function(r,e,t){"use strict";t.r(e);var s=t(4),a=Object(s.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[r._v("#")]),r._v(" 介绍")]),r._v(" "),e("p",[r._v("Modern.js Builder 是"),e("strong",[r._v("一个面向现代 Web 开发场景的通用构建引擎")]),r._v("。")]),r._v(" "),e("p",[r._v("我们基于字节跳动数千个应用的实践经验，抽象出前端构建的最佳实践，提供 Web 开发所需的全方位能力。")]),r._v(" "),e("h2",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[r._v("#")]),r._v(" 特性")]),r._v(" "),e("h3",{attrs:{id:"开箱即用的双构建引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开箱即用的双构建引擎"}},[r._v("#")]),r._v(" 开箱即用的双构建引擎")]),r._v(" "),e("p",[r._v("在设计上，"),e("strong",[r._v("Builder 支持双构建引擎：webpack & rspack")]),r._v("。")]),r._v(" "),e("p",[r._v("默认情况下，Builder 使用 webpack 作为打包工具，集成了社区中成熟的 "),e("a",{attrs:{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer"}},[r._v("babel"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[r._v("postcss"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer"}},[r._v("terser"),e("OutboundLink")],1),r._v(" 等工具进行代码转义和压缩，也支持通过新兴的 "),e("a",{attrs:{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer"}},[r._v("swc"),e("OutboundLink")],1),r._v("、"),e("a",{attrs:{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"}},[r._v("esbuild"),e("OutboundLink")],1),r._v(" 等工具来提升编译效率。")]),r._v(" "),e("p",[r._v("同时，Builder 也正在对接"),e("strong",[r._v("字节跳动自研的 Rust Bundler —— rspack")]),r._v("，以提供更极致的编译速度。")]),r._v(" "),e("p",[r._v("目前 webpack 构建引擎已经成熟可用，rspack 构建引擎仍在开发过程中，敬请期待。")]),r._v(" "),e("h3",{attrs:{id:"深度优化构建产物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度优化构建产物"}},[r._v("#")]),r._v(" 深度优化构建产物")]),r._v(" "),e("p",[r._v("现阶段，webpack 仍然是产物优化最全面的打包工具。")]),r._v(" "),e("p",[r._v("Builder "),e("strong",[r._v("充分利用 webpack 生态内的各种优化手段")]),r._v("，保证生产环境的产物性能最优，并在稳定性上有充分的保障。")]),r._v(" "),e("p",[r._v("以拆包场景为例，webpack 原生的 splitChunks 配置较为复杂，Builder 将其封装为开箱即用的 "),e("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-chunksplit"}},[r._v("performance.chunkSplit")]),r._v(" 配置项，默认将常见的三方库拆分为体积适中的 chunk，使页面加载速度达到最优状态。")],1),r._v(" "),e("h3",{attrs:{id:"易于扩展的插件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#易于扩展的插件系统"}},[r._v("#")]),r._v(" 易于扩展的插件系统")]),r._v(" "),e("p",[r._v("Builder 提供丰富的配置项和灵活的插件系统，支持对各项能力进行深度定制。")]),r._v(" "),e("p",[r._v("Builder 所有的构建能力都通过插件来实现：")]),r._v(" "),e("ul",[e("li",[r._v("大部分插件较为轻量，被内置在 Builder 内部，通过配置项来控制启用。")]),r._v(" "),e("li",[r._v("少部分插件较为复杂，被外置为独立 npm 包，可以按需进行安装和注册。")])]),r._v(" "),e("p",[r._v("Builder 支持自定义插件，使框架开发者可以实现定制化的构建需求。")]),r._v(" "),e("h2",{attrs:{id:"npm-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-包"}},[r._v("#")]),r._v(" npm 包")]),r._v(" "),e("p",[r._v("Builder 已发布的 npm 包有：")]),r._v(" "),e("table",[e("thead",[e("tr",[e("th",[r._v("包名")]),r._v(" "),e("th",[r._v("版本")]),r._v(" "),e("th",[r._v("描述")])])]),r._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"noopener noreferrer"}},[r._v("@modern-js/builder"),e("OutboundLink")],1)]),r._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""}})]),r._v(" "),e("td",[r._v("Builder 核心包")])]),r._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"noopener noreferrer"}},[r._v("@modern-js/builder-webpack-provider"),e("OutboundLink")],1)]),r._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""}})]),r._v(" "),e("td",[r._v("提供 Webpack 构建能力")])]),r._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"noopener noreferrer"}},[r._v("@modern-js/builder-plugin-esbuild"),e("OutboundLink")],1)]),r._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""}})]),r._v(" "),e("td",[r._v("ESBuild 插件")])]),r._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"noopener noreferrer"}},[r._v("@modern-js/builder-plugin-node-polyfill"),e("OutboundLink")],1)]),r._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""}})]),r._v(" "),e("td",[r._v("Node Polyfill 插件")])]),r._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"noopener noreferrer"}},[r._v("@modern-js/builder-shared"),e("OutboundLink")],1)]),r._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""}})]),r._v(" "),e("td",[r._v("Builder 内部的公共模块")])]),r._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"noopener noreferrer"}},[r._v("@modern-js/builder-doc"),e("OutboundLink")],1)]),r._v(" "),e("td",[e("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""}})]),r._v(" "),e("td",[r._v("提供可复用的文档片段")])])])]),r._v(" "),e("h2",{attrs:{id:"下一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[r._v("#")]),r._v(" 下一步")]),r._v(" "),e("p",[r._v("你可能想要：")]),r._v(" "),e("NextSteps",[e("Step",{attrs:{href:"/guide/quick-start.html",title:"快速上手",description:"了解如何使用 Builder"}}),r._v(" "),e("Step",{attrs:{href:"/guide/features.html",title:"功能导航",description:"了解 Builder 提供的所有功能"}}),r._v(" "),e("Step",{attrs:{href:"/api",title:"查阅 API",description:"查看详细的 API 文档"}})],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);