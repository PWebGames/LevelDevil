const CACHE_NAME = "leveldevil-v1";

const ASSETS = [
  "/leveldevil/",
  "/leveldevil/index.html",
  "/leveldevil/Level Devil.js",
  "/leveldevil/poki-sdk.js",
  "/leveldevil/poki-sdk-core-v2.263.0.js",
  "/leveldevil/null.html",
  "/leveldevil/null.json",
  "/leveldevil/lib/default.pak",
  // SFX assets
  "/leveldevil/assets/sfx/sound-1075.mp3",
  "/leveldevil/assets/sfx/sound-1076.mp3",
  "/leveldevil/assets/sfx/sound-1077.mp3",
  "/leveldevil/assets/sfx/sound-1078.mp3",
  "/leveldevil/assets/sfx/sound-1079.mp3",
  "/leveldevil/assets/sfx/sound-565.mp3",
  "/leveldevil/assets/sfx/sound-566.mp3",
  "/leveldevil/assets/sfx/sound-568.mp3",
  "/leveldevil/assets/sfx/sound-720.mp3",
  "/leveldevil/assets/sfx/sound-721.mp3",
  "/leveldevil/assets/sfx/sound-726.mp3",
  "/leveldevil/assets/sfx/sound-727.mp3",
  "/leveldevil/assets/sfx/sound-730.mp3",
  "/leveldevil/assets/sfx/sound-731.mp3",
  "/leveldevil/assets/sfx/sound-732.mp3",
  "/leveldevil/assets/sfx/sound-733.mp3",
  "/leveldevil/assets/sfx/sound-734.mp3",
  "/leveldevil/assets/sfx/sound-735.mp3",
  "/leveldevil/assets/sfx/sound-736.mp3",
  "/leveldevil/assets/sfx/sound-741.mp3",
  "/leveldevil/assets/sfx/sound-742.mp3",
  "/leveldevil/assets/sfx/sound-858.mp3",
  "/leveldevil/assets/sfx/sound-889.mp3",
  "/leveldevil/assets/sfx/sound-890.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
