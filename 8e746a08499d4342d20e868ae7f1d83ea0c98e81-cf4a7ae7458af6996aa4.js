(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[276],{1531:function(n,t,e){"use strict";e.d(t,{E:function(){return v}});var r=e(2543),i=e(9127),a=e(4526),o=e(4667),u=e(7294),f=e(9439),c=e(4059);function l(){return l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},l.apply(this,arguments)}function s(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}var d=u.forwardRef((function(n,t){var e=n.htmlWidth,r=n.htmlHeight,i=n.alt,a=s(n,["htmlWidth","htmlHeight","alt"]);return u.createElement("img",l({width:e,height:r,ref:t,alt:i},a))})),v=(0,r.G)((function(n,t){var e=n.fallbackSrc,r=n.fallback,o=n.src,v=n.srcSet,p=n.align,x=n.fit,g=n.loading,m=n.ignoreFallback,y=n.crossOrigin,b=s(n,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),h=null!=g||m||void 0===e&&void 0===r,E=function(n){var t=n.loading,e=n.src,r=n.srcSet,i=n.onLoad,a=n.onError,o=n.crossOrigin,l=n.sizes,s=n.ignoreFallback,d=(0,u.useState)("pending"),v=(0,f.Z)(d,2),p=v[0],x=v[1];(0,u.useEffect)((function(){x(e?"loading":"pending")}),[e]);var g=(0,u.useRef)(),m=(0,u.useCallback)((function(){if(e){y();var n=new Image;n.src=e,o&&(n.crossOrigin=o),r&&(n.srcset=r),l&&(n.sizes=l),t&&(n.loading=t),n.onload=function(n){y(),x("loaded"),null==i||i(n)},n.onerror=function(n){y(),x("failed"),null==a||a(n)},g.current=n}}),[e,o,r,l,i,a,t]),y=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,c.G)((function(){if(!s)return"loading"===p&&m(),function(){y()}}),[p,m,s]),s?"loaded":p}(l({},n,{ignoreFallback:h})),O=l({ref:t,objectFit:x,objectPosition:p},h?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==E?r||u.createElement(i.m$.img,l({as:d,className:"chakra-image__placeholder",src:e},O)):u.createElement(i.m$.img,l({as:d,src:o,srcSet:v,crossOrigin:y,loading:g,className:"chakra-image"},O))}));o.Ts&&(v.displayName="Image")},4762:function(n,t,e){"use strict";e.d(t,{X:function(){return s}});var r=e(2543),i=e(3888),a=e(7487),o=e(9127),u=e(5587),f=e(4667),c=e(7294);function l(){return l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},l.apply(this,arguments)}var s=(0,r.G)((function(n,t){var e=(0,i.m)("Heading",n),r=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}((0,a.Lr)(n),["className"]);return c.createElement(o.m$.h2,l({ref:t,className:(0,u.cx)("chakra-heading",n.className)},r,{__css:e}))}));f.Ts&&(s.displayName="Heading")},2665:function(n,t,e){"use strict";e.d(t,{Vp:function(){return d}});var r=e(132),i=e(2543),a=e(3888),o=e(7487),u=e(9735),f=e(9127),c=e(4667),l=e(7294);function s(){return s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},s.apply(this,arguments)}var d=(0,i.G)((function(n,t){var e=(0,a.j)("Tag",n),r=(0,o.Lr)(n),i=s({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},e.container);return l.createElement(u.Fo,{value:e},l.createElement(f.m$.span,s({ref:t},r,{__css:i})))}));c.Ts&&(d.displayName="Tag");var v=(0,i.G)((function(n,t){var e=(0,u.yK)();return l.createElement(f.m$.span,s({ref:t,isTruncated:!0},n,{__css:e.label}))}));c.Ts&&(v.displayName="TagLabel");var p=(0,i.G)((function(n,t){return l.createElement(r.J,s({ref:t,verticalAlign:"top",marginEnd:"0.5rem"},n))}));c.Ts&&(p.displayName="TagLeftIcon");var x=(0,i.G)((function(n,t){return l.createElement(r.J,s({ref:t,verticalAlign:"top",marginStart:"0.5rem"},n))}));c.Ts&&(x.displayName="TagRightIcon");var g=function(n){return l.createElement(r.J,s({verticalAlign:"inherit",viewBox:"0 0 512 512"},n),l.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};c.Ts&&(g.displayName="TagCloseIcon");c.Ts},9508:function(n,t,e){"use strict";e.d(t,{R:function(){return s}});var r=e(5587),i=e(4667),a=e(908),o=e(4126),u=e(7294),f=e(1783);function c(){return c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},c.apply(this,arguments)}var l={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(n){var t,e=n.offsetX,r=n.offsetY,i=n.transition,a=n.transitionEnd,o=n.delay;return{opacity:0,x:e,y:r,transition:null!=(t=null==i?void 0:i.exit)?t:f.p$.exit(f.R.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(n){var t,e=n.transition,r=n.transitionEnd,i=n.delay;return{opacity:1,x:0,y:0,transition:null!=(t=null==e?void 0:e.enter)?t:f.p$.enter(f.R.enter,i),transitionEnd:null==r?void 0:r.enter}},exit:function(n){var t,e=n.offsetY,r=n.offsetX,i=n.transition,a=n.transitionEnd,o=n.reverse,u=n.delay,l={x:r,y:e};return c({opacity:0,transition:null!=(t=null==i?void 0:i.exit)?t:f.p$.exit(f.R.exit,u)},o?c({},l,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:c({},l,null==a?void 0:a.exit)})}}},s=u.forwardRef((function(n,t){var e=n.unmountOnExit,i=n.in,f=n.reverse,s=void 0===f||f,d=n.className,v=n.offsetX,p=void 0===v?0:v,x=n.offsetY,g=void 0===x?8:x,m=n.transition,y=n.transitionEnd,b=n.delay,h=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"]),E=!e||i&&e,O=i||e?"enter":"exit",j={offsetX:p,offsetY:g,reverse:s,transition:m,transitionEnd:y,delay:b};return u.createElement(a.M,{custom:j},E&&u.createElement(o.E.div,c({ref:t,className:(0,r.cx)("chakra-offset-slide",d),custom:j},l,{animate:O},h)))}));i.Ts&&(s.displayName="SlideFade")},2705:function(n,t,e){var r=e(5639).Symbol;n.exports=r},9932:function(n){n.exports=function(n,t){for(var e=-1,r=null==n?0:n.length,i=Array(r);++e<r;)i[e]=t(n[e],e,n);return i}},2663:function(n){n.exports=function(n,t,e,r){var i=-1,a=null==n?0:n.length;for(r&&a&&(e=n[++i]);++i<a;)e=t(e,n[i],i,n);return e}},9029:function(n){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(t)||[]}},4239:function(n,t,e){var r=e(2705),i=e(9607),a=e(2333),o=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":o&&o in Object(n)?i(n):a(n)}},8674:function(n){n.exports=function(n){return function(t){return null==n?void 0:n[t]}}},531:function(n,t,e){var r=e(2705),i=e(9932),a=e(1469),o=e(3448),u=r?r.prototype:void 0,f=u?u.toString:void 0;n.exports=function n(t){if("string"==typeof t)return t;if(a(t))return i(t,n)+"";if(o(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},5393:function(n,t,e){var r=e(2663),i=e(3816),a=e(8748),o=RegExp("['’]","g");n.exports=function(n){return function(t){return r(a(i(t).replace(o,"")),n,"")}}},9389:function(n,t,e){var r=e(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});n.exports=r},1957:function(n,t,e){var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;n.exports=r},9607:function(n,t,e){var r=e(2705),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,u=r?r.toStringTag:void 0;n.exports=function(n){var t=a.call(n,u),e=n[u];try{n[u]=void 0;var r=!0}catch(f){}var i=o.call(n);return r&&(t?n[u]=e:delete n[u]),i}},3157:function(n){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return t.test(n)}},2333:function(n){var t=Object.prototype.toString;n.exports=function(n){return t.call(n)}},5639:function(n,t,e){var r=e(1957),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();n.exports=a},2757:function(n){var t="\\u2700-\\u27bf",e="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+i+"]",o="\\d+",u="[\\u2700-\\u27bf]",f="["+e+"]",c="[^\\ud800-\\udfff"+i+o+t+e+r+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",v="(?:"+f+"|"+c+")",p="(?:"+d+"|"+c+")",x="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,s].join("|")+")"+y+m+")*"),h="(?:"+[u,l,s].join("|")+")"+b,E=RegExp([d+"?"+f+"+"+x+"(?="+[a,d,"$"].join("|")+")",p+"+"+g+"(?="+[a,d+v,"$"].join("|")+")",d+"?"+v+"+"+x,d+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,h].join("|"),"g");n.exports=function(n){return n.match(E)||[]}},3816:function(n,t,e){var r=e(9389),i=e(9833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=i(n))&&n.replace(a,r).replace(o,"")}},1469:function(n){var t=Array.isArray;n.exports=t},7005:function(n){n.exports=function(n){return null!=n&&"object"==typeof n}},3448:function(n,t,e){var r=e(4239),i=e(7005);n.exports=function(n){return"symbol"==typeof n||i(n)&&"[object Symbol]"==r(n)}},1804:function(n,t,e){var r=e(5393)((function(n,t,e){return n+(e?"-":"")+t.toLowerCase()}));n.exports=r},9833:function(n,t,e){var r=e(531);n.exports=function(n){return null==n?"":r(n)}},8748:function(n,t,e){var r=e(9029),i=e(3157),a=e(9833),o=e(2757);n.exports=function(n,t,e){return n=a(n),void 0===(t=e?void 0:t)?i(n)?o(n):r(n):n.match(t)||[]}}}]);
//# sourceMappingURL=8e746a08499d4342d20e868ae7f1d83ea0c98e81-cf4a7ae7458af6996aa4.js.map