export const updateObjectInArray = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item,
    }
  })
}

export const deleteObjectInArray = (array, id) => {
  return array.filter(item => item.id !== id)
}
// array - your whole array
// action - object with item to be updated and the index of this. like here:
// const action = {
//   index: i,
//   item: updatedProduct,
// }
// updateObjectInArray(cart, action)
