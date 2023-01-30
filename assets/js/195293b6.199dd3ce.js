"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2484],{9798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),r=n(8944);const l="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(5773),r=n(7378),l=n(8944),i=n(3457),o=n(5595),s=n(6457);const p="tabList_J5MA",u="tabItem_l0OV";function c(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==o&&(d(t),s(a))},g=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(d,(0,a.Z)({},e,t)))}function g(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},5595:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(7378),r=n(5331),l=n(654),i=n(784),o=n(1819);function s(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,m]=c({queryString:n,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=d??g;return u({value:e,tabValues:l})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),h(e)}),[m,h,l]),tabValues:l}}},6642:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7378),r=n(4267),l=n(9798),i=n(3337);function o(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function p(e){let t=o(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=o(e,!0,!0),n+=s(e,!0)),a.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},o(e,!1,!1))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},t)),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},n)))}},7457:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7378),r=n(4267),l=n(9798),i=n(3337);function o(e,t,n){return`${e} create ${t} ${n.join(" ")}`.trim()}function s(e){let{dep:t,args:n=[]}=e;return a.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},o("yarn",t,n))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},o("yarn",t,n))),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},o("npm",t,n))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},o("pnpm",t,n))))}},2189:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),r=n(3469),l=n(1792);function i(e){let{to:t}=e;return a.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(l.Z,{icon:r.dT$}))}},8032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(5773),r=(n(7378),n(5318)),l=n(6642),i=(n(7457),n(2189));const o={title:"Astro example",sidebar_label:"Astro"},s=void 0,p={unversionedId:"guides/examples/astro",id:"guides/examples/astro",title:"Astro example",description:"In this guide, you'll learn how to integrate Astro.",source:"@site/docs/guides/examples/astro.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/astro",permalink:"/docs/guides/examples/astro",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/astro.mdx",tags:[],version:"current",frontMatter:{title:"Astro example",sidebar_label:"Astro"},sidebar:"guides",previous:{title:"Examples",permalink:"/docs/guides/node/examples"},next:{title:"ESLint",permalink:"/docs/guides/examples/eslint"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"Prettier integration",id:"prettier-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/astro-app",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,r.kt)("a",{parentName:"p",href:"https://docs.astro.build"},"Astro"),"."),(0,r.kt)("p",null,"Begin by creating a new Astro project in the root of an existing moon project (this should not be\ncreated in the workspace root, unless a polyrepo)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd apps && npm create astro@latest\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Since Astro is per-project, the associated moon tasks should be defined in each project's\n",(0,r.kt)("a",{parentName:"p",href:"../../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"fileGroups:\n    astro:\n        - 'src/**/*'\n        - 'astro.config.*'\n\ntasks:\n    astro:\n        command: 'astro'\n        local: true\n\n    # Development server\n    dev:\n        command: 'astro dev'\n        local: true\n\n    # Production build\n    build:\n        command: 'astro build'\n        inputs:\n            - '@group(astro)'\n        outputs:\n            - 'dist'\n\n    # Check .astro files\n    check:\n        command: 'astro check'\n        inputs:\n            - '@group(astro)'\n        deps:\n            - '~:typecheck'\n\n    # Preview production build locally\n    preview:\n        command: 'astro preview'\n        deps:\n            - '~:build'\n        local: true\n\ntoolchain:\n    # Disable project references\n    typescript: false\n")),(0,r.kt)("h3",{id:"eslint-integration"},"ESLint integration"),(0,r.kt)("p",null,"When using a ",(0,r.kt)("a",{parentName:"p",href:"./eslint"},(0,r.kt)("inlineCode",{parentName:"a"},"lint"))," task, the\n",(0,r.kt)("a",{parentName:"p",href:"https://ota-meshi.github.io/eslint-plugin-astro/user-guide/"},(0,r.kt)("inlineCode",{parentName:"a"},"eslint-plugin-astro"))," package must be\ninstalled to lint ",(0,r.kt)("inlineCode",{parentName:"p"},".astro")," files."),(0,r.kt)(l.Z,{dev:!0,dep:"eslint-plugin-astro",package:"<app>",mdxType:"AddDepsTabs"}),(0,r.kt)("p",null,"Once the dependency has been installed in the application's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". We can then enable this\nconfiguration by creating an ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file in the project root. Be sure this file is listed in\nyour lint task's inputs!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/.eslintrc.js"',title:'"<project>/.eslintrc.js"'},"module.exports = {\n  extends: ['plugin:astro/recommended'],\n  overrides: [\n    {\n      files: ['*.astro'],\n      parser: 'astro-eslint-parser',\n      // If using TypeScript\n      parserOptions: {\n        parser: '@typescript-eslint/parser',\n        extraFileExtensions: ['.astro'],\n        project: 'tsconfig.json',\n        tsconfigRootDir: __dirname,\n      },\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"And lastly, when linting through moon's command line, you'll need to include the ",(0,r.kt)("inlineCode",{parentName:"p"},".astro")," extension\nwithin the ",(0,r.kt)("inlineCode",{parentName:"p"},"lint")," task. This can be done by extending the top-level task within the project (below),\nor by adding it to the top-level entirely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    lint:\n        args:\n            - '--ext'\n            - '.ts,.tsx,.astro'\n")),(0,r.kt)("h3",{id:"prettier-integration"},"Prettier integration"),(0,r.kt)("p",null,"When using a ",(0,r.kt)("a",{parentName:"p",href:"./prettier"},(0,r.kt)("inlineCode",{parentName:"a"},"format"))," task, the ",(0,r.kt)("inlineCode",{parentName:"p"},"prettier-plugin-astro")," package must be installed to\nformat ",(0,r.kt)("inlineCode",{parentName:"p"},".astro")," files. View the official\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.astro.build/en/editor-setup/#prettier"},"Astro docs")," for more information."),(0,r.kt)(l.Z,{dev:!0,dep:"prettier-plugin-astro",package:"<app>",mdxType:"AddDepsTabs"}),(0,r.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,r.kt)("p",null,"Since Astro utilizes custom ",(0,r.kt)("inlineCode",{parentName:"p"},".astro")," files, it requires a specialized TypeScript integration, and\nluckily Astro provides an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.astro.build/en/guides/typescript/"},"in-depth guide"),". With\nthat being said, we do have a few requirements and pointers!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the official ",(0,r.kt)("a",{parentName:"li",href:"https://docs.astro.build/en/guides/typescript/#setup"},"Astro ",(0,r.kt)("inlineCode",{parentName:"a"},"tsconfig.json"))," as\na basis."),(0,r.kt)("li",{parentName:"ul"},"From our internal testing, the ",(0,r.kt)("inlineCode",{parentName:"li"},"astro check")," command (that typechecks ",(0,r.kt)("inlineCode",{parentName:"li"},".astro")," files) ",(0,r.kt)("em",{parentName:"li"},"does not\nsupport project references"),". If the ",(0,r.kt)("inlineCode",{parentName:"li"},"composite")," compiler option is enabled, the checker will fail\nto find ",(0,r.kt)("inlineCode",{parentName:"li"},".astro")," files. To work around this, we disable ",(0,r.kt)("inlineCode",{parentName:"li"},"workspace.typescript")," in our moon config\nabove."),(0,r.kt)("li",{parentName:"ul"},"Since typechecking requires 2 commands, one for ",(0,r.kt)("inlineCode",{parentName:"li"},".astro")," files, and the other for ",(0,r.kt)("inlineCode",{parentName:"li"},".ts"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tsx"),"\nfiles, we've added the ",(0,r.kt)("a",{parentName:"li",href:"./typescript"},(0,r.kt)("inlineCode",{parentName:"a"},"typecheck"))," task as a dependency for the ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," task. This\nwill run both commands through a single task!")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"root-level"},"Root-level"),(0,r.kt)("p",null,"We suggest ",(0,r.kt)("em",{parentName:"p"},"against")," root-level configuration, as Astro should be installed per-project, and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"astro")," command expects the configuration to live relative to the project root."),(0,r.kt)("h3",{id:"project-level"},"Project-level"),(0,r.kt)("p",null,"When creating a new Astro project, a\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.astro.build/en/reference/configuration-reference/"},(0,r.kt)("inlineCode",{parentName:"a"},"astro.config.mjs"))," is created, and\n",(0,r.kt)("em",{parentName:"p"},"must")," exist in the project root. This allows each project to configure Astro for their needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/astro.config.mjs"',title:'"<project>/astro.config.mjs"'},"import { defineConfig } from 'astro/config';\n\n// https://astro.build/config\nexport default defineConfig({});\n")))}m.isMDXComponent=!0}}]);