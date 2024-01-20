self.addEventListener("install", event => {
  self.skipWaiting()
  event.waitUntil(
    caches
      .open("PokerStatsOffline")
      .then(cache => cache.addAll([
        "index.html",
        "index.js",
        "css/tokens.css",
        "css/pendant.css",
        "css/app.css"
      ]))
      .catch(err => console.error(err)),
  )
})

self.addEventListener("activate", event => self.clients.claim())

self.addEventListener("fetch", evt => evt.respondWith(
  caches
    .match(evt.request)
    .then(res => res || fetch(evt.request))
)
