"use strict";(self.webpackChunkohmjs_org=self.webpackChunkohmjs_org||[]).push([[467],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={},s="Ohm Extras",p={unversionedId:"extras",id:"extras",title:"Ohm Extras",description:"Ohm comes with a few extras that are not part of Ohm's core but are related to grammars and semantics created with Ohm.",source:"@site/docs/extras.md",sourceDirName:".",slug:"/extras",permalink:"/docs/extras",editUrl:"https://github.com/harc/ohm/edit/main/doc/extras.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"API Reference",permalink:"/docs/api-reference"},next:{title:"Ohm Errors",permalink:"/docs/errors"}},m={},c=[{value:"toAST(matchResult, mapping)",id:"toastmatchresult-mapping",level:2},{value:"General Assumptions",id:"general-assumptions",level:3},{value:"Configuration Using A Mapping",id:"configuration-using-a-mapping",level:3}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ohm-extras"},"Ohm Extras"),(0,o.kt)("p",null,"Ohm comes with a few extras that are not part of Ohm's core but are related to grammars and semantics created with Ohm.\nHere is how you can access those extras:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const extras = require('ohm-js/extras');\n// use something like extras.toAST(...);\n")),(0,o.kt)("p",null,"In the future, the extras may contain helper methods, semantics and operations that are useful for many grammars but are not always wanted or necessary and would otherwise e.g. pollute the actions of a grammar."),(0,o.kt)("h2",{id:"toastmatchresult-mapping"},"toAST(matchResult, ","[mapping]",")"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toAST()")," is a helper method that takes a successful MatchResult and an optional mapping to convert the concrete syntax tree (",(0,o.kt)("strong",{parentName:"p"},"CST"),") that Ohm creates when parsing input into an abstract syntax tree (",(0,o.kt)("strong",{parentName:"p"},"AST"),").\nTo do so, a generic operation is used that can be configure by the optional mapping."),(0,o.kt)("p",null,"The resulting AST is inspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/estree/estree"},"ECMAScript Tree")," format that is the output of popular JavaScript parsers like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ternjs/acorn"},"acorn")," or ",(0,o.kt)("a",{parentName:"p",href:"http://esprima.org/"},"esprima"),"."),(0,o.kt)("a",{name:"example"}),"**Example:**",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ohm = require('ohm-js');\nconst g = ohm.grammar(`\n    G {\n      Equation = AddExpr\n      AddExpr = number \"+\" number\n      number = digit+\n    }\n  `);\nconst match = g.match('24 +  6');\nconst toAST = require('ohm-js/extras').toAST;\nconst ast = toAST(match);\n")),(0,o.kt)("p",null,"will produce an AST like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  {\n    "type": "AddExpr",  // \'type\' automatically taken from the rule name\n    "0": "24",          // First part (position 0) matched by AddExpr rule\n    "2": "6"            // Third part (position 2) matched by AddExpr rule\n  }\n')),(0,o.kt)("p",null,"There are certain general assumptions for the CST-to-AST conversion. They are explained in the following section."),(0,o.kt)("h3",{id:"general-assumptions"},"General Assumptions"),(0,o.kt)("p",null,"By default:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Every node in an AST has a ",(0,o.kt)("strong",{parentName:"li"},"'type' property")," that is derived from the name of the matching rule (those rule names may consist of the original rule name and the case name (see ",(0,o.kt)("a",{parentName:"li",href:"/docs/syntax-reference#inline-rule-declarations"},"Inline Rule Declarations"),"))."),(0,o.kt)("li",{parentName:"ol"},"If a node's value is a ",(0,o.kt)("strong",{parentName:"li"},"concrete value"),", like the ",(0,o.kt)("inlineCode",{parentName:"li"},'"+"')," in the example above, it will be omitted in the AST (not if there different possibilities though)."),(0,o.kt)("li",{parentName:"ol"},"If a rule only has one child node, it is considered an ",(0,o.kt)("strong",{parentName:"li"},"intermediate node")," that does not add any value and is therefore omitted."),(0,o.kt)("li",{parentName:"ol"},"Possibly ",(0,o.kt)("strong",{parentName:"li"},"repetitive")," applications (",(0,o.kt)("inlineCode",{parentName:"li"},"*")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," operator, ",(0,o.kt)("inlineCode",{parentName:"li"},"ListOf"),") are represented as arrays of values, ",(0,o.kt)("strong",{parentName:"li"},"optional")," applications (",(0,o.kt)("inlineCode",{parentName:"li"},"?")," operator) are represented by their matched value or ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,o.kt)("li",{parentName:"ol"},"The built-in list rules (",(0,o.kt)("inlineCode",{parentName:"li"},"ListOf"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"listOf")," and friends) are represented as arrays of values, with the separators discarded.")),(0,o.kt)("p",null,"All those defaults can be changed by the optional second parameter - ",(0,o.kt)("em",{parentName:"p"},"mapping")," - handed to ",(0,o.kt)("inlineCode",{parentName:"p"},"toAST()"),"."),(0,o.kt)("h3",{id:"configuration-using-a-mapping"},"Configuration Using A Mapping"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"mapping")," parameter is a JavaScript object that consists of key-value pairs where the key is name of the rule (including the case name) that needs a custom translation from CST to AST and it's value one of the possibly values below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Customized Example (see ",(0,o.kt)("a",{parentName:"strong",href:"#example"},"Example"),"):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// create ohm, g, match and toAST\nconst ast = toAST(match, {\n  Equation: {content: 0},\n  AddExpr: {type: 'Expression', expr1: 0, op: 1, expr2: 2}\n});\n")),(0,o.kt)("p",null,"results in an AST like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  {\n    "type": "Equation",      // explicitly reintroduced node\n    "content": {             // "0" named "content"\n      "type": "Expression",  // rename type\n      "expr1": "24",         // "0" named "expr1"\n      "op": "+",             // explicitly reintroduced value\n      "expr2": "6"           // "2" named "expr2"\n    }\n  }\n')),(0,o.kt)("p",null,"The following mapping options are possible ",(0,o.kt)("strong",{parentName:"p"},"on the node-level")," (values in the key-value map):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"an object"),": A template for a node (see below: possible values ",(0,o.kt)("em",{parentName:"li"},"on the property-level"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a number"),": Does not create a node for the corresponding rule but forwards to the ",(0,o.kt)("em",{parentName:"li"},"number"),"-th children of the rule (node omission)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a function"),": A ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference#semantic-actions"},"semantic action")," for that rule that replaces the general ",(0,o.kt)("inlineCode",{parentName:"li"},"toAST()")," action for this case. To call the default action on a child node, ",(0,o.kt)("inlineCode",{parentName:"li"},"[child].toAST(this.args.mapping)")," can be called.")),(0,o.kt)("p",null,"Additionally, the following mapping options can be use ",(0,o.kt)("strong",{parentName:"p"},"on the property-level")," inside the node templates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a number"),": Inserts the children's value return by ",(0,o.kt)("inlineCode",{parentName:"li"},"toAST()")," as this property"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a string|a boolean|an object|null"),": Values that is used as-is for this property"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a function"),": A function similar to a ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference#semantic-actions"},"semantic action"),". Will only have one parameter that is a list of all the CST's child nodes. ",(0,o.kt)("inlineCode",{parentName:"li"},"[child].toAST(this.args.mapping)")," can be called to convert a single child.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," To use a primitive number as value for a property, the number has to be boxed, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"new Number(12)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Object(12)"),"."))}d.isMDXComponent=!0}}]);