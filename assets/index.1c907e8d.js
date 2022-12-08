(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();function I(){}function xe(t,e){for(const l in e)t[l]=e[l];return t}function $e(t){return t()}function Fe(){return Object.create(null)}function R(t){t.forEach($e)}function Ge(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ke;function O(t,e){return ke||(ke=document.createElement("a")),ke.href=e,t===ke.href}function et(t){return Object.keys(t).length===0}function tt(t,e,l,s){if(t){const n=Je(t,e,l,s);return t[0](n)}}function Je(t,e,l,s){return t[1]&&s?xe(l.ctx.slice(),t[1](s(e))):l.ctx}function lt(t,e,l,s){if(t[2]&&s){const n=t[2](s(l));if(e.dirty===void 0)return n;if(typeof n=="object"){const r=[],o=Math.max(e.dirty.length,n.length);for(let u=0;u<o;u+=1)r[u]=e.dirty[u]|n[u];return r}return e.dirty|n}return e.dirty}function st(t,e,l,s,n,r){if(n){const o=Je(e,l,s,r);t.p(o,n)}}function it(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let s=0;s<l;s++)e[s]=-1;return e}return-1}function c(t,e){t.appendChild(e)}function E(t,e,l){t.insertBefore(e,l||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function v(){return Q(" ")}function Qe(){return Q("")}function L(t,e,l,s){return t.addEventListener(e,l,s),()=>t.removeEventListener(e,l,s)}function i(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function nt(t,e,l){t.setAttributeNS("http://www.w3.org/1999/xlink",e,l)}function ct(t){return Array.from(t.childNodes)}function qe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function rt(t,e,{bubbles:l=!1,cancelable:s=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,l,s,e),n}let ve;function he(t){ve=t}function ut(){if(!ve)throw new Error("Function called outside component initialization");return ve}function je(){const t=ut();return(e,l,{cancelable:s=!1}={})=>{const n=t.$$.callbacks[e];if(n){const r=rt(e,l,{cancelable:s});return n.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const pe=[],We=[],be=[],Ye=[],ot=Promise.resolve();let Ee=!1;function at(){Ee||(Ee=!0,ot.then(Xe))}function He(t){be.push(t)}const Me=new Set;let we=0;function Xe(){const t=ve;do{for(;we<pe.length;){const e=pe[we];we++,he(e),ft(e.$$)}for(he(null),pe.length=0,we=0;We.length;)We.pop()();for(let e=0;e<be.length;e+=1){const l=be[e];Me.has(l)||(Me.add(l),l())}be.length=0}while(pe.length);for(;Ye.length;)Ye.pop()();Ee=!1,Me.clear(),he(t)}function ft(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(He)}}const ye=new Set;let te;function Ne(){te={r:0,c:[],p:te}}function ze(){te.r||R(te.c),te=te.p}function T(t,e){t&&t.i&&(ye.delete(t),t.i(e))}function Y(t,e,l,s){if(t&&t.o){if(ye.has(t))return;ye.add(t),te.c.push(()=>{ye.delete(t),s&&(l&&t.d(1),s())}),t.o(e)}else s&&s()}function oe(t){t&&t.c()}function le(t,e,l,s){const{fragment:n,after_update:r}=t.$$;n&&n.m(e,l),s||He(()=>{const o=t.$$.on_mount.map($e).filter(Ge);t.$$.on_destroy?t.$$.on_destroy.push(...o):R(o),t.$$.on_mount=[]}),r.forEach(He)}function se(t,e){const l=t.$$;l.fragment!==null&&(R(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(pe.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,l,s,n,r,o,u=[-1]){const d=ve;he(t);const g=t.$$={fragment:null,ctx:[],props:r,update:I,not_equal:n,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Fe(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};o&&o(g.root);let p=!1;if(g.ctx=l?l(t,e.props||{},(a,f,..._)=>{const H=_.length?_[0]:f;return g.ctx&&n(g.ctx[a],g.ctx[a]=H)&&(!g.skip_bound&&g.bound[a]&&g.bound[a](H),p&&mt(t,a)),f}):[],g.update(),p=!0,R(g.before_update),g.fragment=s?s(g.ctx):!1,e.target){if(e.hydrate){const a=ct(e.target);g.fragment&&g.fragment.l(a),a.forEach(M)}else g.fragment&&g.fragment.c();e.intro&&T(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),Xe()}he(d)}class ce{$destroy(){se(this,1),this.$destroy=I}$on(e,l){if(!Ge(l))return I;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(l),()=>{const n=s.indexOf(l);n!==-1&&s.splice(n,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function dt(t){let e;return{c(){e=m("h4"),e.textContent="Your cart is empty",i(e,"class","empty svelte-z6953k")},m(l,s){E(l,e,s)},p:I,d(l){l&&M(e)}}}function gt(t){let e,l,s,n,r,o,u,d,g,p,a,f,_,H,w,B,k,b,Z,A,P,F,y,q,C;return{c(){e=m("div"),l=m("div"),s=m("img"),r=v(),o=m("div"),u=m("h4"),u.textContent="Fall Limited Edition Sneakers",d=v(),g=m("p"),p=Q("$"),a=Q(t[1]),f=Q(" x "),_=Q(t[2]),H=v(),w=m("strong"),w.textContent=`$${t[4]}.00`,B=v(),k=m("div"),b=z("svg"),Z=z("defs"),A=z("path"),P=z("use"),F=v(),y=m("button"),y.textContent="Checkout",O(s.src,n="public\\image-product-1-thumbnail.jpg")||i(s,"src",n),i(s,"alt",""),i(s,"class","svelte-z6953k"),i(w,"class","svelte-z6953k"),i(g,"class","price svelte-z6953k"),i(o,"class","text svelte-z6953k"),i(A,"d","M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"),i(A,"id","a"),i(P,"fill","#C3CAD9"),i(P,"fill-rule","nonzero"),nt(P,"xlink:href","#a"),i(b,"width","16"),i(b,"class","delete svelte-z6953k"),i(b,"height","16"),i(b,"xmlns","http://www.w3.org/2000/svg"),i(b,"xmlns:xlink","http://www.w3.org/1999/xlink"),i(k,"class","icon"),i(l,"class","disc2 svelte-z6953k"),i(y,"class","svelte-z6953k"),i(e,"class","discription svelte-z6953k")},m(h,j){E(h,e,j),c(e,l),c(l,s),c(l,r),c(l,o),c(o,u),c(o,d),c(o,g),c(g,p),c(g,a),c(g,f),c(g,_),c(g,H),c(g,w),c(l,B),c(l,k),c(k,b),c(b,Z),c(Z,A),c(b,P),c(e,F),c(e,y),q||(C=[L(b,"click",t[6]),L(y,"click",t[7])],q=!0)},p(h,j){j&2&&qe(a,h[1]),j&4&&qe(_,h[2])},d(h){h&&M(e),q=!1,R(C)}}}function pt(t){let e,l,s,n,r,o,u;function d(a,f){return a[0]?gt:dt}let g=d(t),p=g(t);return{c(){e=m("div"),l=v(),s=m("main"),n=m("div"),n.innerHTML='<h3 class="svelte-z6953k">Cart</h3>',r=v(),p.c(),i(e,"class","backdrop svelte-z6953k"),i(n,"class","head svelte-z6953k"),i(s,"class","svelte-z6953k")},m(a,f){E(a,e,f),E(a,l,f),E(a,s,f),c(s,n),c(s,r),p.m(s,null),o||(u=L(e,"click",t[5]),o=!0)},p(a,[f]){g===(g=d(a))&&p?p.p(a,f):(p.d(1),p=g(a),p&&(p.c(),p.m(s,null)))},i:I,o:I,d(a){a&&M(e),a&&M(l),a&&M(s),p.d(),o=!1,u()}}}function ht(t,e,l){const s=je();let{displayer:n}=e,{price:r}=e,{quantitys:o}=e,u=r*o;console.log(n);const d=()=>{s("cancle")},g=()=>l(0,n=!1),p=()=>l(0,n=!1);return t.$$set=a=>{"displayer"in a&&l(0,n=a.displayer),"price"in a&&l(1,r=a.price),"quantitys"in a&&l(2,o=a.quantitys)},[n,r,o,s,u,d,g,p]}class vt extends ce{constructor(e){super(),ne(this,e,ht,pt,ie,{displayer:0,price:1,quantitys:2})}}function _t(t){let e,l,s,n,r,o,u,d,g;const p=t[2].default,a=tt(p,t,t[1],null);return{c(){e=m("div"),l=v(),s=m("main"),n=m("img"),o=v(),a&&a.c(),i(e,"class","backdrop svelte-1kflzrp"),O(n.src,r="public\\icon-close.svg")||i(n,"src",r),i(n,"class","close svelte-1kflzrp"),i(n,"alt",""),i(s,"class","svelte-1kflzrp")},m(f,_){E(f,e,_),E(f,l,_),E(f,s,_),c(s,n),c(s,o),a&&a.m(s,null),u=!0,d||(g=[L(e,"click",t[3]),L(n,"click",t[4])],d=!0)},p(f,[_]){a&&a.p&&(!u||_&2)&&st(a,p,f,f[1],u?lt(p,f[1],_,null):it(f[1]),null)},i(f){u||(T(a,f),u=!0)},o(f){Y(a,f),u=!1},d(f){f&&M(e),f&&M(l),f&&M(s),a&&a.d(f),d=!1,R(g)}}}function kt(t,e,l){let{$$slots:s={},$$scope:n}=e,r=je();const o=()=>{r("close")},u=()=>r("close");return t.$$set=d=>{"$$scope"in d&&l(1,n=d.$$scope)},[r,n,s,o,u]}class wt extends ce{constructor(e){super(),ne(this,e,kt,_t,ie,{})}}function Ie(t){let e,l;return{c(){e=m("p"),l=Q(t[2]),i(e,"class","pin svelte-1mu3qem")},m(s,n){E(s,e,n),c(e,l)},p(s,n){n&4&&qe(l,s[2])},d(s){s&&M(e)}}}function Ke(t){let e,l;return e=new vt({props:{quantitys:t[1],price:qt,displayer:t[0]}}),e.$on("cancle",t[6]),{c(){oe(e.$$.fragment)},m(s,n){le(e,s,n),l=!0},p(s,n){const r={};n&2&&(r.quantitys=s[1]),n&1&&(r.displayer=s[0]),e.$set(r)},i(s){l||(T(e.$$.fragment,s),l=!0)},o(s){Y(e.$$.fragment,s),l=!1},d(s){se(e,s)}}}function Re(t){let e,l;return e=new wt({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){oe(e.$$.fragment)},m(s,n){le(e,s,n),l=!0},p(s,n){const r={};n&512&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){l||(T(e.$$.fragment,s),l=!0)},o(s){Y(e.$$.fragment,s),l=!1},d(s){se(e,s)}}}function bt(t){let e;return{c(){e=m("div"),e.innerHTML=`<h2>Collection</h2> 
      <h2>Men</h2> 
      <h2>Women</h2> 
      <h2>About</h2> 
      <h2>Contact</h2>`},m(l,s){E(l,e,s)},p:I,d(l){l&&M(e)}}}function yt(t){let e,l,s,n,r,o,u,d,g,p,a,f,_,H,w,B,k,b,Z,A,P,F,y=t[0]&&t[4]&&Ie(t),q=t[3]&&Ke(t),C=t[5]&&Re(t);return{c(){e=m("header"),l=m("div"),s=z("svg"),n=z("path"),r=v(),o=m("div"),o.innerHTML='<svg width="138" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z" fill="#1D2026" fill-rule="nonzero"></path></svg>',u=v(),d=m("div"),d.innerHTML=`<h2 class="svelte-1mu3qem">Collection</h2> 
      <h2 class="svelte-1mu3qem">Men</h2> 
      <h2 class="svelte-1mu3qem">Women</h2> 
      <h2 class="svelte-1mu3qem">About</h2> 
      <h2 class="svelte-1mu3qem">Contact</h2>`,g=v(),p=m("div"),a=z("svg"),f=z("path"),_=v(),y&&y.c(),H=v(),w=m("img"),k=v(),q&&q.c(),b=v(),C&&C.c(),Z=Qe(),i(n,"d","M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"),i(n,"fill","#69707D"),i(n,"fill-rule","evenodd"),i(s,"width","16"),i(s,"class","menu svelte-1mu3qem"),i(s,"height","15"),i(s,"xmlns","http://www.w3.org/2000/svg"),i(o,"class","logo svelte-1mu3qem"),i(d,"class","catagory svelte-1mu3qem"),i(d,"id","#catagory"),i(l,"class","left svelte-1mu3qem"),i(f,"d","M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"),i(f,"fill-rule","nonzero"),i(a,"width","22"),i(a,"class","cart svelte-1mu3qem"),i(a,"height","20"),i(a,"xmlns","http://www.w3.org/2000/svg"),O(w.src,B="./public\\image-avatar.png")||i(w,"src",B),i(w,"alt",""),i(w,"class","avatar svelte-1mu3qem"),i(p,"class","profile svelte-1mu3qem"),i(e,"class","svelte-1mu3qem")},m(h,j){E(h,e,j),c(e,l),c(l,s),c(s,n),c(l,r),c(l,o),c(l,u),c(l,d),c(e,g),c(e,p),c(p,a),c(a,f),c(p,_),y&&y.m(p,null),c(p,H),c(p,w),E(h,k,j),q&&q.m(h,j),E(h,b,j),C&&C.m(h,j),E(h,Z,j),A=!0,P||(F=[L(s,"click",t[7]),L(a,"click",t[8])],P=!0)},p(h,[j]){h[0]&&h[4]?y?y.p(h,j):(y=Ie(h),y.c(),y.m(p,H)):y&&(y.d(1),y=null),h[3]?q?(q.p(h,j),j&8&&T(q,1)):(q=Ke(h),q.c(),T(q,1),q.m(b.parentNode,b)):q&&(Ne(),Y(q,1,1,()=>{q=null}),ze()),h[5]?C?(C.p(h,j),j&32&&T(C,1)):(C=Re(h),C.c(),T(C,1),C.m(Z.parentNode,Z)):C&&(Ne(),Y(C,1,1,()=>{C=null}),ze())},i(h){A||(T(q),T(C),A=!0)},o(h){Y(q),Y(C),A=!1},d(h){h&&M(e),y&&y.d(),h&&M(k),q&&q.d(h),h&&M(b),C&&C.d(h),h&&M(Z),P=!1,R(F)}}}let qt=127;function jt(t,e,l){let{displayer2:s}=e,{quantitys:n}=e,{incriment:r}=e,o=!1,u=!0,d=!1;function g(){l(3,o=!1)}function p(){d?l(5,d=!1):l(5,d=!0),console.log("dis")}const a=()=>{l(4,u=!1),l(3,o=!0)};return t.$$set=f=>{"displayer2"in f&&l(0,s=f.displayer2),"quantitys"in f&&l(1,n=f.quantitys),"incriment"in f&&l(2,r=f.incriment)},[s,n,r,o,u,d,g,p,a]}class Ct extends ce{constructor(e){super(),ne(this,e,jt,yt,ie,{displayer2:0,quantitys:1,incriment:2})}}function Lt(t){let e,l,s,n,r,o,u,d,g,p,a,f,_,H,w,B,k,b,Z,A,P,F,y,q,C,h,j,K,ae,X,V,W,fe,$,me;return{c(){e=m("div"),l=v(),s=m("main"),n=z("svg"),r=z("path"),o=v(),u=m("div"),d=m("div"),g=m("img"),a=v(),f=z("svg"),_=z("path"),H=v(),w=z("svg"),B=z("path"),k=v(),b=m("div"),Z=m("section"),A=m("img"),F=v(),y=m("section"),q=m("img"),h=v(),j=m("section"),K=m("img"),X=v(),V=m("section"),W=m("img"),i(e,"class","backdrop svelte-vkt91l"),i(r,"d","m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"),i(r,"fill-rule","evenodd"),i(n,"width","54"),i(n,"height","55"),i(n,"class","close svelte-vkt91l"),i(n,"viewBox","0 0 20 25"),i(n,"xmlns","http://www.w3.org/2000/svg"),i(g,"class","main-img svelte-vkt91l"),O(g.src,p=t[0])||i(g,"src",p),i(_,"d","M11 1 3 9l8 8"),i(_,"stroke-width","2"),i(_,"fill-rule","evenodd"),i(f,"class","previous svelte-vkt91l"),i(f,"width","55"),i(f,"height","55"),i(f,"viewBox","-16 0 50 18"),i(f,"xmlns","http://www.w3.org/2000/svg"),i(B,"d","m2 1 8 8-8 8"),i(B,"stroke-width","2"),i(B,"fill-rule","evenodd"),i(w,"width","55"),i(w,"class","next svelte-vkt91l"),i(w,"height","55"),i(w,"viewBox","-22 0 50 18"),i(w,"xmlns","http://www.w3.org/2000/svg"),i(d,"class","pic svelte-vkt91l"),O(A.src,P="public\\image-product-1-thumbnail.jpg")||i(A,"src",P),i(A,"id","opp"),i(A,"class","0 svelte-vkt91l"),i(A,"alt",""),i(Z,"class","sec svelte-vkt91l"),O(q.src,C="public\\image-product-2-thumbnail.jpg")||i(q,"src",C),i(q,"id","opp"),i(q,"class","1 svelte-vkt91l"),i(q,"alt",""),i(y,"class","sec svelte-vkt91l"),O(K.src,ae="public\\image-product-3-thumbnail.jpg")||i(K,"src",ae),i(K,"id","opp"),i(K,"class","2 svelte-vkt91l"),i(K,"alt",""),i(j,"class","sec svelte-vkt91l"),O(W.src,fe="public\\image-product-4-thumbnail.jpg")||i(W,"src",fe),i(W,"id","opp"),i(W,"class","3 svelte-vkt91l"),i(W,"alt",""),i(V,"class","sec svelte-vkt91l"),i(b,"class","thumbnail svelte-vkt91l"),i(u,"class","pictures"),i(s,"class","svelte-vkt91l")},m(D,G){E(D,e,G),E(D,l,G),E(D,s,G),c(s,n),c(n,r),c(s,o),c(s,u),c(u,d),c(d,g),c(d,a),c(d,f),c(f,_),c(d,H),c(d,w),c(w,B),c(u,k),c(u,b),c(b,Z),c(Z,A),c(b,F),c(b,y),c(y,q),c(b,h),c(b,j),c(j,K),c(b,X),c(b,V),c(V,W),$||(me=[L(e,"click",t[6]),L(n,"click",t[7]),L(f,"click",t[4]),L(w,"click",t[3]),L(A,"click",t[2]),L(q,"click",t[2]),L(K,"click",t[2]),L(W,"click",t[2])],$=!0)},p(D,[G]){G&1&&!O(g.src,p=D[0])&&i(g,"src",p)},i:I,o:I,d(D){D&&M(e),D&&M(l),D&&M(s),$=!1,R(me)}}}function Zt(t,e,l){const s=[{id:0,imgurl:"public/image-product-1.jpg"},{id:1,imgurl:"public/image-product-2.jpg"},{id:2,imgurl:"public/image-product-3.jpg"},{id:3,imgurl:"public/image-product-4.jpg"}];let{main:n}=e,{currentid:r}=e,o=je();function u(f){let _=f.target.className.charAt(0);l(0,n=s[_].imgurl),s[_].id,document.querySelectorAll("section img").forEach(w=>{w.id="child2",w.parentNode.id=""}),f.target.parentNode.id="parent",f.target.id="child"}function d(){r===s.length-1?(l(5,r=0),l(0,n=s[r].imgurl)):(l(5,r++,r),l(0,n=s[r].imgurl),console.log(r))}function g(){r===0?(l(5,r=s.length),l(5,r--,r),l(0,n=s[r].imgurl)):(l(5,r--,r),l(0,n=s[r].imgurl))}const p=()=>{o("cancle")},a=()=>{o("cancle")};return t.$$set=f=>{"main"in f&&l(0,n=f.main),"currentid"in f&&l(5,r=f.currentid)},[n,o,u,d,g,r,p,a]}class At extends ce{constructor(e){super(),ne(this,e,Zt,Lt,ie,{main:0,currentid:5})}}function Ue(t){let e,l;return e=new At({props:{main:t[3],currentid:t[2]}}),e.$on("cancle",t[6]),{c(){oe(e.$$.fragment)},m(s,n){le(e,s,n),l=!0},p(s,n){const r={};n&8&&(r.main=s[3]),n&4&&(r.currentid=s[2]),e.$set(r)},i(s){l||(T(e.$$.fragment,s),l=!0)},o(s){Y(e.$$.fragment,s),l=!1},d(s){se(e,s)}}}function Mt(t){let e,l,s,n,r,o,u,d,g,p,a,f,_,H,w,B,k,b,Z,A,P,F,y,q,C,h,j,K,ae,X,V,W,fe,$,me,D,G,_e,Ve,re,J,x,Se,Oe,Ce,Le,Te,ee,Be,Pe,de,Ze,ge,ue,Ae,De,N=t[1]&&Ue(t);return{c(){e=m("main"),l=m("div"),s=m("img"),r=v(),o=m("div"),u=z("svg"),d=z("path"),g=v(),p=z("svg"),a=z("path"),f=v(),_=m("div"),H=m("section"),w=m("img"),k=v(),b=m("section"),Z=m("img"),P=v(),F=m("section"),y=m("img"),C=v(),h=m("section"),j=m("img"),ae=v(),X=m("div"),V=m("div"),W=m("p"),W.textContent="SNEAKER COMPANY",fe=v(),$=m("h1"),$.textContent="Fall Limited Edition Sneakers",me=v(),D=m("p"),D.textContent=`These low-profile sneakers are your perfect casual wear companion.\r
        Featuring a durable rubber outer sole, they'll withstand everything the\r
        weather can offer`,G=v(),_e=m("div"),_e.innerHTML=`<h2>$125.00 <span class="svelte-9g20qe">50%</span></h2> 
        <p class="del svelte-9g20qe">$250.00</p>`,Ve=v(),re=m("div"),J=m("div"),x=m("img"),Oe=v(),Ce=m("h3"),Le=Q(t[0]),Te=v(),ee=m("img"),Pe=v(),de=m("button"),de.innerHTML=`<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" class="svelte-9g20qe"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"></path></svg>
          Add to cart`,Ze=v(),N&&N.c(),ge=Qe(),i(s,"class","main-img svelte-9g20qe"),O(s.src,n=t[3])||i(s,"src",n),i(s,"alt",""),i(d,"d","M11 1 3 9l8 8"),i(d,"stroke-width","2"),i(d,"fill-rule","evenodd"),i(u,"class","prev svelte-9g20qe"),i(u,"width","55"),i(u,"height","55"),i(u,"viewBox","-16 0 50 18"),i(u,"xmlns","http://www.w3.org/2000/svg"),i(a,"d","m2 1 8 8-8 8"),i(a,"stroke-width","2"),i(a,"fill-rule","evenodd"),i(p,"width","55"),i(p,"class","next svelte-9g20qe"),i(p,"height","55"),i(p,"viewBox","-22 0 50 18"),i(p,"xmlns","http://www.w3.org/2000/svg"),i(o,"class","slide svelte-9g20qe"),O(w.src,B="public\\image-product-1-thumbnail.jpg")||i(w,"src",B),i(w,"id","opp"),i(w,"class","0 svelte-9g20qe"),i(w,"alt",""),i(H,"class","sec svelte-9g20qe"),O(Z.src,A="public\\image-product-2-thumbnail.jpg")||i(Z,"src",A),i(Z,"id","opp"),i(Z,"class","1 svelte-9g20qe"),i(Z,"alt",""),i(b,"class","sec svelte-9g20qe"),O(y.src,q="public\\image-product-3-thumbnail.jpg")||i(y,"src",q),i(y,"id","opp"),i(y,"class","2 svelte-9g20qe"),i(y,"alt",""),i(F,"class","sec svelte-9g20qe"),O(j.src,K="public\\image-product-4-thumbnail.jpg")||i(j,"src",K),i(j,"id","opp"),i(j,"class","3 svelte-9g20qe"),i(j,"alt",""),i(h,"class","sec svelte-9g20qe"),i(_,"class","thumbnail svelte-9g20qe"),i(l,"class","pictures svelte-9g20qe"),i(W,"class","company svelte-9g20qe"),i($,"class","svelte-9g20qe"),i(D,"class","svelte-9g20qe"),i(_e,"class","price svelte-9g20qe"),O(x.src,Se="public\\icon-minus.svg")||i(x,"src",Se),i(x,"id","minus"),i(x,"alt",""),O(ee.src,Be="public\\icon-plus.svg")||i(ee,"src",Be),i(ee,"id","plus"),i(ee,"alt",""),i(J,"class","adj svelte-9g20qe"),i(de,"class","svelte-9g20qe"),i(re,"class","operation svelte-9g20qe"),i(V,"class","container svelte-9g20qe"),i(X,"class","discription svelte-9g20qe"),i(e,"class","svelte-9g20qe")},m(S,U){E(S,e,U),c(e,l),c(l,s),c(l,r),c(l,o),c(o,u),c(u,d),c(o,g),c(o,p),c(p,a),c(l,f),c(l,_),c(_,H),c(H,w),c(_,k),c(_,b),c(b,Z),c(_,P),c(_,F),c(F,y),c(_,C),c(_,h),c(h,j),c(e,ae),c(e,X),c(X,V),c(V,W),c(V,fe),c(V,$),c(V,me),c(V,D),c(V,G),c(V,_e),c(V,Ve),c(V,re),c(re,J),c(J,x),c(J,Oe),c(J,Ce),c(Ce,Le),c(J,Te),c(J,ee),c(re,Pe),c(re,de),E(S,Ze,U),N&&N.m(S,U),E(S,ge,U),ue=!0,Ae||(De=[L(s,"click",t[10]),L(u,"click",t[8]),L(p,"click",t[7]),L(w,"click",t[5]),L(Z,"click",t[5]),L(y,"click",t[5]),L(j,"click",t[5]),L(x,"click",t[11]),L(ee,"click",t[12]),L(de,"click",t[13])],Ae=!0)},p(S,[U]){(!ue||U&8&&!O(s.src,n=S[3]))&&i(s,"src",n),(!ue||U&1)&&qe(Le,S[0]),S[1]?N?(N.p(S,U),U&2&&T(N,1)):(N=Ue(S),N.c(),T(N,1),N.m(ge.parentNode,ge)):N&&(Ne(),Y(N,1,1,()=>{N=null}),ze())},i(S){ue||(T(N),ue=!0)},o(S){Y(N),ue=!1},d(S){S&&M(e),S&&M(Ze),N&&N.d(S),S&&M(ge),Ae=!1,R(De)}}}function Et(t,e,l){let s=je(),n=!1,r=0;const o=[{id:0,imgurl:"./public/image-product-1.jpg"},{id:1,imgurl:"./public/image-product-2.jpg"},{id:2,imgurl:"./public/image-product-3.jpg"},{id:3,imgurl:"./public/image-product-4.jpg"}];let u=o[0].imgurl,{starter:d}=e;function g(k){let b=k.target.className.charAt(0);document.querySelectorAll("section img").forEach(A=>{A.id="child2",A.parentNode.id=""}),k.target.parentNode.id="parent",k.target.id="child",l(3,u=o[b].imgurl),l(2,r=o[b].id),k.target.className.charAt(0)}function p(){l(1,n=!1)}function a(){console.log(Object(u).charAt(27)-1);let k=Object(u).charAt(27)-1;k>o.length-2?(k=0,l(3,u=o[k].imgurl),l(2,r=o[k].id)):(l(3,u=o[k+1].imgurl),l(2,r=o[k+1].id))}function f(){let k=Object(u).charAt(27)-1;k===0?(k=o.length,l(3,u=o[k-1].imgurl),l(2,r=o[k-1].id)):(l(3,u=o[k-1].imgurl),l(2,r=o[k-1].id))}const _=()=>{l(1,n=!0)},H=()=>{s("minus")},w=()=>{s("plus")},B=()=>{s("display")};return t.$$set=k=>{"starter"in k&&l(0,d=k.starter)},[d,n,r,u,s,g,p,a,f,o,_,H,w,B]}class Ht extends ce{constructor(e){super(),ne(this,e,Et,Mt,ie,{images:9,starter:0})}get images(){return this.$$.ctx[9]}}function Nt(t){let e;return{c(){e=m("p"),e.innerHTML='CLONED BY <strong class="svelte-13hrp98">SAMUEL.W</strong>',i(e,"class","svelte-13hrp98")},m(l,s){E(l,e,s)},p:I,i:I,o:I,d(l){l&&M(e)}}}class zt extends ce{constructor(e){super(),ne(this,e,null,Nt,ie,{})}}function Vt(t){let e,l,s,n,r,o;return e=new Ct({props:{incriment:t[2],quantitys:t[0],displayer2:t[1]}}),s=new Ht({props:{starter:t[0]}}),s.$on("minus",t[3]),s.$on("plus",t[4]),s.$on("display",t[5]),r=new zt({}),{c(){oe(e.$$.fragment),l=v(),oe(s.$$.fragment),n=v(),oe(r.$$.fragment)},m(u,d){le(e,u,d),E(u,l,d),le(s,u,d),E(u,n,d),le(r,u,d),o=!0},p(u,[d]){const g={};d&4&&(g.incriment=u[2]),d&1&&(g.quantitys=u[0]),d&2&&(g.displayer2=u[1]),e.$set(g);const p={};d&1&&(p.starter=u[0]),s.$set(p)},i(u){o||(T(e.$$.fragment,u),T(s.$$.fragment,u),T(r.$$.fragment,u),o=!0)},o(u){Y(e.$$.fragment,u),Y(s.$$.fragment,u),Y(r.$$.fragment,u),o=!1},d(u){se(e,u),u&&M(l),se(s,u),u&&M(n),se(r,u)}}}function St(t,e,l){let s=1,n=!1,r;function o(){s>1&&l(0,s--,s)}function u(){l(0,s++,s)}function d(){l(1,n=!0),l(2,r=s)}return[s,n,r,o,u,d]}class Ot extends ce{constructor(e){super(),ne(this,e,St,Vt,ie,{})}}new Ot({target:document.getElementById("app")});
