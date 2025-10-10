import{S as Tt,i as Dt,s as Rt,e as k,t as H,c as w,a as C,h as U,d as p,b as v,g as K,I as d,E as Pt,k as T,w as _t,m as D,x as Et,J as Ba,K as St,y as Nt,L as zt,q as bt,o as yt,B as Lt,G as va,M as ga,v as Wa,N as Xa,O as qa,P as Ka,Q as Ja,R as Qa}from"../chunks/index-a406831b.js";import{g as ha}from"../chunks/stores-337efdd9.js";import{i as Za}from"../chunks/utils-fe75466e.js";import{d as tn}from"../chunks/index-0a8cc7fc.js";import{_ as en,a as an,b as nn,c as rn,t as on}from"../chunks/canonical-0a468a43.js";/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function je(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?je(Object(a),!0).forEach(function(n){fn(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):je(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Zt(t){return Zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zt(t)}function sn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ve(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ln(t,e,a){return e&&Ve(t.prototype,e),a&&Ve(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function fn(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function xe(t,e){return un(t)||dn(t,e)||pa(t,e)||gn()}function ne(t){return cn(t)||mn(t)||pa(t)||vn()}function cn(t){if(Array.isArray(t))return me(t)}function un(t){if(Array.isArray(t))return t}function mn(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dn(t,e){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n=[],r=!0,s=!1,i,o;try{for(a=a.call(t);!(r=(i=a.next()).done)&&(n.push(i.value),!(e&&n.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(s)throw o}}return n}}function pa(t,e){if(!!t){if(typeof t=="string")return me(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return me(t,e)}}function me(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function vn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ye=function(){},Ae={},ba={},ya=null,ka={mark:Ye,measure:Ye};try{typeof window!="undefined"&&(Ae=window),typeof document!="undefined"&&(ba=document),typeof MutationObserver!="undefined"&&(ya=MutationObserver),typeof performance!="undefined"&&(ka=performance)}catch{}var hn=Ae.navigator||{},He=hn.userAgent,Ue=He===void 0?"":He,vt=Ae,I=ba,Ge=ya,qt=ka;vt.document;var ct=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",wa=~Ue.indexOf("MSIE")||~Ue.indexOf("Trident/"),st="___FONT_AWESOME___",de=16,Ca="fa",xa="svg-inline--fa",wt="data-fa-i2svg",ve="data-fa-pseudo-element",pn="data-fa-pseudo-element-pending",_e="data-prefix",Ee="data-icon",Be="fontawesome-i2svg",bn="async",yn=["HTML","HEAD","STYLE","SCRIPT"],Aa=function(){try{return!0}catch{return!1}}(),Se={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},te={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},_a={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},kn={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},wn=/fa[srltdbk\-\ ]/,Ea="fa-layers-text",Cn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,xn={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Sa=[1,2,3,4,5,6,7,8,9,10],An=Sa.concat([11,12,13,14,15,16,17,18,19,20]),_n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=[].concat(ne(Object.keys(te)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",kt.GROUP,kt.SWAP_OPACITY,kt.PRIMARY,kt.SECONDARY]).concat(Sa.map(function(t){return"".concat(t,"x")})).concat(An.map(function(t){return"w-".concat(t)})),Na=vt.FontAwesomeConfig||{};function Sn(t){var e=I.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Nn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(I&&typeof I.querySelector=="function"){var zn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zn.forEach(function(t){var e=xe(t,2),a=e[0],n=e[1],r=Nn(Sn(a));r!=null&&(Na[n]=r)})}var Ln={familyPrefix:Ca,styleDefault:"solid",replacementClass:xa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ht=h(h({},Ln),Na);Ht.autoReplaceSvg||(Ht.observeMutations=!1);var y={};Object.keys(Ht).forEach(function(t){Object.defineProperty(y,t,{enumerable:!0,set:function(a){Ht[t]=a,Kt.forEach(function(n){return n(y)})},get:function(){return Ht[t]}})});vt.FontAwesomeConfig=y;var Kt=[];function In(t){return Kt.push(t),function(){Kt.splice(Kt.indexOf(t),1)}}var dt=de,nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mn(t){if(!(!t||!ct)){var e=I.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=I.head.childNodes,n=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=s)}return I.head.insertBefore(e,n),t}}var Pn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){for(var t=12,e="";t-- >0;)e+=Pn[Math.random()*62|0];return e}function $t(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function Ne(t){return t.classList?$t(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function za(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function On(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(za(t[a]),'" ')},"").trim()}function re(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function ze(t){return t.size!==nt.size||t.x!==nt.x||t.y!==nt.y||t.rotate!==nt.rotate||t.flipX||t.flipY}function Tn(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(i," ").concat(o)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Dn(t){var e=t.transform,a=t.width,n=a===void 0?de:a,r=t.height,s=r===void 0?de:r,i=t.startCentered,o=i===void 0?!1:i,l="";return o&&wa?l+="translate(".concat(e.x/dt-n/2,"em, ").concat(e.y/dt-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/dt,"em), calc(-50% + ").concat(e.y/dt,"em)) "):l+="translate(".concat(e.x/dt,"em, ").concat(e.y/dt,"em) "),l+="scale(".concat(e.size/dt*(e.flipX?-1:1),", ").concat(e.size/dt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Rn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function La(){var t=Ca,e=xa,a=y.familyPrefix,n=y.replacementClass,r=Rn;if(a!==t||n!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(n))}return r}var We=!1;function le(){y.autoAddCss&&!We&&(Mn(La()),We=!0)}var $n={mixout:function(){return{dom:{css:La,insertCss:le}}},hooks:function(){return{beforeDOMElementCreation:function(){le()},beforeI2svg:function(){le()}}}},lt=vt||{};lt[st]||(lt[st]={});lt[st].styles||(lt[st].styles={});lt[st].hooks||(lt[st].hooks={});lt[st].shims||(lt[st].shims=[]);var et=lt[st],Ia=[],Fn=function t(){I.removeEventListener("DOMContentLoaded",t),ee=1,Ia.map(function(e){return e()})},ee=!1;ct&&(ee=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),ee||I.addEventListener("DOMContentLoaded",Fn));function jn(t){!ct||(ee?setTimeout(t,0):Ia.push(t))}function Bt(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?za(t):"<".concat(e," ").concat(On(n),">").concat(s.map(Bt).join(""),"</").concat(e,">")}function Xe(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var Vn=function(e,a){return function(n,r,s,i){return e.call(a,n,r,s,i)}},fe=function(e,a,n,r){var s=Object.keys(e),i=s.length,o=r!==void 0?Vn(a,r):a,l,u,c;for(n===void 0?(l=1,c=e[s[0]]):(l=0,c=n);l<i;l++)u=s[l],c=o(c,e[u],u,e);return c};function Yn(t){for(var e=[],a=0,n=t.length;a<n;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var s=t.charCodeAt(a++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),a--)}else e.push(r)}return e}function ge(t){var e=Yn(t);return e.length===1?e[0].toString(16):null}function Hn(t,e){var a=t.length,n=t.charCodeAt(e),r;return n>=55296&&n<=56319&&a>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function qe(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function he(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,s=qe(e);typeof et.hooks.addPack=="function"&&!r?et.hooks.addPack(t,qe(e)):et.styles[t]=h(h({},et.styles[t]||{}),s),t==="fas"&&he("fa",e)}var Ut=et.styles,Un=et.shims,Gn=Object.values(_a),Le=null,Ma={},Pa={},Oa={},Ta={},Da={},Bn=Object.keys(Se);function Wn(t){return~En.indexOf(t)}function Xn(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!Wn(r)?r:null}var Ra=function(){var e=function(s){return fe(Ut,function(i,o,l){return i[l]=fe(o,s,{}),i},{})};Ma=e(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=i})}return r}),Pa=e(function(r,s,i){if(r[i]=i,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=i})}return r}),Da=e(function(r,s,i){var o=s[2];return r[i]=i,o.forEach(function(l){r[l]=i}),r});var a="far"in Ut||y.autoFetchSvg,n=fe(Un,function(r,s){var i=s[0],o=s[1],l=s[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Oa=n.names,Ta=n.unicodes,Le=ie(y.styleDefault)};In(function(t){Le=ie(t.styleDefault)});Ra();function Ie(t,e){return(Ma[t]||{})[e]}function qn(t,e){return(Pa[t]||{})[e]}function It(t,e){return(Da[t]||{})[e]}function $a(t){return Oa[t]||{prefix:null,iconName:null}}function Kn(t){var e=Ta[t],a=Ie("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function gt(){return Le}var Me=function(){return{prefix:null,iconName:null,rest:[]}};function ie(t){var e=Se[t],a=te[t]||te[e],n=t in et.styles?t:null;return a||n||null}function oe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,n=a===void 0?!1:a,r=null,s=t.reduce(function(i,o){var l=Xn(y.familyPrefix,o);if(Ut[o]?(o=Gn.includes(o)?kn[o]:o,r=o,i.prefix=o):Bn.indexOf(o)>-1?(r=o,i.prefix=ie(o)):l?i.iconName=l:o!==y.replacementClass&&i.rest.push(o),!n&&i.prefix&&i.iconName){var u=r==="fa"?$a(i.iconName):{},c=It(i.prefix,i.iconName);u.prefix&&(r=null),i.iconName=u.iconName||c||i.iconName,i.prefix=u.prefix||i.prefix,i.prefix==="far"&&!Ut.far&&Ut.fas&&!y.autoFetchSvg&&(i.prefix="fas")}return i},Me());return(s.prefix==="fa"||r==="fa")&&(s.prefix=gt()||"fas"),s}var Jn=function(){function t(){sn(this,t),this.definitions={}}return ln(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=h(h({},a.definitions[o]||{}),i[o]),he(o,i[o]);var l=_a[o];l&&he(l,i[o]),Ra()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var i=r[s],o=i.prefix,l=i.iconName,u=i.icon,c=u[2];a[o]||(a[o]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(a[o][m]=u)}),a[o][l]=u}),a}}]),t}(),Ke=[],Mt={},Ot={},Qn=Object.keys(Ot);function Zn(t,e){var a=e.mixoutsTo;return Ke=t,Mt={},Object.keys(Ot).forEach(function(n){Qn.indexOf(n)===-1&&delete Ot[n]}),Ke.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),Zt(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=r[i][o]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(i){Mt[i]||(Mt[i]=[]),Mt[i].push(s[i])})}n.provides&&n.provides(Ot)}),a}function pe(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var s=Mt[t]||[];return s.forEach(function(i){e=i.apply(null,[e].concat(n))}),e}function Ct(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=Mt[t]||[];r.forEach(function(s){s.apply(null,a)})}function ft(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ot[t]?Ot[t].apply(null,e):void 0}function be(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||gt();if(!!e)return e=It(a,e)||e,Xe(Fa.definitions,a,e)||Xe(et.styles,a,e)}var Fa=new Jn,tr=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,Ct("noAuto")},er={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ct?(Ct("beforeI2svg",e),ft("pseudoElements2svg",e),ft("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,jn(function(){nr({autoReplaceSvgRoot:a}),Ct("watch",e)})}},ar={icon:function(e){if(e===null)return null;if(Zt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:It(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ie(e[0]);return{prefix:n,iconName:It(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(y.familyPrefix,"-"))>-1||e.match(wn))){var r=oe(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||gt(),iconName:It(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=gt();return{prefix:s,iconName:It(s,e)||e}}}},X={noAuto:tr,config:y,dom:er,parse:ar,library:Fa,findIconDefinition:be,toHtml:Bt},nr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?I:a;(Object.keys(et.styles).length>0||y.autoFetchSvg)&&ct&&y.autoReplaceSvg&&X.dom.i2svg({node:n})};function se(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Bt(n)})}}),Object.defineProperty(t,"node",{get:function(){if(!!ct){var n=I.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function rr(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,s=t.styles,i=t.transform;if(ze(i)&&a.found&&!n.found){var o=a.width,l=a.height,u={x:o/l/2,y:.5};r.style=re(h(h({},s),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ir(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,s=t.symbol,i=s===!0?"".concat(e,"-").concat(y.familyPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:i}),children:n}]}]}function Pe(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,s=t.iconName,i=t.transform,o=t.symbol,l=t.title,u=t.maskId,c=t.titleId,m=t.extra,g=t.watchable,f=g===void 0?!1:g,b=n.found?n:a,x=b.width,_=b.height,N=r==="fak",L=[y.replacementClass,s?"".concat(y.familyPrefix,"-").concat(s):""].filter(function(F){return m.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(m.classes).join(" "),M={children:[],attributes:h(h({},m.attributes),{},{"data-prefix":r,"data-icon":s,class:L,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(_)})},$=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(x/_*16*.0625,"em")}:{};f&&(M.attributes[wt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(c||Gt())},children:[l]}),delete M.attributes.title);var S=h(h({},M),{},{prefix:r,iconName:s,main:a,mask:n,maskId:u,transform:i,symbol:o,styles:h(h({},$),m.styles)}),R=n.found&&a.found?ft("generateAbstractMask",S)||{children:[],attributes:{}}:ft("generateAbstractIcon",S)||{children:[],attributes:{}},G=R.children,P=R.attributes;return S.children=G,S.attributes=P,o?ir(S):rr(S)}function Je(t){var e=t.content,a=t.width,n=t.height,r=t.transform,s=t.title,i=t.extra,o=t.watchable,l=o===void 0?!1:o,u=h(h(h({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});l&&(u[wt]="");var c=h({},i.styles);ze(r)&&(c.transform=Dn({transform:r,startCentered:!0,width:a,height:n}),c["-webkit-transform"]=c.transform);var m=re(c);m.length>0&&(u.style=m);var g=[];return g.push({tag:"span",attributes:u,children:[e]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function or(t){var e=t.content,a=t.title,n=t.extra,r=h(h(h({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),s=re(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var ce=et.styles;function ye(t){var e=t[0],a=t[1],n=t.slice(4),r=xe(n,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(y.familyPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:a,icon:i}}var sr={found:!1,width:512,height:512};function lr(t,e){!Aa&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ke(t,e){var a=e;return e==="fa"&&y.styleDefault!==null&&(e=gt()),new Promise(function(n,r){if(ft("missingIconAbstract"),a==="fa"){var s=$a(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ce[e]&&ce[e][t]){var i=ce[e][t];return n(ye(i))}lr(t,e),n(h(h({},sr),{},{icon:y.showMissingIcons&&t?ft("missingIconAbstract")||{}:{}}))})}var Qe=function(){},we=y.measurePerformance&&qt&&qt.mark&&qt.measure?qt:{mark:Qe,measure:Qe},Yt='FA "6.1.1"',fr=function(e){return we.mark("".concat(Yt," ").concat(e," begins")),function(){return ja(e)}},ja=function(e){we.mark("".concat(Yt," ").concat(e," ends")),we.measure("".concat(Yt," ").concat(e),"".concat(Yt," ").concat(e," begins"),"".concat(Yt," ").concat(e," ends"))},Oe={begin:fr,end:ja},Jt=function(){};function Ze(t){var e=t.getAttribute?t.getAttribute(wt):null;return typeof e=="string"}function cr(t){var e=t.getAttribute?t.getAttribute(_e):null,a=t.getAttribute?t.getAttribute(Ee):null;return e&&a}function ur(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function mr(){if(y.autoReplaceSvg===!0)return Qt.replace;var t=Qt[y.autoReplaceSvg];return t||Qt.replace}function dr(t){return I.createElementNS("http://www.w3.org/2000/svg",t)}function vr(t){return I.createElement(t)}function Va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?dr:vr:a;if(typeof t=="string")return I.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var s=t.children||[];return s.forEach(function(i){r.appendChild(Va(i,{ceFn:n}))}),r}function gr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Qt={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(Va(r),a)}),a.getAttribute(wt)===null&&y.keepOriginalSource){var n=I.createComment(gr(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~Ne(a).indexOf(y.replacementClass))return Qt.replace(e);var r=new RegExp("".concat(y.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(o,l){return l===y.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=n.map(function(o){return Bt(o)}).join(`
`);a.setAttribute(wt,""),a.innerHTML=i}};function ta(t){t()}function Ya(t,e){var a=typeof e=="function"?e:Jt;if(t.length===0)a();else{var n=ta;y.mutateApproach===bn&&(n=vt.requestAnimationFrame||ta),n(function(){var r=mr(),s=Oe.begin("mutate");t.map(r),s(),a()})}}var Te=!1;function Ha(){Te=!0}function Ce(){Te=!1}var ae=null;function ea(t){if(!!Ge&&!!y.observeMutations){var e=t.treeCallback,a=e===void 0?Jt:e,n=t.nodeCallback,r=n===void 0?Jt:n,s=t.pseudoElementsCallback,i=s===void 0?Jt:s,o=t.observeMutationsRoot,l=o===void 0?I:o;ae=new Ge(function(u){if(!Te){var c=gt();$t(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ze(m.addedNodes[0])&&(y.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&y.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&Ze(m.target)&&~_n.indexOf(m.attributeName))if(m.attributeName==="class"&&cr(m.target)){var g=oe(Ne(m.target)),f=g.prefix,b=g.iconName;m.target.setAttribute(_e,f||c),b&&m.target.setAttribute(Ee,b)}else ur(m.target)&&r(m.target)})}}),ct&&ae.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hr(){!ae||ae.disconnect()}function pr(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(n[i]=o.join(":").trim()),n},{})),a}function br(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=oe(Ne(t));return r.prefix||(r.prefix=gt()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||r.prefix&&n.length>0&&(r.iconName=qn(r.prefix,t.innerText)||Ie(r.prefix,ge(t.innerText))),r}function yr(t){var e=$t(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return y.autoA11y&&(a?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(n||Gt()):(e["aria-hidden"]="true",e.focusable="false")),e}function kr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function aa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=br(t),n=a.iconName,r=a.prefix,s=a.rest,i=yr(t),o=pe("parseNodeAttributes",{},t),l=e.styleParser?pr(t):[];return h({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i}},o)}var wr=et.styles;function Ua(t){var e=y.autoReplaceSvg==="nest"?aa(t,{styleParser:!1}):aa(t);return~e.extra.classes.indexOf(Ea)?ft("generateLayersText",t,e):ft("generateSvgReplacementMutation",t,e)}function na(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ct)return Promise.resolve();var a=I.documentElement.classList,n=function(m){return a.add("".concat(Be,"-").concat(m))},r=function(m){return a.remove("".concat(Be,"-").concat(m))},s=y.autoFetchSvg?Object.keys(Se):Object.keys(wr),i=[".".concat(Ea,":not([").concat(wt,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(wt,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=$t(t.querySelectorAll(i))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Oe.begin("onTree"),u=o.reduce(function(c,m){try{var g=Ua(m);g&&c.push(g)}catch(f){Aa||f.name==="MissingIcon"&&console.error(f)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(g){Ya(g,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(g){l(),m(g)})})}function Cr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ua(t).then(function(a){a&&Ya([a],e)})}function xr(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:be(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:be(r||{})),t(n,h(h({},a),{},{mask:r}))}}var Ar=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?nt:n,s=a.symbol,i=s===void 0?!1:s,o=a.mask,l=o===void 0?null:o,u=a.maskId,c=u===void 0?null:u,m=a.title,g=m===void 0?null:m,f=a.titleId,b=f===void 0?null:f,x=a.classes,_=x===void 0?[]:x,N=a.attributes,L=N===void 0?{}:N,M=a.styles,$=M===void 0?{}:M;if(!!e){var S=e.prefix,R=e.iconName,G=e.icon;return se(h({type:"icon"},e),function(){return Ct("beforeDOMElementCreation",{iconDefinition:e,params:a}),y.autoA11y&&(g?L["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(b||Gt()):(L["aria-hidden"]="true",L.focusable="false")),Pe({icons:{main:ye(G),mask:l?ye(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:R,transform:h(h({},nt),r),symbol:i,title:g,maskId:c,titleId:b,extra:{attributes:L,styles:$,classes:_}})})}},_r={mixout:function(){return{icon:xr(Ar)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=na,a.nodeCallback=Cr,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?I:n,s=a.callback,i=s===void 0?function(){}:s;return na(r,i)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,s=n.title,i=n.titleId,o=n.prefix,l=n.transform,u=n.symbol,c=n.mask,m=n.maskId,g=n.extra;return new Promise(function(f,b){Promise.all([ke(r,o),c.iconName?ke(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var _=xe(x,2),N=_[0],L=_[1];f([a,Pe({icons:{main:N,mask:L},prefix:o,iconName:r,transform:l,symbol:u,maskId:m,title:s,titleId:i,extra:g,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,s=a.main,i=a.transform,o=a.styles,l=re(o);l.length>0&&(r.style=l);var u;return ze(i)&&(u=ft("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(u||s.icon),{children:n,attributes:r}}}},Er={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return se({type:"layer"},function(){Ct("beforeDOMElementCreation",{assembler:a,params:n});var i=[];return a(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.familyPrefix,"-layers")].concat(ne(s)).join(" ")},children:i}]})}}}},Sr={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,s=r===void 0?null:r,i=n.classes,o=i===void 0?[]:i,l=n.attributes,u=l===void 0?{}:l,c=n.styles,m=c===void 0?{}:c;return se({type:"counter",content:a},function(){return Ct("beforeDOMElementCreation",{content:a,params:n}),or({content:a.toString(),title:s,extra:{attributes:u,styles:m,classes:["".concat(y.familyPrefix,"-layers-counter")].concat(ne(o))}})})}}}},Nr={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?nt:r,i=n.title,o=i===void 0?null:i,l=n.classes,u=l===void 0?[]:l,c=n.attributes,m=c===void 0?{}:c,g=n.styles,f=g===void 0?{}:g;return se({type:"text",content:a},function(){return Ct("beforeDOMElementCreation",{content:a,params:n}),Je({content:a,transform:h(h({},nt),s),title:o,extra:{attributes:m,styles:f,classes:["".concat(y.familyPrefix,"-layers-text")].concat(ne(u))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.title,s=n.transform,i=n.extra,o=null,l=null;if(wa){var u=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();o=c.width/u,l=c.height/u}return y.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,Je({content:a.innerHTML,width:o,height:l,transform:s,title:r,extra:i,watchable:!0})])}}},zr=new RegExp('"',"ug"),ra=[1105920,1112319];function Lr(t){var e=t.replace(zr,""),a=Hn(e,0),n=a>=ra[0]&&a<=ra[1],r=e.length===2?e[0]===e[1]:!1;return{value:ge(r?e[0]:e),isSecondary:n||r}}function ia(t,e){var a="".concat(pn).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var s=$t(t.children),i=s.filter(function(R){return R.getAttribute(ve)===e})[0],o=vt.getComputedStyle(t,e),l=o.getPropertyValue("font-family").match(Cn),u=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(i&&!l)return t.removeChild(i),n();if(l&&c!=="none"&&c!==""){var m=o.getPropertyValue("content"),g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?te[l[2].toLowerCase()]:xn[u],f=Lr(m),b=f.value,x=f.isSecondary,_=l[0].startsWith("FontAwesome"),N=Ie(g,b),L=N;if(_){var M=Kn(b);M.iconName&&M.prefix&&(N=M.iconName,g=M.prefix)}if(N&&!x&&(!i||i.getAttribute(_e)!==g||i.getAttribute(Ee)!==L)){t.setAttribute(a,L),i&&t.removeChild(i);var $=kr(),S=$.extra;S.attributes[ve]=e,ke(N,g).then(function(R){var G=Pe(h(h({},$),{},{icons:{main:R,mask:Me()},prefix:g,iconName:L,extra:S,watchable:!0})),P=I.createElement("svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=G.map(function(F){return Bt(F)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Ir(t){return Promise.all([ia(t,"::before"),ia(t,"::after")])}function Mr(t){return t.parentNode!==document.head&&!~yn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ve)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function oa(t){if(!!ct)return new Promise(function(e,a){var n=$t(t.querySelectorAll("*")).filter(Mr).map(Ir),r=Oe.begin("searchPseudoElements");Ha(),Promise.all(n).then(function(){r(),Ce(),e()}).catch(function(){r(),Ce(),a()})})}var Pr={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=oa,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?I:n;y.searchPseudoElements&&oa(r)}}},sa=!1,Or={mixout:function(){return{dom:{unwatch:function(){Ha(),sa=!0}}}},hooks:function(){return{bootstrap:function(){ea(pe("mutationObserverCallbacks",{}))},noAuto:function(){hr()},watch:function(a){var n=a.observeMutationsRoot;sa?Ce():ea(pe("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},la=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var s=r.toLowerCase().split("-"),i=s[0],o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},a)},Tr={mixout:function(){return{parse:{transform:function(a){return la(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=la(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},g={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:m,path:g};return{tag:"g",attributes:h({},f.outer),children:[{tag:"g",attributes:h({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:h(h({},n.icon.attributes),f.path)}]}]}}}},ue={x:0,y:0,width:"100%",height:"100%"};function fa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Dr(t){return t.tag==="g"?t.children:[t]}var Rr={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),s=r?oe(r.split(" ").map(function(i){return i.trim()})):Me();return s.prefix||(s.prefix=gt()),a.mask=s,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,s=a.main,i=a.mask,o=a.maskId,l=a.transform,u=s.width,c=s.icon,m=i.width,g=i.icon,f=Tn({transform:l,containerWidth:m,iconWidth:u}),b={tag:"rect",attributes:h(h({},ue),{},{fill:"white"})},x=c.children?{children:c.children.map(fa)}:{},_={tag:"g",attributes:h({},f.inner),children:[fa(h({tag:c.tag,attributes:h(h({},c.attributes),f.path)},x))]},N={tag:"g",attributes:h({},f.outer),children:[_]},L="mask-".concat(o||Gt()),M="clip-".concat(o||Gt()),$={tag:"mask",attributes:h(h({},ue),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,N]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Dr(g)},$]};return n.push(S,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(L,")")},ue)}),{children:n,attributes:r}}}},$r={provides:function(e){var a=!1;vt.matchMedia&&(a=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=h(h({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||o.children.push({tag:"animate",attributes:h(h({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:h(h({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Fr={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},jr=[$n,_r,Er,Sr,Nr,Pr,Or,Tr,Rr,$r,Fr];Zn(jr,{mixoutsTo:X});X.noAuto;X.config;var Vr=X.library,Yr=X.dom;X.parse;X.findIconDefinition;X.toHtml;X.icon;X.layer;X.text;X.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Hr={prefix:"fas",iconName:"angles-left",icon:[448,512,[171,"angle-double-left"],"f100","M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"]},Ur=Hr,Gr={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]},Br=Gr,Wr={prefix:"fas",iconName:"bomb",icon:[512,512,[128163],"f1e2","M440.8 4.994C441.9 1.99 444.8 0 448 0C451.2 0 454.1 1.99 455.2 4.994L469.3 42.67L507 56.79C510 57.92 512 60.79 512 64C512 67.21 510 70.08 507 71.21L469.3 85.33L455.2 123C454.1 126 451.2 128 448 128C444.8 128 441.9 126 440.8 123L426.7 85.33L388.1 71.21C385.1 70.08 384 67.21 384 64C384 60.79 385.1 57.92 388.1 56.79L426.7 42.67L440.8 4.994zM289.4 97.37C301.9 84.88 322.1 84.88 334.6 97.37L363.3 126.1L380.7 108.7C386.9 102.4 397.1 102.4 403.3 108.7C409.6 114.9 409.6 125.1 403.3 131.3L385.9 148.7L414.6 177.4C427.1 189.9 427.1 210.1 414.6 222.6L403.8 233.5C411.7 255.5 416 279.3 416 304C416 418.9 322.9 512 208 512C93.12 512 0 418.9 0 304C0 189.1 93.12 96 208 96C232.7 96 256.5 100.3 278.5 108.3L289.4 97.37zM95.1 296C95.1 238.6 142.6 192 199.1 192H207.1C216.8 192 223.1 184.8 223.1 176C223.1 167.2 216.8 160 207.1 160H199.1C124.9 160 63.1 220.9 63.1 296V304C63.1 312.8 71.16 320 79.1 320C88.84 320 95.1 312.8 95.1 304V296z"]},Xr={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"]},qr={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"]},Kr={prefix:"fas",iconName:"comments",icon:[640,512,[61670,128490],"f086","M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z"]},Jr={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96C352 110.3 348.9 123.9 343.2 136.2L396 227.4C372.3 252.7 341.9 271.5 307.6 281L256 192H255.1L187.9 309.5C209.4 316.3 232.3 320 256 320C326.7 320 389.8 287.3 430.9 235.1C441.9 222.2 462.1 219.1 475.9 231C489.7 242.1 491.9 262.2 480.8 276C428.1 341.8 346.1 384 256 384C220.6 384 186.6 377.6 155.3 365.9L98.65 463.7C93.95 471.8 86.97 478.4 78.58 482.6L23.16 510.3C18.2 512.8 12.31 512.5 7.588 509.6C2.871 506.7 0 501.5 0 496V440.6C0 432.2 2.228 423.9 6.46 416.5L66.49 312.9C53.66 301.6 41.84 289.3 31.18 276C20.13 262.2 22.34 242.1 36.13 231C49.92 219.1 70.06 222.2 81.12 235.1C86.79 243.1 92.87 249.8 99.34 256.1L168.8 136.2C163.1 123.9 160 110.3 160 96C160 42.98 202.1 0 256 0C309 0 352 42.98 352 96L352 96zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM372.1 393.9C405.5 381.1 435.5 363.2 461.8 341L505.5 416.5C509.8 423.9 512 432.2 512 440.6V496C512 501.5 509.1 506.7 504.4 509.6C499.7 512.5 493.8 512.8 488.8 510.3L433.4 482.6C425 478.4 418.1 471.8 413.3 463.7L372.1 393.9z"]},Qr={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"]},Zr={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z"]},ti={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},ei={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z"]},ai=ei,ni={prefix:"fas",iconName:"user",icon:[448,512,[62144,128100],"f007","M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ri={prefix:"fab",iconName:"docker",icon:[640,512,[],"f395","M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"]},ii={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]},oi={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},si={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},li={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},fi={prefix:"fab",iconName:"laravel",icon:[512,512,[],"f3bd","M504.4 115.8a5.72 5.72 0 0 0 -.28-.68 8.52 8.52 0 0 0 -.53-1.25 6 6 0 0 0 -.54-.71 9.36 9.36 0 0 0 -.72-.94c-.23-.22-.52-.4-.77-.6a8.84 8.84 0 0 0 -.9-.68L404.4 55.55a8 8 0 0 0 -8 0L300.1 111h0a8.07 8.07 0 0 0 -.88 .69 7.68 7.68 0 0 0 -.78 .6 8.23 8.23 0 0 0 -.72 .93c-.17 .24-.39 .45-.54 .71a9.7 9.7 0 0 0 -.52 1.25c-.08 .23-.21 .44-.28 .68a8.08 8.08 0 0 0 -.28 2.08V223.2l-80.22 46.19V63.44a7.8 7.8 0 0 0 -.28-2.09c-.06-.24-.2-.45-.28-.68a8.35 8.35 0 0 0 -.52-1.24c-.14-.26-.37-.47-.54-.72a9.36 9.36 0 0 0 -.72-.94 9.46 9.46 0 0 0 -.78-.6 9.8 9.8 0 0 0 -.88-.68h0L115.6 1.07a8 8 0 0 0 -8 0L11.34 56.49h0a6.52 6.52 0 0 0 -.88 .69 7.81 7.81 0 0 0 -.79 .6 8.15 8.15 0 0 0 -.71 .93c-.18 .25-.4 .46-.55 .72a7.88 7.88 0 0 0 -.51 1.24 6.46 6.46 0 0 0 -.29 .67 8.18 8.18 0 0 0 -.28 2.1v329.7a8 8 0 0 0 4 6.95l192.5 110.8a8.83 8.83 0 0 0 1.33 .54c.21 .08 .41 .2 .63 .26a7.92 7.92 0 0 0 4.1 0c.2-.05 .37-.16 .55-.22a8.6 8.6 0 0 0 1.4-.58L404.4 400.1a8 8 0 0 0 4-6.95V287.9l92.24-53.11a8 8 0 0 0 4-7V117.9A8.63 8.63 0 0 0 504.4 115.8zM111.6 17.28h0l80.19 46.15-80.2 46.18L31.41 63.44zm88.25 60V278.6l-46.53 26.79-33.69 19.4V123.5l46.53-26.79zm0 412.8L23.37 388.5V77.32L57.06 96.7l46.52 26.8V338.7a6.94 6.94 0 0 0 .12 .9 8 8 0 0 0 .16 1.18h0a5.92 5.92 0 0 0 .38 .9 6.38 6.38 0 0 0 .42 1v0a8.54 8.54 0 0 0 .6 .78 7.62 7.62 0 0 0 .66 .84l0 0c.23 .22 .52 .38 .77 .58a8.93 8.93 0 0 0 .86 .66l0 0 0 0 92.19 52.18zm8-106.2-80.06-45.32 84.09-48.41 92.26-53.11 80.13 46.13-58.8 33.56zm184.5 4.57L215.9 490.1V397.8L346.6 323.2l45.77-26.15zm0-119.1L358.7 250l-46.53-26.79V131.8l33.69 19.4L392.4 178zm8-105.3-80.2-46.17 80.2-46.16 80.18 46.15zm8 105.3V178L455 151.2l33.68-19.4v91.39h0z"]},ci={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"]},ui={prefix:"fab",iconName:"node-js",icon:[448,512,[],"f3d3","M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"]},mi={prefix:"fab",iconName:"php",icon:[640,512,[],"f457","M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"]},di={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]},vi={prefix:"fab",iconName:"vuejs",icon:[448,512,[],"f41f","M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"]};const gi=[qr,Ur,Br,Zr,ai,Kr,ti,Wr,Xr,ni,Jr,Qr,di,ii,ci,si,oi,vi,mi,fi,li,ui,ri];gi.forEach(t=>Vr.add(t));Yr.watch();function hi(t){let e,a,n,r,s;return{c(){e=k("div"),a=H(`You are viewing the archived version of my portoflio. You can check my latest
  work at `),n=k("b"),r=k("a"),s=H("angelblanco.dev"),this.h()},l(i){e=w(i,"DIV",{class:!0});var o=C(e);a=U(o,`You are viewing the archived version of my portoflio. You can check my latest
  work at `),n=w(o,"B",{});var l=C(n);r=w(l,"A",{href:!0});var u=C(r);s=U(u,"angelblanco.dev"),u.forEach(p),l.forEach(p),o.forEach(p),this.h()},h(){v(r,"href","https://angelblanco.dev"),v(e,"class","legacy-note svelte-11b0m2x")},m(i,o){K(i,e,o),d(e,a),d(e,n),d(n,r),d(r,s)},p:Pt,i:Pt,o:Pt,d(i){i&&p(e)}}}class Ga extends Tt{constructor(e){super(),Dt(this,e,null,hi,Rt,{})}}function pi(t){let e,a,n,r,s,i,o,l,u,c,m,g,f,b,x,_,N,L,M,$,S,R,G,P,F,rt,J,it,Q,ut,q,V,Z,tt,at,O,A,j,E,B,xt,Ft;return E=new Ga({}),{c(){e=k("nav"),a=k("div"),n=k("a"),r=k("img"),i=T(),o=k("span"),l=k("span"),u=T(),c=k("span"),m=T(),g=k("span"),f=T(),b=k("div"),x=k("div"),_=k("a"),N=k("span"),L=k("i"),M=T(),$=k("span"),S=H("Articles"),G=T(),P=k("a"),F=k("span"),rt=k("i"),J=T(),it=k("span"),Q=H("About"),q=T(),V=k("a"),Z=k("span"),tt=k("i"),at=T(),O=k("span"),A=H("Github"),j=T(),_t(E.$$.fragment),this.h()},l(z){e=w(z,"NAV",{class:!0,"aria-label":!0});var Y=C(e);a=w(Y,"DIV",{class:!0});var ht=C(a);n=w(ht,"A",{class:!0,href:!0});var jt=C(n);r=w(jt,"IMG",{alt:!0,src:!0,width:!0,height:!0}),jt.forEach(p),i=D(ht),o=w(ht,"SPAN",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0});var W=C(o);l=w(W,"SPAN",{"aria-hidden":!0}),C(l).forEach(p),u=D(W),c=w(W,"SPAN",{"aria-hidden":!0}),C(c).forEach(p),m=D(W),g=w(W,"SPAN",{"aria-hidden":!0}),C(g).forEach(p),W.forEach(p),ht.forEach(p),f=D(Y),b=w(Y,"DIV",{class:!0});var pt=C(b);x=w(pt,"DIV",{class:!0});var ot=C(x);_=w(ot,"A",{rel:!0,class:!0,href:!0});var mt=C(_);N=w(mt,"SPAN",{class:!0});var Vt=C(N);L=w(Vt,"I",{class:!0}),C(L).forEach(p),Vt.forEach(p),M=D(mt),$=w(mt,"SPAN",{});var At=C($);S=U(At,"Articles"),At.forEach(p),mt.forEach(p),G=D(ot),P=w(ot,"A",{rel:!0,class:!0,href:!0});var Wt=C(P);F=w(Wt,"SPAN",{class:!0});var De=C(F);rt=w(De,"I",{class:!0}),C(rt).forEach(p),De.forEach(p),J=D(Wt),it=w(Wt,"SPAN",{});var Re=C(it);Q=U(Re,"About"),Re.forEach(p),Wt.forEach(p),q=D(ot),V=w(ot,"A",{href:!0,target:!0,class:!0,"aria-label":!0});var Xt=C(V);Z=w(Xt,"SPAN",{class:!0});var $e=C(Z);tt=w($e,"I",{class:!0}),C(tt).forEach(p),$e.forEach(p),at=D(Xt),O=w(Xt,"SPAN",{class:!0});var Fe=C(O);A=U(Fe,"Github"),Fe.forEach(p),Xt.forEach(p),ot.forEach(p),pt.forEach(p),Y.forEach(p),j=D(z),Et(E.$$.fragment,z),this.h()},h(){v(r,"alt","logo"),Ba(r.src,s="/logo.png")||v(r,"src",s),v(r,"width","160"),v(r,"height","24"),v(n,"class","navbar-item svelte-19lyduh"),v(n,"href","/"),v(l,"aria-hidden","true"),v(c,"aria-hidden","true"),v(g,"aria-hidden","true"),v(o,"role","button"),v(o,"class","navbar-burger burger"),v(o,"aria-label","menu"),v(o,"aria-expanded","false"),v(o,"data-target","navbarBasicExample"),St(o,"is-active",t[0]),v(a,"class","navbar-brand"),v(L,"class","fas fa-book fa-lg"),v(N,"class","icon is-hidden-desktop"),v(_,"rel","prefetch"),v(_,"class",R="navbar-item is-primary "+(t[1]==="articles"||t[1]==="tag"?"is-active":"")+" svelte-19lyduh"),v(_,"href","/articles"),v(rt,"class","fas fa-user fa-lg"),v(F,"class","icon is-hidden-desktop"),v(P,"rel","prefecth"),v(P,"class",ut="navbar-item is-primary "+(t[1]==="about"?"is-active":"")+" svelte-19lyduh"),v(P,"href","/about"),v(tt,"class","fab fa-github-alt fa-lg"),v(Z,"class","icon"),v(O,"class","is-hidden-desktop"),v(V,"href","https://github.com/angelblanco"),v(V,"target","__blank"),v(V,"class","navbar-item svelte-19lyduh"),v(V,"aria-label","My Github page"),v(x,"class","navbar-end"),v(b,"class","navbar-menu svelte-19lyduh"),St(b,"is-active",t[0]),v(e,"class","navbar container is-hidden-print"),v(e,"aria-label","main navigation")},m(z,Y){K(z,e,Y),d(e,a),d(a,n),d(n,r),d(a,i),d(a,o),d(o,l),d(o,u),d(o,c),d(o,m),d(o,g),d(e,f),d(e,b),d(b,x),d(x,_),d(_,N),d(N,L),d(_,M),d(_,$),d($,S),d(x,G),d(x,P),d(P,F),d(F,rt),d(P,J),d(P,it),d(it,Q),d(x,q),d(x,V),d(V,Z),d(Z,tt),d(V,at),d(V,O),d(O,A),K(z,j,Y),Nt(E,z,Y),B=!0,xt||(Ft=[zt(o,"click",t[3]),zt(_,"click",t[2]),zt(P,"click",t[2]),zt(V,"click",t[2])],xt=!0)},p(z,[Y]){Y&1&&St(o,"is-active",z[0]),(!B||Y&2&&R!==(R="navbar-item is-primary "+(z[1]==="articles"||z[1]==="tag"?"is-active":"")+" svelte-19lyduh"))&&v(_,"class",R),(!B||Y&2&&ut!==(ut="navbar-item is-primary "+(z[1]==="about"?"is-active":"")+" svelte-19lyduh"))&&v(P,"class",ut),Y&1&&St(b,"is-active",z[0])},i(z){B||(bt(E.$$.fragment,z),B=!0)},o(z){yt(E.$$.fragment,z),B=!1},d(z){z&&p(e),z&&p(j),Lt(E,z),xt=!1,va(Ft)}}}function bi(t,e,a){let{segment:n}=e,{isHamburgerOpen:r=!1}=e;function s(){a(0,r=!1)}const i=()=>a(0,r=!r);return t.$$set=o=>{"segment"in o&&a(1,n=o.segment),"isHamburgerOpen"in o&&a(0,r=o.isHamburgerOpen)},[r,n,s,i]}class yi extends Tt{constructor(e){super(),Dt(this,e,bi,pi,Rt,{segment:1,isHamburgerOpen:0})}}function ki(t,e,a){let n,{trackingId:r="UA-92522790-2"}=e,{scriptId:s="google-analytics-script"}=e,{domain:i="https://www.googletagmanager.com"}=e,o=!1;const{page:l}=ha();ga(t,l,c=>a(5,n=c));async function u(c="dataLayer"){return new Promise((m,g)=>{const f=document.head||document.getElementsByTagName("head")[0],b=document.createElement("link");b.href=i,b.rel="preconnect",f.appendChild(b);const x=document.createElement("script");x.async=!0,x.src=`${i}/gtag/js?id=${r}&l=${c}`,x.charset="utf-8",x.setAttribute("id",s),f.appendChild(x),x.onload=m,x.onerror=g})}return Wa(async()=>{if(r!==""&&!window.document.getElementById(s)){window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},gtag("js",new Date),gtag("config",r);try{await u()}catch{console.error("gtag failure");const m=window.document.getElementById(s);m&&m.remove();return}a(4,o=!0)}}),t.$$set=c=>{"trackingId"in c&&a(1,r=c.trackingId),"scriptId"in c&&a(2,s=c.scriptId),"domain"in c&&a(3,i=c.domain)},t.$$.update=()=>{if(t.$$.dirty&50){const c=n.url.pathname;o&&window.gtag&&gtag("config",r,{page_path:c})}},[l,r,s,i,o,n]}class wi extends Tt{constructor(e){super(),Dt(this,e,ki,null,Rt,{trackingId:1,scriptId:2,domain:3})}}function ca(t,e,a){const n=t.slice();return n[4]=e[a],n}function ua(t){let e,a,n,r=t[4].tag+"",s,i,o,l=t[4].title+"",u,c,m;return{c(){e=k("div"),a=k("div"),n=k("span"),s=H(r),i=T(),o=k("a"),u=H(l),m=T(),this.h()},l(g){e=w(g,"DIV",{class:!0});var f=C(e);a=w(f,"DIV",{class:!0});var b=C(a);n=w(b,"SPAN",{class:!0});var x=C(n);s=U(x,r),x.forEach(p),i=D(b),o=w(b,"A",{href:!0,class:!0});var _=C(o);u=U(_,l),_.forEach(p),b.forEach(p),m=D(f),f.forEach(p),this.h()},h(){v(n,"class","tag is-dark"),v(o,"href",c=t[4].link),v(o,"class","tag is-light svelte-1vimzui"),v(a,"class","tags has-addons"),v(e,"class","control")},m(g,f){K(g,e,f),d(e,a),d(a,n),d(n,s),d(a,i),d(a,o),d(o,u),d(e,m)},p:Pt,d(g){g&&p(e)}}}function Ci(t){let e,a,n,r,s,i,o,l,u,c,m,g,f,b,x,_,N,L,M,$,S,R,G,P,F,rt,J,it,Q,ut,q,V,Z,tt;e=new Ga({});let at=t[1],O=[];for(let A=0;A<at.length;A+=1)O[A]=ua(ca(t,at,A));return{c(){_t(e.$$.fragment),a=T(),n=k("footer"),r=k("hr"),s=T(),i=k("div"),o=k("p"),l=H("Personal website of "),u=k("a"),c=H("\xC1ngel Blanco"),m=T(),g=k("p"),f=k("a"),b=k("span"),x=k("span"),_=T(),N=k("span"),L=H("Developed by \xC1ngel Blanco hosted on Github"),M=T(),$=k("div"),S=k("div"),R=k("p"),G=H("This project "),P=k("i"),F=H(" this libraries"),rt=T(),J=k("div");for(let A=0;A<O.length;A+=1)O[A].c();it=T(),Q=k("p"),ut=H("And all of "),q=k("a"),V=H("these..."),this.h()},l(A){Et(e.$$.fragment,A),a=D(A),n=w(A,"FOOTER",{class:!0,"aria-hidden":!0});var j=C(n);r=w(j,"HR",{class:!0}),s=D(j),i=w(j,"DIV",{class:!0});var E=C(i);o=w(E,"P",{class:!0});var B=C(o);l=U(B,"Personal website of "),u=w(B,"A",{href:!0,class:!0});var xt=C(u);c=U(xt,"\xC1ngel Blanco"),xt.forEach(p),B.forEach(p),m=D(E),g=w(E,"P",{class:!0});var Ft=C(g);f=w(Ft,"A",{href:!0,class:!0,target:!0});var z=C(f);b=w(z,"SPAN",{class:!0});var Y=C(b);x=w(Y,"SPAN",{class:!0}),C(x).forEach(p),Y.forEach(p),_=D(z),N=w(z,"SPAN",{});var ht=C(N);L=U(ht,"Developed by \xC1ngel Blanco hosted on Github"),ht.forEach(p),z.forEach(p),Ft.forEach(p),M=D(E),$=w(E,"DIV",{class:!0});var jt=C($);S=w(jt,"DIV",{class:!0});var W=C(S);R=w(W,"P",{class:!0});var pt=C(R);G=U(pt,"This project "),P=w(pt,"I",{class:!0}),C(P).forEach(p),F=U(pt," this libraries"),pt.forEach(p),rt=D(W),J=w(W,"DIV",{class:!0});var ot=C(J);for(let At=0;At<O.length;At+=1)O[At].l(ot);ot.forEach(p),it=D(W),Q=w(W,"P",{class:!0});var mt=C(Q);ut=U(mt,"And all of "),q=w(mt,"A",{class:!0,href:!0,rel:!0});var Vt=C(q);V=U(Vt,"these..."),Vt.forEach(p),mt.forEach(p),W.forEach(p),jt.forEach(p),E.forEach(p),j.forEach(p),this.h()},h(){v(r,"class","footerRule is-hidden-print svelte-1vimzui"),v(u,"href","/about"),v(u,"class","has-text-grey-dark svelte-1vimzui"),v(o,"class","has-text-grey-light is-family-monospace svelte-1vimzui"),v(x,"class","fab fa-github"),v(b,"class","icon"),v(f,"href","https://github.com/angelblanco/v1.angelblanco.dev"),v(f,"class","button svelte-1vimzui"),v(f,"target","__blank"),v(g,"class","footer-github is-hidden-print svelte-1vimzui"),v(P,"class","fas fa-heart svelte-1vimzui"),v(R,"class","has-text-grey-light is-family-monospace svelte-1vimzui"),v(J,"class","field is-grouped is-grouped-multiline is-m-auto justify-center"),v(q,"class","has-decoration-underline has-text-grey-dark svelte-1vimzui"),v(q,"href","/libraries"),v(q,"rel","preload"),v(Q,"class","has-text-grey-light is-family-monospace is-size-7 svelte-1vimzui"),v(S,"class","box"),v($,"class","libraries-box is-m-auto is-hidden-print svelte-1vimzui"),v(i,"class","has-text-centered"),v(n,"class",Z="footer "+t[0]+" svelte-1vimzui"),v(n,"aria-hidden","true")},m(A,j){Nt(e,A,j),K(A,a,j),K(A,n,j),d(n,r),d(n,s),d(n,i),d(i,o),d(o,l),d(o,u),d(u,c),d(i,m),d(i,g),d(g,f),d(f,b),d(b,x),d(f,_),d(f,N),d(N,L),d(i,M),d(i,$),d($,S),d(S,R),d(R,G),d(R,P),d(R,F),d(S,rt),d(S,J);for(let E=0;E<O.length;E+=1)O[E].m(J,null);d(S,it),d(S,Q),d(Q,ut),d(Q,q),d(q,V),tt=!0},p(A,[j]){if(j&2){at=A[1];let E;for(E=0;E<at.length;E+=1){const B=ca(A,at,E);O[E]?O[E].p(B,j):(O[E]=ua(B),O[E].c(),O[E].m(J,null))}for(;E<O.length;E+=1)O[E].d(1);O.length=at.length}(!tt||j&1&&Z!==(Z="footer "+A[0]+" svelte-1vimzui"))&&v(n,"class",Z)},i(A){tt||(bt(e.$$.fragment,A),tt=!0)},o(A){yt(e.$$.fragment,A),tt=!1},d(A){Lt(e,A),A&&p(a),A&&p(n),Xa(O,A)}}}function xi(t,e,a){let n;const r=[{tag:"framework",title:"svelte-kit",link:"https://kit.svelte.dev/"},{tag:"css",title:"bulma",link:"https://bulma.io/"},{tag:"js",title:"svelte",link:"https://svelte.dev/"},{tag:"bundler",title:"rollup",link:"https://rollupjs.org/"},{tag:"md",title:"markdown-it",link:"https://github.com/markdown-it/markdown-it"}],s=["info","warning","danger","primary"];let i=0;return Za(()=>{a(2,i=s[i+1]?i+1:0)},2e3),t.$$.update=()=>{t.$$.dirty&4&&a(0,n=s[i])},[n,r,i]}class Ai extends Tt{constructor(e){super(),Dt(this,e,xi,Ci,Rt,{})}}function _i(t){let e,a,n,r,s;return{c(){e=k("div"),a=k("span"),n=k("i"),this.h()},l(i){e=w(i,"DIV",{class:!0});var o=C(e);a=w(o,"SPAN",{class:!0});var l=C(a);n=w(l,"I",{class:!0}),C(n).forEach(p),l.forEach(p),o.forEach(p),this.h()},h(){v(n,"class","fas fa-chevron-up fa-2x svelte-1d29tie"),v(a,"class","icon is-large"),v(e,"class","back-to-top is-hidden-print svelte-1d29tie"),St(e,"hidden",t[0])},m(i,o){K(i,e,o),d(e,a),d(a,n),r||(s=[zt(window,"scroll",t[1]),zt(e,"click",Ei)],r=!0)},p(i,[o]){o&1&&St(e,"hidden",i[0])},i:Pt,o:Pt,d(i){i&&p(e),r=!1,va(s)}}}function ma(){return document.documentElement||document.body}function Ei(){document.body.scrollIntoView()}function Si(t,e,a){let{showOnPx:n=150}=e,r=!0;function s(){!ma()||(ma().scrollTop>n?a(0,r=!1):a(0,r=!0))}return t.$$set=i=>{"showOnPx"in i&&a(2,n=i.showOnPx)},[r,s,n]}class Ni extends Tt{constructor(e){super(),Dt(this,e,Si,_i,Rt,{showOnPx:2})}}var zi=en,Li=an,Ii=nn,da=rn,Mi=on,Pi=/^\s+/;function Oi(t,e,a){if(t=Mi(t),t&&(a||e===void 0))return t.replace(Pi,"");if(!t||!(e=zi(e)))return t;var n=da(t),r=Ii(n,da(e));return Li(n,r).join("")}var Ti=Oi;function Di(t){let e,a,n,r,s,i,o,l,u,c;e=new wi({}),n=new yi({props:{segment:t[0]}}),s=new Ni({});const m=t[3].default,g=qa(m,t,t[2],null);return u=new Ai({}),{c(){_t(e.$$.fragment),a=T(),_t(n.$$.fragment),r=T(),_t(s.$$.fragment),i=T(),o=k("main"),g&&g.c(),l=T(),_t(u.$$.fragment),this.h()},l(f){Et(e.$$.fragment,f),a=D(f),Et(n.$$.fragment,f),r=D(f),Et(s.$$.fragment,f),i=D(f),o=w(f,"MAIN",{class:!0});var b=C(o);g&&g.l(b),b.forEach(p),l=D(f),Et(u.$$.fragment,f),this.h()},h(){v(o,"class","blog")},m(f,b){Nt(e,f,b),K(f,a,b),Nt(n,f,b),K(f,r,b),Nt(s,f,b),K(f,i,b),K(f,o,b),g&&g.m(o,null),K(f,l,b),Nt(u,f,b),c=!0},p(f,[b]){const x={};b&1&&(x.segment=f[0]),n.$set(x),g&&g.p&&(!c||b&4)&&Ka(g,m,f,f[2],c?Qa(m,f[2],b,null):Ja(f[2]),null)},i(f){c||(bt(e.$$.fragment,f),bt(n.$$.fragment,f),bt(s.$$.fragment,f),bt(g,f),bt(u.$$.fragment,f),c=!0)},o(f){yt(e.$$.fragment,f),yt(n.$$.fragment,f),yt(s.$$.fragment,f),yt(g,f),yt(u.$$.fragment,f),c=!1},d(f){Lt(e,f),f&&p(a),Lt(n,f),f&&p(r),Lt(s,f),f&&p(i),f&&p(o),g&&g.d(f),f&&p(l),Lt(u,f)}}}function Ri(t,e,a){let n,{$$slots:r={},$$scope:s}=e;const{page:i}=ha(),o=tn(i,l=>{const u=Ti(l.url.pathname||"","/").split("/");return u.length>0?u[0]:""});return ga(t,o,l=>a(0,n=l)),t.$$set=l=>{"$$scope"in l&&a(2,s=l.$$scope)},[n,o,s,r]}class Hi extends Tt{constructor(e){super(),Dt(this,e,Ri,Di,Rt,{})}}export{Hi as default};
