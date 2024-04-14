import scssVariables from '~/assets/css/export.module.scss'

export const gridColumns = scssVariables.gridColumns as string
export const mobileBreakpoint = scssVariables.mobileBreakpoint as string
export const containerMaxWidthsKeys =
  scssVariables.containerMaxWidthsKeys as string
export const containerMaxWidthsValues =
  scssVariables.containerMaxWidthsValues as string
export const gridBreakpointsKeys = scssVariables.gridBreakpointsKeys as string
export const gridBreakpointsValues =
  scssVariables.gridBreakpointsValues as string

export type BsVariants = 'black' | 'white' | 'gray' | 'gray-dark'
export type BsSize = 'sm' | 'md' | 'lg'
