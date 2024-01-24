import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

// 把設定值的icon padding都設為0
preset.apple.padding = 0;
preset.maskable.padding = 0;
preset.transparent.padding = 0;

export default defineConfig({
  preset,
});
