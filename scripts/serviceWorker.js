
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('tecOP').then(function(cache) {
            return cache.addAll([
            '/',
            '/framework/styles/css/downloadFonts.css',
            '/framework/styles/css/normalize.css',
            '/framework/styles/css/gmes_normalize.css',
            '/framework/styles/css/defaults.css',
            '/framework/scripts/defaults.js',
            '/index.html',
            '/styles/css/defaults.css',
            '/styles/css/identity.css',
            '/scripts/identity.js'
            ]);
        })
    );
});
   
self.addEventListener('fetch', e => {
    console.log(e.request.url);
    e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
    );
});