export const getScssMap = ({ keysStr = '', valuesStr = '' }) => {
  const map = {}

  const keys = getScssArray(keysStr)
  const values = getScssArray(valuesStr)
  if (keys.length > 0 && values.length > 0 && keys.length === values.length) {
    keys.forEach((key, i) => {
      map[key] = values[i]
    })
  }

  return map
}

export const getScssArray = (str = '') =>
  str.split(',').map((key) => key.trim())
