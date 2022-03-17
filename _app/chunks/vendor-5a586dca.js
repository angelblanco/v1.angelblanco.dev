function B(){}const Ta=t=>t;function nn(t,n){for(const e in n)t[e]=n[e];return t}function Ce(t){return t()}function jn(){return Object.create(null)}function dt(t){t.forEach(Ce)}function _e(t){return typeof t=="function"}function Oa(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let Tt;function Ys(t,n){return Tt||(Tt=document.createElement("a")),Tt.href=n,t===Tt.href}function La(t){return Object.keys(t).length===0}function Se(t,...n){if(t==null)return B;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Rs(t,n,e){t.$$.on_destroy.push(Se(n,e))}function Fs(t,n,e,a){if(t){const r=Ae(t,n,e,a);return t[0](r)}}function Ae(t,n,e,a){return t[1]&&a?nn(e.ctx.slice(),t[1](a(n))):e.ctx}function Hs(t,n,e,a){if(t[2]&&a){const r=t[2](a(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],i=Math.max(n.dirty.length,r.length);for(let s=0;s<i;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function Us(t,n,e,a,r,o){if(r){const i=Ae(n,e,a,o);t.p(i,r)}}function Vs(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let a=0;a<e;a++)n[a]=-1;return n}return-1}function Ws(t){return t==null?"":t}const $e=typeof window!="undefined";let Ea=$e?()=>window.performance.now():()=>Date.now(),Me=$e?t=>requestAnimationFrame(t):B;const ut=new Set;function Te(t){ut.forEach(n=>{n.c(t)||(ut.delete(n),n.f())}),ut.size!==0&&Me(Te)}function Na(t){let n;return ut.size===0&&Me(Te),{promise:new Promise(e=>{ut.add(n={c:t,f:e})}),abort(){ut.delete(n)}}}let Ht=!1;function za(){Ht=!0}function Ia(){Ht=!1}function Pa(t,n,e,a){for(;t<n;){const r=t+(n-t>>1);e(r)<=a?t=r+1:n=r}return t}function Da(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const f=[];for(let c=0;c<n.length;c++){const u=n[c];u.claim_order!==void 0&&f.push(u)}n=f}const e=new Int32Array(n.length+1),a=new Int32Array(n.length);e[0]=-1;let r=0;for(let f=0;f<n.length;f++){const c=n[f].claim_order,u=(r>0&&n[e[r]].claim_order<=c?r+1:Pa(1,r,p=>n[e[p]].claim_order,c))-1;a[f]=e[u]+1;const l=u+1;e[l]=f,r=Math.max(l,r)}const o=[],i=[];let s=n.length-1;for(let f=e[r]+1;f!=0;f=a[f-1]){for(o.push(n[f-1]);s>=f;s--)i.push(n[s]);s--}for(;s>=0;s--)i.push(n[s]);o.reverse(),i.sort((f,c)=>f.claim_order-c.claim_order);for(let f=0,c=0;f<i.length;f++){for(;c<o.length&&i[f].claim_order>=o[c].claim_order;)c++;const u=c<o.length?o[c]:null;t.insertBefore(i[f],u)}}function ja(t,n){if(Ht){for(Da(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Ya(t,n,e){t.insertBefore(n,e||null)}function Ra(t,n,e){Ht&&!e?ja(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Dt(t){t.parentNode.removeChild(t)}function Gs(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Oe(t){return document.createElement(t)}function yn(t){return document.createTextNode(t)}function Bs(){return yn(" ")}function qs(){return yn("")}function Xs(t,n,e,a){return t.addEventListener(n,e,a),()=>t.removeEventListener(n,e,a)}function Js(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Fa(t){return Array.from(t.childNodes)}function Le(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Ee(t,n,e,a,r=!1){Le(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const s=t[i];if(n(s)){const f=e(s);return f===void 0?t.splice(i,1):t[i]=f,r||(t.claim_info.last_index=i),s}}for(let i=t.claim_info.last_index-1;i>=0;i--){const s=t[i];if(n(s)){const f=e(s);return f===void 0?t.splice(i,1):t[i]=f,r?f===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,s}}return a()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Ha(t,n,e,a){return Ee(t,r=>r.nodeName===n,r=>{const o=[];for(let i=0;i<r.attributes.length;i++){const s=r.attributes[i];e[s.name]||o.push(s.name)}o.forEach(i=>r.removeAttribute(i))},()=>a(n))}function Zs(t,n,e){return Ha(t,n,e,Oe)}function Ua(t,n){return Ee(t,e=>e.nodeType===3,e=>{const a=""+n;if(e.data.startsWith(a)){if(e.data.length!==a.length)return e.splitText(a.length)}else e.data=a},()=>yn(n),!0)}function Ks(t){return Ua(t," ")}function Yn(t,n,e){for(let a=e;a<t.length;a+=1){const r=t[a];if(r.nodeType===8&&r.textContent.trim()===n)return a}return t.length}function Qs(t){const n=Yn(t,"HTML_TAG_START",0),e=Yn(t,"HTML_TAG_END",n);if(n===e)return new Rn;Le(t);const a=t.splice(n,e-n+1);Dt(a[0]),Dt(a[a.length-1]);const r=a.slice(1,a.length-1);for(const o of r)o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Rn(r)}function tf(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function nf(t,n,e,a){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,a?"important":"")}function ef(t,n,e){t.classList[e?"add":"remove"](n)}function af(t,n=document.body){return Array.from(n.querySelectorAll(t))}class Va{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,a=null){this.e||(this.e=Oe(e.nodeName),this.t=e,this.c(n)),this.i(a)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Ya(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(Dt)}}class Rn extends Va{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)Ra(this.t,this.n[e],n)}}let Ct;function xt(t){Ct=t}function St(){if(!Ct)throw new Error("Function called outside component initialization");return Ct}function rf(t){St().$$.on_mount.push(t)}function of(t){St().$$.after_update.push(t)}function sf(t){St().$$.on_destroy.push(t)}function ff(t,n){St().$$.context.set(t,n)}function cf(t){return St().$$.context.get(t)}const bt=[],Fn=[],Et=[],Hn=[],Ne=Promise.resolve();let en=!1;function ze(){en||(en=!0,Ne.then(Ie))}function lf(){return ze(),Ne}function an(t){Et.push(t)}const Jt=new Set;let Ot=0;function Ie(){const t=Ct;do{for(;Ot<bt.length;){const n=bt[Ot];Ot++,xt(n),Wa(n.$$)}for(xt(null),bt.length=0,Ot=0;Fn.length;)Fn.pop()();for(let n=0;n<Et.length;n+=1){const e=Et[n];Jt.has(e)||(Jt.add(e),e())}Et.length=0}while(bt.length);for(;Hn.length;)Hn.pop()();en=!1,Jt.clear(),xt(t)}function Wa(t){if(t.fragment!==null){t.update(),dt(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(an)}}const Nt=new Set;let at;function uf(){at={r:0,c:[],p:at}}function mf(){at.r||dt(at.c),at=at.p}function Ga(t,n){t&&t.i&&(Nt.delete(t),t.i(n))}function df(t,n,e,a){if(t&&t.o){if(Nt.has(t))return;Nt.add(t),at.c.push(()=>{Nt.delete(t),a&&(e&&t.d(1),a())}),t.o(n)}}function vf(t,n){const e={},a={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],s=n[o];if(s){for(const f in i)f in s||(a[f]=1);for(const f in s)r[f]||(e[f]=s[f],r[f]=1);t[o]=s}else for(const f in i)r[f]=1}for(const i in a)i in e||(e[i]=void 0);return e}function hf(t){return typeof t=="object"&&t!==null?t:{}}function gf(t){t&&t.c()}function pf(t,n){t&&t.l(n)}function Ba(t,n,e,a){const{fragment:r,on_mount:o,on_destroy:i,after_update:s}=t.$$;r&&r.m(n,e),a||an(()=>{const f=o.map(Ce).filter(_e);i?i.push(...f):dt(f),t.$$.on_mount=[]}),s.forEach(an)}function qa(t,n){const e=t.$$;e.fragment!==null&&(dt(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Xa(t,n){t.$$.dirty[0]===-1&&(bt.push(t),ze(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function bf(t,n,e,a,r,o,i,s=[-1]){const f=Ct;xt(t);const c=t.$$={fragment:null,ctx:null,props:o,update:B,not_equal:r,bound:jn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:jn(),dirty:s,skip_bound:!1,root:n.target||f.$$.root};i&&i(c.root);let u=!1;if(c.ctx=e?e(t,n.props||{},(l,p,...y)=>{const w=y.length?y[0]:p;return c.ctx&&r(c.ctx[l],c.ctx[l]=w)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](w),u&&Xa(t,l)),p}):[],c.update(),u=!0,dt(c.before_update),c.fragment=a?a(c.ctx):!1,n.target){if(n.hydrate){za();const l=Fa(n.target);c.fragment&&c.fragment.l(l),l.forEach(Dt)}else c.fragment&&c.fragment.c();n.intro&&Ga(t.$$.fragment),Ba(t,n.target,n.anchor,n.customElement),Ia(),Ie()}xt(f)}class yf{$destroy(){qa(this,1),this.$destroy=B}$on(n,e){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(e),()=>{const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}$set(n){this.$$set&&!La(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const ft=[];function Ja(t,n){return{subscribe:Pe(t,n).subscribe}}function Pe(t,n=B){let e;const a=new Set;function r(s){if(Oa(t,s)&&(t=s,e)){const f=!ft.length;for(const c of a)c[1](),ft.push(c,t);if(f){for(let c=0;c<ft.length;c+=2)ft[c][0](ft[c+1]);ft.length=0}}}function o(s){r(s(t))}function i(s,f=B){const c=[s,f];return a.add(c),a.size===1&&(e=n(r)||B),s(t),()=>{a.delete(c),a.size===0&&(e(),e=null)}}return{set:r,update:o,subscribe:i}}function xf(t,n,e){const a=!Array.isArray(t),r=a?[t]:t,o=n.length<2;return Ja(e,i=>{let s=!1;const f=[];let c=0,u=B;const l=()=>{if(c)return;u();const y=n(a?f[0]:f,i);o?i(y):u=_e(y)?y:B},p=r.map((y,w)=>Se(y,m=>{f[w]=m,c&=~(1<<w),s&&l()},()=>{c|=1<<w}));return s=!0,l(),function(){dt(p),u()}})}/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Un(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Un(Object(e),!0).forEach(function(a){Qa(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Un(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function jt(t){return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jt(t)}function Za(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Vn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Ka(t,n,e){return n&&Vn(t.prototype,n),e&&Vn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qa(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function xn(t,n){return nr(t)||ar(t,n)||De(t,n)||ir()}function Ut(t){return tr(t)||er(t)||De(t)||rr()}function tr(t){if(Array.isArray(t))return rn(t)}function nr(t){if(Array.isArray(t))return t}function er(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ar(t,n){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function De(t,n){if(!!t){if(typeof t=="string")return rn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return rn(t,n)}}function rn(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wn=function(){},wn={},je={},Ye=null,Re={mark:Wn,measure:Wn};try{typeof window!="undefined"&&(wn=window),typeof document!="undefined"&&(je=document),typeof MutationObserver!="undefined"&&(Ye=MutationObserver),typeof performance!="undefined"&&(Re=performance)}catch{}var or=wn.navigator||{},Gn=or.userAgent,Bn=Gn===void 0?"":Gn,nt=wn,z=je,qn=Ye,Lt=Re;nt.document;var Z=!!z.documentElement&&!!z.head&&typeof z.addEventListener=="function"&&typeof z.createElement=="function",Fe=~Bn.indexOf("MSIE")||~Bn.indexOf("Trident/"),q="___FONT_AWESOME___",on=16,He="fa",Ue="svg-inline--fa",it="data-fa-i2svg",sn="data-fa-pseudo-element",sr="data-fa-pseudo-element-pending",kn="data-prefix",Cn="data-icon",Xn="fontawesome-i2svg",fr="async",cr=["HTML","HEAD","STYLE","SCRIPT"],Ve=function(){try{return!0}catch{return!1}}(),_n={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Yt={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},We={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},lr={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ur=/fa[srltdbk\-\ ]/,Ge="fa-layers-text",mr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,dr={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Be=[1,2,3,4,5,6,7,8,9,10],vr=Be.concat([11,12,13,14,15,16,17,18,19,20]),hr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gr=[].concat(Ut(Object.keys(Yt)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(Be.map(function(t){return"".concat(t,"x")})).concat(vr.map(function(t){return"w-".concat(t)})),qe=nt.FontAwesomeConfig||{};function pr(t){var n=z.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function br(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(z&&typeof z.querySelector=="function"){var yr=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yr.forEach(function(t){var n=xn(t,2),e=n[0],a=n[1],r=br(pr(e));r!=null&&(qe[a]=r)})}var xr={familyPrefix:He,styleDefault:"solid",replacementClass:Ue,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},wt=v(v({},xr),qe);wt.autoReplaceSvg||(wt.observeMutations=!1);var b={};Object.keys(wt).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(e){wt[t]=e,zt.forEach(function(a){return a(b)})},get:function(){return wt[t]}})});nt.FontAwesomeConfig=b;var zt=[];function wr(t){return zt.push(t),function(){zt.splice(zt.indexOf(t),1)}}var tt=on,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kr(t){if(!(!t||!Z)){var n=z.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=z.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return z.head.insertBefore(n,a),t}}var Cr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _t(){for(var t=12,n="";t-- >0;)n+=Cr[Math.random()*62|0];return n}function vt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Sn(t){return t.classList?vt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Xe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _r(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Xe(t[e]),'" ')},"").trim()}function Vt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function An(t){return t.size!==V.size||t.x!==V.x||t.y!==V.y||t.rotate!==V.rotate||t.flipX||t.flipY}function Sr(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ar(t){var n=t.transform,e=t.width,a=e===void 0?on:e,r=t.height,o=r===void 0?on:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&Fe?f+="translate(".concat(n.x/tt-a/2,"em, ").concat(n.y/tt-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/tt,"em), calc(-50% + ").concat(n.y/tt,"em)) "):f+="translate(".concat(n.x/tt,"em, ").concat(n.y/tt,"em) "),f+="scale(".concat(n.size/tt*(n.flipX?-1:1),", ").concat(n.size/tt*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var $r=`:root, :host {
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
}`;function Je(){var t=He,n=Ue,e=b.familyPrefix,a=b.replacementClass,r=$r;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Jn=!1;function Zt(){b.autoAddCss&&!Jn&&(kr(Je()),Jn=!0)}var Mr={mixout:function(){return{dom:{css:Je,insertCss:Zt}}},hooks:function(){return{beforeDOMElementCreation:function(){Zt()},beforeI2svg:function(){Zt()}}}},X=nt||{};X[q]||(X[q]={});X[q].styles||(X[q].styles={});X[q].hooks||(X[q].hooks={});X[q].shims||(X[q].shims=[]);var U=X[q],Ze=[],Tr=function t(){z.removeEventListener("DOMContentLoaded",t),Rt=1,Ze.map(function(n){return n()})},Rt=!1;Z&&(Rt=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),Rt||z.addEventListener("DOMContentLoaded",Tr));function Or(t){!Z||(Rt?setTimeout(t,0):Ze.push(t))}function At(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Xe(t):"<".concat(n," ").concat(_r(a),">").concat(o.map(At).join(""),"</").concat(n,">")}function Zn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Lr=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},Kt=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?Lr(e,r):e,f,c,u;for(a===void 0?(f=1,u=n[o[0]]):(f=0,u=a);f<i;f++)c=o[f],u=s(u,n[c],c,n);return u};function Er(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function fn(t){var n=Er(t);return n.length===1?n[0].toString(16):null}function Nr(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Kn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function cn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=Kn(n);typeof U.hooks.addPack=="function"&&!r?U.hooks.addPack(t,Kn(n)):U.styles[t]=v(v({},U.styles[t]||{}),o),t==="fas"&&cn("fa",n)}var kt=U.styles,zr=U.shims,Ir=Object.values(We),$n=null,Ke={},Qe={},ta={},na={},ea={},Pr=Object.keys(_n);function Dr(t){return~gr.indexOf(t)}function jr(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Dr(r)?r:null}var aa=function(){var n=function(o){return Kt(kt,function(i,s,f){return i[f]=Kt(s,o,{}),i},{})};Ke=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Qe=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),ea=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in kt||b.autoFetchSvg,a=Kt(zr,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ta=a.names,na=a.unicodes,$n=Wt(b.styleDefault)};wr(function(t){$n=Wt(t.styleDefault)});aa();function Mn(t,n){return(Ke[t]||{})[n]}function Yr(t,n){return(Qe[t]||{})[n]}function ct(t,n){return(ea[t]||{})[n]}function ra(t){return ta[t]||{prefix:null,iconName:null}}function Rr(t){var n=na[t],e=Mn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function et(){return $n}var Tn=function(){return{prefix:null,iconName:null,rest:[]}};function Wt(t){var n=_n[t],e=Yt[t]||Yt[n],a=t in U.styles?t:null;return e||a||null}function Gt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,s){var f=jr(b.familyPrefix,s);if(kt[s]?(s=Ir.includes(s)?lr[s]:s,r=s,i.prefix=s):Pr.indexOf(s)>-1?(r=s,i.prefix=Wt(s)):f?i.iconName=f:s!==b.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var c=r==="fa"?ra(i.iconName):{},u=ct(i.prefix,i.iconName);c.prefix&&(r=null),i.iconName=c.iconName||u||i.iconName,i.prefix=c.prefix||i.prefix,i.prefix==="far"&&!kt.far&&kt.fas&&!b.autoFetchSvg&&(i.prefix="fas")}return i},Tn());return(o.prefix==="fa"||r==="fa")&&(o.prefix=et()||"fas"),o}var Fr=function(){function t(){Za(this,t),this.definitions={}}return Ka(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=v(v({},e.definitions[s]||{}),i[s]),cn(s,i[s]);var f=We[s];f&&cn(f,i[s]),aa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,c=i.icon,u=c[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(l){typeof l=="string"&&(e[s][l]=c)}),e[s][f]=c}),e}}]),t}(),Qn=[],lt={},mt={},Hr=Object.keys(mt);function Ur(t,n){var e=n.mixoutsTo;return Qn=t,lt={},Object.keys(mt).forEach(function(a){Hr.indexOf(a)===-1&&delete mt[a]}),Qn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),jt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){lt[i]||(lt[i]=[]),lt[i].push(o[i])})}a.provides&&a.provides(mt)}),e}function ln(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=lt[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function ot(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=lt[t]||[];r.forEach(function(o){o.apply(null,e)})}function J(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,n):void 0}function un(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||et();if(!!n)return n=ct(e,n)||n,Zn(ia.definitions,e,n)||Zn(U.styles,e,n)}var ia=new Fr,Vr=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,ot("noAuto")},Wr={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(ot("beforeI2svg",n),J("pseudoElements2svg",n),J("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Or(function(){Br({autoReplaceSvgRoot:e}),ot("watch",n)})}},Gr={icon:function(n){if(n===null)return null;if(jt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:ct(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Wt(n[0]);return{prefix:a,iconName:ct(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(b.familyPrefix,"-"))>-1||n.match(ur))){var r=Gt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||et(),iconName:ct(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=et();return{prefix:o,iconName:ct(o,n)||n}}}},H={noAuto:Vr,config:b,dom:Wr,parse:Gr,library:ia,findIconDefinition:un,toHtml:At},Br=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?z:e;(Object.keys(U.styles).length>0||b.autoFetchSvg)&&Z&&b.autoReplaceSvg&&H.dom.i2svg({node:a})};function Bt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return At(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Z){var a=z.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function qr(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(An(i)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Vt(v(v({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Xr(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(b.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:i}),children:a}]}]}function On(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,c=t.maskId,u=t.titleId,l=t.extra,p=t.watchable,y=p===void 0?!1:p,w=a.found?a:e,m=w.width,S=w.height,M=r==="fak",T=[b.replacementClass,o?"".concat(b.familyPrefix,"-").concat(o):""].filter(function(O){return l.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(l.classes).join(" "),A={children:[],attributes:v(v({},l.attributes),{},{"data-prefix":r,"data-icon":o,class:T,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(S)})},D=M&&!~l.classes.indexOf("fa-fw")?{width:"".concat(m/S*16*.0625,"em")}:{};y&&(A.attributes[it]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||_t())},children:[f]}),delete A.attributes.title);var $=v(v({},A),{},{prefix:r,iconName:o,main:e,mask:a,maskId:c,transform:i,symbol:s,styles:v(v({},D),l.styles)}),N=a.found&&e.found?J("generateAbstractMask",$)||{children:[],attributes:{}}:J("generateAbstractIcon",$)||{children:[],attributes:{}},j=N.children,Y=N.attributes;return $.children=j,$.attributes=Y,s?Xr($):qr($)}function te(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,c=v(v(v({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(c[it]="");var u=v({},i.styles);An(r)&&(u.transform=Ar({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var l=Vt(u);l.length>0&&(c.style=l);var p=[];return p.push({tag:"span",attributes:c,children:[n]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function Jr(t){var n=t.content,e=t.title,a=t.extra,r=v(v(v({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=Vt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var Qt=U.styles;function mn(t){var n=t[0],e=t[1],a=t.slice(4),r=xn(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(b.familyPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var Zr={found:!1,width:512,height:512};function Kr(t,n){!Ve&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function dn(t,n){var e=n;return n==="fa"&&b.styleDefault!==null&&(n=et()),new Promise(function(a,r){if(J("missingIconAbstract"),e==="fa"){var o=ra(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&Qt[n]&&Qt[n][t]){var i=Qt[n][t];return a(mn(i))}Kr(t,n),a(v(v({},Zr),{},{icon:b.showMissingIcons&&t?J("missingIconAbstract")||{}:{}}))})}var ne=function(){},vn=b.measurePerformance&&Lt&&Lt.mark&&Lt.measure?Lt:{mark:ne,measure:ne},yt='FA "6.1.0"',Qr=function(n){return vn.mark("".concat(yt," ").concat(n," begins")),function(){return oa(n)}},oa=function(n){vn.mark("".concat(yt," ").concat(n," ends")),vn.measure("".concat(yt," ").concat(n),"".concat(yt," ").concat(n," begins"),"".concat(yt," ").concat(n," ends"))},Ln={begin:Qr,end:oa},It=function(){};function ee(t){var n=t.getAttribute?t.getAttribute(it):null;return typeof n=="string"}function ti(t){var n=t.getAttribute?t.getAttribute(kn):null,e=t.getAttribute?t.getAttribute(Cn):null;return n&&e}function ni(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function ei(){if(b.autoReplaceSvg===!0)return Pt.replace;var t=Pt[b.autoReplaceSvg];return t||Pt.replace}function ai(t){return z.createElementNS("http://www.w3.org/2000/svg",t)}function ri(t){return z.createElement(t)}function sa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?ai:ri:e;if(typeof t=="string")return z.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(sa(i,{ceFn:a}))}),r}function ii(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Pt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(sa(r),e)}),e.getAttribute(it)===null&&b.keepOriginalSource){var a=z.createComment(ii(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Sn(e).indexOf(b.replacementClass))return Pt.replace(n);var r=new RegExp("".concat(b.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===b.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return At(s)}).join(`
`);e.setAttribute(it,""),e.innerHTML=i}};function ae(t){t()}function fa(t,n){var e=typeof n=="function"?n:It;if(t.length===0)e();else{var a=ae;b.mutateApproach===fr&&(a=nt.requestAnimationFrame||ae),a(function(){var r=ei(),o=Ln.begin("mutate");t.map(r),o(),e()})}}var En=!1;function ca(){En=!0}function hn(){En=!1}var Ft=null;function re(t){if(!!qn&&!!b.observeMutations){var n=t.treeCallback,e=n===void 0?It:n,a=t.nodeCallback,r=a===void 0?It:a,o=t.pseudoElementsCallback,i=o===void 0?It:o,s=t.observeMutationsRoot,f=s===void 0?z:s;Ft=new qn(function(c){if(!En){var u=et();vt(c).forEach(function(l){if(l.type==="childList"&&l.addedNodes.length>0&&!ee(l.addedNodes[0])&&(b.searchPseudoElements&&i(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&b.searchPseudoElements&&i(l.target.parentNode),l.type==="attributes"&&ee(l.target)&&~hr.indexOf(l.attributeName))if(l.attributeName==="class"&&ti(l.target)){var p=Gt(Sn(l.target)),y=p.prefix,w=p.iconName;l.target.setAttribute(kn,y||u),w&&l.target.setAttribute(Cn,w)}else ni(l.target)&&r(l.target)})}}),Z&&Ft.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oi(){!Ft||Ft.disconnect()}function si(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function fi(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Gt(Sn(t));return r.prefix||(r.prefix=et()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=Yr(r.prefix,t.innerText)||Mn(r.prefix,fn(t.innerText))),r}function ci(t){var n=vt(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(e?n["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||_t()):(n["aria-hidden"]="true",n.focusable="false")),n}function li(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ie(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=fi(t),a=e.iconName,r=e.prefix,o=e.rest,i=ci(t),s=ln("parseNodeAttributes",{},t),f=n.styleParser?si(t):[];return v({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var ui=U.styles;function la(t){var n=b.autoReplaceSvg==="nest"?ie(t,{styleParser:!1}):ie(t);return~n.extra.classes.indexOf(Ge)?J("generateLayersText",t,n):J("generateSvgReplacementMutation",t,n)}function oe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var e=z.documentElement.classList,a=function(l){return e.add("".concat(Xn,"-").concat(l))},r=function(l){return e.remove("".concat(Xn,"-").concat(l))},o=b.autoFetchSvg?Object.keys(_n):Object.keys(ui),i=[".".concat(Ge,":not([").concat(it,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(it,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=vt(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Ln.begin("onTree"),c=s.reduce(function(u,l){try{var p=la(l);p&&u.push(p)}catch(y){Ve||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,l){Promise.all(c).then(function(p){fa(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),u()})}).catch(function(p){f(),l(p)})})}function mi(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;la(t).then(function(e){e&&fa([e],n)})}function di(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:un(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:un(r||{})),t(a,v(v({},e),{},{mask:r}))}}var vi=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?V:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,c=e.maskId,u=c===void 0?null:c,l=e.title,p=l===void 0?null:l,y=e.titleId,w=y===void 0?null:y,m=e.classes,S=m===void 0?[]:m,M=e.attributes,T=M===void 0?{}:M,A=e.styles,D=A===void 0?{}:A;if(!!n){var $=n.prefix,N=n.iconName,j=n.icon;return Bt(v({type:"icon"},n),function(){return ot("beforeDOMElementCreation",{iconDefinition:n,params:e}),b.autoA11y&&(p?T["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(w||_t()):(T["aria-hidden"]="true",T.focusable="false")),On({icons:{main:mn(j),mask:f?mn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:N,transform:v(v({},V),r),symbol:i,title:p,maskId:u,titleId:w,extra:{attributes:T,styles:D,classes:S}})})}},hi={mixout:function(){return{icon:di(vi)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=oe,e.nodeCallback=mi,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?z:a,o=e.callback,i=o===void 0?function(){}:o;return oe(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,u=a.mask,l=a.maskId,p=a.extra;return new Promise(function(y,w){Promise.all([dn(r,s),u.iconName?dn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var S=xn(m,2),M=S[0],T=S[1];y([e,On({icons:{main:M,mask:T},prefix:s,iconName:r,transform:f,symbol:c,maskId:l,title:o,titleId:i,extra:p,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=Vt(s);f.length>0&&(r.style=f);var c;return An(i)&&(c=J("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},gi={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Bt({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.familyPrefix,"-layers")].concat(Ut(o)).join(" ")},children:i}]})}}}},pi={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,c=f===void 0?{}:f,u=a.styles,l=u===void 0?{}:u;return Bt({type:"counter",content:e},function(){return ot("beforeDOMElementCreation",{content:e,params:a}),Jr({content:e.toString(),title:o,extra:{attributes:c,styles:l,classes:["".concat(b.familyPrefix,"-layers-counter")].concat(Ut(s))}})})}}}},bi={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?V:r,i=a.title,s=i===void 0?null:i,f=a.classes,c=f===void 0?[]:f,u=a.attributes,l=u===void 0?{}:u,p=a.styles,y=p===void 0?{}:p;return Bt({type:"text",content:e},function(){return ot("beforeDOMElementCreation",{content:e,params:a}),te({content:e,transform:v(v({},V),o),title:s,extra:{attributes:l,styles:y,classes:["".concat(b.familyPrefix,"-layers-text")].concat(Ut(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(Fe){var c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/c,f=u.height/c}return b.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,te({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},yi=new RegExp('"',"ug"),se=[1105920,1112319];function xi(t){var n=t.replace(yi,""),e=Nr(n,0),a=e>=se[0]&&e<=se[1],r=n.length===2?n[0]===n[1]:!1;return{value:fn(r?n[0]:n),isSecondary:a||r}}function fe(t,n){var e="".concat(sr).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=vt(t.children),i=o.filter(function(N){return N.getAttribute(sn)===n})[0],s=nt.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(mr),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&u!=="none"&&u!==""){var l=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Yt[f[2].toLowerCase()]:dr[c],y=xi(l),w=y.value,m=y.isSecondary,S=f[0].startsWith("FontAwesome"),M=Mn(p,w),T=M;if(S){var A=Rr(w);A.iconName&&A.prefix&&(M=A.iconName,p=A.prefix)}if(M&&!m&&(!i||i.getAttribute(kn)!==p||i.getAttribute(Cn)!==T)){t.setAttribute(e,T),i&&t.removeChild(i);var D=li(),$=D.extra;$.attributes[sn]=n,dn(M,p).then(function(N){var j=On(v(v({},D),{},{icons:{main:N,mask:Tn()},prefix:p,iconName:T,extra:$,watchable:!0})),Y=z.createElement("svg");n==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=j.map(function(O){return At(O)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function wi(t){return Promise.all([fe(t,"::before"),fe(t,"::after")])}function ki(t){return t.parentNode!==document.head&&!~cr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(sn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ce(t){if(!!Z)return new Promise(function(n,e){var a=vt(t.querySelectorAll("*")).filter(ki).map(wi),r=Ln.begin("searchPseudoElements");ca(),Promise.all(a).then(function(){r(),hn(),n()}).catch(function(){r(),hn(),e()})})}var Ci={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ce,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?z:a;b.searchPseudoElements&&ce(r)}}},le=!1,_i={mixout:function(){return{dom:{unwatch:function(){ca(),le=!0}}}},hooks:function(){return{bootstrap:function(){re(ln("mutationObserverCallbacks",{}))},noAuto:function(){oi()},watch:function(e){var a=e.observeMutationsRoot;le?hn():re(ln("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ue=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Si={mixout:function(){return{parse:{transform:function(e){return ue(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=ue(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(f," ").concat(c," ").concat(u)},p={transform:"translate(".concat(i/2*-1," -256)")},y={outer:s,inner:l,path:p};return{tag:"g",attributes:v({},y.outer),children:[{tag:"g",attributes:v({},y.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:v(v({},a.icon.attributes),y.path)}]}]}}}},tn={x:0,y:0,width:"100%",height:"100%"};function me(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ai(t){return t.tag==="g"?t.children:[t]}var $i={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?Gt(r.split(" ").map(function(i){return i.trim()})):Tn();return o.prefix||(o.prefix=et()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,c=o.width,u=o.icon,l=i.width,p=i.icon,y=Sr({transform:f,containerWidth:l,iconWidth:c}),w={tag:"rect",attributes:v(v({},tn),{},{fill:"white"})},m=u.children?{children:u.children.map(me)}:{},S={tag:"g",attributes:v({},y.inner),children:[me(v({tag:u.tag,attributes:v(v({},u.attributes),y.path)},m))]},M={tag:"g",attributes:v({},y.outer),children:[S]},T="mask-".concat(s||_t()),A="clip-".concat(s||_t()),D={tag:"mask",attributes:v(v({},tn),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,M]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Ai(p)},D]};return a.push($,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(T,")")},tn)}),{children:a,attributes:r}}}},Mi={provides:function(n){var e=!1;nt.matchMedia&&(e=nt.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=v(v({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:v(v({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:v(v({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ti={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Oi=[Mr,hi,gi,pi,bi,Ci,_i,Si,$i,Mi,Ti];Ur(Oi,{mixoutsTo:H});H.noAuto;H.config;var wf=H.library,kf=H.dom;H.parse;H.findIconDefinition;H.toHtml;H.icon;H.layer;H.text;H.counter;/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Li={prefix:"fas",iconName:"angles-left",icon:[448,512,[171,"angle-double-left"],"f100","M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"]},Cf=Li,Ei={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]},_f=Ei,Sf={prefix:"fas",iconName:"bomb",icon:[512,512,[128163],"f1e2","M440.8 4.994C441.9 1.99 444.8 0 448 0C451.2 0 454.1 1.99 455.2 4.994L469.3 42.67L507 56.79C510 57.92 512 60.79 512 64C512 67.21 510 70.08 507 71.21L469.3 85.33L455.2 123C454.1 126 451.2 128 448 128C444.8 128 441.9 126 440.8 123L426.7 85.33L388.1 71.21C385.1 70.08 384 67.21 384 64C384 60.79 385.1 57.92 388.1 56.79L426.7 42.67L440.8 4.994zM289.4 97.37C301.9 84.88 322.1 84.88 334.6 97.37L363.3 126.1L380.7 108.7C386.9 102.4 397.1 102.4 403.3 108.7C409.6 114.9 409.6 125.1 403.3 131.3L385.9 148.7L414.6 177.4C427.1 189.9 427.1 210.1 414.6 222.6L403.8 233.5C411.7 255.5 416 279.3 416 304C416 418.9 322.9 512 208 512C93.12 512 0 418.9 0 304C0 189.1 93.12 96 208 96C232.7 96 256.5 100.3 278.5 108.3L289.4 97.37zM95.1 296C95.1 238.6 142.6 192 199.1 192H207.1C216.8 192 223.1 184.8 223.1 176C223.1 167.2 216.8 160 207.1 160H199.1C124.9 160 63.1 220.9 63.1 296V304C63.1 312.8 71.16 320 79.1 320C88.84 320 95.1 312.8 95.1 304V296z"]},Af={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"]},$f={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"]},Mf={prefix:"fas",iconName:"comments",icon:[640,512,[61670,128490],"f086","M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z"]},Tf={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96C352 110.3 348.9 123.9 343.2 136.2L396 227.4C372.3 252.7 341.9 271.5 307.6 281L256 192H255.1L187.9 309.5C209.4 316.3 232.3 320 256 320C326.7 320 389.8 287.3 430.9 235.1C441.9 222.2 462.1 219.1 475.9 231C489.7 242.1 491.9 262.2 480.8 276C428.1 341.8 346.1 384 256 384C220.6 384 186.6 377.6 155.3 365.9L98.65 463.7C93.95 471.8 86.97 478.4 78.58 482.6L23.16 510.3C18.2 512.8 12.31 512.5 7.588 509.6C2.871 506.7 0 501.5 0 496V440.6C0 432.2 2.228 423.9 6.46 416.5L66.49 312.9C53.66 301.6 41.84 289.3 31.18 276C20.13 262.2 22.34 242.1 36.13 231C49.92 219.1 70.06 222.2 81.12 235.1C86.79 243.1 92.87 249.8 99.34 256.1L168.8 136.2C163.1 123.9 160 110.3 160 96C160 42.98 202.1 0 256 0C309 0 352 42.98 352 96L352 96zM256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128zM372.1 393.9C405.5 381.1 435.5 363.2 461.8 341L505.5 416.5C509.8 423.9 512 432.2 512 440.6V496C512 501.5 509.1 506.7 504.4 509.6C499.7 512.5 493.8 512.8 488.8 510.3L433.4 482.6C425 478.4 418.1 471.8 413.3 463.7L372.1 393.9z"]},Of={prefix:"fas",iconName:"gauge-high",icon:[512,512,["tachometer-alt","tachometer-alt-fast"],"f625","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"]},Lf={prefix:"fas",iconName:"hashtag",icon:[448,512,[],"23","M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z"]},Ef={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},Ni={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z"]},Nf=Ni,zf={prefix:"fas",iconName:"user",icon:[448,512,[62144,128100],"f007","M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"]};/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var If={prefix:"fab",iconName:"docker",icon:[640,512,[],"f395","M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"]},Pf={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]},Df={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},jf={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},Yf={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},Rf={prefix:"fab",iconName:"laravel",icon:[512,512,[],"f3bd","M504.4 115.8a5.72 5.72 0 0 0 -.28-.68 8.52 8.52 0 0 0 -.53-1.25 6 6 0 0 0 -.54-.71 9.36 9.36 0 0 0 -.72-.94c-.23-.22-.52-.4-.77-.6a8.84 8.84 0 0 0 -.9-.68L404.4 55.55a8 8 0 0 0 -8 0L300.1 111h0a8.07 8.07 0 0 0 -.88 .69 7.68 7.68 0 0 0 -.78 .6 8.23 8.23 0 0 0 -.72 .93c-.17 .24-.39 .45-.54 .71a9.7 9.7 0 0 0 -.52 1.25c-.08 .23-.21 .44-.28 .68a8.08 8.08 0 0 0 -.28 2.08V223.2l-80.22 46.19V63.44a7.8 7.8 0 0 0 -.28-2.09c-.06-.24-.2-.45-.28-.68a8.35 8.35 0 0 0 -.52-1.24c-.14-.26-.37-.47-.54-.72a9.36 9.36 0 0 0 -.72-.94 9.46 9.46 0 0 0 -.78-.6 9.8 9.8 0 0 0 -.88-.68h0L115.6 1.07a8 8 0 0 0 -8 0L11.34 56.49h0a6.52 6.52 0 0 0 -.88 .69 7.81 7.81 0 0 0 -.79 .6 8.15 8.15 0 0 0 -.71 .93c-.18 .25-.4 .46-.55 .72a7.88 7.88 0 0 0 -.51 1.24 6.46 6.46 0 0 0 -.29 .67 8.18 8.18 0 0 0 -.28 2.1v329.7a8 8 0 0 0 4 6.95l192.5 110.8a8.83 8.83 0 0 0 1.33 .54c.21 .08 .41 .2 .63 .26a7.92 7.92 0 0 0 4.1 0c.2-.05 .37-.16 .55-.22a8.6 8.6 0 0 0 1.4-.58L404.4 400.1a8 8 0 0 0 4-6.95V287.9l92.24-53.11a8 8 0 0 0 4-7V117.9A8.63 8.63 0 0 0 504.4 115.8zM111.6 17.28h0l80.19 46.15-80.2 46.18L31.41 63.44zm88.25 60V278.6l-46.53 26.79-33.69 19.4V123.5l46.53-26.79zm0 412.8L23.37 388.5V77.32L57.06 96.7l46.52 26.8V338.7a6.94 6.94 0 0 0 .12 .9 8 8 0 0 0 .16 1.18h0a5.92 5.92 0 0 0 .38 .9 6.38 6.38 0 0 0 .42 1v0a8.54 8.54 0 0 0 .6 .78 7.62 7.62 0 0 0 .66 .84l0 0c.23 .22 .52 .38 .77 .58a8.93 8.93 0 0 0 .86 .66l0 0 0 0 92.19 52.18zm8-106.2-80.06-45.32 84.09-48.41 92.26-53.11 80.13 46.13-58.8 33.56zm184.5 4.57L215.9 490.1V397.8L346.6 323.2l45.77-26.15zm0-119.1L358.7 250l-46.53-26.79V131.8l33.69 19.4L392.4 178zm8-105.3-80.2-46.17 80.2-46.16 80.18 46.15zm8 105.3V178L455 151.2l33.68-19.4v91.39h0z"]},Ff={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"]},Hf={prefix:"fab",iconName:"node-js",icon:[448,512,[],"f3d3","M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"]},Uf={prefix:"fab",iconName:"php",icon:[640,512,[],"f457","M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"]},Vf={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]},Wf={prefix:"fab",iconName:"vuejs",icon:[448,512,[],"f41f","M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"]},W=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},zi=typeof W=="object"&&W&&W.Object===Object&&W,Ii=zi,Pi=Ii,Di=typeof self=="object"&&self&&self.Object===Object&&self,ji=Pi||Di||Function("return this")(),Yi=ji,Ri=Yi,Fi=Ri.Symbol,Nn=Fi;function Hi(t,n){for(var e=-1,a=t==null?0:t.length,r=Array(a);++e<a;)r[e]=n(t[e],e,t);return r}var Ui=Hi,Vi=Array.isArray,Wi=Vi,de=Nn,ua=Object.prototype,Gi=ua.hasOwnProperty,Bi=ua.toString,pt=de?de.toStringTag:void 0;function qi(t){var n=Gi.call(t,pt),e=t[pt];try{t[pt]=void 0;var a=!0}catch{}var r=Bi.call(t);return a&&(n?t[pt]=e:delete t[pt]),r}var Xi=qi,Ji=Object.prototype,Zi=Ji.toString;function Ki(t){return Zi.call(t)}var Qi=Ki,ve=Nn,to=Xi,no=Qi,eo="[object Null]",ao="[object Undefined]",he=ve?ve.toStringTag:void 0;function ro(t){return t==null?t===void 0?ao:eo:he&&he in Object(t)?to(t):no(t)}var io=ro;function oo(t){return t!=null&&typeof t=="object"}var so=oo,fo=io,co=so,lo="[object Symbol]";function uo(t){return typeof t=="symbol"||co(t)&&fo(t)==lo}var mo=uo,ge=Nn,vo=Ui,ho=Wi,go=mo,po=1/0,pe=ge?ge.prototype:void 0,be=pe?pe.toString:void 0;function ma(t){if(typeof t=="string")return t;if(ho(t))return vo(t,ma)+"";if(go(t))return be?be.call(t):"";var n=t+"";return n=="0"&&1/t==-po?"-0":n}var qt=ma,bo=/\s/;function yo(t){for(var n=t.length;n--&&bo.test(t.charAt(n)););return n}var da=yo,xo=da,wo=/^\s+/;function ko(t){return t&&t.slice(0,xo(t)+1).replace(wo,"")}var Co=ko;function _o(t,n,e){var a=-1,r=t.length;n<0&&(n=-n>r?0:r+n),e=e>r?r:e,e<0&&(e+=r),r=n>e?0:e-n>>>0,n>>>=0;for(var o=Array(r);++a<r;)o[a]=t[a+n];return o}var So=_o,Ao=So;function $o(t,n,e){var a=t.length;return e=e===void 0?a:e,!n&&e>=a?t:Ao(t,n,e)}var zn=$o;function Mo(t,n,e,a){for(var r=t.length,o=e+(a?1:-1);a?o--:++o<r;)if(n(t[o],o,t))return o;return-1}var To=Mo;function Oo(t){return t!==t}var Lo=Oo;function Eo(t,n,e){for(var a=e-1,r=t.length;++a<r;)if(t[a]===n)return a;return-1}var No=Eo,zo=To,Io=Lo,Po=No;function Do(t,n,e){return n===n?Po(t,n,e):zo(t,Io,e)}var va=Do,jo=va;function Yo(t,n){for(var e=t.length;e--&&jo(n,t[e],0)>-1;);return e}var ha=Yo,Ro=va;function Fo(t,n){for(var e=-1,a=t.length;++e<a&&Ro(n,t[e],0)>-1;);return e}var ga=Fo;function Ho(t){return t.split("")}var Uo=Ho,Vo="\\ud800-\\udfff",Wo="\\u0300-\\u036f",Go="\\ufe20-\\ufe2f",Bo="\\u20d0-\\u20ff",qo=Wo+Go+Bo,Xo="\\ufe0e\\ufe0f",Jo="\\u200d",Zo=RegExp("["+Jo+Vo+qo+Xo+"]");function Ko(t){return Zo.test(t)}var Qo=Ko,pa="\\ud800-\\udfff",ts="\\u0300-\\u036f",ns="\\ufe20-\\ufe2f",es="\\u20d0-\\u20ff",as=ts+ns+es,rs="\\ufe0e\\ufe0f",is="["+pa+"]",gn="["+as+"]",pn="\\ud83c[\\udffb-\\udfff]",os="(?:"+gn+"|"+pn+")",ba="[^"+pa+"]",ya="(?:\\ud83c[\\udde6-\\uddff]){2}",xa="[\\ud800-\\udbff][\\udc00-\\udfff]",ss="\\u200d",wa=os+"?",ka="["+rs+"]?",fs="(?:"+ss+"(?:"+[ba,ya,xa].join("|")+")"+ka+wa+")*",cs=ka+wa+fs,ls="(?:"+[ba+gn+"?",gn,ya,xa,is].join("|")+")",us=RegExp(pn+"(?="+pn+")|"+ls+cs,"g");function ms(t){return t.match(us)||[]}var ds=ms,vs=Uo,hs=Qo,gs=ds;function ps(t){return hs(t)?gs(t):vs(t)}var In=ps,bs=qt;function ys(t){return t==null?"":bs(t)}var Pn=ys,xs=qt,ws=Co,ks=zn,Cs=ha,_s=ga,ye=In,Ss=Pn;function As(t,n,e){if(t=Ss(t),t&&(e||n===void 0))return ws(t);if(!t||!(n=xs(n)))return t;var a=ye(t),r=ye(n),o=_s(a,r),i=Cs(a,r)+1;return ks(a,o,i).join("")}var Gf=As,$s=qt,Ms=zn,Ts=ga,xe=In,Os=Pn,Ls=/^\s+/;function Es(t,n,e){if(t=Os(t),t&&(e||n===void 0))return t.replace(Ls,"");if(!t||!(n=$s(n)))return t;var a=xe(t),r=Ts(a,xe(n));return Ms(a,r).join("")}var Bf=Es;function qf(t){const n=t-1;return n*n*n+1}function we(t){return Object.prototype.toString.call(t)==="[object Date]"}function bn(t,n){if(t===n||t!==t)return()=>t;const e=typeof t;if(e!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const a=n.map((r,o)=>bn(t[o],r));return r=>a.map(o=>o(r))}if(e==="object"){if(!t||!n)throw new Error("Object cannot be null");if(we(t)&&we(n)){t=t.getTime(),n=n.getTime();const o=n-t;return i=>new Date(t+i*o)}const a=Object.keys(n),r={};return a.forEach(o=>{r[o]=bn(t[o],n[o])}),o=>{const i={};return a.forEach(s=>{i[s]=r[s](o)}),i}}if(e==="number"){const a=n-t;return r=>t+r*a}throw new Error(`Cannot interpolate ${e} values`)}function Xf(t,n={}){const e=Pe(t);let a,r=t;function o(i,s){if(t==null)return e.set(t=i),Promise.resolve();r=i;let f=a,c=!1,{delay:u=0,duration:l=400,easing:p=Ta,interpolate:y=bn}=nn(nn({},n),s);if(l===0)return f&&(f.abort(),f=null),e.set(t=r),Promise.resolve();const w=Ea()+u;let m;return a=Na(S=>{if(S<w)return!0;c||(m=y(t,i),typeof l=="function"&&(l=l(t,i)),c=!0),f&&(f.abort(),f=null);const M=S-w;return M>l?(e.set(t=i),!1):(e.set(t=m(p(M/l))),!0)}),a.promise}return{set:o,update:(i,s)=>o(i(r,t),s),subscribe:e.subscribe}}var Ca={exports:{}};(function(t,n){(function(e,a){t.exports=a()})(W,function(){var e=1e3,a=6e4,r=36e5,o="millisecond",i="second",s="minute",f="hour",c="day",u="week",l="month",p="quarter",y="year",w="date",m="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},A=function(_,g,d){var x=String(_);return!x||x.length>=g?_:""+Array(g+1-x.length).join(d)+_},D={s:A,z:function(_){var g=-_.utcOffset(),d=Math.abs(g),x=Math.floor(d/60),h=d%60;return(g<=0?"+":"-")+A(x,2,"0")+":"+A(h,2,"0")},m:function _(g,d){if(g.date()<d.date())return-_(d,g);var x=12*(d.year()-g.year())+(d.month()-g.month()),h=g.clone().add(x,l),C=d-h<0,k=g.clone().add(x+(C?-1:1),l);return+(-(x+(d-h)/(C?h-k:k-h))||0)},a:function(_){return _<0?Math.ceil(_)||0:Math.floor(_)},p:function(_){return{M:l,y,w:u,d:c,D:w,h:f,m:s,s:i,ms:o,Q:p}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(_){return _===void 0}},$="en",N={};N[$]=T;var j=function(_){return _ instanceof $t},Y=function _(g,d,x){var h;if(!g)return $;if(typeof g=="string"){var C=g.toLowerCase();N[C]&&(h=C),d&&(N[C]=d,h=C);var k=g.split("-");if(!h&&k.length>1)return _(k[0])}else{var L=g.name;N[L]=g,h=L}return!x&&h&&($=h),h||!x&&$},O=function(_,g){if(j(_))return _.clone();var d=typeof g=="object"?g:{};return d.date=_,d.args=arguments,new $t(d)},E=D;E.l=Y,E.i=j,E.w=function(_,g){return O(_,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})};var $t=function(){function _(d){this.$L=Y(d.locale,null,!0),this.parse(d)}var g=_.prototype;return g.parse=function(d){this.$d=function(x){var h=x.date,C=x.utc;if(h===null)return new Date(NaN);if(E.u(h))return new Date;if(h instanceof Date)return new Date(h);if(typeof h=="string"&&!/Z$/i.test(h)){var k=h.match(S);if(k){var L=k[2]-1||0,P=(k[7]||"0").substring(0,3);return C?new Date(Date.UTC(k[1],L,k[3]||1,k[4]||0,k[5]||0,k[6]||0,P)):new Date(k[1],L,k[3]||1,k[4]||0,k[5]||0,k[6]||0,P)}}return new Date(h)}(d),this.$x=d.x||{},this.init()},g.init=function(){var d=this.$d;this.$y=d.getFullYear(),this.$M=d.getMonth(),this.$D=d.getDate(),this.$W=d.getDay(),this.$H=d.getHours(),this.$m=d.getMinutes(),this.$s=d.getSeconds(),this.$ms=d.getMilliseconds()},g.$utils=function(){return E},g.isValid=function(){return this.$d.toString()!==m},g.isSame=function(d,x){var h=O(d);return this.startOf(x)<=h&&h<=this.endOf(x)},g.isAfter=function(d,x){return O(d)<this.startOf(x)},g.isBefore=function(d,x){return this.endOf(x)<O(d)},g.$g=function(d,x,h){return E.u(d)?this[x]:this.set(h,d)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(d,x){var h=this,C=!!E.u(x)||x,k=E.p(d),L=function(st,F){var Q=E.w(h.$u?Date.UTC(h.$y,F,st):new Date(h.$y,F,st),h);return C?Q:Q.endOf(c)},P=function(st,F){return E.w(h.toDate()[st].apply(h.toDate("s"),(C?[0,0,0,0]:[23,59,59,999]).slice(F)),h)},I=this.$W,R=this.$M,K=this.$D,G="set"+(this.$u?"UTC":"");switch(k){case y:return C?L(1,0):L(31,11);case l:return C?L(1,R):L(0,R+1);case u:var ht=this.$locale().weekStart||0,gt=(I<ht?I+7:I)-ht;return L(C?K-gt:K+(6-gt),R);case c:case w:return P(G+"Hours",0);case f:return P(G+"Minutes",1);case s:return P(G+"Seconds",2);case i:return P(G+"Milliseconds",3);default:return this.clone()}},g.endOf=function(d){return this.startOf(d,!1)},g.$set=function(d,x){var h,C=E.p(d),k="set"+(this.$u?"UTC":""),L=(h={},h[c]=k+"Date",h[w]=k+"Date",h[l]=k+"Month",h[y]=k+"FullYear",h[f]=k+"Hours",h[s]=k+"Minutes",h[i]=k+"Seconds",h[o]=k+"Milliseconds",h)[C],P=C===c?this.$D+(x-this.$W):x;if(C===l||C===y){var I=this.clone().set(w,1);I.$d[L](P),I.init(),this.$d=I.set(w,Math.min(this.$D,I.daysInMonth())).$d}else L&&this.$d[L](P);return this.init(),this},g.set=function(d,x){return this.clone().$set(d,x)},g.get=function(d){return this[E.p(d)]()},g.add=function(d,x){var h,C=this;d=Number(d);var k=E.p(x),L=function(R){var K=O(C);return E.w(K.date(K.date()+Math.round(R*d)),C)};if(k===l)return this.set(l,this.$M+d);if(k===y)return this.set(y,this.$y+d);if(k===c)return L(1);if(k===u)return L(7);var P=(h={},h[s]=a,h[f]=r,h[i]=e,h)[k]||1,I=this.$d.getTime()+d*P;return E.w(I,this)},g.subtract=function(d,x){return this.add(-1*d,x)},g.format=function(d){var x=this,h=this.$locale();if(!this.isValid())return h.invalidDate||m;var C=d||"YYYY-MM-DDTHH:mm:ssZ",k=E.z(this),L=this.$H,P=this.$m,I=this.$M,R=h.weekdays,K=h.months,G=function(F,Q,Xt,Mt){return F&&(F[Q]||F(x,C))||Xt[Q].substr(0,Mt)},ht=function(F){return E.s(L%12||12,F,"0")},gt=h.meridiem||function(F,Q,Xt){var Mt=F<12?"AM":"PM";return Xt?Mt.toLowerCase():Mt},st={YY:String(this.$y).slice(-2),YYYY:this.$y,M:I+1,MM:E.s(I+1,2,"0"),MMM:G(h.monthsShort,I,K,3),MMMM:G(K,I),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:G(h.weekdaysMin,this.$W,R,2),ddd:G(h.weekdaysShort,this.$W,R,3),dddd:R[this.$W],H:String(L),HH:E.s(L,2,"0"),h:ht(1),hh:ht(2),a:gt(L,P,!0),A:gt(L,P,!1),m:String(P),mm:E.s(P,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:k};return C.replace(M,function(F,Q){return Q||st[F]||k.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(d,x,h){var C,k=E.p(x),L=O(d),P=(L.utcOffset()-this.utcOffset())*a,I=this-L,R=E.m(this,L);return R=(C={},C[y]=R/12,C[l]=R,C[p]=R/3,C[u]=(I-P)/6048e5,C[c]=(I-P)/864e5,C[f]=I/r,C[s]=I/a,C[i]=I/e,C)[k]||I,h?R:E.a(R)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return N[this.$L]},g.locale=function(d,x){if(!d)return this.$L;var h=this.clone(),C=Y(d,x,!0);return C&&(h.$L=C),h},g.clone=function(){return E.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},_}(),Dn=$t.prototype;return O.prototype=Dn,[["$ms",o],["$s",i],["$m",s],["$H",f],["$W",c],["$M",l],["$y",y],["$D",w]].forEach(function(_){Dn[_[1]]=function(g){return this.$g(g,_[0],_[1])}}),O.extend=function(_,g){return _.$i||(_(g,$t,O),_.$i=!0),O},O.locale=Y,O.isDayjs=j,O.unix=function(_){return O(1e3*_)},O.en=N[$],O.Ls=N,O.p={},O})})(Ca);var Jf=Ca.exports,_a={exports:{}};(function(t,n){(function(e,a){t.exports=a()})(W,function(){return function(e,a){a.prototype.isSameOrAfter=function(r,o){return this.isSame(r,o)||this.isAfter(r,o)}}})})(_a);var Zf=_a.exports,Sa={exports:{}};(function(t,n){(function(e,a){t.exports=a()})(W,function(){return function(e,a){a.prototype.isSameOrBefore=function(r,o){return this.isSame(r,o)||this.isBefore(r,o)}}})})(Sa);var Kf=Sa.exports,Aa={exports:{}};(function(t,n){(function(e,a){t.exports=a()})(W,function(){var e="minute",a=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(o,i,s){var f=i.prototype;s.utc=function(m){var S={date:m,utc:!0,args:arguments};return new i(S)},f.utc=function(m){var S=s(this.toDate(),{locale:this.$L,utc:!0});return m?S.add(this.utcOffset(),e):S},f.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var c=f.parse;f.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),c.call(this,m)};var u=f.init;f.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else u.call(this)};var l=f.utcOffset;f.utcOffset=function(m,S){var M=this.$utils().u;if(M(m))return this.$u?0:M(this.$offset)?l.call(this):this.$offset;if(typeof m=="string"&&(m=function($){$===void 0&&($="");var N=$.match(a);if(!N)return null;var j=(""+N[0]).match(r)||["-",0,0],Y=j[0],O=60*+j[1]+ +j[2];return O===0?0:Y==="+"?O:-O}(m),m===null))return this;var T=Math.abs(m)<=16?60*m:m,A=this;if(S)return A.$offset=T,A.$u=m===0,A;if(m!==0){var D=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(A=this.local().add(T+D,e)).$offset=T,A.$x.$localOffset=D}else A=this.utc();return A};var p=f.format;f.format=function(m){var S=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,S)},f.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||new Date().getTimezoneOffset());return this.$d.valueOf()-6e4*m},f.isUTC=function(){return!!this.$u},f.toISOString=function(){return this.toDate().toISOString()},f.toString=function(){return this.toDate().toUTCString()};var y=f.toDate;f.toDate=function(m){return m==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var w=f.diff;f.diff=function(m,S,M){if(m&&this.$u===m.$u)return w.call(this,m,S,M);var T=this.local(),A=s(m).local();return w.call(T,A,S,M)}}})})(Aa);var Qf=Aa.exports,$a={exports:{}};(function(t,n){(function(e,a){t.exports=a()})(W,function(){return function(e,a,r){e=e||{};var o=a.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(c,u,l,p){return o.fromToBase(c,u,l,p)}r.en.relativeTime=i,o.fromToBase=function(c,u,l,p,y){for(var w,m,S,M=l.$locale().relativeTime||i,T=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],A=T.length,D=0;D<A;D+=1){var $=T[D];$.d&&(w=p?r(c).diff(l,$.d,!0):l.diff(c,$.d,!0));var N=(e.rounding||Math.round)(Math.abs(w));if(S=w>0,N<=$.r||!$.r){N<=1&&D>0&&($=T[D-1]);var j=M[$.l];y&&(N=y(""+N)),m=typeof j=="string"?j.replace("%d",N):j(N,u,$.l,S);break}}if(u)return m;var Y=S?M.future:M.past;return typeof Y=="function"?Y(m):Y.replace("%s",m)},o.to=function(c,u){return s(c,u,this,!0)},o.from=function(c,u){return s(c,u,this)};var f=function(c){return c.$u?r.utc():r()};o.toNow=function(c){return this.to(f(this),c)},o.fromNow=function(c){return this.from(f(this),c)}}})})($a);var t1=$a.exports,Ma={exports:{}};(function(t,n){(function(e,a){t.exports=a()})(W,function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(a,r,o){var i=r.prototype,s=i.format;o.en.formats=e,i.format=function(f){f===void 0&&(f="YYYY-MM-DDTHH:mm:ssZ");var c=this.$locale().formats,u=function(l,p){return l.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(y,w,m){var S=m&&m.toUpperCase();return w||p[m]||e[m]||p[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,T,A){return T||A.slice(1)})})}(f,c===void 0?{}:c);return s.call(this,u)}}})})(Ma);var n1=Ma.exports,Ns=qt,zs=zn,Is=ha,ke=In,Ps=Pn,Ds=da;function js(t,n,e){if(t=Ps(t),t&&(e||n===void 0))return t.slice(0,Ds(t)+1);if(!t||!(n=Ns(n)))return t;var a=ke(t),r=Is(a,ke(n))+1;return zs(a,0,r).join("")}var e1=js;export{Rf as $,hf as A,qa as B,nn as C,Pe as D,lf as E,wf as F,kf as G,$f as H,Cf as I,_f as J,Lf as K,Nf as L,Mf as M,Ef as N,Sf as O,Af as P,zf as Q,Tf as R,yf as S,Of as T,Vf as U,Pf as V,Ff as W,jf as X,Df as Y,Wf as Z,Uf as _,Fa as a,Yf as a0,Hf as a1,If as a2,Ys as a3,ef as a4,ja as a5,Xs as a6,B as a7,dt as a8,cf as a9,Rs as aa,Gs as ab,Fs as ac,Us as ad,Vs as ae,Hs as af,xf as ag,Bf as ah,sf as ai,Gf as aj,Xf as ak,Wi as al,qf as am,Ws as an,af as ao,Rn as ap,Qs as aq,Fn as ar,Jf as as,Kf as at,Zf as au,Qf as av,t1 as aw,n1 as ax,e1 as ay,Js as b,Zs as c,Dt as d,Oe as e,nf as f,Ra as g,Ua as h,bf as i,tf as j,Bs as k,qs as l,Ks as m,uf as n,df as o,mf as p,Ga as q,ff as r,Oa as s,yn as t,of as u,rf as v,gf as w,pf as x,Ba as y,vf as z};
