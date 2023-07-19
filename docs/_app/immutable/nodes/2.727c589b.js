import{s as z,A as Y,o as U,t as we,B as ye,C as Ce,e as T,i as f,d as u,y as $,q as de,D as je,l as y,f as g,a as w,H as se,m as k,g as b,c as C,E as re,h as A,F as G,G as ke,I as Ee,J as xe,n as ee,K as I,L as Te,j as _,M as Be,x as h}from"../chunks/scheduler.01cfa271.js";import{S as B,i as N,a as E,g as le,t as D,c as ie,b as te,d as $e,m as ne,e as oe}from"../chunks/index.a8b80cfe.js";import{w as Ne}from"../chunks/index.1606cb64.js";function Me(t){let e=Y();return U(async()=>{await we(),e("complete")}),[]}class Oe extends B{constructor(e){super(),N(this,e,Me,null,z,{})}}class Ae extends B{constructor(e){super(),N(this,e,null,null,z,{})}}function q(t){return{type:"component",component:t.component,props:t.props??{},events:t.events??{}}}const De=q({component:Ae});q({component:Oe});function ze(t){return P(t)&&t.type=="component"&&Le(t.component)&&P(t.props)&&P(t.events)}function Re(t){return P(t)&&t.type=="function"&&H(t.function)}function Le(t){return H(t)||P(t)&&("render"in t||"$$render"in t)}function Fe(t){return H(t==null?void 0:t.then)}function P(t){return t!=null&&t instanceof Object&&typeof t=="object"}function Ke(t){return t instanceof Array}function H(t){return t instanceof Function}const he=(()=>{let t=0;return()=>`component-${++t}`})();function Se(t){const e=Ne({...De,key:he()});async function r(n){if(n){if(Fe(n))return r(await n);if(H(n))return r(n());if(Ke(n))for(const o of n)await r(o);else if(Re(n))await n.function();else if(ze(n)){const{props:o,events:s,component:l}=n;await new Promise(i=>{e.set({key:he(),component:class extends l{constructor(a){super({...a,intro:!0,props:{...o,...a.props}}),this.$on("complete",()=>i());for(const[c,p]of Object.entries(s))this.$on(c,p);H(s==null?void 0:s.mount)&&this.$$.on_mount.push(()=>s.mount(this)),H(s==null?void 0:s.destroy)&&this.$$.on_destroy.push(()=>s.destroy())}}})})}else throw console.error(n),new Error(`block type not match any guard for ${n}`)}else return}return r(t),{subscribe:e.subscribe}}function _e(t){let e=t[1].key,r,n,o=ge(t);return{c(){o.c(),r=T()},l(s){o.l(s),r=T()},m(s,l){o.m(s,l),f(s,r,l),n=!0},p(s,l){l&2&&ye(e,e=s[1].key)?(le(),D(o,1,1,$),ie(),o=ge(s),o.c(),E(o,1),o.m(r.parentNode,r)):o.p(s,l)},i(s){n||(E(o),n=!0)},o(s){D(o),n=!1},d(s){s&&u(r),o.d(s)}}}function ge(t){let e,r,n;var o=t[1].component;function s(l){return{}}return o&&(e=de(o,s())),{c(){e&&te(e.$$.fragment),r=T()},l(l){e&&$e(e.$$.fragment,l),r=T()},m(l,i){e&&ne(e,l,i),f(l,r,i),n=!0},p(l,i){if(i&2&&o!==(o=l[1].component)){if(e){le();const a=e;D(a.$$.fragment,1,0,()=>{oe(a,1)}),ie()}o?(e=de(o,s()),te(e.$$.fragment),E(e.$$.fragment,1),ne(e,r.parentNode,r)):e=null}},i(l){n||(e&&E(e.$$.fragment,l),n=!0)},o(l){e&&D(e.$$.fragment,l),n=!1},d(l){l&&u(r),e&&oe(e,l)}}}function qe(t){let e,r,n=t[0]&&_e(t);return{c(){n&&n.c(),e=T()},l(o){n&&n.l(o),e=T()},m(o,s){n&&n.m(o,s),f(o,e,s),r=!0},p(o,[s]){o[0]?n?(n.p(o,s),s&1&&E(n,1)):(n=_e(o),n.c(),E(n,1),n.m(e.parentNode,e)):n&&(le(),D(n,1,1,()=>{n=null}),ie())},i(o){r||(E(n),r=!0)},o(o){D(n),r=!1},d(o){o&&u(e),n&&n.d(o)}}}function He(t,e,r){let n,o,s=$,l=()=>(s(),s=je(n,a=>r(1,o=a)),n);t.$$.on_destroy.push(()=>s());let{block:i=[]}=e;return t.$$set=a=>{"block"in a&&r(2,i=a.block)},t.$$.update=()=>{t.$$.dirty&4&&l(r(0,n=Se(i)))},[n,o,i]}class Ie extends B{constructor(e){super(),N(this,e,He,qe,ye,{block:2})}get block(){return this.$$.ctx[2]}set block(e){this.$$set({block:e}),Ce()}}const be=`/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from 'svelte';

export type BlockFunction = { type: 'function'; function: any };
export type BlockComponent = {
  type: 'component';
  component: ComponentType;
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
`;function Pe(t){let e,r,n,o,s,l,i,a;return{c(){e=y("Message click any where to continue"),r=g("br"),n=w(),o=new se(!1),s=w(),l=g("div"),this.h()},l(c){e=k(c,"Message click any where to continue"),r=b(c,"BR",{}),n=C(c),o=re(c,!1),s=C(c),l=b(c,"DIV",{}),A(l).forEach(u),this.h()},h(){o.a=s},m(c,p){f(c,e,p),f(c,r,p),f(c,n,p),o.m(t[0],c,p),f(c,s,p),f(c,l,p),i||(a=[G(window,"click",t[3]),G(l,"dblclick",t[2])],i=!0)},p(c,[p]){p&1&&o.p(c[0])},i:$,o:$,d(c){c&&(u(e),u(r),u(n),o.d(),u(s),u(l)),i=!1,ke(a)}}}function Ye(t,e,r){const n=Y();let{text:o="default"}=e;U(()=>{n("message_custom_event",{fib:1234}),document.body.style.cursor="pointer"}),Ee(()=>{document.body.style.cursor=""});function s(i){xe.call(this,t,i)}const l=()=>n("complete");return t.$$set=i=>{"text"in i&&r(0,o=i.text)},[o,n,s,l]}class Ue extends B{constructor(e){super(),N(this,e,Ye,Pe,z,{text:0})}}function Ve(t){let e,r=t[0].a.b.c+"",n,o;return{c(){e=y("nested access o.a.b.c = "),n=y(r),o=y(" OK")},l(s){e=k(s,"nested access o.a.b.c = "),n=k(s,r),o=k(s," OK")},m(s,l){f(s,e,l),f(s,n,l),f(s,o,l)},p(s,[l]){l&1&&r!==(r=s[0].a.b.c+"")&&ee(n,r)},i:$,o:$,d(s){s&&(u(e),u(n),u(o))}}}function Ge(t,e,r){const n=Y();let{o}=e;return console.log(o.a.b.c),U(()=>{setTimeout(()=>{n("complete")},1e3)}),t.$$set=s=>{"o"in s&&r(0,o=s.o)},t.$$.update=()=>{t.$$.dirty&1&&console.log(o.a.b.c)},[o]}class Je extends B{constructor(e){super(),N(this,e,Ge,Ve,z,{o:0})}}function Qe(t){let e,r,n,o,s="click button to continue",l,i;return{c(){e=y(`Note
`),r=new se(!1),n=w(),o=g("button"),o.textContent=s,this.h()},l(a){e=k(a,`Note
`),r=re(a,!1),n=C(a),o=b(a,"BUTTON",{"data-svelte-h":!0}),I(o)!=="svelte-65o48b"&&(o.textContent=s),this.h()},h(){r.a=n},m(a,c){f(a,e,c),r.m(t[0],a,c),f(a,n,c),f(a,o,c),l||(i=[G(o,"click",t[2]),G(o,"click",t[3])],l=!0)},p(a,[c]){c&1&&r.p(a[0])},i:$,o:$,d(a){a&&(u(e),r.d(),u(n),u(o)),l=!1,ke(i)}}}function We(t,e,r){const n=Y();let{text:o}=e;function s(i){xe.call(this,t,i)}const l=()=>n("complete");return t.$$set=i=>{"text"in i&&r(0,o=i.text)},[o,n,s,l]}class Xe extends B{constructor(e){super(),N(this,e,We,Qe,z,{text:0})}}function Ze(t){let e,r=t[2].toFixed(0)+"",n,o,s,l,i,a,c,p;return{c(){e=y("Timeout wait "),n=y(r),o=y("/"),s=y(t[1]),l=y("ms to continue"),i=g("br"),a=w(),c=new se(!1),p=T(),this.h()},l(m){e=k(m,"Timeout wait "),n=k(m,r),o=k(m,"/"),s=k(m,t[1]),l=k(m,"ms to continue"),i=b(m,"BR",{}),a=C(m),c=re(m,!1),p=T(),this.h()},h(){c.a=p},m(m,d){f(m,e,d),f(m,n,d),f(m,o,d),f(m,s,d),f(m,l,d),f(m,i,d),f(m,a,d),c.m(t[0],m,d),f(m,p,d)},p(m,[d]){d&4&&r!==(r=m[2].toFixed(0)+"")&&ee(n,r),d&2&&ee(s,m[1]),d&1&&c.p(m[0])},i:$,o:$,d(m){m&&(u(e),u(n),u(o),u(s),u(l),u(i),u(a),u(p),c.d())}}}function et(t,e,r){const n=Y();let{text:o}=e,{duration:s}=e,l=0;return U(()=>{let i=null;function a(c){i??(i=c),r(2,l=c-i),requestAnimationFrame(a)}requestAnimationFrame(a),setTimeout(()=>{n("complete")},s)}),t.$$set=i=>{"text"in i&&r(0,o=i.text),"duration"in i&&r(1,s=i.duration)},[o,s,l]}class tt extends B{constructor(e){super(),N(this,e,et,Ze,z,{text:0,duration:1})}}function nt(t){let e,r,n="",o,s,l,i,a="@krist7599555/svelte-turing-render DEMO",c,p,m="github repo",d,M,O,J,j,ce="open in ide online to easy navigate",Q,R,L,W,X,F,K,Z,V;return O=new Ie({props:{block:t[0]}}),{c(){e=g("link"),r=g("script"),r.innerHTML=n,s=w(),l=g("main"),i=g("h1"),i.textContent=a,c=w(),p=g("a"),p.textContent=m,d=w(),M=g("div"),te(O.$$.fragment),J=w(),j=g("a"),j.textContent=ce,Q=w(),R=g("pre"),L=g("code"),W=y(ve),X=w(),F=g("pre"),K=g("code"),Z=y(be),this.h()},l(x){const S=Te("svelte-bh02xj",document.head);e=b(S,"LINK",{rel:!0,href:!0}),r=b(S,"SCRIPT",{src:!0,"data-svelte-h":!0}),I(r)!=="svelte-6ihi49"&&(r.innerHTML=n),S.forEach(u),s=C(x),l=b(x,"MAIN",{class:!0});var v=A(l);i=b(v,"H1",{class:!0,"data-svelte-h":!0}),I(i)!=="svelte-1tccreu"&&(i.textContent=a),c=C(v),p=b(v,"A",{href:!0,class:!0,"data-svelte-h":!0}),I(p)!=="svelte-6l9zgu"&&(p.textContent=m),d=C(v),M=b(v,"DIV",{id:!0,class:!0});var ae=A(M);$e(O.$$.fragment,ae),ae.forEach(u),J=C(v),j=b(v,"A",{href:!0,class:!0,"data-svelte-h":!0}),I(j)!=="svelte-1x1vogx"&&(j.textContent=ce),Q=C(v),R=b(v,"PRE",{class:!0});var ue=A(R);L=b(ue,"CODE",{class:!0});var me=A(L);W=k(me,ve),me.forEach(u),ue.forEach(u),X=C(v),F=b(v,"PRE",{class:!0});var pe=A(F);K=b(pe,"CODE",{class:!0});var fe=A(K);Z=k(fe,be),fe.forEach(u),pe.forEach(u),v.forEach(u),this.h()},h(){_(e,"rel","stylesheet"),_(e,"href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"),Be(r.src,o="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js")||_(r,"src",o),_(i,"class","svelte-ez87o1"),_(p,"href","https://github.com/krist7599555/svelte-turing-render"),_(p,"class","svelte-ez87o1"),_(M,"id","touring"),_(M,"class","svelte-ez87o1"),_(j,"href","https://github.dev/krist7599555/svelte-turing-render/blob/main/src/routes/+page.svelte"),_(j,"class","svelte-ez87o1"),_(L,"class","language-html svelte-ez87o1"),_(R,"class","svelte-ez87o1"),_(K,"class","language-typescript svelte-ez87o1"),_(F,"class","svelte-ez87o1"),_(l,"class","svelte-ez87o1")},m(x,S){h(document.head,e),h(document.head,r),f(x,s,S),f(x,l,S),h(l,i),h(l,c),h(l,p),h(l,d),h(l,M),ne(O,M,null),h(l,J),h(l,j),h(l,Q),h(l,R),h(R,L),h(L,W),h(l,X),h(l,F),h(F,K),h(K,Z),V=!0},p:$,i(x){V||(E(O.$$.fragment,x),V=!0)},o(x){D(O.$$.fragment,x),V=!1},d(x){x&&(u(s),u(l)),u(e),u(r),oe(O)}}}function ot(t){U(()=>{hljs.highlightAll()});const e=[q({component:Ue,props:{},events:{message_custom_event(r){console.log(r.detail.fib),console.log(r.detail.man===void 0)},dblclick(){},xxx(){},mount(r){return console.log("MOUNT",r),async()=>{console.log("DESTRYO CALLBACK")}},destroy(){console.log("DESTROY")}}}),q({component:Xe,props:{text:"note"},events:{async mount(){console.log("note mount")}}}),q({component:Je,props:{o:{a:{b:{c:9999}}}}}),q({component:tt,props:{text:"timeout",duration:3e3}}),()=>e];return[e]}class it extends B{constructor(e){super(),N(this,e,ot,nt,z,{})}}export{it as component};
