// 바나나 키우기 서비스 워커: 한 번 열면 인터넷 없이도 실행돼요.
// 게임을 업데이트하면 아래 버전 숫자를 올려 주세요. (v1 → v2 ...)
const VERSION = 'banana-v18';
const FILES = ['./', './index.html', './manifest.json', './privacy.html',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png', './icons/favicon-48.png'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
// 저장된 파일을 먼저 보여 주고, 뒤에서 최신 파일로 갱신해요.
self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.match(req, {ignoreSearch:true}).then(hit=>{
    const net = fetch(req).then(res=>{
      if(res && res.ok){ const copy = res.clone(); caches.open(VERSION).then(c=>c.put(req, copy)); }
      return res;
    }).catch(()=>hit);
    return hit || net;
  }));
});
