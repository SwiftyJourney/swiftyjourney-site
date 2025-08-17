// Service Worker for Swifty Journey
const CACHE_NAME = 'swifty-journey-v1';
const STATIC_CACHE = 'static-v1';
const RUNTIME_CACHE = 'runtime-v1';

// Files to cache immediately
const PRECACHE_URLS = [
  '/',
  '/en/',
  '/es/',
  '/en/affiliates/',
  '/es/afiliados/',
  '/favicon.svg',
  '/logo-light.svg',
  '/logo-dark.svg'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).then(fetchResponse => {
        // Don't cache non-successful responses
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
          return fetchResponse;
        }

        // Cache successful responses
        const responseToCache = fetchResponse.clone();
        caches.open(RUNTIME_CACHE).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return fetchResponse;
      });
    }).catch(() => {
      // Fallback for navigation requests
      if (event.request.mode === 'navigate') {
        return caches.match('/');
      }
    })
  );
});