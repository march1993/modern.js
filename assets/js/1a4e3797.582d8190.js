"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7920],{43468:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(49231),c=a(37608),r=a(37247),l=a(39950),s=a(95344),u=a(63682),o=a(2810);const m=function(){const e=(0,u.k6)(),t=(0,u.TH)(),{siteConfig:{baseUrl:a}}=(0,c.Z)();return{searchValue:o.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>a+"search?q="+encodeURIComponent(e)}};var h=a(56461),i=a(54084),d=a(98843),p=a(16766),_=a(74218),f=a(29058),E=a(40845);function g(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const w="searchQueryInput_zQE9",y="searchResultItem_ydXb",S="searchResultItemPath__j0X",b="searchResultItemSummary_ww84";var I=a(1717);function k(e){let{searchResult:{document:t,type:a,page:c,tokens:r,metadata:l}}=e;const u=0===a,o=2===a,m=(u?t.b:c.b).slice(),h=o?t.s:t.t;return u||m.push(c.t),n.createElement("article",{className:y},n.createElement("h2",null,n.createElement(s.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,d.C)(h,r):(0,p.o)(h,(0,_.m)(l,"t"),r,100)}})),m.length>0&&n.createElement("p",{className:S},(0,I.e)(m)),o&&n.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,p.o)(t.t,(0,_.m)(l,"t"),r,100)}}))}const v=function(){const{siteConfig:{baseUrl:e}}=(0,c.Z)(),{searchValue:t,updateSearchPath:a}=m(),[s,u]=(0,n.useState)(t),[o,d]=(0,n.useState)(),[p,_]=(0,n.useState)(),y=(0,n.useMemo)((()=>s?g(E.Iz.search_results_for,{keyword:s}):E.Iz.search_the_documentation),[s]);(0,n.useEffect)((()=>{a(s),o&&(s?o(s,(e=>{_(e)})):_(void 0))}),[s,o]);const S=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==s&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.w)(e);d((()=>(0,i.v)(t,a,100)))}()}),[e]),n.createElement(r.Z,null,n.createElement(l.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,y)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,y),n.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:S,value:s,autoComplete:"off",autoFocus:!0}),!o&&s&&n.createElement("div",null,n.createElement(f.Z,null)),p&&(p.length>0?n.createElement("p",null,g(1===p.length?E.Iz.count_documents_found:E.Iz.count_documents_found_plural,{count:p.length})):n.createElement("p",null,E.Iz.no_documents_were_found)),n.createElement("section",null,p&&p.map((e=>n.createElement(k,{key:e.document.i,searchResult:e}))))))}}}]);