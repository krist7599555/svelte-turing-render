function S(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function j(){return Object.create(null)}function p(t){t.forEach(D)}function K(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ht(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function mt(t,n){return t!=t?n==n:t!==n}function Q(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return S;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function pt(t,n,e){t.$$.on_destroy.push(W(n,e))}function yt(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function xt(t,n,e,i,r,u){if(r){const c=P(n,e,i,u);t.p(c,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let E=!1;function U(){E=!0}function V(){E=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const s=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=s?r+1:X(1,r,y=>n[e[y]].claim_order,s))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const u=[],c=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);u.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<u.length&&c[l].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(c[l],f)}}function Z(t,n){if(E){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){E&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function $t(){return k(" ")}function vt(){return k("")}function Et(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Nt(t,n,e){return rt(t,n,e,O)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function At(t){return ct(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Tt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new q(void 0,n);G(t);const r=t.splice(e,i-e+1);v(r[0]),v(r[r.length-1]);const u=r.slice(1,r.length-1);for(const c of u)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(u,n)}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function lt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Ct(t,n=document.body){return Array.from(n.querySelectorAll(t))}class st{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=O(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class q extends st{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let m;function h(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Mt(t){w().$$.on_mount.push(t)}function jt(t){w().$$.after_update.push(t)}function Ht(t){w().$$.on_destroy.push(t)}function qt(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=lt(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}function Lt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],L=[],b=[],B=[],F=Promise.resolve();let A=!1;function I(){A||(A=!0,F.then(R))}function Bt(){return I(),F}function T(t){b.push(t)}const N=new Set;let x=0;function R(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),ot(n.$$)}for(h(null),d.length=0,x=0;L.length;)L.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];N.has(e)||(N.add(e),e())}b.length=0}while(d.length);for(;B.length;)B.pop()();A=!1,N.clear(),h(t)}function ot(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Pt(){_.r||p(_.c),_=_.p}function ut(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Gt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(n,e),i||T(()=>{const l=u.map(D).filter(K);c?c.push(...l):p(l),t.$$.on_mount=[]}),o.forEach(T)}function ft(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,u,c,o=[-1]){const l=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:S,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:j(),dirty:o,skip_bound:!1,root:n.target||l.$$.root};c&&c(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,y,...C)=>{const M=C.length?C[0]:y;return s.ctx&&r(s.ctx[a],s.ctx[a]=M)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](M),f&&_t(t,a)),y}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){U();const a=it(n.target);s.fragment&&s.fragment.l(a),a.forEach(v)}else s.fragment&&s.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),V(),R()}h(l)}class It{$destroy(){ft(this,1),this.$destroy=S}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{S as A,yt as B,xt as C,bt as D,gt as E,Z as F,pt as G,qt as H,mt as I,R as J,W as K,q as L,Tt as M,Et as N,p as O,Ht as P,Lt as Q,Ct as R,It as S,ht as T,$t as a,nt as b,At as c,Pt as d,vt as e,ut as f,Dt as g,v as h,Ft as i,jt as j,O as k,Nt as l,it as m,wt as n,Mt as o,kt as p,k as q,ct as r,dt as s,Ot as t,St as u,Gt as v,zt as w,at as x,ft as y,Bt as z};
