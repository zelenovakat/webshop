import React, { useState } from "react"
import styled from "styled-components"
import happyPlugsImg from "../src/Logo/happyPlugs.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import "./App.css"
import { products } from "./Products"
import { Link } from "react-router-dom"

const ProductGrid = () => {
  const [plugs] = useState(products)
  const mappedPlugs = plugs.map(headPhones => {
    return (
      <ProductInfo key={headPhones.id}>
        <img src={headPhones.cover} alt="" />
        <p>{headPhones.title}</p>
        <p>{headPhones.price}</p>
        <ButtonAdd>ADD TO CARD</ButtonAdd>
      </ProductInfo>
    )
  })
  return (
    <>
      <MainDiv>
        <HeaderLogo className="App-header">
          <img src={happyPlugsImg} className="imgLogo" alt="" />
        </HeaderLogo>
        <Button>
          <Link to="/CheckoutPage">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </Button>
        <IconGreenCircle>
          <FontAwesomeIcon className="svg" icon={faCircle} />
          <p>1</p>
        </IconGreenCircle>
      </MainDiv>
      <ProductDiv>{mappedPlugs}</ProductDiv>
    </>
  )
}

export default ProductGrid

const IconGreenCircle = styled.div`
  p {
    font-size: 20px;
    color: #000000;
    position: absolute;
    top: -20px;
    right: 8px;
  }
`

const ButtonAdd = styled.button`
  border: 1px solid;
  width: 110px;
  height: 30px;
  align-self: center;
`
const ProductInfo = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  width: 150px;
  p {
    text-align: center;
  }

  img {
    width: 200px;
    height: 200px;
    align-self: center;
  }
`

const ProductDiv = styled.div`
  display: flex;
  flex-flow: wrap;
`

const HeaderLogo = styled.div`
  display: flex;
  margin-right: 50px;
`
const MainDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  position: relative;
`
const Button = styled.button`
  position: relative;
  display: flex;
  font-size: 50px;
  color: #e9967a;
`
