

const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html',  'offLine.html' ];

//FIC:Archivos o contenido estatico.
const CACHE_STATIC_NAME = 'static-v1';
//FIC: Archivos o contenido dinamico.
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
//FIC: Archivos o librerias que no cambian jamas.
const CACHE_INMUTABLE_NAME = 'inmutable-v1';
//FIC: Numero de Items permitidos en cache dinamica.
const CACHE_DYNAMIC_LIMIT = 5;


// FIC: Install SW
self.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('FIC: Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Listen for requests
self.addEventListener('fetch', (event) =>{
    event.respondWith(
        caches.match(event.request)
            .then(()=> {
                console.log('FIC: Listen for requests');
                return fetch(event.request)
                .catch(() => caches.match('offLine.html'))
            })
    );
});
// Activate the SW
self.addEventListener('activate', (event) =>{
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames)=> Promise.all(
            cacheNames.map((cacheName) => {
                console.log('FIC: Activate  Service Worker (SW)');
                if(!cacheWhiteList.includes(cacheName)) {
                    console.log('FIC: Delete CacheName');
                    return caches.delete(cacheName);
                }
            }
        )))
    );
});


