// Service worker for the app
// but... what does it need to do? 
// Check this: https://goingoffline.adactio.com/chapter1/
// And this: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers

const VERSION = "v0.3"; //update this to increase version
const CACHE_NAME = `RadioWeaver-${VERSION}`; //name of the cache, increases with version

const assetsToCache = [ //stuff it should cache
    '.',
    './index.html',
    './offline.html', 
    './images/LogoM-192x192.png',
    './images/LogoM-384x384.png',
    './images/LogoM-512x512.png',
    './images/LogoM-1024x1024.png',
    './app.js',
    './fonts/AD-MegaPearlsVF.woff',
    './fonts/AD-MegaPearlsVF.woff2',   
    './style.css', 
    './reset.css', 
    './Sounds/static.mp3'
]

// Service-Worker "Transparency" - see what's happening with the service-worker
/* 
sidenote: while this directly displays in the console in chrome
in Firefox you need to open the service-worker tab and click on inspect to see the service-workers console
*/

addEventListener('install', installEvent => {
  console.log('The service worker is installing...');
    
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
        .then( staticCache => {
            console.log("I'm actually doing something")
           // Nice to have files would be here out side of the return statement
           /*
            staticCache.addAll([
                '/path/to/font.woff',
                '/path/to/icon.svg'
            ]);*/ // end addAll
            // Must have files need to be in the return statements assetsToCache
            return staticCache.addAll(assetsToCache); // end return addAll
        }) // end open then
    ); // end waitUntil
    self.skipWaiting(); //this used to be self.skipwaiting(); - but maybe it's not necessary

}); // end addEventListener

addEventListener('activate', activateEvent => {
    console.log('The service worker is activated.');
    activateEvent.waitUntil(
        caches.keys()
        .then( cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if (cacheName != CACHE_NAME) {
                        return caches.delete(cacheName);
                    } // end if
                }) // end map
            ); // end return Promise.all
        }) // end keys then
        .then( () => {
            return clients.claim();
        }) // end then
    ); // end waitUntil
}); // end addEventListener

addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    console.log(request)
    fetchEvent.respondWith(
        // First look in the cache
        caches.match(request)
        .then( responseFromCache => {
            if (responseFromCache) {
                return responseFromCache;
            } // end if
            // Otherwise fetch from the network //THIS IS NEEDED FOR THE RADIO
            return fetch(request)
            .catch( error => {
                // Show a fallback page instead
                return caches.match('/offline.html');
            }); // end fetch catch and return
        }) // end match then
    ); // end respondWith
}); // end addEventListener


/* //THIS IS DIFFERENT THAN THE ABOVE; BUT WHO KNOWS...
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

/* DELEEEEETE MEEEEE
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

DELEEEEEETE ME*/