import { screens } from 'tailwindcss/defaultTheme'

// 來自於ImageShack的可用尺寸
const sources = [
  {
    height: 75,
    width: 100,
  },
  {
    height: 100,
    width: 150,
  },
  {
    height: 200,
    width: 280,
  },
  {
    height: 240,
    width: 320,
  },
  {
    height: 480,
    width: 640,
  },
  {
    height: 600,
    width: 800,
  },
  {
    height: 768,
    width: 1024,
  },
  {
    height: 1024,
    width: 1280,
  },
  {
    height: 1200,
    width: 1600,
  },
]

/**
 * 撈取BootStrap斷點以及自行設定的container寬度斷點，以產生對應的image的sizes，getImageWidth會傳入有參數的物件。須根據參數回傳自行產生對應斷點下的圖片寬度（例如：`100w`），否則會以斷點下的container寬度作為圖片寬度。
 */
export default (img = '', imageServer = '') =>
  img && imageServer
    ? sources
        .map(
          ({ width, height }) =>
            `${imageServer}${width}x${height}q70/${img} ${width}w`,
        )
        .join(',')
    : ''
