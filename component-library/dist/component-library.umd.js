var mt=Object.defineProperty,ft=Object.defineProperties;var _t=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var At=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var X=(h,d,$)=>d in h?mt(h,d,{enumerable:!0,configurable:!0,writable:!0,value:$}):h[d]=$,D=(h,d)=>{for(var $ in d||(d={}))At.call(d,$)&&X(h,$,d[$]);if(Q)for(var $ of Q(d))gt.call(d,$)&&X(h,$,d[$]);return h},I=(h,d)=>ft(h,_t(d));(function(h,d){typeof exports=="object"&&typeof module!="undefined"?d(exports,require("lit")):typeof define=="function"&&define.amd?define(["exports","lit"],d):(h=typeof globalThis!="undefined"?globalThis:h||self,d(h.ComponentLibrary={},h.lit))})(this,function(h,d){"use strict";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=s=>t=>typeof t=="function"?((e,n)=>(window.customElements.define(e,n),n))(s,t):((e,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(r){window.customElements.define(e,r)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?I(D({},t),{finisher(e){e.createProperty(t.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function L(s){return(t,e)=>e!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(s,t,e):Y(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=({finisher:s,descriptor:t})=>(e,n)=>{var i;if(n===void 0){const o=(i=e.originalKey)!==null&&i!==void 0?i:e.key,r=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:I(D({},e),{key:o});return s!=null&&(r.finisher=function(v){s(v,o)}),r}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,n,t(n)),s==null||s(o,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(s,t){return tt({descriptor:e=>{const n={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;n.get=function(){var o,r;return this[i]===void 0&&(this[i]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&r!==void 0?r:null),this[i]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;((O=window.HTMLSlotElement)===null||O===void 0?void 0:O.prototype.assignedElements)!=null;let j=d.css`
  :host {
    --color-primary: #1479cc;
    --color-secondary: #9f40f7;

    --color-background: #d6edff;
    --color-on-background: #535353;

    --color-surface: #ffffff;
    --color-on-surface: #535353; 
  }
`;var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,B=(s,t,e,n)=>{for(var i=n>1?void 0:n?nt(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&it(t,e,i),i};h.RupButton=class extends d.LitElement{render(){return this.options?d.html`<button type='button' @click=${this.options.action}>${this.options.label}</button>`:""}},h.RupButton.styles=[j,d.css`
      button {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: .25rem;
        font-weight: 400;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        transition-property: background-color,border-color,color,fill,stroke;
        transition-duration: .2s;
        cursor: pointer;
        outline: 0;
        display: inline-flex;
        padding: 0 .75rem;
        height: 2rem;
        line-height: calc(2rem - 2px);
        min-width: 60px;
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        background-color: transparent
      }
      button:hover{
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        background-color: var(--color-background)
      }
    `],B([L({type:Object})],h.RupButton.prototype,"options",2),h.RupButton=B([$("rup-button")],h.RupButton);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var P;const g=globalThis.trustedTypes,z=g?g.createPolicy("lit-html",{createHTML:s=>s}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,U="?"+_,ot=`<${U}>`,y=document,M=(s="")=>y.createComment(s),w=s=>s===null||typeof s!="object"&&typeof s!="function",W=Array.isArray,st=s=>{var t;return W(s)||typeof((t=s)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,V=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,K=/'/g,Z=/"/g,G=/^(?:script|style|textarea|title)$/i,N=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),F=new WeakMap,b=y.createTreeWalker(y,129,null,!1),rt=(s,t)=>{const e=s.length-1,n=[];let i,o=t===2?"<svg>":"",r=x;for(let l=0;l<e;l++){const a=s[l];let f,c,u=-1,m=0;for(;m<a.length&&(r.lastIndex=m,c=r.exec(a),c!==null);)m=r.lastIndex,r===x?c[1]==="!--"?r=q:c[1]!==void 0?r=V:c[2]!==void 0?(G.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=A):c[3]!==void 0&&(r=A):r===A?c[0]===">"?(r=i!=null?i:x,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,f=c[1],r=c[3]===void 0?A:c[3]==='"'?Z:K):r===Z||r===K?r=A:r===q||r===V?r=x:(r=A,i=void 0);const S=r===A&&s[l+1].startsWith("/>")?" ":"";o+=r===x?a+ot:u>=0?(n.push(f),a.slice(0,u)+"$lit$"+a.slice(u)+_+S):a+_+(u===-2?(n.push(void 0),l):S)}const v=o+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[z!==void 0?z.createHTML(v):v,n]};class C{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const v=t.length-1,l=this.parts,[a,f]=rt(t,e);if(this.el=C.createElement(a,n),b.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(i=b.nextNode())!==null&&l.length<v;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(_)){const m=f[r++];if(c.push(u),m!==void 0){const S=i.getAttribute(m.toLowerCase()+"$lit$").split(_),E=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:E[2],strings:S,ctor:E[1]==="."?at:E[1]==="?"?ht:E[1]==="@"?dt:k})}else l.push({type:6,index:o})}for(const u of c)i.removeAttribute(u)}if(G.test(i.tagName)){const c=i.textContent.split(_),u=c.length-1;if(u>0){i.textContent=g?g.emptyScript:"";for(let m=0;m<u;m++)i.append(c[m],M()),b.nextNode(),l.push({type:2,index:++o});i.append(c[u],M())}}}else if(i.nodeType===8)if(i.data===U)l.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(_,c+1))!==-1;)l.push({type:7,index:o}),c+=_.length-1}o++}}static createElement(t,e){const n=y.createElement("template");return n.innerHTML=t,n}}function H(s,t,e=s,n){var i,o,r,v;if(t===N)return t;let l=n!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[n]:e._$Cu;const a=w(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,e,n)),n!==void 0?((r=(v=e)._$Cl)!==null&&r!==void 0?r:v._$Cl=[])[n]=l:e._$Cu=l),l!==void 0&&(t=H(s,l._$AS(s,t.values),l,n)),t}class lt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(n,!0);b.currentNode=o;let r=b.nextNode(),v=0,l=0,a=i[0];for(;a!==void 0;){if(v===a.index){let f;a.type===2?f=new T(r,r.nextSibling,this,t):a.type===1?f=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(f=new ut(r,this,t)),this.v.push(f),a=i[++l]}v!==(a==null?void 0:a.index)&&(r=b.nextNode(),v++)}return o}m(t){let e=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class T{constructor(t,e,n,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),w(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==N&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):st(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==p&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(n);else{const r=new lt(o,this),v=r.p(this.options);r.m(n),this.k(v),this._$AH=r}}_$AC(t){let e=F.get(t.strings);return e===void 0&&F.set(t.strings,e=new C(t)),e}S(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new T(this.M(M()),this.M(M()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class k{constructor(t,e,n,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(o===void 0)t=H(this,t,e,0),r=!w(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const v=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=H(this,v[n+l],e,l),a===N&&(a=this._$AH[l]),r||(r=!w(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!i&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class at extends k{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}}const ct=g?g.emptyScript:"";class ht extends k{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,ct):this.element.removeAttribute(this.name)}}class dt extends k{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){var n;if((t=(n=H(this,t,e,0))!==null&&n!==void 0?n:p)===N)return;const i=this._$AH,o=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const J=window.litHtmlPolyfillSupport;J==null||J(C,T),((P=globalThis.litHtmlVersions)!==null&&P!==void 0?P:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=s=>s!=null?s:p;var vt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,R=(s,t,e,n)=>{for(var i=n>1?void 0:n?$t(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&vt(t,e,i),i};h.RupDialog=class extends d.LitElement{handleClick({target:s}){s.nodeName==="DIALOG"&&(s.close("dismiss"),this.options.action&&this.options.action())}showModal(){this.dialog.showModal()}close(){this.dialog.close()}render(){return console.log(this.options.isOpen),this.options?d.html`
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
    </dialog>`:""}},h.RupDialog.styles=[j,d.css`
      :host {
        display: block;
        color: var(--color-primary);
      }
    `],R([L({type:Object})],h.RupDialog.prototype,"options",2),R([et("dialog")],h.RupDialog.prototype,"dialog",2),h.RupDialog=R([$("rup-dialog")],h.RupDialog),Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
