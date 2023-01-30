"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5420],{9798:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7378),r=a(8944);const s="tabItem_wHwb";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},3337:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(5773),r=a(7378),s=a(8944),l=a(3457),o=a(5595),i=a(6457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(d(t),i(n))},g=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function d(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement(p,(0,n.Z)({},e,t)),r.createElement(d,(0,n.Z)({},e,t)))}function g(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5595:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(7378),r=a(5331),s=a(654),l=a(784),o=a(1819);function i(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const l=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=u(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,m]=p({queryString:a,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),h=(()=>{const e=d??g;return c({value:e,tabValues:s})?e:null})();(0,n.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),f(e)}),[m,f,s]),tabValues:s}}},6642:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7378),r=a(4267),s=a(9798),l=a(3337);function o(e,t,a){let n=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),a&&t&&!e.package&&(n+="-W "),n+=e.dep,n}function i(e,t){let a="pnpm add ";return e.dev?a+="--save-dev ":e.peer&&(a+="--save-peer "),e.package?a+=`--filter ${e.package} `:t&&(a+="-w "),a+=e.dep,a}function u(e){let t=o(e,!1,!0),a=i(e,!1);return e.package||(t+="\n\n# If using workspaces\n",a+="\n\n# If using workspaces\n",t+=o(e,!0,!0),a+=i(e,!0)),n.createElement(l.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},n.createElement(s.Z,{value:"yarn"},n.createElement(r.Z,{language:"shell"},o(e,!1,!1))),n.createElement(s.Z,{value:"yarn1"},n.createElement(r.Z,{language:"shell"},t)),n.createElement(s.Z,{value:"npm"},n.createElement(r.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),n.createElement(s.Z,{value:"pnpm"},n.createElement(r.Z,{language:"shell"},a)))}},2189:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7378),r=a(3469),s=a(1792);function l(e){let{to:t}=e;return n.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},n.createElement(s.Z,{icon:r.dT$}))}},1727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(5773),r=(a(7378),a(5318)),s=a(6642),l=a(2189);const o={title:"Jest example",sidebar_label:"Jest"},i=void 0,u={unversionedId:"guides/examples/jest",id:"guides/examples/jest",title:"Jest example",description:"In this guide, you'll learn how to integrate Jest into moon.",source:"@site/docs/guides/examples/jest.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/jest",permalink:"/docs/guides/examples/jest",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/jest.mdx",tags:[],version:"current",frontMatter:{title:"Jest example",sidebar_label:"Jest"},sidebar:"guides",previous:{title:"ESLint",permalink:"/docs/guides/examples/eslint"},next:{title:"Next.js",permalink:"/docs/guides/examples/next"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"Sharing",id:"sharing",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to test a single file or folder?",id:"how-to-test-a-single-file-or-folder",level:3},{value:"How to use <code>projects</code>?",id:"how-to-use-projects",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{to:"https://github.com/moonrepo/examples/blob/master/.moon/tasks/node.yml#L83",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," into moon."),(0,r.kt)("p",null,"Begin by installing ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," in your root. We suggest using the same version across the entire\nrepository."),(0,r.kt)(s.Z,{dep:"jest",dev:!0,mdxType:"AddDepsTabs"}),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Since testing is a universal workflow, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," task to\n",(0,r.kt)("a",{parentName:"p",href:"../../config/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/tasks/node.yml"))," with the following parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/node.yml"',title:'".moon/tasks/node.yml"'},"tasks:\n    test:\n        command:\n            - 'jest'\n            # Always run code coverage\n            - '--coverage'\n            # Dont fail if a project has no tests\n            - '--passWithNoTests'\n        inputs:\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Project configs, any format\n            - 'jest.config.*'\n")),(0,r.kt)("p",null,"Projects can extend this task and provide additional parameters if need be, for example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    test:\n        args:\n            # Disable caching for this project\n            - '--no-cache'\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"root-level"},"Root-level"),(0,r.kt)("p",null,"A root-level Jest config is not required and should be avoided, instead, use a ",(0,r.kt)("a",{parentName:"p",href:"#sharing"},"preset")," to\nshare configuration."),(0,r.kt)("h3",{id:"project-level"},"Project-level"),(0,r.kt)("p",null,"A project-level Jest config can be utilized by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.<js|ts|cjs|mjs>")," in the\nproject root. This is optional, but necessary when defining project specific settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/jest.config.js"',title:'"<project>/jest.config.js"'},"module.exports = {\n  // Project specific settings\n  testEnvironment: 'node',\n};\n")),(0,r.kt)("h3",{id:"sharing"},"Sharing"),(0,r.kt)("p",null,"To share configuration across projects, you can utilize Jest's built-in\n",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#preset-string"},(0,r.kt)("inlineCode",{parentName:"a"},"preset"))," functionality. If you're utilizing\npackage workspaces, create a local package with the following content, otherwise publish the npm\npackage for consumption."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/company-jest-preset/jest-preset.js"',title:'"packages/company-jest-preset/jest-preset.js"'},"module.exports = {\n  testEnvironment: 'jsdom',\n  watchman: true,\n};\n")),(0,r.kt)("p",null,"Within your project-level Jest config, you can extend the preset to inherit the settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/jest.config.js"',title:'"<project>/jest.config.js"'},"module.exports = {\n  preset: 'company-jest-preset',\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can take this a step further by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--preset")," option in the ",(0,r.kt)("a",{parentName:"p",href:"#setup"},"task above"),", so\nthat all projects inherit the preset by default.")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-to-test-a-single-file-or-folder"},"How to test a single file or folder?"),(0,r.kt)("p",null,"You can filter tests by passing a file name, folder name, glob, or regex pattern after ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),". Any\npassed files are relative from the project's root, regardless of where the ",(0,r.kt)("inlineCode",{parentName:"p"},"moon")," command is being\nran."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run <project>:test -- filename\n")),(0,r.kt)("h3",{id:"how-to-use-projects"},"How to use ",(0,r.kt)("inlineCode",{parentName:"h3"},"projects"),"?"),(0,r.kt)("p",null,"With moon, there's no reason to use\n",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#projects-arraystring--projectconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"projects"))," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\ntask is ran ",(0,r.kt)("em",{parentName:"p"},"per")," project. If you'd like to test multiple projects, use\n",(0,r.kt)("a",{parentName:"p",href:"../../commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run :test")),"."))}m.isMDXComponent=!0}}]);