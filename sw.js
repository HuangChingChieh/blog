if(!self.define){let a,e={};const o=(o,d)=>(o=new URL(o+".js",d).href,e[o]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=o,a.onload=e,document.head.appendChild(a)}else a=o,importScripts(o),e()})).then((()=>{let a=e[o];if(!a)throw new Error(`Module ${o} didn’t register its module`);return a})));self.define=(d,n)=>{const r=a||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let _={};const i=a=>o(a,r),s={module:{uri:r},exports:_,require:i};e[r]=Promise.all(d.map((a=>s[a]||i(a)))).then((a=>(n(...a),_)))}}define(["./workbox-5ffe50d4"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"_payload.json",revision:"fdc6bd9b9f12285975f75fd5e56b4520"},{url:"buy_me_a_tea/_payload.json",revision:"ab8cf2726d014bce5c1586ba9531cf29"},{url:"canned_fish_dha_epa/_payload.json",revision:"4e58379c5b13a92727c4593121861ec8"},{url:"category/_payload.json",revision:"78f30aea6e19d1c4ee3e89a5cc6c0ba2"},{url:"category/all/1/_payload.json",revision:"42d8ddfd2ff98eb934e8951db62f0ab5"},{url:"category/all/2/_payload.json",revision:"66623ea69565269e297e327a6d8d8a8c"},{url:"category/all/3/_payload.json",revision:"6be7c3c5e3794c482e22b34c2eb8761e"},{url:"category/all/4/_payload.json",revision:"f066125b80acd2da41f02072c19e2f92"},{url:"category/all/5/_payload.json",revision:"e1d4f5ae08d69ba5fe823eb62d1fdcd1"},{url:"category/all/6/_payload.json",revision:"480f9be181f661a68b94eab2118dcfc6"},{url:"category/frontend/1/_payload.json",revision:"f56a165d48602334f8db621d4ab90a8d"},{url:"category/frontend/2/_payload.json",revision:"d3443e3ad295ab463e2fcb779de7ff84"},{url:"category/life/1/_payload.json",revision:"59fde46b2e2ef189442683b4b27fca5c"},{url:"category/life/2/_payload.json",revision:"b0402e8a460b6ffa8466b0399c0c0f5f"},{url:"category/linux/1/_payload.json",revision:"c649b8c3d75eb83b7615a0f26f4cd397"},{url:"category/linux/2/_payload.json",revision:"ae01b1cc5016af95403169a7ff12423c"},{url:"chrome_os_flex_asus_e203na/_payload.json",revision:"e9d271d675dfa09763b32f55aa4fc0c2"},{url:"collections/_payload.json",revision:"b7575f3173975257f9aac4a7b9e8c7e4"},{url:"compare_blog/_payload.json",revision:"c5253be3bb00b34e76b3549acf5e8810"},{url:"crypto_after_ftx/_payload.json",revision:"76e9c52b6b4bf08d4dbdf6a815b4c9f7"},{url:"crypto_liquidity_mining_v2/_payload.json",revision:"f9983c375213d26ea9957a13a923d23c"},{url:"crypto_liquidity_mining_v3/_payload.json",revision:"316d0cbe145f6ba0976edb142f7062a5"},{url:"fedora_disable_turbo_boost/_payload.json",revision:"f92ce594dccaa06f54cf68a330c57aed"},{url:"fedora_docker_startup/_payload.json",revision:"edfe904efd7819ef3c3b0f7b3fd76a00"},{url:"fedora_forticlient_vpn/_payload.json",revision:"385948971e817e1151a8e0e75eac6a65"},{url:"fedora_lineageos_sargo/_payload.json",revision:"7ce7ccc35a78e77aad1fac19e029718a"},{url:"fedora_megasync/_payload.json",revision:"6e1f9e266ef7d8a340c2780df8a3c616"},{url:"fedora_startup/_payload.json",revision:"14a8a529e2234334177217cb666ecee8"},{url:"fedora_unrar/_payload.json",revision:"25fce83f5a8f4df3613f582771d9b396"},{url:"fedora_vscode_devcontainer_podman/_payload.json",revision:"e54c9e2d237605f096c794f338bdd142"},{url:"fedora_youtube_download/_payload.json",revision:"d0543589326d1ab975ed8d7f36c78430"},{url:"fedora_zram_resize/_payload.json",revision:"99bfda2a753e9ea0e3b29a7eb73c8411"},{url:"free_diving_seeing_friend_black_out_first_time/_payload.json",revision:"52e5c634d559cbde93f6ca074f583dd5"},{url:"linux_ten_years_experience/_payload.json",revision:"cbfdcb830380f4226a1387423e1368f9"},{url:"macbook_air_2013_fedora/_payload.json",revision:"9255dc37e4e5f1ba54dcab77884ccc11"},{url:"mark_forster/_payload.json",revision:"f9aafe233895b3522978eb030315502a"},{url:"mobile_chrome_sticky_bottom/_payload.json",revision:"ab71ce6321cbff8c7b9f249bb8a21a19"},{url:"nuxt2_bootstrapvue_treeshaking/_payload.json",revision:"6ea1011991bb2d102aa3bcb4e9d33f72"},{url:"nuxt2_content_code_block_copy_paste/_payload.json",revision:"9ed7e5e0d0d479162ac9249c5bb5d35f"},{url:"nuxt2_content_git/_payload.json",revision:"19ae158a9310d299cd4ef00820f60a78"},{url:"nuxt2_dynamic_routes_sitemap/_payload.json",revision:"e90c600099afd22b43dc698715b7b802"},{url:"nuxt2_to_nuxt3_blog_0_intro/_payload.json",revision:"97cc51edb2d3d4c9d58d3794f28cdce3"},{url:"nuxt2_to_nuxt3_blog_1_ui/_payload.json",revision:"03e7d51107db52d2056398ecaca8fa1e"},{url:"nuxt2_to_nuxt3_blog_2_settings/_payload.json",revision:"5662c8e3283025efab73a1676557893d"},{url:"nuxt2_to_nuxt3_blog_3_modules_content/_payload.json",revision:"97c3a52cfe33f5e96a0488c44d2c9941"},{url:"nuxt2_to_nuxt3_blog_4_modules_pwa/_payload.json",revision:"442b0c71e92dc9ae00028fe853231af2"},{url:"nuxt2_to_nuxt3_blog_5_modules_sitemap/_payload.json",revision:"2f86d8b09bb43034cfc03a4a2b815bcc"},{url:"nuxt2_to_nuxt3_blog_6_modules_pinia/_payload.json",revision:"9db7a7ba1cc916edaa6420935932cdf0"},{url:"nuxt3_starter/_payload.json",revision:"0eb19ddb6633965dccbf47f9bffb57d1"},{url:"nuxt3_vite_pwa/_payload.json",revision:"d6c7300a8204ba5ee7b51a1ab52241c3"},{url:"okinawa_first_day_2023/_payload.json",revision:"ba2ae03389bb61b637f9fefead046f3c"},{url:"okinawa_foods_2023/_payload.json",revision:"7dbc04bf020f8e334cf0622b77a884b3"},{url:"okinawa_fourth_day_2023/_payload.json",revision:"050219f97c6191864ae84e55dbdf0e13"},{url:"okinawa_hotel_2023/_payload.json",revision:"9916600e460b02f2a12b80e011b91c99"},{url:"okinawa_one_day_tour_bus_2023_south/_payload.json",revision:"a2dfa247430ab7b67ff1fe98d2638d38"},{url:"okinawa_one_day_tour_bus_2023/_payload.json",revision:"7bfa32091d89e4d36fdb102f51adbc7c"},{url:"online_survey_money/_payload.json",revision:"738eeda185865f37c36d75d757d81b0c"},{url:"pixel3a_custom_rom/_payload.json",revision:"e304b2ef08f39a6ae35bae6a4208bff0"},{url:"ubuntu_lineageos_sargo/_payload.json",revision:"5906ba0e7d120ad3a2343344e675eea6"},{url:"ubuntu_swap_resize/_payload.json",revision:"2f199e41738445d07bff70ef3ceaa916"},{url:"vue_stack_deployment_pm2/_payload.json",revision:"35c695b80342f22efd3b77585ab1c9d7"},{url:"vue_stack_development_devcontainer/_payload.json",revision:"a719c683a70b06dbffe4449ac4f48ab1"},{url:"what_we_know_rainbow_parent/_payload.json",revision:"58c75c96720e83f0c248a84fbc7dd973"},{url:"what_we_know_rainbow_therapy/_payload.json",revision:"19818f7ed6c29aafad4ca2aa58c55a9d"},{url:"woeusb/_payload.json",revision:"5c449bd52504357969cfb2cae15bf2bf"},{url:"manifest.webmanifest",revision:"0cf9f46f99906a104676ecb9402ee207"}],{}),a.cleanupOutdatedCaches(),a.registerRoute(new a.NavigationRoute(a.createHandlerBoundToURL("/blog/")))}));
