

import properties from "./index.json"

export const getAllProperties = () => {

  return {
    data: properties,
    propertyMap: properties.reduce((a, c, i) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {})
  }
}
