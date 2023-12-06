"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20984],{8575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(24246),o=t(71670),s=t(27915);const i={title:"Install proto"},l=void 0,a={id:"proto/install",title:"Install proto",description:"The following guide can be used to install proto into your environment.",source:"@site/docs/proto/install.mdx",sourceDirName:"proto",slug:"/proto/install",permalink:"/docs/proto/install",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/install.mdx",tags:[],version:"current",frontMatter:{title:"Install proto"},sidebar:"proto",previous:{title:"What is proto?",permalink:"/docs/proto/"},next:{title:"Version detection",permalink:"/docs/proto/detection"}},d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installing",id:"installing",level:2},{value:"Linux, macOS, WSL",id:"linux-macos-wsl",level:3},{value:"Windows",id:"windows",level:3},{value:"Other",id:"other",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstalling",id:"uninstalling",level:2},{value:"Canary releases",id:"canary-releases",level:2},{value:"Nightly releases",id:"nightly-releases",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{text:"1 min"}),"\n",(0,r.jsx)(n.p,{children:"The following guide can be used to install proto into your environment."}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Git >= 2.22"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing",children:"Installing"}),"\n",(0,r.jsxs)(n.p,{children:["The entirety of proto is packaged and shipped as a single binary. It works on ",(0,r.jsx)(n.em,{children:"most"})," operating\nsystems, and does not require any external dependencies. For convenience, we provide the following\nscripts to download and install proto."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The install location can be customized with the ",(0,r.jsx)(n.code,{children:"PROTO_INSTALL_DIR"})," environment variable."]})}),"\n",(0,r.jsx)(n.h3,{id:"linux-macos-wsl",children:"Linux, macOS, WSL"}),"\n",(0,r.jsx)(n.p,{children:"In a terminal that supports Bash, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl -fsSL https://moonrepo.dev/install/proto.sh | bash\n"})}),"\n",(0,r.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,r.jsxs)(n.p,{children:["In an ",(0,r.jsx)(n.em,{children:"administrator"})," Powershell or Windows Terminal, run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"irm https://moonrepo.dev/install/proto.ps1 | iex\n"})}),"\n",(0,r.jsx)(n.p,{children:"You'll also need to run the following command for shims to be executable:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Set-ExecutionPolicy RemoteSigned\n\n# Without admin privileges\nSet-ExecutionPolicy -Scope CurrentUser RemoteSigned\n"})}),"\n",(0,r.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(n.p,{children:["proto can also be downloaded and installed manually, by downloading an asset from\n",(0,r.jsx)(n.a,{href:"https://github.com/moonrepo/proto/releases",children:"https://github.com/moonrepo/proto/releases"}),". Be sure to\nrename the file after downloading, and apply the executable bit (",(0,r.jsx)(n.code,{children:"chmod +x"}),") on macOS and Linux."]}),"\n",(0,r.jsx)(n.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,r.jsxs)(n.p,{children:["To upgrade proto, run the ",(0,r.jsx)(n.a,{href:"./commands/upgrade",children:(0,r.jsx)(n.code,{children:"proto upgrade"})})," command, or re-run the install\nscripts above."]}),"\n",(0,r.jsx)(n.h2,{id:"uninstalling",children:"Uninstalling"}),"\n",(0,r.jsxs)(n.p,{children:["To uninstall proto, delete the ",(0,r.jsx)(n.code,{children:"~/.proto"})," directory, and remove any ",(0,r.jsx)(n.code,{children:"PROTO_HOME"})," references from\nyour shell profile."]}),"\n",(0,r.jsx)(n.h2,{id:"canary-releases",children:"Canary releases"}),"\n",(0,r.jsxs)(n.p,{children:["proto supports canary releases, which are built and published for every commit to our development\nbranches. These releases will include features and functionality that have not yet landed on master.\nCanary releases are available as a\n",(0,r.jsx)(n.a,{href:"https://github.com/moonrepo/proto/releases/tag/canary",children:"GitHub prerelease"})," using the ",(0,r.jsx)(n.code,{children:"canary"})," tag."]}),"\n",(0,r.jsx)(n.h2,{id:"nightly-releases",children:"Nightly releases"}),"\n",(0,r.jsxs)(n.p,{children:["proto supports nightly releases, which are built and published once a day from the latest commit on\nmaster. Nightly releases are available as a\n",(0,r.jsx)(n.a,{href:"https://github.com/moonrepo/proto/releases/tag/nightly",children:"GitHub prerelease"})," using the ",(0,r.jsx)(n.code,{children:"nightly"})," tag."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},27915:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(83469),o=t(9619),s=t(24246);function i(e){let{text:n}=e;return(0,s.jsx)(o.Z,{text:n,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9619:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(40624),o=t(31792),s=t(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:n,icon:t,text:l,variant:a}=e;return(0,s.jsxs)("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",a?i[a]:"bg-gray-100 text-gray-800",n),children:[t&&(0,s.jsx)(o.Z,{icon:t,className:"mr-1"}),l]})}},71670:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(27378);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);