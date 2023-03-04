"use strict";(self.webpackChunkohmjs_org=self.webpackChunkohmjs_org||[]).push([[482],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={},l="Ohm Philosophy",m={unversionedId:"philosophy",id:"philosophy",title:"Ohm Philosophy",description:"One feature that distinguishes Ohm from OMeta and other parsing DSLs / frameworks is that Ohm completely separates grammars from semantic actions. In Ohm, a grammar defines a language, and semantic actions specify what to do with valid inputs in that language. The benefits of this separation of concerns include:",source:"@site/docs/philosophy.md",sourceDirName:".",slug:"/philosophy",permalink:"/docs/philosophy",editUrl:"https://github.com/harc/ohm/edit/main/doc/philosophy.md",tags:[],version:"current",frontMatter:{}},c={},u=[],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ohm-philosophy"},"Ohm Philosophy"),(0,i.kt)("p",null,"One feature that distinguishes Ohm from OMeta and other parsing DSLs / frameworks is that Ohm completely separates grammars from semantic actions. In Ohm, a grammar defines a language, and semantic actions specify what to do with valid inputs in that language. The benefits of this separation of concerns include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Improved readability"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Grammars are ",(0,i.kt)("em",{parentName:"li"},"pure"),", not cluttered with semantic actions."),(0,i.kt)("li",{parentName:"ul"},"The meaning of the semantic actions is also more obvious when they're seen in isolation, and not scattered throughout a grammar, amidst Kleene-","*","s and other control structures."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Better modularity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Grammars and semantic actions can be extended independently, using familiar object-oriented mechanisms."),(0,i.kt)("li",{parentName:"ul"},"The same grammar can be used with different semantic actions to (for instance) parse, syntax highlight, and compile programs. (In fact, Ohm lets you do all of these things without taking multiple passes over the input.)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Portability"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The same Ohm grammar can be used, without modification, with Ohm implementations that run on top of different languages, e.g., Ohm/JS and Ohm/Scheme. (Note that semantic actions are still language-dependent.)")))),(0,i.kt)("p",null,"Another interesting aspect of Ohm is that it applies semantic actions ",(0,i.kt)("em",{parentName:"p"},"lazily"),", i.e., a semantic action is only evaluated if and when its result is required. The benefits of laziness are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A more sensible programming model"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When writing semantic actions, programmers don't have to worry about backtracking. This is especially nice when you're writing side-effectful semantic actions."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Semantic actions (not the grammar!) control the evaluation of sub-expressions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Like the visitor design pattern, this enables programmers to specify what to do ",(0,i.kt)("em",{parentName:"li"},"before")," and ",(0,i.kt)("em",{parentName:"li"},"after")," the semantic actions of sub-epressions are evaluated."),(0,i.kt)("li",{parentName:"ul"},"Unlike visitors, laziness enables different semantic actions (i.e., different uses of the same grammar) to customize the order in which sub-expressions are evaluated to suit their own needs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Efficiency"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No semantic actions are evaluated if the input is invalid."),(0,i.kt)("li",{parentName:"ul"},"No semantic actions are evaluated for the failed branches of an alternation (",(0,i.kt)("inlineCode",{parentName:"li"},"|"),") expression, i.e., for anything that causes backtracking."),(0,i.kt)("li",{parentName:"ul"},"If a semantic action doesn't mention a particular sub-expression, that sub-expression's semantic actions will never be evaluated.")))))}h.isMDXComponent=!0}}]);