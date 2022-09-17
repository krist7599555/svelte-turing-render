import{S as B,i as O,s as D,H as I,o as H,z as ve,I as _e,J as $e,e as N,b as m,f as T,g as ee,t as M,d as te,h as u,A as x,v as G,w as be,x as W,y as X,K as xe,q as _,k as g,a as E,L as ne,r as b,l as y,c as j,M as oe,m as $,N as z,O as ge,P as we,Q as ye,u as Z,F as h,R as Ee,n as k,T as je}from"../../chunks/index-4c199cc8.js";import{w as Te}from"../../chunks/index-2a8b7f5a.js";function Ne(n){let e=I();return H(async()=>{await ve(),e("complete")}),[]}class Be extends B{constructor(e){super(),O(this,e,Ne,null,D,{})}}class Oe extends B{constructor(e){super(),O(this,e,null,null,D,{})}}function q(n){var e,r;return{type:"component",component:n.component,props:(e=n.props)!=null?e:{},events:(r=n.events)!=null?r:{}}}const Ce=q({component:Oe});q({component:Be});function Me(n){return P(n)&&n.type=="component"&&Re(n.component)&&P(n.props)&&P(n.events)}function De(n){return P(n)&&n.type=="function"&&K(n.function)}function Re(n){return K(n)||P(n)&&("render"in n||"$$render"in n)}function Ae(n){return K(n==null?void 0:n.then)}function P(n){return n!=null&&n instanceof Object&&typeof n=="object"}function Se(n){return n instanceof Array}function K(n){return n instanceof Function}const fe=(()=>{let n=0;return()=>`component-${++n}`})();function Fe(n){const e=Te({...Ce,key:fe()});async function r(o){if(o){if(Ae(o))return r(await o);if(K(o))return r(o());if(Se(o))for(const s of o)await r(s);else if(De(o))await o.function();else if(Me(o)){const{props:s,events:t,component:i}=o;await new Promise(c=>{e.set({key:fe(),component:class extends i{constructor(a){super({...a,intro:!0,props:{...s,...a.props}}),this.$on("complete",()=>c());for(const[l,d]of Object.entries(t))this.$on(l,d);K(t==null?void 0:t.mount)&&this.$$.on_mount.push(()=>t.mount(this)),K(t==null?void 0:t.destroy)&&this.$$.on_destroy.push(()=>t.destroy())}}})})}else throw console.error(o),new Error(`block type not match any guard for ${o}`)}else return}return r(n),{subscribe:e.subscribe}}function me(n){let e=n[1].key,r,o,s=pe(n);return{c(){s.c(),r=N()},l(t){s.l(t),r=N()},m(t,i){s.m(t,i),m(t,r,i),o=!0},p(t,i){i&2&&_e(e,e=t[1].key)?(ee(),M(s,1,1,x),te(),s=pe(t),s.c(),T(s,1),s.m(r.parentNode,r)):s.p(t,i)},i(t){o||(T(s),o=!0)},o(t){M(s),o=!1},d(t){t&&u(r),s.d(t)}}}function pe(n){let e,r,o;var s=n[1].component;function t(i){return{}}return s&&(e=new s(t())),{c(){e&&G(e.$$.fragment),r=N()},l(i){e&&be(e.$$.fragment,i),r=N()},m(i,c){e&&W(e,i,c),m(i,r,c),o=!0},p(i,c){if(s!==(s=i[1].component)){if(e){ee();const a=e;M(a.$$.fragment,1,0,()=>{X(a,1)}),te()}s?(e=new s(t()),G(e.$$.fragment),T(e.$$.fragment,1),W(e,r.parentNode,r)):e=null}},i(i){o||(e&&T(e.$$.fragment,i),o=!0)},o(i){e&&M(e.$$.fragment,i),o=!1},d(i){i&&u(r),e&&X(e,i)}}}function Le(n){let e,r,o=n[0]&&me(n);return{c(){o&&o.c(),e=N()},l(s){o&&o.l(s),e=N()},m(s,t){o&&o.m(s,t),m(s,e,t),r=!0},p(s,[t]){s[0]?o?(o.p(s,t),t&1&&T(o,1)):(o=me(s),o.c(),T(o,1),o.m(e.parentNode,e)):o&&(ee(),M(o,1,1,()=>{o=null}),te())},i(s){r||(T(o),r=!0)},o(s){M(o),r=!1},d(s){o&&o.d(s),s&&u(e)}}}function qe(n,e,r){let o,s,t=x,i=()=>(t(),t=xe(o,a=>r(1,s=a)),o);n.$$.on_destroy.push(()=>t());let{block:c=[]}=e;return n.$$set=a=>{"block"in a&&r(2,c=a.block)},n.$$.update=()=>{n.$$.dirty&4&&i(r(0,o=Fe(c)))},[o,s,c]}class Ke extends B{constructor(e){super(),O(this,e,qe,Le,_e,{block:2})}get block(){return this.$$.ctx[2]}set block(e){this.$$set({block:e}),$e()}}const de=`/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Nested from './nested.svelte';
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
        console.log('note mount');
      },
    },
  }),
  component({
    component: Nested,
    props: {
      o: { a: { b: { c: 9999 } } },
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
`;function Pe(n){let e,r,o,s,t,i,c,a;return{c(){e=_("Message click any where to continue"),r=g("br"),o=E(),s=new ne(!1),t=E(),i=g("div"),this.h()},l(l){e=b(l,"Message click any where to continue"),r=y(l,"BR",{}),o=j(l),s=oe(l,!1),t=j(l),i=y(l,"DIV",{}),$(i).forEach(u),this.h()},h(){s.a=t},m(l,d){m(l,e,d),m(l,r,d),m(l,o,d),s.m(n[0],l,d),m(l,t,d),m(l,i,d),c||(a=[z(window,"click",n[3]),z(i,"dblclick",n[2])],c=!0)},p(l,[d]){d&1&&s.p(l[0])},i:x,o:x,d(l){l&&u(e),l&&u(r),l&&u(o),l&&s.d(),l&&u(t),l&&u(i),c=!1,ge(a)}}}function Ie(n,e,r){const o=I();let{text:s="default"}=e;H(()=>{o("message_custom_event",{fib:1234}),document.body.style.cursor="pointer"}),we(()=>{document.body.style.cursor=""});function t(c){ye.call(this,n,c)}const i=()=>o("complete");return n.$$set=c=>{"text"in c&&r(0,s=c.text)},[s,o,t,i]}class He extends B{constructor(e){super(),O(this,e,Ie,Pe,D,{text:0})}}function Ye(n){let e,r=n[0].a.b.c+"",o,s;return{c(){e=_("nested access o.a.b.c = "),o=_(r),s=_(" OK")},l(t){e=b(t,"nested access o.a.b.c = "),o=b(t,r),s=b(t," OK")},m(t,i){m(t,e,i),m(t,o,i),m(t,s,i)},p(t,[i]){i&1&&r!==(r=t[0].a.b.c+"")&&Z(o,r)},i:x,o:x,d(t){t&&u(e),t&&u(o),t&&u(s)}}}function ze(n,e,r){const o=I();let{o:s}=e;return console.log(s.a.b.c),H(()=>{setTimeout(()=>{o("complete")},1e3)}),n.$$set=t=>{"o"in t&&r(0,s=t.o)},n.$$.update=()=>{n.$$.dirty&1&&console.log(s.a.b.c)},[s]}class Ue extends B{constructor(e){super(),O(this,e,ze,Ye,D,{o:0})}}function Ve(n){let e,r,o,s,t,i,c;return{c(){e=_(`Note
`),r=new ne(!1),o=E(),s=g("button"),t=_("click button to continue"),this.h()},l(a){e=b(a,`Note
`),r=oe(a,!1),o=j(a),s=y(a,"BUTTON",{});var l=$(s);t=b(l,"click button to continue"),l.forEach(u),this.h()},h(){r.a=o},m(a,l){m(a,e,l),r.m(n[0],a,l),m(a,o,l),m(a,s,l),h(s,t),i||(c=[z(s,"click",n[2]),z(s,"click",n[3])],i=!0)},p(a,[l]){l&1&&r.p(a[0])},i:x,o:x,d(a){a&&u(e),a&&r.d(),a&&u(o),a&&u(s),i=!1,ge(c)}}}function Je(n,e,r){const o=I();let{text:s}=e;function t(c){ye.call(this,n,c)}const i=()=>o("complete");return n.$$set=c=>{"text"in c&&r(0,s=c.text)},[s,o,t,i]}class Qe extends B{constructor(e){super(),O(this,e,Je,Ve,D,{text:0})}}function Ge(n){let e,r=n[2].toFixed(0)+"",o,s,t,i,c,a,l,d;return{c(){e=_("Timeout wait "),o=_(r),s=_("/"),t=_(n[1]),i=_("ms to continue"),c=g("br"),a=E(),l=new ne(!1),d=N(),this.h()},l(f){e=b(f,"Timeout wait "),o=b(f,r),s=b(f,"/"),t=b(f,n[1]),i=b(f,"ms to continue"),c=y(f,"BR",{}),a=j(f),l=oe(f,!1),d=N(),this.h()},h(){l.a=d},m(f,p){m(f,e,p),m(f,o,p),m(f,s,p),m(f,t,p),m(f,i,p),m(f,c,p),m(f,a,p),l.m(n[0],f,p),m(f,d,p)},p(f,[p]){p&4&&r!==(r=f[2].toFixed(0)+"")&&Z(o,r),p&2&&Z(t,f[1]),p&1&&l.p(f[0])},i:x,o:x,d(f){f&&u(e),f&&u(o),f&&u(s),f&&u(t),f&&u(i),f&&u(c),f&&u(a),f&&u(d),f&&l.d()}}}function We(n,e,r){const o=I();let{text:s}=e,{duration:t}=e,i=0;return H(()=>{let c=null;function a(l){c!=null||(c=l),r(2,i=l-c),requestAnimationFrame(a)}requestAnimationFrame(a),setTimeout(()=>{o("complete")},t)}),n.$$set=c=>{"text"in c&&r(0,s=c.text),"duration"in c&&r(1,t=c.duration)},[s,t,i]}class Xe extends B{constructor(e){super(),O(this,e,We,Ge,D,{text:0,duration:1})}}function Ze(n){let e,r,o,s,t,i,c,a,l,d,f,p,C,U,R,A,V,J,S,F,Q,Y;return C=new Ke({props:{block:n[0]}}),{c(){e=g("link"),r=g("script"),s=E(),t=g("main"),i=g("h1"),c=_("@krist7599555/svelte-turing-render DEMO"),a=E(),l=g("a"),d=_("github https://github.com/krist7599555/svelte-turing-render"),f=E(),p=g("div"),G(C.$$.fragment),U=E(),R=g("pre"),A=g("code"),V=_(he),J=E(),S=g("pre"),F=g("code"),Q=_(de),this.h()},l(v){const L=Ee('[data-svelte="svelte-bh02xj"]',document.head);e=y(L,"LINK",{rel:!0,href:!0}),r=y(L,"SCRIPT",{src:!0});var ke=$(r);ke.forEach(u),L.forEach(u),s=j(v),t=y(v,"MAIN",{class:!0});var w=$(t);i=y(w,"H1",{class:!0});var se=$(i);c=b(se,"@krist7599555/svelte-turing-render DEMO"),se.forEach(u),a=j(w),l=y(w,"A",{href:!0,class:!0});var re=$(l);d=b(re,"github https://github.com/krist7599555/svelte-turing-render"),re.forEach(u),f=j(w),p=y(w,"DIV",{id:!0,class:!0});var ie=$(p);be(C.$$.fragment,ie),ie.forEach(u),U=j(w),R=y(w,"PRE",{class:!0});var le=$(R);A=y(le,"CODE",{class:!0});var ce=$(A);V=b(ce,he),ce.forEach(u),le.forEach(u),J=j(w),S=y(w,"PRE",{class:!0});var ae=$(S);F=y(ae,"CODE",{class:!0});var ue=$(F);Q=b(ue,de),ue.forEach(u),ae.forEach(u),w.forEach(u),this.h()},h(){k(e,"rel","stylesheet"),k(e,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"),je(r.src,o="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js")||k(r,"src",o),k(i,"class","svelte-1tgf4c7"),k(l,"href","https://github.com/krist7599555/svelte-turing-render"),k(l,"class","svelte-1tgf4c7"),k(p,"id","touring"),k(p,"class","svelte-1tgf4c7"),k(A,"class","language-html svelte-1tgf4c7"),k(R,"class","svelte-1tgf4c7"),k(F,"class","language-typescript svelte-1tgf4c7"),k(S,"class","svelte-1tgf4c7"),k(t,"class","svelte-1tgf4c7")},m(v,L){h(document.head,e),h(document.head,r),m(v,s,L),m(v,t,L),h(t,i),h(i,c),h(t,a),h(t,l),h(l,d),h(t,f),h(t,p),W(C,p,null),h(t,U),h(t,R),h(R,A),h(A,V),h(t,J),h(t,S),h(S,F),h(F,Q),Y=!0},p:x,i(v){Y||(T(C.$$.fragment,v),Y=!0)},o(v){M(C.$$.fragment,v),Y=!1},d(v){u(e),u(r),v&&u(s),v&&u(t),X(C)}}}function et(n){H(()=>{hljs.highlightAll()});const e=[q({component:He,props:{},events:{message_custom_event(r){console.log(r.detail.fib),console.log(r.detail.man===void 0)},dblclick(){},xxx(){},mount(r){return console.log("MOUNT",r),async()=>{console.log("DESTRYO CALLBACK")}},destroy(){console.log("DESTROY")}}}),q({component:Qe,props:{text:"note"},events:{async mount(){console.log("note mount")}}}),q({component:Ue,props:{o:{a:{b:{c:9999}}}}}),q({component:Xe,props:{text:"timeout",duration:3e3}}),()=>e];return[e]}class ot extends B{constructor(e){super(),O(this,e,et,Ze,D,{})}}export{ot as default};
