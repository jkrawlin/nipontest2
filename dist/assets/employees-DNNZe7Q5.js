import{r as I,m as b,n as T,o as k,E as X,p as Pe,q as Q,L as _e,t as Z,v as ee,w as te,x as ne,y as j,z as Fe,A as ae,G as Me,H as Oe,I as z,J as $e,K as xe,M as Ne,g as ie,e as C,d as re,f as A}from"./index-sMHxiCIB.js";const se="@firebase/installations",$="0.6.19";/**
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
 */const oe=1e4,ce=`w:${$}`,le="FIS_v2",qe="https://firebaseinstallations.googleapis.com/v1",Le=60*60*1e3,Be="installations",je="Installations";/**
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
 */const ze={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},h=new X(Be,je,ze);function ue(e){return e instanceof Q&&e.code.includes("request-failed")}/**
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
 */function de({projectId:e}){return`${qe}/projects/${e}/installations`}function fe(e){return{token:e.token,requestStatus:2,expiresIn:Ue(e.expiresIn),creationTime:Date.now()}}async function pe(e,t){const a=(await t.json()).error;return h.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ge({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ve(e,{refreshToken:t}){const n=ge(e);return n.append("Authorization",Ge(t)),n}async function me(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Ue(e){return Number(e.replace("s","000"))}function Ge(e){return`${le} ${e}`}/**
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
 */async function Ke({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=de(e),i=ge(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={fid:n,authVersion:le,appId:e.appId,sdkVersion:ce},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await me(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:fe(l.authToken)}}else throw await pe("Create Installation",c)}/**
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
 */function he(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function He(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const We=/^[cdef][\w-]{21}$/,O="";function Ye(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Je(e);return We.test(n)?n:O}catch{return O}}function Je(e){return He(e).substr(0,22)}/**
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
 */function R(e){return`${e.appName}!${e.appId}`}/**
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
 */const ye=new Map;function we(e,t){const n=R(e);Ie(n,t),Xe(n,t)}function Ie(e,t){const n=ye.get(e);if(n)for(const a of n)a(t)}function Xe(e,t){const n=Qe();n&&n.postMessage({key:e,fid:t}),Ze()}let m=null;function Qe(){return!m&&"BroadcastChannel"in self&&(m=new BroadcastChannel("[Firebase] FID Change"),m.onmessage=e=>{Ie(e.data.key,e.data.fid)}),m}function Ze(){ye.size===0&&m&&(m.close(),m=null)}/**
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
 */const et="firebase-installations-database",tt=1,y="firebase-installations-store";let _=null;function x(){return _||(_=Pe(et,tt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(y)}}})),_}async function S(e,t){const n=R(e),i=(await x()).transaction(y,"readwrite"),r=i.objectStore(y),s=await r.get(n);return await r.put(t,n),await i.done,(!s||s.fid!==t.fid)&&we(e,t.fid),t}async function be(e){const t=R(e),a=(await x()).transaction(y,"readwrite");await a.objectStore(y).delete(t),await a.done}async function D(e,t){const n=R(e),i=(await x()).transaction(y,"readwrite"),r=i.objectStore(y),s=await r.get(n),o=t(s);return o===void 0?await r.delete(n):await r.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&we(e,o.fid),o}/**
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
 */async function N(e){let t;const n=await D(e.appConfig,a=>{const i=nt(a),r=at(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===O?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function nt(e){const t=e||{fid:Ye(),registrationStatus:0};return Te(t)}function at(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(h.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=it(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:rt(e)}:{installationEntry:t}}async function it(e,t){try{const n=await Ke(e,t);return S(e.appConfig,n)}catch(n){throw ue(n)&&n.customData.serverCode===409?await be(e.appConfig):await S(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function rt(e){let t=await V(e.appConfig);for(;t.registrationStatus===1;)await he(100),t=await V(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await N(e);return a||n}return t}function V(e){return D(e,t=>{if(!t)throw h.create("installation-not-found");return Te(t)})}function Te(e){return st(e)?{fid:e.fid,registrationStatus:0}:e}function st(e){return e.registrationStatus===1&&e.registrationTime+oe<Date.now()}/**
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
 */async function ot({appConfig:e,heartbeatServiceProvider:t},n){const a=ct(e,n),i=Ve(e,n),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={installation:{sdkVersion:ce,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await me(()=>fetch(a,o));if(c.ok){const l=await c.json();return fe(l)}else throw await pe("Generate Auth Token",c)}function ct(e,{fid:t}){return`${de(e)}/${t}/authTokens:generate`}/**
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
 */async function q(e,t=!1){let n;const a=await D(e.appConfig,r=>{if(!Ae(r))throw h.create("not-registered");const s=r.authToken;if(!t&&dt(s))return r;if(s.requestStatus===1)return n=lt(e,t),r;{if(!navigator.onLine)throw h.create("app-offline");const o=pt(r);return n=ut(e,o),o}});return n?await n:a.authToken}async function lt(e,t){let n=await U(e.appConfig);for(;n.authToken.requestStatus===1;)await he(100),n=await U(e.appConfig);const a=n.authToken;return a.requestStatus===0?q(e,t):a}function U(e){return D(e,t=>{if(!Ae(t))throw h.create("not-registered");const n=t.authToken;return gt(n)?{...t,authToken:{requestStatus:0}}:t})}async function ut(e,t){try{const n=await ot(e,t),a={...t,authToken:n};return await S(e.appConfig,a),n}catch(n){if(ue(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await be(e.appConfig);else{const a={...t,authToken:{requestStatus:0}};await S(e.appConfig,a)}throw n}}function Ae(e){return e!==void 0&&e.registrationStatus===2}function dt(e){return e.requestStatus===2&&!ft(e)}function ft(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Le}function pt(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function gt(e){return e.requestStatus===1&&e.requestTime+oe<Date.now()}/**
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
 */async function mt(e){const t=e,{installationEntry:n,registrationPromise:a}=await N(t);return a?a.catch(console.error):q(t).catch(console.error),n.fid}/**
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
 */async function ht(e,t=!1){const n=e;return await yt(n),(await q(n,t)).token}async function yt(e){const{registrationPromise:t}=await N(e);t&&await t}/**
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
 */function wt(e){if(!e||!e.options)throw F("App Configuration");if(!e.name)throw F("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw F(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function F(e){return h.create("missing-app-config-values",{valueName:e})}/**
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
 */const Se="installations",It="installations-internal",bt=e=>{const t=e.getProvider("app").getImmediate(),n=wt(t),a=k(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Tt=e=>{const t=e.getProvider("app").getImmediate(),n=k(t,Se).getImmediate();return{getId:()=>mt(n),getToken:i=>ht(n,i)}};function At(){b(new T(Se,bt,"PUBLIC")),b(new T(It,Tt,"PRIVATE"))}At();I(se,$);I(se,$,"esm2020");/**
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
 */const v="analytics",St="firebase_id",vt="origin",Et=60*1e3,kt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",L="https://www.googletagmanager.com/gtag/js";/**
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
 */const u=new _e("@firebase/analytics");/**
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
 */const Ct={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new X("analytics","Analytics",Ct);/**
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
 */function Rt(e){if(!e.startsWith(L)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function ve(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Dt(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Pt(e,t){const n=Dt("firebase-js-sdk-policy",{createScriptURL:Rt}),a=document.createElement("script"),i=`${L}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function _t(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ft(e,t,n,a,i,r){const s=a[i];try{if(s)await t[s];else{const c=(await ve(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){u.error(o)}e("config",i,r)}async function Mt(e,t,n,a,i){try{let r=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await ve(n);for(const c of s){const l=o.find(p=>p.measurementId===c),f=l&&t[l.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",a,i||{})}catch(r){u.error(r)}}function Ot(e,t,n,a){async function i(r,...s){try{if(r==="event"){const[o,c]=s;await Mt(e,t,n,o,c)}else if(r==="config"){const[o,c]=s;await Ft(e,t,n,a,o,c)}else if(r==="consent"){const[o,c]=s;e("consent",o,c)}else if(r==="get"){const[o,c,l]=s;e("get",o,c,l)}else if(r==="set"){const[o]=s;e("set",o)}else e(r,...s)}catch(o){u.error(o)}}return i}function $t(e,t,n,a,i){let r=function(...s){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Ot(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function xt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(L)&&n.src.includes(e))return n;return null}/**
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
 */const Nt=30,qt=1e3;class Lt{constructor(t={},n=qt){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ee=new Lt;function Bt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function jt(e){var s;const{appId:t,apiKey:n}=e,a={method:"GET",headers:Bt(n)},i=kt.replace("{app-id}",t),r=await fetch(i,a);if(r.status!==200&&r.status!==304){let o="";try{const c=await r.json();(s=c.error)!=null&&s.message&&(o=c.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function zt(e,t=Ee,n){const{appId:a,apiKey:i,measurementId:r}=e.options;if(!a)throw d.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:a};throw d.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Gt;return setTimeout(async()=>{o.abort()},Et),ke({appId:a,apiKey:i,measurementId:r},s,o,t)}async function ke(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=Ee){var o;const{appId:r,measurementId:s}=e;try{await Vt(a,t)}catch(c){if(s)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:r,measurementId:s};throw c}try{const c=await jt(e);return i.deleteThrottleMetadata(r),c}catch(c){const l=c;if(!Ut(l)){if(i.deleteThrottleMetadata(r),s)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:s};throw c}const f=Number((o=l==null?void 0:l.customData)==null?void 0:o.httpStatus)===503?j(n,i.intervalMillis,Nt):j(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(r,p),u.debug(`Calling attemptFetch again in ${f} millis`),ke(e,p,a,i)}}function Vt(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),a(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ut(e){if(!(e instanceof Q)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Gt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Kt(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const r=await t,s={...a,send_to:r};e("event",n,s)}}/**
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
 */async function Ht(){if(te())try{await ne()}catch(e){return u.warn(d.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return u.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Wt(e,t,n,a,i,r,s){const o=zt(e);o.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>u.error(g)),t.push(o);const c=Ht().then(g=>{if(g)return a.getId()}),[l,f]=await Promise.all([o,c]);xt(r)||Pt(r,l.measurementId),i("js",new Date);const p=(s==null?void 0:s.config)??{};return p[vt]="firebase",p.update=!0,f!=null&&(p[St]=f),i("config",l.measurementId,p),l.measurementId}/**
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
 */class Yt{constructor(t){this.app=t}_delete(){return delete w[this.app.options.appId],Promise.resolve()}}let w={},G=[];const K={};let M="dataLayer",Jt="gtag",H,Ce,W=!1;function Xt(){const e=[];if(ee()&&e.push("This is a browser extension environment."),ae()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Qt(e,t,n){Xt();const a=e.options.appId;if(!a)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(w[a]!=null)throw d.create("already-exists",{id:a});if(!W){_t(M);const{wrappedGtag:r,gtagCore:s}=$t(w,G,K,M,Jt);Ce=r,H=s,W=!0}return w[a]=Wt(e,G,K,t,H,M,n),new Yt(e)}function Zt(e=Fe()){e=Z(e);const t=k(e,v);return t.isInitialized()?t.getImmediate():en(e)}function en(e,t={}){const n=k(e,v);if(n.isInitialized()){const i=n.getImmediate();if(Me(t,n.getOptions()))return i;throw d.create("already-initialized")}return n.initialize({options:t})}async function tn(){if(ee()||!ae()||!te())return!1;try{return await ne()}catch{return!1}}function nn(e,t,n,a){e=Z(e),Kt(Ce,w[e.app.options.appId],t,n,a).catch(i=>u.error(i))}const Y="@firebase/analytics",J="0.10.18";function an(){b(new T(v,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Qt(a,i,n)},"PUBLIC")),b(new T("analytics-internal",e,"PRIVATE")),I(Y,J),I(Y,J,"esm2020");function e(t){try{const n=t.getProvider(v).getImmediate();return{logEvent:(a,i,r)=>nn(n,a,i,r)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}an();const rn={apiKey:"AIzaSyChmSmwpwKBCdMzrsvyidxX3Dr_fXoh-YA",authDomain:"payroll-cae74.firebaseapp.com",projectId:"payroll-cae74",storageBucket:"payroll-cae74.firebasestorage.app",messagingSenderId:"126650756988",appId:"1:126650756988:web:99fc9384a4ced996f53ef9",measurementId:"G-S4E1B33E1P"},B=z().length?z()[0]:$e(rn);xe(B);const Re=Oe(B),P=Re;Ne(Re).catch(e=>{typeof console<"u"&&console.log("Persistence error:",(e==null?void 0:e.code)||e)});(async()=>{if(typeof window>"u")return null;try{return await tn()?Zt(B):null}catch{return null}})();function De(e){const t=new Date().getFullYear(),n=Math.floor(Math.random()*1e4).toString().padStart(4,"0");return`${e}-${t}-${n}`}function E(e){if(e){if(typeof e=="string")return e;if(e instanceof Date)return e.toISOString();try{return e.toDate().toISOString()}catch{return}}}async function on(){return(await ie(C(P,"permanent_employees"))).docs.map(t=>({id:t.id,...t.data()}))}async function cn(){return(await ie(C(P,"temporary_employees"))).docs.map(t=>({id:t.id,...t.data()}))}async function ln(e){const t={...e,employeeCode:De("PRM"),employeeType:"Permanent",createdAt:A(),updatedAt:A()},n=t.compensation;n.totalMonthlySalary=(n.basicSalary||0)+(n.housingAllowance||0)+(n.transportAllowance||0)+(n.foodAllowance||0)+(n.phoneAllowance||0)+(n.otherAllowances||0);const a=await re(C(P,"permanent_employees"),t);return{...t,id:a.id,createdAt:E(t.createdAt),updatedAt:E(t.updatedAt)}}async function un(e){const t={...e,employeeCode:De("TMP"),employeeType:"Temporary",createdAt:A(),updatedAt:A()},n=await re(C(P,"temporary_employees"),t);return{...t,id:n.id,createdAt:E(t.createdAt),updatedAt:E(t.updatedAt)}}export{un as a,cn as b,ln as c,P as f,on as g};
//# sourceMappingURL=employees-DNNZe7Q5.js.map
