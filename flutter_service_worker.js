'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cccb1651d9fe361fd6321d5f574b514a",
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
".git/index": "a3b3b6be58f34c32555900b96e3c23ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28a3efd606548b818fd73c7552a1c2bd",
".git/logs/refs/heads/main": "49f265d359766f22571be455862fe189",
".git/logs/refs/remotes/origin/main": "d15dbef398696523a952e77f02e6a4ba",
".git/objects/03/5cd6c86e0edd7a9dfd4f8065bda71aa0d51b2f": "90af1daaac12435d4eab30dce67a267f",
".git/objects/05/d56bc93a5bfd8730704bc2d3fb6ca990d0a184": "425d82c26bf7e378239bcce1c305a797",
".git/objects/08/12513e6825ae275fe6f88fe1f4c0d3ed4213bd": "b3978adb83867969d5d823c28473b617",
".git/objects/0b/77d8532815134ec3c226c60b4f798e2aa78ecc": "a8f90f9d546843b7acbebc332f9f5c20",
".git/objects/0e/43f593f78a4de836c04835015c2bba40c2ae3c": "0553bdca30124cb31e1ab826c6aa336a",
".git/objects/18/2c35acc41c358b5578d911fa48cea3d99e8058": "f254ccff61c9183d10759eeb74d39804",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/23/b68140f574aedb4e690b66d1b3dfeae03d9ea1": "405bcb69c909e147f642e4bb70cdefa0",
".git/objects/24/951239e4e05ab188e6e1f177964ac9476a2cfd": "fb2097e90e7ced4e9c498915020784a7",
".git/objects/24/db94ef8d8bb21b3e3737abe463db5c114591ac": "c43056f479a62e0de32f524cfaea930c",
".git/objects/2c/b46df053babc41e302b162806294f810e2cbd2": "1926a02c26848cf2f5b97192c3ee229c",
".git/objects/30/549b3dd0d7a05427acb04ae8a2a0ead4af1d3f": "6cb47f98cab28ba3eae06a312f0b0c07",
".git/objects/31/0775b569cac7859e7715d9c723022379d3898f": "9b17f39fa59ffbba7978e59b9c881b59",
".git/objects/31/efb79b772825d4bd53ba02814c1caa8e4ffb36": "eee5140bab2fe0cdd3b11d025c21e913",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/688492d9df8296f2f3f06f9fe61fdadf613f7b": "5d1bef06bd42d03db06e718710c6eb86",
".git/objects/3b/d5ca0b4de2fac5cba1956c7b542e90edf54251": "46cc10b9f69e893585ae78f3e411d7e1",
".git/objects/3d/9ffda95407077a8783bbe526db8a5f9566616b": "c5ce1bba9014378a466b79ddc191d2a3",
".git/objects/3f/e80919873d4e4b2da341712b619eeeb25736bf": "47ccfa037f8b3c4e4f981b057ac6b281",
".git/objects/44/ff51bb3deaaca2388e34a7bfa0d9c6a247388b": "1ddb177fafe7dea3478f1a2a69cd2e9b",
".git/objects/47/0e1e6ddb42d757cf55bb9186d08cd0bb320d49": "1e79b4eb64df40978d4828199d793f56",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/f389bcebd22ba06f59a051a9274bbbfae2f29b": "53f49d7cc077621348224636d3bd967e",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5d/c2ae4f3700d6e69bbd4819fb5d24dc8053d9a3": "0a39cbd6538194ebc5c9108d972e0e2f",
".git/objects/6b/d911e0af777080bde840d4b7afeb9819efb82c": "2723a66e1e19bd2516e86c47a0fc9bb3",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/632672777e4005d969e8b6d5211172cdac0052": "10e5c1f54f671cfd9b7a4d544823a980",
".git/objects/75/dafdc32952dfb0151aa9d513af6e20981c0f94": "b1b27ffbb7d8e6665eecda76e0bc6d13",
".git/objects/76/25c74973d17c44254af71a6c3004f0e0808597": "6dd2a16d2f1f51f3e0f3ce64a2b3e5d6",
".git/objects/77/a05e96b759ac402789ab6a437445f7ecbbb6dc": "62d23315178c8e0156605fed2ec1ecce",
".git/objects/7d/04349d8d2e116a59c47ce5cd66a443a284a0f6": "7b559ae2ecf475357bfe6a8986625c43",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/f0729374d5ef8fb60c4d27bcfd63811e5864ea": "aaf7c8b39065575db84a0df6034914d4",
".git/objects/94/b7230fd6ca7c3291a49d11cdbd4d6f3dc3a34c": "6be2903e8b0bea83db5a877a51ba3c76",
".git/objects/95/fcd025edee8de8f92123d244194370015e787d": "03896a340bf63bee7cc7803d56132e12",
".git/objects/98/d17b5373e9d768c0be9b884f594ccefc69b361": "0bf2964b82789572699f2ab1594dd90f",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/eeac65a5ffa52c79df8020cf443ce2362de67d": "5772c6cbe6f80f6215298aad197a2834",
".git/objects/a2/5b2608e731655add49d06d531aa6d9eba62b85": "2eab2695e3bf75033e40773e355194bf",
".git/objects/a8/222bfe366658ae5f6dc4e489391138dc237abd": "87f14e2e6f6264b95d0f2fd23947059b",
".git/objects/a9/68e683470fcc72591564f446d7fc737d5342c3": "b7c2370a543f97051671db58ca27004b",
".git/objects/aa/7402ad65b98133775b2c514531f3e4c49119c4": "02a08841bbce770849d0e03bfe957298",
".git/objects/b0/615f6ffa9d7db873cb0af218765b2d87e8984a": "05b587d66bfabeea06102a2c44348287",
".git/objects/b4/07f184557131f8df0b92d41e9298a986309d81": "a467eb657d213c77a77715bc3be11341",
".git/objects/b4/a6f5b61ae8690979331908b14b8e52421c74b7": "d63a8f748310bf340a95dbb267e576a2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/1894c7136c8736ea950af4b7c7e992d7aef954": "ffe4548055fea548ac032eedaf3df39e",
".git/objects/bc/259f0af44c99ea28944e8b37ab4de338f34f87": "7e77542426f2d547e2bef3fed80e2894",
".git/objects/bd/125e02680310aa3c34eb9e899025ebe8e1c9c7": "e60c8f7bc59741aad289ad03ccf4aecd",
".git/objects/be/73357444d1e65ef625b5b86d198025df0267b9": "f07397cf5a036f06cc6cf20ab43d77d5",
".git/objects/bf/95e7f3d6ff9c836e2dd0c4b91b17cc744e2b71": "be05a387616c1f710b3caea2204ad17d",
".git/objects/c0/dd9edc95723750f4687c692ebdd4634190cfc8": "c1f36de5d6afc157ab71061e59c51178",
".git/objects/c6/db0b1f9059c991f4f8f71d5cde09f1feede126": "10fcaa5bb082cf313ee145e777d914c5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/1ff2ec01af57e8d5afd5af2d912db03fb18ddf": "8de2668c92e300b1afcee8bcc2ff2df5",
".git/objects/cb/10be13716dbb385b04fde3a9e726570ada241e": "db9c08c789212888aed75498c05b4a3e",
".git/objects/cb/4001e4a2c96c2d17c1b29f37c76bcfff62e079": "ba3fc8f7702b0c30b78090bd3770a177",
".git/objects/cc/00f43c8ef60348e0d9d6509323373d8c9c89f7": "dbdffa7b6cb98ceec38535aee1f93680",
".git/objects/cc/eafb1c2a3152120c4420cc2be6ce48769a213b": "d381f523b40bab99d367a2cfb87d9a3f",
".git/objects/ce/4c3281fcc9808347292d9ed769db86d0ce28f6": "c506851124e7f0333a560a96e085c17d",
".git/objects/d1/23b002b00d718a2826de0aa5ed4e632a77e02b": "672ff9f20dfe5d525d177e93ddf3edcf",
".git/objects/d2/1f9cbf0c81620cc9f16864144bf2933120b49a": "1a6a174d5d2ed8173b97c666bb1dfcab",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/15b20fa2cedc13a735edeb44d78f5c87c94311": "f5acfcca520cfbc73225e25cb3bcba49",
".git/objects/d8/43e4c202d2ed2d9c6a8f271763e56ed2bcabb9": "06cb934b1b34a51f44534dc3fb3e1820",
".git/objects/d8/885d6f4131966eca4c891e27dc5cc71c961a6f": "210b243dfdcc01f8757587e51ee358ac",
".git/objects/d9/a86c37f097655db8d3a6190afbdeac6dab4272": "318054f7b9a84d53af21a453c7d22a88",
".git/objects/da/fce61455b5cd4bd0c2c4dc48f3de898063a2d1": "a89c3b13c081027b0969672877927cbc",
".git/objects/db/dbbe4f17301138d2a36992585d381acf83a70a": "d2f82448788285e31a3dc77113d3ebee",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/cdec6082a943ce24aa90ebd7ab28773a32a635": "1fc1c26e35f11dd429931f35854061c8",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e7/0d05f400a21cf19ca7a1f84ac4c43ef0f8ade1": "5febd9826982e237f975e56a4fd23e70",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/e7ac8c1497aa42b272df36597abe06807c95ae": "7bbe75d70c63423e2a4602e546611e91",
".git/objects/f5/0c97212c6fb46297a66d2caabd5663299b32eb": "78bf00dadec679bf8decd03b4f3f4434",
".git/objects/f7/0b9f83333c32fbe19ea105a021c45b996cd551": "30295feb1849ab273ce6e3c0c8fb09e9",
".git/refs/heads/main": "17aa1e805ab777d5e49a4118163287d5",
".git/refs/remotes/origin/main": "17aa1e805ab777d5e49a4118163287d5",
"assets/AssetManifest.bin": "17f0597f07e0d3173803b820c42938b7",
"assets/AssetManifest.bin.json": "866f76cc568b7144c952421a4f7cc666",
"assets/AssetManifest.json": "2a920d0564d0cb050b51023e8d8c52b2",
"assets/assets/projects/chat.jpg": "0f180ca13aaaeeba8875e08081a97091",
"assets/assets/projects/doctor.png": "b942de0a1de2cdd8cad9b60d3c7b96a3",
"assets/assets/projects/eb.png": "0faca80b081745cc53e9f9754c2b076a",
"assets/assets/projects/fashion.jpg": "56f339a214175d76d31f5dc422526ce7",
"assets/assets/projects/fashion.png": "d1a6c042a62d0318469151e6b1a38882",
"assets/assets/projects/habbit.jpg": "0688278894ba071ee5df13810328d2db",
"assets/assets/projects/hajji.png": "5246a50e5a5b4b38ef74b8dcfbb83335",
"assets/assets/projects/image.png": "ef988674e4e63d4b2c1a90c5f727e2eb",
"assets/assets/projects/nc1.png": "6dd2c64018fa53f3c737744a93d5c169",
"assets/assets/projects/nc2.png": "fdabe888e2e176c62cfacebd6419ecec",
"assets/assets/projects/ncW.png": "9fac8219fabd0aeb319df0a0b3142150",
"assets/assets/projects/news.jpg": "6abaa3167a96d5f330e9c83588a3f0b5",
"assets/assets/projects/pt.png": "e3080eaf877c9f8fcad32351f171f0cd",
"assets/assets/projects/sb.png": "8bff6ba3e4e720fcfbcbab84c455145e",
"assets/assets/projects/sowaE.png": "5f582d6eaed6a6bace1df7dc6cdeafba",
"assets/assets/projects/sowaW.PNG": "33759fd05475f8f53633bceb9ba99812",
"assets/assets/projects/travel.jpg": "2e4aa1246346e17fb012eced7495d785",
"assets/assets/projects/travel.png": "e42411e1ea96fef015830eff78b0c8ae",
"assets/assets/projects/verden.png": "bf02913366bfe1ab2e024104af4b7099",
"assets/assets/projects/washMesh.png": "e3f98f11abd347e12aff2495ce074ea1",
"assets/assets/projects/weather.jpg": "8e6f2a2e21f4afb06f2045bf00961e06",
"assets/assets/projects/workout.jpg": "50520b7ddbe19d91c84445335bd7c443",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "8243943dd601cd9e708c95414d9c318b",
"assets/NOTICES": "fa3a2be2956a5828d4da5092accf6028",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5dbc8aa83e4f69ca0150cb182924eb7a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b5f35b2048e31b81108b80a7ff7b6f1",
"/": "9b5f35b2048e31b81108b80a7ff7b6f1",
"main.dart.js": "cdb953294e1efd9e12a8f8771ab2b22d",
"manifest.json": "08cb2480ca43587ba4c6b0c327a0cb3b",
"version.json": "ae77cf204c86d0db5b1c707529fc9bbd"};
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
