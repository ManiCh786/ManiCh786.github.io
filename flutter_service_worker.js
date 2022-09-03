'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3e99ea0ce11b2c17dfacd972d2b180fb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/logo512.png": "bb1f51877a7bfc4fba1199eb97931950",
"assets/assets/photos/maniColorBg.jpeg": "7a143be19f1106e8748846b32d0f1598",
"assets/assets/photos/maniwhitebg.png": "0e028c7900dabfa746c723072ae0f021",
"assets/assets/photos/mani_mobile.png": "afab89b48ca79a3904191f8fc0114bc0",
"assets/assets/projects/fastapp.png": "dde5ea362d0c22a9c01fdce3c4030f2a",
"assets/assets/projects/fastappicon.png": "0befd2db92f53fe2cda3338301c17161",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/musicapp.png": "3105c887e77af5a723d1c6476de95cd9",
"assets/assets/projects/musicappIcon.png": "3a055b1a14034bb5a0ec2f3f87b842f1",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/services/web.png": "8d6ccbb08d155e73dd7c577af4ed9966",
"assets/FontManifest.json": "6d7bf0d7c489d6724ff0c728629cbd1b",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "e9cbd3c8e7fd5b50d4f5c05aaef9ec5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "bb1f51877a7bfc4fba1199eb97931950",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/100.png": "caaecaed994dd4a4b07cac2182dd35d7",
"icons/1024.png": "2f0168780e612d32cb4dd8fa89300c36",
"icons/114.png": "aaabf818d896e6ced5d217081ef97492",
"icons/120.png": "02a97562d3ea9a88685906f167dd8e46",
"icons/128.png": "c80f770c322cf74387004806f222c104",
"icons/144.png": "df38c6a9088beb81992326fb72123718",
"icons/152.png": "b74c29ec4569f3bcefcbbe9bf67f923d",
"icons/16.png": "2705de3ad5d8f225fafa90a05736cd57",
"icons/167.png": "c686462f100f53402e19dbd1a689a6d8",
"icons/172.png": "acb06fea6a871895551f81eb2dbb358a",
"icons/180.png": "e291f4fe8c11e69b0981b38e1b2aa5e1",
"icons/20.png": "e449c99d7af873f2a7c736a0de3e2877",
"icons/216.png": "285e5da86420d507b29e4aa208759bdd",
"icons/256.png": "fe0d9113d947aaaf7fea89b6b82001a7",
"icons/29.png": "ad204df8e0b7bff6b34900ae4ce02cd8",
"icons/32.png": "3b687d9205dc1972fd46fb64485b5f5d",
"icons/40.png": "6970f52688ccf0eac2cc56af77623f08",
"icons/48.png": "bbbba877f8e6e1727aaf622f0676afef",
"icons/50.png": "bc13b3918a491bd9085155237e4fa483",
"icons/55.png": "9797c383faa244f3cd2146ffc0c5dbab",
"icons/57.png": "6da4487aec9ab4e95bf9e622e25327a0",
"icons/58.png": "9faaab0186ae8cdcb8e3090d87108f10",
"icons/60.png": "5d03fef46aa0014a8c30eab9a7b888c8",
"icons/64.png": "b823c498d86d936b0e90ca2d5b06efc2",
"icons/72.png": "dc2de7538bea61f2fd51d484b185d7f4",
"icons/76.png": "6aabdde8fb2a87e5bb1b5a7fd05ae423",
"icons/80.png": "4dac2e979f04fed8ebd71670bf603558",
"icons/87.png": "15f5b5a15810969a7781b2e5aa5a4c5e",
"icons/88.png": "386727936c1c59506434b46ab0dddf69",
"icons/Contents.json": "b0acb7355194b055decf0c9d45619bc7",
"icons/Icon-192.png": "5becf2679be7534704c9101d5acde573",
"icons/Icon-maskable-512.png": "997262bf4fe245611155f91396b0ce58",
"index.html": "ccec3b1f32acfaa0b0204e7d54c60072",
"/": "c703df3409c82c3cc18a3a9cdcd2225a",
"main.dart.js": "af5487181bbc6b6d18905e97f1867e35",
"ManiCh786.github.io/.git/config": "6a779c3ec98e05c9590d71444aeb8942",
"ManiCh786.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ManiCh786.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ManiCh786.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ManiCh786.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ManiCh786.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"ManiCh786.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ManiCh786.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ManiCh786.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"ManiCh786.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ManiCh786.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ManiCh786.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ManiCh786.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ManiCh786.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ManiCh786.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ManiCh786.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ManiCh786.github.io/.git/index": "0ef35f835622bffd80c4bb46a0b93759",
"ManiCh786.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"ManiCh786.github.io/.git/logs/HEAD": "a3465a13bb61621478c4e3e6297c8b91",
"ManiCh786.github.io/.git/logs/refs/heads/main": "a3465a13bb61621478c4e3e6297c8b91",
"ManiCh786.github.io/.git/logs/refs/remotes/origin/HEAD": "a3465a13bb61621478c4e3e6297c8b91",
"ManiCh786.github.io/.git/objects/pack/pack-dc4d9dad6a3fe685481a94a8c8ae244cd425bbd9.idx": "7dbfae4600487200f70dd48918b39a80",
"ManiCh786.github.io/.git/objects/pack/pack-dc4d9dad6a3fe685481a94a8c8ae244cd425bbd9.pack": "504551fc07492bc877e5ba59672280c2",
"ManiCh786.github.io/.git/packed-refs": "3b5b27314d1bc979cac5c0176b434ee8",
"ManiCh786.github.io/.git/refs/heads/main": "20d85b30c57fd8f03058245f91318f07",
"ManiCh786.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"ManiCh786.github.io/assets/AssetManifest.json": "a18e98621c57f9945ba7944537f852d5",
"ManiCh786.github.io/assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"ManiCh786.github.io/assets/assets/photos/logo512.png": "bb1f51877a7bfc4fba1199eb97931950",
"ManiCh786.github.io/assets/assets/photos/maniColorBg.jpeg": "7a143be19f1106e8748846b32d0f1598",
"ManiCh786.github.io/assets/assets/photos/maniwhitebg.png": "0e028c7900dabfa746c723072ae0f021",
"ManiCh786.github.io/assets/assets/photos/maniwhitebg.svg": "ebd4d0912676e1326d1ca775a1eb9804",
"ManiCh786.github.io/assets/assets/photos/mani_mobile.png": "afab89b48ca79a3904191f8fc0114bc0",
"ManiCh786.github.io/assets/assets/photos/mylogo.png": "5ad6e24d3563e8e26ec52c377e9fb8d6",
"ManiCh786.github.io/assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"ManiCh786.github.io/assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"ManiCh786.github.io/assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"ManiCh786.github.io/assets/assets/projects/fastapp.png": "dde5ea362d0c22a9c01fdce3c4030f2a",
"ManiCh786.github.io/assets/assets/projects/fastappicon.png": "0befd2db92f53fe2cda3338301c17161",
"ManiCh786.github.io/assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"ManiCh786.github.io/assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"ManiCh786.github.io/assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"ManiCh786.github.io/assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"ManiCh786.github.io/assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"ManiCh786.github.io/assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"ManiCh786.github.io/assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"ManiCh786.github.io/assets/assets/projects/musicapp.png": "3105c887e77af5a723d1c6476de95cd9",
"ManiCh786.github.io/assets/assets/projects/musicappIcon.png": "3a055b1a14034bb5a0ec2f3f87b842f1",
"ManiCh786.github.io/assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"ManiCh786.github.io/assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"ManiCh786.github.io/assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"ManiCh786.github.io/assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"ManiCh786.github.io/assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"ManiCh786.github.io/assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"ManiCh786.github.io/assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"ManiCh786.github.io/assets/assets/services/web.png": "8d6ccbb08d155e73dd7c577af4ed9966",
"ManiCh786.github.io/assets/FontManifest.json": "6d7bf0d7c489d6724ff0c728629cbd1b",
"ManiCh786.github.io/assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"ManiCh786.github.io/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"ManiCh786.github.io/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"ManiCh786.github.io/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"ManiCh786.github.io/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"ManiCh786.github.io/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"ManiCh786.github.io/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"ManiCh786.github.io/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"ManiCh786.github.io/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"ManiCh786.github.io/assets/NOTICES": "e9cbd3c8e7fd5b50d4f5c05aaef9ec5a",
"ManiCh786.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"ManiCh786.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"ManiCh786.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"ManiCh786.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"ManiCh786.github.io/canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"ManiCh786.github.io/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"ManiCh786.github.io/canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"ManiCh786.github.io/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"ManiCh786.github.io/favicon.png": "bb1f51877a7bfc4fba1199eb97931950",
"ManiCh786.github.io/flutter.js": "2556c7a0a389efe39748bf8869544837",
"ManiCh786.github.io/icons/100.png": "caaecaed994dd4a4b07cac2182dd35d7",
"ManiCh786.github.io/icons/1024.png": "2f0168780e612d32cb4dd8fa89300c36",
"ManiCh786.github.io/icons/114.png": "aaabf818d896e6ced5d217081ef97492",
"ManiCh786.github.io/icons/120.png": "02a97562d3ea9a88685906f167dd8e46",
"ManiCh786.github.io/icons/128.png": "c80f770c322cf74387004806f222c104",
"ManiCh786.github.io/icons/144.png": "df38c6a9088beb81992326fb72123718",
"ManiCh786.github.io/icons/152.png": "b74c29ec4569f3bcefcbbe9bf67f923d",
"ManiCh786.github.io/icons/16.png": "2705de3ad5d8f225fafa90a05736cd57",
"ManiCh786.github.io/icons/167.png": "c686462f100f53402e19dbd1a689a6d8",
"ManiCh786.github.io/icons/172.png": "acb06fea6a871895551f81eb2dbb358a",
"ManiCh786.github.io/icons/180.png": "e291f4fe8c11e69b0981b38e1b2aa5e1",
"ManiCh786.github.io/icons/20.png": "e449c99d7af873f2a7c736a0de3e2877",
"ManiCh786.github.io/icons/216.png": "285e5da86420d507b29e4aa208759bdd",
"ManiCh786.github.io/icons/256.png": "fe0d9113d947aaaf7fea89b6b82001a7",
"ManiCh786.github.io/icons/29.png": "ad204df8e0b7bff6b34900ae4ce02cd8",
"ManiCh786.github.io/icons/32.png": "3b687d9205dc1972fd46fb64485b5f5d",
"ManiCh786.github.io/icons/40.png": "6970f52688ccf0eac2cc56af77623f08",
"ManiCh786.github.io/icons/48.png": "bbbba877f8e6e1727aaf622f0676afef",
"ManiCh786.github.io/icons/50.png": "bc13b3918a491bd9085155237e4fa483",
"ManiCh786.github.io/icons/55.png": "9797c383faa244f3cd2146ffc0c5dbab",
"ManiCh786.github.io/icons/57.png": "6da4487aec9ab4e95bf9e622e25327a0",
"ManiCh786.github.io/icons/58.png": "9faaab0186ae8cdcb8e3090d87108f10",
"ManiCh786.github.io/icons/60.png": "5d03fef46aa0014a8c30eab9a7b888c8",
"ManiCh786.github.io/icons/64.png": "b823c498d86d936b0e90ca2d5b06efc2",
"ManiCh786.github.io/icons/72.png": "dc2de7538bea61f2fd51d484b185d7f4",
"ManiCh786.github.io/icons/76.png": "6aabdde8fb2a87e5bb1b5a7fd05ae423",
"ManiCh786.github.io/icons/80.png": "4dac2e979f04fed8ebd71670bf603558",
"ManiCh786.github.io/icons/87.png": "15f5b5a15810969a7781b2e5aa5a4c5e",
"ManiCh786.github.io/icons/88.png": "386727936c1c59506434b46ab0dddf69",
"ManiCh786.github.io/icons/Contents.json": "b0acb7355194b055decf0c9d45619bc7",
"ManiCh786.github.io/icons/Icon-192.png": "5becf2679be7534704c9101d5acde573",
"ManiCh786.github.io/icons/Icon-maskable-512.png": "997262bf4fe245611155f91396b0ce58",
"ManiCh786.github.io/index.html": "c703df3409c82c3cc18a3a9cdcd2225a",
"ManiCh786.github.io/main.dart.js": "bf3e4b55d0e7f074a89c8181f9894c1a",
"ManiCh786.github.io/manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"ManiCh786.github.io/README.md": "bf7efb65490282e158afb2c9be19378d",
"ManiCh786.github.io/version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
