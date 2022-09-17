import{S as O,i as M,s as q,H as Y,o as z,z as ve,I as _e,J as $e,e as B,b as p,f as T,g as Z,t as N,d as ee,h as f,A as j,v as G,w as ge,x as W,y as X,K as xe,q as k,k as _,a as w,L as te,r as v,l as g,c as E,M as ne,m as $,N as H,O as be,P as we,Q as ye,F as h,u as ue,R as Ee,n as b,T as je}from"../../chunks/index-4c199cc8.js";import{w as Te}from"../../chunks/index-2a8b7f5a.js";function Be(t){let e=Y();return z(async()=>{await ve(),e("complete")}),[]}class Ce extends O{constructor(e){super(),M(this,e,Be,null,q,{})}}class Ne extends O{constructor(e){super(),M(this,e,null,null,q,{})}}function P(t){var e,r;return{type:"component",component:t.component,props:(e=t.props)!=null?e:{},events:(r=t.events)!=null?r:{}}}const Oe=P({component:Ne});P({component:Ce});function Me(t){return I(t)&&t.type=="component"&&Re(t.component)&&I(t.props)&&I(t.events)}function De(t){return I(t)&&t.type=="function"&&L(t.function)}function Re(t){return L(t)||I(t)&&("render"in t||"$$render"in t)}function Ae(t){return L(t==null?void 0:t.then)}function I(t){return t!=null&&t instanceof Object&&typeof t=="object"}function Se(t){return t instanceof Array}function L(t){return t instanceof Function}const fe=(()=>{let t=0;return()=>`component-${++t}`})();function Fe(t){const e=Te({...Oe,key:fe()});async function r(n){if(n){if(Ae(n))return r(await n);if(L(n))return r(n());if(Se(n))for(const s of n)await r(s);else if(De(n))await n.function();else if(Me(n)){const{props:s,events:o,component:l}=n;console.log({BaseComponent:l}),await new Promise(c=>{e.set({key:fe(),component:class extends l{constructor(...a){super(...a),this.$set(s),this.$on("complete",()=>c());for(const[i,d]of Object.entries(o))this.$on(i,d);L(o==null?void 0:o.mount)&&this.$$.on_mount.push(()=>o.mount(this)),L(o==null?void 0:o.destroy)&&this.$$.on_destroy.push(()=>o.destroy())}}})})}else throw console.error(n),new Error(`block type not match any guard for ${n}`)}else return}return r(t),{subscribe:e.subscribe}}function me(t){let e=t[1].key,r,n,s=pe(t);return{c(){s.c(),r=B()},l(o){s.l(o),r=B()},m(o,l){s.m(o,l),p(o,r,l),n=!0},p(o,l){l&2&&_e(e,e=o[1].key)?(Z(),N(s,1,1,j),ee(),s=pe(o),s.c(),T(s,1),s.m(r.parentNode,r)):s.p(o,l)},i(o){n||(T(s),n=!0)},o(o){N(s),n=!1},d(o){o&&f(r),s.d(o)}}}function pe(t){let e,r,n;var s=t[1].component;function o(l){return{}}return s&&(e=new s(o())),{c(){e&&G(e.$$.fragment),r=B()},l(l){e&&ge(e.$$.fragment,l),r=B()},m(l,c){e&&W(e,l,c),p(l,r,c),n=!0},p(l,c){if(s!==(s=l[1].component)){if(e){Z();const a=e;N(a.$$.fragment,1,0,()=>{X(a,1)}),ee()}s?(e=new s(o()),G(e.$$.fragment),T(e.$$.fragment,1),W(e,r.parentNode,r)):e=null}},i(l){n||(e&&T(e.$$.fragment,l),n=!0)},o(l){e&&N(e.$$.fragment,l),n=!1},d(l){l&&f(r),e&&X(e,l)}}}function Le(t){let e,r,n=t[0]&&me(t);return{c(){n&&n.c(),e=B()},l(s){n&&n.l(s),e=B()},m(s,o){n&&n.m(s,o),p(s,e,o),r=!0},p(s,[o]){s[0]?n?(n.p(s,o),o&1&&T(n,1)):(n=me(s),n.c(),T(n,1),n.m(e.parentNode,e)):n&&(Z(),N(n,1,1,()=>{n=null}),ee())},i(s){r||(T(n),r=!0)},o(s){N(n),r=!1},d(s){n&&n.d(s),s&&f(e)}}}function qe(t,e,r){let n,s,o=j,l=()=>(o(),o=xe(n,a=>r(1,s=a)),n);t.$$.on_destroy.push(()=>o());let{block:c=[]}=e;return t.$$set=a=>{"block"in a&&r(2,c=a.block)},t.$$.update=()=>{t.$$.dirty&4&&l(r(0,n=Fe(c)))},[n,s,c]}class Pe extends O{constructor(e){super(),M(this,e,qe,Le,_e,{block:2})}get block(){return this.$$.ctx[2]}set block(e){this.$$set({block:e}),$e()}}const de=`/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SvelteComponent } from 'svelte';
import type { Class } from 'type-fest';

export type BlockFunction = { type: 'function'; function: any };
export type BlockComponent = {
  type: 'component';
  component: Class<SvelteComponent>;
  props: Record<string, any>;
  events: Record<string, (...args: any[]) => void>;
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
      mount(ins) {
        console.log('MOUNT', ins);
        return async () => {
          console.log('DESTRYO CALLBACK');
        };
      },
      destroy() {
        console.log('DESTROY');
      },
    },
  }),
  component({
    component: Note,
    props: {
      text: 'note',
    },
    events: {
      async mount() {
        console.log('1');
      },
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
`;function Ie(t){let e,r,n,s,o,l,c,a;return{c(){e=k("Message click any where to continue"),r=_("br"),n=w(),s=new te(!1),o=w(),l=_("div"),this.h()},l(i){e=v(i,"Message click any where to continue"),r=g(i,"BR",{}),n=E(i),s=ne(i,!1),o=E(i),l=g(i,"DIV",{}),$(l).forEach(f),this.h()},h(){s.a=o},m(i,d){p(i,e,d),p(i,r,d),p(i,n,d),s.m(t[0],i,d),p(i,o,d),p(i,l,d),c||(a=[H(window,"click",t[3]),H(l,"dblclick",t[2])],c=!0)},p(i,[d]){d&1&&s.p(i[0])},i:j,o:j,d(i){i&&f(e),i&&f(r),i&&f(n),i&&s.d(),i&&f(o),i&&f(l),c=!1,be(a)}}}function Ke(t,e,r){const n=Y();let{text:s="default"}=e;z(()=>{n("message_custom_event",{fib:1234}),document.body.style.cursor="pointer"}),we(()=>{document.body.style.cursor=""});function o(c){ye.call(this,t,c)}const l=()=>n("complete");return t.$$set=c=>{"text"in c&&r(0,s=c.text)},[s,n,o,l]}class He extends O{constructor(e){super(),M(this,e,Ke,Ie,q,{text:0})}}function Ye(t){let e,r,n,s,o,l,c;return{c(){e=k(`Note
`),r=new te(!1),n=w(),s=_("button"),o=k("click button to continue"),this.h()},l(a){e=v(a,`Note
`),r=ne(a,!1),n=E(a),s=g(a,"BUTTON",{});var i=$(s);o=v(i,"click button to continue"),i.forEach(f),this.h()},h(){r.a=n},m(a,i){p(a,e,i),r.m(t[0],a,i),p(a,n,i),p(a,s,i),h(s,o),l||(c=[H(s,"click",t[2]),H(s,"click",t[3])],l=!0)},p(a,[i]){i&1&&r.p(a[0])},i:j,o:j,d(a){a&&f(e),a&&r.d(),a&&f(n),a&&f(s),l=!1,be(c)}}}function ze(t,e,r){const n=Y();let{text:s}=e;function o(c){ye.call(this,t,c)}const l=()=>n("complete");return t.$$set=c=>{"text"in c&&r(0,s=c.text)},[s,n,o,l]}class Ue extends O{constructor(e){super(),M(this,e,ze,Ye,q,{text:0})}}function Ve(t){let e,r=t[2].toFixed(0)+"",n,s,o,l,c,a,i,d;return{c(){e=k("Timeout wait "),n=k(r),s=k("/"),o=k(t[1]),l=k("ms to continue"),c=_("br"),a=w(),i=new te(!1),d=B(),this.h()},l(u){e=v(u,"Timeout wait "),n=v(u,r),s=v(u,"/"),o=v(u,t[1]),l=v(u,"ms to continue"),c=g(u,"BR",{}),a=E(u),i=ne(u,!1),d=B(),this.h()},h(){i.a=d},m(u,m){p(u,e,m),p(u,n,m),p(u,s,m),p(u,o,m),p(u,l,m),p(u,c,m),p(u,a,m),i.m(t[0],u,m),p(u,d,m)},p(u,[m]){m&4&&r!==(r=u[2].toFixed(0)+"")&&ue(n,r),m&2&&ue(o,u[1]),m&1&&i.p(u[0])},i:j,o:j,d(u){u&&f(e),u&&f(n),u&&f(s),u&&f(o),u&&f(l),u&&f(c),u&&f(a),u&&f(d),u&&i.d()}}}function Je(t,e,r){const n=Y();let{text:s}=e,{duration:o}=e,l=0;return z(()=>{let c=null;function a(i){c!=null||(c=i),r(2,l=i-c),requestAnimationFrame(a)}requestAnimationFrame(a),setTimeout(()=>{n("complete")},o)}),t.$$set=c=>{"text"in c&&r(0,s=c.text),"duration"in c&&r(1,o=c.duration)},[s,o,l]}class Qe extends O{constructor(e){super(),M(this,e,Je,Ve,q,{text:0,duration:1})}}function Ge(t){let e,r,n,s,o,l,c,a,i,d,u,m,C,U,D,R,V,J,A,S,Q,K;return C=new Pe({props:{block:t[0]}}),{c(){e=_("link"),r=_("script"),s=w(),o=_("main"),l=_("h1"),c=k("@krist7599555/svelte-turing-render DEMO"),a=w(),i=_("a"),d=k("github https://github.com/krist7599555/svelte-turing-render"),u=w(),m=_("div"),G(C.$$.fragment),U=w(),D=_("pre"),R=_("code"),V=k(he),J=w(),A=_("pre"),S=_("code"),Q=k(de),this.h()},l(y){const F=Ee('[data-svelte="svelte-bh02xj"]',document.head);e=g(F,"LINK",{rel:!0,href:!0}),r=g(F,"SCRIPT",{src:!0});var ke=$(r);ke.forEach(f),F.forEach(f),s=E(y),o=g(y,"MAIN",{class:!0});var x=$(o);l=g(x,"H1",{class:!0});var oe=$(l);c=v(oe,"@krist7599555/svelte-turing-render DEMO"),oe.forEach(f),a=E(x),i=g(x,"A",{href:!0,class:!0});var se=$(i);d=v(se,"github https://github.com/krist7599555/svelte-turing-render"),se.forEach(f),u=E(x),m=g(x,"DIV",{id:!0,class:!0});var re=$(m);ge(C.$$.fragment,re),re.forEach(f),U=E(x),D=g(x,"PRE",{class:!0});var le=$(D);R=g(le,"CODE",{class:!0});var ie=$(R);V=v(ie,he),ie.forEach(f),le.forEach(f),J=E(x),A=g(x,"PRE",{class:!0});var ce=$(A);S=g(ce,"CODE",{class:!0});var ae=$(S);Q=v(ae,de),ae.forEach(f),ce.forEach(f),x.forEach(f),this.h()},h(){b(e,"rel","stylesheet"),b(e,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"),je(r.src,n="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js")||b(r,"src",n),b(l,"class","svelte-1tgf4c7"),b(i,"href","https://github.com/krist7599555/svelte-turing-render"),b(i,"class","svelte-1tgf4c7"),b(m,"id","touring"),b(m,"class","svelte-1tgf4c7"),b(R,"class","language-html svelte-1tgf4c7"),b(D,"class","svelte-1tgf4c7"),b(S,"class","language-typescript svelte-1tgf4c7"),b(A,"class","svelte-1tgf4c7"),b(o,"class","svelte-1tgf4c7")},m(y,F){h(document.head,e),h(document.head,r),p(y,s,F),p(y,o,F),h(o,l),h(l,c),h(o,a),h(o,i),h(i,d),h(o,u),h(o,m),W(C,m,null),h(o,U),h(o,D),h(D,R),h(R,V),h(o,J),h(o,A),h(A,S),h(S,Q),K=!0},p:j,i(y){K||(T(C.$$.fragment,y),K=!0)},o(y){N(C.$$.fragment,y),K=!1},d(y){f(e),f(r),y&&f(s),y&&f(o),X(C)}}}function We(t){z(()=>{hljs.highlightAll()});const e=[P({component:He,props:{},events:{message_custom_event(r){console.log(r.detail.fib),console.log(r.detail.man===void 0)},dblclick(){},xxx(){},mount(r){return console.log("MOUNT",r),async()=>{console.log("DESTRYO CALLBACK")}},destroy(){console.log("DESTROY")}}}),P({component:Ue,props:{text:"note"},events:{async mount(){console.log("1")}}}),P({component:Qe,props:{text:"timeout",duration:3e3}}),()=>e];return[e]}class et extends O{constructor(e){super(),M(this,e,We,Ge,q,{})}}export{et as default};
