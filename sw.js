if(!self.define){let a,e={};const o=(o,d)=>(o=new URL(o+".js",d).href,e[o]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=o,a.onload=e,document.head.appendChild(a)}else a=o,importScripts(o),e()})).then((()=>{let a=e[o];if(!a)throw new Error(`Module ${o} didn’t register its module`);return a})));self.define=(d,n)=>{const r=a||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let _={};const i=a=>o(a,r),s={module:{uri:r},exports:_,require:i};e[r]=Promise.all(d.map((a=>s[a]||i(a)))).then((a=>(n(...a),_)))}}define(["./workbox-3e911b1d"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"_payload.json",revision:"a3cc8bb2c49718f6504c04fdd2ffefeb"},{url:"buy_me_a_tea/_payload.json",revision:"488124f84ed73d10fc788c332d569559"},{url:"canned_fish_dha_epa/_payload.json",revision:"1a5f2db4ed0fd474e4df94f883c05f21"},{url:"category/_payload.json",revision:"4438e638d4fd855806e16cff108d447b"},{url:"category/all/1/_payload.json",revision:"051743180af3dde429a852522c012e23"},{url:"category/all/2/_payload.json",revision:"f3bf456a734d26171cdb741e85ba98b6"},{url:"category/all/3/_payload.json",revision:"f8c60bfe129ece975298d96811678a27"},{url:"category/all/4/_payload.json",revision:"d2948d22f2739e922f3a777567dfbc5c"},{url:"category/all/5/_payload.json",revision:"5d77da555e94edd0f7d0eceea404ec21"},{url:"category/frontend/1/_payload.json",revision:"e2e1083703131096ec8090531767a790"},{url:"category/frontend/2/_payload.json",revision:"ea569e095f025471e613c5df8bcc4e66"},{url:"category/life/1/_payload.json",revision:"f7ec999b2dcd039c1e8672e860246ef2"},{url:"category/life/2/_payload.json",revision:"18181a1a5cd8ace4146b0cc2d626e2f8"},{url:"category/linux/1/_payload.json",revision:"94928bf8b8b7f0b4424336f3914e0546"},{url:"category/linux/2/_payload.json",revision:"db5f27cde422c0b1fe4d0aebb1f190e2"},{url:"chrome_os_flex_asus_e203na/_payload.json",revision:"7f8b5ead6f2a77c18bfefe6668a24afe"},{url:"collections/_payload.json",revision:"c7a752084499d6f1bf6c91ed959cc8f5"},{url:"compare_blog/_payload.json",revision:"50d1c4ffcc60704aef5b1dd016dbbfb9"},{url:"crypto_after_ftx/_payload.json",revision:"ca96e5cc2d071fd38252d31422a07ad0"},{url:"crypto_liquidity_mining_v2/_payload.json",revision:"0a17ceb589fd130e3d62115a86ce0c50"},{url:"crypto_liquidity_mining_v3/_payload.json",revision:"7fa66f2a953e7c87dad5755b095d0611"},{url:"fedora_disable_turbo_boost/_payload.json",revision:"9a644c18ad2292739819e81658adf59a"},{url:"fedora_docker_startup/_payload.json",revision:"8291f50316cc589edd57ed95fe022b99"},{url:"fedora_lineageos_sargo/_payload.json",revision:"7634c6062b020ec6f4e20a35c1585919"},{url:"fedora_megasync/_payload.json",revision:"f5806449378e4d91d54b0adbc531ecf0"},{url:"fedora_startup/_payload.json",revision:"cf8e0310d82ed9fba6bc0ac5f5bbf6b8"},{url:"fedora_unrar/_payload.json",revision:"7aa132924d9784ed6ff323d485d8cd91"},{url:"fedora_youtube_download/_payload.json",revision:"4f2ef8cdc44456b58ff35e4fad992e20"},{url:"fedora_zram_resize/_payload.json",revision:"5d119c0fbbf6228575d6659385513c59"},{url:"free_diving_seeing_friend_black_out_first_time/_payload.json",revision:"9654d24a3d9b5d49ad8c39c6fa71b93a"},{url:"linux_ten_years_experience/_payload.json",revision:"975f55d13a91f6eb3816063581067a53"},{url:"macbook_air_2013_fedora/_payload.json",revision:"99da82bf29c7e601ad9c85dff43b8d1d"},{url:"mark_forster/_payload.json",revision:"b75edc1cf6256a9f59e0788569963e00"},{url:"mobile_chrome_sticky_bottom/_payload.json",revision:"89a1a3d4556bf4ed8b462e6be1c425a1"},{url:"nuxt2_bootstrapvue_treeshaking/_payload.json",revision:"1b484af668324dd1f430caf2522b8500"},{url:"nuxt2_content_code_block_copy_paste/_payload.json",revision:"deb74a3cf4e157df6426f48e07def9ff"},{url:"nuxt2_content_git/_payload.json",revision:"12bbf935ab729affaf71aa3784a45a78"},{url:"nuxt2_dynamic_routes_sitemap/_payload.json",revision:"c4ef270adc8b74eb3e08ecd2a2e6b4c4"},{url:"nuxt2_to_nuxt3_blog_0_intro/_payload.json",revision:"79563ff987b5f953411a91f543c8bf59"},{url:"nuxt2_to_nuxt3_blog_1_ui/_payload.json",revision:"3695c5866b9059e92e2a7c37dfe8616f"},{url:"nuxt2_to_nuxt3_blog_2_settings/_payload.json",revision:"8a204a0f0e565dbc9e0276f0f497776c"},{url:"nuxt2_to_nuxt3_blog_3_modules_content/_payload.json",revision:"55a3959812d520b02c3adc8819254a52"},{url:"nuxt2_to_nuxt3_blog_4_modules_pwa/_payload.json",revision:"89a1763d7909579bd997f329acca012e"},{url:"nuxt2_to_nuxt3_blog_5_modules_sitemap/_payload.json",revision:"8fbecbd35e9158d8e82edcde368b371b"},{url:"nuxt2_to_nuxt3_blog_6_modules_pinia/_payload.json",revision:"10d88a6da497ee868431321cc006cca4"},{url:"nuxt3_vite_pwa/_payload.json",revision:"cf8899a72638f15c5670b1badc6fffa9"},{url:"okinawa_first_day_2023/_payload.json",revision:"e776b6b7798431a9af121892bf9b0176"},{url:"okinawa_foods_2023/_payload.json",revision:"b3dea211e6edc04b60a642520e10b554"},{url:"okinawa_fourth_day_2023/_payload.json",revision:"17c824fd1c35ed076c58f7e91aeff768"},{url:"okinawa_hotel_2023/_payload.json",revision:"822461c04df01567dfe202424725bf28"},{url:"okinawa_one_day_tour_bus_2023_south/_payload.json",revision:"99d45e2158c60a0ca022105b746ed39a"},{url:"okinawa_one_day_tour_bus_2023/_payload.json",revision:"74d34d1063c8871ba19219695fc516f4"},{url:"online_survey_money/_payload.json",revision:"cfbd6ba9f0f2baa95caadb12c1ac6804"},{url:"pixel3a_custom_rom/_payload.json",revision:"6daae101ad37003150bf86a88c367fc2"},{url:"ubuntu_lineageos_sargo/_payload.json",revision:"ce3d0023ac07c47793b46527a186f552"},{url:"ubuntu_swap_resize/_payload.json",revision:"ce764098abfbf6bde2e57b618fc5a122"},{url:"vue_stack_deployment_pm2/_payload.json",revision:"c7198b08f08ad14abb02432d6a8226e1"},{url:"vue_stack_development_devcontainer/_payload.json",revision:"cfebadd78e30fb73281c41ffbe691271"},{url:"what_we_know_rainbow_parent/_payload.json",revision:"94ceb50d817a098a3b7374e8c05b769d"},{url:"what_we_know_rainbow_therapy/_payload.json",revision:"d99cf89659f81695e8066070948d9892"},{url:"woeusb/_payload.json",revision:"2c907086b5cd7e3327a1fd1e1d9e7976"},{url:"_nuxt/builds/latest.json",revision:"805afbcf14cd2f026a2b535fb0484c7a"},{url:"_nuxt/builds/meta/27580f1b-9cf4-45f2-aa2a-19626fd00a0d.json",revision:null},{url:"manifest.webmanifest",revision:"0cf9f46f99906a104676ecb9402ee207"}],{}),a.cleanupOutdatedCaches(),a.registerRoute(new a.NavigationRoute(a.createHandlerBoundToURL("/blog/")))}));
