(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{R1uw:function(t,e,n){"use strict";n.r(e);var r=n("wTIg"),o=n("q1tI"),a=n.n(o),i=n("noox"),u=n("WsIH"),c=n("dH/O"),l=(n("f3/d"),n("a1Th"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("qKvR")),s=n("Wbzz"),d=n("TJpk"),p=n("sjHn"),f=n("1AOi");function b(){var t=m(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "]);return b=function(){return t},t}function g(){var t=m(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "]);return g=function(){return t},t}function h(){var t=m(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]);return h=function(){return t},t}function m(t,e){return e||(e=t.slice(0)),t.raw=e,t}function x(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=function(t){var e,n,r,o,i;function u(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).maxPages=3,e.count=e.props.pageCount,e.current=e.props.index,e.pageRoot=e.props.pathPrefix,e.getFullPath=function(t){return"/"===e.pageRoot?1===t?e.pageRoot:e.pageRoot+"page/"+t:1===t?e.pageRoot:e.pageRoot+"/page/"+t},e}return n=t,(e=u).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,u.prototype.render=function(){var t=this.count,e=this.current;if(t<=1)return null;var n=this.previousPath,r=this.nextPath,o=this.current<this.count,i=this.current>1;return Object(l.d)(a.a.Fragment,null,Object(l.d)(d.Helmet,null,i&&Object(l.d)("link",{rel:"prev",href:n}),o&&Object(l.d)("link",{rel:"next",href:r})),Object(l.d)(P,null,i&&Object(l.d)(O,{to:n},"Prev"),this.getPageLinks,Object(l.d)(z,{"aria-hidden":"true"},Object(l.d)("em",null,e)," of ",t),o&&Object(l.d)(O,{to:r},"Next")))},r=u,(o=[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,e=this.current,n=this.count,r=this.maxPages,o=1===e?e:e-1,a=Object(f.i)(o,n+1-o),i=a.slice(0,r);return a[0]>2&&i.unshift(null),a[0]>1&&i.unshift(1),a[0]+1===n&&a[0]-1>0&&i.splice(a.length-1-r,0,a[0]-1),a[0]+r<n&&i.push(null),a[0]+r-1<n&&i.push(n),x(new Set(i)).map((function(n,r){return null===n?Object(l.d)(L,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(l.d)(k,{key:"PaginatorPage_"+n,to:t.getFullPath(n),style:{opacity:e===n?1:.3},className:"Paginator__pageLink"},n)}))}}])&&y(r.prototype,o),i&&y(r,i),u}(o.Component),j=function(t){return Object(l.c)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",p.a.desktop_up(h()))},O=Object(r.a)(s.Link,{target:"e5lnzj40"})("font-weight:600;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",j," &:hover,&:focus{opacity:1;text-decoration:underline;}"),k=Object(r.a)(s.Link,{target:"e5lnzj41"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",j," &:hover,&:focus{opacity:1;text-decoration:underline;}"),L=Object(r.a)("span",{target:"e5lnzj42"})("opacity:0.3;",j,' &::before{content:"...";}'),z=Object(r.a)("span",{target:"e5lnzj43"})("font-weight:400;",j," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),P=Object(r.a)("nav",{target:"e5lnzj44"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",p.a.tablet(g(),L)," ",p.a.desktop_up(b(),z)),_=(n("dRSK"),n("ZGJb")),S=n("joFz"),A=function(t){var e=t.author;return Object(l.d)(R,null,Object(l.d)(T,{as:e.authorsPage?s.Link:"div",to:e.slug,"data-a11y":"false","aria-label":"Author's bio"},Object(l.d)(H,null,Object(l.d)(C,{src:e.avatar.medium}))),Object(l.d)(I,{dangerouslySetInnerHTML:{__html:e.bio}}))},R=Object(r.a)("div",{target:"eig4wgl0"})({name:"3j1lrl",styles:"display:flex;align-items:center;position:relative;left:-10px;"}),T=Object(r.a)("div",{target:"eig4wgl1"})("display:block;position:relative;height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;margin:10px 26px 10px 10px;&::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,0.25);}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),C=Object(r.a)(S.c,{target:"eig4wgl2"})({name:"uodor8",styles:"border-radius:50%;"}),H=Object(r.a)("div",{target:"eig4wgl3"})({name:"wibiw4",styles:"height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;overflow:hidden;"}),I=Object(r.a)("p",{target:"eig4wgl4"})("max-width:430px;font-size:14px;line-height:1.45;color:",(function(t){return t.theme.colors.grey}),";a{color:",(function(t){return t.theme.colors.grey}),";text-decoration:underline;}"),q=n("pylL"),F=n("ZtNh");function G(){var t=K(["\n    font-size: 32px;\n  "]);return G=function(){return t},t}function W(){var t=K(["\n    font-size: 38px\n  "]);return W=function(){return t},t}function J(){var t=K(["\n    width: 100%;\n  "]);return J=function(){return t},t}function M(){var t=K(["\n    width: 80%;\n  "]);return M=function(){return t},t}function E(){var t=K(["\n    display: none;\n  "]);return E=function(){return t},t}function N(){var t=K(["\n    display: none;\n  "]);return N=function(){return t},t}function Z(){var t=K(["\n    margin-bottom: 60px;\n  "]);return Z=function(){return t},t}function D(){var t=K(["\n    margin-bottom: 80px;\n  "]);return D=function(){return t},t}function K(t,e){return e||(e=t.slice(0)),t.raw=e,t}var Y=function(t){var e=t.authors,n=Object(o.useContext)(F.a),r=n.gridLayout,a=void 0===r?"tiles":r,u=n.hasSetGridLayout,c=n.setGridLayout,s=_.data.site.edges[0].node.siteMetadata.hero,d=u&&"tiles"===a,p=e.find((function(t){return t.featured}));if(!p)throw new Error("\n      No featured Author found.\n      Please ensure you have at least featured Author.\n  ");return Object(l.d)(i.a,{relative:!0,id:"Articles__Hero"},Object(l.d)(V,{style:{maxWidth:s.maxWidth+"px"}},Object(l.d)(X,{dangerouslySetInnerHTML:{__html:s.heading}})),Object(l.d)(B,null,Object(l.d)(A,{author:p}),Object(l.d)(U,null,Object(l.d)($,{onClick:function(){return c("tiles")},active:d,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(l.d)(q.a.Tiles,null)),Object(l.d)($,{onClick:function(){return c("rows")},active:!d,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(l.d)(q.a.Rows,null)))))},B=Object(r.a)("div",{target:"evd3z0e0"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",p.a.desktop(D()),";",p.a.tablet(Z()),";",p.a.phablet(N()),";"),U=Object(r.a)("div",{target:"evd3z0e1"})("display:flex;align-items:center;",p.a.tablet(E()),";"),V=Object(r.a)("div",{target:"evd3z0e2"})("margin:100px 0;",p.a.desktop(M())," ",p.a.tablet(J())),X=Object(r.a)("h1",{target:"evd3z0e3"})("font-style:normal;font-weight:600;font-size:52px;line-height:1.15;color:",(function(t){return t.theme.colors.primary}),";a{color:",(function(t){return t.theme.colors.accent}),";}",p.a.desktop(W())," ",p.a.phablet(G())),$=Object(r.a)("button",{target:"evd3z0e4"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}"),Q=(n("RW0V"),n("gZs9"));function tt(){var t=xt(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return tt=function(){return t},t}function et(){var t=xt(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]);return et=function(){return t},t}function nt(){var t=xt(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return nt=function(){return t},t}function rt(){var t=xt(["\n    margin-bottom; 15px;\n  "]);return rt=function(){return t},t}function ot(){var t=xt(["\n    display: -webkit-box;\n  "]);return ot=function(){return t},t}function at(){var t=xt(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return at=function(){return t},t}function it(){var t=xt(["\n    font-size: 24px;  \n  "]);return it=function(){return t},t}function ut(){var t=xt(["\n    margin-bottom: 15px;\n  "]);return ut=function(){return t},t}function ct(){var t=xt(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]);return ct=function(){return t},t}function lt(){var t=xt(["\n    height: 200px;\n    margin-bottom: 35px;\n  "]);return lt=function(){return t},t}function st(){var t=xt(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return st=function(){return t},t}function dt(){var t=xt(["\n    margin-bottom: 60px;\n  "]);return dt=function(){return t},t}function pt(){var t=xt(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return pt=function(){return t},t}function ft(){var t=xt(["\n    grid-template-columns: 1fr;\n  "]);return ft=function(){return t},t}function bt(){var t=xt(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return bt=function(){return t},t}function gt(){var t=xt(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return gt=function(){return t},t}function ht(){var t=xt(["\n    grid-template-columns: 1fr 1fr;\n  "]);return ht=function(){return t},t}function mt(){var t=xt(["\n    -webkit-line-clamp: 3;\n  "]);return mt=function(){return t},t}function xt(t,e){return e||(e=t.slice(0)),t.raw=e,t}var vt=function(t){var e=t.articles,n=t.alwaysShowAllDetails;if(!e)return null;var r=1===e.length,a=Object(o.useContext)(F.a),i=a.gridLayout,u=void 0===i?"tiles":i,c=a.hasSetGridLayout,s=a.getGridLayout,d=e.reduce((function(t,e,n,r){return n%2==0&&t.push(r.slice(n,n+2)),t}),[]);return Object(o.useEffect)((function(){return s()}),[]),Object(l.d)(Ot,{style:{opacity:c?1:0},alwaysShowAllDetails:n},d.map((function(t,e){var n=e%2!=0,o=e%2!=1;return Object(l.d)(_t,{key:e,gridLayout:u,hasOnlyOneArticle:r,reverse:n},Object(l.d)(yt,{article:t[0],narrow:n}),Object(l.d)(yt,{article:t[1],narrow:o}))})))},yt=function(t){var e=t.article,n=t.narrow;if(!e)return null;var r=Object(o.useContext)(F.a).gridLayout,a=n&&e.title.length>35,i=n?e.hero.narrow:e.hero.regular,u=i&&0!==Object.keys(i).length&&i.constructor===Object;return Object(l.d)(Ht,{to:e.slug,"data-a11y":"false"},Object(l.d)(St,{gridLayout:r},Object(l.d)(At,{narrow:n,gridLayout:r},u?Object(l.d)(S.c,{src:i}):Object(l.d)(S.a,null)),Object(l.d)("div",null,Object(l.d)(Rt,{dark:!0,hasOverflow:a,gridLayout:r},e.title),Object(l.d)(Tt,{narrow:n,hasOverflow:a,gridLayout:r},e.excerpt),Object(l.d)(Ct,null,e.date," · ",e.timeToRead," min read"))))},wt=Object(l.c)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",p.a.phablet(mt())),jt={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},Ot=Object(r.a)("div",{target:"e14bbv6l0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&jt})),kt=function(t){return Object(l.c)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",p.a.desktop_medium(ht())," ",p.a.tablet(gt()))},Lt=function(t){return Object(l.c)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",p.a.desktop(bt())," ",p.a.tablet(ft())," @media (max-width:540px){background:",t.theme.colors.card,";}",p.a.phablet(pt()))},zt=function(t){return Object(l.c)("position:relative;",p.a.tablet(dt())," @media (max-width:540px){background:",t.theme.colors.card,";}",p.a.phablet(st()))},Pt=function(t){return Object(l.c)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},_t=Object(r.a)("div",{target:"e14bbv6l1"})((function(t){return"tiles"===t.gridLayout?kt:Pt})),St=Object(r.a)("div",{target:"e14bbv6l2"})((function(t){return"rows"===t.gridLayout?Lt:zt})),At=Object(r.a)("div",{target:"e14bbv6l3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",p.a.tablet(lt())," ",p.a.phablet(ct())),Rt=Object(r.a)(Q.a.h2,{target:"e14bbv6l4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",wt,";",p.a.desktop(ut())," ",p.a.tablet(it())," ",p.a.phablet(at())),Tt=Object(r.a)("p",{target:"e14bbv6l5"})(wt,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",p.a.desktop(ot())," ",p.a.phablet(rt())," ",p.a.phablet(nt())),Ct=Object(r.a)("div",{target:"e14bbv6l6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",p.a.phablet(et())),Ht=Object(r.a)(s.Link,{target:"e14bbv6l7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",At,",&:focus ",At,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",p.a.phablet(tt(),At)),It=(e.default=function(t){var e=t.location,n=t.pageContext,r=n.group,o=n.additionalContext.authors;return Object(l.d)(c.a,null,Object(l.d)(u.a,{pathname:e.pathname}),Object(l.d)(Y,{authors:o}),Object(l.d)(i.a,{narrow:!0},Object(l.d)(vt,{articles:r}),Object(l.d)(qt,{show:n.pageCount>1},Object(l.d)(w,n))),Object(l.d)(It,null))},Object(r.a)("div",{target:"e1bswbkw0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";")),qt=Object(r.a)("div",{target:"e1bswbkw1"})((function(t){return t.show&&"margin-top: 95px;"}))},ZGJb:function(t){t.exports=JSON.parse('{"data":{"site":{"edges":[{"node":{"siteMetadata":{"hero":{"heading":"Welcome to my blog, take a look around...","maxWidth":652}}}}]}}}')}}]);
//# sourceMappingURL=component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx-b74b1832cdb293cc0976.js.map