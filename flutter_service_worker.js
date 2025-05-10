'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cd3d08e786b3a2c63ec9ff96fc89c5a1",
".git/config": "976f135c04ad537b40f73042821529b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "28b5c9c0d6c2a491c72e288c9c42a809",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6dd8f5dc8d664f664336cb513c0b1d34",
".git/logs/refs/heads/main": "6dd8f5dc8d664f664336cb513c0b1d34",
".git/logs/refs/remotes/origin/main": "82fe5b8ced5a1e3c85fe272aafb08719",
".git/objects/00/1e09ae66031d4c633187bb529a48280710c1bd": "6a1735ace79cd87bc0200a1a846cfd4c",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/05/d56bc93a5bfd8730704bc2d3fb6ca990d0a184": "425d82c26bf7e378239bcce1c305a797",
".git/objects/07/d8adbb0ff5b5fabe4589e8ab4e976dee5962b1": "91fab4fd79990e15e3dc15500a6127f4",
".git/objects/08/12513e6825ae275fe6f88fe1f4c0d3ed4213bd": "b3978adb83867969d5d823c28473b617",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/43f593f78a4de836c04835015c2bba40c2ae3c": "0553bdca30124cb31e1ab826c6aa336a",
".git/objects/1d/b1b41da1a7712cc2537dc3f5e6bd4fd7cf0a0e": "d3f154dd3cf7bed4870d4adc8c9acb9e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/529639f7deead9e446e21d798ad121a0070b48": "9a3ffb1f361e62272a0e25ef2492ff9a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/524a8bac3af5870824251389fe92fa9e079d95": "cd6cb88aa719f3c28ba7cb43e68e3c5c",
".git/objects/49/759fff8b2ad958dbaa709ca06030ecd77840b4": "ebb25635e4c7f3bab8ae048eb9dbcdd1",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/69/c7304dd4407596ade868eb30ed4754ff8d4089": "e2ee91c2a6c01a52e097e67f8b813a9c",
".git/objects/6b/d911e0af777080bde840d4b7afeb9819efb82c": "2723a66e1e19bd2516e86c47a0fc9bb3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/39707ff3ba48882307451e6d1e615d70cce945": "0385f0ba81ecf03f2b8b79821fe2dc5d",
".git/objects/76/740ca68cf61fa0a00f082a1d01e78aba90dd2d": "87cda8d27a50a03519dd2d34c483d0e9",
".git/objects/7a/5eeb7038df8cccfc93a97154a8c2aad69c5406": "2c433a25ef0e687799860a71554c375d",
".git/objects/80/51cffc4278a7edf6777d8463b70459e5bf812c": "5ba8fd33facc121bc1a0896c2bfbd1fc",
".git/objects/83/777cd55b552c61199884ab493ca0114a46f3cc": "130b2fd66608e38c3450b9d4dcf71ce1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/14a7443f9b6596f0bc9b4aafd15f5b6a487a87": "ac8a70b58fa2df12554ea588d0e7571d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b929194cd312e9eff4643bf08498aad4a6f0db": "c517761fc206734aed37fcfaa31d2bc0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/b7230fd6ca7c3291a49d11cdbd4d6f3dc3a34c": "6be2903e8b0bea83db5a877a51ba3c76",
".git/objects/97/35f997ed2c5a9567d42ee32529072a7f13b902": "57a58409cbb3c0b1cae8f41f8bbf5f9a",
".git/objects/97/e7c62f78935b897f076315ee95e90fc7a06465": "aaec54b930cf0954c8ee011ea8daac12",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/78f21e1d81c5034c61c26ce6ead58231a4130a": "e349c32acfe2936a803d01e5a911ec7a",
".git/objects/9b/a8456737c5024b1de4eb7cdcdf6a5f2b928ea9": "c71d44c7e045c1be1345cfc8dba63dd4",
".git/objects/9c/eeac65a5ffa52c79df8020cf443ce2362de67d": "5772c6cbe6f80f6215298aad197a2834",
".git/objects/a2/67ac3156c0e7937bddcb133bd11e9083be582f": "7f05ecffc5e4196302a3bc12cb7d58a7",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a8/a3ecdd4391ad6d1c6996686765b9769328f5ee": "8f2f5474e496e52228abe052a623f78f",
".git/objects/a9/68e683470fcc72591564f446d7fc737d5342c3": "b7c2370a543f97051671db58ca27004b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/7f71fb1ab89fa1d24c56d90e8c515b7a9177ed": "b40ff7370624416c4178ddb8cd1462f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/cdbc96775cb6b343fbd1fd3c45ef63d4404c95": "bcb13615a93d9bf33ffd493b2649dde1",
".git/objects/be/73357444d1e65ef625b5b86d198025df0267b9": "f07397cf5a036f06cc6cf20ab43d77d5",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/bf/95e7f3d6ff9c836e2dd0c4b91b17cc744e2b71": "be05a387616c1f710b3caea2204ad17d",
".git/objects/c0/3bfd5264df75b4ffd182a5d6c6bb77285793f7": "a716abafda7996d5202136a6ec9de05a",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/070e2955aae045d2cdf51159ffb42ea89635d3": "43ce391f4afc4ca4eef54a541ed7bffd",
".git/objects/c3/a53bf8115df4fcfce2ba29215f56ca7d7debc9": "97557e533abc0ba5f93d74fe767c238a",
".git/objects/c3/b90049312e1a9c602e045da2e9b81f6f3fea57": "0612eb7068cc96b17ec70722c511ea05",
".git/objects/cb/10be13716dbb385b04fde3a9e726570ada241e": "db9c08c789212888aed75498c05b4a3e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/43e4c202d2ed2d9c6a8f271763e56ed2bcabb9": "06cb934b1b34a51f44534dc3fb3e1820",
".git/objects/d9/a86c37f097655db8d3a6190afbdeac6dab4272": "318054f7b9a84d53af21a453c7d22a88",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/db/dbbe4f17301138d2a36992585d381acf83a70a": "d2f82448788285e31a3dc77113d3ebee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ef/fdee61f1bffaa6453531aa33d1135628abe984": "166fce73def27a0d199389f11c4f43b3",
".git/objects/f0/e083963be08f7d19abb4ea6f264596d77edaf6": "36ddc48c1a51782afe515700cb21c882",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/4409deb45223750c923516bfe0fb1057b0852d": "c3e10f0912b6f6372cc7e73aa0eea496",
".git/refs/heads/main": "c67f1813806037d2450a82a0180694e3",
".git/refs/remotes/origin/main": "c67f1813806037d2450a82a0180694e3",
"assets/AssetManifest.bin": "00a99be669f12bacacd000189615a36e",
"assets/AssetManifest.bin.json": "0844b65c7867aa58af538d6bb6ab727a",
"assets/AssetManifest.json": "132cdb4e1ef85c9d741d55e198a94a72",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "267f3f8a8c38e5000fb5e57a585a23d8",
"assets/assets/icons/gmail.svg": "f189ac546938f3ba3056ecd1e9d62c70",
"assets/assets/icons/linkedin.svg": "47ca757fbe0cf13bacfdc7715214a4bb",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/whatsapp.svg": "336486ffa3ff5e38b703b1e1b10a02ee",
"assets/assets/images/chat.jpg": "0f180ca13aaaeeba8875e08081a97091",
"assets/assets/images/doctor.png": "b942de0a1de2cdd8cad9b60d3c7b96a3",
"assets/assets/images/fashion.jpg": "56f339a214175d76d31f5dc422526ce7",
"assets/assets/images/fashion.png": "d1a6c042a62d0318469151e6b1a38882",
"assets/assets/images/habbit.jpg": "0688278894ba071ee5df13810328d2db",
"assets/assets/images/hajji.png": "5246a50e5a5b4b38ef74b8dcfbb83335",
"assets/assets/images/image.png": "ef988674e4e63d4b2c1a90c5f727e2eb",
"assets/assets/images/nc1.png": "60a16833fce9691634e0e26291ed9dec",
"assets/assets/images/nc2.png": "fdabe888e2e176c62cfacebd6419ecec",
"assets/assets/images/nc_w.PNG": "60d8fe2cc6989c4662b3efb884a18c0a",
"assets/assets/images/news.jpg": "6abaa3167a96d5f330e9c83588a3f0b5",
"assets/assets/images/sowa_w.PNG": "c750463da3cb3415bb17055d3d05a117",
"assets/assets/images/travel.jpg": "2e4aa1246346e17fb012eced7495d785",
"assets/assets/images/travel.png": "e42411e1ea96fef015830eff78b0c8ae",
"assets/assets/images/verden.jpg": "067346eb3773c1da5ff2ab077454c402",
"assets/assets/images/washMesh.jpg": "3fc46546d2a29cb822ff1c8068052e9c",
"assets/assets/images/weather.jpg": "8e6f2a2e21f4afb06f2045bf00961e06",
"assets/assets/images/workout.jpg": "50520b7ddbe19d91c84445335bd7c443",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "217bba2a208ba60607aa9ac24e27f72b",
"assets/NOTICES": "70fcaa7d9b5be04f75cc34258210f5b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "cffb38f6d0c5b11ad2ea54acde7f0df4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddfffc7bf4a57d8d1f5345fe0fd9e5aa",
"/": "ddfffc7bf4a57d8d1f5345fe0fd9e5aa",
"main.dart.js": "872e3675557197c376a70340fd07fcbd",
"manifest.json": "d3896ced8a31bf2b50a590c12f31d282",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
