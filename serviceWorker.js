
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

                // '/framework/fonts/7_Segments_Display.otf',
                '/framework/fonts/Digital_Disk_Bold_Italic.otf',
                '/framework/fonts/Digital_Disk_Bold.otf',
                '/framework/fonts/Digital_Disk_Italic.otf',
                '/framework/fonts/Digital_Disk_Regular.otf',
                // '/framework/fonts/Verdial_Bold_Italic.otf',
                // '/framework/fonts/Verdial_Bold.otf',
                // '/framework/fonts/Verdial_Italic.otf',
                // '/framework/fonts/Verdial_Regular.otf',

                '/framework/images/bgs/clearBlue.png',
                '/framework/images/bgs/switch_button_rounded_shine_above.svg',
                '/framework/images/icons/menu.png',
                '/framework/images/icons/email.svg',
                '/framework/images/icons/whatsapp.svg',
                '/framework/images/icons/youtube.svg',
                '/framework/images/icons/instagram.svg',
                '/framework/images/icons/arrowRounded_L.png',
                '/framework/images/icons/arrowRounded_R.png',
                '/framework/images/icons/button_hide.png',
                '/framework/images/icons/textIconCSS_interrogation.png',
                '/framework/images/windows/clearBlueBg_and_clearBlueLight/bg1_transparent.png',
                '/framework/images/windows/bg2_transparent.png',
                '/images/icons/logo.svg',
                '/images/game/screenshots/battle_city_x3.png',
                '/images/game/screenshots/battle_net_cyber_girl_x3.png',
                '/images/game/screenshots/map_tile_white_x3.png',
                '/images/game/screenshots/menu_x3.png',

                '/images/game/icons/types/Normal.png',
                '/images/game/icons/types/Generic.png',
                '/images/game/icons/types/Fighter.png',
                '/images/game/icons/types/Blade.png',
                '/images/game/icons/types/Shot.png',
                '/images/game/icons/types/Hi-Tech.png',
                '/images/game/icons/types/Robot.png',
                '/images/game/icons/types/Digital.png',
                '/images/game/icons/types/Fire.png',
                '/images/game/icons/types/Water.png',
                '/images/game/icons/types/Electric.png',
                '/images/game/icons/types/Wind.png',
                '/images/game/icons/types/Sand.png',
                '/images/game/icons/types/Earth.png',
                '/images/game/icons/types/Ice.png',
                '/images/game/icons/types/Rock.png',
                '/images/game/icons/types/Metal.png',
                '/images/game/icons/types/Sound.png',
                '/images/game/icons/types/Gravity.png',
                '/images/game/icons/types/Time.png',
                '/images/game/icons/types/Light.png',
                '/images/game/icons/types/Dark.png',
                '/images/game/icons/types/Ghost.png',
                '/images/game/icons/types/Flying.png',
                '/images/game/icons/types/Plant.png',
                '/images/game/icons/types/Chemical.png',
                '/images/game/icons/types/Magic.png',
                '/images/game/icons/types/Psychic.png',
                '/images/game/icons/types/Aura.png'
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