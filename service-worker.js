// =============================================================================
// SERVICE WORKER FOR PWA OFFLINE CAPABILITY
// =============================================================================

const CACHE_NAME = 'portfolio-v1.1.0';
const DYNAMIC_CACHE_NAME = 'portfolio-dynamic-v1.1.0';

// Assets to cache on install
const STATIC_ASSETS = [
    '/Portfolio_/',
    '/Portfolio_/index.html',
    '/Portfolio_/styles.css',
    '/Portfolio_/script.js',
    '/Portfolio_/animations.js',
    '/Portfolio_/i18n.js',
    '/Portfolio_/manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .catch((error) => {
                console.error('[Service Worker] Cache installation failed:', error);
            })
    );
    
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => {
                            return name !== CACHE_NAME && name !== DYNAMIC_CACHE_NAME;
                        })
                        .map((name) => {
                            console.log('[Service Worker] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
    );
    
    // Claim all clients immediately
    return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip Chrome extensions and other non-http(s) requests
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // Strategy: Cache First, falling back to Network
    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    console.log('[Service Worker] Serving from cache:', request.url);
                    return cachedResponse;
                }
                
                // Not in cache, fetch from network
                return fetch(request)
                    .then((networkResponse) => {
                        // Don't cache API responses or external resources we don't control
                        if (shouldCache(request)) {
                            return caches.open(DYNAMIC_CACHE_NAME)
                                .then((cache) => {
                                    console.log('[Service Worker] Caching new resource:', request.url);
                                    cache.put(request, networkResponse.clone());
                                    return networkResponse;
                                });
                        }
                        
                        return networkResponse;
                    })
                    .catch((error) => {
                        console.error('[Service Worker] Fetch failed:', error);
                        
                        // Return offline page or fallback
                        return caches.match('/Portfolio_/index.html');
                    });
            })
    );
});

/**
 * Determines if a request should be cached
 */
function shouldCache(request) {
    const url = new URL(request.url);
    
    // Don't cache API requests
    if (url.pathname.includes('/api/') || url.hostname.includes('api.github.com')) {
        return false;
    }
    
    // Don't cache analytics
    if (url.hostname.includes('google-analytics.com') || 
        url.hostname.includes('googletagmanager.com') ||
        url.hostname.includes('plausible.io')) {
        return false;
    }
    
    // Cache same-origin requests and CDN resources
    return url.origin === location.origin || 
           url.hostname.includes('cdnjs.cloudflare.com') ||
           url.hostname.includes('fonts.googleapis.com');
}

// Listen for messages from the client
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CACHE_URLS') {
        const urls = event.data.urls;
        caches.open(DYNAMIC_CACHE_NAME)
            .then((cache) => {
                cache.addAll(urls);
            });
    }
});
