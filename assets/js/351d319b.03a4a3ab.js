"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5084],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79022:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(27378),a=n(9619);function o(e){let{header:t,inline:n,updated:o,version:l}=e;return r.createElement(a.Z,{text:`v${l}`,variant:o?"success":"info",className:t?"absolute right-0 top-1.5":n?"inline-block":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),a=n(40624),o=n(31792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:c}=e;return r.createElement("span",{className:(0,a.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?l[c]:"bg-gray-100 text-gray-800",t)},n&&r.createElement(o.Z,{icon:n,className:"mr-1"}),i)}},36522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(25773),a=(n(27378),n(35318)),o=n(79022);const l={title:"action-graph"},i=void 0,c={unversionedId:"commands/action-graph",id:"commands/action-graph",title:"action-graph",description:"The moon action-graph [target] (or moon ag) command will generate and serve a visual graph of",source:"@site/docs/commands/action-graph.mdx",sourceDirName:"commands",slug:"/commands/action-graph",permalink:"/docs/commands/action-graph",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/action-graph.mdx",tags:[],version:"current",frontMatter:{title:"action-graph"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/commands/overview"},next:{title:"bin",permalink:"/docs/commands/bin"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Example output",id:"example-output",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"1.15.0",header:!0,mdxType:"VersionLabel"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"moon action-graph [target]")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"moon ag"),") command will generate and serve a visual graph of\nall actions and tasks within the workspace, known as the\n",(0,a.kt)("a",{parentName:"p",href:"../how-it-works/action-graph"},"action graph"),". In other tools, this is sometimes referred to as a\ndependency graph or task graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Run the visualizer locally\n$ moon action-graph\n\n# Export to DOT format\n$ moon action-graph --dot > graph.dot\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A target can be passed to focus the graph, including dependencies ",(0,a.kt)("em",{parentName:"p"},"and")," dependents. For example,\n",(0,a.kt)("inlineCode",{parentName:"p"},"moon action-graph app:build"),".")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[target]")," - Optional target to focus.")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--dot")," - Output the graph in DOT format.")),(0,a.kt)("h2",{id:"example-output"},"Example output"),(0,a.kt)("p",null,"The following output is an example of the graph in DOT format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dot"},'digraph {\n    0 [ label="SetupNodeTool" style=filled, shape=oval, fillcolor=black, fontcolor=white]\n    1 [ label="InstallNodeDeps" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    2 [ label="SyncNodeProject(node)" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    3 [ label="RunTask(node:standard)" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    1 -> 0 [ arrowhead=box, arrowtail=box]\n    2 -> 0 [ arrowhead=box, arrowtail=box]\n    3 -> 1 [ arrowhead=box, arrowtail=box]\n    3 -> 2 [ arrowhead=box, arrowtail=box]\n}\n')))}u.isMDXComponent=!0}}]);