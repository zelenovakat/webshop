import React from "react"
import useLocalStorage from "./components/UseLocalStorage"
import styled from "styled-components"
import { updateObjectInArray, deleteObjectInArray } from "../src/components/Helper"
import { Link } from "react-router-dom"

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
    return (
      <MainWrapper key={i}>
        <img src={oneProduct.cover} alt="" />
        <Title>{oneProduct.title}</Title>
        <PriceAndCurrency>
          <p>{oneProduct.price}</p>
          <p>{oneProduct.currency}</p>
        </PriceAndCurrency>
        <ButtonWrapper>
          <Button onClick={() => handleChangeQuantityPlus(oneProduct, i)}>+</Button>
          <span>{oneProduct.quantity}</span>
          <Button onClick={() => handleChangeQuantityMinus(oneProduct, i)}>-</Button>
        </ButtonWrapper>
      </MainWrapper>
    )
  })
  let subTotal = 0
  cart.map((subTotalInCart) => {
    console.log(subTotalInCart)
    return (subTotal = subTotal + subTotalInCart.quantity * subTotalInCart.price)
  })
  console.log(subTotal)

  return (
    <DivWrapper>
      <MapWrapper>
        <h1>Cart</h1>
        {mappedCart}
      </MapWrapper>
      <PayInfo>
        <h2>Sub Total: {subTotal} kr</h2>
        <CheckOutWrapper>
          <button>
            <Link to="/checkoutPage">
              <p>Check out</p>
            </Link>
          </button>
        </CheckOutWrapper>
      </PayInfo>
    </DivWrapper>
  )
}
export default Cart
const PayInfo = styled.div`
  background-color: rgb(236, 235, 233);
`
const PriceAndCurrency = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  align-self: center;
`
const DivWrapper = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    margin: 0;
  }
`
const CheckOutWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 30px;
  button {
    width: 500px;
    background-color: #000000;
    border-color: #000000;
    border-width: 1px;
  }

  p {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
`
const MapWrapper = styled.div`
  position: relative;
  background-color: rgb(250, 249, 248);
  h1 {
    justify-content: center;
    display: flex;
  }
`
const ButtonWrapper = styled.div`
  align-self: center;
  margin-right: 5px;
  span {
    margin: 10px;
  }
`
const Button = styled.button`
  border: 2px solid black;
`
const Title = styled.p`
  font-weight: bold;
  flex-grow: 1;
  flex-basis: 0;
  align-self: center;
`
const MainWrapper = styled.div`
  display: flex;
  flex-direction: inherit;
  margin: 0px;
  display: flex;
  img {
    width: 100px;
    height: 100px;
    align-self: center;
    border-radius: 0;
    margin-bottom: 10px;
  }
`
