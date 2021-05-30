const filesToCache = [
    'index.html',
    'offline.html',
    '404.html',
    'style.css',
    'book.png'
];

const staticCacheName = 'our-first-cache';

export function register(config){

    
    window.self.addEventListener('install', event => {
        
        console.log('install service');
        event.waitUntil(
            
            caches.open(staticCacheName)
            .then( cache =>{
                return cache.addAll(filesToCache);
            } )
        )
    })
}