import React from "react"
import useLocalStorage from "./components/UseLocalStorage"
import styled from "styled-components"
import { updateObjectInArray, deleteObjectInArray } from "../src/components/Helper"

const Cart = () => {
  const [cart, setCart] = useLocalStorage("cart", [])

  const handleChangeQuantityPlus = (oneProduct, i) => {
    const updatedProduct = { ...oneProduct, quantity: oneProduct.quantity + 1 }

    const action = {
      index: i,
      item: updatedProduct,
    }
    const updatedCart = updateObjectInArray(cart, action)
    setCart(updatedCart)
  }

  const deleteOneProduct = (cart, oneProduct) => {
    console.log("!!!", cart)
    const updatedCart = deleteObjectInArray(cart, oneProduct.id)
    setCart(updatedCart)
  }

  const handleChangeQuantityMinus = (oneProduct, i) => {
    if (oneProduct.quantity === 1) {
      deleteOneProduct(cart, oneProduct)
    } else {
      const updatedProduct = { ...oneProduct, quantity: oneProduct.quantity - 1 }
      const action = {
        index: i,
        item: updatedProduct,
      }
      const сhangeCart = updateObjectInArray(cart, action)
      setCart(сhangeCart)
    }
  }

  const mappedCart = cart.map((oneProduct, i) => {
    console.log(oneProduct)
    return (
      <MaineWrapper key={i}>
        <img src={oneProduct.cover} alt="" />

        <Title>{oneProduct.title}</Title>
        <p>{oneProduct.price}</p>

        <ButtonWrapper>
          <Button onClick={() => handleChangeQuantityPlus(oneProduct, i)}>+</Button>
          <span>{oneProduct.quantity}</span>
          <Button onClick={() => handleChangeQuantityMinus(oneProduct, i)}>-</Button>
        </ButtonWrapper>
      </MaineWrapper>
    )
  })
  return (
    <DivWrapper>
      <MapWrapper>
        <h1>Cart</h1>
        {mappedCart}
      </MapWrapper>
      <h2>Sub Total</h2>
      <CheckOutWrapper>
        <button>
          <p>Check out</p>
        </button>
      </CheckOutWrapper>
    </DivWrapper>
  )
}
export default Cart
const DivWrapper = styled.div`
  h2 {
    display: flex;
    justify-content: center;
  }
`

const CheckOutWrapper = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: center;
  margin: 50px 30px;
  button {
    width: 500px;
  }

  p {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
  }
`

const MapWrapper = styled.div`
  position: relative;
  h1 {
    justify-content: center;
    display: flex;
  }
`
const ButtonWrapper = styled.div`
  align-self: center;
  span {
    margin: 10px;
  }
`
const Button = styled.button`
  border: 2px solid black;
`
const Title = styled.p`
  font-weight: bold;
`
const MaineWrapper = styled.div`
  display: flex;
  flex-direction: inherit;
  margin: 0px;
  display: flex;

  p {
    text-align: center;
    margin: 5px;
    align-self: center;
  }
  img {
    width: 100px;
    height: 100px;
    align-self: center;
  }
`
