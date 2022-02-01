"use strict";(self.webpackChunkohmjs_org=self.webpackChunkohmjs_org||[]).push([[429],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s="Contributing to Ohm",u={unversionedId:"contributor-guide",id:"contributor-guide",title:"Contributing to Ohm",description:"Interested in contributing to Ohm? Great! Here are some tips to help you get",source:"@site/docs/contributor-guide.md",sourceDirName:".",slug:"/contributor-guide",permalink:"/docs/contributor-guide",editUrl:"https://github.com/harc/ohm/edit/master/doc/contributor-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Publishing Grammars",permalink:"/docs/publishing-grammars"},next:{title:"Ohm v16.0",permalink:"/docs/releases/ohm-js-16.0"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Basic Setup",id:"basic-setup",children:[],level:3},{value:"Useful Scripts",id:"useful-scripts",children:[],level:3}],level:2},{value:"Doing Development",id:"doing-development",children:[{value:"Pre-commit Checks",id:"pre-commit-checks",children:[],level:3}],level:2},{value:"Publishing",id:"publishing",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-ohm"},"Contributing to Ohm"),(0,o.kt)("p",null,"Interested in contributing to Ohm? Great! Here are some tips to help you get\nstarted."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To develop Ohm, you'll need a recent version of ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js"),"."),(0,o.kt)("h3",{id:"basic-setup"},"Basic Setup"),(0,o.kt)("p",null,"First, clone the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/cdglabs/ohm.git\n")),(0,o.kt)("p",null,"Then, install the dev dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ohm\nnpm install\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: the ",(0,o.kt)("inlineCode",{parentName:"em"},"postinstall")," script (which is automatically run by ",(0,o.kt)("inlineCode",{parentName:"em"},"npm install"),")\nwill install a git pre-commit hook. See ",(0,o.kt)("a",{parentName:"em",href:"#pre-commit-checks"},"here")," for more\ninformation.")),(0,o.kt)("h3",{id:"useful-scripts"},"Useful Scripts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"npm test")," to run the unit tests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm run test-watch")," re-runs the unit tests every time a file changes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," builds dist/ohm.js` and dist/ohm.min.js.\nwhich are stand-alone bundles that can be included in a webpage."),(0,o.kt)("li",{parentName:"ul"},"When editing Ohm's own grammar (in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/ohm-grammar.ohm"),"), run\n",(0,o.kt)("inlineCode",{parentName:"li"},"npm run bootstrap")," to re-build Ohm and test your changes.")),(0,o.kt)("h2",{id:"doing-development"},"Doing Development"),(0,o.kt)("p",null,"See our recommended ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cdglabs/ohm/wiki/Git-Workflow"},"Git workflow"),"."),(0,o.kt)("h3",{id:"pre-commit-checks"},"Pre-commit Checks"),(0,o.kt)("p",null,"When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," in an Ohm checkout, it will automatically install\na pre-commit hook into ",(0,o.kt)("inlineCode",{parentName:"p"},".git/hooks/pre-commit"),". Every time you commit to the\nrepository, the pre-commit script checks that all tests pass, and that the\ncode passes a lint check. We use ",(0,o.kt)("a",{parentName:"p",href:"http://eslint.org/"},"ESLint"),", which helps\nprevent many common programming errors, and ensures that the code follows a\nconsistent style."),(0,o.kt)("p",null,"Usually, you should deal with a lint error by fixing the code so that ESLint\nno longer complains about it. However, there are a few cases where it makes\nsense to disable the error:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you added new ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," statement, and ",(0,o.kt)("strong",{parentName:"p"},"you are sure that it is\nactual useful"),", you can disable the warning like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"console.log('a useful message');  // eslint-disable-line no-console\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you need to introduce a global variable (are you sure?), see the ESLint\ndocumentation on ",(0,o.kt)("a",{parentName:"p",href:"http://eslint.org/docs/user-guide/configuring#specifying-globals"},"specifying globals"),"."))),(0,o.kt)("p",null,"If you need to temporarily commit something that doesn't pass the checks, you\ncan use ",(0,o.kt)("inlineCode",{parentName:"p"},"git commit --no-verify")," -- but use this sparingly!"),(0,o.kt)("h2",{id:"publishing"},"Publishing"),(0,o.kt)("p",null,"To version and publish the ohm-js package, run the following in the ohm-js directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn version-package\nyarn publish\ngit push && git push --tags\n")))}m.isMDXComponent=!0}}]);