/*! For license information please see component---src-pages-index-js-a32088406e5e5effc798.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5285:function(n,t,e){e.r(t),e.d(t,{default:function(){return ht}});var a=e(7294),r=e(5587),i=e(4667),o=e(908),l=e(735),s=e(1783);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}var f={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(n){var t,e=n.offsetX,a=n.offsetY,r=n.transition,i=n.transitionEnd,o=n.delay;return{opacity:0,x:e,y:a,transition:null!=(t=null==r?void 0:r.exit)?t:s.p$.exit(s.R.exit,o),transitionEnd:null==i?void 0:i.exit}},enter:function(n){var t,e=n.transition,a=n.transitionEnd,r=n.delay;return{opacity:1,x:0,y:0,transition:null!=(t=null==e?void 0:e.enter)?t:s.p$.enter(s.R.enter,r),transitionEnd:null==a?void 0:a.enter}},exit:function(n){var t,e=n.offsetY,a=n.offsetX,r=n.transition,i=n.transitionEnd,o=n.reverse,l=n.delay,f={x:a,y:e};return c({opacity:0,transition:null!=(t=null==r?void 0:r.exit)?t:s.p$.exit(s.R.exit,l)},o?c({},f,{transitionEnd:null==i?void 0:i.exit}):{transitionEnd:c({},f,null==i?void 0:i.exit)})}}},u=a.forwardRef((function(n,t){var e=n.unmountOnExit,i=n.in,s=n.reverse,u=void 0===s||s,m=n.className,d=n.offsetX,p=void 0===d?0:d,h=n.offsetY,g=void 0===h?8:h,b=n.transition,y=n.transitionEnd,v=n.delay,w=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"]),x=!e||i&&e,k=i||e?"enter":"exit",O={offsetX:p,offsetY:g,reverse:u,transition:b,transitionEnd:y,delay:v};return a.createElement(o.M,{custom:O},x&&a.createElement(l.E.div,c({ref:t,className:(0,r.cx)("chakra-offset-slide",m),custom:O},f,{animate:k},w)))}));i.Ts&&(u.displayName="SlideFade");var m=e(5230),d=e(7361),p=e(4746),h=e(3792),g=e(7690),b=e(2200),y=e(8540);function v(n){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function w(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function x(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function k(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),a.forEach((function(t){x(n,t,e[t])}))}return n}function O(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],a=!0,r=!1,i=void 0;try{for(var o,l=n[Symbol.iterator]();!(a=(o=l.next()).done)&&(e.push(o.value),!t||e.length!==t);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(){},_={},C={},z={mark:E,measure:E};try{"undefined"!=typeof window&&(_=window),"undefined"!=typeof document&&(C=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(z=performance)}catch(gt){}var j=(_.navigator||{}).userAgent,M=void 0===j?"":j,S=_,A=C,P=z,I=(S.document,!!A.documentElement&&!!A.head&&"function"==typeof A.addEventListener&&"function"==typeof A.createElement),N=(~M.indexOf("MSIE")||M.indexOf("Trident/"),"svg-inline--fa"),T="data-fa-i2svg",L=(function(){try{}catch(gt){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),R=L.concat([11,12,13,14,15,16,17,18,19,20]),W={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Y=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY].concat(L.map((function(n){return"".concat(n,"x")}))).concat(R.map((function(n){return"w-".concat(n)}))),S.FontAwesomeConfig||{});if(A&&"function"==typeof A.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=O(n,2),e=t[0],a=t[1],r=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=A.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=r&&(Y[a]=r)}))}var D=k({},{familyPrefix:"fa",replacementClass:N,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Y);D.autoReplaceSvg||(D.observeMutations=!1);var F=k({},D);S.FontAwesomeConfig=F;var X=S||{};X.___FONT_AWESOME___||(X.___FONT_AWESOME___={}),X.___FONT_AWESOME___.styles||(X.___FONT_AWESOME___.styles={}),X.___FONT_AWESOME___.hooks||(X.___FONT_AWESOME___.hooks={}),X.___FONT_AWESOME___.shims||(X.___FONT_AWESOME___.shims=[]);var H=X.___FONT_AWESOME___,B=[];I&&((A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState)||A.addEventListener("DOMContentLoaded",(function n(){A.removeEventListener("DOMContentLoaded",n),1,B.map((function(n){return n()}))})));var V,U="pending",q="settled",G="fulfilled",Z="rejected",K=function(){},$=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,J="undefined"==typeof setImmediate?setTimeout:setImmediate,Q=[];function nn(){for(var n=0;n<Q.length;n++)Q[n][0](Q[n][1]);Q=[],V=!1}function tn(n,t){Q.push([n,t]),V||(V=!0,J(nn,0))}function en(n){var t=n.owner,e=t._state,a=t._data,r=n[e],i=n.then;if("function"==typeof r){e=G;try{a=r(a)}catch(gt){ln(i,gt)}}an(i,a)||(e===G&&rn(i,a),e===Z&&ln(i,a))}function an(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===v(t))){var a=t.then;if("function"==typeof a)return a.call(t,(function(a){e||(e=!0,t===a?on(n,a):rn(n,a))}),(function(t){e||(e=!0,ln(n,t))})),!0}}catch(gt){return e||ln(n,gt),!0}return!1}function rn(n,t){n!==t&&an(n,t)||on(n,t)}function on(n,t){n._state===U&&(n._state=q,n._data=t,tn(cn,n))}function ln(n,t){n._state===U&&(n._state=q,n._data=t,tn(fn,n))}function sn(n){n._then=n._then.forEach(en)}function cn(n){n._state=G,sn(n)}function fn(n){n._state=Z,sn(n),!n._handled&&$&&e.g.process.emit("unhandledRejection",n._data,n)}function un(n){e.g.process.emit("rejectionHandled",n)}function mn(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof mn==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){ln(t,n)}try{n((function(n){rn(t,n)}),e)}catch(gt){e(gt)}}(n,this)}mn.prototype={constructor:mn,_state:U,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(K),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===Z&&$&&tn(un,this)),this._state===G||this._state===Z?tn(en,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},mn.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new mn((function(t,e){var a=[],r=0;function i(n){return r++,function(e){a[n]=e,--r||t(a)}}for(var o,l=0;l<n.length;l++)(o=n[l])&&"function"==typeof o.then?o.then(i(l),e):a[l]=o;r||t(a)}))},mn.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new mn((function(t,e){for(var a,r=0;r<n.length;r++)(a=n[r])&&"function"==typeof a.then?a.then(t,e):t(a)}))},mn.resolve=function(n){return n&&"object"===v(n)&&n.constructor===mn?n:new mn((function(t){t(n)}))},mn.reject=function(n){return new mn((function(t,e){e(n)}))};var dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pn(n){if(n&&I){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=A.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(t,a),n}}function hn(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function gn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bn(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function yn(n){return n.size!==dn.size||n.x!==dn.x||n.y!==dn.y||n.rotate!==dn.rotate||n.flipX||n.flipY}function vn(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(l)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var wn={x:0,y:0,width:"100%",height:"100%"};function xn(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function kn(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,i=n.iconName,o=n.transform,l=n.symbol,s=n.title,c=n.maskId,f=n.titleId,u=n.extra,m=n.watchable,d=void 0!==m&&m,p=a.found?a:e,h=p.width,g=p.height,b="fak"===r,y=b?"":"fa-w-".concat(Math.ceil(h/g*16)),v=[F.replacementClass,i?"".concat(F.familyPrefix,"-").concat(i):"",y].filter((function(n){return-1===u.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(u.classes).join(" "),w={children:[],attributes:k({},u.attributes,{"data-prefix":r,"data-icon":i,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)})},x=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};d&&(w.attributes[T]=""),s&&w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||hn())},children:[s]});var O=k({},w,{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:l,styles:k({},x,u.styles)}),E=a.found&&e.found?function(n){var t,e=n.children,a=n.attributes,r=n.main,i=n.mask,o=n.maskId,l=n.transform,s=r.width,c=r.icon,f=i.width,u=i.icon,m=vn({transform:l,containerWidth:f,iconWidth:s}),d={tag:"rect",attributes:k({},wn,{fill:"white"})},p=c.children?{children:c.children.map(xn)}:{},h={tag:"g",attributes:k({},m.inner),children:[xn(k({tag:c.tag,attributes:k({},c.attributes,m.path)},p))]},g={tag:"g",attributes:k({},m.outer),children:[h]},b="mask-".concat(o||hn()),y="clip-".concat(o||hn()),v={tag:"mask",attributes:k({},wn,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,g]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=u,"g"===t.tag?t.children:[t])},v]};return e.push(w,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},wn)}),{children:e,attributes:a}}(O):function(n){var t=n.children,e=n.attributes,a=n.main,r=n.transform,i=bn(n.styles);if(i.length>0&&(e.style=i),yn(r)){var o=vn({transform:r,containerWidth:a.width,iconWidth:a.width});t.push({tag:"g",attributes:k({},o.outer),children:[{tag:"g",attributes:k({},o.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:k({},a.icon.attributes,o.path)}]}]})}else t.push(a.icon);return{children:t,attributes:e}}(O),_=E.children,C=E.attributes;return O.children=_,O.attributes=C,l?function(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k({},r,{id:!0===i?"".concat(t,"-").concat(F.familyPrefix,"-").concat(e):i}),children:a}]}]}(O):function(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(yn(o)&&e.found&&!a.found){var l={x:e.width/e.height/2,y:.5};r.style=bn(k({},i,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}(O)}var On=function(){},En=(F.measurePerformance&&P&&P.mark&&P.measure,function(n,t,e,a){var r,i,o,l=Object.keys(n),s=l.length,c=void 0!==a?function(n,t){return function(e,a,r,i){return n.call(t,e,a,r,i)}}(t,a):t;for(void 0===e?(r=1,o=n[l[0]]):(r=0,o=e);r<s;r++)o=c(o,n[i=l[r]],i,n);return o});function _n(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.skipHooks,r=void 0!==a&&a,i=Object.keys(t).reduce((function(n,e){var a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n}),{});"function"!=typeof H.hooks.addPack||r?H.styles[n]=k({},H.styles[n]||{},i):H.hooks.addPack(n,i),"fas"===n&&_n("fa",t)}var Cn=H.styles,zn=H.shims,jn=function(){var n=function(n){return En(Cn,(function(t,e,a){return t[a]=En(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var a=t[2];return n[e]=e,a.forEach((function(t){n[t]=e})),n}));var t="far"in Cn;En(zn,(function(n,e){var a=e[0],r=e[1],i=e[2];return"far"!==r||t||(r="fas"),n[a]={prefix:r,iconName:i},n}),{})};jn();H.styles;function Mn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function Sn(n){var t=n.tag,e=n.attributes,a=void 0===e?{}:e,r=n.children,i=void 0===r?[]:r;return"string"==typeof n?gn(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(gn(n[e]),'" ')}),"").trim()}(a),">").concat(i.map(Sn).join(""),"</").concat(t,">")}var An=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),a=e[0],r=e.slice(1).join("-");if(a&&"h"===r)return n.flipX=!0,n;if(a&&"v"===r)return n.flipY=!0,n;if(r=parseFloat(r),isNaN(r))return n;switch(a){case"grow":n.size=n.size+r;break;case"shrink":n.size=n.size-r;break;case"left":n.x=n.x-r;break;case"right":n.x=n.x+r;break;case"up":n.y=n.y-r;break;case"down":n.y=n.y+r;break;case"rotate":n.rotate=n.rotate+r}return n}),t):t};function Pn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}Pn.prototype=Object.create(Error.prototype),Pn.prototype.constructor=Pn;var In={fill:"currentColor"},Nn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Tn={tag:"path",attributes:k({},In,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Ln=k({},Nn,{attributeName:"opacity"});k({},In,{cx:"256",cy:"364",r:"28"}),k({},Nn,{attributeName:"r",values:"28;14;28;28;14;28;"}),k({},Ln,{values:"1;0;1;1;0;1;"}),k({},In,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),k({},Ln,{values:"1;0;0;0;0;1;"}),k({},In,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),k({},Ln,{values:"0;0;1;1;0;0;"}),H.styles;function Rn(n){var t=n[0],e=n[1],a=O(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}H.styles;function Wn(){var n="fa",t=N,e=F.familyPrefix,a=F.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==n||a!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(l,".".concat(a))}return r}function Yn(){F.autoAddCss&&!Bn&&(pn(Wn()),Bn=!0)}function Dn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return Sn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(I){var t=A.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function Fn(n){var t=n.prefix,e=void 0===t?"fa":t,a=n.iconName;if(a)return Mn(Hn.definitions,e,a)||Mn(H.styles,e,a)}var Xn,Hn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,a;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];var r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(t){n.definitions[t]=k({},n.definitions[t]||{},r[t]),_n(t,r[t]),jn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var a=e[t],r=a.prefix,i=a.iconName,o=a.icon;n[r]||(n[r]={}),n[r][i]=o})),n}}])&&w(t.prototype,e),a&&w(t,a),n}()),Bn=!1,Vn={transform:function(n){return An(n)}},Un=(Xn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,a=void 0===e?dn:e,r=t.symbol,i=void 0!==r&&r,o=t.mask,l=void 0===o?null:o,s=t.maskId,c=void 0===s?null:s,f=t.title,u=void 0===f?null:f,m=t.titleId,d=void 0===m?null:m,p=t.classes,h=void 0===p?[]:p,g=t.attributes,b=void 0===g?{}:g,y=t.styles,v=void 0===y?{}:y;if(n){var w=n.prefix,x=n.iconName,O=n.icon;return Dn(k({type:"icon"},n),(function(){return Yn(),F.autoA11y&&(u?b["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(d||hn()):(b["aria-hidden"]="true",b.focusable="false")),kn({icons:{main:Rn(O),mask:l?Rn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:x,transform:k({},dn,a),symbol:i,title:u,maskId:c,titleId:d,extra:{attributes:b,styles:v,classes:h}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:Fn(n||{}),a=t.mask;return a&&(a=(a||{}).icon?a:Fn(a||{})),Xn(e,k({},t,{mask:a}))}),qn=e(5697),Gn=e.n(qn);function Zn(n){return(Zn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function Kn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function $n(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function Jn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?$n(Object(e),!0).forEach((function(t){Kn(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):$n(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Qn(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}function nt(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function tt(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function et(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,a=t.indexOf(":"),r=tt(t.slice(0,a)),i=t.slice(a+1).trim();return r.startsWith("webkit")?n[(e=r,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[r]=i,n}),{})}var at=!1;try{at=!0}catch(gt){}function rt(n){return n&&"object"===Zn(n)&&n.prefix&&n.iconName&&n.icon?n:Vn.icon?Vn.icon(n):null===n?null:n&&"object"===Zn(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function it(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Kn({},n,t):{}}function ot(n){var t=n.forwardedRef,e=Qn(n,["forwardedRef"]),a=e.icon,r=e.mask,i=e.symbol,o=e.className,l=e.title,s=e.titleId,c=rt(a),f=it("classes",[].concat(nt(function(n){var t,e=n.spin,a=n.pulse,r=n.fixedWidth,i=n.inverse,o=n.border,l=n.listItem,s=n.flip,c=n.size,f=n.rotation,u=n.pull,m=(Kn(t={"fa-spin":e,"fa-pulse":a,"fa-fw":r,"fa-inverse":i,"fa-border":o,"fa-li":l,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(c),null!=c),Kn(t,"fa-rotate-".concat(f),null!=f&&0!==f),Kn(t,"fa-pull-".concat(u),null!=u),Kn(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(m).map((function(n){return m[n]?n:null})).filter((function(n){return n}))}(e)),nt(o.split(" ")))),u=it("transform","string"==typeof e.transform?Vn.transform(e.transform):e.transform),m=it("mask",rt(r)),d=Un(c,Jn({},f,{},u,{},m,{symbol:i,title:l,titleId:s}));if(!d)return function(){var n;!at&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",c),null;var p=d.abstract,h={ref:t};return Object.keys(e).forEach((function(n){ot.defaultProps.hasOwnProperty(n)||(h[n]=e[n])})),lt(p[0],h)}ot.displayName="FontAwesomeIcon",ot.propTypes={border:Gn().bool,className:Gn().string,mask:Gn().oneOfType([Gn().object,Gn().array,Gn().string]),fixedWidth:Gn().bool,inverse:Gn().bool,flip:Gn().oneOf(["horizontal","vertical","both"]),icon:Gn().oneOfType([Gn().object,Gn().array,Gn().string]),listItem:Gn().bool,pull:Gn().oneOf(["right","left"]),pulse:Gn().bool,rotation:Gn().oneOf([0,90,180,270]),size:Gn().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Gn().bool,symbol:Gn().oneOfType([Gn().bool,Gn().string]),title:Gn().string,transform:Gn().oneOfType([Gn().string,Gn().object]),swapOpacity:Gn().bool},ot.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var lt=function n(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var r=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var a=e.attributes[t];switch(t){case"class":n.attrs.className=a,delete e.attributes.class;break;case"style":n.attrs.style=et(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=a:n.attrs[tt(t)]=a}return n}),{attrs:{}}),o=a.style,l=void 0===o?{}:o,s=Qn(a,["style"]);return i.attrs.style=Jn({},i.attrs.style,{},l),t.apply(void 0,[e.tag,Jn({},i.attrs,{},s)].concat(nt(r)))}.bind(null,a.createElement),st=e(7190),ct=e(8594),ft=e(3751),ut=e(2359),mt=e(4982),dt=(0,mt.I)({displayName:"EmailIcon",path:a.createElement("g",{fill:"currentColor"},a.createElement("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),a.createElement("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"}))}),pt=(0,mt.I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),ht=function(){return a.createElement(ct.Z,null,a.createElement(ft.Z,{title:"Home"}),a.createElement(d.k,{direction:["column-reverse","row"],height:"full",width:"full",style:{minHeight:"calc(100vh - 105px)"},paddingInline:8,bg:(0,m.useColorModeValue)("gray.100","gray.700"),color:(0,m.useColorModeValue)("gray.700","gray.50"),flex:1,position:"relative",align:"center",justifyContent:"space-around"},a.createElement(d.k,{direction:"column",flex:3},a.createElement(d.k,{flexDirection:["column-reverse","row"],alignItems:"center",justify:"space-between"},a.createElement(u,{in:!0,offsetX:-90},a.createElement(p.Kq,{direction:["row","column"],spacing:"4",marginTop:[8,0]},a.createElement(h.h,{as:"a","aria-label":"email",icon:a.createElement(dt,{boxSize:7}),href:"mailto:sjsankar10@gmail.com",target:"_blank"}),a.createElement(h.h,{as:"a","aria-label":"phone",icon:a.createElement(pt,{boxSize:7}),href:"tel:+18687304432",target:"_blank"}),a.createElement(h.h,{as:"a","aria-label":"github",href:"https://github.com/simonsankar",target:"_blank",icon:a.createElement(ot,{size:"2x",icon:st.zhw})}),a.createElement(h.h,{as:"a","aria-label":"linkedin",href:"https://www.linkedin.com/in/simon-sankar-5a82a2215/",target:"_blank",icon:a.createElement(ot,{size:"2x",icon:st.D9H})}))),a.createElement(u,{in:!0,offsetY:90},a.createElement(g.xu,{paddingInline:[0,10,20,40]},a.createElement(b.x,{fontFamily:"Faustina",fontSize:{base:"2xl",md:"3xl",lg:"5xl",xl:"5xl"}},"Hi There,"),a.createElement("span",null,a.createElement(b.x,{fontSize:{base:"4xl",md:"6xl",lg:"7xl",xl:"7xl"},display:"inline",marginRight:2},"I am"),a.createElement(b.x,{fontSize:{base:"4xl",md:"6xl",lg:"7xl",xl:"7xl"},fontWeight:"bold",color:(0,m.useColorModeValue)("brand.400","brand.300"),display:"inline-block",position:"relative"},"Simon Sankar",a.createElement(b.x,{fontSize:{base:"4xl",md:"6xl",lg:"7xl",xl:"7xl"},display:"inline",fontWeight:"medium",color:(0,m.useColorModeValue)("gray.700","gray.100"),marginRight:2},","))),a.createElement(b.x,{fontFamily:"Faustina",fontSize:{base:"xl",md:"2xl",lg:"3xl",xl:"5xl"}},"a Front-End developer who loves building apps!"),a.createElement(g.xu,{marginBlock:"2",height:[10,20],borderLeftWidth:"5px"}),a.createElement(b.x,{display:"block",fontSize:{base:"lg",md:"1xl",lg:"2xl",xl:"3xl"},color:(0,m.useColorModeValue)("gray.600","gray.100"),paddingRight:[0,0,0,8,200]},"Apart from coding for the web, I am a"," ",a.createElement(y.r,{href:"https://en.wikipedia.org/wiki/Lionel_Messi",alt:"Lionel Messi",target:"_blank",color:(0,m.useColorModeValue)("gray.700","gray.200")},"Lionel Messi")," ","acoloyte and an OG Minecrafter."))))),a.createElement(d.k,{align:"center",justify:"center",flex:1},a.createElement(u,{in:!0,offsetX:90},a.createElement(g.xu,{border:"5px solid",borderBottomWidth:"40px"},a.createElement(ut.S,{src:"../images/avatar.jpeg",quality:95,formats:["auto","webp","avif"],alt:"A Gatsby astronaut",__imageData:e(6240)}))))))}},6240:function(n){n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#586888","images":{"fallback":{"src":"/static/86e0be21ffb45c0989e76ad027a0f399/364db/avatar.jpg","srcSet":"/static/86e0be21ffb45c0989e76ad027a0f399/52b91/avatar.jpg 138w,\\n/static/86e0be21ffb45c0989e76ad027a0f399/4f398/avatar.jpg 275w,\\n/static/86e0be21ffb45c0989e76ad027a0f399/364db/avatar.jpg 550w","sizes":"(min-width: 550px) 550px, 100vw"},"sources":[{"srcSet":"/static/86e0be21ffb45c0989e76ad027a0f399/c7149/avatar.avif 138w,\\n/static/86e0be21ffb45c0989e76ad027a0f399/4cd12/avatar.avif 275w,\\n/static/86e0be21ffb45c0989e76ad027a0f399/fdc06/avatar.avif 550w","type":"image/avif","sizes":"(min-width: 550px) 550px, 100vw"},{"srcSet":"/static/86e0be21ffb45c0989e76ad027a0f399/b50cf/avatar.webp 138w,\\n/static/86e0be21ffb45c0989e76ad027a0f399/0c5aa/avatar.webp 275w,\\n/static/86e0be21ffb45c0989e76ad027a0f399/d6979/avatar.webp 550w","type":"image/webp","sizes":"(min-width: 550px) 550px, 100vw"}]},"width":550,"height":550}')}}]);
//# sourceMappingURL=component---src-pages-index-js-a32088406e5e5effc798.js.map