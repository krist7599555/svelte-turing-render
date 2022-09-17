import{S as B,i as O,s as D,H as I,o as H,z as Ee,I as ye,J as je,e as N,b as m,f as T,g as oe,t as A,d as se,h as u,A as w,v as Z,w as ke,x as ee,y as te,K as Te,q as _,k as v,a as E,L as re,r as b,l as y,c as j,M as le,m as x,N as U,O as $e,P as Ne,Q as xe,u as ne,F as d,R as Be,n as g,T as Oe}from"../../chunks/index-4c199cc8.js";import{w as Ce}from"../../chunks/index-2a8b7f5a.js";function Me(n){let e=I();return H(async()=>{await Ee(),e("complete")}),[]}class Ae extends B{constructor(e){super(),O(this,e,Me,null,D,{})}}class De extends B{constructor(e){super(),O(this,e,null,null,D,{})}}function q(n){var e,r;return{type:"component",component:n.component,props:(e=n.props)!=null?e:{},events:(r=n.events)!=null?r:{}}}const Re=q({component:De});q({component:Ae});function ze(n){return P(n)&&n.type=="component"&&Fe(n.component)&&P(n.props)&&P(n.events)}function Se(n){return P(n)&&n.type=="function"&&K(n.function)}function Fe(n){return K(n)||P(n)&&("render"in n||"$$render"in n)}function Le(n){return K(n==null?void 0:n.then)}function P(n){return n!=null&&n instanceof Object&&typeof n=="object"}function qe(n){return n instanceof Array}function K(n){return n instanceof Function}const he=(()=>{let n=0;return()=>`component-${++n}`})();function Ke(n){const e=Ce({...Re,key:he()});async function r(o){if(o){if(Le(o))return r(await o);if(K(o))return r(o());if(qe(o))for(const s of o)await r(s);else if(Se(o))await o.function();else if(ze(o)){const{props:s,events:t,component:l}=o;await new Promise(c=>{e.set({key:he(),component:class extends l{constructor(a){super({...a,intro:!0,props:{...s,...a.props}}),this.$on("complete",()=>c());for(const[i,h]of Object.entries(t))this.$on(i,h);K(t==null?void 0:t.mount)&&this.$$.on_mount.push(()=>t.mount(this)),K(t==null?void 0:t.destroy)&&this.$$.on_destroy.push(()=>t.destroy())}}})})}else throw console.error(o),new Error(`block type not match any guard for ${o}`)}else return}return r(n),{subscribe:e.subscribe}}function _e(n){let e=n[1].key,r,o,s=be(n);return{c(){s.c(),r=N()},l(t){s.l(t),r=N()},m(t,l){s.m(t,l),m(t,r,l),o=!0},p(t,l){l&2&&ye(e,e=t[1].key)?(oe(),A(s,1,1,w),se(),s=be(t),s.c(),T(s,1),s.m(r.parentNode,r)):s.p(t,l)},i(t){o||(T(s),o=!0)},o(t){A(s),o=!1},d(t){t&&u(r),s.d(t)}}}function be(n){let e,r,o;var s=n[1].component;function t(l){return{}}return s&&(e=new s(t())),{c(){e&&Z(e.$$.fragment),r=N()},l(l){e&&ke(e.$$.fragment,l),r=N()},m(l,c){e&&ee(e,l,c),m(l,r,c),o=!0},p(l,c){if(s!==(s=l[1].component)){if(e){oe();const a=e;A(a.$$.fragment,1,0,()=>{te(a,1)}),se()}s?(e=new s(t()),Z(e.$$.fragment),T(e.$$.fragment,1),ee(e,r.parentNode,r)):e=null}},i(l){o||(e&&T(e.$$.fragment,l),o=!0)},o(l){e&&A(e.$$.fragment,l),o=!1},d(l){l&&u(r),e&&te(e,l)}}}function Pe(n){let e,r,o=n[0]&&_e(n);return{c(){o&&o.c(),e=N()},l(s){o&&o.l(s),e=N()},m(s,t){o&&o.m(s,t),m(s,e,t),r=!0},p(s,[t]){s[0]?o?(o.p(s,t),t&1&&T(o,1)):(o=_e(s),o.c(),T(o,1),o.m(e.parentNode,e)):o&&(oe(),A(o,1,1,()=>{o=null}),se())},i(s){r||(T(o),r=!0)},o(s){A(o),r=!1},d(s){o&&o.d(s),s&&u(e)}}}function Ie(n,e,r){let o,s,t=w,l=()=>(t(),t=Te(o,a=>r(1,s=a)),o);n.$$.on_destroy.push(()=>t());let{block:c=[]}=e;return n.$$set=a=>{"block"in a&&r(2,c=a.block)},n.$$.update=()=>{n.$$.dirty&4&&l(r(0,o=Ke(c)))},[o,s,c]}class He extends B{constructor(e){super(),O(this,e,Ie,Pe,ye,{block:2})}get block(){return this.$$.ctx[2]}set block(e){this.$$set({block:e}),je()}}const ge=`/* eslint-disable @typescript-eslint/no-explicit-any */
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
`,ve=`<script lang="ts" context="module">
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
  <a href="https://github.com/krist7599555/svelte-turing-render"> github repo </a>
  <div id="touring">
    <Touring block={block} />
  </div>
  <a href="https://github.dev/krist7599555/svelte-turing-render/blob/main/src/routes/+page.svelte">
    open in ide online to easy navigate
  </a>
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
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
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
  font-size: 0.7rem;
  width: 100%;
  overflow: scroll;
}
pre code {
  padding: 1.5rem;
}
</style>
`;function Ye(n){let e,r,o,s,t,l,c,a;return{c(){e=_("Message click any where to continue"),r=v("br"),o=E(),s=new re(!1),t=E(),l=v("div"),this.h()},l(i){e=b(i,"Message click any where to continue"),r=y(i,"BR",{}),o=j(i),s=le(i,!1),t=j(i),l=y(i,"DIV",{}),x(l).forEach(u),this.h()},h(){s.a=t},m(i,h){m(i,e,h),m(i,r,h),m(i,o,h),s.m(n[0],i,h),m(i,t,h),m(i,l,h),c||(a=[U(window,"click",n[3]),U(l,"dblclick",n[2])],c=!0)},p(i,[h]){h&1&&s.p(i[0])},i:w,o:w,d(i){i&&u(e),i&&u(r),i&&u(o),i&&s.d(),i&&u(t),i&&u(l),c=!1,$e(a)}}}function Ue(n,e,r){const o=I();let{text:s="default"}=e;H(()=>{o("message_custom_event",{fib:1234}),document.body.style.cursor="pointer"}),Ne(()=>{document.body.style.cursor=""});function t(c){xe.call(this,n,c)}const l=()=>o("complete");return n.$$set=c=>{"text"in c&&r(0,s=c.text)},[s,o,t,l]}class Ve extends B{constructor(e){super(),O(this,e,Ue,Ye,D,{text:0})}}function Je(n){let e,r=n[0].a.b.c+"",o,s;return{c(){e=_("nested access o.a.b.c = "),o=_(r),s=_(" OK")},l(t){e=b(t,"nested access o.a.b.c = "),o=b(t,r),s=b(t," OK")},m(t,l){m(t,e,l),m(t,o,l),m(t,s,l)},p(t,[l]){l&1&&r!==(r=t[0].a.b.c+"")&&ne(o,r)},i:w,o:w,d(t){t&&u(e),t&&u(o),t&&u(s)}}}function Qe(n,e,r){const o=I();let{o:s}=e;return console.log(s.a.b.c),H(()=>{setTimeout(()=>{o("complete")},1e3)}),n.$$set=t=>{"o"in t&&r(0,s=t.o)},n.$$.update=()=>{n.$$.dirty&1&&console.log(s.a.b.c)},[s]}class Ge extends B{constructor(e){super(),O(this,e,Qe,Je,D,{o:0})}}function We(n){let e,r,o,s,t,l,c;return{c(){e=_(`Note
`),r=new re(!1),o=E(),s=v("button"),t=_("click button to continue"),this.h()},l(a){e=b(a,`Note
`),r=le(a,!1),o=j(a),s=y(a,"BUTTON",{});var i=x(s);t=b(i,"click button to continue"),i.forEach(u),this.h()},h(){r.a=o},m(a,i){m(a,e,i),r.m(n[0],a,i),m(a,o,i),m(a,s,i),d(s,t),l||(c=[U(s,"click",n[2]),U(s,"click",n[3])],l=!0)},p(a,[i]){i&1&&r.p(a[0])},i:w,o:w,d(a){a&&u(e),a&&r.d(),a&&u(o),a&&u(s),l=!1,$e(c)}}}function Xe(n,e,r){const o=I();let{text:s}=e;function t(c){xe.call(this,n,c)}const l=()=>o("complete");return n.$$set=c=>{"text"in c&&r(0,s=c.text)},[s,o,t,l]}class Ze extends B{constructor(e){super(),O(this,e,Xe,We,D,{text:0})}}function et(n){let e,r=n[2].toFixed(0)+"",o,s,t,l,c,a,i,h;return{c(){e=_("Timeout wait "),o=_(r),s=_("/"),t=_(n[1]),l=_("ms to continue"),c=v("br"),a=E(),i=new re(!1),h=N(),this.h()},l(f){e=b(f,"Timeout wait "),o=b(f,r),s=b(f,"/"),t=b(f,n[1]),l=b(f,"ms to continue"),c=y(f,"BR",{}),a=j(f),i=le(f,!1),h=N(),this.h()},h(){i.a=h},m(f,p){m(f,e,p),m(f,o,p),m(f,s,p),m(f,t,p),m(f,l,p),m(f,c,p),m(f,a,p),i.m(n[0],f,p),m(f,h,p)},p(f,[p]){p&4&&r!==(r=f[2].toFixed(0)+"")&&ne(o,r),p&2&&ne(t,f[1]),p&1&&i.p(f[0])},i:w,o:w,d(f){f&&u(e),f&&u(o),f&&u(s),f&&u(t),f&&u(l),f&&u(c),f&&u(a),f&&u(h),f&&i.d()}}}function tt(n,e,r){const o=I();let{text:s}=e,{duration:t}=e,l=0;return H(()=>{let c=null;function a(i){c!=null||(c=i),r(2,l=i-c),requestAnimationFrame(a)}requestAnimationFrame(a),setTimeout(()=>{o("complete")},t)}),n.$$set=c=>{"text"in c&&r(0,s=c.text),"duration"in c&&r(1,t=c.duration)},[s,t,l]}class nt extends B{constructor(e){super(),O(this,e,tt,et,D,{text:0,duration:1})}}function ot(n){let e,r,o,s,t,l,c,a,i,h,f,p,C,V,M,J,Q,R,z,G,W,S,F,X,Y;return C=new He({props:{block:n[0]}}),{c(){e=v("link"),r=v("script"),s=E(),t=v("main"),l=v("h1"),c=_("@krist7599555/svelte-turing-render DEMO"),a=E(),i=v("a"),h=_("github repo"),f=E(),p=v("div"),Z(C.$$.fragment),V=E(),M=v("a"),J=_("open in ide online to easy navigate"),Q=E(),R=v("pre"),z=v("code"),G=_(ve),W=E(),S=v("pre"),F=v("code"),X=_(ge),this.h()},l(k){const L=Be('[data-svelte="svelte-bh02xj"]',document.head);e=y(L,"LINK",{rel:!0,href:!0}),r=y(L,"SCRIPT",{src:!0});var we=x(r);we.forEach(u),L.forEach(u),s=j(k),t=y(k,"MAIN",{class:!0});var $=x(t);l=y($,"H1",{class:!0});var ie=x(l);c=b(ie,"@krist7599555/svelte-turing-render DEMO"),ie.forEach(u),a=j($),i=y($,"A",{href:!0,class:!0});var ce=x(i);h=b(ce,"github repo"),ce.forEach(u),f=j($),p=y($,"DIV",{id:!0,class:!0});var ae=x(p);ke(C.$$.fragment,ae),ae.forEach(u),V=j($),M=y($,"A",{href:!0,class:!0});var ue=x(M);J=b(ue,"open in ide online to easy navigate"),ue.forEach(u),Q=j($),R=y($,"PRE",{class:!0});var fe=x(R);z=y(fe,"CODE",{class:!0});var me=x(z);G=b(me,ve),me.forEach(u),fe.forEach(u),W=j($),S=y($,"PRE",{class:!0});var pe=x(S);F=y(pe,"CODE",{class:!0});var de=x(F);X=b(de,ge),de.forEach(u),pe.forEach(u),$.forEach(u),this.h()},h(){g(e,"rel","stylesheet"),g(e,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"),Oe(r.src,o="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js")||g(r,"src",o),g(l,"class","svelte-ez87o1"),g(i,"href","https://github.com/krist7599555/svelte-turing-render"),g(i,"class","svelte-ez87o1"),g(p,"id","touring"),g(p,"class","svelte-ez87o1"),g(M,"href","https://github.dev/krist7599555/svelte-turing-render/blob/main/src/routes/+page.svelte"),g(M,"class","svelte-ez87o1"),g(z,"class","language-html svelte-ez87o1"),g(R,"class","svelte-ez87o1"),g(F,"class","language-typescript svelte-ez87o1"),g(S,"class","svelte-ez87o1"),g(t,"class","svelte-ez87o1")},m(k,L){d(document.head,e),d(document.head,r),m(k,s,L),m(k,t,L),d(t,l),d(l,c),d(t,a),d(t,i),d(i,h),d(t,f),d(t,p),ee(C,p,null),d(t,V),d(t,M),d(M,J),d(t,Q),d(t,R),d(R,z),d(z,G),d(t,W),d(t,S),d(S,F),d(F,X),Y=!0},p:w,i(k){Y||(T(C.$$.fragment,k),Y=!0)},o(k){A(C.$$.fragment,k),Y=!1},d(k){u(e),u(r),k&&u(s),k&&u(t),te(C)}}}function st(n){H(()=>{hljs.highlightAll()});const e=[q({component:Ve,props:{},events:{message_custom_event(r){console.log(r.detail.fib),console.log(r.detail.man===void 0)},dblclick(){},xxx(){},mount(r){return console.log("MOUNT",r),async()=>{console.log("DESTRYO CALLBACK")}},destroy(){console.log("DESTROY")}}}),q({component:Ze,props:{text:"note"},events:{async mount(){console.log("note mount")}}}),q({component:Ge,props:{o:{a:{b:{c:9999}}}}}),q({component:nt,props:{text:"timeout",duration:3e3}}),()=>e];return[e]}class it extends B{constructor(e){super(),O(this,e,st,ot,D,{})}}export{it as default};
