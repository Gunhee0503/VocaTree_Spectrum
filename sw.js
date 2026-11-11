/* PIF Hub 이전 안내: 예전 캐시를 지우고 서비스 워커를 해제한 뒤, 열린 화면을 새로 고쳐 이동 안내 페이지를 받게 한다. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    var ks = await caches.keys(); await Promise.all(ks.map(function (k) { return caches.delete(k); }));
    await self.registration.unregister();
    var cs = await self.clients.matchAll({ type: 'window' });
    cs.forEach(function (c) { try { c.navigate(c.url); } catch (err) {} });
  })());
});
