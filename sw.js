// Minimal: macht die Seite installierbar. Es wird bewusst nichts zwischengespeichert (nie veraltete Befehle/Schlüssel).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
