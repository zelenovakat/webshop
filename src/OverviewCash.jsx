import React from "react"
import styled from "styled-components"

const OverviewCash = (props) => {
  console.log(props)
  const { dataCash } = props

  return (
    <MainDiv>
      <DivRow>
        <Title>Contact Name:</Title>
        <div>{dataCash.name}</div>
      </DivRow>
      <DivRow>
        <Title>Town:</Title>
        <div>{dataCash.town}</div>
      </DivRow>
      <DivRow>
        <Title>Street:</Title>
        <div>{dataCash.street}</div>
      </DivRow>
      <DivRow>
        <Title>Address:</Title>
        <div>{dataCash.address}</div>
      </DivRow>
      <DivRow>
        <Title>Contact number:</Title>
        <div>{dataCash.number}</div>
      </DivRow>
      <button>order</button>
    </MainDiv>
  )
}
export default OverviewCash

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
