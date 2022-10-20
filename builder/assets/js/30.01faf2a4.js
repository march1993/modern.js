(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{251:function(e,t,r){"use strict";r.r(t);var s=r(4),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Modern.js Builder is "),t("strong",[e._v("a Universal Build Engine for Modern Web Development")]),e._v(".")]),e._v(" "),t("p",[e._v("Based on the best practices of thousands web applications in ByteDance, we created Modern.js Builder to provide useful features for web development.")]),e._v(" "),t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("h3",{attrs:{id:"multiple-build-engines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-build-engines"}},[e._v("#")]),e._v(" Multiple Build Engines")]),e._v(" "),t("p",[t("strong",[e._v("Builder supports two build engines: webpack & rspack")]),e._v(".")]),e._v(" "),t("p",[e._v("Builder uses webpack as the default bundler, integrates "),t("a",{attrs:{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[e._v("postcss"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer"}},[e._v("terser"),t("OutboundLink")],1),e._v(" and other tools to transform or minify codes. And also support using "),t("a",{attrs:{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer"}},[e._v("swc"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"}},[e._v("esbuild"),t("OutboundLink")],1),e._v(" to improving the compile speed.")]),e._v(" "),t("p",[e._v("At the same time, We are integrating rspack to improve compilation speed, rspack is a Rust Bundler developed by ByteDance.")]),e._v(" "),t("p",[e._v("At present, the webpack build engine is stable for production, and the rspack build engine is still under heavy development.")]),e._v(" "),t("h3",{attrs:{id:"deep-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deep-optimization"}},[e._v("#")]),e._v(" Deep optimization")]),e._v(" "),t("p",[e._v("At this stage, webpack is still the most mature bundler for product optimization.")]),e._v(" "),t("p",[e._v("Builder "),t("strong",[e._v("makes full use of various optimization strategies")]),e._v(" in the webpack ecosystem to ensure the product performance in the production environment.")]),e._v(" "),t("p",[e._v("Taking the chunk splitting scenario as an example, the webpack's splitChunks config is complex, and Builder makes it as an out-of-the-box "),t("RouterLink",{attrs:{to:"/en/api/config-performance.html#performance-chunksplit"}},[e._v("performance.chunkSplit")]),e._v(" config, it will split common third-party libraries into chunks to make page loading faster.")],1),e._v(" "),t("h3",{attrs:{id:"extensible-plugin-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extensible-plugin-system"}},[e._v("#")]),e._v(" Extensible Plugin System")]),e._v(" "),t("p",[e._v("Provides rich configuration items and a flexible plugin system to support in-depth customization of all features.")]),e._v(" "),t("p",[e._v("All the building abilities of Builder are implemented through plugins:")]),e._v(" "),t("ul",[t("li",[e._v("Most of the plugins are lightweight, built in Builder, and can be enabled or disabled through configs.")]),e._v(" "),t("li",[e._v("Some plugins are more complex and developed as independent npm packages, which can be optionally installed and registered.")])]),e._v(" "),t("p",[e._v("Builder supports custom plugins, allowing framework developers to implement customized build abilities.")]),e._v(" "),t("h2",{attrs:{id:"npm-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-packages"}},[e._v("#")]),e._v(" npm packages")]),e._v(" "),t("p",[e._v("Below is the npm package published by Builder.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("Version")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Core package of Builder")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-webpack-provider"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Provides webpack build ability")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-plugin-esbuild"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("ESBuild Plugin")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-plugin-node-polyfill"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Node Polyfill Plugin")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-shared"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Shared modules of Builder")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-doc"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Documentation snippets of Builder")])])])]),e._v(" "),t("p",[e._v("You can view the source code of these packages in the "),t("a",{attrs:{href:"https://github.com/modern-js-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("packages/builder"),t("OutboundLink")],1),e._v(" directory of the modern.js repository.")]),e._v(" "),t("h2",{attrs:{id:"next-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-step"}},[e._v("#")]),e._v(" Next Step")]),e._v(" "),t("p",[e._v("You may want:")]),e._v(" "),t("NextSteps",[t("Step",{attrs:{href:"/guide/quick-start.html",title:"Quick Start",description:"Learn how to use Builder"}}),e._v(" "),t("Step",{attrs:{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}}),e._v(" "),t("Step",{attrs:{href:"/api",title:"API Reference",description:"View detailed API documentation"}})],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);