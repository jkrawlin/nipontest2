const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-DZi-lecP.js","assets/vendor-ds6wDdAD.js","assets/react-nPrKd0zk.js","assets/card-DuYZQIZY.js","assets/input-C2fQ6NhD.js","assets/Dashboard-By5HpuW_.js","assets/formatters-CZgibOAZ.js","assets/badge-D-J4CWRb.js","assets/employees-D2MDJNGt.js","assets/employees-DNNZe7Q5.js","assets/payroll-Cm_R0hmF.js","assets/decimal-CNRKZ6of.js","assets/customers-qEHjyBNn.js","assets/EmployeeList-_kIuzUz0.js","assets/table-mW3wA7-p.js","assets/useEmployees-Vmvodcho.js","assets/dialog-BgdO2cAq.js","assets/EmployeeDetails-DI4P3ZIf.js","assets/PermanentEmployeeList-DdQb9tWI.js","assets/file-warning-CXt4pixh.js","assets/TemporaryEmployeeList-CbNOW8CA.js","assets/AddEmployee-4-MNJB38.js","assets/ImportEmployees-B6tw7zbJ.js","assets/Documents-DbWCsKE4.js","assets/EmployeeDetail-CSqj4NKD.js","assets/Leave-D--e2IaI.js","assets/EndOfService-BKLY6-Pa.js","assets/PayrollList-D4gz41Vo.js","assets/ProcessPayroll-DlrPkxcU.js","assets/jspdf.es.min-BojTXcBU.js","assets/PayrollHistory-B7cQHOzB.js","assets/Payslips-De5Fbhze.js","assets/SalaryAdjustments-CVnrkoVs.js","assets/Reports-BsT5s-xe.js","assets/AccountsDashboard-qQGwK41g.js","assets/Transactions-DyjQZA9r.js","assets/PaymentVouchers-DHbdPb-Q.js","assets/ReceiptVouchers-D_KpD8kX.js","assets/BankAccounts-CXklL0TW.js","assets/ChartOfAccounts-DzFbz8QW.js","assets/ExpenseClaims-CM1Uueoe.js","assets/TrialBalance-wGASf3sf.js","assets/ProfitLoss-CfIbr-un.js","assets/CustomerList-DpNct68y.js","assets/CustomerCreate-kJv2XO57.js","assets/CustomerDetail-BI9lPG_c.js","assets/CustomerDeploy-iMKhB3ph.js","assets/CustomerContracts-CTFYwRoD.js","assets/CustomerGenerateInvoice-DmKw5V-W.js","assets/invoices-CLR50L-3.js","assets/CustomerInvoices-DuVAuz0n.js"])))=>i.map(i=>d[i]);
var v_=Object.defineProperty;var T_=(n,e,t)=>e in n?v_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Vu=(n,e,t)=>T_(n,typeof e!="symbol"?e+"":e,t);import{c as nf,j as T,Q as w_,a as b_}from"./vendor-ds6wDdAD.js";import{a as A_,r as V,b as R_,R as rf}from"./react-nPrKd0zk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ba={},Du=A_;Ba.createRoot=Du.createRoot,Ba.hydrateRoot=Du.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ks.apply(this,arguments)}var Jt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Jt||(Jt={}));const Nu="popstate";function P_(n){n===void 0&&(n={});function e(r,s){let{pathname:i,search:o,hash:c}=r.location;return za("",{pathname:i,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Qi(s)}return C_(e,t,null,n)}function ge(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function sf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function S_(){return Math.random().toString(36).substr(2,8)}function Ou(n,e){return{usr:n.state,key:n.key,idx:e}}function za(n,e,t,r){return t===void 0&&(t=null),ks({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Lr(e):e,{state:t,key:e&&e.key||r||S_()})}function Qi(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lr(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function C_(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,c=Jt.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(ks({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function p(){c=Jt.Pop;let R=f(),M=R==null?null:R-u;u=R,l&&l({action:c,location:x.location,delta:M})}function g(R,M){c=Jt.Push;let N=za(x.location,R,M);u=f()+1;let L=Ou(N,u),j=x.createHref(N);try{o.pushState(L,"",j)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(j)}i&&l&&l({action:c,location:x.location,delta:1})}function w(R,M){c=Jt.Replace;let N=za(x.location,R,M);u=f();let L=Ou(N,u),j=x.createHref(N);o.replaceState(L,"",j),i&&l&&l({action:c,location:x.location,delta:0})}function C(R){let M=s.location.origin!=="null"?s.location.origin:s.location.href,N=typeof R=="string"?R:Qi(R);return N=N.replace(/ $/,"%20"),ge(M,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,M)}let x={get action(){return c},get location(){return n(s,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Nu,p),l=R,()=>{s.removeEventListener(Nu,p),l=null}},createHref(R){return e(s,R)},createURL:C,encodeLocation(R){let M=C(R);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:g,replace:w,go(R){return o.go(R)}};return x}var Lu;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Lu||(Lu={}));function x_(n,e,t){return t===void 0&&(t="/"),k_(n,e,t)}function k_(n,e,t,r){let s=typeof e=="string"?Lr(e):e,i=Ir(s.pathname||"/",t);if(i==null)return null;let o=of(n);V_(o);let c=null;for(let l=0;c==null&&l<o.length;++l){let u=q_(i);c=B_(o[l],u)}return c}function of(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,o,c)=>{let l={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yt([r,l.relativePath]),f=t.concat(l);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),of(i.children,e,f,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:U_(u,i.index),routesMeta:f})};return n.forEach((i,o)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,o);else for(let l of af(i.path))s(i,o,l)}),e}function af(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=af(r.join("/")),c=[];return c.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&c.push(...o),c.map(l=>n.startsWith("/")&&l===""?"/":l)}function V_(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:j_(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const D_=/^:[\w-]+$/,N_=3,O_=2,L_=1,M_=10,F_=-2,Mu=n=>n==="*";function U_(n,e){let t=n.split("/"),r=t.length;return t.some(Mu)&&(r+=F_),e&&(r+=O_),t.filter(s=>!Mu(s)).reduce((s,i)=>s+(D_.test(i)?N_:i===""?L_:M_),r)}function j_(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function B_(n,e,t){let{routesMeta:r}=n,s={},i="/",o=[];for(let c=0;c<r.length;++c){let l=r[c],u=c===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",p=qa({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),g=l.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:Yt([i,p.pathname]),pathnameBase:W_(Yt([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Yt([i,p.pathnameBase]))}return o}function qa(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=z_(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let x=c[p]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const C=c[p];return w&&!C?u[g]=void 0:u[g]=(C||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:n}}function z_(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),sf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function q_(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ir(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function $_(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Lr(n):n;return{pathname:t?t.startsWith("/")?t:G_(t,e):e,search:H_(r),hash:Q_(s)}}function G_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function ba(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K_(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pc(n,e){let t=K_(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Sc(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=Lr(n):(s=ks({},n),ge(!s.pathname||!s.pathname.includes("?"),ba("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),ba("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),ba("#","search","hash",s)));let i=n===""||s.pathname==="",o=i?"/":s.pathname,c;if(o==null)c=t;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}c=p>=0?e[p]:"/"}let l=$_(s,c),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Yt=n=>n.join("/").replace(/\/\/+/g,"/"),W_=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),H_=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Q_=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function J_(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const cf=["post","put","patch","delete"];new Set(cf);const X_=["get",...cf];new Set(X_);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Vs.apply(this,arguments)}const bo=V.createContext(null),lf=V.createContext(null),Ct=V.createContext(null),Ao=V.createContext(null),xt=V.createContext({outlet:null,matches:[],isDataRoute:!1}),uf=V.createContext(null);function Y_(n,e){let{relative:t}=e===void 0?{}:e;Mr()||ge(!1);let{basename:r,navigator:s}=V.useContext(Ct),{hash:i,pathname:o,search:c}=Ro(n,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:Yt([r,o])),s.createHref({pathname:l,search:c,hash:i})}function Mr(){return V.useContext(Ao)!=null}function $n(){return Mr()||ge(!1),V.useContext(Ao).location}function hf(n){V.useContext(Ct).static||V.useLayoutEffect(n)}function df(){let{isDataRoute:n}=V.useContext(xt);return n?hy():Z_()}function Z_(){Mr()||ge(!1);let n=V.useContext(bo),{basename:e,future:t,navigator:r}=V.useContext(Ct),{matches:s}=V.useContext(xt),{pathname:i}=$n(),o=JSON.stringify(Pc(s,t.v7_relativeSplatPath)),c=V.useRef(!1);return hf(()=>{c.current=!0}),V.useCallback(function(u,f){if(f===void 0&&(f={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let p=Sc(u,JSON.parse(o),i,f.relative==="path");n==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Yt([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,i,n])}function MS(){let{matches:n}=V.useContext(xt),e=n[n.length-1];return e?e.params:{}}function Ro(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=V.useContext(Ct),{matches:s}=V.useContext(xt),{pathname:i}=$n(),o=JSON.stringify(Pc(s,r.v7_relativeSplatPath));return V.useMemo(()=>Sc(n,JSON.parse(o),i,t==="path"),[n,o,i,t])}function ey(n,e){return ty(n,e)}function ty(n,e,t,r){Mr()||ge(!1);let{navigator:s}=V.useContext(Ct),{matches:i}=V.useContext(xt),o=i[i.length-1],c=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=$n(),f;if(e){var p;let R=typeof e=="string"?Lr(e):e;l==="/"||(p=R.pathname)!=null&&p.startsWith(l)||ge(!1),f=R}else f=u;let g=f.pathname||"/",w=g;if(l!=="/"){let R=l.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=x_(n,{pathname:w}),x=oy(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},c,R.params),pathname:Yt([l,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:Yt([l,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,t,r);return e&&x?V.createElement(Ao.Provider,{value:{location:Vs({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Jt.Pop}},x):x}function ny(){let n=uy(),e=J_(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),t?V.createElement("pre",{style:s},t):null,null)}const ry=V.createElement(ny,null);class sy extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?V.createElement(xt.Provider,{value:this.props.routeContext},V.createElement(uf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iy(n){let{routeContext:e,match:t,children:r}=n,s=V.useContext(bo);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),V.createElement(xt.Provider,{value:e},r)}function oy(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if(!t)return null;if(t.errors)n=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,c=(s=t)==null?void 0:s.errors;if(c!=null){let f=o.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);f>=0||ge(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:g,errors:w}=t,C=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||C){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let w,C=!1,x=null,R=null;t&&(w=c&&p.route.id?c[p.route.id]:void 0,x=p.route.errorElement||ry,l&&(u<0&&g===0?(dy("route-fallback"),C=!0,R=null):u===g&&(C=!0,R=p.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,g+1)),N=()=>{let L;return w?L=x:C?L=R:p.route.Component?L=V.createElement(p.route.Component,null):p.route.element?L=p.route.element:L=f,V.createElement(iy,{match:p,routeContext:{outlet:f,matches:M,isDataRoute:t!=null},children:L})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?V.createElement(sy,{location:t.location,revalidation:t.revalidation,component:x,error:w,children:N(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):N()},null)}var ff=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(ff||{}),pf=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(pf||{});function ay(n){let e=V.useContext(bo);return e||ge(!1),e}function cy(n){let e=V.useContext(lf);return e||ge(!1),e}function ly(n){let e=V.useContext(xt);return e||ge(!1),e}function mf(n){let e=ly(),t=e.matches[e.matches.length-1];return t.route.id||ge(!1),t.route.id}function uy(){var n;let e=V.useContext(uf),t=cy(),r=mf();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function hy(){let{router:n}=ay(ff.UseNavigateStable),e=mf(pf.UseNavigateStable),t=V.useRef(!1);return hf(()=>{t.current=!0}),V.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Vs({fromRouteId:e},i)))},[n,e])}const Fu={};function dy(n,e,t){Fu[n]||(Fu[n]=!0)}function fy(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function $a(n){let{to:e,replace:t,state:r,relative:s}=n;Mr()||ge(!1);let{future:i,static:o}=V.useContext(Ct),{matches:c}=V.useContext(xt),{pathname:l}=$n(),u=df(),f=Sc(e,Pc(c,i.v7_relativeSplatPath),l,s==="path"),p=JSON.stringify(f);return V.useEffect(()=>u(JSON.parse(p),{replace:t,state:r,relative:s}),[u,p,s,t,r]),null}function Z(n){ge(!1)}function py(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Jt.Pop,navigator:i,static:o=!1,future:c}=n;Mr()&&ge(!1);let l=e.replace(/^\/*/,"/"),u=V.useMemo(()=>({basename:l,navigator:i,static:o,future:Vs({v7_relativeSplatPath:!1},c)}),[l,c,i,o]);typeof r=="string"&&(r=Lr(r));let{pathname:f="/",search:p="",hash:g="",state:w=null,key:C="default"}=r,x=V.useMemo(()=>{let R=Ir(f,l);return R==null?null:{location:{pathname:R,search:p,hash:g,state:w,key:C},navigationType:s}},[l,f,p,g,w,C,s]);return x==null?null:V.createElement(Ct.Provider,{value:u},V.createElement(Ao.Provider,{children:t,value:x}))}function my(n){let{children:e,location:t}=n;return ey(Ga(e),t)}new Promise(()=>{});function Ga(n,e){e===void 0&&(e=[]);let t=[];return V.Children.forEach(n,(r,s)=>{if(!V.isValidElement(r))return;let i=[...e,s];if(r.type===V.Fragment){t.push.apply(t,Ga(r.props.children,i));return}r.type!==Z&&ge(!1),!r.props.index||!r.props.children||ge(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ga(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ji.apply(this,arguments)}function gf(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function gy(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function _y(n,e){return n.button===0&&(!e||e==="_self")&&!gy(n)}const yy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ey=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Iy="6";try{window.__reactRouterVersion=Iy}catch{}const vy=V.createContext({isTransitioning:!1}),Ty="startTransition",Uu=R_[Ty];function wy(n){let{basename:e,children:t,future:r,window:s}=n,i=V.useRef();i.current==null&&(i.current=P_({window:s,v5Compat:!0}));let o=i.current,[c,l]=V.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=V.useCallback(p=>{u&&Uu?Uu(()=>l(p)):l(p)},[l,u]);return V.useLayoutEffect(()=>o.listen(f),[o,f]),V.useEffect(()=>fy(r),[r]),V.createElement(py,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:o,future:r})}const by=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ry=V.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:c,target:l,to:u,preventScrollReset:f,viewTransition:p}=e,g=gf(e,yy),{basename:w}=V.useContext(Ct),C,x=!1;if(typeof u=="string"&&Ay.test(u)&&(C=u,by))try{let L=new URL(window.location.href),j=u.startsWith("//")?new URL(L.protocol+u):new URL(u),G=Ir(j.pathname,w);j.origin===L.origin&&G!=null?u=G+j.search+j.hash:x=!0}catch{}let R=Y_(u,{relative:s}),M=Sy(u,{replace:o,state:c,target:l,preventScrollReset:f,relative:s,viewTransition:p});function N(L){r&&r(L),L.defaultPrevented||M(L)}return V.createElement("a",Ji({},g,{href:C||R,onClick:x||i?r:N,ref:t,target:l}))}),ju=V.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:c,to:l,viewTransition:u,children:f}=e,p=gf(e,Ey),g=Ro(l,{relative:p.relative}),w=$n(),C=V.useContext(lf),{navigator:x,basename:R}=V.useContext(Ct),M=C!=null&&Cy(g)&&u===!0,N=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,L=w.pathname,j=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;s||(L=L.toLowerCase(),j=j?j.toLowerCase():null,N=N.toLowerCase()),j&&R&&(j=Ir(j,R)||j);const G=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let W=L===N||!o&&L.startsWith(N)&&L.charAt(G)==="/",I=j!=null&&(j===N||!o&&j.startsWith(N)&&j.charAt(N.length)==="/"),_={isActive:W,isPending:I,isTransitioning:M},E=W?r:void 0,b;typeof i=="function"?b=i(_):b=[i,W?"active":null,I?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let v=typeof c=="function"?c(_):c;return V.createElement(Ry,Ji({},p,{"aria-current":E,className:b,ref:t,style:v,to:l,viewTransition:u}),typeof f=="function"?f(_):f)});var Ka;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ka||(Ka={}));var Bu;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Bu||(Bu={}));function Py(n){let e=V.useContext(bo);return e||ge(!1),e}function Sy(n,e){let{target:t,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:c}=e===void 0?{}:e,l=df(),u=$n(),f=Ro(n,{relative:o});return V.useCallback(p=>{if(_y(p,t)){p.preventDefault();let g=r!==void 0?r:Qi(u)===Qi(f);l(n,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:c})}},[u,l,f,r,s,t,n,i,o,c])}function Cy(n,e){e===void 0&&(e={});let t=V.useContext(vy);t==null&&ge(!1);let{basename:r}=Py(Ka.useViewTransitionState),s=Ro(n,{relative:e.relative});if(!t.isTransitioning)return!1;let i=Ir(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Ir(t.nextLocation.pathname,r)||t.nextLocation.pathname;return qa(s.pathname,o)!=null||qa(s.pathname,i)!=null}const xy="modulepreload",ky=function(n){return"/"+n},zu={},re=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=ky(l),l in zu)return;zu[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":xy,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},ar={SESSION:"npp_session",DRAFT_EMPLOYEE:"npp_draft_employee"},Vy=()=>{};var qu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(g=64)),r.push(t[f],t[p],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_f(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Ny;const g=i<<2|c>>4;if(r.push(g),u!==64){const w=c<<4&240|u>>2;if(r.push(w),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ny extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oy=function(n){const e=_f(n);return yf.encodeByteArray(e,!0)},Xi=function(n){return Oy(n).replace(/\./g,"")},Ef=function(n){try{return yf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=()=>If().__FIREBASE_DEFAULTS__,My=()=>{if(typeof process>"u"||typeof qu>"u")return;const n=qu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ef(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return Vy()||Ly()||My()||Fy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vf=n=>{var e,t;return(t=(e=Po())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Tf=n=>{const e=vf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wf=()=>{var n;return(n=Po())==null?void 0:n.config},bf=n=>{var e;return(e=Po())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xi(JSON.stringify(t)),Xi(JSON.stringify(o)),""].join(".")}const vs={};function jy(){const n={prod:[],emulator:[]};for(const e of Object.keys(vs))vs[e]?n.emulator.push(e):n.prod.push(e);return n}function By(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let $u=!1;function xc(n,e){if(typeof window>"u"||typeof document>"u"||!Gn(window.location.host)||vs[n]===e||vs[n]||$u)return;vs[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=jy().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{$u=!0,o()},g}function f(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=By(r),w=t("text"),C=document.getElementById(w)||document.createElement("span"),x=t("learnmore"),R=document.getElementById(x)||document.createElement("a"),M=t("preprendIcon"),N=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const L=g.element;c(L),f(R,x);const j=u();l(N,M),L.append(N,C,R,j),document.body.appendChild(L)}i?(C.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Rf(){var e;const n=(e=Po())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $y(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ky(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pf(){return!Rf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sf(){return!Rf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Cf(){try{return typeof indexedDB=="object"}catch{return!1}}function Wy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function FS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hy,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qy(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new _t(s,c,r)}}function Qy(n,e){return n.replace(Jy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jy=/\{\$([^}]+)}/g;function Xy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Gu(i)&&Gu(o)){if(!Dn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Gu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ps(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ms(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Yy(n,e){const t=new Zy(n,e);return t.subscribe.bind(t)}class Zy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");eE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Aa),s.error===void 0&&(s.error=Aa),s.complete===void 0&&(s.complete=Aa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Aa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=1e3,nE=2,rE=4*60*60*1e3,sE=.5;function US(n,e=tE,t=nE){const r=e*Math.pow(t,n),s=Math.round(sE*r*(Math.random()-.5)*2);return Math.min(rE,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n){return n&&n._delegate?n._delegate:n}class on{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Uy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aE(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oE(n){return n===In?void 0:n}function aE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new iE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const lE={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},uE=ee.INFO,hE={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},dE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=hE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=uE,this._logHandler=dE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const fE=(n,e)=>e.some(t=>n instanceof t);let Ku,Wu;function pE(){return Ku||(Ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mE(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xf=new WeakMap,Wa=new WeakMap,kf=new WeakMap,Ra=new WeakMap,Vc=new WeakMap;function gE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Zt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xf.set(t,n)}).catch(()=>{}),Vc.set(e,n),e}function _E(n){if(Wa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Wa.set(n,e)}let Ha={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yE(n){Ha=n(Ha)}function EE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pa(this),e,...t);return kf.set(r,e.sort?e.sort():[e]),Zt(r)}:mE().includes(n)?function(...e){return n.apply(Pa(this),e),Zt(xf.get(this))}:function(...e){return Zt(n.apply(Pa(this),e))}}function IE(n){return typeof n=="function"?EE(n):(n instanceof IDBTransaction&&_E(n),fE(n,pE())?new Proxy(n,Ha):n)}function Zt(n){if(n instanceof IDBRequest)return gE(n);if(Ra.has(n))return Ra.get(n);const e=IE(n);return e!==n&&(Ra.set(n,e),Vc.set(e,n)),e}const Pa=n=>Vc.get(n);function vE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Zt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const TE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],Sa=new Map;function Hu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Sa.get(e))return Sa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=wE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TE.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Sa.set(e,i),i}yE(n=>({...n,get:(e,t,r)=>Hu(e,t)||n.get(e,t,r),has:(e,t)=>!!Hu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function AE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qa="@firebase/app",Qu="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new kc("@firebase/app"),RE="@firebase/app-compat",PE="@firebase/analytics-compat",SE="@firebase/analytics",CE="@firebase/app-check-compat",xE="@firebase/app-check",kE="@firebase/auth",VE="@firebase/auth-compat",DE="@firebase/database",NE="@firebase/data-connect",OE="@firebase/database-compat",LE="@firebase/functions",ME="@firebase/functions-compat",FE="@firebase/installations",UE="@firebase/installations-compat",jE="@firebase/messaging",BE="@firebase/messaging-compat",zE="@firebase/performance",qE="@firebase/performance-compat",$E="@firebase/remote-config",GE="@firebase/remote-config-compat",KE="@firebase/storage",WE="@firebase/storage-compat",HE="@firebase/firestore",QE="@firebase/ai",JE="@firebase/firestore-compat",XE="firebase",YE="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",ZE={[Qa]:"fire-core",[RE]:"fire-core-compat",[SE]:"fire-analytics",[PE]:"fire-analytics-compat",[xE]:"fire-app-check",[CE]:"fire-app-check-compat",[kE]:"fire-auth",[VE]:"fire-auth-compat",[DE]:"fire-rtdb",[NE]:"fire-data-connect",[OE]:"fire-rtdb-compat",[LE]:"fire-fn",[ME]:"fire-fn-compat",[FE]:"fire-iid",[UE]:"fire-iid-compat",[jE]:"fire-fcm",[BE]:"fire-fcm-compat",[zE]:"fire-perf",[qE]:"fire-perf-compat",[$E]:"fire-rc",[GE]:"fire-rc-compat",[KE]:"fire-gcs",[WE]:"fire-gcs-compat",[HE]:"fire-fst",[JE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[XE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map,eI=new Map,Xa=new Map;function Ju(n,e){try{n.container.addComponent(e)}catch(t){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(Xa.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,n);for(const t of Ds.values())Ju(t,n);for(const t of eI.values())Ju(t,n);return!0}function So(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Js("app","Firebase",tI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=YE;function Vf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ja,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=wf()),!t)throw en.create("no-options");const i=Ds.get(s);if(i){if(Dn(t,i.options)&&Dn(r,i.config))return i;throw en.create("duplicate-app",{appName:s})}const o=new cE(s);for(const l of Xa.values())o.addComponent(l);const c=new nI(t,r,o);return Ds.set(s,c),c}function Dc(n=Ja){const e=Ds.get(n);if(!e&&n===Ja&&wf())return Vf();if(!e)throw en.create("no-app",{appName:n});return e}function Xu(){return Array.from(Ds.values())}function lt(n,e,t){let r=ZE[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}Nn(new on(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="firebase-heartbeat-database",sI=1,Ns="firebase-heartbeat-store";let Ca=null;function Df(){return Ca||(Ca=vE(rI,sI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),Ca}async function iI(n){try{const t=(await Df()).transaction(Ns),r=await t.objectStore(Ns).get(Nf(n));return await t.done,r}catch(e){if(e instanceof _t)bt.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(t.message)}}}async function Yu(n,e){try{const r=(await Df()).transaction(Ns,"readwrite");await r.objectStore(Ns).put(e,Nf(n)),await r.done}catch(t){if(t instanceof _t)bt.warn(t.message);else{const r=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bt.warn(r.message)}}}function Nf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=1024,aI=30;class cI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>aI){const o=hI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zu(),{heartbeatsToSend:r,unsentEntries:s}=lI(this._heartbeatsCache.heartbeats),i=Xi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return bt.warn(t),""}}}function Zu(){return new Date().toISOString().substring(0,10)}function lI(n,e=oI){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),eh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class uI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cf()?Wy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function eh(n){return Xi(JSON.stringify({version:2,heartbeats:n})).length}function hI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(n){Nn(new on("platform-logger",e=>new bE(e),"PRIVATE")),Nn(new on("heartbeat",e=>new cI(e),"PRIVATE")),lt(Qa,Qu,n),lt(Qa,Qu,"esm2020"),lt("fire-js","")}dI("");function Of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fI=Of,Lf=new Js("auth","Firebase",Of());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new kc("@firebase/auth");function pI(n,...e){Yi.logLevel<=ee.WARN&&Yi.warn(`Auth (${Kn}): ${n}`,...e)}function Di(n,...e){Yi.logLevel<=ee.ERROR&&Yi.error(`Auth (${Kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw Nc(n,...e)}function ut(n,...e){return Nc(n,...e)}function Mf(n,e,t){const r={...fI(),[e]:t};return new Js("auth","Firebase",r).create(e,{appName:n.name})}function tn(n){return Mf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Lf.create(n,...e)}function K(n,e,...t){if(!n)throw Nc(e,...t)}function vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Di(e),new Error(e)}function At(n,e){n||vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function mI(){return th()==="http:"||th()==="https:"}function th(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mI()||$y()||"connection"in navigator)?navigator.onLine:!0}function _I(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=zy()||Gy()}get(){return gI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n,e){At(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],II=new Ys(3e4,6e4);function Wn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function hn(n,e,t,r,s={}){return Uf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Xs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return qy()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Gn(n.emulatorConfig.host)&&(u.credentials="include"),Ff.fetch()(await jf(n,n.config.apiHost,t,c),u)})}async function Uf(n,e,t){n._canInitEmulator=!1;const r={...yI,...e};try{const s=new TI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw bi(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mf(n,f,u);tt(n,f)}}catch(s){if(s instanceof _t)throw s;tt(n,"network-request-failed",{message:String(s)})}}async function Co(n,e,t,r,s={}){const i=await hn(n,e,t,r,s);return"mfaPendingCredential"in i&&tt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function jf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Oc(n.config,s):`${n.config.apiScheme}://${s}`;return EI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function vI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),II.get())})}}function bi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ut(n,e,r);return s.customData._tokenResponse=t,s}function nh(n){return n!==void 0&&n.enterprise!==void 0}class wI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bI(n,e){return hn(n,"GET","/v2/recaptchaConfig",Wn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(n,e){return hn(n,"POST","/v1/accounts:delete",e)}async function Zi(n,e){return hn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RI(n,e=!1){const t=Ue(n),r=await t.getIdToken(e),s=Lc(r);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ts(xa(s.auth_time)),issuedAtTime:Ts(xa(s.iat)),expirationTime:Ts(xa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xa(n){return Number(n)*1e3}function Lc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ef(t);return s?JSON.parse(s):(Di("Failed to decode base64 JWT payload"),null)}catch(s){return Di("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rh(n){const e=Lc(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&PI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function PI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Os(n,Zi(e,{idToken:t}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Bf(s.providerUserInfo):[],o=xI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Za(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function CI(n){const e=Ue(n);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(n,e){const t=await Uf(n,{},async()=>{const r=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await jf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Gn(n.emulatorConfig.host)&&(l.credentials="include"),Ff.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VI(n,e){return hn(n,"POST","/v2/accounts:revokeToken",Wn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=rh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await kI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new pr;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new SI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Za(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Os(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return RI(this,e)}reload(){return CI(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await Os(this,AI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:w,providerData:C,stsTokenManager:x}=t;K(p&&x,e,"internal-error");const R=pr.fromJSON(this.name,x);K(typeof p=="string",e,"internal-error"),Ut(r,e.name),Ut(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof w=="boolean",e,"internal-error"),Ut(i,e.name),Ut(o,e.name),Ut(c,e.name),Ut(l,e.name),Ut(u,e.name),Ut(f,e.name);const M=new Ze({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(M.providerData=C.map(N=>({...N}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,t,r=!1){const s=new pr;s.updateFromServerResponse(t);const i=new Ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await eo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new pr;c.updateFromIdToken(r);const l=new Ze({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Za(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map;function Tt(n){At(n instanceof Function,"Expected a class definition");let e=sh.get(n);return e?(At(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zf.type="NONE";const ih=zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n,e,t){return`firebase:${n}:${e}:${t}`}class mr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ni(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ni("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Zi(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mr(Tt(ih),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Tt(ih);const o=Ni(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await Zi(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ze._fromGetAccountInfoResponse(e,g,f)}else p=Ze._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new mr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new mr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hf(e))return"Blackberry";if(Qf(e))return"Webos";if($f(e))return"Safari";if((e.includes("chrome/")||Gf(e))&&!e.includes("edge/"))return"Chrome";if(Wf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qf(n=Ae()){return/firefox\//i.test(n)}function $f(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gf(n=Ae()){return/crios\//i.test(n)}function Kf(n=Ae()){return/iemobile/i.test(n)}function Wf(n=Ae()){return/android/i.test(n)}function Hf(n=Ae()){return/blackberry/i.test(n)}function Qf(n=Ae()){return/webos/i.test(n)}function Mc(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DI(n=Ae()){var e;return Mc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function NI(){return Ky()&&document.documentMode===10}function Jf(n=Ae()){return Mc(n)||Wf(n)||Qf(n)||Hf(n)||/windows phone/i.test(n)||Kf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e=[]){let t;switch(n){case"Browser":t=oh(Ae());break;case"Worker":t=`${oh(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(n,e={}){return hn(n,"GET","/v2/passwordPolicy",Wn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=6;class FI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??MI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new OI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zi(this,{idToken:e}),r=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(We(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(tn(this));const t=e?Ue(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LI(this),t=new FI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await VI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fr(n){return Ue(n)}class ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yy(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jI(n){xo=n}function Yf(n){return xo.loadJS(n)}function BI(){return xo.recaptchaEnterpriseScript}function zI(){return xo.gapiScript}function qI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $I{constructor(){this.enterprise=new GI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const KI="recaptcha-enterprise",Zf="NO_RECAPTCHA";class WI{constructor(e){this.type=KI,this.auth=Fr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{bI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new wI(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;nh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Zf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $I().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&nh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BI();l.length!==0&&(l+=c),Yf(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function ch(n,e,t,r=!1,s=!1){const i=new WI(n);let o;if(s)o=Zf;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function lh(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ch(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ch(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n,e){const t=So(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Dn(i,e??{}))return s;tt(s,"already-initialized")}return t.initialize({options:e})}function QI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JI(n,e,t){const r=Fr(n);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ep(e),{host:o,port:c}=XI(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Dn(u,r.config.emulator)&&Dn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Gn(o)?(Cc(`${i}//${o}${l}`),xc("Auth",!0)):YI()}function ep(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function XI(n){const e=ep(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:uh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:uh(o)}}}function uh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}async function ZI(n,e){return hn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(n,e){return Co(n,"POST","/v1/accounts:signInWithPassword",Wn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n,e){return Co(n,"POST","/v1/accounts:signInWithEmailLink",Wn(n,e))}async function nv(n,e){return Co(n,"POST","/v1/accounts:signInWithEmailLink",Wn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Fc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ls(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ls(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lh(e,t,"signInWithPassword",ev);case"emailLink":return tv(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lh(e,r,"signUpPassword",ZI);case"emailLink":return nv(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n,e){return Co(n,"POST","/v1/accounts:signInWithIdp",Wn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="http://localhost";class On extends Fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new On(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gr(e,t)}buildRequest(){const e={requestUri:rv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iv(n){const e=ps(ms(n)).link,t=e?ps(ms(e)).deep_link_id:null,r=ps(ms(n)).deep_link_id;return(r?ps(ms(r)).link:null)||r||t||e||n}class Uc{constructor(e){const t=ps(ms(e)),r=t.apiKey??null,s=t.oobCode??null,i=sv(t.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=iv(e);try{return new Uc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(e,t){return Ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Uc.parseLink(t);return K(r,"argument-error"),Ls._fromEmailAndCode(e,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Zs{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return On._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Kt.credential(t,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Zs{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Zs{constructor(){super("twitter.com")}static credential(e,t){return On._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ze._fromIdTokenResponse(e,r,s),o=hh(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hh(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends _t{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,to.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new to(e,t,r,s)}}function np(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(n,i,e,r):i})}async function ov(n,e,t=!1){const r=await Os(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(n,e,t=!1){const{auth:r}=n;if(We(r.app))return Promise.reject(tn(r));const s="reauthenticate";try{const i=await Os(n,np(r,s,e,n),t);K(i.idToken,r,"internal-error");const o=Lc(i.idToken);K(o,r,"internal-error");const{sub:c}=o;return K(n.uid===c,r,"user-mismatch"),vr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(n,e,t=!1){if(We(n.app))return Promise.reject(tn(n));const r="signIn",s=await np(n,r,e),i=await vr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function cv(n,e){return rp(Fr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(n){const e=Fr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uv(n,e,t){return We(n.app)?Promise.reject(tn(n)):cv(Ue(n),Ur.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lv(n),r})}function hv(n,e,t,r){return Ue(n).onIdTokenChanged(e,t,r)}function dv(n,e,t){return Ue(n).beforeAuthStateChanged(e,t)}function fv(n,e,t,r){return Ue(n).onAuthStateChanged(e,t,r)}function pv(n){return Ue(n).signOut()}const no="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(no,"1"),this.storage.removeItem(no),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=1e3,gv=10;class ip extends sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ip.type="LOCAL";const _v=ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}op.type="SESSION";const ap=op;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ko(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await yv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ko.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=jc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function Iv(n){ht().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function vv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function wv(){return cp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebaseLocalStorageDb",bv=1,ro="firebaseLocalStorage",up="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vo(n,e){return n.transaction([ro],e?"readwrite":"readonly").objectStore(ro)}function Av(){const n=indexedDB.deleteDatabase(lp);return new ei(n).toPromise()}function ec(){const n=indexedDB.open(lp,bv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ro,{keyPath:up})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ro)?e(r):(r.close(),await Av(),e(await ec()))})})}async function dh(n,e,t){const r=Vo(n,!0).put({[up]:e,value:t});return new ei(r).toPromise()}async function Rv(n,e){const t=Vo(n,!1).get(e),r=await new ei(t).toPromise();return r===void 0?null:r.value}function fh(n,e){const t=Vo(n,!0).delete(e);return new ei(t).toPromise()}const Pv=800,Sv=3;class hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Sv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ko._getInstance(wv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await vv(),!this.activeServiceWorker)return;this.sender=new Ev(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ec();return await dh(e,no,"1"),await fh(e,no),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Rv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vo(s,!1).getAll();return new ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hp.type="LOCAL";const Cv=hp;new Ys(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n,e){return e?Tt(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends Fc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kv(n){return rp(n.auth,new Bc(n),n.bypassAuthState)}function Vv(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),av(t,new Bc(n),n.bypassAuthState)}async function Dv(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),ov(t,new Bc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kv;case"linkViaPopup":case"linkViaRedirect":return Dv;case"reauthViaPopup":case"reauthViaRedirect":return Vv;default:tt(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new Ys(2e3,1e4);class fr extends dp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nv.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="pendingRedirect",Oi=new Map;class Lv extends dp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Oi.get(this.auth._key());if(!e){try{const r=await Mv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Oi.set(this.auth._key(),e)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mv(n,e){const t=jv(e),r=Uv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Fv(n,e){Oi.set(n._key(),e)}function Uv(n){return Tt(n._redirectPersistence)}function jv(n){return Ni(Ov,n.config.apiKey,n.name)}async function Bv(n,e,t=!1){if(We(n.app))return Promise.reject(tn(n));const r=Fr(n),s=xv(r,e),o=await new Lv(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=10*60*1e3;class qv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$v(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $v(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(n,e={}){return hn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wv=/^https?/;async function Hv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gv(n);for(const t of e)try{if(Qv(t))return}catch{}tt(n,"unauthorized-domain")}function Qv(n){const e=Ya(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Wv.test(t))return!1;if(Kv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Ys(3e4,6e4);function mh(){const n=ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xv(n){return new Promise((e,t)=>{var s,i,o;function r(){mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mh(),t(ut(n,"network-request-failed"))},timeout:Jv.get()})}if((i=(s=ht().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ht().gapi)!=null&&o.load)r();else{const c=qI("iframefcb");return ht()[c]=()=>{gapi.load?r():t(ut(n,"network-request-failed"))},Yf(`${zI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Li=null,e})}let Li=null;function Yv(n){return Li=Li||Xv(n),Li}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Ys(5e3,15e3),eT="__/auth/iframe",tT="emulator/auth/iframe",nT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sT(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Oc(e,tT):`https://${n.config.authDomain}/${eT}`,r={apiKey:e.apiKey,appName:n.name,v:Kn},s=rT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Xs(r).slice(1)}`}async function iT(n){const e=await Yv(n),t=ht().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:sT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ut(n,"network-request-failed"),c=ht().setTimeout(()=>{i(o)},Zv.get());function l(){ht().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aT=500,cT=600,lT="_blank",uT="http://localhost";class gh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hT(n,e,t,r=aT,s=cT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...oT,width:r.toString(),height:s.toString(),top:i,left:o},u=Ae().toLowerCase();t&&(c=Gf(u)?lT:t),qf(u)&&(e=e||uT,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[w,C])=>`${g}${w}=${C},`,"");if(DI(u)&&c!=="_self")return dT(e||"",c),new gh(null);const p=window.open(e||"",c,f);K(p,n,"popup-blocked");try{p.focus()}catch{}return new gh(p)}function dT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="__/auth/handler",pT="emulator/auth/handler",mT=encodeURIComponent("fac");async function _h(n,e,t,r,s,i){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Kn,eventId:s};if(e instanceof tp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Xy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Zs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),u=l?`#${mT}=${encodeURIComponent(l)}`:"";return`${gT(n)}?${Xs(c).slice(1)}${u}`}function gT({config:n}){return n.emulator?Oc(n,pT):`https://${n.authDomain}/${fT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class _T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ap,this._completeRedirectFn=Bv,this._overrideRedirectResult=Fv}async _openPopup(e,t,r,s){var o;At((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _h(e,t,r,Ya(),s);return hT(e,i,jc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _h(e,t,r,Ya(),s);return Iv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(At(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iT(e),r=new qv(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ka,{type:ka},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ka];i!==void 0&&t(!!i),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jf()||$f()||Mc()}}const yT=_T;var yh="@firebase/auth",Eh="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vT(n){Nn(new on("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xf(n)},u=new UI(r,s,i,l);return QI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new on("auth-internal",e=>{const t=Fr(e.getProvider("auth").getImmediate());return(r=>new ET(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(yh,Eh,IT(n)),lt(yh,Eh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=5*60,wT=bf("authIdTokenMaxAge")||TT;let Ih=null;const bT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wT)return;const s=t==null?void 0:t.token;Ih!==s&&(Ih=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AT(n=Dc()){const e=So(n,"auth");if(e.isInitialized())return e.getImmediate();const t=HI(n,{popupRedirectResolver:yT,persistence:[Cv,_v,ap]}),r=bf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bT(i.toString());dv(t,o,()=>o(t.currentUser)),hv(t,c=>o(c))}}const s=vf("auth");return s&&JI(t,`http://${s}`),t}function RT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}jI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ut("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",RT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vT("Browser");var vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,pp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.F=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(b,v,A){for(var y=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)y[Te-2]=arguments[Te];return _.prototype[v].apply(b,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,E){E||(E=0);const b=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)b[v]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(v=0;v<16;++v)b[v]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],v=I.g[2];let A=I.g[3],y;y=_+(A^E&(v^A))+b[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+b[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+b[2]+606105819&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+b[3]+3250441966&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(A^E&(v^A))+b[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+b[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+b[6]+2821735955&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+b[7]+4249261313&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(A^E&(v^A))+b[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+b[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+b[10]+4294925233&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+b[11]+2304563134&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(A^E&(v^A))+b[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(v^_&(E^v))+b[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=v+(E^A&(_^E))+b[14]+2792965006&4294967295,v=A+(y<<17&4294967295|y>>>15),y=E+(_^v&(A^_))+b[15]+1236535329&4294967295,E=v+(y<<22&4294967295|y>>>10),y=_+(v^A&(E^v))+b[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+b[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+b[11]+643717713&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+b[0]+3921069994&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(E^v))+b[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+b[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+b[15]+3634488961&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+b[4]+3889429448&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(E^v))+b[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+b[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+b[3]+4107603335&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+b[8]+1163531501&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(v^A&(E^v))+b[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^v&(_^E))+b[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=v+(_^E&(A^_))+b[7]+1735328473&4294967295,v=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(v^A))+b[12]+2368359562&4294967295,E=v+(y<<20&4294967295|y>>>12),y=_+(E^v^A)+b[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+b[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+b[11]+1839030562&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+b[14]+4259657740&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^A)+b[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+b[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+b[7]+4139469664&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+b[10]+3200236656&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^A)+b[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+b[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+b[3]+3572445317&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+b[6]+76029189&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(E^v^A)+b[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^v)+b[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=v+(A^_^E)+b[15]+530742520&4294967295,v=A+(y<<16&4294967295|y>>>16),y=E+(v^A^_)+b[2]+3299628645&4294967295,E=v+(y<<23&4294967295|y>>>9),y=_+(v^(E|~A))+b[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+b[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+b[14]+2878612391&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+b[5]+4237533241&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~A))+b[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+b[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+b[10]+4293915773&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+b[1]+2240044497&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~A))+b[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+b[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+b[6]+2734768916&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+b[13]+1309151649&4294967295,E=v+(y<<21&4294967295|y>>>11),y=_+(v^(E|~A))+b[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~v))+b[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=v+(_^(A|~E))+b[2]+718787259&4294967295,v=A+(y<<15&4294967295|y>>>17),y=E+(A^(v|~_))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.v=function(I,_){_===void 0&&(_=I.length);const E=_-this.blockSize,b=this.C;let v=this.h,A=0;for(;A<_;){if(v==0)for(;A<=E;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(b[v++]=I.charCodeAt(A++),v==this.blockSize){s(this,b),v=0;break}}else for(;A<_;)if(b[v++]=I[A++],v==this.blockSize){s(this,b),v=0;break}}this.h=v,this.o+=_},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,E=0;E<4;++E)for(let b=0;b<32;b+=8)I[_++]=this.g[E]>>>b&255;return I};function i(I,_){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function o(I,_){this.h=_;const E=[];let b=!0;for(let v=I.length-1;v>=0;v--){const A=I[v]|0;b&&A==_||(E[v]=A,b=!1)}this.g=E}var c={};function l(I){return-128<=I&&I<128?i(I,function(_){return new o([_|0],_<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return R(u(-I));const _=[];let E=1;for(let b=0;I>=E;b++)_[b]=I/E|0,E*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return R(f(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(_,8));let b=p;for(let A=0;A<I.length;A+=8){var v=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+v),_);v<8?(v=u(Math.pow(_,v)),b=b.j(v).add(u(y))):(b=b.j(E),b=b.add(u(y)))}return b}var p=l(0),g=l(1),w=l(16777216);n=o.prototype,n.m=function(){if(x(this))return-R(this).m();let I=0,_=1;for(let E=0;E<this.g.length;E++){const b=this.i(E);I+=(b>=0?b:4294967296+b)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(x(this))return"-"+R(this).toString(I);const _=u(Math.pow(I,6));var E=this;let b="";for(;;){const v=j(E,_).g;E=M(E,v.j(_));let A=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=v,C(E))return A+b;for(;A.length<6;)A="0"+A;b=A+b}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=M(this,I),x(I)?-1:C(I)?0:1};function R(I){const _=I.g.length,E=[];for(let b=0;b<_;b++)E[b]=~I.g[b];return new o(E,~I.h).add(g)}n.abs=function(){return x(this)?R(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),E=[];let b=0;for(let v=0;v<=_;v++){let A=b+(this.i(v)&65535)+(I.i(v)&65535),y=(A>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);b=y>>>16,A&=65535,y&=65535,E[v]=y<<16|A}return new o(E,E[E.length-1]&-2147483648?-1:0)};function M(I,_){return I.add(R(_))}n.j=function(I){if(C(this)||C(I))return p;if(x(this))return x(I)?R(this).j(R(I)):R(R(this).j(I));if(x(I))return R(this.j(R(I)));if(this.l(w)<0&&I.l(w)<0)return u(this.m()*I.m());const _=this.g.length+I.g.length,E=[];for(var b=0;b<2*_;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(let v=0;v<I.g.length;v++){const A=this.i(b)>>>16,y=this.i(b)&65535,Te=I.i(v)>>>16,nt=I.i(v)&65535;E[2*b+2*v]+=y*nt,N(E,2*b+2*v),E[2*b+2*v+1]+=A*nt,N(E,2*b+2*v+1),E[2*b+2*v+1]+=y*Te,N(E,2*b+2*v+1),E[2*b+2*v+2]+=A*Te,N(E,2*b+2*v+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new o(E,0)};function N(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function L(I,_){this.g=I,this.h=_}function j(I,_){if(C(_))throw Error("division by zero");if(C(I))return new L(p,p);if(x(I))return _=j(R(I),_),new L(R(_.g),R(_.h));if(x(_))return _=j(I,R(_)),new L(R(_.g),_.h);if(I.g.length>30){if(x(I)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,b=_;b.l(I)<=0;)E=G(E),b=G(b);var v=W(E,1),A=W(b,1);for(b=W(b,2),E=W(E,2);!C(b);){var y=A.add(b);y.l(I)<=0&&(v=v.add(E),A=y),b=W(b,1),E=W(E,1)}return _=M(I,v.j(_)),new L(v,_)}for(v=p;I.l(_)>=0;){for(E=Math.max(1,Math.floor(I.m()/_.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),A=u(E),y=A.j(_);x(y)||y.l(I)>0;)E-=b,A=u(E),y=A.j(_);C(A)&&(A=g),v=v.add(A),I=M(I,y)}return new L(v,I)}n.B=function(I){return j(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let b=0;b<_;b++)E[b]=this.i(b)&I.i(b);return new o(E,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let b=0;b<_;b++)E[b]=this.i(b)|I.i(b);return new o(E,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let b=0;b<_;b++)E[b]=this.i(b)^I.i(b);return new o(E,this.h^I.h)};function G(I){const _=I.g.length+1,E=[];for(let b=0;b<_;b++)E[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(E,I.h)}function W(I,_){const E=_>>5;_%=32;const b=I.g.length-E,v=[];for(let A=0;A<b;A++)v[A]=_>0?I.i(A+E)>>>_|I.i(A+E+1)<<32-_:I.i(A+E);return new o(v,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,pp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,nn=o}).apply(typeof vh<"u"?vh:typeof self<"u"?self:typeof window<"u"?window:{});var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mp,gs,gp,Mi,tc,_p,yp,Ep;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ai=="object"&&Ai];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in d))break e;d=d[S]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,S,k){for(var F=Array(arguments.length-2),X=2;X<arguments.length;X++)F[X-2]=arguments[X];return h.prototype[S].apply(m,F)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function C(a,h){for(let m=1;m<arguments.length;m++){const S=arguments[m];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=a.length||0;const k=S.length||0;a.length=d+k;for(let F=0;F<k;F++)a[d+F]=S[F]}else a.push(S)}}class x{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function R(a){o.setTimeout(()=>{throw a},0)}function M(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class N{constructor(){this.h=this.g=null}add(h,d){const m=L.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var L=new x(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let G,W=!1,I=new N,_=()=>{const a=Promise.resolve(void 0);G=()=>{a.then(E)}};function E(){for(var a;a=M();){try{a.h.call(a.g)}catch(d){R(d)}var h=L;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}W=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){v.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Te,v),Te.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nt="closure_listenable_"+(Math.random()*1e6|0),Xn=0;function li(a,h,d,m,S){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=S,this.key=++Xn,this.da=this.fa=!1}function Vt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function rt(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function ui(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Ke(a){const h={};for(const d in a)h[d]=a[d];return h}const Vl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dl(a,h){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)a[d]=m[d];for(let k=0;k<Vl.length;k++)d=Vl[k],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function hi(a){this.src=a,this.g={},this.h=0}hi.prototype.add=function(a,h,d,m,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const F=ta(a,h,m,S);return F>-1?(h=a[F],d||(h.fa=!1)):(h=new li(h,this.src,k,!!m,S),h.fa=d,a.push(h)),h};function ea(a,h){const d=h.type;if(d in a.g){var m=a.g[d],S=Array.prototype.indexOf.call(m,h,void 0),k;(k=S>=0)&&Array.prototype.splice.call(m,S,1),k&&(Vt(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ta(a,h,d,m){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==h&&k.capture==!!d&&k.ha==m)return S}return-1}var na="closure_lm_"+(Math.random()*1e6|0),ra={};function Nl(a,h,d,m,S){if(Array.isArray(h)){for(let k=0;k<h.length;k++)Nl(a,h[k],d,m,S);return null}return d=Ml(d),a&&a[nt]?a.J(h,d,c(m)?!!m.capture:!1,S):Kg(a,h,d,!1,m,S)}function Kg(a,h,d,m,S,k){if(!h)throw Error("Invalid event type");const F=c(S)?!!S.capture:!!S;let X=ia(a);if(X||(a[na]=X=new hi(a)),d=X.add(h,d,m,F,k),d.proxy)return d;if(m=Wg(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)A||(S=F),S===void 0&&(S=!1),a.addEventListener(h.toString(),m,S);else if(a.attachEvent)a.attachEvent(Ll(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Wg(){function a(d){return h.call(a.src,a.listener,d)}const h=Hg;return a}function Ol(a,h,d,m,S){if(Array.isArray(h))for(var k=0;k<h.length;k++)Ol(a,h[k],d,m,S);else m=c(m)?!!m.capture:!!m,d=Ml(d),a&&a[nt]?(a=a.i,k=String(h).toString(),k in a.g&&(h=a.g[k],d=ta(h,d,m,S),d>-1&&(Vt(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[k],a.h--)))):a&&(a=ia(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ta(h,d,m,S)),(d=a>-1?h[a]:null)&&sa(d))}function sa(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[nt])ea(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(Ll(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=ia(h))?(ea(d,a),d.h==0&&(d.src=null,h[na]=null)):Vt(a)}}}function Ll(a){return a in ra?ra[a]:ra[a]="on"+a}function Hg(a,h){if(a.da)a=!0;else{h=new Te(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&sa(a),a=d.call(m,h)}return a}function ia(a){return a=a[na],a instanceof hi?a:null}var oa="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ml(a){return typeof a=="function"?a:(a[oa]||(a[oa]=function(h){return a.handleEvent(h)}),a[oa])}function ke(){b.call(this),this.i=new hi(this),this.M=this,this.G=null}p(ke,b),ke.prototype[nt]=!0,ke.prototype.removeEventListener=function(a,h,d,m){Ol(this,a,h,d,m)};function Oe(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new v(h,a);else if(h instanceof v)h.target=h.target||a;else{var S=h;h=new v(m,a),Dl(h,S)}S=!0;let k,F;if(d)for(F=d.length-1;F>=0;F--)k=h.g=d[F],S=di(k,m,!0,h)&&S;if(k=h.g=a,S=di(k,m,!0,h)&&S,S=di(k,m,!1,h)&&S,d)for(F=0;F<d.length;F++)k=h.g=d[F],S=di(k,m,!1,h)&&S}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)Vt(d[m]);delete a.g[h],a.h--}}this.G=null},ke.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},ke.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function di(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let S=!0;for(let k=0;k<h.length;++k){const F=h[k];if(F&&!F.da&&F.capture==d){const X=F.listener,we=F.ha||F.src;F.fa&&ea(a.i,F),S=X.call(we,m)!==!1&&S}}return S&&!m.defaultPrevented}function Qg(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Fl(a){a.g=Qg(()=>{a.g=null,a.i&&(a.i=!1,Fl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jg extends b{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Fl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gr(a){b.call(this),this.h=a,this.g={}}p(Gr,b);var Ul=[];function jl(a){rt(a.g,function(h,d){this.g.hasOwnProperty(d)&&sa(h)},a),a.g={}}Gr.prototype.N=function(){Gr.Z.N.call(this),jl(this)},Gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=o.JSON.stringify,Xg=o.JSON.parse,Yg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bl(){}function zl(){}var Kr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ca(){v.call(this,"d")}p(ca,v);function la(){v.call(this,"c")}p(la,v);var pn={},ql=null;function fi(){return ql=ql||new ke}pn.Ia="serverreachability";function $l(a){v.call(this,pn.Ia,a)}p($l,v);function Wr(a){const h=fi();Oe(h,new $l(h))}pn.STAT_EVENT="statevent";function Gl(a,h){v.call(this,pn.STAT_EVENT,a),this.stat=h}p(Gl,v);function Le(a){const h=fi();Oe(h,new Gl(h,a))}pn.Ja="timingevent";function Kl(a,h){v.call(this,pn.Ja,a),this.size=h}p(Kl,v);function Hr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Qr(){this.g=!0}Qr.prototype.ua=function(){this.g=!1};function Zg(a,h,d,m,S,k){a.info(function(){if(a.g)if(k){var F="",X=k.split("&");for(let ue=0;ue<X.length;ue++){var we=X[ue].split("=");if(we.length>1){const Pe=we[0];we=we[1];const it=Pe.split("_");F=it.length>=2&&it[1]=="type"?F+(Pe+"="+we+"&"):F+(Pe+"=redacted&")}}}else F=null;else F=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+d+`
`+F})}function e_(a,h,d,m,S,k,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+d+`
`+k+" "+F})}function Yn(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+n_(a,d)+(m?" "+m:"")})}function t_(a,h){a.info(function(){return"TIMEOUT: "+h})}Qr.prototype.info=function(){};function n_(a,h){if(!a.g)return h;if(!h)return null;try{const k=JSON.parse(h);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let F=1;F<m.length;F++)m[F]=""}}}}return aa(k)}catch{return h}}var pi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hl;function ua(){}p(ua,Bl),ua.prototype.g=function(){return new XMLHttpRequest},Hl=new ua;function Jr(a){return encodeURIComponent(String(a))}function r_(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Dt(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new Gr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ql}function Ql(){this.i=null,this.g="",this.h=!1}var Jl={},ha={};function da(a,h,d){a.M=1,a.A=gi(st(h)),a.u=d,a.R=!0,Xl(a,null)}function Xl(a,h){a.F=Date.now(),mi(a),a.B=st(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),uu(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Ql,a.g=Su(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Jg(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Ul[0]=S.toString()),S=Ul);for(let k=0;k<S.length;k++){const F=Nl(d,S[k],m||h.handleEvent,!1,h.h||h);if(!F)break;h.g[F.key]=F}h=a.J?Ke(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Wr(),Zg(a.i,a.v,a.B,a.l,a.S,a.u)}Dt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Lt(a)==3?h.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{const X=Lt(this.g),we=this.g.ya(),ue=this.g.ca();if(!(X<3)&&(X!=3||this.g&&(this.h.h||this.g.la()||_u(this.g)))){this.K||X!=4||we==7||(we==8||ue<=0?Wr(3):Wr(2)),fa(this);var h=this.g.ca();this.X=h;var d=s_(this);if(this.o=h==200,e_(this.i,this.v,this.B,this.l,this.S,X,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var k=m;break t}}k=null}if(a=k)Yn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pa(this,a);else{this.o=!1,this.m=3,Le(12),mn(this),Xr(this);break e}}if(this.R){a=!0;let Pe;for(;!this.K&&this.C<d.length;)if(Pe=i_(this,d),Pe==ha){X==4&&(this.m=4,Le(14),a=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==Jl){this.m=4,Le(15),Yn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Yn(this.i,this.l,Pe,null),pa(this,Pe);if(Yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||d.length!=0||this.h.h||(this.m=1,Le(16),a=!1),this.o=this.o&&a,!a)Yn(this.i,this.l,d,"[Invalid Chunked Response]"),mn(this),Xr(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ta(F),F.P=!0,Le(11))}}else Yn(this.i,this.l,d,null),pa(this,d);X==4&&mn(this),this.o&&!this.K&&(X==4?bu(this.j,this):(this.o=!1,mi(this)))}else E_(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Le(12)):(this.m=0,Le(13)),mn(this),Xr(this)}}}catch{}finally{}};function s_(a){if(!Yl(a))return a.g.la();const h=_u(a.g);if(h==="")return"";let d="";const m=h.length,S=Lt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return mn(a),Xr(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<m;k++)a.h.h=!0,d+=a.h.i.decode(h[k],{stream:!(S&&k==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Yl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function i_(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?ha:(d=Number(h.substring(d,m)),isNaN(d)?Jl:(m+=1,m+d>h.length?ha:(h=h.slice(m,m+d),a.C=m+d,h)))}Dt.prototype.cancel=function(){this.K=!0,mn(this)};function mi(a){a.T=Date.now()+a.H,Zl(a,a.H)}function Zl(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hr(u(a.aa,a),h)}function fa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(t_(this.i,this.B),this.M!=2&&(Wr(),Le(17)),mn(this),this.m=2,Xr(this)):Zl(this,this.T-a)};function Xr(a){a.j.I==0||a.K||bu(a.j,a)}function mn(a){fa(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,jl(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function pa(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||ma(d.h,a))){if(!a.L&&ma(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)vi(d),Ei(d);else break e;va(d),Le(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Hr(u(d.Va,d),6e3));nu(d.h)<=1&&d.ta&&(d.ta=void 0)}else _n(d,11)}else if((a.L||d.g==a)&&vi(d),!y(h))for(S=d.Ba.g.parse(h),h=0;h<S.length;h++){let ue=S[h];const Pe=ue[0];if(!(Pe<=d.K))if(d.K=Pe,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const it=ue[3];it!=null&&(d.ka=it,d.j.info("VER="+d.ka));const yn=ue[4];yn!=null&&(d.za=yn,d.j.info("SVER="+d.za));const Mt=ue[5];Mt!=null&&typeof Mt=="number"&&Mt>0&&(m=1.5*Mt,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ft=a.g;if(Ft){const wi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wi){var k=m.h;k.g||wi.indexOf("spdy")==-1&&wi.indexOf("quic")==-1&&wi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ga(k,k.h),k.h=null))}if(m.G){const wa=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;wa&&(m.wa=wa,he(m.J,m.G,wa))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var F=a;if(m.na=Pu(m,m.L?m.ba:null,m.W),F.L){ru(m.h,F);var X=F,we=m.O;we&&(X.H=we),X.D&&(fa(X),mi(X)),m.g=F}else Tu(m);d.i.length>0&&Ii(d)}else ue[0]!="stop"&&ue[0]!="close"||_n(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?_n(d,7):Ia(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}Wr(4)}catch{}}var o_=class{constructor(a,h){this.g=a,this.map=h}};function eu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nu(a){return a.h?1:a.g?a.g.size:0}function ma(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ga(a,h){a.g?a.g.add(h):a.h=h}function ru(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}eu.prototype.cancel=function(){if(this.i=su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function su(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return w(a.i)}var iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function a_(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let S,k=null;m>=0?(S=a[d].substring(0,m),k=a[d].substring(m+1)):S=a[d],h(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Nt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Nt?(this.l=a.l,Yr(this,a.j),this.o=a.o,this.g=a.g,Zr(this,a.u),this.h=a.h,_a(this,hu(a.i)),this.m=a.m):a&&(h=String(a).match(iu))?(this.l=!1,Yr(this,h[1]||"",!0),this.o=es(h[2]||""),this.g=es(h[3]||"",!0),Zr(this,h[4]),this.h=es(h[5]||"",!0),_a(this,h[6]||"",!0),this.m=es(h[7]||"")):(this.l=!1,this.i=new ns(null,this.l))}Nt.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ts(h,ou,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ts(h,ou,!0),"@"),a.push(Jr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ts(d,d.charAt(0)=="/"?u_:l_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ts(d,d_)),a.join("")},Nt.prototype.resolve=function(a){const h=st(this);let d=!!a.j;d?Yr(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)Zr(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=h.h.lastIndexOf("/");S!=-1&&(m=h.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let F=0;F<S.length;){const X=S[F++];X=="."?m&&F==S.length&&k.push(""):X==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),m&&F==S.length&&k.push("")):(k.push(X),m=!0)}m=k.join("/")}else m=S}return d?h.h=m:d=a.i.toString()!=="",d?_a(h,hu(a.i)):d=!!a.m,d&&(h.m=a.m),h};function st(a){return new Nt(a)}function Yr(a,h,d){a.j=d?es(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zr(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function _a(a,h,d){h instanceof ns?(a.i=h,f_(a.i,a.l)):(d||(h=ts(h,h_)),a.i=new ns(h,a.l))}function he(a,h,d){a.i.set(h,d)}function gi(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function es(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ts(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,c_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function c_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ou=/[#\/\?@]/g,l_=/[#\?:]/g,u_=/[#\?]/g,h_=/[#\?@]/g,d_=/#/g;function ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function gn(a){a.g||(a.g=new Map,a.h=0,a.i&&a_(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=ns.prototype,n.add=function(a,h){gn(this),this.i=null,a=Zn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function au(a,h){gn(a),h=Zn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cu(a,h){return gn(a),h=Zn(a,h),a.g.has(h)}n.forEach=function(a,h){gn(this),this.g.forEach(function(d,m){d.forEach(function(S){a.call(h,S,m,this)},this)},this)};function lu(a,h){gn(a);let d=[];if(typeof h=="string")cu(a,h)&&(d=d.concat(a.g.get(Zn(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}n.set=function(a,h){return gn(this),this.i=null,a=Zn(this,a),cu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=lu(this,a),a.length>0?String(a[0]):h):h};function uu(a,h,d){au(a,h),d.length>0&&(a.i=null,a.g.set(Zn(a,h),w(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const S=Jr(d);d=lu(this,d);for(let k=0;k<d.length;k++){let F=S;d[k]!==""&&(F+="="+Jr(d[k])),a.push(F)}}return this.i=a.join("&")};function hu(a){const h=new ns;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Zn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function f_(a,h){h&&!a.j&&(gn(a),a.i=null,a.g.forEach(function(d,m){const S=m.toLowerCase();m!=S&&(au(this,m),uu(this,S,d))},a)),a.j=h}function p_(a,h){const d=new Qr;if(o.Image){const m=new Image;m.onload=f(Ot,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Ot,d,"TestLoadImage: error",!1,h,m),m.onabort=f(Ot,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Ot,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function m_(a,h){const d=new Qr,m=new AbortController,S=setTimeout(()=>{m.abort(),Ot(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?Ot(d,"TestPingServer: ok",!0,h):Ot(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Ot(d,"TestPingServer: error",!1,h)})}function Ot(a,h,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function g_(){this.g=new Yg}function ya(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ya,Bl),ya.prototype.g=function(){return new _i(this.i,this.h)};function _i(a,h){ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(_i,ke),n=_i.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ss(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ss(this)),this.g&&(this.readyState=3,ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;du(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function du(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?rs(this):ss(this),this.readyState==3&&du(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,rs(this))},n.Na=function(a){this.g&&(this.response=a,rs(this))},n.ga=function(){this.g&&rs(this)};function rs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ss(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fu(a){let h="";return rt(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Ea(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=fu(d),typeof a=="string"?d!=null&&Jr(d):he(a,h,d))}function _e(a){ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(_e,ke);var __=/^https?$/i,y_=["POST","PUT"];n=_e.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hl.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){pu(this,k);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(y_,h,void 0)>=0)||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,F]of d)this.g.setRequestHeader(k,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){pu(this,k)}};function pu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,mu(a),yi(a)}function mu(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Oe(this,"complete"),Oe(this,"abort"),yi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),_e.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?gu(this):this.Xa())},n.Xa=function(){gu(this)};function gu(a){if(a.h&&typeof i<"u"){if(a.v&&Lt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Oe(a,"readystatechange"),Lt(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=k===0){let F=String(a.D).match(iu)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),m=!__.test(F?F.toLowerCase():"")}d=m}if(d)Oe(a,"complete"),Oe(a,"success");else{a.o=6;try{var S=Lt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",mu(a)}}finally{yi(a)}}}}function yi(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||Oe(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Lt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Lt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xg(h)}};function _u(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function E_(a){const h={};a=(a.g&&Lt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=r_(a[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=h[S]||[];h[S]=k,k.push(d)}ui(h,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function yu(a){this.za=0,this.i=[],this.j=new Qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=is("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=is("baseRetryDelayMs",5e3,a),this.Za=is("retryDelaySeedMs",1e4,a),this.Ta=is("forwardChannelMaxRetries",2,a),this.va=is("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new eu(a&&a.concurrentRequestLimit),this.Ba=new g_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=yu.prototype,n.ka=8,n.I=1,n.connect=function(a,h,d,m){Le(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Pu(this,null,this.W),Ii(this)};function Ia(a){if(Eu(a),a.I==3){var h=a.V++,d=st(a.J);if(he(d,"SID",a.M),he(d,"RID",h),he(d,"TYPE","terminate"),os(a,d),h=new Dt(a,a.j,h),h.M=2,h.A=gi(st(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Su(h.j,null),h.g.ea(h.A)),h.F=Date.now(),mi(h)}Ru(a)}function Ei(a){a.g&&(Ta(a),a.g.cancel(),a.g=null)}function Eu(a){Ei(a),a.v&&(o.clearTimeout(a.v),a.v=null),vi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ii(a){if(!tu(a.h)&&!a.m){a.m=!0;var h=a.Ea;G||_(),W||(G(),W=!0),I.add(h,a),a.D=0}}function I_(a,h){return nu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hr(u(a.Ea,a,h),Au(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Dt(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Ke(k),Dl(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=vu(this,S,h),d=st(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),os(this,d),k&&(this.R?h="headers="+Jr(fu(k))+"&"+h:this.u&&Ea(d,this.u,k)),ga(this.h,S),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",h),he(d,"SID","null"),S.U=!0,da(S,d,null)):da(S,d,h),this.I=2}}else this.I==3&&(a?Iu(this,a):this.i.length==0||tu(this.h)||Iu(this))};function Iu(a,h){var d;h?d=h.l:d=a.V++;const m=st(a.J);he(m,"SID",a.M),he(m,"RID",d),he(m,"AID",a.K),os(a,m),a.u&&a.o&&Ea(m,a.u,a.o),d=new Dt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=vu(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ga(a.h,d),da(d,m,h)}function os(a,h){a.H&&rt(a.H,function(d,m){he(h,m,d)}),a.l&&rt({},function(d,m){he(h,m,d)})}function vu(a,h,d){d=Math.min(a.i.length,d);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var S=a.i;let X=-1;for(;;){const we=["count="+d];X==-1?d>0?(X=S[0].g,we.push("ofs="+X)):X=0:we.push("ofs="+X);let ue=!0;for(let Pe=0;Pe<d;Pe++){var k=S[Pe].g;const it=S[Pe].map;if(k-=X,k<0)X=Math.max(0,S[Pe].g-100),ue=!1;else try{k="req"+k+"_"||"";try{var F=it instanceof Map?it:Object.entries(it);for(const[yn,Mt]of F){let Ft=Mt;c(Mt)&&(Ft=aa(Mt)),we.push(k+yn+"="+encodeURIComponent(Ft))}}catch(yn){throw we.push(k+"type="+encodeURIComponent("_badmap")),yn}}catch{m&&m(it)}}if(ue){F=we.join("&");break e}}F=void 0}return a=a.i.splice(0,d),h.G=a,F}function Tu(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;G||_(),W||(G(),W=!0),I.add(h,a),a.A=0}}function va(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hr(u(a.Da,a),Au(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,wu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hr(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Le(10),Ei(this),wu(this))};function Ta(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function wu(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=st(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),os(a,h),a.u&&a.o&&Ea(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=gi(st(h)),d.u=null,d.R=!0,Xl(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Ei(this),va(this),Le(19))};function vi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function bu(a,h){var d=null;if(a.g==h){vi(a),Ta(a),a.g=null;var m=2}else if(ma(a.h,h))d=h.G,ru(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var S=a.D;m=fi(),Oe(m,new Kl(m,d)),Ii(a)}else Tu(a);else if(S=h.m,S==3||S==0&&h.X>0||!(m==1&&I_(a,h)||m==2&&va(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),S){case 1:_n(a,5);break;case 4:_n(a,10);break;case 3:_n(a,6);break;default:_n(a,2)}}}function Au(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function _n(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),m=a.Ua;const S=!m;m=new Nt(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Yr(m,"https"),gi(m),S?p_(m.toString(),d):m_(m.toString(),d)}else Le(2);a.I=0,a.l&&a.l.pa(h),Ru(a),Eu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Ru(a){if(a.I=0,a.ja=[],a.l){const h=su(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Pu(a,h,d){var m=d instanceof Nt?st(d):new Nt(d);if(m.g!="")h&&(m.g=h+"."+m.g),Zr(m,m.u);else{var S=o.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;const k=new Nt(null);m&&Yr(k,m),h&&(k.g=h),S&&Zr(k,S),d&&(k.h=d),m=k}return d=a.G,h=a.wa,d&&h&&he(m,d,h),he(m,"VER",a.ka),os(a,m),m}function Su(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new _e(new ya({ab:d})):new _e(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}n=Cu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ti(){}Ti.prototype.g=function(a,h){return new ze(a,h)};function ze(a,h){ke.call(this),this.g=new yu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new er(this)}p(ze,ke),ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){Ia(this.g)},ze.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=aa(a),a=d);h.i.push(new o_(h.Ya++,a)),h.I==3&&Ii(h)},ze.prototype.N=function(){this.g.l=null,delete this.j,Ia(this.g),delete this.g,ze.Z.N.call(this)};function xu(a){ca.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(xu,ca);function ku(){la.call(this),this.status=1}p(ku,la);function er(a){this.g=a}p(er,Cu),er.prototype.ra=function(){Oe(this.g,"a")},er.prototype.qa=function(a){Oe(this.g,new xu(a))},er.prototype.pa=function(a){Oe(this.g,new ku)},er.prototype.oa=function(){Oe(this.g,"b")},Ti.prototype.createWebChannel=Ti.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Ep=function(){return new Ti},yp=function(){return fi()},_p=pn,tc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Mi=pi,Wl.COMPLETE="complete",gp=Wl,zl.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",ke.prototype.listen=ke.prototype.J,gs=zl,_e.prototype.listenOnce=_e.prototype.K,_e.prototype.getLastError=_e.prototype.Ha,_e.prototype.getLastErrorCode=_e.prototype.ya,_e.prototype.getStatus=_e.prototype.ca,_e.prototype.getResponseJson=_e.prototype.La,_e.prototype.getResponseText=_e.prototype.la,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Fa,mp=_e}).apply(typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{});const Th="@firebase/firestore",wh="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new kc("@firebase/firestore");function cr(){return Ln.logLevel}function O(n,...e){if(Ln.logLevel<=ee.DEBUG){const t=e.map(zc);Ln.debug(`Firestore (${jr}): ${n}`,...t)}}function Me(n,...e){if(Ln.logLevel<=ee.ERROR){const t=e.map(zc);Ln.error(`Firestore (${jr}): ${n}`,...t)}}function Mn(n,...e){if(Ln.logLevel<=ee.WARN){const t=e.map(zc);Ln.warn(`Firestore (${jr}): ${n}`,...t)}}function zc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ip(n,r,t)}function Ip(n,e,t){let r=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Me(r),new Error(r)}function q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ip(e,s,r)}function Q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class ST{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class CT{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string",31837,{l:r}),new vp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new Ce(e)}}class xT{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new xT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new bh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=DT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function nc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Va(s)===Va(i)?H(s,i):Va(s)?1:-1}return H(n.length,e.length)}const NT=55296,OT=57343;function Va(n){const e=n.charCodeAt(0);return e>=NT&&e<=OT}function Tr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Tp(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="__name__";class ot{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ot.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const r=ot.isNumericId(e),s=ot.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ot.extractNumericId(e).compare(ot.extractNumericId(t)):nc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class oe extends ot{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const LT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends ot{construct(e,t,r){return new me(e,t,r)}static isValidIdentifier(e){return LT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ah}static keyField(){return new me([Ah])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(oe.fromString(e))}static fromName(e){return new U(oe.fromString(e).popFirst(5))}static empty(){return new U(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e,t){if(!t)throw new B(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function MT(n,e,t,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Rh(n){if(!U.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ph(n){if(U.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $c(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function Rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$c(n);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function ti(n,e){if(!bp(n))throw new B(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=-62135596800,Ch=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ch);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sh)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ch}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ti(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:Ie("string",ae._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new ae(0,0))}static max(){return new $(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=-1;class so{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function rc(n){return n.fields.find(e=>e.kind===2)}function vn(n){return n.fields.filter(e=>e.kind!==2)}so.UNKNOWN_ID=-1;class Fi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Fs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Fs(0,Ge.min())}}function FT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Ge(s,U.empty(),e)}function Ap(n){return new Ge(n.readTime,n.key,Ms)}class Ge{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ge($.min(),U.empty(),Ms)}static max(){return new Ge($.max(),U.empty(),Ms)}}function Gc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Rp)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="SimpleDb";class Do{static open(e,t,r,s){try{return new Do(t,e.transaction(s,r))}catch(i){throw new ws(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new dt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ws(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=Kc(r.target.error);this.S.reject(new ws(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(O(qe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new jT(t)}}class rn{static delete(e){return O(qe,"Removing database:",e),wn(If().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Cf())return!1;if(rn.F())return!0;const e=Ae(),t=rn.M(e),r=0<t&&t<10,s=Sp(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,rn.M(Ae())===12.2&&Me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(O(qe,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ws(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new B(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ws(e,o))},s.onupgradeneeded=i=>{O(qe,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{O(qe,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=Do.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next(u=>(c.C(),u)).catch(u=>(c.abort(u),P.reject(u))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(O(qe,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Sp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class UT{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return wn(this.U.delete())}}class ws extends B{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function dn(n){return n.name==="IndexedDbTransactionError"}class jT{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(O(qe,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(O(qe,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),wn(r)}add(e){return O(qe,"ADD",this.store.name,e,e),wn(this.store.add(e))}get(e){return wn(this.store.get(e)).next(t=>(t===void 0&&(t=null),O(qe,"GET",this.store.name,e,t),t))}delete(e){return O(qe,"DELETE",this.store.name,e),wn(this.store.delete(e))}count(){return O(qe,"COUNT",this.store.name),wn(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.H(i,(c,l)=>{o.push(l)}).next(()=>o)}}Y(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Z(e,t){O(qe,"DELETE ALL",this.store.name);const r=this.options(e,t);r.X=!1;const s=this.cursor(r);return this.H(s,(i,o,c)=>c.delete())}ee(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.H(s,t)}te(e){const t=this.cursor({});return new P((r,s)=>{t.onerror=i=>{const o=Kc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}H(e,t){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new UT(c),u=t(c.primaryKey,c.value,l);if(u instanceof P){const f=u.catch(p=>(l.done(),P.reject(p)));r.push(f)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}}).next(()=>P.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function wn(n){return new P((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Kc(r.target.error);t(s)}})}let xh=!1;function Kc(n){const e=rn.M(Ae());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xh||(xh=!0,setTimeout(()=>{throw r},0)),r}}return n}const bs="IndexBackfiller";class BT{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){O(bs,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ne.ie();O(bs,`Documents written: ${t}`)}catch(t){dn(t)?O(bs,"Ignoring IndexedDB error during index backfill: ",t):await Hn(t)}await this.re(6e4)})}}class zT{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){const r=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return O(bs,`Processing collection: ${o}`),this.oe(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(s,i)).next(c=>(O(bs,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}_e(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Ap(i);Gc(o,r)>0&&(r=o)}),new Ge(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qe.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=-1;function No(n){return n==null}function Us(n){return n===0&&1/n==-1/0}function qT(n){return typeof n=="number"&&Number.isInteger(n)&&!Us(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="";function Ne(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kh(e)),e=$T(n.get(t),e);return kh(e)}function $T(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case io:t+="";break;default:t+=i}}return t}function kh(n){return n+io+""}function at(n){const e=n.length;if(q(e>=2,64408,{path:n}),e===2)return q(n.charAt(0)===io&&n.charAt(1)==="",56145,{path:n}),oe.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(io,i);switch((o<0||o>t)&&z(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:z(61167,{path:n})}i=o+2}return new oe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="remoteDocuments",ni="owner",tr="owner",js="mutationQueues",GT="userId",Ye="mutations",Vh="batchId",Sn="userMutationsIndex",Dh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n,e){return[n,Ne(e)]}function Cp(n,e,t){return[n,Ne(e),t]}const KT={},wr="documentMutations",oo="remoteDocumentsV14",WT=["prefixPath","collectionGroup","readTime","documentId"],ji="documentKeyIndex",HT=["prefixPath","collectionGroup","documentId"],xp="collectionGroupIndex",QT=["collectionGroup","readTime","prefixPath","documentId"],Bs="remoteDocumentGlobal",sc="remoteDocumentGlobalKey",br="targets",kp="queryTargetsIndex",JT=["canonicalId","targetId"],Ar="targetDocuments",XT=["targetId","path"],Wc="documentTargetsIndex",YT=["path","targetId"],ao="targetGlobalKey",xn="targetGlobal",zs="collectionParents",ZT=["collectionId","parent"],Rr="clientMetadata",ew="clientId",Oo="bundles",tw="bundleId",Lo="namedQueries",nw="name",Hc="indexConfiguration",rw="indexId",ic="collectionGroupIndex",sw="collectionGroup",As="indexState",iw=["indexId","uid"],Vp="sequenceNumberIndex",ow=["uid","sequenceNumber"],Rs="indexEntries",aw=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Dp="documentKeyIndex",cw=["indexId","uid","orderedDocumentKey"],Mo="documentOverlays",lw=["userId","collectionPath","documentId"],oc="collectionPathOverlayIndex",uw=["userId","collectionPath","largestBatchId"],Np="collectionGroupOverlayIndex",hw=["userId","collectionGroup","largestBatchId"],Qc="globals",dw="name",Op=[js,Ye,wr,Tn,br,ni,xn,Ar,Rr,Bs,zs,Oo,Lo],fw=[...Op,Mo],Lp=[js,Ye,wr,oo,br,ni,xn,Ar,Rr,Bs,zs,Oo,Lo,Mo],Mp=Lp,Jc=[...Mp,Hc,As,Rs],pw=Jc,Fp=[...Jc,Qc],mw=Fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends Pp{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Re(n,e){const t=Q(n);return rn.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Up(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ri(this.root,e,this.comparator,!0)}}class Ri{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??xe.RED,this.left=s??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Oh(this.data.getIterator())}getIteratorFrom(e){return new Oh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Oh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function nr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new Je([])}unionWith(e){let t=new ce(me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jp("Invalid base64 string: "+i):i}}(e);return new ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const gw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(q(!!n,39018),typeof n=="string"){let e=0;const t=gw.exec(n);if(q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function St(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="server_timestamp",zp="__type__",qp="__previous_value__",$p="__local_write_time__";function Xc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zp])==null?void 0:r.stringValue)===Bp}function Fo(n){const e=n.mapValue.fields[qp];return Xc(e)?Fo(e):e}function qs(n){const e=Pt(n.mapValue.fields[$p].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const co="(default)";class Fn{constructor(e,t){this.projectId=e,this.database=t||co}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database===co}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="__type__",Gp="__max__",Xt={mapValue:{fields:{__type__:{stringValue:Gp}}}},Zc="__vector__",Pr="value",Bi={nullValue:"NULL_VALUE"};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xc(n)?4:Kp(n)?9007199254740991:Uo(n)?10:11:z(28295,{value:n})}function mt(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qs(n).isEqual(qs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Pt(s.timestampValue),c=Pt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return St(s.bytesValue).isEqual(St(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return fe(s.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return fe(s.integerValue)===fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=fe(s.doubleValue),c=fe(i.doubleValue);return o===c?Us(o)===Us(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Tr(n.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Nh(o)!==Nh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!mt(o[l],c[l])))return!1;return!0}(n,e);default:return z(52216,{left:n})}}function $s(n,e){return(n.values||[]).find(t=>mt(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=an(n),r=an(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=fe(i.integerValue||i.doubleValue),l=fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Lh(n.timestampValue,e.timestampValue);case 4:return Lh(qs(n),qs(e));case 5:return nc(n.stringValue,e.stringValue);case 6:return function(i,o){const c=St(i),l=St(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=H(c[u],l[u]);if(f!==0)return f}return H(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=H(fe(i.latitude),fe(o.latitude));return c!==0?c:H(fe(i.longitude),fe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var g,w,C,x;const c=i.fields||{},l=o.fields||{},u=(g=c[Pr])==null?void 0:g.arrayValue,f=(w=l[Pr])==null?void 0:w.arrayValue,p=H(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:Mh(u,f)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xt.mapValue&&o===Xt.mapValue)return 0;if(i===Xt.mapValue)return 1;if(o===Xt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=nc(l[p],f[p]);if(g!==0)return g;const w=cn(c[l[p]],u[f[p]]);if(w!==0)return w}return H(l.length,f.length)}(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function Lh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Pt(n),r=Pt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function Mh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cn(t[s],r[s]);if(i)return i}return H(t.length,r.length)}function Sr(n){return cc(n)}function cc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Pt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return St(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=cc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${cc(t.fields[o])}`;return s+"}"}(n.mapValue):z(61005,{value:n})}function zi(n){switch(an(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fo(n);return e?16+zi(e):16;case 5:return 2*n.stringValue.length;case 6:return St(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Qn(r.fields,(i,o)=>{s+=i.length+zi(o)}),s}(n.mapValue);default:throw z(13486,{value:n})}}function el(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function lc(n){return!!n&&"integerValue"in n}function Gs(n){return!!n&&"arrayValue"in n}function Fh(n){return!!n&&"nullValue"in n}function Uh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qi(n){return!!n&&"mapValue"in n}function Uo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yc])==null?void 0:r.stringValue)===Zc}function Ps(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Qn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ps(n.arrayValue.values[t]);return e}return{...n}}function Kp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Gp}const Wp={mapValue:{fields:{[Yc]:{stringValue:Zc},[Pr]:{arrayValue:{}}}}};function yw(n){return"nullValue"in n?Bi:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?el(Fn.empty(),U.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Uo(n)?Wp:{mapValue:{}}:z(35942,{value:n})}function Ew(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?el(Fn.empty(),U.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Wp:"mapValue"in n?Uo(n)?{mapValue:{}}:Xt:z(61959,{value:n})}function jh(n,e){const t=cn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Bh(n,e){const t=cn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(t)}setAll(e){let t=me.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ps(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];qi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Qn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new je(Ps(this.value))}}function Hp(n){const e=[];return Qn(n.fields,(t,r)=>{const s=new me([t]);if(qi(r)){const i=Hp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ye(e,0,$.min(),$.min(),$.min(),je.empty(),0)}static newFoundDocument(e,t,r,s){return new ye(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new ye(e,2,t,$.min(),$.min(),je.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,$.min(),$.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.position=e,this.inclusive=t}}function zh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),t.key):r=cn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Iw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{}class te extends Qp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vw(e,t,r):t==="array-contains"?new bw(e,r):t==="in"?new tm(e,r):t==="not-in"?new Aw(e,r):t==="array-contains-any"?new Rw(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Tw(e,r):new ww(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends Qp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new le(e,t)}matches(e){return xr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xr(n){return n.op==="and"}function uc(n){return n.op==="or"}function tl(n){return Jp(n)&&xr(n)}function Jp(n){for(const e of n.filters)if(e instanceof le)return!1;return!0}function hc(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+Sr(n.value);if(tl(n))return n.filters.map(e=>hc(e)).join(",");{const e=n.filters.map(t=>hc(t)).join(",");return`${n.op}(${e})`}}function Xp(n,e){return n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&mt(r.value,s.value)}(n,e):n instanceof le?function(r,s){return s instanceof le&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Xp(o,s.filters[c]),!0):!1}(n,e):void z(19439)}function Yp(n,e){const t=n.filters.concat(e);return le.create(t,n.op)}function Zp(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Sr(t.value)}`}(n):n instanceof le?function(t){return t.op.toString()+" {"+t.getFilters().map(Zp).join(" ,")+"}"}(n):"Filter"}class vw extends te{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Tw extends te{constructor(e,t){super(e,"in",t),this.keys=em("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ww extends te{constructor(e,t){super(e,"not-in",t),this.keys=em("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function em(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class bw extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gs(t)&&$s(t.arrayValue,this.value)}}class tm extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$s(this.value.arrayValue,t)}}class Aw extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$s(this.value.arrayValue,t)}}class Rw extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$s(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function dc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Pw(n,e,t,r,s,i,o)}function Un(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>hc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),No(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Sr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Sr(r)).join(",")),e.Te=t}return e.Te}function ri(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Iw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Xp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!qh(n.startAt,e.startAt)&&qh(n.endAt,e.endAt)}function uo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ho(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function $h(n,e,t){let r=Bi,s=!0;for(const i of ho(n,e)){let o=Bi,c=!0;switch(i.op){case"<":case"<=":o=yw(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Bi}jh({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];jh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Gh(n,e,t){let r=Xt,s=!0;for(const i of ho(n,e)){let o=Xt,c=!0;switch(i.op){case">=":case">":o=Ew(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Xt}Bh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Bh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Sw(n,e,t,r,s,i,o,c){return new jo(n,e,t,r,s,i,o,c)}function Bo(n){return new jo(n)}function Kh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cw(n){return n.collectionGroup!==null}function Ss(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ce(me.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new lo(i,r))}),t.has(me.keyField().canonicalString())||e.Ie.push(new lo(me.keyField(),r))}return e.Ie}function Xe(n){const e=Q(n);return e.Ee||(e.Ee=xw(e,Ss(n))),e.Ee}function xw(n,e){if(n.limitType==="F")return dc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new lo(s.field,i)});const t=n.endAt?new Cr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Cr(n.startAt.position,n.startAt.inclusive):null;return dc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function fc(n,e,t){return new jo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zo(n,e){return ri(Xe(n),Xe(e))&&n.limitType===e.limitType}function nm(n){return`${Un(Xe(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Zp(s)).join(", ")}]`),No(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Sr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Sr(s)).join(",")),`Target(${r})`}(Xe(n))}; limitType=${n.limitType})`}function si(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=zh(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ss(r),s)||r.endAt&&!function(o,c,l){const u=zh(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ss(r),s))}(n,e)}function kw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rm(n){return(e,t)=>{let r=!1;for(const s of Ss(n)){const i=Vw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Vw(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?cn(l,u):z(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Up(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new pe(U.comparator);function $e(){return Dw}const sm=new pe(U.comparator);function _s(...n){let e=sm;for(const t of n)e=e.insert(t.key,t);return e}function im(n){let e=sm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ct(){return Cs()}function om(){return Cs()}function Cs(){return new kt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Nw=new pe(U.comparator),Ow=new ce(U.comparator);function Y(...n){let e=Ow;for(const t of n)e=e.add(t);return e}const Lw=new ce(H);function Mw(){return Lw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(e)?"-0":e}}function am(n){return{integerValue:""+n}}function Fw(n,e){return qT(e)?am(e):nl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this._=void 0}}function Uw(n,e,t){return n instanceof kr?function(s,i){const o={fields:{[zp]:{stringValue:Bp},[$p]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xc(i)&&(i=Fo(i)),i&&(o.fields[qp]=i),{mapValue:o}}(t,e):n instanceof Vr?lm(n,e):n instanceof Dr?um(n,e):function(s,i){const o=cm(s,i),c=Wh(o)+Wh(s.Ae);return lc(o)&&lc(s.Ae)?am(c):nl(s.serializer,c)}(n,e)}function jw(n,e,t){return n instanceof Vr?lm(n,e):n instanceof Dr?um(n,e):t}function cm(n,e){return n instanceof Ks?function(r){return lc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class kr extends qo{}class Vr extends qo{constructor(e){super(),this.elements=e}}function lm(n,e){const t=hm(e);for(const r of n.elements)t.some(s=>mt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Dr extends qo{constructor(e){super(),this.elements=e}}function um(n,e){let t=hm(e);for(const r of n.elements)t=t.filter(s=>!mt(s,r));return{arrayValue:{values:t}}}class Ks extends qo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wh(n){return fe(n.integerValue||n.doubleValue)}function hm(n){return Gs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,t){this.field=e,this.transform=t}}function Bw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Vr&&s instanceof Vr||r instanceof Dr&&s instanceof Dr?Tr(r.elements,s.elements,mt):r instanceof Ks&&s instanceof Ks?mt(r.Ae,s.Ae):r instanceof kr&&s instanceof kr}(n.transform,e.transform)}class zw{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $i(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $o{}function fm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rl(n.key,Be.none()):new Br(n.key,n.data,Be.none());{const t=n.data,r=je.empty();let s=new ce(me.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new fn(n.key,r,new Je(s.toArray()),Be.none())}}function qw(n,e,t){n instanceof Br?function(s,i,o){const c=s.value.clone(),l=Qh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof fn?function(s,i,o){if(!$i(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Qh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(pm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function xs(n,e,t,r){return n instanceof Br?function(i,o,c,l){if(!$i(i.precondition,o))return c;const u=i.value.clone(),f=Jh(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof fn?function(i,o,c,l){if(!$i(i.precondition,o))return c;const u=Jh(i.fieldTransforms,l,o),f=o.data;return f.setAll(pm(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return $i(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function $w(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=cm(r.transform,s||null);i!=null&&(t===null&&(t=je.empty()),t.set(r.field,i))}return t||null}function Hh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Tr(r,s,(i,o)=>Bw(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Br extends $o{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fn extends $o{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qh(n,e,t){const r=new Map;q(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,jw(o,c,t[s]))}return r}function Jh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,Uw(i,o,e))}return r}class rl extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mm extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=om();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=fm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(t,r)=>Hh(t,r))&&Tr(this.baseMutations,e.baseMutations,(t,r)=>Hh(t,r))}}class il{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Nw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new il(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,ne;function Kw(n){switch(n){case D.OK:return z(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function gm(n){if(n===void 0)return Me("GRPC error has no .code"),D.UNKNOWN;switch(n){case Ee.OK:return D.OK;case Ee.CANCELLED:return D.CANCELLED;case Ee.UNKNOWN:return D.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return D.INTERNAL;case Ee.UNAVAILABLE:return D.UNAVAILABLE;case Ee.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ee.NOT_FOUND:return D.NOT_FOUND;case Ee.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ee.ABORTED:return D.ABORTED;case Ee.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ee.DATA_LOSS:return D.DATA_LOSS;default:return z(39323,{code:n})}}(ne=Ee||(Ee={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new nn([4294967295,4294967295],0);function Xh(n){const e=Ww().encode(n),t=new pp;return t.update(e),new Uint8Array(t.digest())}function Yh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,r],0),new nn([s,i],0)]}class al{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ys(`Invalid padding: ${t}`);if(r<0)throw new ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ys(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ys(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=nn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(nn.fromNumber(r)));return s.compare(Hw)===1&&(s=new nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Xh(e),[r,s]=Yh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new al(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=Xh(e),[r,s]=Yh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ii.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Go($.min(),s,new pe(H),$e(),Y())}}class ii{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ii(r,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class _m{constructor(e,t){this.targetId=e,this.Ce=t}}class ym{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Zh{constructor(){this.ve=0,this.Fe=ed(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),r=Y();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z(38017,{changeType:i})}}),new ii(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ed()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Qw{constructor(e){this.Ge=e,this.ze=new Map,this.je=$e(),this.Je=Pi(),this.He=Pi(),this.Ye=new pe(H)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:z(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(uo(i))if(r===0){const o=new U(i.path);this.et(t,o,ye.newNoDocument(o,$.min()))}else q(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=St(r).toUint8Array()}catch(l){if(l instanceof jp)return Mn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new al(o,s,i)}catch(l){return Mn(l instanceof ys?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&uo(c.target)){const l=new U(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ye.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=Y();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Go(e,t,this.Ye,this.je,r);return this.je=$e(),this.Je=Pi(),this.He=Pi(),this.Ye=new pe(H),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Zh,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ce(H),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ce(H),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Pi(){return new pe(U.comparator)}function ed(){return new pe(U.comparator)}const Jw={asc:"ASCENDING",desc:"DESCENDING"},Xw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yw={and:"AND",or:"OR"};class Zw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function pc(n,e){return n.useProto3Json||No(e)?e:{value:e}}function Nr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function eb(n,e){return Nr(n,e.toTimestamp())}function Fe(n){return q(!!n,49232),$.fromTimestamp(function(t){const r=Pt(t);return new ae(r.seconds,r.nanos)}(n))}function cl(n,e){return mc(n,e).canonicalString()}function mc(n,e){const t=function(s){return new oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Im(n){const e=oe.fromString(n);return q(Cm(e),10190,{key:e.toString()}),e}function fo(n,e){return cl(n.databaseId,e.path)}function kn(n,e){const t=Im(e);if(t.get(1)!==n.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(wm(t))}function vm(n,e){return cl(n.databaseId,e)}function Tm(n){const e=Im(n);return e.length===4?oe.emptyPath():wm(e)}function gc(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wm(n){return q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function td(n,e,t){return{name:fo(n,e),fields:t.value.mapValue.fields}}function tb(n,e,t){const r=kn(n,e.name),s=Fe(e.updateTime),i=e.createTime?Fe(e.createTime):$.min(),o=new je({mapValue:{fields:e.fields}}),c=ye.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function nb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(q(f===void 0||typeof f=="string",58123),ve.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ve.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?D.UNKNOWN:gm(u.code);return new B(f,u.message||"")}(o);t=new ym(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=kn(n,r.document.name),i=Fe(r.document.updateTime),o=r.document.createTime?Fe(r.document.createTime):$.min(),c=new je({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];t=new Gi(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=kn(n,r.document),i=r.readTime?Fe(r.readTime):$.min(),o=ye.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Gi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=kn(n,r.document),i=r.removedTargetIds||[];t=new Gi([],i,s,null)}else{if(!("filter"in e))return z(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Gw(s,i),c=r.targetId;t=new _m(c,o)}}return t}function po(n,e){let t;if(e instanceof Br)t={update:td(n,e.key,e.value)};else if(e instanceof rl)t={delete:fo(n,e.key)};else if(e instanceof fn)t={update:td(n,e.key,e.data),updateMask:cb(e.fieldMask)};else{if(!(e instanceof mm))return z(16599,{Vt:e.type});t={verify:fo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof kr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Vr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Dr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ks)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:eb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)}(n,e.precondition)),t}function _c(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Be.updateTime(Fe(i.updateTime)):i.exists!==void 0?Be.exists(i.exists):Be.none()}(e.currentDocument):Be.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new kr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Vr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Dr(f)}else"increment"in c?l=new Ks(o,c.increment):z(16584,{proto:c});const u=me.fromServerFormat(c.fieldPath);return new dm(u,l)}(n,s)):[];if(e.update){e.update.name;const s=kn(n,e.update.name),i=new je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Je(u.map(f=>me.fromServerFormat(f)))}(e.updateMask);return new fn(s,i,o,t,r)}return new Br(s,i,t,r)}if(e.delete){const s=kn(n,e.delete);return new rl(s,t)}if(e.verify){const s=kn(n,e.verify);return new mm(s,t)}return z(1463,{proto:e})}function rb(n,e){return n&&n.length>0?(q(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?Fe(s.updateTime):Fe(i);return o.isEqual($.min())&&(o=Fe(i)),new zw(o,s.transformResults||[])}(t,e))):[]}function bm(n,e){return{documents:[vm(n,e.path)]}}function Am(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vm(n,s);const i=function(u){if(u.length!==0)return Sm(le.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:ur(g.field),direction:ib(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=pc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:s}}function Rm(n){let e=Tm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){q(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=Pm(p);return g instanceof le&&tl(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(C){return new lo(hr(C.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,No(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,w=p.values||[];return new Cr(w,g)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const g=!p.before,w=p.values||[];return new Cr(w,g)}(t.endAt)),Sw(e,s,o,i,c,"F",l,u)}function sb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hr(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hr(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hr(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}}(n):n.fieldFilter!==void 0?function(t){return te.create(hr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return le.create(t.compositeFilter.filters.map(r=>Pm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z(1026)}}(t.compositeFilter.op))}(n):z(30097,{filter:n})}function ib(n){return Jw[n]}function ob(n){return Xw[n]}function ab(n){return Yw[n]}function ur(n){return{fieldPath:n.canonicalString()}}function hr(n){return me.fromServerFormat(n.fieldPath)}function Sm(n){return n instanceof te?function(t){if(t.op==="=="){if(Uh(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NAN"}};if(Fh(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uh(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NOT_NAN"}};if(Fh(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ur(t.field),op:ob(t.op),value:t.value}}}(n):n instanceof le?function(t){const r=t.getFilters().map(s=>Sm(s));return r.length===1?r[0]:{compositeFilter:{op:ab(t.op),filters:r}}}(n):z(54877,{filter:n})}function cb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Cm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t,r,s,i=$.min(),o=$.min(),c=ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.yt=e}}function lb(n,e){let t;if(e.document)t=tb(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=U.fromSegments(e.noDocument.path),s=Bn(e.noDocument.readTime);t=ye.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z(56709);{const r=U.fromSegments(e.unknownDocument.path),s=Bn(e.unknownDocument.version);t=ye.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ae(s[0],s[1]);return $.fromTimestamp(i)}(e.readTime)),t}function nd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:mo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:fo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Nr(i,o.version.toTimestamp()),createTime:Nr(i,o.createTime.toTimestamp())}}(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:jn(e.version)};else{if(!e.isUnknownDocument())return z(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:jn(e.version)}}return r}function mo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function jn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bn(n){const e=new ae(n.seconds,n.nanoseconds);return $.fromTimestamp(e)}function bn(n,e){const t=(e.baseMutations||[]).map(i=>_c(n.yt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>_c(n.yt,i)),s=ae.fromMillis(e.localWriteTimeMs);return new sl(e.batchId,s,t,r)}function Es(n){const e=Bn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Bn(n.lastLimboFreeSnapshotVersion):$.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return q(o===1,1966,{count:o}),Xe(Bo(Tm(i.documents[0])))}(n.query):function(i){return Xe(Rm(i))}(n.query),new wt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ve.fromBase64String(n.resumeToken))}function km(n,e){const t=jn(e.snapshotVersion),r=jn(e.lastLimboFreeSnapshotVersion);let s;s=uo(e.target)?bm(n.yt,e.target):Am(n.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Un(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Vm(n){const e=Rm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fc(e,e.limit,"L"):e}function Da(n,e){return new ol(e.largestBatchId,_c(n.yt,e.overlayMutation))}function rd(n,e){const t=e.path.lastSegment();return[n,Ne(e.path.popLast()),t]}function sd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:jn(r.readTime),documentKey:Ne(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{getBundleMetadata(e,t){return id(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Bn(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return id(e).put(function(s){return{bundleId:s.id,createTime:jn(Fe(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return od(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Vm(i.bundledQuery),readTime:Bn(i.readTime)}}(r)})}saveNamedQuery(e,t){return od(e).put(function(s){return{name:s.name,readTime:jn(Fe(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function id(n){return Re(n,Oo)}function od(n){return Re(n,Lo)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new Ko(e,r)}getOverlay(e,t){return as(e).get(rd(this.userId,t)).next(r=>r?Da(this.serializer,r):null)}getOverlays(e,t){const r=ct();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new ol(t,o);s.push(this.St(e,c))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Ne(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(as(e).Z(oc,c))}),P.waitFor(i)}getOverlaysForCollection(e,t,r){const s=ct(),i=Ne(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return as(e).J(oc,o).next(c=>{for(const l of c){const u=Da(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=ct();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return as(e).ee({index:Np,range:c},(l,u,f)=>{const p=Da(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}St(e,t){return as(e).put(function(s,i,o){const[c,l,u]=rd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:po(s.yt,o.mutation)}}(this.serializer,this.userId,t))}}function as(n){return Re(n,Mo)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{bt(e){return Re(e,Qc)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?ve.fromUint8Array(r):ve.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(fe(e.integerValue));else if("doubleValue"in e){const r=fe(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Us(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Pt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(St(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Kp(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Uo(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):z(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const s of Object.keys(r))this.Ot(s,t),this.Ct(r[s],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const s=Pr,i=((c=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(fe(i)),this.Ot(s,t),this.Ct(r[s],t)}Qt(e,t){const r=e.values||[];this.Ft(t,50);for(const s of r)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),U.fromName(e).path.forEach(r=>{this.Ft(t,60),this.Ut(r,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}An.Kt=new An;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=255;function db(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function ad(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=db(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class fb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const t=this.en(e),r=ad(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),r=ad(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(rr),this.sn(255)}_n(){this.an(rr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===rr?(this.sn(rr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===rr?(this.an(rr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class pb{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class mb{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class cs{constructor(){this.cn=new fb,this.ln=new pb(this.cn),this.hn=new mb(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,r,s){this.Tn=e,this.In=t,this.En=r,this.dn=s}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Rn(this.Tn,this.In,this.En,r)}Rn(e,t,r){return{indexId:this.Tn,uid:e,arrayValue:Ki(this.En),directionalValue:Ki(this.dn),orderedDocumentKey:Ki(t),documentKey:r.path.toArray()}}Vn(e,t,r){const s=this.Rn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function jt(n,e){let t=n.Tn-e.Tn;return t!==0?t:(t=cd(n.En,e.En),t!==0?t:(t=cd(n.dn,e.dn),t!==0?t:U.comparator(n.In,e.In)))}function cd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ki(n){return Sf()?function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r}(n):n}function ld(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(n)}class ud{constructor(e){this.mn=new ce((t,r)=>me.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const r=t;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(q(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=rc(e);if(t!==void 0&&!this.wn(t))return!1;const r=vn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.wn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.mn.size>0){const c=this.mn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.Sn(c,l)||!this.bn(this.fn[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.fn.length||!this.bn(this.fn[o++],c))return!1}return!0}Dn(){if(this.pn)return null;let e=new ce(me.comparator);const t=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Fi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Fi(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Fi(r.field,r.dir==="asc"?0:1)));return new so(so.UNKNOWN_ID,this.collectionId,t,Fs.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){var t,r;if(q(n instanceof te||n instanceof le,20012),n instanceof te){if(n instanceof tm){const s=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map(i=>te.create(n.field,"==",i)))||[];return le.create(s,"or")}return n}const e=n.filters.map(s=>Dm(s));return le.create(e,n.op)}function gb(n){if(n.getFilters().length===0)return[];const e=Ic(Dm(n));return q(Nm(e),7391),yc(e)||Ec(e)?[e]:e.getFilters()}function yc(n){return n instanceof te}function Ec(n){return n instanceof le&&tl(n)}function Nm(n){return yc(n)||Ec(n)||function(t){if(t instanceof le&&uc(t)){for(const r of t.getFilters())if(!yc(r)&&!Ec(r))return!1;return!0}return!1}(n)}function Ic(n){if(q(n instanceof te||n instanceof le,34018),n instanceof te)return n;if(n.filters.length===1)return Ic(n.filters[0]);const e=n.filters.map(r=>Ic(r));let t=le.create(e,n.op);return t=go(t),Nm(t)?t:(q(t instanceof le,64498),q(xr(t),40251),q(t.filters.length>1,57927),t.filters.reduce((r,s)=>ll(r,s)))}function ll(n,e){let t;return q(n instanceof te||n instanceof le,38388),q(e instanceof te||e instanceof le,25473),t=n instanceof te?e instanceof te?function(s,i){return le.create([s,i],"and")}(n,e):hd(n,e):e instanceof te?hd(e,n):function(s,i){if(q(s.filters.length>0&&i.filters.length>0,48005),xr(s)&&xr(i))return Yp(s,i.getFilters());const o=uc(s)?s:i,c=uc(s)?i:s,l=o.filters.map(u=>ll(u,c));return le.create(l,"or")}(n,e),go(t)}function hd(n,e){if(xr(e))return Yp(e,n.getFilters());{const t=e.filters.map(r=>ll(n,r));return le.create(t,"or")}}function go(n){if(q(n instanceof te||n instanceof le,11850),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return go(e[0]);if(Jp(n))return n;const t=e.map(s=>go(s)),r=[];return t.forEach(s=>{s instanceof te?r.push(s):s instanceof le&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:le.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.Cn=new ul}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Ge.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Ge.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class ul{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="IndexedDbIndexManager",Si=new Uint8Array(0);class yb{constructor(e,t){this.databaseId=t,this.vn=new ul,this.Fn=new kt(r=>Un(r),(r,s)=>ri(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const i={collectionId:r,parent:Ne(s)};return fd(e).put(i)}return P.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Tp(t),""],!1,!0);return fd(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(at(o.parent))}return r})}addFieldIndex(e,t){const r=ls(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ir(e);return i.next(c=>{o.put(sd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=ls(e),s=ir(e),i=sr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ls(e),r=sr(e),s=ir(e);return t.Z().next(()=>r.Z()).next(()=>s.Z())}createTargetIndexes(e,t){return P.forEach(this.Mn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new ud(r).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=sr(e);let s=!0;const i=new Map;return P.forEach(this.Mn(t),o=>this.xn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=Y();const c=[];return P.forEach(i,(l,u)=>{O(dd,`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map(j=>`${j.fieldPath}:${j.kind}`).join(",")}`}(l)} to execute ${Un(t)}`);const f=function(L,j){const G=rc(j);if(G===void 0)return null;for(const W of ho(L,G.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(u,l),p=function(L,j){const G=new Map;for(const W of vn(j))for(const I of ho(L,W.fieldPath))switch(I.op){case"==":case"in":G.set(W.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return G.set(W.fieldPath.canonicalString(),I.value),Array.from(G.values())}return null}(u,l),g=function(L,j){const G=[];let W=!0;for(const I of vn(j)){const _=I.kind===0?$h(L,I.fieldPath,L.startAt):Gh(L,I.fieldPath,L.startAt);G.push(_.value),W&&(W=_.inclusive)}return new Cr(G,W)}(u,l),w=function(L,j){const G=[];let W=!0;for(const I of vn(j)){const _=I.kind===0?Gh(L,I.fieldPath,L.endAt):$h(L,I.fieldPath,L.endAt);G.push(_.value),W&&(W=_.inclusive)}return new Cr(G,W)}(u,l),C=this.On(l,u,g),x=this.On(l,u,w),R=this.Nn(l,u,p),M=this.Bn(l.indexId,f,C,g.inclusive,x,w.inclusive,R);return P.forEach(M,N=>r.Y(N,t.limit).next(L=>{L.forEach(j=>{const G=U.fromSegments(j.documentKey);o.has(G)||(o=o.add(G),c.push(G))})}))}).next(()=>c)}return P.resolve(null)})}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=gb(le.create(e.filters,"and")).map(r=>dc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,t),t)}Bn(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const g=t?this.Ln(t[p/u]):Si,w=this.kn(e,g,r[p%u],s),C=this.qn(e,g,i[p%u],o),x=c.map(R=>this.kn(e,g,R,!0));f.push(...this.createRange(w,C,x))}return f}kn(e,t,r,s){const i=new Rn(e,U.empty(),t,r);return s?i:i.An()}qn(e,t,r,s){const i=new Rn(e,U.empty(),t,r);return s?i.An():i}xn(e,t){const r=new ud(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.yn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.Mn(t);return P.forEach(s,i=>this.xn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ce(me.comparator),f=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:u=u.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Qn(e,t){const r=new cs;for(const s of vn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Pn(s.kind);An.Kt.Dt(i,o)}return r.un()}Ln(e){const t=new cs;return An.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const r=new cs;return An.Kt.Dt(el(this.databaseId,t),r.Pn(function(i){const o=vn(i);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}Nn(e,t,r){if(r===null)return[];let s=[];s.push(new cs);let i=0;for(const o of vn(e)){const c=r[i++];for(const l of s)if(this.Un(t,o.fieldPath)&&Gs(c))s=this.Kn(s,o,c);else{const u=l.Pn(o.kind);An.Kt.Dt(c,u)}}return this.Wn(s)}On(e,t,r){return this.Nn(e,t,r.position)}Wn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Kn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new cs;l.seed(c.un()),An.Kt.Dt(o,l.Pn(t.kind)),i.push(l)}return i}Un(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ls(e),s=ir(e);return(t?r.J(ic,IDBKeyRange.bound(t,t)):r.J()).next(i=>{const o=[];return P.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const g=p?new Fs(p.sequenceNumber,new Ge(Bn(p.readTime),new U(at(p.documentKey)),p.largestBatchId)):Fs.empty(),w=f.fields.map(([C,x])=>new Fi(me.fromServerFormat(C),x));return new so(f.indexId,f.collectionGroup,w,g)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:H(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=ls(e),i=ir(e);return this.Gn(e).next(o=>s.J(ic,IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>i.put(sd(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return P.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),P.forEach(c,l=>this.zn(e,s,l).next(u=>{const f=this.jn(i,l);return u.isEqual(f)?P.resolve():this.Jn(e,i,l,u,f)}))))})}Hn(e,t,r,s){return sr(e).put(s.Rn(this.uid,this.$n(r,t.key),t.key))}Yn(e,t,r,s){return sr(e).delete(s.Vn(this.uid,this.$n(r,t.key),t.key))}zn(e,t,r){const s=sr(e);let i=new ce(jt);return s.ee({index:Dp,range:IDBKeyRange.only([r.indexId,this.uid,Ki(this.$n(r,t))])},(o,c)=>{i=i.add(new Rn(r.indexId,t,ld(c.arrayValue),ld(c.directionalValue)))}).next(()=>i)}jn(e,t){let r=new ce(jt);const s=this.Qn(t,e);if(s==null)return r;const i=rc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Gs(o))for(const c of o.arrayValue.values||[])r=r.add(new Rn(t.indexId,e.key,this.Ln(c),s))}else r=r.add(new Rn(t.indexId,e.key,Si,s));return r}Jn(e,t,r,s,i){O(dd,"Updating index entries for document '%s'",t.key);const o=[];return function(l,u,f,p,g){const w=l.getIterator(),C=u.getIterator();let x=nr(w),R=nr(C);for(;x||R;){let M=!1,N=!1;if(x&&R){const L=f(x,R);L<0?N=!0:L>0&&(M=!0)}else x!=null?N=!0:M=!0;M?(p(R),R=nr(C)):N?(g(x),x=nr(w)):(x=nr(w),R=nr(C))}}(s,i,jt,c=>{o.push(this.Hn(e,t,r,c))},c=>{o.push(this.Yn(e,t,r,c))}),P.waitFor(o)}Gn(e){let t=1;return ir(e).ee({index:Vp,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>jt(o,c)).filter((o,c,l)=>!c||jt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=jt(o,e),l=jt(o,t);if(c===0)s[0]=e.An();else if(c>0&&l<0)s.push(o),s.push(o.An());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Zn(s[o],s[o+1]))return[];const c=s[o].Vn(this.uid,Si,U.empty()),l=s[o+1].Vn(this.uid,Si,U.empty());i.push(IDBKeyRange.bound(c,l))}return i}Zn(e,t){return jt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(pd)}getMinOffset(e,t){return P.mapArray(this.Mn(t),r=>this.xn(e,r).next(s=>s||z(44426))).next(pd)}}function fd(n){return Re(n,zs)}function sr(n){return Re(n,Rs)}function ls(n){return Re(n,Hc)}function ir(n){return Re(n,As)}function pd(n){q(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Gc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ge(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Om=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n,e,t){const r=n.store(Ye),s=n.store(wr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.ee({range:o},(f,p,g)=>(c++,g.delete()));i.push(l.next(()=>{q(c===1,47070,{batchId:t.batchId})}));const u=[];for(const f of t.mutations){const p=Cp(e,f.key.path,t.batchId);i.push(s.delete(p)),u.push(f.key)}return P.waitFor(i).next(()=>u)}function _o(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw z(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(Om,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);class Wo{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Xn={}}static wt(e,t,r,s){q(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Wo(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).ee({index:Sn,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=dr(e),o=Bt(e);return o.add({}).next(c=>{q(typeof c=="number",49019);const l=new sl(c,t,r,s),u=function(w,C,x){const R=x.baseMutations.map(N=>po(w.yt,N)),M=x.mutations.map(N=>po(w.yt,N));return{userId:C,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:R,mutations:M}}(this.serializer,this.userId,l),f=[];let p=new ce((g,w)=>H(g.canonicalString(),w.canonicalString()));for(const g of s){const w=Cp(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),f.push(o.put(u)),f.push(i.put(w,KT))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Xn[c]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Bt(e).get(t).next(r=>r?(q(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),bn(this.serializer,r)):null)}er(e,t){return this.Xn[t]?P.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Xn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Bt(e).ee({index:Sn,range:s},(o,c,l)=>{c.userId===this.userId&&(q(c.batchId>=r,47524,{tr:r}),i=bn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Cn;return Bt(e).ee({index:Sn,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Cn],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).J(Sn,t).next(r=>r.map(s=>bn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ui(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return dr(e).ee({range:s},(o,c,l)=>{const[u,f,p]=o,g=at(f);if(u===this.userId&&t.path.isEqual(g))return Bt(e).get(p).next(w=>{if(!w)throw z(61480,{nr:o,batchId:p});q(w.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:w.userId,batchId:p}),i.push(bn(this.serializer,w))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(H);const s=[];return t.forEach(i=>{const o=Ui(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=dr(e).ee({range:c},(u,f,p)=>{const[g,w,C]=u,x=at(w);g===this.userId&&i.path.isEqual(x)?r=r.add(C):p.done()});s.push(l)}),P.waitFor(s).next(()=>this.rr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Ui(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ce(H);return dr(e).ee({range:o},(l,u,f)=>{const[p,g,w]=l,C=at(g);p===this.userId&&r.isPrefixOf(C)?C.length===s&&(c=c.add(w)):f.done()}).next(()=>this.rr(e,c))}rr(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Bt(e).get(i).next(o=>{if(o===null)throw z(35274,{batchId:i});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(bn(this.serializer,o))}))}),P.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Lm(e.le,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.ir(t.batchId)}),P.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return dr(e).ee({range:r},(i,o,c)=>{if(i[0]===this.userId){const l=at(i[1]);s.push(l)}else c.done()}).next(()=>{q(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Mm(e,this.userId,t)}_r(e){return Fm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Cn,lastStreamToken:""})}}function Mm(n,e,t){const r=Ui(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return dr(n).ee({range:i,X:!0},(c,l,u)=>{const[f,p,g]=c;f===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Bt(n){return Re(n,Ye)}function dr(n){return Re(n,wr)}function Fm(n){return Re(n,js)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new zn(0)}static cr(){return new zn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next(t=>{const r=new zn(t.highestTargetId);return t.highestTargetId=r.next(),this.hr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(t=>$.fromTimestamp(new ae(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.lr(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.hr(e,s)))}addTargetData(e,t){return this.Pr(e,t).next(()=>this.lr(e).next(r=>(r.targetCount+=1,this.Tr(t,r),this.hr(e,r))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>or(e).delete(t.targetId)).next(()=>this.lr(e)).next(r=>(q(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return or(e).ee((o,c)=>{const l=Es(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return or(e).ee((r,s)=>{const i=Es(s);t(i)})}lr(e){return gd(e).get(ao).next(t=>(q(t!==null,2888),t))}hr(e,t){return gd(e).put(ao,t)}Pr(e,t){return or(e).put(km(this.serializer,t))}Tr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Un(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return or(e).ee({range:s,index:kp},(o,c,l)=>{const u=Es(c);ri(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Qt(e);return t.forEach(o=>{const c=Ne(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(s)}removeMatchingKeys(e,t,r){const s=Qt(e);return P.forEach(t,i=>{const o=Ne(i.path);return P.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Qt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Qt(e);let i=Y();return s.ee({range:r,X:!0},(o,c,l)=>{const u=at(o[1]),f=new U(u);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=Ne(t.path),s=IDBKeyRange.bound([r],[Tp(r)],!1,!0);let i=0;return Qt(e).ee({index:Wc,X:!0,range:s},([o,c],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}At(e,t){return or(e).get(t).next(r=>r?Es(r):null)}}function or(n){return Re(n,br)}function gd(n){return Re(n,xn)}function Qt(n){return Re(n,Ar)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="LruGarbageCollector",Ib=1048576;function yd([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class vb{constructor(e){this.Ir=e,this.buffer=new ce(yd),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Um{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(_d,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){dn(t)?O(_d,"Ignoring IndexedDB error during garbage collection: ",t):await Hn(t)}await this.Vr(3e5)})}}class Tb{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Qe.ce);const r=new vb(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(md)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),md):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),cr()<=ee.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function jm(n,e){return new Tb(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,t){this.db=e,this.garbageCollector=jm(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,(r,s)=>t(s))}addReference(e,t,r){return Ci(e,r)}removeReference(e,t,r){return Ci(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ci(e,t)}br(e,t){return function(s,i){let o=!1;return Fm(s).te(c=>Mm(s,c,i).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,(o,c)=>{if(c<=t){const l=this.br(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,$.min()),Qt(e).delete(function(p){return[0,Ne(p.path)]}(o))))});s.push(l)}}).next(()=>P.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ci(e,t)}Sr(e,t){const r=Qt(e);let s,i=Qe.ce;return r.ee({index:Wc},([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==Qe.ce&&t(new U(at(s)),i),i=u,s=l):i=Qe.ce}).next(()=>{i!==Qe.ce&&t(new U(at(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ci(n,e){return Qt(n).put(function(r,s){return{targetId:0,path:Ne(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.changes=new kt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return En(e).put(r)}removeEntry(e,t,r){return En(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],mo(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Dr(e,r)))}getEntry(e,t){let r=ye.newInvalidDocument(t);return En(e).ee({index:ji,range:IDBKeyRange.only(us(t))},(s,i)=>{r=this.Cr(t,i)}).next(()=>r)}vr(e,t){let r={size:0,document:ye.newInvalidDocument(t)};return En(e).ee({index:ji,range:IDBKeyRange.only(us(t))},(s,i)=>{r={document:this.Cr(t,i),size:_o(i)}}).next(()=>r)}getEntries(e,t){let r=$e();return this.Fr(e,t,(s,i)=>{const o=this.Cr(s,i);r=r.insert(s,o)}).next(()=>r)}Mr(e,t){let r=$e(),s=new pe(U.comparator);return this.Fr(e,t,(i,o)=>{const c=this.Cr(i,o);r=r.insert(i,c),s=s.insert(i,_o(o))}).next(()=>({documents:r,Or:s}))}Fr(e,t,r){if(t.isEmpty())return P.resolve();let s=new ce(vd);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(us(s.first()),us(s.last())),o=s.getIterator();let c=o.getNext();return En(e).ee({index:ji,range:i},(l,u,f)=>{const p=U.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&vd(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?f.j(us(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),mo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return En(e).J(IDBKeyRange.bound(c,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let f=$e();for(const p of u){const g=this.Cr(U.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(si(t,g)||s.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=$e();const o=Id(t,r),c=Id(t,Ge.max());return En(e).ee({index:xp,range:IDBKeyRange.bound(o,c,!0)},(l,u,f)=>{const p=this.Cr(U.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new Ab(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ed(e).get(sc).next(t=>(q(!!t,20021),t))}Dr(e,t){return Ed(e).put(sc,t)}Cr(e,t){if(t){const r=lb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual($.min())))return r}return ye.newInvalidDocument(e)}}function zm(n){return new bb(n)}class Ab extends Bm{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new kt(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ce((i,o)=>H(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Br.get(i);if(t.push(this.Nr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=nd(this.Nr.serializer,o);s=s.add(i.path.popLast());const u=_o(l);r+=u-c.size,t.push(this.Nr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=nd(this.Nr.serializer,o.convertToNoDocument($.min()));t.push(this.Nr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Nr.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next(r=>(this.Br.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next(({documents:r,Or:s})=>(s.forEach((i,o)=>{this.Br.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Ed(n){return Re(n,Bs)}function En(n){return Re(n,oo)}function us(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Id(n,e){const t=e.documentKey.path.toArray();return[n,mo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function vd(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=H(t[i],r[i]),s)return s;return s=H(t.length,r.length),s||(s=H(t[t.length-2],r[r.length-2]),s||H(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&xs(r.mutation,s,Je.empty(),ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Y()){const s=ct();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=_s();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Y()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=$e();const o=Cs(),c=function(){return Cs()}();return t.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof fn)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),xs(f.mutation,u,f.mutation.getFieldMask(),ae.now())):o.set(u.key,Je.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),t.forEach((u,f)=>c.set(u,new Rb(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Cs();let s=new pe((o,c)=>o-c),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let f=r.get(l)||Je.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Y()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=om();f.forEach(g=>{if(!i.has(g)){const w=fm(t.get(g),r.get(g));w!==null&&p.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Cw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(ct());let c=Ms,l=i;return o.next(u=>P.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Y())).next(f=>({batchId:c,changes:im(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=_s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=_s();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,l=>{const u=function(p,g){return new jo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ye.newInvalidDocument(f)))});let c=_s();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&xs(f.mutation,u,Je.empty(),ae.now()),si(t,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Fe(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:Vm(s.bundledQuery),readTime:Fe(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.overlays=new pe(U.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ct();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=ct(),i=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new pe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=ct(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=ct(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return P.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ol(t,r));let i=this.qr.get(t);i===void 0&&(i=Y(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.Qr=new ce(Se.$r),this.Ur=new ce(Se.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Se(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Se(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new U(new oe([])),r=new Se(t,e),s=new Se(t,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new U(new oe([])),r=new Se(t,e),s=new Se(t,e+1);let i=Y();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return U.comparator(e.key,t.key)||H(e.Yr,t.Yr)}static Kr(e,t){return H(e.Yr,t.Yr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ce(Se.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sl(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Se(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Cn:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(H);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const o=new Se(new U(i),0);let c=new ce(H);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),P.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){q(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Se(t,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.ri=e,this.docs=function(){return new pe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=$e();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=$e();const o=t.path,c=new U(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Gc(Ap(f),r)<=0||(s.has(f.key)||si(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z(9500)}ii(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Vb(this)}getSize(e){return P.resolve(this.size)}}class Vb extends Bm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.persistence=e,this.si=new kt(t=>Un(t),ri),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.oi=0,this._i=new hl,this.targetCount=0,this.ai=zn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new zn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.ui={},this.overlays={},this.ci=new Qe(0),this.li=!1,this.li=!0,this.hi=new Cb,this.referenceDelegate=e(this),this.Pi=new Db(this),this.indexManager=new _b,this.remoteDocumentCache=function(s){return new kb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new xm(t),this.Ii=new Pb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Sb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new xb(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new Nb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class Nb extends Pp{constructor(e){super(),this.currentSequenceNumber=e}}class Ho{constructor(e){this.persistence=e,this.Ri=new hl,this.Vi=null}static mi(e){return new Ho(e)}get fi(){if(this.Vi)return this.Vi;throw z(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=U.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,$.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class yo{constructor(e,t){this.persistence=e,this.pi=new kt(r=>Ne(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jm(this,t)}static mi(e,t){return new yo(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return P.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(c=>{c||(r++,i.removeEntry(o,$.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zi(e.data.value)),t}br(e,t,r){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.serializer=e}k(e,t,r,s){const i=new Do("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore(ni)}(e),function(l){l.createObjectStore(js,{keyPath:GT}),l.createObjectStore(Ye,{keyPath:Vh,autoIncrement:!0}).createIndex(Sn,Dh,{unique:!0}),l.createObjectStore(wr)}(e),Td(e),function(l){l.createObjectStore(Tn)}(e));let o=P.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore(Ar),l.deleteObjectStore(br),l.deleteObjectStore(xn)}(e),Td(e)),o=o.next(()=>function(l){const u=l.store(xn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:$.min().toTimestamp(),targetCount:0};return u.put(ao,f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store(Ye).J().next(p=>{l.deleteObjectStore(Ye),l.createObjectStore(Ye,{keyPath:Vh,autoIncrement:!0}).createIndex(Sn,Dh,{unique:!0});const g=u.store(Ye),w=p.map(C=>g.put(C));return P.waitFor(w)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(Rr,{keyPath:ew})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.yi(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(Bs)}(e),this.wi(i)))),r<7&&s>=7&&(o=o.next(()=>this.Si(i))),r<8&&s>=8&&(o=o.next(()=>this.bi(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Di(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Oo,{keyPath:tw})})(e),function(l){l.createObjectStore(Lo,{keyPath:nw})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore(Mo,{keyPath:lw});u.createIndex(oc,uw,{unique:!1}),u.createIndex(Np,hw,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore(oo,{keyPath:WT});u.createIndex(ji,HT),u.createIndex(xp,QT)}(e)).next(()=>this.Ci(e,i)).next(()=>e.deleteObjectStore(Tn))),r<14&&s>=14&&(o=o.next(()=>this.Fi(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(Hc,{keyPath:rw,autoIncrement:!0}).createIndex(ic,sw,{unique:!1}),l.createObjectStore(As,{keyPath:iw}).createIndex(Vp,ow,{unique:!1}),l.createObjectStore(Rs,{keyPath:aw}).createIndex(Dp,cw,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(As).clear()}).next(()=>{t.objectStore(Rs).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(Qc,{keyPath:dw})})(e)})),r<18&&s>=18&&Sf()&&(o=o.next(()=>{t.objectStore(As).clear()}).next(()=>{t.objectStore(Rs).clear()})),o}wi(e){let t=0;return e.store(Tn).ee((r,s)=>{t+=_o(s)}).next(()=>{const r={byteSize:t};return e.store(Bs).put(sc,r)})}yi(e){const t=e.store(js),r=e.store(Ye);return t.J().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Cn],[i.userId,i.lastAcknowledgedBatchId]);return r.J(Sn,o).next(c=>P.forEach(c,l=>{q(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=bn(this.serializer,l);return Lm(e,i.userId,u).next(()=>{})}))}))}Si(e){const t=e.store(Ar),r=e.store(Tn);return e.store(xn).get(ao).next(s=>{const i=[];return r.ee((o,c)=>{const l=new oe(o),u=function(p){return[0,Ne(p)]}(l);i.push(t.get(u).next(f=>f?P.resolve():(p=>t.put({targetId:0,path:Ne(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(i))})}bi(e,t){e.createObjectStore(zs,{keyPath:ZT});const r=t.store(zs),s=new ul,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:Ne(l)})}};return t.store(Tn).ee({X:!0},(o,c)=>{const l=new oe(o);return i(l.popLast())}).next(()=>t.store(wr).ee({X:!0},([o,c,l],u)=>{const f=at(c);return i(f.popLast())}))}Di(e){const t=e.store(br);return t.ee((r,s)=>{const i=Es(s),o=km(this.serializer,i);return t.put(o)})}Ci(e,t){const r=t.store(Tn),s=[];return r.ee((i,o)=>{const c=t.store(oo),l=function(p){return p.document?new U(oe.fromString(p.document.name).popFirst(5)):p.noDocument?U.fromSegments(p.noDocument.path):p.unknownDocument?U.fromSegments(p.unknownDocument.path):z(36783)}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))}).next(()=>P.waitFor(s))}Fi(e,t){const r=t.store(Ye),s=zm(this.serializer),i=new dl(Ho.mi,this.serializer.yt);return r.J().next(o=>{const c=new Map;return o.forEach(l=>{let u=c.get(l.userId)??Y();bn(this.serializer,l).keys().forEach(f=>u=u.add(f)),c.set(l.userId,u)}),P.forEach(c,(l,u)=>{const f=new Ce(u),p=Ko.wt(this.serializer,f),g=i.getIndexManager(f),w=Wo.wt(f,this.serializer,g,i.referenceDelegate);return new qm(s,w,p,g).recalculateAndSaveOverlaysForDocumentKeys(new ac(t,Qe.ce),l).next()})})}}function Td(n){n.createObjectStore(Ar,{keyPath:XT}).createIndex(Wc,YT,{unique:!0}),n.createObjectStore(br,{keyPath:"targetId"}).createIndex(kp,JT,{unique:!0}),n.createObjectStore(xn)}const zt="IndexedDbPersistence",Na=18e5,Oa=5e3,La="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Lb="main";class fl{constructor(e,t,r,s,i,o,c,l,u,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Mi=i,this.window=o,this.document=c,this.xi=u,this.Oi=f,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=g=>Promise.resolve(),!fl.v())throw new B(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new wb(this,s),this.$i=t+Lb,this.serializer=new xm(l),this.Ui=new rn(this.$i,this.Ni,new Ob(this.serializer)),this.hi=new hb,this.Pi=new Eb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zm(this.serializer),this.Ii=new ub,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&Me(zt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(D.FAILED_PRECONDITION,La);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new Qe(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>xi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(t=>this.isPrimary&&!t?this.Zi(e).next(()=>!1):!!t&&this.Xi(e).next(()=>!0))).catch(e=>{if(dn(e))return O(zt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O(zt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return hs(e).get(tr).next(t=>P.resolve(this.es(t)))}ts(e){return xi(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Na)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Re(t,Rr);return r.J().next(s=>{const i=this.ss(s,Na),o=s.filter(c=>i.indexOf(c)===-1);return P.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?P.resolve(!0):hs(e).get(tr).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Oa)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new B(D.FAILED_PRECONDITION,La);return!1}}return!(!this.networkEnabled||!this.inForeground)||xi(e).J().next(r=>this.ss(r,Oa).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&O(zt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[ni,Rr],e=>{const t=new ac(e,Qe.ce);return this.Zi(t).next(()=>this.ts(t))}),this.Ui.close(),this.Ps()}ss(e,t){return e.filter(r=>this.rs(r.updateTimeMs,t)&&!this.us(r.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>xi(e).J().next(t=>this.ss(t,Na).map(r=>r.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Wo.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new yb(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Ko.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,r){O(zt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===18?mw:l===17?Fp:l===16?pw:l===15?Jc:l===14?Mp:l===13?Lp:l===12?fw:l===11?Op:void z(60245)}(this.Ni);let o;return this.Ui.runTransaction(e,s,i,c=>(o=new ac(c,this.ci?this.ci.next():Qe.ce),t==="readwrite-primary"?this.Hi(o).next(l=>!!l||this.Yi(o)).next(l=>{if(!l)throw Me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new B(D.FAILED_PRECONDITION,Rp);return r(o)}).next(l=>this.Xi(o).next(()=>l)):this.Is(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Is(e){return hs(e).get(tr).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Oa)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new B(D.FAILED_PRECONDITION,La)})}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hs(e).put(tr,t)}static v(){return rn.v()}Zi(e){const t=hs(e);return t.get(tr).next(r=>this.es(r)?(O(zt,"Releasing primary lease."),t.delete(tr)):P.resolve())}rs(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;Pf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const r=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return O(zt,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Me(zt,"Failed to get zombied client id.",r),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Me("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hs(n){return Re(n,ni)}function xi(n){return Re(n,Rr)}function Mb(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Y(),s=Y();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Pf()?8:Sp(Ae())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Fb;return this.Ss(e,t,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,o,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(cr()<=ee.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(cr()<=ee.DEBUG&&O("QueryEngine","Query:",lr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(cr()<=ee.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):P.resolve())}ys(e,t){if(Kh(t))return P.resolve(null);let r=Xe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=fc(t,null,"F"),r=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Y(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(t,c);return this.Cs(t,u,o,l.readTime)?this.ys(e,fc(t,null,"F")):this.vs(e,u,t,l)}))})))}ws(e,t,r,s){return Kh(t)||s.isEqual($.min())?P.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(t,i);return this.Cs(t,o,r,s)?P.resolve(null):(cr()<=ee.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),lr(t)),this.vs(e,o,t,FT(s,Ms)).next(c=>c))})}Ds(e,t){let r=new ce(rm(e));return t.forEach((s,i)=>{si(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return cr()<=ee.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",lr(t)),this.ps.getDocumentsMatchingQuery(e,t,Ge.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="LocalStore",Ub=3e8;class jb{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new pe(H),this.xs=new kt(i=>Un(i),ri),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qm(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Gm(n,e,t,r){return new jb(n,e,t,r)}async function Km(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Y();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function Bb(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,g=p.keys();let w=P.resolve();return g.forEach(C=>{w=w.next(()=>f.getEntry(l,C)).next(x=>{const R=u.docVersions.get(C);q(R!==null,48541),x.version.compareTo(R)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),f.addEntry(x)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Y();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Wm(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function zb(n,e){const t=Q(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,p)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(ve.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),function(x,R,M){return x.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Ub?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(g,w,f)&&c.push(t.Pi.updateTargetData(i,w))});let l=$e(),u=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(qb(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual($.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return P.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.Ms=s,i))}function qb(n,e,t){let r=Y(),s=Y();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=$e();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):O(ml,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function $b(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gb(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Pi.allocateTargetId(r).next(o=>(s=new wt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function vc(n,e,t){const r=Q(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!dn(o))throw o;O(ml,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function wd(n,e,t){const r=Q(n);let s=$.min(),i=Y();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=Q(l),g=p.xs.get(f);return g!==void 0?P.resolve(p.Ms.get(g)):p.Pi.getTargetData(u,f)}(r,o,Xe(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,t?s:$.min(),t?i:Y())).next(c=>(Kb(r,kw(e),c),{documents:c,Qs:i})))}function Kb(n,e,t){let r=n.Os.get(e)||$.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class bd{constructor(){this.activeTargetIds=Mw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hm{constructor(){this.Mo=new bd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new bd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="ConnectivityMonitor";class Rd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Ad,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(Ad,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki=null;function Tc(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="RestConnection",Hb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===co?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const o=Tc(),c=this.zo(e,t.toUriEncodedString());O(Ma,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Gn(u);return this.Jo(e,c,l,r,f).then(p=>(O(Ma,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Mn(Ma,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,t,r,s,i,o){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Hb[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class Xb extends Qb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=Tc();return new Promise((c,l)=>{const u=new mp;u.setWithCredentials(!0),u.listenOnce(gp.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Mi.NO_ERROR:const p=u.getResponseJson();O(Ve,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Mi.TIMEOUT:O(Ve,`RPC '${e}' ${o} timed out`),l(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case Mi.HTTP_ERROR:const g=u.getStatus();if(O(Ve,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const x=function(M){const N=M.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(N)>=0?N:D.UNKNOWN}(C.status);l(new B(x,C.message))}else l(new B(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(D.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{O(Ve,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);O(Ve,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Tc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ep(),c=yp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");O(Ve,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,w=!1;const C=new Jb({Yo:R=>{w?O(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(O(Ve,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),O(Ve,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Zo:()=>p.close()}),x=(R,M,N)=>{R.listen(M,L=>{try{N(L)}catch(j){setTimeout(()=>{throw j},0)}})};return x(p,gs.EventType.OPEN,()=>{w||(O(Ve,`RPC '${e}' stream ${s} transport opened.`),C.o_())}),x(p,gs.EventType.CLOSE,()=>{w||(w=!0,O(Ve,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(p))}),x(p,gs.EventType.ERROR,R=>{w||(w=!0,Mn(Ve,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),C.a_(new B(D.UNAVAILABLE,"The operation could not be completed")))}),x(p,gs.EventType.MESSAGE,R=>{var M;if(!w){const N=R.data[0];q(!!N,16349);const L=N,j=(L==null?void 0:L.error)||((M=L[0])==null?void 0:M.error);if(j){O(Ve,`RPC '${e}' stream ${s} received error:`,j);const G=j.status;let W=function(E){const b=Ee[E];if(b!==void 0)return gm(b)}(G),I=j.message;W===void 0&&(W=D.INTERNAL,I="Unknown error status: "+G+" with message "+j.message),w=!0,C.a_(new B(W,I)),p.close()}else O(Ve,`RPC '${e}' stream ${s} received:`,N),C.u_(N)}}),x(c,_p.STAT_EVENT,R=>{R.stat===tc.PROXY?O(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===tc.NOPROXY&&O(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){return typeof window<"u"?window:null}function Wi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){return new Zw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="PersistentStream";class Jm{constructor(e,t,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Me(t.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return O(Pd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(O(Pd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zb extends Jm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=nb(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Fe(o.readTime):$.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=gc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=uo(l)?{documents:bm(i,l)}:{query:Am(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Em(i,o.resumeToken);const u=pc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){c.readTime=Nr(i,o.snapshotVersion.toTimestamp());const u=pc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=sb(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=gc(this.serializer),t.removeTarget=e,this.q_(t)}}class eA extends Jm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=rb(e.writeResults,e.commitTime),r=Fe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=gc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>po(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{}class nA extends tA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,mc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(D.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,mc(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class rA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Me(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="RemoteStore";class sA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Jn(this)&&(O(qn,"Restarting streams for network reachability change."),await async function(l){const u=Q(l);u.Ea.add(4),await oi(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Jo(u)}(this))})}),this.Ra=new rA(r,s)}}async function Jo(n){if(Jn(n))for(const e of n.da)await e(!0)}async function oi(n){for(const e of n.da)await e(!1)}function Xm(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),El(t)?yl(t):zr(t).O_()&&_l(t,e))}function gl(n,e){const t=Q(n),r=zr(t);t.Ia.delete(e),r.O_()&&Ym(t,e),t.Ia.size===0&&(r.O_()?r.L_():Jn(t)&&t.Ra.set("Unknown"))}function _l(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zr(n).Y_(e)}function Ym(n,e){n.Va.Ue(e),zr(n).Z_(e)}function yl(n){n.Va=new Qw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),zr(n).start(),n.Ra.ua()}function El(n){return Jn(n)&&!zr(n).x_()&&n.Ia.size>0}function Jn(n){return Q(n).Ea.size===0}function Zm(n){n.Va=void 0}async function iA(n){n.Ra.set("Online")}async function oA(n){n.Ia.forEach((e,t)=>{_l(n,e)})}async function aA(n,e){Zm(n),El(n)?(n.Ra.ha(e),yl(n)):n.Ra.set("Unknown")}async function cA(n,e,t){if(n.Ra.set("Online"),e instanceof ym&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){O(qn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eo(n,r)}else if(e instanceof Gi?n.Va.Ze(e):e instanceof _m?n.Va.st(e):n.Va.tt(e),!t.isEqual($.min()))try{const r=await Wm(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ve.EMPTY_BYTE_STRING,f.snapshotVersion)),Ym(i,l);const p=new wt(f.target,l,u,f.sequenceNumber);_l(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){O(qn,"Failed to raise snapshot:",r),await Eo(n,r)}}async function Eo(n,e,t){if(!dn(e))throw e;n.Ea.add(1),await oi(n),n.Ra.set("Offline"),t||(t=()=>Wm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(qn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Jo(n)})}function eg(n,e){return e().catch(t=>Eo(n,t,e))}async function ai(n){const e=Q(n),t=ln(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cn;for(;lA(e);)try{const s=await $b(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,uA(e,s)}catch(s){await Eo(e,s)}tg(e)&&ng(e)}function lA(n){return Jn(n)&&n.Ta.length<10}function uA(n,e){n.Ta.push(e);const t=ln(n);t.O_()&&t.X_&&t.ea(e.mutations)}function tg(n){return Jn(n)&&!ln(n).x_()&&n.Ta.length>0}function ng(n){ln(n).start()}async function hA(n){ln(n).ra()}async function dA(n){const e=ln(n);for(const t of n.Ta)e.ea(t.mutations)}async function fA(n,e,t){const r=n.Ta.shift(),s=il.from(r,e,t);await eg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ai(n)}async function pA(n,e){e&&ln(n).X_&&await async function(r,s){if(function(o){return Kw(o)&&o!==D.ABORTED}(s.code)){const i=r.Ta.shift();ln(r).B_(),await eg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ai(r)}}(n,e),tg(n)&&ng(n)}async function Sd(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),O(qn,"RemoteStore received new credentials");const r=Jn(t);t.Ea.add(3),await oi(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Jo(t)}async function mA(n,e){const t=Q(n);e?(t.Ea.delete(2),await Jo(t)):e||(t.Ea.add(2),await oi(t),t.Ra.set("Unknown"))}function zr(n){return n.ma||(n.ma=function(t,r,s){const i=Q(t);return i.sa(),new Zb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:iA.bind(null,n),t_:oA.bind(null,n),r_:aA.bind(null,n),H_:cA.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),El(n)?yl(n):n.Ra.set("Unknown")):(await n.ma.stop(),Zm(n))})),n.ma}function ln(n){return n.fa||(n.fa=function(t,r,s){const i=Q(t);return i.sa(),new eA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:hA.bind(null,n),r_:pA.bind(null,n),ta:dA.bind(null,n),na:fA.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await ai(n)):(await n.fa.stop(),n.Ta.length>0&&(O(qn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Il(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(n,e){if(Me("AsyncQueue",`${e}: ${n}`),dn(n))return new B(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static emptySet(e){return new _r(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=_s(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _r)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.ga=new pe(U.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Or{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Or(e,t,_r.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _A{constructor(){this.queries=xd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=Q(t),i=s.queries;s.queries=xd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new B(D.ABORTED,"Firestore shutting down"))}}function xd(){return new kt(n=>nm(n),zo)}async function rg(n,e){const t=Q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new gA,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=vl(o,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Tl(t)}async function sg(n,e){const t=Q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function yA(n,e){const t=Q(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Tl(t)}function EA(n,e,t){const r=Q(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Tl(n){n.Ca.forEach(e=>{e.next()})}var wc,kd;(kd=wc||(wc={})).Ma="default",kd.Cache="cache";class ig{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.key=e}}class ag{constructor(e){this.key=e}}class IA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Y(),this.mutatedKeys=Y(),this.eu=rm(e),this.tu=new _r(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Cd,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),w=si(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),x=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let R=!1;g&&w?g.data.isEqual(w.data)?C!==x&&(r.track({type:3,doc:w}),R=!0):this.su(g,w)||(r.track({type:2,doc:w}),R=!0,(l&&this.eu(w,l)>0||u&&this.eu(w,u)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),R=!0):g&&!w&&(r.track({type:1,doc:g}),R=!0,(l||u)&&(c=!0)),R&&(w?(o=o.add(w),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(w,C){const x=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Rt:R})}};return x(w)-x(C)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Or(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Y(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new ag(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new og(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Or.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const wl="SyncEngine";class vA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class TA{constructor(e){this.key=e,this.hu=!1}}class wA{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new kt(c=>nm(c),zo),this.Iu=new Map,this.Eu=new Set,this.du=new pe(U.comparator),this.Au=new Map,this.Ru=new hl,this.Vu={},this.mu=new Map,this.fu=zn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bA(n,e,t=!0){const r=fg(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await cg(r,e,t,!0),s}async function AA(n,e){const t=fg(n);await cg(t,e,!0,!1)}async function cg(n,e,t,r){const s=await Gb(n.localStore,Xe(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await RA(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Xm(n.remoteStore,s),c}async function RA(n,e,t,r,s){n.pu=(p,g,w)=>async function(x,R,M,N){let L=R.view.ru(M);L.Cs&&(L=await wd(x.localStore,R.query,!1).then(({documents:I})=>R.view.ru(I,L)));const j=N&&N.targetChanges.get(R.targetId),G=N&&N.targetMismatches.get(R.targetId)!=null,W=R.view.applyChanges(L,x.isPrimaryClient,j,G);return Dd(x,R.targetId,W.au),W.snapshot}(n,p,g,w);const i=await wd(n.localStore,e,!0),o=new IA(e,i.Qs),c=o.ru(i.documents),l=ii.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Dd(n,t,u.au);const f=new vA(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function PA(n,e,t){const r=Q(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!zo(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&gl(r.remoteStore,s.targetId),bc(r,s.targetId)}).catch(Hn)):(bc(r,s.targetId),await vc(r.localStore,s.targetId,!0))}async function SA(n,e){const t=Q(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gl(t.remoteStore,r.targetId))}async function CA(n,e,t){const r=pg(n);try{const s=await function(o,c){const l=Q(o),u=ae.now(),f=c.reduce((w,C)=>w.add(C.key),Y());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=$e(),x=Y();return l.Ns.getEntries(w,f).next(R=>{C=R,C.forEach((M,N)=>{N.isValidDocument()||(x=x.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,C)).next(R=>{p=R;const M=[];for(const N of c){const L=$w(N,p.get(N.key).overlayedDocument);L!=null&&M.push(new fn(N.key,L,Hp(L.value.mapValue),Be.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,M,c)}).next(R=>{g=R;const M=R.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(w,R.batchId,M)})}).then(()=>({batchId:g.batchId,changes:im(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new pe(H)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,t),await ci(r,s.changes),await ai(r.remoteStore)}catch(s){const i=vl(s,"Failed to persist write");t.reject(i)}}async function lg(n,e){const t=Q(n);try{const r=await zb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?q(o.hu,14607):s.removedDocuments.size>0&&(q(o.hu,42227),o.hu=!1))}),await ci(t,r,e)}catch(r){await Hn(r)}}function Vd(n,e,t){const r=Q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Q(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(u=!0)}),u&&Tl(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xA(n,e,t){const r=Q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new pe(U.comparator);o=o.insert(i,ye.newNoDocument(i,$.min()));const c=Y().add(i),l=new Go($.min(),new Map,new pe(H),o,c);await lg(r,l),r.du=r.du.remove(i),r.Au.delete(e),bl(r)}else await vc(r.localStore,e,!1).then(()=>bc(r,e,t)).catch(Hn)}async function kA(n,e){const t=Q(n),r=e.batch.batchId;try{const s=await Bb(t.localStore,e);hg(t,r,null),ug(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ci(t,s)}catch(s){await Hn(s)}}async function VA(n,e,t){const r=Q(n);try{const s=await function(o,c){const l=Q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(q(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);hg(r,e,t),ug(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ci(r,s)}catch(s){await Hn(s)}}function ug(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function hg(n,e,t){const r=Q(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function bc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||dg(n,r)})}function dg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(gl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),bl(n))}function Dd(n,e,t){for(const r of t)r instanceof og?(n.Ru.addReference(r.key,e),DA(n,r)):r instanceof ag?(O(wl,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||dg(n,r.key)):z(19791,{wu:r})}function DA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(O(wl,"New document in limbo: "+t),n.Eu.add(r),bl(n))}function bl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(oe.fromString(e)),r=n.fu.next();n.Au.set(r,new TA(t)),n.du=n.du.insert(t,r),Xm(n.remoteStore,new wt(Xe(Bo(t.path)),r,"TargetPurposeLimboResolution",Qe.ce))}}async function ci(n,e,t){const r=Q(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,t).then(u=>{var f;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=pl.As(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=Q(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(u,g=>P.forEach(g.Es,w=>f.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>P.forEach(g.ds,w=>f.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!dn(p))throw p;O(ml,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const w=f.Ms.get(g),C=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(g,x)}}}(r.localStore,i))}async function NA(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){O(wl,"User change. New user:",e.toKey());const r=await Km(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new B(D.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ci(t,r.Ls)}}function OA(n,e){const t=Q(n),r=t.Au.get(e);if(r&&r.hu)return Y().add(r.key);{let s=Y();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function fg(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xA.bind(null,e),e.Pu.H_=yA.bind(null,e.eventManager),e.Pu.yu=EA.bind(null,e.eventManager),e}function pg(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VA.bind(null,e),e}class Ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Gm(this.persistence,new $m,e.initialUser,this.serializer)}Cu(e){return new dl(Ho.mi,this.serializer)}Du(e){return new Hm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ws.provider={build:()=>new Ws};class LA extends Ws{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){q(this.persistence.referenceDelegate instanceof yo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Um(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new dl(r=>yo.mi(r,t),this.serializer)}}class MA extends Ws{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await pg(this.xu.syncEngine),await ai(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Gm(this.persistence,new $m,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Um(r,e.asyncQueue,t)}Mu(e,t){const r=new zT(t,this.persistence);return new BT(e.asyncQueue,r)}Cu(e){const t=Mb(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new fl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Yb(),Wi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Hm}}class Io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NA.bind(null,this.syncEngine),await mA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _A}()}createDatastore(e){const t=Qo(e.databaseInfo.databaseId),r=function(i){return new Xb(i)}(e.databaseInfo);return function(i,o,c,l){return new nA(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new sA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Vd(this.syncEngine,t,0),function(){return Rd.v()?new Rd:new Wb}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,f){const p=new wA(s,i,o,c,l,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Q(s);O(qn,"RemoteStore shutting down."),i.Ea.add(5),await oi(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Io.provider={build:()=>new Io};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Me("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="FirestoreClient";class FA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ce.UNAUTHENTICATED,this.clientId=qc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{O(un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(O(un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fa(n,e){n.asyncQueue.verifyOperationInProgress(),O(un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Km(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Nd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await UA(n);O(un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Sd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Sd(e.remoteStore,s)),n._onlineComponents=e}async function UA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(un,"Using user provided OfflineComponentProvider");try{await Fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Mn("Error using user provided cache. Falling back to memory cache: "+t),await Fa(n,new Ws)}}else O(un,"Using default OfflineComponentProvider"),await Fa(n,new LA(void 0));return n._offlineComponents}async function gg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(un,"Using user provided OnlineComponentProvider"),await Nd(n,n._uninitializedComponentsProvider._online)):(O(un,"Using default OnlineComponentProvider"),await Nd(n,new Io))),n._onlineComponents}function jA(n){return gg(n).then(e=>e.syncEngine)}async function _g(n){const e=await gg(n),t=e.eventManager;return t.onListen=bA.bind(null,e.syncEngine),t.onUnlisten=PA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=AA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=SA.bind(null,e.syncEngine),t}function BA(n,e,t={}){const r=new dt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new mg({next:g=>{f.Nu(),o.enqueueAndForget(()=>sg(i,p));const w=g.docs.has(c);!w&&g.fromCache?u.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?u.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new ig(Bo(c.path),f,{includeMetadataChanges:!0,qa:!0});return rg(i,p)}(await _g(n),n.asyncQueue,e,t,r)),r.promise}function zA(n,e,t={}){const r=new dt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new mg({next:g=>{f.Nu(),o.enqueueAndForget(()=>sg(i,p)),g.fromCache&&l.source==="server"?u.reject(new B(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new ig(c,f,{includeMetadataChanges:!0,qa:!0});return rg(i,p)}(await _g(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="firestore.googleapis.com",Ld=!0;class Md{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Eg,this.ssl=Ld}else this.host=e.host,this.ssl=e.ssl??Ld;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Om;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ib)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Md({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Md(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PT;switch(r.type){case"firstParty":return new kT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Od.get(t);r&&(O("ComponentProvider","Removing Datastore"),Od.delete(t),r.terminate())}(this),Promise.resolve()}}function qA(n,e,t,r={}){var u;n=Rt(n,Xo);const s=Gn(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Cc(`https://${c}`),xc("Firestore",!0)),i.host!==Eg&&i.host!==c&&Mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Dn(l,o)&&(n._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ce.MOCK_USER;else{f=Af(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ce(g)}n._authCredentials=new ST(new vp(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yo(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ti(t,be._jsonSchema))return new be(e,r||null,new U(oe.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Ie("string",be._jsonSchemaVersion),referencePath:Ie("string")};class sn extends Yo{constructor(e,t,r){super(e,t,Bo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new U(e))}withConverter(e){return new sn(this.firestore,e,this._path)}}function BS(n,e,...t){if(n=Ue(n),wp("collection","path",e),n instanceof Xo){const r=oe.fromString(e,...t);return Ph(r),new sn(n,null,r)}{if(!(n instanceof be||n instanceof sn))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Ph(r),new sn(n.firestore,null,r)}}function Ac(n,e,...t){if(n=Ue(n),arguments.length===1&&(e=qc.newId()),wp("doc","path",e),n instanceof Xo){const r=oe.fromString(e,...t);return Rh(r),new be(n,null,new U(r))}{if(!(n instanceof be||n instanceof sn))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Rh(r),new be(n.firestore,n instanceof sn?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="AsyncQueue";class Ud{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qm(this,"async_queue_retry"),this._c=()=>{const r=Wi();r&&O(Fd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Wi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Wi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new dt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!dn(e))throw e;O(Fd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Me("INTERNAL UNHANDLED ERROR: ",jd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Il.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&z(47125,{Pc:jd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function jd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qr extends Xo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ud,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ud(e),this._firestoreClient=void 0,await e}}}function $A(n,e){const t=typeof n=="object"?n:Dc(),r=typeof n=="string"?n:co,s=So(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tf("firestore");i&&qA(s,...i)}return s}function Al(n){if(n._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ig(n),n._firestoreClient}function Ig(n){var r,s,i;const e=n._freezeSettings(),t=function(c,l,u,f){return new _w(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new FA(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}function zS(n,e){Mn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return GA(n,Io.provider,{build:r=>new MA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function GA(n,e,t){if((n=Rt(n,qr))._firestoreClient||n._terminated)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new B(D.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},Ig(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this._byteString=e}static fromBase64String(e){try{return new He(ve.fromBase64String(e))}catch(t){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new He(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:He._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ti(e,He._jsonSchema))return He.fromBase64String(e.bytes)}}He._jsonSchemaVersion="firestore/bytes/1.0",He._jsonSchema={type:Ie("string",He._jsonSchemaVersion),bytes:Ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ft._jsonSchemaVersion}}static fromJSON(e){if(ti(e,ft._jsonSchema))return new ft(e.latitude,e.longitude)}}ft._jsonSchemaVersion="firestore/geoPoint/1.0",ft._jsonSchema={type:Ie("string",ft._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ti(e,pt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new pt(e.vectorValues);throw new B(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:Ie("string",pt._jsonSchemaVersion),vectorValues:Ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=/^__.*__$/;class WA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}function vg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ac:n})}}class Sl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Sl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return vo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(vg(this.Ac)&&KA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class HA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Qo(e)}Cc(e,t,r,s=!1){return new Sl({Ac:e,methodName:t,Dc:r,path:me.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tg(n){const e=n._freezeSettings(),t=Qo(n._databaseId);return new HA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wg(n,e,t,r,s,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Pg("Data must be an object, but it was:",o,r);const c=Ag(r,o);let l,u;if(i.merge)l=new Je(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=QA(e,p,t);if(!o.contains(g))throw new B(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);XA(f,g)||f.push(g)}l=new Je(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new WA(new je(c),l,u)}class Cl extends Pl{_toFieldTransform(e){return new dm(e.path,new kr)}isEqual(e){return e instanceof Cl}}function bg(n,e){if(Rg(n=Ue(n)))return Pg("Unsupported field value:",e,n),Ag(n,e);if(n instanceof Pl)return function(r,s){if(!vg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=bg(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ae.fromDate(r);return{timestampValue:Nr(s.serializer,i)}}if(r instanceof ae){const i=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nr(s.serializer,i)}}if(r instanceof ft)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof He)return{bytesValue:Em(s.serializer,r._byteString)};if(r instanceof be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pt)return function(o,c){return{mapValue:{fields:{[Yc]:{stringValue:Zc},[Pr]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return nl(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${$c(r)}`)}(n,e)}function Ag(n,e){const t={};return Up(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qn(n,(r,s)=>{const i=bg(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Rg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof ft||n instanceof He||n instanceof be||n instanceof Pl||n instanceof pt)}function Pg(n,e,t){if(!Rg(t)||!bp(t)){const r=$c(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function QA(n,e,t){if((e=Ue(e))instanceof Rl)return e._internalPath;if(typeof e=="string")return Sg(n,e);throw vo("Field path arguments must be of type string or ",n,!1,void 0,t)}const JA=new RegExp("[~\\*/\\[\\]]");function Sg(n,e,t){if(e.search(JA)>=0)throw vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rl(...e.split("."))._internalPath}catch{throw vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(D.INVALID_ARGUMENT,c+n+l)}function XA(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YA extends Cg{data(){return super.data()}}function xg(n,e){return typeof e=="string"?Sg(n,e):e instanceof Rl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eR{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Pr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>fe(o.doubleValue));return new pt(t)}convertGeoPoint(e){return new ft(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(qs(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);q(Cm(r),9688,{name:e});const s=new Fn(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||Me(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vn extends Cg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vn._jsonSchema={type:Ie("string",Vn._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Hi extends Vn{data(e={}){return super.data(e)}}class yr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Is(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Hi(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tR(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(n){n=Rt(n,be);const e=Rt(n.firestore,qr);return BA(Al(e),n._key).then(t=>sR(e,n,t))}yr._jsonSchemaVersion="firestore/querySnapshot/1.0",yr._jsonSchema={type:Ie("string",yr._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Vg extends eR{constructor(e){super(),this.firestore=e}convertBytes(e){return new He(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function qS(n){n=Rt(n,Yo);const e=Rt(n.firestore,qr),t=Al(e),r=new Vg(e);return ZA(n._query),zA(t,n._query).then(s=>new yr(e,r,n,s))}function rR(n,e,t){n=Rt(n,be);const r=Rt(n.firestore,qr),s=kg(n.converter,e);return Dg(r,[wg(Tg(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Be.none())])}function $S(n,e){const t=Rt(n.firestore,qr),r=Ac(n),s=kg(n.converter,e);return Dg(t,[wg(Tg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then(()=>r)}function Dg(n,e){return function(r,s){const i=new dt;return r.asyncQueue.enqueueAndForget(async()=>CA(await jA(r),s,i)),i.promise}(Al(n),e)}function sR(n,e,t){const r=t.docs.get(e._key),s=new Vg(n);return new Vn(n,s,e._key,r,new Is(t.hasPendingWrites,t.fromCache),e.converter)}function iR(){return new Cl("serverTimestamp")}(function(e,t=!0){(function(s){jr=s})(Kn),Nn(new on("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new qr(new CT(r.getProvider("auth-internal")),new VT(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),lt(Th,wh,e),lt(Th,wh,"esm2020")})();var oR="firebase",aR="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(oR,aR,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="firebasestorage.googleapis.com",cR="storageBucket",lR=2*60*1e3,uR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends _t{constructor(e,t,r=0){super(Ua(e),`Firebase Storage: ${t} (${Ua(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ua(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gt||(gt={}));function Ua(n){return"storage/"+n}function hR(){const n="An unknown error occurred, please check the error payload for server response.";return new yt(gt.UNKNOWN,n)}function dR(){return new yt(gt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fR(){return new yt(gt.CANCELED,"User canceled the upload/download.")}function pR(n){return new yt(gt.INVALID_URL,"Invalid URL '"+n+"'.")}function mR(n){return new yt(gt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Bd(n){return new yt(gt.INVALID_ARGUMENT,n)}function Og(){return new yt(gt.APP_DELETED,"The Firebase app was deleted.")}function gR(n){return new yt(gt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=et.makeFromUrl(e,t)}catch{return new et(e,"")}if(r.path==="")return r;throw mR(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},x=t===Ng?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",M=new RegExp(`^https?://${x}/${s}/${R}`,"i"),L=[{regex:c,indices:l,postModify:i},{regex:w,indices:C,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<L.length;j++){const G=L[j],W=G.regex.exec(e);if(W){const I=W[G.indices.bucket];let _=W[G.indices.path];_||(_=""),r=new et(I,_),G.postModify(r);break}}if(r==null)throw pR(e);return r}}class _R{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...R){u||(u=!0,e.apply(null,R))}function p(R){s=setTimeout(()=>{s=null,n(w,l())},R)}function g(){i&&clearTimeout(i)}function w(R,...M){if(u){g();return}if(R){g(),f.call(null,R,...M);return}if(l()||o){g(),f.call(null,R,...M);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,p(L)}let C=!1;function x(R){C||(C=!0,g(),!u&&(s!==null?(R||(c=2),clearTimeout(s),p(0)):R||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,x(!0)},t),x}function ER(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(n){return n!==void 0}function zd(n,e,t,r){if(r<e)throw Bd(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Bd(`Invalid value for '${n}'. Expected ${t} or less.`)}function vR(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var To;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(To||(To={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,t,r,s,i,o,c,l,u,f,p,g=!0,w=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,x)=>{this.resolve_=C,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Vi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===To.NO_ERROR,l=i.getStatus();if(!c||TR(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===To.ABORT;r(!1,new Vi(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Vi(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());IR(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=hR();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Og():fR();o(l)}else{const l=dR();o(l)}};this.canceled_?t(!1,new Vi(!1,null,!0)):this.backoffId_=yR(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ER(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function bR(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function AR(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function RR(n,e){e&&(n["X-Firebase-GMPID"]=e)}function PR(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function SR(n,e,t,r,s,i,o=!0,c=!1){const l=vR(n.urlParams),u=n.url+l,f=Object.assign({},n.headers);return RR(f,e),bR(f,t),AR(f,i),PR(f,r),new wR(u,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function xR(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this._service=e,t instanceof et?this._location=t:this._location=et.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wo(e,t)}get root(){const e=new et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xR(this._location.path)}get storage(){return this._service}get parent(){const e=CR(this._location.path);if(e===null)return null;const t=new et(this._location.bucket,e);return new wo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw gR(e)}}function qd(n,e){const t=e==null?void 0:e[cR];return t==null?null:et.makeFromBucketSpec(t,n)}function kR(n,e,t,r={}){n.host=`${e}:${t}`;const s=Gn(e);s&&(Cc(`https://${n.host}/b`),xc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Af(i,n.app.options.projectId))}class VR{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Ng,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lR,this._maxUploadRetryTime=uR,this._requests=new Set,s!=null?this._bucket=et.makeFromBucketSpec(s,this._host):this._bucket=qd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=et.makeFromBucketSpec(this._url,e):this._bucket=qd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wo(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new _R(Og());{const o=SR(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const $d="@firebase/storage",Gd="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="storage";function DR(n=Dc(),e){n=Ue(n);const r=So(n,Lg).getImmediate({identifier:e}),s=Tf("storage");return s&&NR(r,...s),r}function NR(n,e,t,r={}){kR(n,e,t,r)}function OR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new VR(t,r,s,e,Kn)}function LR(){Nn(new on(Lg,OR,"PUBLIC").setMultipleInstances(!0)),lt($d,Gd,""),lt($d,Gd,"esm2020")}LR();const MR={apiKey:"AIzaSyChmSmwpwKBCdMzrsvyidxX3Dr_fXoh-YA",authDomain:"payroll-cae74.firebaseapp.com",projectId:"payroll-cae74",storageBucket:"payroll-cae74.firebasestorage.app",messagingSenderId:"126650756988",appId:"1:126650756988:web:99fc9384a4ced996f53ef9",measurementId:"G-S4E1B33E1P"},xl=Xu().length?Xu()[0]:Vf(MR),Zo=AT(xl),Kd=$A(xl);DR(xl);const Wd={EMPLOYEES:"employees",CUSTOMERS:"customers",USERS:"users",PAYROLL:"payroll",SALARY_HISTORY:"salaryHistory",LEAVE_RECORDS:"leaveRecords"},FR=async(n,e)=>{try{const r=(await uv(Zo,n,e)).user,s=await nR(Ac(Kd,Wd.USERS,r.uid));if(!s.exists()){const i={uid:r.uid,email:r.email||n,displayName:r.displayName||n.split("@")[0],role:"viewer",createdAt:iR()};return await rR(Ac(Kd,Wd.USERS,r.uid),i),{...i,createdAt:new Date}}return s.data()}catch(t){throw console.error("Sign in error:",t),new Error(t.message||"Failed to sign in")}},UR=()=>pv(Zo),jR=n=>fv(Zo,n),BR=()=>Zo.currentUser,zR=n=>{if(!n)return null;try{return JSON.parse(n)}catch{return null}},qR=zR(localStorage.getItem(ar.SESSION)),Hs=nf(n=>({session:qR||null,loading:!1,async login(e){n({loading:!0,error:void 0});try{const t=await FR(e.email,e.password),r={role:t.role||"viewer",name:t.displayName||e.email.split("@")[0],user:{email:t.email||e.email},issuedAt:Date.now()};localStorage.setItem(ar.SESSION,JSON.stringify(r)),n({session:r})}catch(t){throw n({error:t.message}),t}finally{n({loading:!1})}},async logout(){try{await UR()}catch{}localStorage.removeItem(ar.SESSION),n({session:null})},initialize(){n({loading:!0});const e=jR(r=>{if(r){const s={role:"viewer",name:r.displayName||r.email||"User",user:{email:r.email||""},issuedAt:Date.now()};localStorage.setItem(ar.SESSION,JSON.stringify(s)),n({session:s,loading:!1})}else localStorage.removeItem(ar.SESSION),n({session:null,loading:!1})}),t=BR();if(t){const r={role:"viewer",name:t.displayName||t.email||"User",user:{email:t.email||""},issuedAt:Date.now()};localStorage.setItem(ar.SESSION,JSON.stringify(r)),n({session:r,loading:!1})}return e}}));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mg=(...n)=>n.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=V.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...c},l)=>V.createElement("svg",{ref:l,...GR,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Mg("lucide",s),...c},[...o.map(([u,f])=>V.createElement(u,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=(n,e)=>{const t=V.forwardRef(({className:r,...s},i)=>V.createElement(KR,{ref:i,iconNode:e,className:Mg(`lucide-${$R(n)}`,r),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=Et("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=Et("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=Et("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=Et("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=Et("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=Et("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=Et("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=Et("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=Et("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=Et("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),rP=[{title:"Dashboard",icon:ZR,path:"/dashboard",permission:"view_dashboard"},{title:"Employees",icon:nP,path:"/employees",permission:"view_employees",children:[{title:"Permanent Employees",path:"/employees/permanent"},{title:"Temporary Employees",path:"/employees/temporary"},{title:"All Employees",path:"/employees/all"},{title:"Document Expiry",path:"/employees/documents"}]},{title:"Payroll",icon:HR,path:"/payroll",permission:"view_payroll",children:[{title:"Permanent Payroll",path:"/payroll/permanent"},{title:"Temporary Payroll",path:"/payroll/temporary"},{title:"WPS Generation",path:"/payroll/wps"},{title:"Payroll History",path:"/payroll/history"}]},{title:"Attendance",icon:JR,path:"/attendance",permission:"view_attendance",children:[{title:"Daily Attendance",path:"/attendance/daily"},{title:"Temporary Workers Log",path:"/attendance/temporary"},{title:"Import Attendance",path:"/attendance/import"}]},{title:"Customers",icon:WR,path:"/customers",children:[{title:"All Customers",path:"/customers"},{title:"Add Customer",path:"/customers/new"},{title:"Contracts",path:"/customers/contracts"},{title:"Deploy Staff",path:"/customers/deploy"},{title:"Customer Invoices",path:"/customers/invoices"}]},{title:"Accounts",icon:XR,path:"/accounts",permission:"view_accounts",children:[{title:"Overview",path:"/accounts"},{title:"Transactions",path:"/accounts/transactions",permission:"view_transactions"},{title:"Payment Vouchers",path:"/accounts/payments",permission:"create_payment_voucher"},{title:"Receipt Vouchers",path:"/accounts/receipts"},{title:"Bank Accounts",path:"/accounts/banks"},{title:"Chart of Accounts",path:"/accounts/chart"},{title:"Expense Claims",path:"/accounts/expenses"},{title:"Trial Balance",path:"/accounts/trial-balance"},{title:"P&L Statement",path:"/accounts/profit-loss"}]},{title:"Reports",icon:YR,path:"/reports",permission:"view_reports"},{title:"Settings",icon:tP,path:"/settings",permission:"view_settings",children:[{title:"Company Info",path:"/settings/company"},{title:"Payroll Settings",path:"/settings/payroll"},{title:"Email Templates",path:"/settings/templates"},{title:"Backup & Restore",path:"/settings/backup"}]}];function Fg(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Fg(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Ug(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Fg(n))&&(r&&(r+=" "),r+=e);return r}const kl="-",sP=n=>{const e=oP(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:o=>{const c=o.split(kl);return c[0]===""&&c.length!==1&&c.shift(),jg(c,e)||iP(o)},getConflictingClassGroupIds:(o,c)=>{const l=t[o]||[];return c&&r[o]?[...l,...r[o]]:l}}},jg=(n,e)=>{var o;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?jg(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=n.join(kl);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},Hd=/^\[(.+)\]$/,iP=n=>{if(Hd.test(n)){const e=Hd.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},oP=n=>{const{theme:e,prefix:t}=n,r={nextPart:new Map,validators:[]};return cP(Object.entries(n.classGroups),t).forEach(([i,o])=>{Rc(o,r,i,e)}),r},Rc=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Qd(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(aP(s)){Rc(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{Rc(o,Qd(e,i),t,r)})})},Qd=(n,e)=>{let t=n;return e.split(kl).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},aP=n=>n.isThemeGetter,cP=(n,e)=>e?n.map(([t,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,c])=>[e+o,c])):i);return[t,s]}):n,lP=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(i,o)=>{t.set(i,o),e++,e>n&&(e=0,r=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},Bg="!",uP=n=>{const{separator:e,experimentalParseClassName:t}=n,r=e.length===1,s=e[0],i=e.length,o=c=>{const l=[];let u=0,f=0,p;for(let R=0;R<c.length;R++){let M=c[R];if(u===0){if(M===s&&(r||c.slice(R,R+i)===e)){l.push(c.slice(f,R)),f=R+i;continue}if(M==="/"){p=R;continue}}M==="["?u++:M==="]"&&u--}const g=l.length===0?c:c.substring(f),w=g.startsWith(Bg),C=w?g.substring(1):g,x=p&&p>f?p-f:void 0;return{modifiers:l,hasImportantModifier:w,baseClassName:C,maybePostfixModifierPosition:x}};return t?c=>t({className:c,parseClassName:o}):o},hP=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(r=>{r[0]==="["?(e.push(...t.sort(),r),t=[]):t.push(r)}),e.push(...t.sort()),e},dP=n=>({cache:lP(n.cacheSize),parseClassName:uP(n),...sP(n)}),fP=/\s+/,pP=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=n.trim().split(fP);let c="";for(let l=o.length-1;l>=0;l-=1){const u=o[l],{modifiers:f,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:w}=t(u);let C=!!w,x=r(C?g.substring(0,w):g);if(!x){if(!C){c=u+(c.length>0?" "+c:c);continue}if(x=r(g),!x){c=u+(c.length>0?" "+c:c);continue}C=!1}const R=hP(f).join(":"),M=p?R+Bg:R,N=M+x;if(i.includes(N))continue;i.push(N);const L=s(x,C);for(let j=0;j<L.length;++j){const G=L[j];i.push(M+G)}c=u+(c.length>0?" "+c:c)}return c};function mP(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=zg(e))&&(r&&(r+=" "),r+=t);return r}const zg=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=zg(n[r]))&&(t&&(t+=" "),t+=e);return t};function gP(n,...e){let t,r,s,i=o;function o(l){const u=e.reduce((f,p)=>p(f),n());return t=dP(u),r=t.cache.get,s=t.cache.set,i=c,c(l)}function c(l){const u=r(l);if(u)return u;const f=pP(l,t);return s(l,f),f}return function(){return i(mP.apply(null,arguments))}}const de=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},qg=/^\[(?:([a-z-]+):)?(.+)\]$/i,_P=/^\d+\/\d+$/,yP=new Set(["px","full","screen"]),EP=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,IP=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vP=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,TP=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wP=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,It=n=>Er(n)||yP.has(n)||_P.test(n),qt=n=>$r(n,"length",kP),Er=n=>!!n&&!Number.isNaN(Number(n)),ja=n=>$r(n,"number",Er),ds=n=>!!n&&Number.isInteger(Number(n)),bP=n=>n.endsWith("%")&&Er(n.slice(0,-1)),J=n=>qg.test(n),$t=n=>EP.test(n),AP=new Set(["length","size","percentage"]),RP=n=>$r(n,AP,$g),PP=n=>$r(n,"position",$g),SP=new Set(["image","url"]),CP=n=>$r(n,SP,DP),xP=n=>$r(n,"",VP),fs=()=>!0,$r=(n,e,t)=>{const r=qg.exec(n);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):t(r[2]):!1},kP=n=>IP.test(n)&&!vP.test(n),$g=()=>!1,VP=n=>TP.test(n),DP=n=>wP.test(n),NP=()=>{const n=de("colors"),e=de("spacing"),t=de("blur"),r=de("brightness"),s=de("borderColor"),i=de("borderRadius"),o=de("borderSpacing"),c=de("borderWidth"),l=de("contrast"),u=de("grayscale"),f=de("hueRotate"),p=de("invert"),g=de("gap"),w=de("gradientColorStops"),C=de("gradientColorStopPositions"),x=de("inset"),R=de("margin"),M=de("opacity"),N=de("padding"),L=de("saturate"),j=de("scale"),G=de("sepia"),W=de("skew"),I=de("space"),_=de("translate"),E=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],v=()=>["auto",J,e],A=()=>[J,e],y=()=>["",It,qt],Te=()=>["auto",Er,J],nt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Xn=()=>["solid","dashed","dotted","double","none"],li=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Vt=()=>["start","end","center","between","around","evenly","stretch"],rt=()=>["","0",J],ui=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Ke=()=>[Er,J];return{cacheSize:500,separator:":",theme:{colors:[fs],spacing:[It,qt],blur:["none","",$t,J],brightness:Ke(),borderColor:[n],borderRadius:["none","","full",$t,J],borderSpacing:A(),borderWidth:y(),contrast:Ke(),grayscale:rt(),hueRotate:Ke(),invert:rt(),gap:A(),gradientColorStops:[n],gradientColorStopPositions:[bP,qt],inset:v(),margin:v(),opacity:Ke(),padding:A(),saturate:Ke(),scale:Ke(),sepia:rt(),skew:Ke(),space:A(),translate:A()},classGroups:{aspect:[{aspect:["auto","square","video",J]}],container:["container"],columns:[{columns:[$t]}],"break-after":[{"break-after":ui()}],"break-before":[{"break-before":ui()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...nt(),J]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ds,J]}],basis:[{basis:v()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",J]}],grow:[{grow:rt()}],shrink:[{shrink:rt()}],order:[{order:["first","last","none",ds,J]}],"grid-cols":[{"grid-cols":[fs]}],"col-start-end":[{col:["auto",{span:["full",ds,J]},J]}],"col-start":[{"col-start":Te()}],"col-end":[{"col-end":Te()}],"grid-rows":[{"grid-rows":[fs]}],"row-start-end":[{row:["auto",{span:[ds,J]},J]}],"row-start":[{"row-start":Te()}],"row-end":[{"row-end":Te()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",J]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",J]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...Vt()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Vt(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Vt(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[N]}],px:[{px:[N]}],py:[{py:[N]}],ps:[{ps:[N]}],pe:[{pe:[N]}],pt:[{pt:[N]}],pr:[{pr:[N]}],pb:[{pb:[N]}],pl:[{pl:[N]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",J,e]}],"min-w":[{"min-w":[J,e,"min","max","fit"]}],"max-w":[{"max-w":[J,e,"none","full","min","max","fit","prose",{screen:[$t]},$t]}],h:[{h:[J,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[J,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[J,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[J,e,"auto","min","max","fit"]}],"font-size":[{text:["base",$t,qt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ja]}],"font-family":[{font:[fs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",J]}],"line-clamp":[{"line-clamp":["none",Er,ja]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",It,J]}],"list-image":[{"list-image":["none",J]}],"list-style-type":[{list:["none","disc","decimal",J]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[M]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Xn(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",It,qt]}],"underline-offset":[{"underline-offset":["auto",It,J]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[M]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...nt(),PP]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",RP]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},CP]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[M]}],"border-style":[{border:[...Xn(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[M]}],"divide-style":[{divide:Xn()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Xn()]}],"outline-offset":[{"outline-offset":[It,J]}],"outline-w":[{outline:[It,qt]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[M]}],"ring-offset-w":[{"ring-offset":[It,qt]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",$t,xP]}],"shadow-color":[{shadow:[fs]}],opacity:[{opacity:[M]}],"mix-blend":[{"mix-blend":[...li(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":li()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",$t,J]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[L]}],sepia:[{sepia:[G]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[M]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[G]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",J]}],duration:[{duration:Ke()}],ease:[{ease:["linear","in","out","in-out",J]}],delay:[{delay:Ke()}],animate:[{animate:["none","spin","ping","pulse","bounce",J]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[ds,J]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[W]}],"skew-y":[{"skew-y":[W]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",J]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[It,qt,ja]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},OP=gP(NP);function Pn(...n){return OP(Ug(n))}const Jd={name:"Nipon Payroll Pro",version:"0.0.0",currency:"QAR"},LP={admin:["view_dashboard","view_employees","create_employee","update_employee","delete_employee","view_payroll","process_payroll","approve_payroll","view_accounts","create_account","update_account","view_transactions","post_transaction","create_payment_voucher","approve_payment_voucher","view_reports","view_settings"],manager:["view_dashboard","view_employees","create_employee","update_employee","view_payroll","process_payroll","view_accounts","view_transactions","create_payment_voucher","view_reports"]};function Xd(n,e){var t;return e?n?((t=LP[n])==null?void 0:t.includes(e))??!1:!1:!0}const MP=()=>{const n=$n(),e=Hs(p=>{var g;return(g=p.session)==null?void 0:g.role}),t=Hs(p=>p.logout),r=V.useMemo(()=>rP.filter(p=>Xd(e,p.permission)),[e]),s=V.useMemo(()=>{const p={};return r.forEach(g=>{var w;if((w=g.children)!=null&&w.length){const C=g.children.some(x=>n.pathname.startsWith(x.path))||n.pathname===g.path;p[g.path]=C}}),p},[r,n.pathname]),[i,o]=V.useState(s);V.useEffect(()=>{o(s)},[s]);const c=V.useCallback(p=>{o(g=>({...g,[p]:!g[p]}))},[]),l=V.useRef(null),u=p=>{if(!l.current)return;const g=Array.from(l.current.querySelectorAll("[data-nav-item]")),w=g.indexOf(document.activeElement);if(p.key==="ArrowDown"){p.preventDefault();const C=g[w+1]||g[0];C==null||C.focus()}else if(p.key==="ArrowUp"){p.preventDefault();const C=g[w-1]||g[g.length-1];C==null||C.focus()}else if(p.key==="ArrowRight"){const C=g[w],x=C==null?void 0:C.getAttribute("data-group");x&&i[x]===!1&&(p.preventDefault(),c(x))}else if(p.key==="ArrowLeft"){const C=g[w],x=C==null?void 0:C.getAttribute("data-group");x&&i[x]&&(p.preventDefault(),c(x))}},f=(p,g)=>n.pathname===p?!0:g==null?void 0:g.some(w=>n.pathname.startsWith(w.path));return T.jsxs("aside",{className:"w-64 shrink-0 border-r bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 h-full flex flex-col","aria-label":"Main navigation",children:[T.jsxs("div",{className:"px-4 py-5 border-b",children:[T.jsx("h1",{className:"text-lg font-semibold tracking-tight text-qatar-maroon",children:Jd.name}),T.jsxs("p",{className:"text-[10px] text-gray-500",children:["v",Jd.version]})]}),T.jsx("nav",{className:"flex-1 overflow-y-auto py-4",role:"navigation",onKeyDown:u,children:T.jsx("ul",{className:"space-y-1 px-3",ref:l,children:r.map(p=>{var x;const g=f(p.path,p.children),w=!!((x=p.children)!=null&&x.length),C=w?i[p.path]:!1;return T.jsx("li",{children:T.jsxs("div",{className:Pn("flex flex-col rounded-md",g&&"bg-qatar-maroon/5"),children:[T.jsxs("div",{className:"flex items-center",children:[T.jsxs(ju,{to:p.path,"data-nav-item":!0,"data-group":w?p.path:void 0,className:({isActive:R})=>Pn("group flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon",R||g?"text-qatar-maroon":"text-gray-600 hover:bg-qatar-maroon/10 hover:text-qatar-maroon"),children:[T.jsx(p.icon,{className:"h-4 w-4"}),T.jsx("span",{className:"truncate flex-1 text-left",children:p.title})]}),w&&T.jsx("button",{type:"button","aria-label":C?"Collapse section":"Expand section","data-nav-item":!0,"data-group":p.path,onClick:()=>c(p.path),className:Pn("p-1 mr-1 rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon",C?"text-qatar-maroon":"text-gray-500 hover:text-qatar-maroon"),children:T.jsx(QR,{className:Pn("h-4 w-4 transform transition-transform",C?"rotate-180":"rotate-0")})})]}),w&&C&&T.jsx("ul",{className:"mt-0.5 mb-1 ml-6 space-y-0.5 border-l border-qatar-maroon/10 pl-3",children:p.children.filter(R=>Xd(e,R.permission)).map(R=>{const M=n.pathname.startsWith(R.path);return T.jsx("li",{children:T.jsx(ju,{to:R.path,"data-nav-item":!0,className:({isActive:N})=>Pn("block rounded px-2 py-1 text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon",N||M?"bg-qatar-maroon/90 text-white":"text-gray-500 hover:text-qatar-maroon hover:bg-qatar-maroon/10"),children:R.title})},R.path)})})]})},p.path)})})}),T.jsxs("div",{className:"p-3 border-t text-xs text-gray-500 space-y-2",children:[T.jsxs("button",{type:"button",onClick:()=>t(),className:"w-full flex items-center justify-center gap-2 rounded border border-qatar-maroon/30 px-3 py-2 text-[11px] font-medium text-qatar-maroon hover:bg-qatar-maroon hover:text-white transition-colors",children:[T.jsx(eP,{className:"h-3.5 w-3.5"})," Logout"]}),T.jsxs("p",{className:"text-center",children:["Desktop Only • ",new Date().getFullYear()]})]})]})};function FP(){const{session:n,loading:e,error:t,login:r,logout:s}=Hs();return{session:n,isLoading:e,error:t,login:i=>r(i),logout:s}}function Yd(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function UP(...n){return e=>{let t=!1;const r=n.map(s=>{const i=Yd(s,e);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let s=0;s<r.length;s++){const i=r[s];typeof i=="function"?i():Yd(n[s],null)}}}}function jP(n){const e=zP(n),t=V.forwardRef((r,s)=>{const{children:i,...o}=r,c=V.Children.toArray(i),l=c.find($P);if(l){const u=l.props.children,f=c.map(p=>p===l?V.Children.count(u)>1?V.Children.only(null):V.isValidElement(u)?u.props.children:null:p);return T.jsx(e,{...o,ref:s,children:V.isValidElement(u)?V.cloneElement(u,void 0,f):null})}return T.jsx(e,{...o,ref:s,children:i})});return t.displayName=`${n}.Slot`,t}var BP=jP("Slot");function zP(n){const e=V.forwardRef((t,r)=>{const{children:s,...i}=t;if(V.isValidElement(s)){const o=KP(s),c=GP(i,s.props);return s.type!==V.Fragment&&(c.ref=r?UP(r,o):o),V.cloneElement(s,c)}return V.Children.count(s)>1?V.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var qP=Symbol("radix.slottable");function $P(n){return V.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===qP}function GP(n,e){const t={...e};for(const r in e){const s=n[r],i=e[r];/^on[A-Z]/.test(r)?s&&i?t[r]=(...c)=>{const l=i(...c);return s(...c),l}:s&&(t[r]=s):r==="style"?t[r]={...s,...i}:r==="className"&&(t[r]=[s,i].filter(Boolean).join(" "))}return{...n,...t}}function KP(n){var r,s;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(s=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:s.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}const Zd=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,ef=Ug,WP=(n,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return ef(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:s,defaultVariants:i}=e,o=Object.keys(s).map(u=>{const f=t==null?void 0:t[u],p=i==null?void 0:i[u];if(f===null)return null;const g=Zd(f)||Zd(p);return s[u][g]}),c=t&&Object.entries(t).reduce((u,f)=>{let[p,g]=f;return g===void 0||(u[p]=g),u},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((u,f)=>{let{class:p,className:g,...w}=f;return Object.entries(w).every(C=>{let[x,R]=C;return Array.isArray(R)?R.includes({...i,...c}[x]):{...i,...c}[x]===R})?[...u,p,g]:u},[]);return ef(n,o,l,t==null?void 0:t.class,t==null?void 0:t.className)},HP=WP("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qatar-maroon disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-qatar-maroon text-white hover:bg-qatar-maroon/90",secondary:"bg-sand text-qatar-maroon hover:bg-sand/80",outline:"border border-qatar-maroon bg-transparent hover:bg-qatar-maroon hover:text-white",ghost:"hover:bg-qatar-maroon/10",destructive:"bg-red-600 text-white hover:bg-red-700"},size:{sm:"h-8 px-3",md:"h-10 px-4",lg:"h-12 px-6"}},defaultVariants:{variant:"default",size:"md"}}),tf=({className:n,variant:e,size:t,asChild:r,...s})=>{const i=r?BP:"button";return T.jsx(i,{className:Pn(HP({variant:e,size:t}),n),...s})},Gg=nf(n=>({items:[],push:e=>n(t=>({items:[...t.items,{...e,id:crypto.randomUUID(),createdAt:Date.now()}]})),remove:e=>n(t=>({items:t.items.filter(r=>r.id!==e)})),clear:()=>n({items:[]})})),QP=()=>{const{session:n,logout:e}=FP(),t=Gg(r=>r.items.length);return T.jsxs("header",{className:"h-14 border-b bg-white/70 backdrop-blur flex items-center gap-4 px-4",children:[T.jsx("a",{href:"#main",className:"sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-qatar-maroon text-white px-2 py-1 rounded",children:"Skip to content"}),T.jsxs("div",{className:"ml-auto flex items-center gap-3",children:[T.jsxs("div",{className:"text-sm text-gray-600 hidden md:block","aria-live":"polite",children:[n==null?void 0:n.name," ",T.jsxs("span",{className:"text-gray-400",children:["(",n==null?void 0:n.role,")"]})]}),T.jsxs(tf,{variant:"ghost",size:"sm","aria-label":"Notifications",children:["🔔",t>0&&T.jsx("span",{className:"ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-qatar-maroon px-1 text-[10px] font-semibold text-white",children:t})]}),T.jsx(tf,{variant:"outline",size:"sm",onClick:()=>e(),"aria-label":"Sign out",children:"Sign Out"})]})]})},JP=()=>{const{items:n,remove:e}=Gg();return V.useEffect(()=>{if(!n.length)return;const t=n.map(r=>setTimeout(()=>e(r.id),6e3));return()=>{t.forEach(clearTimeout)}},[n,e]),T.jsx("div",{className:"pointer-events-none fixed inset-0 z-50 flex flex-col items-end gap-2 p-4","aria-live":"assertive",role:"region","aria-label":"Notifications",children:n.map(t=>T.jsxs("div",{className:Pn("pointer-events-auto w-80 rounded border p-3 shadow bg-white text-sm relative",t.type==="success"&&"border-green-500",t.type==="error"&&"border-red-600",t.type==="warning"&&"border-amber-500",t.type==="info"&&"border-qatar-maroon"),children:[T.jsxs("div",{className:"font-medium mb-1 flex items-center justify-between",children:[T.jsx("span",{children:t.title}),T.jsx("button",{onClick:()=>e(t.id),className:"text-xs text-gray-500 hover:text-gray-800","aria-label":"Dismiss notification",children:"✕"})]}),t.message&&T.jsx("p",{className:"text-xs text-gray-600 leading-snug",children:t.message})]},t.id))})},XP=()=>null,se=({children:n})=>T.jsxs("div",{className:"flex h-screen w-screen overflow-hidden bg-qatar-beige",children:[T.jsx(MP,{}),T.jsxs("div",{className:"flex flex-1 flex-col min-w-0",children:[T.jsx(XP,{}),T.jsx(QP,{}),T.jsx("main",{id:"main",className:"flex-1 overflow-y-auto focus:outline-none",children:n})]}),T.jsx(JP,{})]});class YP extends rf.Component{constructor(){super(...arguments);Vu(this,"state",{hasError:!1})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,r){console.error("ErrorBoundary caught error",t,r)}render(){var t;return this.state.hasError?T.jsxs("div",{className:"p-6 space-y-4",children:[T.jsx("h1",{className:"text-xl font-semibold text-red-700",children:"Something went wrong."}),T.jsx("pre",{className:"text-xs bg-red-50 p-4 rounded",children:(t=this.state.error)==null?void 0:t.message})]}):this.props.children}}const ZP=V.lazy(()=>re(()=>import("./Login-DZi-lecP.js"),__vite__mapDeps([0,1,2,3,4])).then(n=>({default:n.LoginPage}))),eS=V.lazy(()=>re(()=>import("./Dashboard-By5HpuW_.js"),__vite__mapDeps([5,1,2,3,6,7,8,9,10,11,12])).then(n=>({default:n.DashboardPage}))),tS=V.lazy(()=>re(()=>import("./EmployeeList-_kIuzUz0.js"),__vite__mapDeps([13,1,2,14,4,7,15,8,9,6,16,17,3])).then(n=>({default:n.EmployeeListPage}))),nS=V.lazy(()=>re(()=>import("./PermanentEmployeeList-DdQb9tWI.js"),__vite__mapDeps([18,1,2,9,3,7,16,17,19])).then(n=>({default:n.PermanentEmployeeList}))),rS=V.lazy(()=>re(()=>import("./TemporaryEmployeeList-CbNOW8CA.js"),__vite__mapDeps([20,1,2,9,3,7,16,17,19])).then(n=>({default:n.TemporaryEmployeeList}))),sS=V.lazy(()=>re(()=>import("./AddEmployee-4-MNJB38.js"),__vite__mapDeps([21,1,2])).then(n=>({default:n.AddEmployeePage}))),iS=V.lazy(()=>re(()=>import("./ImportEmployees-B6tw7zbJ.js"),__vite__mapDeps([22,1,2])).then(n=>({default:n.ImportEmployeesPage}))),oS=V.lazy(()=>re(()=>import("./Documents-DbWCsKE4.js"),__vite__mapDeps([23,1,2,8,9])).then(n=>({default:n.EmployeeDocumentsPage}))),aS=V.lazy(()=>re(()=>import("./EmployeeDetail-CSqj4NKD.js"),__vite__mapDeps([24,1,2,8,9,3,7,16,4])).then(n=>({default:n.EmployeeDetailPage}))),cS=V.lazy(()=>re(()=>import("./Leave-D--e2IaI.js"),__vite__mapDeps([25,1,2,8,9])).then(n=>({default:n.EmployeeLeavePage}))),lS=V.lazy(()=>re(()=>import("./EndOfService-BKLY6-Pa.js"),__vite__mapDeps([26,1,2,8,9,11])).then(n=>({default:n.EndOfServicePage}))),uS=V.lazy(()=>re(()=>import("./PayrollList-D4gz41Vo.js"),__vite__mapDeps([27,1,2])).then(n=>({default:n.PayrollListPage}))),hS=V.lazy(()=>re(()=>import("./ProcessPayroll-DlrPkxcU.js"),__vite__mapDeps([28,1,2,11,8,9,10,6,29,14])).then(n=>({default:n.ProcessPayrollPage}))),dS=V.lazy(()=>re(()=>import("./PayrollHistory-B7cQHOzB.js"),__vite__mapDeps([30,1,2,10,11])).then(n=>({default:n.PayrollHistoryPage}))),fS=V.lazy(()=>re(()=>import("./Payslips-De5Fbhze.js"),__vite__mapDeps([31,1,2,10,11,8,9,29])).then(n=>({default:n.PayslipsPage}))),pS=V.lazy(()=>re(()=>import("./SalaryAdjustments-CVnrkoVs.js"),__vite__mapDeps([32,1,2])).then(n=>({default:n.SalaryAdjustmentsPage}))),mS=V.lazy(()=>re(()=>import("./Reports-BsT5s-xe.js"),__vite__mapDeps([33,1,2])).then(n=>({default:n.ReportsPage}))),gS=V.lazy(()=>re(()=>import("./AccountsDashboard-qQGwK41g.js"),__vite__mapDeps([34,1,2])).then(n=>({default:n.AccountsDashboardPage}))),_S=V.lazy(()=>re(()=>import("./Transactions-DyjQZA9r.js"),__vite__mapDeps([35,1,2])).then(n=>({default:n.TransactionsPage}))),yS=V.lazy(()=>re(()=>import("./PaymentVouchers-DHbdPb-Q.js"),__vite__mapDeps([36,1,2])).then(n=>({default:n.PaymentVouchersPage}))),ES=V.lazy(()=>re(()=>import("./ReceiptVouchers-D_KpD8kX.js"),__vite__mapDeps([37,1,2])).then(n=>({default:n.ReceiptVouchersPage}))),IS=V.lazy(()=>re(()=>import("./BankAccounts-CXklL0TW.js"),__vite__mapDeps([38,1,2])).then(n=>({default:n.BankAccountsPage}))),vS=V.lazy(()=>re(()=>import("./ChartOfAccounts-DzFbz8QW.js"),__vite__mapDeps([39,1,2])).then(n=>({default:n.ChartOfAccountsPage}))),TS=V.lazy(()=>re(()=>import("./ExpenseClaims-CM1Uueoe.js"),__vite__mapDeps([40,1,2])).then(n=>({default:n.ExpenseClaimsPage}))),wS=V.lazy(()=>re(()=>import("./TrialBalance-wGASf3sf.js"),__vite__mapDeps([41,1,2])).then(n=>({default:n.TrialBalancePage}))),bS=V.lazy(()=>re(()=>import("./ProfitLoss-CfIbr-un.js"),__vite__mapDeps([42,1,2])).then(n=>({default:n.ProfitLossPage}))),AS=V.lazy(()=>re(()=>import("./CustomerList-DpNct68y.js"),__vite__mapDeps([43,1,2,12,3,7])).then(n=>({default:n.CustomerList}))),RS=V.lazy(()=>re(()=>import("./CustomerCreate-kJv2XO57.js"),__vite__mapDeps([44,1,2,12,3])).then(n=>({default:n.CustomerCreate}))),PS=V.lazy(()=>re(()=>import("./CustomerDetail-BI9lPG_c.js"),__vite__mapDeps([45,1,2,12,3,7])).then(n=>({default:n.CustomerDetail}))),SS=V.lazy(()=>re(()=>import("./CustomerDeploy-iMKhB3ph.js"),__vite__mapDeps([46,1,2,12,15,8,9,3])).then(n=>({default:n.CustomerDeploy}))),CS=V.lazy(()=>re(()=>import("./CustomerContracts-CTFYwRoD.js"),__vite__mapDeps([47,1,2,12,7])).then(n=>({default:n.CustomerContracts}))),xS=V.lazy(()=>re(()=>import("./CustomerGenerateInvoice-DmKw5V-W.js"),__vite__mapDeps([48,1,2,12,49,3])).then(n=>({default:n.CustomerGenerateInvoice}))),kS=V.lazy(()=>re(()=>import("./CustomerInvoices-DuVAuz0n.js"),__vite__mapDeps([50,1,2,12,49,7])).then(n=>({default:n.CustomerInvoices}))),ie=({children:n})=>Hs(t=>!!t.session)?T.jsx(T.Fragment,{children:n}):T.jsx($a,{to:"/login",replace:!0}),VS=()=>{const n=Hs(e=>e.initialize);return V.useEffect(()=>{const e=n==null?void 0:n();return()=>{typeof e=="function"&&e()}},[n]),T.jsx(YP,{children:T.jsx(V.Suspense,{fallback:T.jsx("div",{className:"p-6 text-sm",children:"Loading..."}),children:T.jsxs(my,{children:[T.jsx(Z,{path:"/login",element:T.jsx(ZP,{})}),T.jsx(Z,{path:"/dashboard",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(eS,{})})})}),T.jsx(Z,{path:"/employees",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(tS,{})})})}),T.jsx(Z,{path:"/employees/permanent",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(nS,{})})})}),T.jsx(Z,{path:"/employees/temporary",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(rS,{})})})}),T.jsx(Z,{path:"/employees/new",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(sS,{})})})}),T.jsx(Z,{path:"/employees/import",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(iS,{})})})}),T.jsx(Z,{path:"/employees/documents",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(oS,{})})})}),T.jsx(Z,{path:"/employees/leave",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(cS,{})})})}),T.jsx(Z,{path:"/employees/eos",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(lS,{})})})}),T.jsx(Z,{path:"/employees/:id",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(aS,{})})})}),T.jsx(Z,{path:"/accounts",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(gS,{})})})}),T.jsx(Z,{path:"/accounts/transactions",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(_S,{})})})}),T.jsx(Z,{path:"/accounts/payments",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(yS,{})})})}),T.jsx(Z,{path:"/accounts/receipts",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(ES,{})})})}),T.jsx(Z,{path:"/accounts/banks",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(IS,{})})})}),T.jsx(Z,{path:"/accounts/chart",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(vS,{})})})}),T.jsx(Z,{path:"/accounts/expenses",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(TS,{})})})}),T.jsx(Z,{path:"/accounts/trial-balance",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(wS,{})})})}),T.jsx(Z,{path:"/accounts/profit-loss",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(bS,{})})})}),T.jsx(Z,{path:"/payroll",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(uS,{})})})}),T.jsx(Z,{path:"/payroll/process",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(hS,{})})})}),T.jsx(Z,{path:"/payroll/history",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(dS,{})})})}),T.jsx(Z,{path:"/payroll/payslips",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(fS,{})})})}),T.jsx(Z,{path:"/payroll/adjustments",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(pS,{})})})}),T.jsx(Z,{path:"/customers",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(AS,{})})})}),T.jsx(Z,{path:"/customers/new",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(RS,{})})})}),T.jsx(Z,{path:"/customers/contracts",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(CS,{})})})}),T.jsx(Z,{path:"/customers/:id",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(PS,{})})})}),T.jsx(Z,{path:"/customers/:id/deploy",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(SS,{})})})}),T.jsx(Z,{path:"/customers/:id/invoice",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(xS,{})})})}),T.jsx(Z,{path:"/customers/invoices",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(kS,{})})})}),T.jsx(Z,{path:"/reports",element:T.jsx(ie,{children:T.jsx(se,{children:T.jsx(mS,{})})})}),T.jsx(Z,{path:"/",element:T.jsx($a,{to:"/dashboard",replace:!0})}),T.jsx(Z,{path:"*",element:T.jsx($a,{to:"/dashboard",replace:!0})})]})})})},DS=new w_({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:1}}}),Qs=document.getElementById("root");Qs&&(Qs.dataset.react="mounting");Ba.createRoot(Qs).render(T.jsx(rf.StrictMode,{children:T.jsx(b_,{client:DS,children:T.jsx(wy,{children:T.jsx(VS,{})})})}));Qs&&queueMicrotask(()=>{Qs.dataset.react="mounted";const n=document.getElementById("app-fallback");n&&n.remove()});export{FS as A,tf as B,JR as C,XR as D,Js as E,YR as F,Dn as G,$A as H,Xu as I,Vf as J,AT as K,kc as L,zS as M,WP as N,nP as U,re as _,df as a,Gg as b,Et as c,$S as d,BS as e,iR as f,qS as g,MS as h,Pn as i,HR as j,$n as k,WR as l,Nn as m,on as n,So as o,vE as p,_t as q,lt as r,Jd as s,Ue as t,FP as u,$y as v,Cf as w,Wy as x,US as y,Dc as z};
//# sourceMappingURL=index-sMHxiCIB.js.map
