(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Ras":function(t,n,r){"use strict";r("E9XD");var e=r("MUpH"),a=r("wTIg"),o=r("q1tI"),i=r("qKvR"),u=r("Wbzz"),c=r("gZs9"),s=r("joFz"),l=r("sjHn"),b=r("ZtNh");function p(){var t=Object(e.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return p=function(){return t},t}function d(){var t=Object(e.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]);return d=function(){return t},t}function f(){var t=Object(e.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return f=function(){return t},t}function x(){var t=Object(e.a)(["\n    margin-bottom: 15px;\n  "]);return x=function(){return t},t}function g(){var t=Object(e.a)(["\n    display: -webkit-box;\n  "]);return g=function(){return t},t}function m(){var t=Object(e.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return m=function(){return t},t}function h(){var t=Object(e.a)(["\n    font-size: 24px;  \n  "]);return h=function(){return t},t}function v(){var t=Object(e.a)(["\n    margin-bottom: 15px;\n  "]);return v=function(){return t},t}function j(){var t=Object(e.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]);return j=function(){return t},t}function w(){var t=Object(e.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "]);return w=function(){return t},t}function O(){var t=Object(e.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return O=function(){return t},t}function y(){var t=Object(e.a)(["\n    margin-bottom: 60px;\n  "]);return y=function(){return t},t}function k(){var t=Object(e.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return k=function(){return t},t}function L(){var t=Object(e.a)(["\n    grid-template-columns: 1fr;\n  "]);return L=function(){return t},t}function z(){var t=Object(e.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return z=function(){return t},t}function q(){var t=Object(e.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return q=function(){return t},t}function A(){var t=Object(e.a)(["\n    grid-template-columns: 1fr 1fr;\n  "]);return A=function(){return t},t}function D(){var t=Object(e.a)(["\n    -webkit-line-clamp: 3;\n  "]);return D=function(){return t},t}n.a=function(t){var n=t.articles,r=t.alwaysShowAllDetails;if(!n)return null;var e=1===n.length,a=Object(o.useContext)(b.a),u=a.gridLayout,c=void 0===u?"tiles":u,s=a.hasSetGridLayout,l=a.getGridLayout,p=n.reduce((function(t,n,r,e){return r%2==0&&t.push(e.slice(r,r+2)),t}),[]);return Object(o.useEffect)((function(){return l()}),[]),Object(i.jsx)(E,{style:{opacity:s?1:0},alwaysShowAllDetails:r},p.map((function(t,n){var r=n%2!=0,a=n%2!=1;return Object(i.jsx)(T,{key:n,gridLayout:c,hasOnlyOneArticle:e,reverse:r},Object(i.jsx)(S,{article:t[0],narrow:r}),Object(i.jsx)(S,{article:t[1],narrow:a}))})))};var S=function(t){var n=t.article,r=t.narrow;if(!n)return null;var e=Object(o.useContext)(b.a).gridLayout,a=r&&n.title.length>35,u=r?n.hero.narrow:n.hero.regular,c=u&&0!==Object.keys(u).length&&u.constructor===Object;return Object(i.jsx)(N,{to:n.slug,"data-a11y":"false"},Object(i.jsx)(Y,{gridLayout:e},Object(i.jsx)(Z,{narrow:r,gridLayout:e},c?Object(i.jsx)(s.c,{src:u}):Object(i.jsx)(s.a,null)),Object(i.jsx)("div",null,Object(i.jsx)(F,{dark:!0,hasOverflow:a,gridLayout:e},n.title),Object(i.jsx)(K,{narrow:r,hasOverflow:a,gridLayout:e},n.excerpt),Object(i.jsx)(M,null,n.date," · ",n.timeToRead," min read"))))},R=Object(i.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",l.a.phablet(D()),""),C={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},E=Object(a.a)("div",{target:"e14bbv6l0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&C}),""),G=function(t){return Object(i.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",l.a.desktop_medium(A())," ",l.a.tablet(q()),"")},H=function(t){return Object(i.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",l.a.desktop(z())," ",l.a.tablet(L())," @media (max-width:540px){background:",t.theme.colors.card,";}",l.a.phablet(k()),"")},I=function(t){return Object(i.css)("position:relative;",l.a.tablet(y())," @media (max-width:540px){background:",t.theme.colors.card,";}",l.a.phablet(O()),"")},J=function(t){return Object(i.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},T=Object(a.a)("div",{target:"e14bbv6l1"})((function(t){return"tiles"===t.gridLayout?G:J}),""),Y=Object(a.a)("div",{target:"e14bbv6l2"})((function(t){return"rows"===t.gridLayout?H:I}),""),Z=Object(a.a)("div",{target:"e14bbv6l3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",l.a.tablet(w())," ",l.a.phablet(j()),""),F=Object(a.a)(c.a.h2,{target:"e14bbv6l4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",R,";",l.a.desktop(v())," ",l.a.tablet(h())," ",l.a.phablet(m()),""),K=Object(a.a)("p",{target:"e14bbv6l5"})(R,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",l.a.desktop(g())," ",l.a.phablet(x())," ",l.a.phablet(f()),""),M=Object(a.a)("div",{target:"e14bbv6l6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",l.a.phablet(d()),""),N=Object(a.a)(u.Link,{target:"e14bbv6l7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",Z,",&:focus ",Z,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",l.a.phablet(p(),Z),"")}}]);
//# sourceMappingURL=cfc86df3-ca4f35b52579b20819f1.js.map