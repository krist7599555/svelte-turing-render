import{S as O,i as D,s as H,H as K,o as S,z as ye,I as _e,J as we,e as T,b as d,f as M,g as Z,t as N,d as ee,h as f,A as E,v as X,w as ge,x as G,K as xe,L as $e,y as Y,M as je,N as Ee,O as Me,q as v,k as _,a as $,P as te,r as y,l as g,c as j,Q as ne,m as w,R as z,T as be,U as Te,V as ke,F as h,u as ue,W as Be,n as b,X as Ne}from"../../chunks/index-9e5c50dd.js";import{w as Oe}from"../../chunks/index-c89fc770.js";function De(n){let e=K();return S(async()=>{await ye(),e("complete")}),[]}class Re extends O{constructor(e){super(),D(this,e,De,null,H,{})}}class Ae extends O{constructor(e){super(),D(this,e,null,null,H,{})}}function L(n){var e,i;return{type:"component",component:n.component,props:(e=n.props)!=null?e:{},events:(i=n.events)!=null?i:{}}}const Ce=L({component:Ae});L({component:Re});function Fe(n){return P(n)&&n.type=="component"&&He(n.component)&&P(n.props)&&P(n.events)}function qe(n){return P(n)&&n.type=="function"&&I(n.function)}function He(n){return I(n)||P(n)&&("render"in n||"$$render"in n)}function Le(n){return I(n==null?void 0:n.then)}function P(n){return n!=null&&n instanceof Object&&typeof n=="object"}function Pe(n){return n instanceof Array}function I(n){return n instanceof Function}const fe=(()=>{let n=0;return()=>`component-${++n}`})();function Ie(n){const e=Oe({...Ce,key:fe()});async function i(t){if(t){if(Le(t))return i(await t);if(I(t))return i(t());if(Pe(t))for(const s of t)await i(s);else if(qe(t))await t.function();else if(Fe(t))await new Promise(s=>{e.set({...t,events:{...t.events,complete(){var o;I((o=t==null?void 0:t.events)==null?void 0:o.complete)&&t.events.complete(),s()}},key:fe()})});else throw console.error(t),new Error(`block type not match any guard for ${t}`)}else return}return i(n),{subscribe:e.subscribe}}function me(n){let e=n[2].key,i,t,s=pe(n);return{c(){s.c(),i=T()},l(o){s.l(o),i=T()},m(o,a){s.m(o,a),d(o,i,a),t=!0},p(o,a){a&4&&_e(e,e=o[2].key)?(Z(),N(s,1,1,E),ee(),s=pe(o),s.c(),M(s,1),s.m(i.parentNode,i)):s.p(o,a)},i(o){t||(M(s),t=!0)},o(o){N(s),t=!1},d(o){o&&f(i),s.d(o)}}}function pe(n){let e,i,t;const s=[n[2].props];var o=n[2].component;function a(l){let c={};for(let r=0;r<s.length;r+=1)c=Me(c,s[r]);return{props:c}}return o&&(e=new o(a()),n[4](e)),{c(){e&&X(e.$$.fragment),i=T()},l(l){e&&ge(e.$$.fragment,l),i=T()},m(l,c){e&&G(e,l,c),d(l,i,c),t=!0},p(l,c){const r=c&4?xe(s,[$e(l[2].props)]):{};if(o!==(o=l[2].component)){if(e){Z();const m=e;N(m.$$.fragment,1,0,()=>{Y(m,1)}),ee()}o?(e=new o(a()),l[4](e),X(e.$$.fragment),M(e.$$.fragment,1),G(e,i.parentNode,i)):e=null}else o&&e.$set(r)},i(l){t||(e&&M(e.$$.fragment,l),t=!0)},o(l){e&&N(e.$$.fragment,l),t=!1},d(l){n[4](null),l&&f(i),e&&Y(e,l)}}}function Ve(n){let e,i,t=n[1]&&me(n);return{c(){t&&t.c(),e=T()},l(s){t&&t.l(s),e=T()},m(s,o){t&&t.m(s,o),d(s,e,o),i=!0},p(s,[o]){s[1]?t?(t.p(s,o),o&2&&M(t,1)):(t=me(s),t.c(),M(t,1),t.m(e.parentNode,e)):t&&(Z(),N(t,1,1,()=>{t=null}),ee())},i(s){i||(M(t),i=!0)},o(s){N(t),i=!1},d(s){t&&t.d(s),s&&f(e)}}}function ze(n,e,i){let t,s,o=E,a=()=>(o(),o=je(t,m=>i(2,s=m)),t);n.$$.on_destroy.push(()=>o());let{block:l=[]}=e,c;function r(m){Ee[m?"unshift":"push"](()=>{c=m,i(0,c)})}return n.$$set=m=>{"block"in m&&i(3,l=m.block)},n.$$.update=()=>{if(n.$$.dirty&8&&a(i(1,t=Ie(l))),n.$$.dirty&7&&c&&t&&s)for(const[m,u]of Object.entries(s.events))c.$on(m,u)},[c,t,s,l,r]}class Ke extends O{constructor(e){super(),D(this,e,ze,Ve,_e,{block:3})}get block(){return this.$$.ctx[3]}set block(e){this.$$set({block:e}),we()}}const de=`/* eslint-disable @typescript-eslint/no-explicit-any */

export type BlockFunction = { type: 'function'; function: any };
export type BlockComponent = {
  type: 'component';
  component: any;
  props: Record<string, any>;
  events: Record<string, (args: any) => void>;
};
export type Block =
  | BlockComponent
  | BlockFunction
  | (() => Block)
  | Promise<Block>
  | Block[]
  | null
  | undefined
  | false;

export type BlockCompleteEvent = { complete: void };
`,he=`<script lang="ts" context="module">
declare var hljs: any;
<\/script>

<script lang="ts">
import { onMount } from 'svelte';

import { type Block, component, Touring } from '$lib';
import source_code_type from '$lib/type?raw';

import source_code_page from './+page.svelte?raw';
import Message from './message.svelte';
import Note from './note.svelte';
import Timeout from './timeout.svelte';

onMount(() => {
  hljs.highlightAll();
});

function highlight(node: HTMLElement, lang: string) {
  node.innerHTML = hljs.highlight(node.innerHTML);
}

// test
const block: Block = [
  component({
    component: Message,
    props: {},
    events: {
      message_custom_event(e) {
        console.log(e.detail.fib);
        // @ts-expect-error
        console.log(e.detail.man === undefined);
      },
      dblclick() {},
      // @ts-expect-error
      xxx() {
        // method no exists
      },
    },
  }),
  component({
    component: Note,
    props: {
      text: 'note',
    },
  }),
  component({
    component: Timeout,
    props: {
      text: 'timeout',
      duration: 3000,
    },
  }),
  () => block,
];
<\/script>

<svelte:head>
  <!-- https://github.com/highlightjs/highlight.js -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"
  />
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"><\/script>
</svelte:head>

<main>
  <h1>@krist7599555/svelte-turing-render DEMO</h1>
  <a href="https://github.com/krist7599555/svelte-turing-render">
    github https://github.com/krist7599555/svelte-turing-render
  </a>
  <div id="touring">
    <Touring block={block} />
  </div>
  <pre><code class="language-html">{source_code_page}</code></pre>
  <pre><code class="language-typescript">{source_code_type}</code></pre>
</main>

<style>
main {
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-family: monospace;
  width: min(800px, 100% - 2rem);
  margin: auto;
  min-height: 90vh;
}
h1 {
  font-size: 1.5rem;
}
a {
  color: #f55432;
  margin-bottom: 1rem;
  display: block;
}
#touring {
  background: #363636;
  border-radius: 1rem;
  padding: 2rem;
  color: #ffffff;
}
pre {
  border-radius: 1rem;
  color: #ffffff;
  margin-top: 2rem;
  font-size: 0.7rem;
  width: 100%;
  overflow: scroll;
}
pre code {
  padding: 1.5rem;
}
</style>
`;function Se(n){let e,i,t,s,o,a,l,c;return{c(){e=v("Message click any where to continue"),i=_("br"),t=$(),s=new te(!1),o=$(),a=_("div"),this.h()},l(r){e=y(r,"Message click any where to continue"),i=g(r,"BR",{}),t=j(r),s=ne(r,!1),o=j(r),a=g(r,"DIV",{}),w(a).forEach(f),this.h()},h(){s.a=o},m(r,m){d(r,e,m),d(r,i,m),d(r,t,m),s.m(n[0],r,m),d(r,o,m),d(r,a,m),l||(c=[z(window,"click",n[3]),z(a,"dblclick",n[2])],l=!0)},p(r,[m]){m&1&&s.p(r[0])},i:E,o:E,d(r){r&&f(e),r&&f(i),r&&f(t),r&&s.d(),r&&f(o),r&&f(a),l=!1,be(c)}}}function Ue(n,e,i){const t=K();let{text:s="default"}=e;S(()=>{t("message_custom_event",{fib:1234}),document.body.style.cursor="pointer"}),Te(()=>{document.body.style.cursor=""});function o(l){ke.call(this,n,l)}const a=()=>t("complete");return n.$$set=l=>{"text"in l&&i(0,s=l.text)},[s,t,o,a]}class Je extends O{constructor(e){super(),D(this,e,Ue,Se,H,{text:0})}}function Qe(n){let e,i,t,s,o,a,l;return{c(){e=v(`Note
`),i=new te(!1),t=$(),s=_("button"),o=v("click button to continue"),this.h()},l(c){e=y(c,`Note
`),i=ne(c,!1),t=j(c),s=g(c,"BUTTON",{});var r=w(s);o=y(r,"click button to continue"),r.forEach(f),this.h()},h(){i.a=t},m(c,r){d(c,e,r),i.m(n[0],c,r),d(c,t,r),d(c,s,r),h(s,o),a||(l=[z(s,"click",n[2]),z(s,"click",n[3])],a=!0)},p(c,[r]){r&1&&i.p(c[0])},i:E,o:E,d(c){c&&f(e),c&&i.d(),c&&f(t),c&&f(s),a=!1,be(l)}}}function We(n,e,i){const t=K();let{text:s}=e;function o(l){ke.call(this,n,l)}const a=()=>t("complete");return n.$$set=l=>{"text"in l&&i(0,s=l.text)},[s,t,o,a]}class Xe extends O{constructor(e){super(),D(this,e,We,Qe,H,{text:0})}}function Ge(n){let e,i=n[2].toFixed(0)+"",t,s,o,a,l,c,r,m;return{c(){e=v("Timeout wait "),t=v(i),s=v("/"),o=v(n[1]),a=v("ms to continue"),l=_("br"),c=$(),r=new te(!1),m=T(),this.h()},l(u){e=y(u,"Timeout wait "),t=y(u,i),s=y(u,"/"),o=y(u,n[1]),a=y(u,"ms to continue"),l=g(u,"BR",{}),c=j(u),r=ne(u,!1),m=T(),this.h()},h(){r.a=m},m(u,p){d(u,e,p),d(u,t,p),d(u,s,p),d(u,o,p),d(u,a,p),d(u,l,p),d(u,c,p),r.m(n[0],u,p),d(u,m,p)},p(u,[p]){p&4&&i!==(i=u[2].toFixed(0)+"")&&ue(t,i),p&2&&ue(o,u[1]),p&1&&r.p(u[0])},i:E,o:E,d(u){u&&f(e),u&&f(t),u&&f(s),u&&f(o),u&&f(a),u&&f(l),u&&f(c),u&&f(m),u&&r.d()}}}function Ye(n,e,i){const t=K();let{text:s}=e,{duration:o}=e,a=0;return S(()=>{let l=null;function c(r){l!=null||(l=r),i(2,a=r-l),requestAnimationFrame(c)}requestAnimationFrame(c),setTimeout(()=>{t("complete")},o)}),n.$$set=l=>{"text"in l&&i(0,s=l.text),"duration"in l&&i(1,o=l.duration)},[s,o,a]}class Ze extends O{constructor(e){super(),D(this,e,Ye,Ge,H,{text:0,duration:1})}}function et(n){let e,i,t,s,o,a,l,c,r,m,u,p,B,U,R,A,J,Q,C,F,W,V;return B=new Ke({props:{block:n[0]}}),{c(){e=_("link"),i=_("script"),s=$(),o=_("main"),a=_("h1"),l=v("@krist7599555/svelte-turing-render DEMO"),c=$(),r=_("a"),m=v("github https://github.com/krist7599555/svelte-turing-render"),u=$(),p=_("div"),X(B.$$.fragment),U=$(),R=_("pre"),A=_("code"),J=v(he),Q=$(),C=_("pre"),F=_("code"),W=v(de),this.h()},l(k){const q=Be('[data-svelte="svelte-bh02xj"]',document.head);e=g(q,"LINK",{rel:!0,href:!0}),i=g(q,"SCRIPT",{src:!0});var ve=w(i);ve.forEach(f),q.forEach(f),s=j(k),o=g(k,"MAIN",{class:!0});var x=w(o);a=g(x,"H1",{class:!0});var se=w(a);l=y(se,"@krist7599555/svelte-turing-render DEMO"),se.forEach(f),c=j(x),r=g(x,"A",{href:!0,class:!0});var oe=w(r);m=y(oe,"github https://github.com/krist7599555/svelte-turing-render"),oe.forEach(f),u=j(x),p=g(x,"DIV",{id:!0,class:!0});var ie=w(p);ge(B.$$.fragment,ie),ie.forEach(f),U=j(x),R=g(x,"PRE",{class:!0});var re=w(R);A=g(re,"CODE",{class:!0});var le=w(A);J=y(le,he),le.forEach(f),re.forEach(f),Q=j(x),C=g(x,"PRE",{class:!0});var ce=w(C);F=g(ce,"CODE",{class:!0});var ae=w(F);W=y(ae,de),ae.forEach(f),ce.forEach(f),x.forEach(f),this.h()},h(){b(e,"rel","stylesheet"),b(e,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"),Ne(i.src,t="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js")||b(i,"src",t),b(a,"class","svelte-1tgf4c7"),b(r,"href","https://github.com/krist7599555/svelte-turing-render"),b(r,"class","svelte-1tgf4c7"),b(p,"id","touring"),b(p,"class","svelte-1tgf4c7"),b(A,"class","language-html svelte-1tgf4c7"),b(R,"class","svelte-1tgf4c7"),b(F,"class","language-typescript svelte-1tgf4c7"),b(C,"class","svelte-1tgf4c7"),b(o,"class","svelte-1tgf4c7")},m(k,q){h(document.head,e),h(document.head,i),d(k,s,q),d(k,o,q),h(o,a),h(a,l),h(o,c),h(o,r),h(r,m),h(o,u),h(o,p),G(B,p,null),h(o,U),h(o,R),h(R,A),h(A,J),h(o,Q),h(o,C),h(C,F),h(F,W),V=!0},p:E,i(k){V||(M(B.$$.fragment,k),V=!0)},o(k){N(B.$$.fragment,k),V=!1},d(k){f(e),f(i),k&&f(s),k&&f(o),Y(B)}}}function tt(n){S(()=>{hljs.highlightAll()});const e=[L({component:Je,props:{},events:{message_custom_event(i){console.log(i.detail.fib),console.log(i.detail.man===void 0)},dblclick(){},xxx(){}}}),L({component:Xe,props:{text:"note"}}),L({component:Ze,props:{text:"timeout",duration:3e3}}),()=>e];return[e]}class ot extends O{constructor(e){super(),D(this,e,tt,et,H,{})}}export{ot as default};
