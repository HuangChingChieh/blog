if(!self.define){let a,e={};const o=(o,d)=>(o=new URL(o+".js",d).href,e[o]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=o,a.onload=e,document.head.appendChild(a)}else a=o,importScripts(o),e()})).then((()=>{let a=e[o];if(!a)throw new Error(`Module ${o} didn’t register its module`);return a})));self.define=(d,n)=>{const r=a||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let _={};const i=a=>o(a,r),s={module:{uri:r},exports:_,require:i};e[r]=Promise.all(d.map((a=>s[a]||i(a)))).then((a=>(n(...a),_)))}}define(["./workbox-5ffe50d4"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"_payload.json",revision:"573a378b8d69c705b9a9c265198b782e"},{url:"buy_me_a_tea/_payload.json",revision:"bfffaa3e884d966d73addff671b76eea"},{url:"canned_fish_dha_epa/_payload.json",revision:"435814998d03772ec6c4db5a076b8e99"},{url:"category/_payload.json",revision:"b39a56d4b7444748245c25b8656072e4"},{url:"category/all/1/_payload.json",revision:"4b44852da9ecceca12a857524dcead1c"},{url:"category/all/2/_payload.json",revision:"83f66955c6516c71d582ca85349034f2"},{url:"category/all/3/_payload.json",revision:"bcc4070e5d720faeacfd8c5d510f011e"},{url:"category/all/4/_payload.json",revision:"3e747c09cbe3afadc0e0ef3765d08727"},{url:"category/all/5/_payload.json",revision:"31752b35b1034866af41c5ac183e62a1"},{url:"category/frontend/1/_payload.json",revision:"4cc8df2073a87ee23e9d4e994346aa50"},{url:"category/frontend/2/_payload.json",revision:"50d71c2792bd1f4b8ce356dc78e89210"},{url:"category/life/1/_payload.json",revision:"51da2aee199d34c01d3d0323d321c3c7"},{url:"category/life/2/_payload.json",revision:"3166fb4fc339d833dc13ae39f3d81238"},{url:"category/linux/1/_payload.json",revision:"191ac7ed20c83a7305ae1b921fafb155"},{url:"category/linux/2/_payload.json",revision:"7e6a24a0596ddf16c19fb8055f2fbe92"},{url:"chrome_os_flex_asus_e203na/_payload.json",revision:"cf1b9f325c8bf340833bf4031f2128ad"},{url:"collections/_payload.json",revision:"3720a6727dd44d8428cbc836ed3dcd29"},{url:"compare_blog/_payload.json",revision:"d25bc2f42a08e35ef3ff2c5010efa8a5"},{url:"crypto_after_ftx/_payload.json",revision:"8996b06712bd087a6022c31e2e55600d"},{url:"crypto_liquidity_mining_v2/_payload.json",revision:"3242bac03b39abd740ab91e34996f250"},{url:"crypto_liquidity_mining_v3/_payload.json",revision:"9e00bd084bb09091a36a1efc1ea712ef"},{url:"fedora_disable_turbo_boost/_payload.json",revision:"fbb8509b6363eab47fdc0d02dc60cf88"},{url:"fedora_docker_startup/_payload.json",revision:"da829be1b2f22c11c14228adc39c4b77"},{url:"fedora_lineageos_sargo/_payload.json",revision:"361b2f80e8d1f207055b8a87d9efe1ce"},{url:"fedora_megasync/_payload.json",revision:"0d6f9a5b9d6227e8adce4a4ddf5bba13"},{url:"fedora_startup/_payload.json",revision:"6364efd540f987445e39e866b81d7ad7"},{url:"fedora_unrar/_payload.json",revision:"c270493b5cdc0bd5d6a1690130163052"},{url:"fedora_vscode_devcontainer_podman/_payload.json",revision:"c355ec625ed19610f532f0506d45012c"},{url:"fedora_youtube_download/_payload.json",revision:"72696fa6890c264b8f99ac69b2e52b66"},{url:"fedora_zram_resize/_payload.json",revision:"5efd1a13158992cb60b3171386f1d7d0"},{url:"free_diving_seeing_friend_black_out_first_time/_payload.json",revision:"1f2ceae8a5dbf3191830eb824b0a9a9c"},{url:"linux_ten_years_experience/_payload.json",revision:"6948e1d6675c8ec32ee78a020faef792"},{url:"macbook_air_2013_fedora/_payload.json",revision:"f5bc13ef935c4289e1caa611166005b2"},{url:"mark_forster/_payload.json",revision:"6f171684f07b7ddb3f497972b7fb3717"},{url:"mobile_chrome_sticky_bottom/_payload.json",revision:"f435c119a9a77771f5bd69e21e813a7b"},{url:"nuxt2_bootstrapvue_treeshaking/_payload.json",revision:"8ee2f79b1d8e23e3dea5a1aab10ea10c"},{url:"nuxt2_content_code_block_copy_paste/_payload.json",revision:"0baf7e60c589f2b4ef16fff3f0c00b45"},{url:"nuxt2_content_git/_payload.json",revision:"1b75340b2e943979cbadc2a28cd546d7"},{url:"nuxt2_dynamic_routes_sitemap/_payload.json",revision:"fed47277842defc4e8f38570cfe31828"},{url:"nuxt2_to_nuxt3_blog_0_intro/_payload.json",revision:"b1d88746ebd36d050f236dad352f9e90"},{url:"nuxt2_to_nuxt3_blog_1_ui/_payload.json",revision:"8f133cc3d1198a75191b2eed98345262"},{url:"nuxt2_to_nuxt3_blog_2_settings/_payload.json",revision:"aeb544a2c8f5a75e1b97c538953693f1"},{url:"nuxt2_to_nuxt3_blog_3_modules_content/_payload.json",revision:"28b849632a8298f483d8a486714ce10f"},{url:"nuxt2_to_nuxt3_blog_4_modules_pwa/_payload.json",revision:"eb70a036b336f6bb3358b82842878135"},{url:"nuxt2_to_nuxt3_blog_5_modules_sitemap/_payload.json",revision:"d96da630c4e2e0444bfee0c354507494"},{url:"nuxt2_to_nuxt3_blog_6_modules_pinia/_payload.json",revision:"59c4242e8356a46963dbf018e3b44534"},{url:"nuxt3_vite_pwa/_payload.json",revision:"3c2df50f6ce2d486549b18c154fb98dd"},{url:"okinawa_first_day_2023/_payload.json",revision:"47ee550347ee28edde6943bfce2058a6"},{url:"okinawa_foods_2023/_payload.json",revision:"1ccde6c6569b27f635901859159f717f"},{url:"okinawa_fourth_day_2023/_payload.json",revision:"5852512066553c0b5e5de48222c3940a"},{url:"okinawa_hotel_2023/_payload.json",revision:"74a4787aa06c8f45d6cd1124966230bb"},{url:"okinawa_one_day_tour_bus_2023_south/_payload.json",revision:"1f74c32aa4a6cbd487b7ada07c4ecb7a"},{url:"okinawa_one_day_tour_bus_2023/_payload.json",revision:"4277d3f75593a3c37dfd2d0d1f643106"},{url:"online_survey_money/_payload.json",revision:"cf8b73b699d8defd04521330d3f4e352"},{url:"pixel3a_custom_rom/_payload.json",revision:"cc9f077f3e02a567a6ae38bda0a5bc1e"},{url:"test/_payload.json",revision:"00178a52f271a9dade7a2c872f95e768"},{url:"ubuntu_lineageos_sargo/_payload.json",revision:"2e4153fdbdd7560d8bfda37407540e2d"},{url:"ubuntu_swap_resize/_payload.json",revision:"2076311a1b1430e6cc73ab1182823ce6"},{url:"vue_stack_deployment_pm2/_payload.json",revision:"6b15cb260b79c0942c485afe2f98d5e5"},{url:"vue_stack_development_devcontainer/_payload.json",revision:"60d122f3e4ac4ed2e13d3fb24a93613f"},{url:"what_we_know_rainbow_parent/_payload.json",revision:"0152753b044d86f59ad74eb8b2a20db5"},{url:"what_we_know_rainbow_therapy/_payload.json",revision:"ca706b8692420efe00570fb71c0aac96"},{url:"woeusb/_payload.json",revision:"82a829a8bd577703fffe0bc8c007b1a9"},{url:"_nuxt/builds/latest.json",revision:"de427bb345837d6c91325e207eaaee97"},{url:"_nuxt/builds/meta/337bc59b-8c95-4aba-8b94-aa80ce0f8b7b.json",revision:null},{url:"manifest.webmanifest",revision:"0cf9f46f99906a104676ecb9402ee207"}],{}),a.cleanupOutdatedCaches(),a.registerRoute(new a.NavigationRoute(a.createHandlerBoundToURL("/blog/")))}));
