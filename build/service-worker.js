"use strict";var precacheConfig=[["./index.html","5b28d7d55c24ec0a9c68191a020a64f5"],["./static/css/main.fd00c64a.css","2fcb7cabe62e90be664940f44384f786"],["./static/js/main.ab72757c.js","4aedbba031489bb530702ed6cc015531"],["./static/media/Debussy.013a54ef.woff2","013a54ef4dad293b333a1b8ea59e3981"],["./static/media/Debussy.8b15b62e.ttf","8b15b62e48070939d7b7324e76f0344b"],["./static/media/Debussy.f01ea84d.woff","f01ea84dc2e647e280009c0adf1b8f67"],["./static/media/Debussy.f1d16d9c.eot","f1d16d9c07aac7159200875a81ee23b5"],["./static/media/QuicksandBold.22c748a9.ttf","22c748a9d32bb042cd0641726debdf42"],["./static/media/QuicksandBold.a374ed68.woff2","a374ed687fdbc86dad466bb5788a8a9f"],["./static/media/QuicksandBold.a6017f76.woff","a6017f7610aa466ad106e4d815cf004d"],["./static/media/QuicksandBold.f023487e.eot","f023487efe7593a13485fbf6b68030d9"],["./static/media/QuicksandBook.03434875.woff2","03434875bf49403db9c47325c0438584"],["./static/media/QuicksandBook.6ba9b13c.ttf","6ba9b13c341a85c08ddc8c49ef312724"],["./static/media/QuicksandBook.83461462.eot","8346146252b0a56bc2e18aa37fada623"],["./static/media/QuicksandBook.d459fe78.woff","d459fe783256ed89f7c4b32aaeeeaf62"],["./static/media/Vazir-Bold.1cb24967.woff","1cb249673adb6547cfca54ccd2b20bdf"],["./static/media/Vazir-Bold.49d66f21.eot","49d66f2129ec5a2c871a1a9b1da4e0e0"],["./static/media/Vazir-Bold.64a844e2.woff2","64a844e2cf2a6d5952416f69660ac1ce"],["./static/media/Vazir-Bold.f7cd2d59.ttf","f7cd2d59ce4d3c5b23d6089d5b9059fd"],["./static/media/Vazir.385001fd.eot","385001fd4e1807f9a3d55d2697d0c994"],["./static/media/Vazir.5c7abcf1.woff","5c7abcf135f2445506d83594d50db435"],["./static/media/Vazir.bed047da.ttf","bed047dac8bc9d762b174a96f09f4837"],["./static/media/Vazir.db055c88.woff2","db055c8873d217d4a8b02f13b3618de1"],["./static/media/about.5ffcb98b.svg","5ffcb98bdc0595aa5095a312c8cb8d1a"],["./static/media/contact.d04f36ab.svg","d04f36ab4d0d8905fa827ab4f29351e1"],["./static/media/header.8ebe83dd.svg","8ebe83dd1f5ea94c3863f671f21028dd"],["./static/media/linkedin.f39819e4.svg","f39819e4284333349911d9ca5bd2b623"],["./static/media/logo.540aaa48.svg","540aaa4874581488166642c489a26e2e"],["./static/media/mana-bg-blue.8a5aa097.svg","8a5aa097f43ef18e60257f89dfc28348"],["./static/media/mana-bg-brown.8a9d5fd7.svg","8a9d5fd777d2a15f2d21b9783dfffb43"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});