
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('tec-op').then(function(cache) {
            return cache.addAll([
                '/',
                '/framework/index.html',
                '/framework/iframeEx.html',
                '/framework/page.html',
                '/framework/styles/css/downloadFonts.css',
                '/framework/styles/css/normalize.css',
                '/framework/styles/css/gmes_normalize.css',
                '/framework/styles/css/defaults.css',
                '/framework/styles/css/fw_identity.css',
                '/framework/scripts/defaults.js',
                '/framework/scripts/identity.js',
                
                '/index.html',
                '/types.html',
                '/skills.html',
                '/aboutUs.html',
                '/styles/css/defaults.css',
                '/styles/css/identity.css',
                '/styles/css/types_table.css',
                '/scripts/identity.js'
            ])
        })
    )
})
   
self.addEventListener('fetch', e => {
    console.log(e.request.url)
    e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
    )
})