"use strict";(self.webpackChunkohmjs_org=self.webpackChunkohmjs_org||[]).push([[315],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7192:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],p={},o="Syntax Reference",s={unversionedId:"syntax-reference",id:"syntax-reference",title:"Syntax Reference",description:"This document describes the syntax of the Ohm language, which is a variant of parsing expression grammars (PEGs). If you have experience with PEGs, the Ohm syntax will mostly look familiar, but there are a few important differences to note:",source:"@site/docs/syntax-reference.md",sourceDirName:".",slug:"/syntax-reference",permalink:"/docs/syntax-reference",editUrl:"https://github.com/harc/ohm/edit/master/doc/syntax-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"API Reference",permalink:"/docs/api-reference"}},m=[{value:"Terminology",id:"terminology",children:[],level:2},{value:"Parsing Expressions",id:"parsing-expressions",children:[{value:"Terminals",id:"terminals",children:[{value:"Special characters",id:"special-characters",children:[],level:4}],level:3},{value:"Terminal Range",id:"terminal-range",children:[],level:3},{value:"Rule Application",id:"rule-application",children:[],level:3},{value:"Repetition operators: *, +, ?",id:"repetition-operators---",children:[],level:3},{value:"Sequence",id:"sequence",children:[],level:3},{value:"Alternation",id:"alternation",children:[],level:3},{value:"Lookahead: &amp;",id:"lookahead-",children:[],level:3},{value:"Negative Lookahead: ~",id:"negative-lookahead-",children:[],level:3},{value:"Lexification: <span>#</span>",id:"lexification-",children:[],level:3},{value:"Comment",id:"comment",children:[],level:3}],level:2},{value:"Built-in Rules",id:"built-in-rules",children:[],level:2},{value:"Grammar Syntax",id:"grammar-syntax",children:[{value:"Grammar Inheritance",id:"grammar-inheritance",children:[],level:3},{value:"Defining, Extending, and Overriding Rules",id:"defining-extending-and-overriding-rules",children:[{value:"Parameterized Rules",id:"parameterized-rules",children:[],level:4},{value:"Rule Descriptions",id:"rule-descriptions",children:[],level:4},{value:"Inline Rule Declarations",id:"inline-rule-declarations",children:[],level:4},{value:"How space skipping works",id:"how-space-skipping-works",children:[],level:4}],level:3}],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"syntax-reference"},"Syntax Reference"),(0,r.kt)("p",null,"This document describes the syntax of the ",(0,r.kt)("em",{parentName:"p"},"Ohm language"),", which is a variant of parsing expression grammars (PEGs). If you have experience with PEGs, the Ohm syntax will mostly look familiar, but there are a few important differences to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When naming rules, ",(0,r.kt)("strong",{parentName:"li"},"case matters"),": whitespace is implicitly skipped inside a rule application if the rule name begins with an uppercase letter. For further information, see ",(0,r.kt)("a",{parentName:"li",href:"#syntactic-lexical"},"Syntactic vs. Lexical Rules"),"."),(0,r.kt)("li",{parentName:"ul"},"Grammars are purely about recognition: they do not contain semantic actions (those are defined separately) or bindings. The separation of semantic actions is one of the defining features of Ohm -- we believe that it improves modularity and makes both grammars and semantics easier to understand."),(0,r.kt)("li",{parentName:"ul"},"Alternation expressions support ",(0,r.kt)("em",{parentName:"li"},"case names"),", which are used in ",(0,r.kt)("a",{parentName:"li",href:"#inline-rules"},"inline rule declarations"),". This makes semantic actions for alternation expressions simpler and less error-prone."),(0,r.kt)("li",{parentName:"ul"},"Ohm does not (yet) support semantic predicates.")),(0,r.kt)("p",null,"Ohm is closely related to ",(0,r.kt)("a",{parentName:"p",href:"http://tinlizzie.org/ometa/"},"OMeta"),", another PEG-based language for parsing and pattern matching. Like OMeta, Ohm supports a few features not supported by many PEG parsing frameworks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rule-application"},"Rule applications")," can accept parameters. This makes it possible to write higher-order rules, such as the built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"ListOf")," rule."),(0,r.kt)("li",{parentName:"ul"},"Grammars can be extended in an object-oriented way -- see ",(0,r.kt)("a",{parentName:"li",href:"#defining-extending-and-overriding-rules"},"Defining, Extending, and Overriding Rules"),".")),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Arithmetic {\n  Expr = "1 + 1"\n}\n')),(0,r.kt)("p",null,'This is a grammar named "Arithmetic", which has a single rule named "Expr". The right hand side of ',(0,r.kt)("em",{parentName:"p"},"Expr"),' is known as a "rule body". A rule body may be any valid ',(0,r.kt)("em",{parentName:"p"},"parsing expression"),"."),(0,r.kt)("h2",{id:"parsing-expressions"},"Parsing Expressions"),(0,r.kt)("p",null,"Here is a full list of the different kinds of parsing expressions supported by Ohm:"),(0,r.kt)("h3",{id:"terminals"},"Terminals"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"hello there"\n')),(0,r.kt)("p",null,"Matches exactly the characters contained inside the quotation marks."),(0,r.kt)("h4",{id:"special-characters"},"Special characters"),(0,r.kt)("p",null,"Special characters (",(0,r.kt)("inlineCode",{parentName:"p"},'"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),") can be escaped with a backslash \u2014 e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\""')," will match a literal quote character in the input stream. Other valid escape sequences include: ",(0,r.kt)("inlineCode",{parentName:"p"},"\\b")," (backspace), ",(0,r.kt)("inlineCode",{parentName:"p"},"\\f")," (form feed), ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," (line feed), ",(0,r.kt)("inlineCode",{parentName:"p"},"\\r")," (carriage return), and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t")," (tab), as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"\\x")," followed by 2 hex digits and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\u")," followed by 4 hex digits, for matching characters by code point."),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"\\u{",(0,r.kt)("i",null,"hexDigits"),"}")," escape sequence can be used to represent ",(0,r.kt)("em",{parentName:"p"},"any")," Unicode code point, including code points above ",(0,r.kt)("inlineCode",{parentName:"p"},"0xFFFF"),". E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\u{1F639}"')," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"'\ud83d\ude39'"),". (",(0,r.kt)("em",{parentName:"p"},"New in Ohm v16.3.0."),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," For grammars defined in a JavaScript string literal (i.e., not in a separate .ohm file), it's recommended to use a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw"},"template literal with the String.raw tag"),". Without ",(0,r.kt)("inlineCode",{parentName:"p"},"String.raw"),", you'll need to use double-escaping \u2014 e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\n")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"."),(0,r.kt)("h3",{id:"terminal-range"},"Terminal Range"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"start"),"..",(0,r.kt)("i",null,"end"))),(0,r.kt)("p",null,"Matches exactly one code point whose value is between ",(0,r.kt)("em",{parentName:"p"},"start")," and ",(0,r.kt)("em",{parentName:"p"},"end")," (inclusive). E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"a".."c"')," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"'a'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'b'"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"'c'"),". Note: ",(0,r.kt)("em",{parentName:"p"},"start")," and ",(0,r.kt)("em",{parentName:"p"},"end")," must be ",(0,r.kt)("a",{parentName:"p",href:"#terminals"},"Terminal")," expressions containing a single character or code point. (",(0,r.kt)("em",{parentName:"p"},"Note:")," Prior to Ohm v16.3.0, terminal ranges only supported code points up ",(0,r.kt)("inlineCode",{parentName:"p"},"0xFFFF"),". As of v16.3.0, higher code points can be specified directly (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"\ud83d\ude07".."\ud83d\ude08"'),") or with an escape code (",(0,r.kt)("inlineCode",{parentName:"p"},'"\\u{1F607}".."\\u{1F608}"'),")."),(0,r.kt)("h3",{id:"rule-application"},"Rule Application"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"ruleName"))),(0,r.kt)("p",null,"Matches the body of the rule named ",(0,r.kt)("em",{parentName:"p"},"ruleName"),". For example, the built-in rule ",(0,r.kt)("inlineCode",{parentName:"p"},"letter")," will parse a string of length 1 that is a letter."),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"ruleName"),"<",(0,r.kt)("i",null,"expr"),">")),(0,r.kt)("p",null,"Matches the body of the ",(0,r.kt)("em",{parentName:"p"},"parameterized rule")," named ",(0,r.kt)("em",{parentName:"p"},"ruleName"),", substituting the parsing expression ",(0,r.kt)("em",{parentName:"p"},"expr")," as its first parameter. For parameterized rules with more than one parameter, the parameters are comma-separated, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'ListOf<field, ";">'),"."),(0,r.kt)("h3",{id:"repetition-operators---"},"Repetition operators: ","*",", +, ?"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"expr")," *")),(0,r.kt)("p",null,"Matches the expression ",(0,r.kt)("em",{parentName:"p"},"expr")," repeated 0 or more times. E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"a"*')," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"''"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'a'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'aa'"),", ..."),(0,r.kt)("p",null,"Inside a ",(0,r.kt)("em",{parentName:"p"},"syntactic rule")," -- any rule whose name begins with an upper-case letter -- spaces before a match are automatically skipped. E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"a"*')," will match ",(0,r.kt)("inlineCode",{parentName:"p"},'" a a"')," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},'"aa"'),". See the documentation on ",(0,r.kt)("a",{parentName:"p",href:"#syntactic-lexical"},"syntactic and lexical rules")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"expr")," +")),(0,r.kt)("p",null,"Matches the expression ",(0,r.kt)("em",{parentName:"p"},"expr")," repeated 1 or more times. E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"letter+")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"'x'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'xA'"),", ..."),(0,r.kt)("p",null,"As with the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," operator, spaces are skipped when used in a ",(0,r.kt)("a",{parentName:"p",href:"#syntactic-lexical"},"syntactic rule"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"expr")," ?")),(0,r.kt)("p",null,"Tries to match the expression ",(0,r.kt)("em",{parentName:"p"},"expr"),", succeeding whether it matches or not. No input is consumed if it does not match."),(0,r.kt)("h3",{id:"sequence"},"Sequence"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"expr1")," ",(0,r.kt)("i",null,"expr2"))),(0,r.kt)("p",null,"Matches the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"expr1")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"expr2"),". E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"grade" letter')," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"'gradeA'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'gradeB'"),", ..."),(0,r.kt)("p",null,"As with the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operators, spaces are skipped when used in a ",(0,r.kt)("a",{parentName:"p",href:"#syntactic-lexical"},"syntactic rule"),". E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"grade" letter')," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"' grade A'")," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"'gradeA'"),"."),(0,r.kt)("h3",{id:"alternation"},"Alternation"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"expr1")," | ",(0,r.kt)("i",null,"expr2"))),(0,r.kt)("p",null,"Matches the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"expr1"),", and if that does not succeed, matches the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"expr2"),". E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"letter | digit")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"'a'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'9'"),", ..."),(0,r.kt)("h3",{id:"lookahead-"},"Lookahead: &"),(0,r.kt)("pre",null,(0,r.kt)("code",null,"& ",(0,r.kt)("i",null,"expr"))),(0,r.kt)("p",null,"Succeeds if the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"expr")," can be matched, but does not consume anything from the input stream. Usually used as part of a sequence, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"letter &digit")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"'a9'"),", but only consume 'a'. ",(0,r.kt)("inlineCode",{parentName:"p"},'&"a" letter+')," will match any string of letters that begins with 'a'."),(0,r.kt)("h3",{id:"negative-lookahead-"},"Negative Lookahead: ~"),(0,r.kt)("pre",null,(0,r.kt)("code",null,"~ ",(0,r.kt)("i",null,"expr"))),(0,r.kt)("p",null,"Succeeds if the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"expr")," cannot be matched, and does not consume anything from the input stream. Usually used as part of a sequence, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'~"\\n" any')," will consume any single character that is not a new line character."),(0,r.kt)("h3",{id:"lexification-"},"Lexification: ",(0,r.kt)("span",null,"#")),(0,r.kt)("pre",null,(0,r.kt)("code",null,"# ",(0,r.kt)("i",null,"expr"))),(0,r.kt)("p",null,"Matches ",(0,r.kt)("em",{parentName:"p"},"expr")," as if in a lexical context. This can be used to prevent whitespace skipping before an expression that appears in the body of a syntactic rule. For further information, see ",(0,r.kt)("a",{parentName:"p",href:"#syntactic-lexical"},"Syntactic vs. Lexical Rules"),"."),(0,r.kt)("h3",{id:"comment"},"Comment"),(0,r.kt)("p",null,"Inside an Ohm grammar, you can use both single-line (",(0,r.kt)("inlineCode",{parentName:"p"},"//"),") comments like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'booleanLiteral = ("true" | "false") // TODO: Should we support "True"/"False" as well?\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// For semantics on how decimal literals are constructed, see section 7.8.3\n")),(0,r.kt)("p",null,"as well as multiline (",(0,r.kt)("inlineCode",{parentName:"p"},"/* */"),") comments like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/*\n  Note: Punctuator and DivPunctuator (see https://es5.github.io/x7.html#x7.7) are\n  not currently used by this grammar.\n*/\n")),(0,r.kt)("h2",{id:"built-in-rules"},"Built-in Rules"),(0,r.kt)("p",null,"(See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harc/ohm/blob/master/packages/ohm-js/src/built-in-rules.ohm"},"built-in-rules.ohm"),".)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any"),": Matches the next character in the input stream, if one exists."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"letter"),": Matches a single character which is a letter (either uppercase or lowercase)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lower"),": Matches a single lowercase letter."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"upper"),": Matches a single uppercase letter."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"digit"),": Matches a single character which is a digit from 0 to 9."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hexDigit"),": Matches a single character which is a either digit or a letter from A-F."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alnum"),": Matches a single letter or digit; equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"letter | digit"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"space"),": Matches a single whitespace character (e.g., space, tab, newline, etc.)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"end"),": Matches the end of the input stream. Equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"~any"),"."),(0,r.kt)("code",null,"caseInsensitive<",(0,r.kt)("i",null,"terminal"),">"),": Matches _terminal_, but ignoring any differences in casing (based on the simple, single-character Unicode case mappings). E.g., `caseInsensitive","<",'"ohm"',">","` will match `'Ohm'`, `'OHM'`, etc.",(0,r.kt)("code",null,"ListOf<",(0,r.kt)("i",null,"elem"),", ",(0,r.kt)("i",null,"sep"),">"),": Matches the expression _elem_ zero or more times, separated by something that matches the expression _sep_. E.g., `ListOf","<",'letter, ","',">","` will match `''`, `'a'`, and `'a, b, c'`.",(0,r.kt)("code",null,"NonemptyListOf<",(0,r.kt)("i",null,"elem"),", ",(0,r.kt)("i",null,"sep"),">"),": Like `ListOf`, but matches _elem_ at least one time.",(0,r.kt)("code",null,"listOf<",(0,r.kt)("i",null,"elem"),", ",(0,r.kt)("i",null,"sep"),">"),": Similar to `ListOf","<","elem, sep",">","` but interpreted as [lexical rule](#syntactic-lexical).",(0,r.kt)("code",{id:"applySyntactic"},"applySyntactic<",(0,r.kt)("i",null,"ruleName"),">"),": Allows the syntactic rule _ruleName_ to be applied in a lexical context, which is otherwise not allowed. Spaces are skipped _before_ and _after_ the rule application. _New in Ohm v16.1.0._",(0,r.kt)("h2",{id:"grammar-syntax"},"Grammar Syntax"),(0,r.kt)("h3",{id:"grammar-inheritance"},"Grammar Inheritance"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"grammarName")," <: ",(0,r.kt)("i",null,"supergrammarName")," ","{"," ... ","}")),(0,r.kt)("p",null,"Declares a grammar named ",(0,r.kt)("inlineCode",{parentName:"p"},"grammarName")," which inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"supergrammarName"),"."),(0,r.kt)("h3",{id:"defining-extending-and-overriding-rules"},"Defining, Extending, and Overriding Rules"),(0,r.kt)("p",null,"In the three forms below, the rule body may optionally begin with a ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," character, which will be\nignored. Also note that in rule names, ",(0,r.kt)("a",{parentName:"p",href:"#syntactic-lexical"},(0,r.kt)("strong",{parentName:"a"},"case is significant")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"ruleName")," = ",(0,r.kt)("i",null,"expr"))),(0,r.kt)("p",null,"Defines a new rule named ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleName")," in the grammar, with the parsing expression ",(0,r.kt)("inlineCode",{parentName:"p"},"expr")," as the rule body. Throws an error if a rule with that name already exists in the grammar or one of its supergrammars."),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"ruleName")," := ",(0,r.kt)("i",null,"expr"))),(0,r.kt)("p",null,"Defines a rule named ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleName"),", overriding a rule of the same name in a supergrammar. Throws an error if no rule with that name exists in a supergrammar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New in 15.3.0:")," The ",(0,r.kt)("em",{parentName:"p"},"super-splice")," operator (",(0,r.kt)("inlineCode",{parentName:"p"},"..."),") can be used to append and/or prepend cases to the supergrammar rule body. E.g., if the supergrammar defines ",(0,r.kt)("inlineCode",{parentName:"p"},"comment = multiLineComment"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"comment := ... | singleLineComment")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"comment := multiLineComment | singleLineComment"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"ruleName")," += ",(0,r.kt)("i",null,"expr"))),(0,r.kt)("p",null,"Extends a supergrammar rule named ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleName"),", throwing an error if no rule with that name exists in a supergrammar. The rule body will effectively be ",(0,r.kt)("code",null,(0,r.kt)("i",null,"expr")," | ",(0,r.kt)("i",null,"oldBody")),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"oldBody")," is the rule body as defined in the supergrammar."),(0,r.kt)("p",null,"Note that as of v15.3.0, the super-splice operator (",(0,r.kt)("inlineCode",{parentName:"p"},"..."),") offers a more general form of rule extension. E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'keyword += "def"')," can also be written ",(0,r.kt)("inlineCode",{parentName:"p"},'keyword := "def" | ...'),"."),(0,r.kt)("h4",{id:"parameterized-rules"},"Parameterized Rules"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"ruleName"),"<",(0,r.kt)("i",null,"arg1"),", ..., ",(0,r.kt)("i",null,"argN"),"> = ",(0,r.kt)("i",null,"expr"))),(0,r.kt)("p",null,"Defines a new rule named ",(0,r.kt)("inlineCode",{parentName:"p"},"ruleName")," which has ",(0,r.kt)("em",{parentName:"p"},"n")," parameters. In the rule body ",(0,r.kt)("em",{parentName:"p"},"expr"),", the parameter names (e.g. ",(0,r.kt)("em",{parentName:"p"},"arg1"),") may be used as rule applications. E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Repeat<x> = x x"),"."),(0,r.kt)("h4",{id:"rule-descriptions"},"Rule Descriptions"),(0,r.kt)("p",null,'Rule declarations may optionally have a description, which is a parenthesized "comment" following the name of the rule in its declaration. Rule descriptions are used to produce better error messages for end users of a language when input is not recognized. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ident (an identifier)\n  = ~keyword name\n")),(0,r.kt)("h4",{id:"inline-rule-declarations"},"Inline Rule Declarations"),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("i",null,"expr")," -- ",(0,r.kt)("i",null,"caseName"))),(0,r.kt)("p",null,"When a parsing expression is followed by the characters ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," and a name, it signals an ",(0,r.kt)("em",{parentName:"p"},"inline rule declaration"),". This is most commonly used in alternation expressions to ensure that each branch has the same arity. For example, the following declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'AddExp = AddExp "+" MulExp  -- plus\n       | MulExp\n')),(0,r.kt)("p",null,"is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ohm"},'AddExp = AddExp_plus\n       | MulExp\nAddExp_plus = AddExp "+" MulExp\n')),(0,r.kt)("h3",{id:"syntactic-lexical"},"Syntactic vs. Lexical Rules"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"syntactic rule")," is a rule whose name begins with an uppercase letter, and ",(0,r.kt)("em",{parentName:"p"},"lexical rule")," is one whose name begins with a lowercase letter. The difference between lexical and syntactic rules is that syntactic rules implicitly skip whitespace characters."),(0,r.kt)("p",null,'The definition of "whitespace character" is anything that matches the grammar\'s ',(0,r.kt)("inlineCode",{parentName:"p"},"space")," rule. The default implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"space")," matches ' ', '\\t', '\\n', '\\r', and any other character that is considered whitespace in the ",(0,r.kt)("a",{parentName:"p",href:"http://ecma-international.org/ecma-262/5.1/#sec-7.2"},"ES5 spec"),"."),(0,r.kt)("h4",{id:"how-space-skipping-works"},"How space skipping works"),(0,r.kt)("p",null,"In the body of a syntactic rule, Ohm implicity inserts applications of the ",(0,r.kt)("inlineCode",{parentName:"p"},"spaces")," rule before each expression. (The ",(0,r.kt)("inlineCode",{parentName:"p"},"spaces")," rule is defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"spaces = space*"),".) As an example, take this fragment of JSON grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Array = "[" "]"  -- empty\n      | "[" Elements "]"  -- nonEmpty\nElements = Element ("," Element)*\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Array")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Elements")," are both synactic rules, since their names begin with a capital letter. Here's what a lexical version of these rule would look like, with ",(0,r.kt)("em",{parentName:"p"},"explicit")," space skipping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'array = spaces "[" spaces "]"  -- empty\n      | spaces "[" spaces elements spaces "]"  -- nonEmpty\nelements = spaces element (spaces "," spaces element)*\n')),(0,r.kt)("p",null,"In terms of the language it accepts, this version of the rules \u2014 with explicit space skipping \u2014 is equivalent to the syntactic version above."),(0,r.kt)("p",null,"A few other details that are helpful to know:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the start rule is a syntactic rule, both leading and trailing spaces are skipped around the top-level application."),(0,r.kt)("li",{parentName:"ol"},"When the body of a rule contains a ",(0,r.kt)("a",{parentName:"li",href:"#repetition-operators---"},"repetition operator")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),"), spaces are skipped before each match. In other words, ",(0,r.kt)("inlineCode",{parentName:"li"},"Names = name+")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"names = (spaces name)+"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"#lexification-"},"lexification operator (",(0,r.kt)("inlineCode",{parentName:"a"},"#"),")")," can be used in the body of a syntactic rule to prevent space skipping in specific places. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'KeyAndValue = #(letter alnum+) ":" #(digit+)\n')),(0,r.kt)("p",null,"is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'keyAndValue = letter alnum+ spaces ":" digit+\n')),(0,r.kt)("p",null,"Note that no space skipping occurs ",(0,r.kt)("em",{parentName:"p"},"inside")," or ",(0,r.kt)("em",{parentName:"p"},"before")," the lexical context defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," character. That means that this rule will match ",(0,r.kt)("inlineCode",{parentName:"p"},"'count :33'"),", but ",(0,r.kt)("em",{parentName:"p"},"not")," ",(0,r.kt)("inlineCode",{parentName:"p"},"'count: 33'"),"."))}u.isMDXComponent=!0}}]);