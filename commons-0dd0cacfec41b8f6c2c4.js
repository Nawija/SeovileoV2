"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=r(c)===c&&n(c)!==c,s=o,o=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return v},S:function(){return R},_:function(){return s},a:function(){return o},b:function(){return d},g:function(){return m},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,f);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},h=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,b);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(w,o({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var y;w.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},h.displayName="Picture",h.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const L=["fallback"],v=function(e){let{fallback:t}=e,a=s(e,L);return t?r.createElement(h,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(y=h.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(h,o({},e)),r.createElement("noscript",null,r.createElement(h,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=h.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),A=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:A},M=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],Z=new Set;let V,T;const U=function(e){let{as:t="div",image:n,style:i,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:f}=e,b=s(e,M);const{width:w,height:h,layout:y}=n,L=c(w,h,y),{style:v,className:x}=L,E=s(L,N),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(m=u);const A=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,w,h);return(0,r.useEffect)((()=>{V||(V=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void Z.add(S);if(T&&Z.has(S))return;let t,r;return V.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=a(o({isLoading:!0,isLoaded:Z.has(S),image:n},b)),Z.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=s(C.current,S,Z,i,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{Z.has(S)&&T&&(C.current.innerHTML=T(o({isLoading:Z.has(S),isLoaded:Z.has(S),image:n},b)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},E,{style:o({},v,i,{backgroundColor:d}),className:x+(m?" "+m:""),ref:C,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(U,e):null}));O.propTypes=k,O.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function F(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=s(t,z);return i&&console.warn(i),n?r.createElement(e,o({image:n},l)):(console.warn("Image not loaded",a),null)}}const I=F((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:u="lazy",imgClassName:p,imgStyle:f,backgroundColor:b,objectFit:w,objectPosition:h}=e,y=s(e,E);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=o({objectFit:w,objectPosition:h,backgroundColor:b},f);const{width:L,height:A,layout:k,images:M,placeholder:N,backgroundColor:Z}=l,V=c(L,A,k),{style:T,className:U}=V,O=s(V,C),z={fallback:void 0,sources:[]};return M.fallback&&(z.fallback=o({},M.fallback,{srcSet:M.fallback.srcSet?S(M.fallback.srcSet):void 0})),M.sources&&(z.sources=M.sources.map((e=>o({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,o({},O,{style:o({},T,i,{backgroundColor:b}),className:U+(a?" "+a:"")}),r.createElement(g,{layout:k,width:L,height:A},r.createElement(v,o({},m(N,!1,k,L,A,Z,w,h))),r.createElement(x,o({"data-gatsby-image-ssr":"",className:p},y,d("eager"===u,!1,z,u,f)))))})),D=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:A,width:D,height:D,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};I.displayName="StaticImage",I.propTypes=j;const R=F(O);R.displayName="StaticImage",R.propTypes=j},4610:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(1883);var i=()=>{const{0:e,1:t}=(0,r.useState)(!1),{0:a,1:i}=(0,r.useState)(!1),o=()=>{window.scrollY>=10?i(!0):i(!1)};return(0,r.useEffect)((()=>{o(),window.addEventListener("scroll",o)})),r.createElement("header",{className:"\r z-50 mx-auto sticky top-0 text-center\r "},r.createElement("div",{className:"realtive bg-transparent transition-colors duration-200 w-full"},r.createElement("div",{className:a?"h-full w-full bg-white/90 lg:bg-white/80 lg:backdrop-blur-lg absolute top-0 -z-10 transition-colors duration-500":"h-full w-full absolute top-0 -z-10 transition-colors duration-300"}),r.createElement("nav",{className:e?"max-w-screen-2xl mx-auto px-4 md:py-4 flex items-center justify-between w-full bg-white transition-colors duration-200 ":"max-w-screen-2xl mx-auto px-4 md:py-2 flex items-center justify-between w-full transition-colors duration-200"},r.createElement(n.Link,{to:"/",className:"flex items-center py-3 gap-1.5 text-xl font-medium text-gray-600","aria-label":"logo"},r.createElement("svg",{className:"w-9 h-auto",width:"207",height:"208",viewBox:"0 0 207 208",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("mask",{id:"path-1-outside-1_751_40",maskUnits:"userSpaceOnUse",x:"-0.269043",y:"0.00244141",width:"208",height:"208",fill:"black"},r.createElement("rect",{fill:"white",x:"-0.269043",y:"0.00244141",width:"208",height:"208"}),r.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M166.53 3.32598C151.525 -2.9687 133.967 3.96613 127.313 18.8154L111.746 53.5581L63.9271 26.0144C44.2878 14.702 18.7392 21.1801 6.86278 40.4835C-12.4453 71.866 16.8455 109.706 52.9427 100.013L96.1255 88.4176L68.3671 150.366C59.106 171.034 68.5289 194.892 89.4138 203.653C123.718 218.044 158.925 183.43 144.259 149.731L123.991 103.16C121.411 97.2318 120.897 91.0447 122.046 85.2613C136.279 88.3885 147.306 100.887 146.86 116.466L146.623 124.785C145.762 154.88 186.415 165.98 202.392 140.012C210.983 126.05 206.431 108.097 192.225 99.9146L133.916 66.3284C138.461 62.8556 144.046 60.5266 150.32 59.9162L156.928 59.2733C187.608 56.2885 194.671 15.1312 166.53 3.32598Z"})),r.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M166.53 3.32598C151.525 -2.9687 133.967 3.96613 127.313 18.8154L111.746 53.5581L63.9271 26.0144C44.2878 14.702 18.7392 21.1801 6.86278 40.4835C-12.4453 71.866 16.8455 109.706 52.9427 100.013L96.1255 88.4176L68.3671 150.366C59.106 171.034 68.5289 194.892 89.4138 203.653C123.718 218.044 158.925 183.43 144.259 149.731L123.991 103.16C121.411 97.2318 120.897 91.0447 122.046 85.2613C136.279 88.3885 147.306 100.887 146.86 116.466L146.623 124.785C145.762 154.88 186.415 165.98 202.392 140.012C210.983 126.05 206.431 108.097 192.225 99.9146L133.916 66.3284C138.461 62.8556 144.046 60.5266 150.32 59.9162L156.928 59.2733C187.608 56.2885 194.671 15.1312 166.53 3.32598Z",fill:"url(#paint0_linear_751_40)"}),r.createElement("path",{d:"M127.313 18.8154L127.131 18.7336L127.313 18.8154ZM166.53 3.32598L166.453 3.51041L166.53 3.32598ZM111.746 53.5581L111.646 53.7314L111.838 53.8419L111.928 53.6399L111.746 53.5581ZM63.9271 26.0144L63.8272 26.1877L63.9271 26.0144ZM6.86278 40.4835L7.03312 40.5883L6.86278 40.4835ZM52.9427 100.013L52.8909 99.8199L52.9427 100.013ZM96.1255 88.4176L96.308 88.4994L96.4801 88.1153L96.0736 88.2244L96.1255 88.4176ZM68.3671 150.366L68.5497 150.448L68.3671 150.366ZM89.4138 203.653L89.4912 203.468L89.4138 203.653ZM144.259 149.731L144.443 149.652L144.259 149.731ZM123.991 103.16L124.174 103.08L123.991 103.16ZM122.046 85.2613L122.089 85.0659L121.89 85.0221L121.85 85.2223L122.046 85.2613ZM146.86 116.466L146.66 116.46L146.86 116.466ZM146.623 124.785L146.423 124.779L146.623 124.785ZM202.392 140.012L202.562 140.117L202.392 140.012ZM192.225 99.9146L192.325 99.7413L192.225 99.9146ZM133.916 66.3284L133.795 66.1694L133.556 66.3518L133.816 66.5017L133.916 66.3284ZM150.32 59.9162L150.339 60.1153L150.32 59.9162ZM156.928 59.2733L156.948 59.4723L156.928 59.2733ZM127.496 18.8971C134.105 4.147 151.548 -2.74227 166.453 3.51041L166.607 3.14155C151.502 -3.19514 133.829 3.78525 127.131 18.7336L127.496 18.8971ZM111.928 53.6399L127.496 18.8971L127.131 18.7336L111.563 53.4763L111.928 53.6399ZM63.8272 26.1877L111.646 53.7314L111.845 53.3848L64.0269 25.8411L63.8272 26.1877ZM7.03312 40.5883C18.8528 21.377 44.2817 14.9293 63.8272 26.1877L64.0269 25.8411C44.2938 14.4747 18.6256 20.9831 6.69243 40.3787L7.03312 40.5883ZM52.8909 99.8199C16.9558 109.469 -12.1733 71.8057 7.03312 40.5883L6.69243 40.3787C-12.7172 71.9263 16.7351 109.943 52.9946 100.206L52.8909 99.8199ZM96.0736 88.2244L52.8909 99.8199L52.9946 100.206L96.1773 88.6108L96.0736 88.2244ZM68.5497 150.448L96.308 88.4994L95.943 88.3358L68.1846 150.284L68.5497 150.448ZM89.4912 203.468C68.7099 194.751 59.3344 171.013 68.5497 150.448L68.1846 150.284C58.8775 171.055 68.348 195.032 89.3365 203.837L89.4912 203.468ZM144.076 149.811C158.665 183.334 123.639 217.794 89.4912 203.468L89.3365 203.837C123.797 218.294 159.185 183.525 144.443 149.652L144.076 149.811ZM123.807 103.24L144.076 149.811L144.443 149.652L124.174 103.08L123.807 103.24ZM121.85 85.2223C120.693 91.0441 121.21 97.2728 123.807 103.24L124.174 103.08C121.611 97.1907 121.101 91.0452 122.243 85.3002L121.85 85.2223ZM147.06 116.472C147.508 100.789 136.407 88.212 122.089 85.0659L122.004 85.4566C136.15 88.565 147.103 100.985 146.66 116.46L147.06 116.472ZM146.823 124.79L147.06 116.472L146.66 116.46L146.423 124.779L146.823 124.79ZM202.222 139.908C194.286 152.806 180.225 156.5 168.246 153.229C156.268 149.958 146.395 139.731 146.823 124.79L146.423 124.779C145.99 139.933 156.013 150.303 168.141 153.615C180.267 156.926 194.521 153.186 202.562 140.117L202.222 139.908ZM192.125 100.088C206.233 108.214 210.753 126.041 202.222 139.908L202.562 140.117C211.212 126.058 206.628 107.98 192.325 99.7413L192.125 100.088ZM133.816 66.5017L192.125 100.088L192.325 99.7413L134.016 66.1551L133.816 66.5017ZM150.3 59.7172C143.988 60.3313 138.368 62.6746 133.795 66.1694L134.037 66.4873C138.554 63.0365 144.103 60.722 150.339 60.1153L150.3 59.7172ZM156.909 59.0742L150.3 59.7172L150.339 60.1153L156.948 59.4723L156.909 59.0742ZM166.453 3.51041C180.427 9.37271 185.659 22.5157 183.59 34.5735C181.52 46.6322 172.15 57.5915 156.909 59.0742L156.948 59.4723C172.386 57.9703 181.887 46.8585 183.984 34.6411C186.081 22.4228 180.774 9.0845 166.607 3.14155L166.453 3.51041Z",fill:"black",mask:"url(#path-1-outside-1_751_40)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear_751_40",x1:"207",y1:"11",x2:"17.4997",y2:"103.999",gradientUnits:"userSpaceOnUse"},r.createElement("stop",{"stop-color":"#FFB800"}),r.createElement("stop",{offset:"0.5224","stop-color":"#F6DAAF"}),r.createElement("stop",{offset:"1","stop-color":"#FF932F"})))),"Seovileo"),r.createElement("button",{"aria-label":"menu",onClick:()=>{t(!e)},className:"bg-gradient-to-bl from-white to-orange-100 lg:hidden p-2.5 transition-colors duration-200 rounded-lg"},r.createElement("div",{className:e?"w-5 h-1 transition-all duration-200 bg-gray-500 m-1 translate-y-2 rotate-45 rounded-lg":"w-5 h-1 transition-all duration-200 bg-gray-500 m-1 rounded-lg"}),r.createElement("div",{className:e?"w-3 h-1 transition-all duration-200 bg-gray-500 m-1 opacity-0":"w-3 h-1 transition-all duration-200 bg-gray-500 m-1 rounded-lg"}),r.createElement("div",{className:e?"w-5 h-1 transition-all duration-200 bg-gray-500 m-1 -translate-y-2 -rotate-45 rounded-lg":"w-5 h-1 transition-all duration-200 bg-gray-500 m-1 rounded-lg"})),r.createElement("ul",{className:e?"absolute text-lg top-full left-0 pb-4 flex flex-col text-gray-600 font-medium text-center w-full bg-white opacity-100 transition duration-200 -translate-x-0 -z-10":"absolute top-full left-0 py-2 flex flex-col lg:opacity-100 lg:static lg:flex-row lg:top-0 lg:translate-x-0 lg:py-0 text-gray-600 font-medium text-center w-full -translate-x-full transition duration-100 -z-10 lg:z-10 lg:ml-8"},r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(n.Link,{className:"hover:text-orange-400 transition-colors duration-200 font-bold",to:"/"},"Home")),r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(n.Link,{className:"hover:text-orange-400 transition-colors duration-200 font-bold",to:"/poradnik"},"Poradnik")),r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(n.Link,{className:" hover:text-orange-400 transition-colors duration-200 font-bold",to:"/portfolio"},"Portfolio")),r.createElement("li",{className:"mx-2 my-2 px-2 py-3"},r.createElement(n.Link,{className:" hover:text-orange-400 transition-colors duration-200 font-bold",to:"/kontakt"},"Kontakt"))),r.createElement(n.Link,{to:"/kontakt",className:"text-gray-200 border-2 border-gray-600 bg-gray-700 transition-all duration-300 p-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl hidden lg:flex w-max whitespace-nowrap"},"Darmowa Wycena"))))},o=a(8032);var s=()=>{const{0:e,1:t}=(0,r.useState)(!1),i=()=>{window.scrollY>=1200?t(!0):t(!1)};return(0,r.useEffect)((()=>{i(),window.addEventListener("scroll",i)})),r.createElement(n.Link,{"aria-label":"scroll to home",className:e?"fixed right-4 hover:scale-110 bottom-20 translate-x-0 transition-transform duration-500 z-50 ":"fixed right-4 bottom-20 transition-transform duration-1000 z-50 translate-x-[200%]",to:"#"},r.createElement(o.S,{className:"h-auto w-11",placeholder:"blurred",quality:"100",src:"../assets/scrollUp.png",__imageData:a(1796)}))};var l=()=>r.createElement("footer",{className:"flex flex-col items-center justify-center bg-gray-800 px-1 py-12"},r.createElement("p",{className:"text-xl md:text-2xl lg:text-3xl font-semibold capitalize text-gray-300"},"seovileo"),r.createElement("div",{className:"flex items-center justify-center mt-1"},r.createElement(n.Link,{className:"text-gray-400 hover:text-gray-200 transition-colors duration-200",to:"/"},"Home"),r.createElement(n.Link,{className:"text-gray-400 hover:text-gray-200 transition-colors duration-200 ml-2 md:ml-3",to:"/poradnik"},"Poradnik"),r.createElement(n.Link,{className:"text-gray-400 hover:text-gray-200 transition-colors duration-200 ml-2 md:ml-3",to:"/portfolio"},"Portfolio"),r.createElement(n.Link,{className:"text-gray-400 hover:text-gray-200 transition-colors duration-200 ml-2 md:ml-3",to:"/kontakt"},"Kontakt")),r.createElement("div",{className:"flex items-center justify-center mt-4"},r.createElement(n.Link,{to:"/"},r.createElement(o.S,{className:"hover:scale-110 transition-transform duration-200 h-auto w-8",src:"../assets/socialMedia/facebook.png",__imageData:a(6883)})),r.createElement(n.Link,{to:"/"},r.createElement(o.S,{className:"hover:scale-110 transition-transform duration-200 ml-2 md:ml-3 h-auto w-8",src:"../assets/socialMedia/instagram.png",__imageData:a(2908)})),r.createElement(n.Link,{to:"/"},r.createElement(o.S,{className:"hover:scale-110 transition-transform duration-200 ml-2 md:ml-3 h-auto w-8",src:"../assets/socialMedia/twitter.png",__imageData:a(2658)})),r.createElement(n.Link,{to:"/"},r.createElement(o.S,{className:"hover:scale-110 transition-transform duration-200 ml-2 md:ml-3 h-auto w-8",src:"../assets/socialMedia/github.png",__imageData:a(6867)}))));var c=()=>{const{0:e,1:t}=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),3e3);return()=>e})),r.createElement(n.Link,{"aria-label":"messenger",className:e?"fixed right-4 hover:scale-110 bottom-8 translate-x-0 transition-transform duration-500 z-50":"fixed right-4 bottom-8 transition-transform duration-1000 z-50 translate-x-[200%]",to:"https://www.facebook.com/profile.php?id=100090402000669"},r.createElement(o.S,{className:"h-auto w-11",placeholder:"blurred",quality:"100",src:"../assets/messenger.png",__imageData:a(9974)}))};var d=e=>{var t;let{children:a}=e;const o=(0,n.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(i,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",null,r.createElement("main",null,a),r.createElement(l,null),r.createElement(c,null),r.createElement(s,null)))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=function(e){var t,a;let{description:i,title:o,children:s}=e;const{site:l}=(0,n.useStaticQuery)("63159454"),c=i||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?o+" | "+d:o),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=l.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:o}),r.createElement("meta",{name:"twitter:description",content:c}),s)}},6883:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#3868b8","images":{"fallback":{"src":"/SeovileoV2/static/f9ffe7a2f9b99179d795c5713ea35956/ccc41/facebook.png","srcSet":"/SeovileoV2/static/f9ffe7a2f9b99179d795c5713ea35956/bf8e1/facebook.png 128w,\\n/SeovileoV2/static/f9ffe7a2f9b99179d795c5713ea35956/acb7c/facebook.png 256w,\\n/SeovileoV2/static/f9ffe7a2f9b99179d795c5713ea35956/ccc41/facebook.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/SeovileoV2/static/f9ffe7a2f9b99179d795c5713ea35956/6766a/facebook.webp 128w,\\n/SeovileoV2/static/f9ffe7a2f9b99179d795c5713ea35956/22bfc/facebook.webp 256w,\\n/SeovileoV2/static/f9ffe7a2f9b99179d795c5713ea35956/d689f/facebook.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},2658:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0898f8","images":{"fallback":{"src":"/SeovileoV2/static/3a012c94a4478ff39f043cb6fcac7d0a/ccc41/twitter.png","srcSet":"/SeovileoV2/static/3a012c94a4478ff39f043cb6fcac7d0a/bf8e1/twitter.png 128w,\\n/SeovileoV2/static/3a012c94a4478ff39f043cb6fcac7d0a/acb7c/twitter.png 256w,\\n/SeovileoV2/static/3a012c94a4478ff39f043cb6fcac7d0a/ccc41/twitter.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/SeovileoV2/static/3a012c94a4478ff39f043cb6fcac7d0a/6766a/twitter.webp 128w,\\n/SeovileoV2/static/3a012c94a4478ff39f043cb6fcac7d0a/22bfc/twitter.webp 256w,\\n/SeovileoV2/static/3a012c94a4478ff39f043cb6fcac7d0a/d689f/twitter.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},1796:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEHUlEQVR42lWU34tUZRjH392F6Ko/QAivugmjNLZ0Xdes7iqSoIvAW4kujAIjCLroB9FFEUK0pklpiIIWFGa56rpqiiYikabsru7szOw6P86ZmTNn5sw55z3P54n3nFXpwJczDDPf83m+73O+xqxcquo0snJ3ekFVvwNuCsSZIJlw12YctxlvquojscU0ujLkfi+CSTOMAXIp5Gagj6nqFKBOIqgVNM0gsWhs0UGaq5pmbGv3McX/GBIeGN4j26JKNzeCLBNSmyGJhUGaSwYptp+Q9mLUaZDyZbUl5rNjcW5sVBleMXsKiJ1ZJiRWwFHFFkQK3CiBfgy9GMIBWRBhgwiNEj52pF4ow/ezA65JYeao8hGdgSqcmIPPz4O10B0UCiLo9JFWD+n00ThlS5RgjBQjb89cVhnpSlZEqZsZyh14+SA88Y3q0RsgGfg9aPeh1cs/Wy8U7UScvTRvjal3xWTCeUeVWGy8kpeji1PYcRxG96pu3g9bfoBrSxDF0AzBD8ELhUZXaIbiKEcd3aM2I8pPsAieMC4ym7wC6yZVJ36B8Sl4Zq/qtp+g3nV0hZFTLZC0HuSUO93+bE6KVcipXD4InCvB2F7V8UPo2DRsmFGd+BWenlT9ZAbCSLjbEWqd/J4ut0W9UHa7cV9xexUliCNLUlgOYOshWP+96vgp2DCtOnYaxs7AxBEY/Vb16HXoRUK1JSy3xVZaos2uHDRWeL6foGGxCvnpvXUM1u5Wnfi9MBmfLrTR6TRsPKC6aZ/qhZLQCISyL2nZF210ZY8jXN2PiTsR6uguluGd32D7OXh2WnX9aeXJk6pPTqmOnlJdP6366gy8+wfsugjNQCh5haEXyvvGmFnTi7nkDP0+2WAAl+qwaQbWnFB97gz66T+wZxZeuwBrT6quOan61U3w2rkZpWZO6d6cMWdmooS323006JPOteDFs7D5DHzxL/zdEIJQ6IbCgi/8OAdvXITHT6genBdqLbHzDdHltlwe/Si83zIPdyJuBT3Rv2qkX99C53wh7AleIFRaOQFLLcHvCBVfODAr7J8VqTQlW2jmK/OSF4pxhMPulUks416Iel3RXk9Sl021XZyikzNZ9IQ7zWLEui9ZtZmltxui9UB23VjKzNWFbNjc7Yjxe4wEUT761kZXbLUtWm2JXWrl6yBlX2TREyl5IgtNyW43JJ2tibpRax3Z997hwb0KK8p1cjoxtUBGOn1MbFnnhXLZLaoLetETLTVF3Vh3GqLzdVFHtehJ2wtlx9R1m5sllqFByoO23jUVu/oZ6bvGMFdMEPF6PZAjy20pVXzpln0JK740qy35sx7IB6q6yvXghz8PjM0YcrF1B5j/XRVf3Jd5P7p+u1rK3MMeyoRVNmO1q/2dhyOz6EkOUfZk5N6o4YrZf2IYQVLnDerpAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/SeovileoV2/static/52cf89c1b9c8cf9aa972c040d40925b5/f6798/scrollUp.png","srcSet":"/SeovileoV2/static/52cf89c1b9c8cf9aa972c040d40925b5/7eed0/scrollUp.png 131w,\\n/SeovileoV2/static/52cf89c1b9c8cf9aa972c040d40925b5/f2685/scrollUp.png 261w,\\n/SeovileoV2/static/52cf89c1b9c8cf9aa972c040d40925b5/f6798/scrollUp.png 522w","sizes":"(min-width: 522px) 522px, 100vw"},"sources":[{"srcSet":"/SeovileoV2/static/52cf89c1b9c8cf9aa972c040d40925b5/8ca62/scrollUp.webp 131w,\\n/SeovileoV2/static/52cf89c1b9c8cf9aa972c040d40925b5/38509/scrollUp.webp 261w,\\n/SeovileoV2/static/52cf89c1b9c8cf9aa972c040d40925b5/10357/scrollUp.webp 522w","type":"image/webp","sizes":"(min-width: 522px) 522px, 100vw"}]},"width":522,"height":519}')},2908:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/SeovileoV2/static/8ce47fd872187bfa8d11505b3bd8944e/ccc41/instagram.png","srcSet":"/SeovileoV2/static/8ce47fd872187bfa8d11505b3bd8944e/bf8e1/instagram.png 128w,\\n/SeovileoV2/static/8ce47fd872187bfa8d11505b3bd8944e/acb7c/instagram.png 256w,\\n/SeovileoV2/static/8ce47fd872187bfa8d11505b3bd8944e/ccc41/instagram.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/SeovileoV2/static/8ce47fd872187bfa8d11505b3bd8944e/6766a/instagram.webp 128w,\\n/SeovileoV2/static/8ce47fd872187bfa8d11505b3bd8944e/22bfc/instagram.webp 256w,\\n/SeovileoV2/static/8ce47fd872187bfa8d11505b3bd8944e/d689f/instagram.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},6867:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/SeovileoV2/static/3d4c7482f267f5accbb7461766f3f790/ccc41/github.png","srcSet":"/SeovileoV2/static/3d4c7482f267f5accbb7461766f3f790/bf8e1/github.png 128w,\\n/SeovileoV2/static/3d4c7482f267f5accbb7461766f3f790/acb7c/github.png 256w,\\n/SeovileoV2/static/3d4c7482f267f5accbb7461766f3f790/ccc41/github.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/SeovileoV2/static/3d4c7482f267f5accbb7461766f3f790/6766a/github.webp 128w,\\n/SeovileoV2/static/3d4c7482f267f5accbb7461766f3f790/22bfc/github.webp 256w,\\n/SeovileoV2/static/3d4c7482f267f5accbb7461766f3f790/d689f/github.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},9974:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFW0lEQVR42lWUa0zTVxjG39plmfPDdH6Y+7BkJjPLvMyhhRYopS1thUKhgFyGwgQBZSCoKGMIEwVRIugAFe+KihsiWGRTmAw1aEBFVG5D1OAFL4io4BD599/3WQrJsj3Jk5Oc5PzOm5NfDhERdest9Nx7P3Xpq6W9Xkeo22ChIdPPzsO+ebmj5px6W0DmHQ5J60F4cjOiE0o4ITrM9lPgJE6KJDZvkPDKJRIkRhLiY4iGffMJxUQ3tPUTuvTV9MizdPZjr5I/+owH0O+9By99dmHQVIC3vnkQ/LPBwelAxGpgWdwDToyKQlQicZYPcWKUBAnRRCXzRbqmuSy9qa2nTt2ZhV366tHb+ip06y22u4ZKa8+CMvGR1zHbM+NB24BPse2NabtV8Nts5eB1QFQiOD7mEGiQOMdInBQpocvuzdJG9yt0Rd1ouKa+jKvjFZo1DdyivcCtHue4U3eG7xhO8X3PX/mJ8RAP+OzCsG++KPpvFBCeDF4Wtw9LVhICMyRUp+yiOuVfU/5UdvbWKbtwTnnbal/rlZ18UdXKl9QtaFI34brmIto8atFtsPADz+Pc570fQ+ZCFvxyrAhLAUcnfIulCURViqf2pp9S9KFC/kKokL9ApbyfLYpnXO3ci98ce+yX4KJ7Kxrdr6JFcwGdhrO4pz/Bvap9eOVTJArmHCA0tcO20U9KJxzevXdUNtpWIrPisEwUD8lEPiwTuWSegGPzR3Da+Abl81/gtOwR6lTdaNDcQqO8Ae0+59G/vZmfmI7yK+8im+C/CViYrqc9cp5RLIe4wxkocgEXuYJ3uAIFDkBbGcbSUyPipHoYZXP6UfV1D5pCuzHy+B3etAzwbXUFPzGWCEOmAoyac9ZTvgr6rWrGFi1zjpZ5i545U8GoWMcAGDbmMejgQ6BmiYDG1L8hjjLs2y0LW3DTrRb3PCutfcb9dr0O0AYDm9YvYKzzYk7zBqd6MTIDGP2948D/1g4ZxwPteS9R+007rno0cbtHrfW+5y947r2vlNaa4LraD0jyBycFgSMN4DrL+KE7rYyD6xkPOjA+rTgO7rvBKJMN4neXh7igakOzpkGwu/vQs3QnxQXxtNgQDEUvAkIDwXmbx4c4dxaICwGiDUCKmXG5ahwqjDDKI4ADs0RUOg9wjes9vqS6bm31OGdXKoECopnCvuOa0KWAMQzWwoPA7iPMpiBg0WIgJhxYHgCsWADsTgb2RDK2yhl75UCpbISrFE+5XtmJa5pLQruuZib5xYJ8YxFgjAM849mqiQW7R4FNceCAGCB0CRC5GPg+GEhcwEjTArkezHYjDspsKHd6LdS63kWDqqWyXtlB5LYKEpdkkGoVqlySAdc1sLqtAdRJgCEe8I0FQuzQMGBFEJDqy7xRz5yvYuxxgvW47C2qnXtH6pWdX553aydyTIHEMYVpXio+npuG1jnrgLlpsDmmMCtXg/UJYHMMOCwCHBvCvMrMnOHJtlwNCzudgRKZgJNOLwMt8udkUTyTknI1aHY6pDMymT7PxlfTs2D7YgOLszIgyn4AVKtY9IqDEBQFITIM1oRA2H70ZmzyAApdue+ADMZSp2E67jIwoUN3hkixFvRhISTSXaAp+Zg6NY9HpuUC07MYc9LBijWAbgVgjgHCw4G4ICDFxE+y9MjPV+GTvU6gw66DUvtHXe70msYysQj0/g7QxEJM+qCIOydvw63PcrB4ZgYcHFMQqU3kdL9YZC6K4KTlwaxf44uPsnWgPHem3QqWpupBZx366X+ZVMA0qQAkKcZkqsCET7eAZmbA/sakTcSYDYsiQMuDQcl+TNk6SLe5sSRLB8o04F/QP+M48tEjppVOAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/SeovileoV2/static/9f3d08b3abf526a058439c0482832ee8/f6798/messenger.png","srcSet":"/SeovileoV2/static/9f3d08b3abf526a058439c0482832ee8/7eed0/messenger.png 131w,\\n/SeovileoV2/static/9f3d08b3abf526a058439c0482832ee8/f2685/messenger.png 261w,\\n/SeovileoV2/static/9f3d08b3abf526a058439c0482832ee8/f6798/messenger.png 522w","sizes":"(min-width: 522px) 522px, 100vw"},"sources":[{"srcSet":"/SeovileoV2/static/9f3d08b3abf526a058439c0482832ee8/8ca62/messenger.webp 131w,\\n/SeovileoV2/static/9f3d08b3abf526a058439c0482832ee8/38509/messenger.webp 261w,\\n/SeovileoV2/static/9f3d08b3abf526a058439c0482832ee8/10357/messenger.webp 522w","type":"image/webp","sizes":"(min-width: 522px) 522px, 100vw"}]},"width":522,"height":519}')}}]);
//# sourceMappingURL=commons-0dd0cacfec41b8f6c2c4.js.map