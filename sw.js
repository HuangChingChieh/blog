if(!self.define){let a,e={};const o=(o,d)=>(o=new URL(o+".js",d).href,e[o]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=o,a.onload=e,document.head.appendChild(a)}else a=o,importScripts(o),e()})).then((()=>{let a=e[o];if(!a)throw new Error(`Module ${o} didn’t register its module`);return a})));self.define=(d,n)=>{const r=a||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let _={};const i=a=>o(a,r),s={module:{uri:r},exports:_,require:i};e[r]=Promise.all(d.map((a=>s[a]||i(a)))).then((a=>(n(...a),_)))}}define(["./workbox-5ffe50d4"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"_payload.json",revision:"01b8abb2ef04ec7017c08e6130bfcebb"},{url:"buy_me_a_tea/_payload.json",revision:"b4e25c671f2d24350672b25deb072067"},{url:"canned_fish_dha_epa/_payload.json",revision:"5c7461f216507a2616c71afbf5841633"},{url:"category/_payload.json",revision:"5352c22f3f35dbf14eb555fc4e924aef"},{url:"category/all/1/_payload.json",revision:"6b7a68472badd35c575935bb9a216f99"},{url:"category/all/2/_payload.json",revision:"bbe005a306940b15dbcd17aad07f98ea"},{url:"category/all/3/_payload.json",revision:"66ef8e6346803c01d6f42728ca93ea11"},{url:"category/all/4/_payload.json",revision:"3ca677c08488773bde7972acfbbab0a1"},{url:"category/all/5/_payload.json",revision:"f0ac0e9ebef5e0ecbf54e1bf71e34e36"},{url:"category/frontend/1/_payload.json",revision:"ba8289ce5f25fd1a911c837123cb2be5"},{url:"category/frontend/2/_payload.json",revision:"128cc9d4b4ed849ce9f8b4eefcc3290a"},{url:"category/life/1/_payload.json",revision:"fe2b79e1a33542a11d97581d2271140b"},{url:"category/life/2/_payload.json",revision:"01174f7eef697fc289520e83f12f8e9e"},{url:"category/linux/1/_payload.json",revision:"be5376a48d1cf0ffadacda4a12cd4074"},{url:"category/linux/2/_payload.json",revision:"1cf15854534d32886ec3a33a48b70aad"},{url:"chrome_os_flex_asus_e203na/_payload.json",revision:"53c738cbc9158d0cefd30781d4c2348a"},{url:"collections/_payload.json",revision:"85a9911f52203b118bcd4f339a278787"},{url:"compare_blog/_payload.json",revision:"da70a0c009ec76b5f48528c256948364"},{url:"crypto_after_ftx/_payload.json",revision:"4b4c0234f6a38478a159ac1ac7eeecd7"},{url:"crypto_liquidity_mining_v2/_payload.json",revision:"01fd73f1f61a583926f578fab674ef51"},{url:"crypto_liquidity_mining_v3/_payload.json",revision:"e01ba144a0d01f3b7c4cf4fbe43da36a"},{url:"fedora_disable_turbo_boost/_payload.json",revision:"ec6badbd8ebfefd091d7bff5429bd277"},{url:"fedora_docker_startup/_payload.json",revision:"09a8915df0f1e9a1d93e3bb15dc8c7dd"},{url:"fedora_lineageos_sargo/_payload.json",revision:"1204e4e43173910ba4292423de2fd3ee"},{url:"fedora_megasync/_payload.json",revision:"04f29a939aa41c54fb29c7d01bcba0d5"},{url:"fedora_startup/_payload.json",revision:"86a288380fc70d77e525ff4eb67e9599"},{url:"fedora_unrar/_payload.json",revision:"849fe584b552234e11530c064e49e097"},{url:"fedora_vscode_devcontainer_podman/_payload.json",revision:"63582ccd72f5c08f4cbd86c5b7434413"},{url:"fedora_youtube_download/_payload.json",revision:"605558b66815d32b0b71be6b66767b00"},{url:"fedora_zram_resize/_payload.json",revision:"9750d2487d02cef1db15edb518dacddb"},{url:"free_diving_seeing_friend_black_out_first_time/_payload.json",revision:"c07e8b0e59d786d762f2346b3537ad0d"},{url:"linux_ten_years_experience/_payload.json",revision:"fc4e9c5ad0a4ce10fb617ef6962e4fa2"},{url:"macbook_air_2013_fedora/_payload.json",revision:"29fc7b853624764ee6767b8b682a6ce3"},{url:"mark_forster/_payload.json",revision:"0b126b6627e1ab142bc875f1c0399b6d"},{url:"mobile_chrome_sticky_bottom/_payload.json",revision:"19b4ddd9e1996cd80040768f1239b99a"},{url:"nuxt2_bootstrapvue_treeshaking/_payload.json",revision:"3c19265f2e8718b856da7353a3d65e76"},{url:"nuxt2_content_code_block_copy_paste/_payload.json",revision:"393d06737ca61c6fe3036e2bfb06c1c6"},{url:"nuxt2_content_git/_payload.json",revision:"2d65529653e597924e54d732d7304e27"},{url:"nuxt2_dynamic_routes_sitemap/_payload.json",revision:"eaf51f0093c8dc9d5b7d02e30ec17b07"},{url:"nuxt2_to_nuxt3_blog_0_intro/_payload.json",revision:"459c9d1f6b537e5709f11a1a4236bca6"},{url:"nuxt2_to_nuxt3_blog_1_ui/_payload.json",revision:"9748de0098e0ad520f1b4fe69c7180fe"},{url:"nuxt2_to_nuxt3_blog_2_settings/_payload.json",revision:"55311c93938b6f2da9282d5c6de1eb05"},{url:"nuxt2_to_nuxt3_blog_3_modules_content/_payload.json",revision:"0a170f973eb5eb5e35b2ba6dcc91eaa0"},{url:"nuxt2_to_nuxt3_blog_4_modules_pwa/_payload.json",revision:"0d70240bd3053b84f1de037bca99961f"},{url:"nuxt2_to_nuxt3_blog_5_modules_sitemap/_payload.json",revision:"cb5cc6b0bbe1ac85fb31d829f69f260c"},{url:"nuxt2_to_nuxt3_blog_6_modules_pinia/_payload.json",revision:"2a39de36a619f3f0aeb9fc68bd583905"},{url:"nuxt3_vite_pwa/_payload.json",revision:"13f80b79952fb629fc839a4a57a7a63a"},{url:"okinawa_first_day_2023/_payload.json",revision:"d080bdccf1b4b88a423847141041cb14"},{url:"okinawa_foods_2023/_payload.json",revision:"cdaf012da0bda11f1fd43737698181f8"},{url:"okinawa_fourth_day_2023/_payload.json",revision:"fad28831f98ac65bc28c5175124854e4"},{url:"okinawa_hotel_2023/_payload.json",revision:"96128f313ced522c597fb19519cba47c"},{url:"okinawa_one_day_tour_bus_2023_south/_payload.json",revision:"7b9e647107f28c32e11fcececfaabd4b"},{url:"okinawa_one_day_tour_bus_2023/_payload.json",revision:"9e3e6380e3df6a1d48f7c3ced24c47e8"},{url:"online_survey_money/_payload.json",revision:"162e8e3832019a9fe33634199ea9f890"},{url:"pixel3a_custom_rom/_payload.json",revision:"9c9d428d19f30cfd9baabe2d26881a4d"},{url:"ubuntu_lineageos_sargo/_payload.json",revision:"213044bed881e1aa402250e7a33cf3c7"},{url:"ubuntu_swap_resize/_payload.json",revision:"ab37a557c571698ad5ae2284accea7b5"},{url:"vue_stack_deployment_pm2/_payload.json",revision:"59fdddee968f4267aecc2ecda1d85279"},{url:"vue_stack_development_devcontainer/_payload.json",revision:"0ec17b5418491104aec4224b9ab68211"},{url:"what_we_know_rainbow_parent/_payload.json",revision:"beeb3f2ba715f3a30c286fb50f4dba55"},{url:"what_we_know_rainbow_therapy/_payload.json",revision:"a8d71ea10e2bc293f0e4725548ecf7db"},{url:"woeusb/_payload.json",revision:"d32d0023b4db750b25484b126b0d6581"},{url:"_nuxt/builds/latest.json",revision:"9c577a71a3fd322a477adc2052b3ddb1"},{url:"_nuxt/builds/meta/bc4485d5-63aa-4f83-9522-d0ba3f48bc7b.json",revision:null},{url:"manifest.webmanifest",revision:"0cf9f46f99906a104676ecb9402ee207"}],{}),a.cleanupOutdatedCaches(),a.registerRoute(new a.NavigationRoute(a.createHandlerBoundToURL("/blog/")))}));
