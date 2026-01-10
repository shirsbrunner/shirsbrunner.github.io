// Service worker for the app
// but... what does it need to do? 
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers

const VERSION = "v0.4"; //update this to increase version
const CACHE_NAME = `Obliques-${VERSION}`; //name of the cache, increases with version
const assetsToCache = [ //stuff it should cache
    '.',
    'index.html',
    'manifest.json',
    //'pages/',
    //'pages/info.html',
    //'images/',
    'images/LogoO-192x192.png',
    'images/LogoO-384x384.png',
    'images/LogoO-512x512.png',
    'images/LogoO-1024x1024.png',
    'app.js',
    //'fonts/',
    'fonts/GranCirculos-Regular.woff',
    'fonts/GranCirculos-Regular.woff2',  
    'style.css', 
    'reset.css', 
    'dataFiles/data.json'
]

self.addEventListener('install', ( event ) => {
    self.skipWaiting(); // skip waiting - should automate activation
    event.waitUntil(  
        caches.open(CACHE_NAME).then((cache) => {
              return cache.addAll(assetsToCache);
        })
      );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
      (async () => {
        const names = await caches.keys();
        await Promise.all(
          names.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          })
        );
        await clients.claim();
      })()
    );
});


self.addEventListener("fetch", (event) => {
      

    
    // when seeking an HTML page
    if (event.request.mode === "navigate") {
      const allowedPages = [
        //'/specific-page1.html', //add more if necessary
        //'/specific-page2.html',
        //'pages/info.html'
      ];

      event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            // Check if the requested page is in the allowed pages array
            if (allowedPages.some(page => event.request.url.includes(page))) {
              return fetch(event.request)
                .catch(function(error) {
                  console.error('Fetch error:', error);
                });
            }
  
            // For all other pages, return the default page (index.html)
            return caches.match('.');
          })
      );

      
      /*
      // Return to the index.html page - we have to changes this to also go to other pages...
      event.respondWith(caches.match("/"));
      return;
      */
    }
  
    // For every other request type
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          // Return the cached response if it's available.
          return cachedResponse;
        } else {
          // Respond with a HTTP 404 response status.
          return new Response(null, { status: 404 });
        }
      })()
    );
});