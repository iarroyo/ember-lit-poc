var ft=Object.defineProperty,_t=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var X=(d,c,$)=>c in d?ft(d,c,{enumerable:!0,configurable:!0,writable:!0,value:$}):d[c]=$,D=(d,c)=>{for(var $ in c||(c={}))mt.call(c,$)&&X(d,$,c[$]);if(Q)for(var $ of Q(c))gt.call(c,$)&&X(d,$,c[$]);return d},I=(d,c)=>_t(d,At(c));(function(d,c){typeof exports=="object"&&typeof module!="undefined"?c(exports,require("lit")):typeof define=="function"&&define.amd?define(["exports","lit"],c):(d=typeof globalThis!="undefined"?globalThis:d||self,c(d.ComponentLibrary={},d.lit))})(this,function(d,c){"use strict";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=o=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(o,t):((e,s)=>{const{kind:i,elements:n}=s;return{kind:i,elements:n,finisher(r){window.customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?I(D({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function L(o){return(t,e)=>e!==void 0?((s,i,n)=>{i.constructor.createProperty(n,s)})(o,t,e):Y(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=({finisher:o,descriptor:t})=>(e,s)=>{var i;if(s===void 0){const n=(i=e.originalKey)!==null&&i!==void 0?i:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:I(D({},e),{key:n});return o!=null&&(r.finisher=function(v){o(v,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,s,t(s)),o==null||o(n,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(o,t){return tt({descriptor:e=>{const s={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;s.get=function(){var n,r;return this[i]===void 0&&(this[i]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&r!==void 0?r:null),this[i]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k;((k=window.HTMLSlotElement)===null||k===void 0?void 0:k.prototype.assignedElements)!=null;let B=c.css`
  :host {
    --color-primary: #4287f5;
    --color-secondary: #9f40f7;

    --color-background: #f9f9f9;
    --color-on-background: #535353;

    --color-surface: #ffffff;
    --color-on-surface: #535353; 
  }
`;var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,j=(o,t,e,s)=>{for(var i=s>1?void 0:s?st(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&it(t,e,i),i};d.RupButton=class extends c.LitElement{render(){return this.options?c.html`<button @click=${this.options.action}>${this.options.label}</button>`:""}},d.RupButton.styles=[B,c.css`
      :host {
        display: block;
        color: var(--color-primary);
      }
    `],j([L({type:Object})],d.RupButton.prototype,"options",2),d.RupButton=j([$("rup-button")],d.RupButton);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var P;const g=globalThis.trustedTypes,U=g?g.createPolicy("lit-html",{createHTML:o=>o}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,z="?"+A,nt=`<${z}>`,y=document,M=(o="")=>y.createComment(o),N=o=>o===null||typeof o!="object"&&typeof o!="function",W=Array.isArray,ot=o=>{var t;return W(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,V=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,K=/'/g,Z=/"/g,G=/^(?:script|style|textarea|title)$/i,C=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),F=new WeakMap,b=y.createTreeWalker(y,129,null,!1),rt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":"",r=w;for(let l=0;l<e;l++){const h=o[l];let _,a,u=-1,f=0;for(;f<h.length&&(r.lastIndex=f,a=r.exec(h),a!==null);)f=r.lastIndex,r===w?a[1]==="!--"?r=q:a[1]!==void 0?r=V:a[2]!==void 0?(G.test(a[2])&&(i=RegExp("</"+a[2],"g")),r=m):a[3]!==void 0&&(r=m):r===m?a[0]===">"?(r=i!=null?i:w,u=-1):a[1]===void 0?u=-2:(u=r.lastIndex-a[2].length,_=a[1],r=a[3]===void 0?m:a[3]==='"'?Z:K):r===Z||r===K?r=m:r===q||r===V?r=w:(r=m,i=void 0);const E=r===m&&o[l+1].startsWith("/>")?" ":"";n+=r===w?h+nt:u>=0?(s.push(_),h.slice(0,u)+"$lit$"+h.slice(u)+A+E):h+A+(u===-2?(s.push(void 0),l):E)}const v=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[U!==void 0?U.createHTML(v):v,s]};class x{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const v=t.length-1,l=this.parts,[h,_]=rt(t,e);if(this.el=x.createElement(h,s),b.currentNode=this.el.content,e===2){const a=this.el.content,u=a.firstChild;u.remove(),a.append(...u.childNodes)}for(;(i=b.nextNode())!==null&&l.length<v;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(A)){const f=_[r++];if(a.push(u),f!==void 0){const E=i.getAttribute(f.toLowerCase()+"$lit$").split(A),O=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:O[2],strings:E,ctor:O[1]==="."?ht:O[1]==="?"?dt:O[1]==="@"?ct:S})}else l.push({type:6,index:n})}for(const u of a)i.removeAttribute(u)}if(G.test(i.tagName)){const a=i.textContent.split(A),u=a.length-1;if(u>0){i.textContent=g?g.emptyScript:"";for(let f=0;f<u;f++)i.append(a[f],M()),b.nextNode(),l.push({type:2,index:++n});i.append(a[u],M())}}}else if(i.nodeType===8)if(i.data===z)l.push({type:2,index:n});else{let a=-1;for(;(a=i.data.indexOf(A,a+1))!==-1;)l.push({type:7,index:n}),a+=A.length-1}n++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function H(o,t,e=o,s){var i,n,r,v;if(t===C)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const h=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(o),l._$AT(o,e,s)),s!==void 0?((r=(v=e)._$Cl)!==null&&r!==void 0?r:v._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=H(o,l._$AS(o,t.values),l,s)),t}class lt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(s,!0);b.currentNode=n;let r=b.nextNode(),v=0,l=0,h=i[0];for(;h!==void 0;){if(v===h.index){let _;h.type===2?_=new T(r,r.nextSibling,this,t):h.type===1?_=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(_=new ut(r,this,t)),this.v.push(_),h=i[++l]}v!==(h==null?void 0:h.index)&&(r=b.nextNode(),v++)}return n}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{constructor(t,e,s,i){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),N(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==C&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):ot(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=x.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(s);else{const r=new lt(n,this),v=r.p(this.options);r.m(s),this.k(v),this._$AH=r}}_$AC(t){let e=F.get(t.strings);return e===void 0&&F.set(t.strings,e=new x(t)),e}S(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new T(this.M(M()),this.M(M()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class S{constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=H(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==C,r&&(this._$AH=t);else{const v=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=H(this,v[s+l],e,l),h===C&&(h=this._$AH[l]),r||(r=!N(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+n[l+1]),this._$AH[l]=h}r&&!i&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ht extends S{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}}const at=g?g.emptyScript:"";class dt extends S{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,at):this.element.removeAttribute(this.name)}}class ct extends S{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=H(this,t,e,0))!==null&&s!==void 0?s:p)===C)return;const i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const J=window.litHtmlPolyfillSupport;J==null||J(x,T),((P=globalThis.litHtmlVersions)!==null&&P!==void 0?P:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=o=>o!=null?o:p;var vt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,R=(o,t,e,s)=>{for(var i=s>1?void 0:s?$t(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&vt(t,e,i),i};d.RupDialog=class extends c.LitElement{handleClick({target:o}){o.nodeName==="DIALOG"&&(o.close("dismiss"),this.options.action&&this.options.action())}showModal(){this.dialog.showModal()}close(){this.dialog.close()}render(){return console.log(this.options.isOpen),this.options?c.html`
    <dialog id='dialog' open=${pt(this.options.isOpen?this.options.isOpen:void 0)} @click=${this.handleClick}>
      <div id="dialogContainer">
        <span>${this.options.header}</span>
        <div>
          Aliqua occaecat labore esse do occaecat nulla.
          Duis duis veniam nulla reprehenderit adipisicing fugiat.
          Minim laborum tempor eu nisi velit elit laboris. 
          Excepteur duis excepteur cupidatat do ullamco velit deserunt irure officia.
          Irure sit non velit veniam ullamco labore cupidatat magna elit sit incididunt ad. 
          Duis non ullamco anim laboris minim officia sint anim in excepteur. 
          Veniam adipisicing aute exercitation cillum.
        </div>
      </div>
    </dialog>`:""}},d.RupDialog.styles=[B,c.css`
      :host {
        display: block;
        color: var(--color-primary);
      }
    `],R([L({type:Object})],d.RupDialog.prototype,"options",2),R([et("dialog")],d.RupDialog.prototype,"dialog",2),d.RupDialog=R([$("rup-dialog")],d.RupDialog),Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
