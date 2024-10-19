"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},i="Getting Started",l={unversionedId:"GettingStarted",id:"GettingStarted",title:"Getting Started",description:"Installing",source:"@site/docs/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/axis/docs/GettingStarted",draft:!1,editUrl:"https://github.com/Sebastian2852/axis/edit/master/docs/GettingStarted.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Axis",permalink:"/axis/docs/intro"}},s={},u=[{value:"Installing",id:"installing",level:2},{value:"Git submodule",id:"git-submodule",level:3},{value:"Package managers",id:"package-managers",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)("p",null,"It is recommended to use Axis as a git submodule."),(0,a.kt)("h3",{id:"git-submodule"},"Git submodule"),(0,a.kt)("p",null,"use the git submodule command to add Axis as a submodule to your game:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"git submodule add [GITHUB PATH] Submodules/Axis"),(0,a.kt)("br",{parentName:"p"}),"\n","Once you have it as a submodule, you can add it to your ",(0,a.kt)("inlineCode",{parentName:"p"},"default.project.json")," to let rojo sync. You can look at the included ",(0,a.kt)("inlineCode",{parentName:"p"},"default.project.json")," file to see what to add to your own project file. Make sure you also have all the dependencies installed (Everything in the ",(0,a.kt)("inlineCode",{parentName:"p"},"wally.toml")," file)."),(0,a.kt)("h3",{id:"package-managers"},"Package managers"),(0,a.kt)("p",null,"Currently Axis is not on any package managers. In the future I might add it to Wally but I dont know."))}p.isMDXComponent=!0}}]);