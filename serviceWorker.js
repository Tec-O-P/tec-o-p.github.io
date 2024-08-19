
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
                '/scripts/identity.js',

                '/framework/images/bgs/clearBlue.png',
                '/framework/images/icons/menu.png',
                '/images/icons/logo.svg',
                '/images/game/screenshots/battle_city_x3.png',
                '/images/game/screenshots/battle_net_cyber_girl_x3.png',
                '/images/game/screenshots/map_tile_white_x3.png',
                '/images/game/screenshots/menu_x3.png'
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