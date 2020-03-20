import { counter } from "@fortawesome/fontawesome-svg-core"

const mapProducts = items => {
  return items.map(({ name, completed }, i) => {
    return (
      <ProductListItem
        key={i}
        name={name}
        completed={completed}
        clickOnProduct={clickOnProduct}
        i={i}
        deleteProduct={deleteProduct}
      />
    )
  })
}

const deleteObjectInArray = (array, id) => {
  return array.filter(item => item.id !== id)
}

counter
