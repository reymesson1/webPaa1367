const filesToCache = [
    '/',
    'index.html',
    'offline.html',
    '404.html',
    'style.css',
    'book.png',
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
];

const staticCacheName = 'our-second-cache';

self.addEventListener('install', event => {
    console.log('attempting to install serviec worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function() {
    console.log('Activate!');
});

self.addEventListener('fetch', function(event) {
    console.log('Fetch!', event.request);
});