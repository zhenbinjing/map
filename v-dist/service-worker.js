"use strict";var precacheConfig=[["/v-dist/static/assets/icons/android-chrome-192x192.png","f130a0b70e386170cf6f011c0ca8c4f4"],["/v-dist/static/assets/icons/android-chrome-512x512.png","0ff1bc4d14e5c9abcacba7c600d97814"],["/v-dist/static/assets/icons/apple-touch-icon-120x120.png","936d6e411cabd71f0e627011c3f18fe2"],["/v-dist/static/assets/icons/apple-touch-icon-152x152.png","1a034e64d80905128113e5272a5ab95e"],["/v-dist/static/assets/icons/apple-touch-icon-180x180.png","c43cd371a49ee4ca17ab3a60e72bdd51"],["/v-dist/static/assets/icons/apple-touch-icon-60x60.png","9a2b5c0f19de617685b7b5b42464e7db"],["/v-dist/static/assets/icons/apple-touch-icon-76x76.png","af28d69d59284dd202aa55e57227b11b"],["/v-dist/static/assets/icons/apple-touch-icon.png","66830ea6be8e7e94fb55df9f7b778f2e"],["/v-dist/static/assets/icons/favicon-16x16.png","4bb1a55479d61843b89a2fdafa7849b3"],["/v-dist/static/assets/icons/favicon-32x32.png","98b614336d9a12cb3f7bedb001da6fca"],["/v-dist/static/assets/icons/favicon.ico","7a2fa8fc2aff558ca7b7e6d5dddb5315"],["/v-dist/static/assets/icons/msapplication-icon-144x144.png","b89032a4a5a1879f30ba05a13947f26f"],["/v-dist/static/assets/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["/v-dist/static/assets/manifest.json","36d4763eae83cc9a7ee78bea4c0d9b0e"],["/v-dist/static/js/0.a409c3cf6ccbf12773a2.js","8516bce233f4811830b8d154b8e81e6d"],["/v-dist/static/js/1.77801a2cee7be7406b00.js","18aaae31cc154d997cf599beffcf5cca"],["/v-dist/static/js/app.cf67fd56eebb1c835ac1.js","b89424c87c329548e03cf2821ec8c5ef"],["/v-dist/static/js/manifest.1e73f10105fffa52bbd3.js","338c6238fd107c54fafee4c5f876126e"],["/v-dist/static/js/vendors.8e6931afbc55d5600aeb.js","5637b9bb2b572ab6f5036abe21f70347"],["index.html","ee833e4023e8a27a7ecdc26f27f15e01"],["static/assets/icons/android-chrome-192x192.png","f130a0b70e386170cf6f011c0ca8c4f4"],["static/assets/icons/android-chrome-512x512.png","0ff1bc4d14e5c9abcacba7c600d97814"],["static/assets/icons/apple-touch-icon-120x120.png","936d6e411cabd71f0e627011c3f18fe2"],["static/assets/icons/apple-touch-icon-152x152.png","1a034e64d80905128113e5272a5ab95e"],["static/assets/icons/apple-touch-icon-180x180.png","c43cd371a49ee4ca17ab3a60e72bdd51"],["static/assets/icons/apple-touch-icon-60x60.png","9a2b5c0f19de617685b7b5b42464e7db"],["static/assets/icons/apple-touch-icon-76x76.png","af28d69d59284dd202aa55e57227b11b"],["static/assets/icons/apple-touch-icon.png","66830ea6be8e7e94fb55df9f7b778f2e"],["static/assets/icons/favicon-16x16.png","4bb1a55479d61843b89a2fdafa7849b3"],["static/assets/icons/favicon-32x32.png","98b614336d9a12cb3f7bedb001da6fca"],["static/assets/icons/favicon.ico","7a2fa8fc2aff558ca7b7e6d5dddb5315"],["static/assets/icons/msapplication-icon-144x144.png","b89032a4a5a1879f30ba05a13947f26f"],["static/assets/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["static/assets/icons/safari-pinned-tab.svg","f78c0251d6ddd56ee219a1830ded71b4"],["static/assets/manifest.json","36d4763eae83cc9a7ee78bea4c0d9b0e"],["static/css/index.77801a2cee7be7406b00.css","e311a2b8074412ea2f426b895c26a905"],["static/css/index.cf67fd56eebb1c835ac1.css","1a773c34031c5e9419eca89d4b5ae9e6"],["static/js/0.a409c3cf6ccbf12773a2.js","8516bce233f4811830b8d154b8e81e6d"],["static/js/0.a409c3cf6ccbf12773a2.js.map","f96d9f649af7be1adeeef697cf8511b8"],["static/js/1.77801a2cee7be7406b00.js","18aaae31cc154d997cf599beffcf5cca"],["static/js/1.77801a2cee7be7406b00.js.map","84ebb7c065a8cc22f43c62da042a3300"],["static/js/app.cf67fd56eebb1c835ac1.js","b89424c87c329548e03cf2821ec8c5ef"],["static/js/app.cf67fd56eebb1c835ac1.js.map","d201f05a74334c4e4b49c7736957c595"],["static/js/manifest.1e73f10105fffa52bbd3.js","338c6238fd107c54fafee4c5f876126e"],["static/js/manifest.1e73f10105fffa52bbd3.js.map","996915a505889fabc3f1c98e529ce0c3"],["static/js/vendors.8e6931afbc55d5600aeb.js","5637b9bb2b572ab6f5036abe21f70347"],["static/js/vendors.8e6931afbc55d5600aeb.js.map","79319223330ea05de49dbef820f5fb68"]],cacheName="sw-precache-v3-i-cut-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],c=new URL(a,self.location),t=createCacheKey(c,hashParamName,s,!1);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var c=new Request(s,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});