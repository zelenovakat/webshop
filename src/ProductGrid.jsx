import React from "react"
import styled from "styled-components"
import logohpImg from "../src/images/logohp.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import "./App.css"
import { products } from "./Products"
import { Link } from "react-router-dom"
import useLocalStorage from "./components/UseLocalStorage"
import { updateObjectInArray } from "../src/components/Helper"

const ProductGrid = () => {
  const defaultCart = []
  const [cart, setCart] = useLocalStorage("cart", defaultCart)

  const handleAddToCart = (headPhones, i) => {
    // проверить есть ли продукт в корзине
    const productInCart = cart.find((item) => headPhones.id === item.id)

    // если продукта нет то добавит(то что есть сейчас)
    if (productInCart) {
      const updatedProduct = { ...productInCart, quantity: productInCart.quantity + 1 }
      const action = {
        index: i,
        item: updatedProduct,
      }
      const updatedCart = updateObjectInArray(cart, action)
      setCart(updatedCart)
    }
    //если продукт есть то добавлять кол-во
    else {
      const updatedCart = [...cart, { ...headPhones, quantity: 1 }]
      setCart(updatedCart)
    }
  }
  // let totalQuantity = 0

  const mappedProducts = products.map((headPhones, i) => {
    console.log(i, cart)
    return (
      <ProductInfo key={i}>
        <img src={headPhones.cover} alt="" />
        <Title>{headPhones.title}</Title>
        <PriceAndCurrency>
          <p>{headPhones.price}</p>
          <p>{headPhones.currency}</p>
        </PriceAndCurrency>
        <ButtonAdd onClick={() => handleAddToCart(headPhones, i)}>ADD TO CARD</ButtonAdd>
      </ProductInfo>
    )
  })

  let totalQuantity = 0
  cart.map((qtyInCart) => {
    return (totalQuantity = totalQuantity + qtyInCart.quantity)
  })
  console.log(totalQuantity)
  return (
    <>
      <MainDiv>
        <HeaderLogo className="App-header">
          <img src={logohpImg} className="imgLogo" alt="" />
        </HeaderLogo>
        <Button>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </Button>
        <IconGreenCircle>
          <FontAwesomeIcon className="svg" icon={faCircle} />
          <p>{totalQuantity}</p>
        </IconGreenCircle>
      </MainDiv>
      <ProductDiv>{mappedProducts}</ProductDiv>
    </>
  )
}

export default ProductGrid

const PriceAndCurrency = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin-right: 3px;
  }
`

const Title = styled.p`
  font-weight: bold;
  text-align: center;
`

const IconGreenCircle = styled.div`
  svg {
    position: absolute;
    top: 6px;
    right: 7px;
    font-size: 27px;
    color: #9e9e9eb3;
    opacity: 0.8;
  }
  p {
    font-size: 14px;
    color: #000000;
    position: absolute;
    top: -4px;
    right: 14px;
  }
`

const ButtonAdd = styled.button`
  border: 1px solid;
  width: 110px;
  height: 30px;
  align-self: center;
  font-weight: bold;
  background: #e4e4e4;
`
const ProductInfo = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  width: 150px;

  img {
    width: 170px;
    height: 170px;
    align-self: center;
  }
`

const ProductDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  margin-top: 40px;
`

const HeaderLogo = styled.div`
  display: flex;
  margin-right: 50px;

  img {
    width: 148px;
    height: 55px;
    margin-top: 10px;
  }
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
  background: transparent;
  border: 0;
  margin-top: 5px;
  margin-right: 5px;
  svg {
    color: rgba(209, 198, 171, 1);
  }
`
