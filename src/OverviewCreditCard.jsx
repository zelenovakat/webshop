import React from "react"
import styled from "styled-components"

const OverviewCreditCard = props => {
  console.log(props)
  const { dataCart } = props

  return (
    <MainDiv>
      <DivRow>
        <Title>Name:</Title>
        <div>{dataCart.name}</div>
      </DivRow>
      <DivRow>
        <Title>number credit card:</Title>
        <div>{dataCart.numberCreditCard}</div>
      </DivRow>
      <DivRow>
        <Title>validity:</Title>
        <div>
          {dataCart.validityM}/{dataCart.validityY}
        </div>
      </DivRow>
      <DivRow>
        <Title>CVV/CVC:</Title>
        <div>{dataCart.cvvCvc}</div>
      </DivRow>
      <DivRow>
        <Title>Town:</Title>
        <div>{dataCart.town}</div>
      </DivRow>
      <DivRow>
        <Title>Street:</Title>
        <div>{dataCart.street}</div>
      </DivRow>
      <DivRow>
        <Title>Address:</Title>
        <div>{dataCart.address}</div>
      </DivRow>
      <DivRow>
        <Title>contact number:</Title>
        <div>{dataCart.contactNumber}</div>
      </DivRow>
      <button>order</button>
    </MainDiv>
  )
}

export default OverviewCreditCard

const Title = styled.div`
  font-weight: bold;
`
const MainDiv = styled.div`
  border: 2px solid;
  margin: 10px;
  display: flex;
  flex-direction: column;

  button {
    background-color: #c0c0c0;
    border: 1px solid #000000;
    font-weight: bold;
  }
`
const DivRow = styled.div`
  display: flex;
`
