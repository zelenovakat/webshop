import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import OverviewCreditCard from "./OverviewCreditCard"
import { isEmptyObject } from "./components/Helper"

const CreditCard = () => {
  const { register, handleSubmit, errors } = useForm()
  const [dataCart, setData] = useState({})
  console.log("data", dataCart)
  const onSubmit = (dataCart) => {
    setData(dataCart)
  }
  const PayInformation = [
    { name: "name", label: "Contact name" },
    { name: "numberCreditCard", label: "Number credit card" },
    { name: "validityM", label: "Validity  M/Y" },
    { name: "cvvCvc", label: "CVV/CVC" },
    { name: "town", label: "City" },
    { name: "street", label: "Street" },
    { name: "address", label: "Address" },
    { name: "number", label: "Contact number" },
  ]
  const mappedInformation = PayInformation.map((item, i) => {
    return (
      <MainDiv key={i}>
        <StyleLabel>{item.label}</StyleLabel>
        <FormInput
          key={i}
          autoComplete="off"
          type="text"
          autocomplete="nope"
          name={item.name}
          ref={register({ required: true })}
        />
        {errors.name && <span>Please enter your data</span>}
      </MainDiv>
    )
  })
  return (
    <>
      {isEmptyObject(dataCart) && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledDiv>{mappedInformation}</StyledDiv>
          <Button type="submit">Submit</Button>
        </Form>
      )}

      {dataCart && dataCart.numberCreditCard && <OverviewCreditCard dataCart={dataCart} />}
    </>
  )
}

export default CreditCard

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const StyleLabel = styled.div`
  margin-bottom: 5px;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const FormInput = styled.input`
  color: #000000;
  text-transform: uppercase;
  background: none;
  border: 3px solid #808080;
  font-size: 10px;
  width: 200px;
  padding: 10px;
  border-radius: 10px;
`
const Button = styled.button`
  align-self: center;
  color: #000000;
  background: none;
  border: 3px solid #000000;
  font-size: 10px;
  width: 80px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
`
const MainDiv = styled.div`
  span {
    display: flex;
    margin-bottom: 10px;
    color: #ff0000;
  }
`
