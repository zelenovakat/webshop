import React, { useState } from "react"
import useLocalStorage from "./components/UseLocalStorage"
import styled from "styled-components"
import Cash from "./Cash"
import CreditCard from "./CreditCard"

const CheckoutPage = () => {
  const [cart] = useLocalStorage("cart", [])

  console.log(cart)
  const mappedCart = cart.map((oneProduct) => {
    return (
      <InfoProduct key={oneProduct.id}>
        <img src={oneProduct.cover} alt="" />
        <Title>{oneProduct.title}</Title>
        <p>{oneProduct.price}</p>
        <p>{oneProduct.currency}</p>
        <p>{oneProduct.quantity}</p>
      </InfoProduct>
    )
  })
  const [onClickedCash, setOnClickedCash] = useState(false)
  const [onClickedCredit, setOnClickedCredit] = useState(false)

  const handleInputCash = () => {
    setOnClickedCash(!onClickedCash)
  }
  const handleInputCredit = () => {
    setOnClickedCredit(!onClickedCredit)
  }

  return (
    <MainDiv>
      <h2>1. Your Items </h2>
      <MappedCart>{mappedCart}</MappedCart>
      <h2>2.Payment</h2>
      <ButtonWrapper>
        <Button onClick={handleInputCash}>cash payment</Button>
        {onClickedCash && <Cash />}
        <Button onClick={handleInputCredit}>credit card</Button>
        {onClickedCredit && <CreditCard />}
      </ButtonWrapper>
    </MainDiv>
  )
}

export default CheckoutPage
const Button = styled.button`
  background-color: rgb(244, 237, 221);
  font-weight: bold;
  margin-bottom: 10px;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MainDiv = styled.div`
  h2 {
    text-align: center;
    background-color: rgb(244, 237, 221);
  }
`

const MappedCart = styled.div`
  border: 1px solid #808080;
  display: block;
  margin: 10px;
  p {
    margin-left: 10px;
  }
`
const Title = styled.p`
  font-weight: bold;
  text-align: center;
`
const InfoProduct = styled.div`
  display: flex;

  img {
    height: 40px;
  }
`
