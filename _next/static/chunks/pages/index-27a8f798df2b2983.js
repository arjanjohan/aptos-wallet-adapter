(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{930:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1856)}])},1856:function(e,t,r){"use strict";r.r(t),r.d(t,{DEVNET_NODE_URL:function(){return g},default:function(){return b}});var l=r(7458),a=r(3815),n=r(1253),s=r(2983);function o(e){let{text:t}=e;return(0,l.jsxs)("div",{className:"bg-teal-100 border border-teal-400 text-teal-900 px-4 py-3 rounded relative",role:"alert",children:[(0,l.jsx)("span",{className:"block sm:inline break-all right-3",children:(0,l.jsx)("a",{className:"underline",target:"_blank",href:"".concat(t,"?network=devnet"),children:t})}),(0,l.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,l.jsxs)("svg",{className:"fill-current h-6 w-6 text-teal-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,l.jsx)("title",{children:"Close"}),(0,l.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}function i(e){let{text:t}=e;return(0,l.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:[(0,l.jsx)("span",{className:"block sm:inline break-all",children:t}),(0,l.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,l.jsxs)("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,l.jsx)("title",{children:"Close"}),(0,l.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}var d=r(4648),c=r.n(d),u=r(4407),f=r.n(u),h=r(8714);let p=c()(()=>r.e(556).then(r.bind(r,9556)),{loadableGenerated:{webpack:()=>[9556]},suspense:!1,ssr:!1}),g="https://fullnode.devnet.aptoslabs.com/v1",m=new a.gK(g,{WITH_CREDENTIALS:!1});function b(){let{connected:e,disconnect:t,account:r,network:a,wallet:d,signAndSubmitTransaction:c,signTransaction:u,signMessage:g,signMessageAndVerify:b}=(0,n.Os)(),{autoConnect:x,setAutoConnect:y}=(0,h.vl)(),[w,v]=(0,s.useState)(""),[_,j]=(0,s.useState)(""),N=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==r?void 0:r.address,1]};try{let t=await c(e);await m.waitForTransaction((null==t?void 0:t.hash)||""),v("https://explorer.aptoslabs.com/txn/".concat(null==t?void 0:t.hash))}catch(l){console.log("error",l),j(l)}},k=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==r?void 0:r.address,1]};try{let t=await u(e);console.log("response",t)}catch(l){console.log("error",l),j(l)}},C=async()=>{try{let e=await g({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});v(JSON.stringify(e)),console.log("response",e)}catch(t){console.log("error",t),j(t)}},E=async()=>{try{let e=await b({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});v(JSON.stringify({onSignMessageAndVerify:e})),console.log("response",e)}catch(t){console.log("error",t),j(JSON.stringify({onSignMessageAndVerify:t}))}};return(0,l.jsxs)("div",{children:[w.length>0&&(0,l.jsx)(o,{text:w}),_.length>0&&(0,l.jsx)(i,{text:_}),(0,l.jsx)("h1",{className:"flex justify-center mt-2 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black",children:"Aptos Wallet Adapter Demo (Devnet)"}),(0,l.jsx)("table",{className:"table-auto w-full border-separate border-spacing-y-8 shadow-lg bg-white border-separate",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,l.jsx)("h3",{children:"Connect a Wallet"})}),(0,l.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,l.jsx)(p,{})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,l.jsx)("h3",{children:"Actions"})}),(0,l.jsx)("td",{className:"px-8 py-4 border-t break-all w-3/4",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:t,disabled:!e,children:"Disconnect"}),(0,l.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:N,disabled:!e,children:"Sign and submit transaction"}),(0,l.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:k,disabled:!e,children:"Sign transaction"}),(0,l.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-blue-700":"opacity-50 cursor-not-allowed"),onClick:C,disabled:!e,children:"Sign Message"}),(0,l.jsx)("button",{className:"bg-orange-500 text-white font-bold py-2 px-4 rounded mr-4 ".concat(e?"hover:bg-orange-700":"opacity-50 cursor-not-allowed"),onClick:E,disabled:!e,children:"Sign Message and Verify"})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,l.jsx)("h3",{children:"Wallet Name"})}),(0,l.jsxs)("td",{className:"px-8 py-4 border-t w-3/4",children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[d&&(0,l.jsx)(f(),{src:d.icon,alt:d.name,width:25,height:25}),null==d?void 0:d.name]}),(0,l.jsx)("div",{children:(0,l.jsx)("a",{target:"_blank",className:"text-sky-600",rel:"noreferrer",href:null==d?void 0:d.url,children:null==d?void 0:d.url})})]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"px-8 py-4 border-t",children:(0,l.jsx)("h3",{children:"Account"})}),(0,l.jsx)("td",{className:"px-8 py-4 border-t break-all",children:(0,l.jsx)("div",{children:r?JSON.stringify(r):""})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"px-8 py-4 border-t",children:(0,l.jsx)("h3",{children:"Network"})}),(0,l.jsx)("td",{className:"px-8 py-4 border-t",children:(0,l.jsx)("div",{children:a?JSON.stringify(a):""})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"px-8 py-4 border-t",children:(0,l.jsx)("h3",{children:"auto connect"})}),(0,l.jsx)("td",{className:"px-8 py-4 border-t",children:(0,l.jsx)("div",{className:"relative flex flex-col overflow-hidden",children:(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("label",{className:"inline-flex relative items-center mr-5 cursor-pointer",children:[(0,l.jsx)("input",{type:"checkbox",className:"sr-only peer",checked:x,readOnly:!0}),(0,l.jsx)("div",{onClick(){y(!x)},className:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"})]})})})})]})]})})]})}},280:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return c.ImageLoaderProps}}),t.default=function(e){let t,r;var a,{src:n,sizes:m,unoptimized:x=!1,priority:y=!1,loading:w,className:v,quality:_,width:j,height:N,fill:k,style:C,onLoad:E,onLoadingComplete:S,placeholder:O="empty",blurDataURL:A}=e,P=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let z=o.useContext(u.ImageConfigContext),L=o.useMemo(()=>{let e=h||z||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return l({},e,{allSizes:t,deviceSizes:r})},[z]),M=P,R=M.loader||f.default;if(delete M.loader,"__next_img_default"in R){if("custom"===L.loader)throw Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let D=R;R=e=>{let{config:t}=e,r=s(e,["config"]);return D(r)}}let T="",I=g(j),V=g(N);if("object"==typeof(a=n)&&(p(a)||void 0!==a.src)){let W=p(n)?n.default:n;if(!W.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(!W.height||!W.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)));if(t=W.blurWidth,r=W.blurHeight,A=A||W.blurDataURL,T=W.src,!k){if(I||V){if(I&&!V){let Z=I/W.width;V=Math.round(W.height*Z)}else if(!I&&V){let B=V/W.height;I=Math.round(W.width*B)}}else I=W.width,V=W.height}}let G=!y&&("lazy"===w||void 0===w);((n="string"==typeof n?n:T).startsWith("data:")||n.startsWith("blob:"))&&(x=!0,G=!1),L.unoptimized&&(x=!0);let[F,J]=o.useState(!1),[H,q]=o.useState(!1),U=g(_),X=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},H?{}:{color:"transparent"},C),K="blur"===O&&A&&!F?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:I,heightInt:V,blurWidth:t,blurHeight:r,blurDataURL:A}),'")')}:{},Y=function(e){let{config:t,src:r,unoptimized:l,width:a,quality:n,sizes:s,loader:o}=e;if(l)return{src:r,srcSet:void 0,sizes:void 0};let{widths:i,kind:d}=function(e,t,r){let{deviceSizes:l,allSizes:a}=e;if(r){let n=/(^|\s)(1?\d?\d)vw/g,s=[];for(let o;o=n.exec(r);o)s.push(parseInt(o[2]));if(s.length){let i=.01*Math.min(...s);return{widths:a.filter(e=>e>=l[0]*i),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:l,kind:"w"};let d=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:d,kind:"x"}}(t,a,s),c=i.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:i.map((e,l)=>"".concat(o({config:t,src:r,quality:n,width:e})," ").concat("w"===d?e:l+1).concat(d)).join(", "),src:o({config:t,src:r,quality:n,width:i[c]})}}({config:L,src:n,unoptimized:x,width:I,quality:U,sizes:m,loader:R}),$=n,Q="imagesrcset",ee="imagesizes";Q="imageSrcSet",ee="imageSizes";let et={[Q]:Y.srcSet,[ee]:Y.sizes,crossOrigin:M.crossOrigin},er=o.useRef(E);o.useEffect(()=>{er.current=E},[E]);let el=o.useRef(S);o.useEffect(()=>{el.current=S},[S]);let ea=l({isLazy:G,imgAttributes:Y,heightInt:V,widthInt:I,qualityInt:U,className:v,imgStyle:X,blurStyle:K,loading:w,config:L,fill:k,unoptimized:x,placeholder:O,loader:R,srcString:$,onLoadRef:er,onLoadingCompleteRef:el,setBlurComplete:J,setShowAltText:q},M);return o.default.createElement(o.default.Fragment,null,o.default.createElement(b,Object.assign({},ea)),y?o.default.createElement(i.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src},et))):null)};var l=r(5271).Z,a=r(2009).Z,n=r(9371).Z,s=r(5688).Z,o=n(r(2983)),i=a(r(4478)),d=r(4171),c=r(4026),u=r(1029);r(8146);var f=a(r(488));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/aptos-wallet-adapter/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,a,n,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&s(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,i=!1;a.current(l({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>i,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){i=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let b=e=>{var{imgAttributes:t,heightInt:r,widthInt:a,qualityInt:n,className:i,imgStyle:d,blurStyle:c,isLazy:u,fill:f,placeholder:h,loading:p,srcString:g,config:b,unoptimized:x,loader:y,onLoadRef:w,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:j,onLoad:N,onError:k}=e,C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=u?"lazy":p,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},C,t,{width:a,height:r,decoding:"async","data-nimg":f?"fill":"1",className:i,loading:p,style:l({},d,c),ref:o.useCallback(e=>{e&&(k&&(e.src=e.src),e.complete&&m(e,g,h,w,v,_))},[g,h,w,v,_,k]),onLoad(e){let t=e.currentTarget;m(t,g,h,w,v,_)},onError(e){j(!0),"blur"===h&&_(!0),k&&k(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7696:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=n.default,a=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:r,pastDelay:l}=e;return null}};if(e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=l({},a,e)),(a=l({},a,t)).suspense&&(delete a.ssr,delete a.loading),a.loadableGenerated&&delete(a=l({},a,a.loadableGenerated)).loadableGenerated,"boolean"==typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,s(r,a);delete a.ssr}return r(a)},t.noSSR=s;var l=r(5271).Z,a=r(2009).Z,n=(a(r(2983)),a(r(5524)));function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4171:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:l,blurHeight:a,blurDataURL:n}=e,s=l||t,o=a||r,i=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(l&&a?"1":"20","'/%3E").concat(i,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},488:function(e,t){"use strict";function r(e){let{config:t,src:r,width:l,quality:a}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(l,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},8109:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,r(2009).Z)(r(2983));let a=l.default.createContext(null);t.LoadableContext=a},5524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(5271).Z,a=(0,r(2009).Z)(r(2983)),n=r(8109);let{useSyncExternalStore:s}=r(2983),o=[],i=[],d=!1;function c(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=a.default.lazy(r.loader));let o=null;function c(){if(!o){let t=new u(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!d){let f=r.webpack?r.webpack():r.modules;f&&i.push(e=>{for(let t of f)if(-1!==e.indexOf(t))return c()})}function h(){c();let e=a.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}let p=r.suspense?function(e,t){return h(),a.default.createElement(r.lazy,l({},e,{ref:t}))}:function(e,t){h();let l=s(o.subscribe,o.getCurrentValue,o.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),a.default.useMemo(()=>{var t;return l.loading||l.error?a.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:o.retry}):l.loaded?a.default.createElement((t=l.loaded)&&t.__esModule?t.default:t,e):null},[e,l])};return p.preload=()=>c(),p.displayName="LoadableComponent",a.default.forwardRef(p)}(c,e)}function h(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return h(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{h(o).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(d=!0,t());h(i,e).then(r,r)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},4648:function(e,t,r){e.exports=r(7696)},4407:function(e,t,r){e.exports=r(280)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=930)}),_N_E=e.O()}]);