import {useState} from "react";
import styled from "styled-components";
import {DatePickerComponent} from "./DatePickerComponent";

export const MaxProfitForm = () => {
    const [start, setStart] = useState<number>()
    const [end, setEnd] = useState<number>()

    const handleChangeStart = (value: number | undefined) => {
        setStart(value)
    }

    const handleChangeEnd = (value: number | undefined) => {
        setEnd(value)
    }

    const handleSubmit = () => {

    }

    return (
        <Root>
            <Title>Calculate Max Profit</Title>
            <Description>Select time range to calculate max profit</Description>
            <Dates>
                <DatePickerComponent onChange={handleChangeStart} value={start} label={'Start'} />
                <DatePickerComponent onChange={handleChangeEnd} value={end}  label={'End'} />
            </Dates>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </Root>
    )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px;
`

const Title = styled.h1`
  padding: 0;
  margin: 0;
  padding-bottom: 20px;
`

const Description = styled.h4`
  padding: 0;
  margin: 0;
  padding-bottom: 50px;
`

const Dates = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`

const SubmitButton = styled.button`
  width: 200px;
  height: 6rem;
  cursor: pointer;
  outline: 0;
  border: 1px solid black;
  border-radius: 4px;
`