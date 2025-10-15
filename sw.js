const CACHE_NAME = 'workout-app-light-v1';
const APP_SHELL = [
'/index.html',
'/manifest.json',
'/icons/icon-192.png',
'/icons/icon-512.png'
];

self.addEventListener('install', e => {
e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
});

self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('fetch', e => {
if(e.request.method !== 'GET') return;
e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
