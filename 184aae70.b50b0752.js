(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,g=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(g,l(l({ref:t},c),{},{components:n})):o.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/store-explorer-updated-430481ab45a7a12bdf16aab730f6c27f.png"},1152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mutations-view-updated-7276d604978d51cdc3235bd101de9d20.png"},194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(1142)),i={id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},l={unversionedId:"relay-debugging",id:"version-v10.0.0/relay-debugging",isDocsHomePage:!1,title:"Debugging",description:"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records.",source:"@site/versioned_docs/version-v10.0.0/Modern-Debugging.md",slug:"/relay-debugging",permalink:"/docs/v10.0.0/relay-debugging",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.0.0/Modern-Debugging.md",version:"v10.0.0",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1620153977,sidebar:"version-v10.0.0/docs",previous:{title:"Routing",permalink:"/docs/v10.0.0/routing"},next:{title:"GraphQL Server Specification",permalink:"/docs/v10.0.0/graphql-server-specification"}},s=[{value:"Strategies",id:"strategies",children:[]},{value:"Tools",id:"tools",children:[]}],c={toc:s};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records."),Object(a.b)("h2",{id:"strategies"},"Strategies"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Given:")," You've properly setup your schema on the backend and React on the frontend. You've read through the documents but can't seem to identify what's wrong with your code. You've even done a number of searches but can't find the answer you're looking for."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"A few questions to ask yourself:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Is my ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"./installation-and-setup#set-up-relay-compiler"}),"compilation")," up-to-date?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Is my query valid?")," You can test this on your GraphiQL endpoint.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"If so:")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Put your entire query at the top-level (your ",Object(a.b)("inlineCode",{parentName:"li"},"QueryRenderer"),") and comment out all fragment containers. Pass the data through your component hierarchy down to the components that were using fragments."),Object(a.b)("li",{parentName:"ol"},"If your app isn't rendering properly, use ",Object(a.b)("inlineCode",{parentName:"li"},"console.log(props);")," for every component to see the props you are actually passing."),Object(a.b)("li",{parentName:"ol"},"Once your app is rendering, uncomment the deepest fragment container and add that fragment back to your top-level query. Everything should still render. If not, use ",Object(a.b)("inlineCode",{parentName:"li"},"console.log(props);")," again."),Object(a.b)("li",{parentName:"ol"},"Continue uncommenting fragments and confirming that your app renders until your top-level query is as desired."),Object(a.b)("li",{parentName:"ol"},"If this still fails, come back to your code later and try debugging with a fresh mind. Additionally, you can ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/relay/issues/new"}),"post an issue")," and someone should get back to you hopefully within a few days.")),Object(a.b)("h2",{id:"tools"},"Tools"),Object(a.b)("p",null,"Relay DevTools is tool designed to help developers inspect their Relay state and understand how store changes overtime. Relay DevTools ships in two ways:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/relay-developer-tools/ncedobpgnmkhcmnnkcimnobpfepidadl"}),"Chrome Extension")," creates a Relay tab in the developer tools interface for debugging apps in Chrome")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Store Explorer",src:n(1151).default}),"\n",Object(a.b)("img",{alt:"Mutations View",src:n(1152).default})))}u.isMDXComponent=!0}}]);