if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()})),s.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},s=(s,n)=>{Promise.all(s.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(s)};self.define=(s,c,i)=>{n[s]||(n[s]=Promise.resolve().then(()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}})).then(e=>{const s=i(...e);return n.default||(n.default=s),n})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/commons.d10931fb8ce3d5a36e3b.js",revision:"3554ad7b9120e893828e2dc182477e43"},{url:"/_next/static/chunks/framework.fcef98db13e2318579fb.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/main-8fa06a561f4e3c24bcbd.js",revision:"28c34afe41510d4aec291d530fbe126d"},{url:"/_next/static/chunks/pages/%5Bdestination%5D-55ab0b5323c4bded4492.js",revision:"cc45264050eaeb080615f7a01b20987f"},{url:"/_next/static/chunks/pages/_app-0e71dd1cf091aea2cfa8.js",revision:"a6ef0be222bba9da6c93747c52e4763c"},{url:"/_next/static/chunks/pages/_error-772724d41790cbb1b489.js",revision:"0641c8248cc5b174e1d342bceb62678b"},{url:"/_next/static/chunks/pages/index-e79117b56529575b8192.js",revision:"3ce8e952fdeded5a9cf5bbcce4f42759"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"1d2a7e5b305faf70e0cf5eee636faef9"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/cf0ba5fb085e1288d538.css",revision:"4923aeaca8ef2958682d9a973e30c2ac"},{url:"/_next/static/css/dc7615214c80f8f005be.css",revision:"e1aa0bed54d7b08e1d6fbef8860d9f1c"},{url:"/_next/static/i2oFidw1gWmgK6wDgYig3/_buildManifest.js",revision:"77903e5e2ad2a362479fcd8611598650"},{url:"/_next/static/i2oFidw1gWmgK6wDgYig3/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon-16x16.png",revision:"dc94a085b4473c4dbcaf3e27aef89599"},{url:"/favicon-32x32.png",revision:"57e6dc73473817134aec1e415aeb602b"},{url:"/icons/icon-128x128.png",revision:"9f0da8d97e7801f15f69f2cc711046da"},{url:"/icons/icon-144x144.png",revision:"3360e363fe26bab65af1bd7575815d4f"},{url:"/icons/icon-192x192.png",revision:"9127795861c27e290a8c97e62daed1ec"},{url:"/icons/icon-512x512.png",revision:"bc0d38b6a1b023aae8f523fc2e4ca485"},{url:"/icons/icon-72x72.png",revision:"fb4e0d436124453dd9c0e7ba5f440fe4"},{url:"/icons/icon-96x96.png",revision:"f97d0bf88d433328796168563735b022"},{url:"/manifest.json",revision:"975c1fb8ae2884b06fe21bedd76d71f8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
