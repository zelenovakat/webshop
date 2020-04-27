export const updateObjectInArray = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item
    }
    return {
      ...item,
      ...action.item,
    }
  })
}
export const deleteObjectInArray = (array, id) => {
  return array.filter((item) => item.id !== id)
}
export const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object
