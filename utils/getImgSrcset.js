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
 * 根據ImageShack提供的可用尺寸列表產生一組srcset
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
