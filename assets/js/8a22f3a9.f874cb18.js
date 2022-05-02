"use strict";(self.webpackChunkohmjs_org=self.webpackChunkohmjs_org||[]).push([[367],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return p}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=t.createContext({}),u=function(e){var r=t.useContext(m),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(m.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,g=s["".concat(m,".").concat(p)]||s[p]||d[p]||i;return n?t.createElement(g,o(o({ref:r},c),{},{components:n})):t.createElement(g,o({ref:r},c))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9764:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var t=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},m="Ohm Errors",u={unversionedId:"errors",id:"errors",title:"Ohm Errors",description:"Instantiating Grammars",source:"@site/docs/errors.md",sourceDirName:".",slug:"/errors",permalink:"/docs/errors",editUrl:"https://github.com/harc/ohm/edit/master/doc/errors.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Ohm Extras",permalink:"/docs/extras"},next:{title:"Using Ohm with TypeScript",permalink:"/docs/typescript"}},c={},d=[{value:"Instantiating Grammars",id:"instantiating-grammars",level:2},{value:"Grammar Syntax Error",id:"grammar-syntax-error",level:3},{value:"Undeclared Grammar",id:"undeclared-grammar",level:3},{value:"Duplicate Grammar Declaration",id:"duplicate-grammar-declaration",level:3},{value:"Undeclared Rule",id:"undeclared-rule",level:3},{value:"Cannot Override Undeclared Rule",id:"cannot-override-undeclared-rule",level:3},{value:"Cannot Extend Undeclared Rule",id:"cannot-extend-undeclared-rule",level:3},{value:"Duplicate Rule Declaration",id:"duplicate-rule-declaration",level:3}],s={toc:d};function p(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ohm-errors"},"Ohm Errors"),(0,i.kt)("h2",{id:"instantiating-grammars"},"Instantiating Grammars"),(0,i.kt)("p",null,"These errors can occur when ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cdglabs/ohm/blob/master/doc/api-reference.md#instantiating-grammars"},"instatiating a grammar"),"\nfrom a grammar definition."),(0,i.kt)("h3",{id:"grammar-syntax-error"},"Grammar Syntax Error"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Uncaught ohm.error.GrammarSyntaxError: Failed to parse grammar:\nLine 5, col 11:\n  4 | G {\n> 5 |   start = *x\n                ^\n  6 | }\nExpected "~", "&", "#", an identifier, "\\"", a number, "(", "[", "``", "{", "--", "|", or "}"\n')),(0,i.kt)("p",null,"Indicates that the grammar definition is not well-formed according to the syntax\nof the Ohm language. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-reference"},"syntax reference")," for more\ndetails."),(0,i.kt)("h3",{id:"undeclared-grammar"},"Undeclared Grammar"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Uncaught ohm.error.UndeclaredGrammar: Grammar Foo is not declared in namespace [object Object]\n")),(0,i.kt)("p",null,"Indicates that the grammar definition refers to another grammar by name, but\nthat name does not refer to a grammar that Ohm knows about. This can happen\nwhen you instantiate a grammar that inherits from another grammar. Possible\nfixes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you're defining multiple grammars, ensure that the supergrammar appears\nfirst in the grammar definition.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the supergrammar was defined elsewhere, you need to pass a namespace\nargument to the instantiation function (",(0,i.kt)("inlineCode",{parentName:"p"},"ohm.grammar()"),", etc.), and the\nnamespace must reference the supergrammar with the appropriate property\nname. E.g.:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const ns = {};\nns.G1 = ohm.grammar('G1 {}');\nconst g2 = ohm.grammar('G2 <: G1 {}', ns);\n")))),(0,i.kt)("h3",{id:"duplicate-grammar-declaration"},"Duplicate Grammar Declaration"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Uncaught ohm.error.DuplicateGrammarDeclaration: Grammar G is already declared in namespace [object Object]\n")),(0,i.kt)("p",null,"Occurs when a grammar definition defines a grammar with the same name\nas an existing grammar in the same namespace. Possible fixes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you're not accidentally instantiating the same grammar twice"),(0,i.kt)("li",{parentName:"ul"},"Instantiate the second grammar in a different namespace, or without\nusing a namespace.")),(0,i.kt)("h3",{id:"undeclared-rule"},"Undeclared Rule"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Uncaught ohm.error.UndeclaredRule: Rule lettr is not declared in grammar G\n")),(0,i.kt)("p",null,"Occurs when the body of a rule refers to a another rule that is not defined in\nthe grammar or in any of its supergrammars."),(0,i.kt)("h3",{id:"cannot-override-undeclared-rule"},"Cannot Override Undeclared Rule"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Uncaught ohm.error.CannotOverrideUndeclaredRule: Cannot override rule foo because it is not declared in BuiltInRules\n")),(0,i.kt)("p",null,"Occurs when a rule is being ",(0,i.kt)("em",{parentName:"p"},"overridden")," (using ",(0,i.kt)("inlineCode",{parentName:"p"},":="),"), but no rule with that name\nexists in the supergrammar. Learn more about defining, extending, and overriding\nrules in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-reference#defining-extending-and-overriding-rules"},"syntax reference"),"."),(0,i.kt)("h3",{id:"cannot-extend-undeclared-rule"},"Cannot Extend Undeclared Rule"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Uncaught ohm.error.CannotExtendUndeclaredRule: Cannot extend rule start foo it is not declared in BuiltInRules\n")),(0,i.kt)("p",null,"Occurs when a rule is being ",(0,i.kt)("em",{parentName:"p"},"extended")," (using ",(0,i.kt)("inlineCode",{parentName:"p"},"+="),"), but no rule with that name\nexists in the supergrammar. Learn more about defining, extending, and overriding\nrules in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-reference#defining-extending-and-overriding-rules"},"syntax reference"),"."),(0,i.kt)("h3",{id:"duplicate-rule-declaration"},"Duplicate Rule Declaration"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Uncaught ohm.error.DuplicateRuleDeclaration: Duplicate declaration for rule 'letter' in grammar 'G' (originally declared in grammar 'BuiltInRules')\n")),(0,i.kt)("p",null,"Occurs when a rule is being ",(0,i.kt)("em",{parentName:"p"},"defined")," (using ",(0,i.kt)("inlineCode",{parentName:"p"},"="),"), but a rule with that name\nalready exists in the grammar or supergrammar. If it exists in the supergrammar,\nyou can only override (",(0,i.kt)("inlineCode",{parentName:"p"},":="),") or extend (",(0,i.kt)("inlineCode",{parentName:"p"},"+="),") the rule. Learn more about\ndefining, extending, and overriding rules in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/syntax-reference#defining-extending-and-overriding-rules"},"syntax reference"),"."))}p.isMDXComponent=!0}}]);