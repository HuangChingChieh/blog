import {
  containerMaxWidthsKeys,
  containerMaxWidthsValues,
  gridBreakpointsKeys,
  gridBreakpointsValues,
  mobileBreakpoint,
} from '~/assets/css/export.module.scss'
import { getScssMap, getScssArray } from '~/utils/scssMap'

const gridBreakpoints = getScssMap({
  keysStr: gridBreakpointsKeys,
  valuesStr: gridBreakpointsValues,
})

const containerMaxWidths = getScssMap({
  keysStr: containerMaxWidthsKeys,
  valuesStr: containerMaxWidthsValues,
})

const mobileBreakpointIndex = getScssArray(gridBreakpointsKeys).findIndex(
  (breakpoint) => breakpoint === mobileBreakpoint
)

/**
 * 撈取BootStrap斷點以及自行設定的container寬度斷點，以產生對應的image的sizes，getImageWidth會傳入有參數的物件。須根據參數回傳自行產生對應斷點下的圖片寬度（例如：`100w`），否則會以斷點下的container寬度作為圖片寬度。
 */
export default (getImageWidth = () => {}) => {
  const sizes = []

  const containerMaxWidthsKeysArray = getScssArray(containerMaxWidthsKeys)
  if (Array.isArray(containerMaxWidthsKeysArray)) {
    containerMaxWidthsKeysArray
      .slice()
      .reverse()
      .forEach((breakpoint, i) => {
        const containerMaxWidth = containerMaxWidths[breakpoint]
        const isMobile = i >= mobileBreakpointIndex

        const imgWidth =
          getImageWidth({
            containerMaxWidth,
            isMobile,
          }) || containerMaxWidth
        sizes.push({
          mediaMinWidth: gridBreakpoints[breakpoint],
          imgWidth,
        })
      })
  }

  return sizes
}
