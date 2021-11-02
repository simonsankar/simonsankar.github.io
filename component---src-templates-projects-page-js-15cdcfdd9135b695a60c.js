"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[736],{1531:function(e,t,r){r.d(t,{E:function(){return m}});var n=r(2543),a=r(9265),i=r(4526),o=r(4667),l=r(7294),s=r(9439),c=r(4059);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=l.forwardRef((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,a=e.alt,i=d(e,["htmlWidth","htmlHeight","alt"]);return l.createElement("img",u({width:r,height:n,ref:t,alt:a},i))})),m=(0,n.G)((function(e,t){var r=e.fallbackSrc,n=e.fallback,o=e.src,m=e.align,g=e.fit,p=e.loading,v=e.ignoreFallback,h=e.crossOrigin,y=d(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),b=null!=p||v,E=function(e){var t=e.src,r=e.srcSet,n=e.onLoad,a=e.onError,i=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,d=(0,l.useState)("pending"),f=(0,s.Z)(d,2),m=f[0],g=f[1];(0,l.useEffect)((function(){g(t?"loading":"pending")}),[t]);var p=(0,l.useRef)(),v=(0,l.useCallback)((function(){if(t){h();var e=new Image;e.src=t,i&&(e.crossOrigin=i),r&&(e.srcset=r),o&&(e.sizes=o),e.onload=function(e){h(),g("loaded"),null==n||n(e)},e.onerror=function(e){h(),g("failed"),null==a||a(e)},p.current=e}}),[t,i,r,o,n,a]),h=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,c.G)((function(){if(!u)return"loading"===m&&v(),function(){h()}}),[m,v,u]),u?"loaded":m}(u({},e,{ignoreFallback:b})),x=u({ref:t,objectFit:g,objectPosition:m},b?y:(0,i.CE)(y,["onError","onLoad"]));return"loaded"!==E?n||l.createElement(a.m$.img,u({as:f,className:"chakra-image__placeholder",src:r},x)):l.createElement(a.m$.img,u({as:f,src:o,crossOrigin:h,loading:p,className:"chakra-image"},x))}));o.Ts&&(m.displayName="Image")},7853:function(e,t,r){r.d(t,{i:function(){return f}});var n=r(2543),a=r(3888),i=r(7487),o=r(9265),l=r(5587),s=r(4667),c=r(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=(0,n.G)((function(e,t){var r=(0,a.m)("Divider",e),n=r.borderLeftWidth,s=r.borderBottomWidth,f=r.borderTopWidth,m=r.borderRightWidth,g=r.borderWidth,p=r.borderStyle,v=r.borderColor,h=d(r,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),y=(0,i.Lr)(e),b=y.className,E=y.orientation,x=void 0===E?"horizontal":E,w=y.__css,O=d(y,["className","orientation","__css"]),k={vertical:{borderLeftWidth:n||m||g||"1px",height:"100%"},horizontal:{borderBottomWidth:s||f||g||"1px",width:"100%"}};return c.createElement(o.m$.hr,u({ref:t,"aria-orientation":x},O,{__css:u({},h,{border:"0",borderColor:v,borderStyle:p},k[x],w),className:(0,l.cx)("chakra-divider",b)}))}));s.Ts&&(f.displayName="Divider")},4762:function(e,t,r){r.d(t,{X:function(){return d}});var n=r(2543),a=r(3888),i=r(7487),o=r(9265),l=r(5587),s=r(4667),c=r(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=(0,n.G)((function(e,t){var r=(0,a.m)("Heading",e),n=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,i.Lr)(e),["className"]);return c.createElement(o.m$.h2,u({ref:t,className:(0,l.cx)("chakra-heading",e.className)},n,{__css:r}))}));s.Ts&&(d.displayName="Heading")},2665:function(e,t,r){r.d(t,{Vp:function(){return f}});var n=r(132),a=r(2543),i=r(3888),o=r(7487),l=r(9735),s=r(9265),c=r(4667),u=r(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,a.G)((function(e,t){var r=(0,i.j)("Tag",e),n=(0,o.Lr)(e),a=d({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},r.container);return u.createElement(l.Fo,{value:r},u.createElement(s.m$.span,d({ref:t},n,{__css:a})))}));c.Ts&&(f.displayName="Tag");var m=(0,a.G)((function(e,t){var r=(0,l.yK)();return u.createElement(s.m$.span,d({ref:t,isTruncated:!0},e,{__css:r.label}))}));c.Ts&&(m.displayName="TagLabel");var g=(0,a.G)((function(e,t){return u.createElement(n.J,d({ref:t,verticalAlign:"top",marginEnd:"0.5rem"},e))}));c.Ts&&(g.displayName="TagLeftIcon");var p=(0,a.G)((function(e,t){return u.createElement(n.J,d({ref:t,verticalAlign:"top",marginStart:"0.5rem"},e))}));c.Ts&&(p.displayName="TagRightIcon");var v=function(e){return u.createElement(n.J,d({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),u.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};c.Ts&&(v.displayName="TagCloseIcon");c.Ts},9508:function(e,t,r){r.d(t,{R:function(){return d}});var n=r(5587),a=r(4667),i=r(908),o=r(735),l=r(7294),s=r(1783);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(e){var t,r=e.offsetX,n=e.offsetY,a=e.transition,i=e.transitionEnd,o=e.delay;return{opacity:0,x:r,y:n,transition:null!=(t=null==a?void 0:a.exit)?t:s.p$.exit(s.R.exit,o),transitionEnd:null==i?void 0:i.exit}},enter:function(e){var t,r=e.transition,n=e.transitionEnd,a=e.delay;return{opacity:1,x:0,y:0,transition:null!=(t=null==r?void 0:r.enter)?t:s.p$.enter(s.R.enter,a),transitionEnd:null==n?void 0:n.enter}},exit:function(e){var t,r=e.offsetY,n=e.offsetX,a=e.transition,i=e.transitionEnd,o=e.reverse,l=e.delay,u={x:n,y:r};return c({opacity:0,transition:null!=(t=null==a?void 0:a.exit)?t:s.p$.exit(s.R.exit,l)},o?c({},u,{transitionEnd:null==i?void 0:i.exit}):{transitionEnd:c({},u,null==i?void 0:i.exit)})}}},d=l.forwardRef((function(e,t){var r=e.unmountOnExit,a=e.in,s=e.reverse,d=void 0===s||s,f=e.className,m=e.offsetX,g=void 0===m?0:m,p=e.offsetY,v=void 0===p?8:p,h=e.transition,y=e.transitionEnd,b=e.delay,E=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"]),x=!r||a&&r,w=a||r?"enter":"exit",O={offsetX:g,offsetY:v,reverse:d,transition:h,transitionEnd:y,delay:b};return l.createElement(i.M,{custom:O},x&&l.createElement(o.E.div,c({ref:t,className:(0,n.cx)("chakra-offset-slide",f),custom:O},u,{animate:w},E)))}));a.Ts&&(d.displayName="SlideFade")},4561:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(7294),a=r(2543),i=r(9265),o=r(4667);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var c=(0,a.G)((function(e,t){var r=e.area,a=e.templateAreas,o=e.gap,c=e.rowGap,u=e.columnGap,d=e.column,f=e.row,m=e.autoFlow,g=e.autoRows,p=e.templateRows,v=e.autoColumns,h=e.templateColumns,y=s(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),b={display:"grid",gridArea:r,gridTemplateAreas:a,gridGap:o,gridRowGap:c,gridColumnGap:u,gridAutoColumns:v,gridColumn:d,gridRow:f,gridAutoFlow:m,gridAutoRows:g,gridTemplateRows:p,gridTemplateColumns:h};return n.createElement(i.m$.div,l({ref:t,__css:b},y))}));o.Ts&&(c.displayName="Grid");var u=r(5230),d=r(7690),f=r(1531),m=r(7622),g=r(2665),p=r(4762),v=r(2200),h=r(7853),y=r(1799),b=r(8540),E=r(7361),x=r(9508),w=r(107),O=r(3751),k=function(e){var t=e.item;return n.createElement(d.xu,{width:"100%",bg:(0,u.useColorModeValue)("white","gray.500"),boxShadow:"xl",rounded:"md",p:6,overflow:"hidden"},n.createElement(d.xu,{bg:"gray.100",mt:-6,mx:-6,mb:6,pos:"relative"},n.createElement(f.E,{src:t.image,layout:"fill"})),n.createElement(m.Kq,null,n.createElement(d.xu,null,t.tags.map((function(e){return n.createElement(g.Vp,{marginRight:2,marginBottom:2,size:"sm",variant:"subtle",colorScheme:"gray",key:t.title+e},e)}))),n.createElement(p.X,{color:(0,u.useColorModeValue)("gray.700","gray.50"),fontSize:"2xl",fontFamily:"body"},t.title),n.createElement(v.x,{color:(0,u.useColorModeValue)("gray.600","gray.100")},t.description)),n.createElement(h.i,{marginBlock:4}),n.createElement(m.Ug,{spacing:2,align:"right",justifyContent:"end"},t.link?n.createElement(y.z,{as:b.r,href:t.link,target:"_blank",alt:"Resume",variant:"solid",size:"sm",colorScheme:"brand",textTransform:"uppercase"},"View"):null,t.source?n.createElement(y.z,{as:b.r,href:t.source,target:"_blank",alt:"Resume",variant:"solid",size:"sm",colorScheme:"gray",textTransform:"uppercase"},"Source"):null))},T=function(e){var t=e.data.markdownRemark.frontmatter;return n.createElement(w.Z,null,n.createElement(O.Z,{title:t.title}),n.createElement(E.k,{height:"full",width:"full",style:{minHeight:"calc(100vh - 105px)"},paddingInline:[8,8,8,8,"15%","20%"],direction:"column"},n.createElement(x.R,{in:!0,offsetX:-90},n.createElement(p.X,{marginTop:[4,8],fontSize:{base:"4xl",md:"4xl",lg:"5xl",xl:"6xl"},textTransform:"uppercase"},t.title)),n.createElement(d.xu,{marginBlock:2,height:[5,10],borderLeftWidth:"5px"}),n.createElement(x.R,{in:!0,offsetY:90},n.createElement(c,{alignItems:"flex-start",templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"},gap:8,paddingBottom:8},t.items.map((function(e){return n.createElement(k,{item:e,key:e.title})}))))))}}}]);
//# sourceMappingURL=component---src-templates-projects-page-js-15cdcfdd9135b695a60c.js.map