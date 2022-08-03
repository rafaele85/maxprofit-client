import React, {useState} from "react";
import styled from "styled-components";
import {DatePickerComponent} from "./DatePickerComponent";
import {convertDateToUnixTime} from "../util/convertDate";
import {TextField} from "@mui/material";
import {SubmitButton} from "./SubmitButton";
import {maxProfit} from "../api/maxProfit";
import {MaxProfitOutput} from "../types/maxProfit";
import {BestProfit} from "./BestProfit";

export const MaxProfitForm = () => {
    const nowTime = convertDateToUnixTime(new Date())
    const [start, setStart] = useState<number | undefined>(nowTime)
    const [end, setEnd] = useState<number | undefined>(nowTime)
    const [priceLimit, setPriceLimit] = useState<number | undefined>()
    const [error, setError] = useState<string>('')
    const [isSubmitting, setSubmitting] = useState<boolean>(false)
    const [bestProfit, setBestProfit] = useState<MaxProfitOutput | undefined>()

    const handleChangeStart = (value: number | undefined) => {
        setStart(value)
        setError('')
    }

    const handleChangeEnd = (value: number | undefined) => {
        setEnd(value)
        setError('')
    }

    const handleChangePriceLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: number | undefined = undefined
        if (e.target.value) {
            value = parseFloat(e.target.value) ?? undefined
        }
        setPriceLimit(value)
        setError('')
    }

    const handleSubmit = async () => {
        if (!start) {
            setError('Start is required')
            return
        }
        if (!end) {
            setError('End is required')
            return
        }
        if (start >= end) {
            setError('Start should be earlier than End')
            return
        }
        setSubmitting(true)
        setBestProfit(undefined)
        try {
            const bestProfit = await maxProfit({start, end, priceLimit})
            setBestProfit(bestProfit)
        } catch (err) {
            console.error(err)
            setError('' + err)
        }
        setSubmitting(false)
    }

    let jsxError
    if (error) {
        jsxError = (
            <Error>{error}</Error>
        )
    }

    let jsxBestProfit
    if (bestProfit) {
        jsxBestProfit = (
            <BestProfit bestProfit={bestProfit} />
        )
    }

    return (
        <Root>
            <Title>Calculate Max Profit</Title>
            <Description>Select time range to calculate max profit</Description>
            <MainForm>
                <Dates>
                    <DatePickerComponent
                        onChange={handleChangeStart}
                        value={start}
                        label={'*Start:'}
                    />
                    <DatePickerComponent
                        onChange={handleChangeEnd}
                        value={end}
                        label={'*End:'}
                    />
                </Dates>
                {jsxError}
                <Container>
                    <TextField label={'Buy limit'} value={priceLimit || ''} onChange={handleChangePriceLimit} />
                </Container>
            </MainForm>
            <SubmitButton onClick={handleSubmit} disabled={isSubmitting} >Submit</SubmitButton>
            {jsxBestProfit}
        </Root>
    )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid #aaa6a6;
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

const MainForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 60px;
`

const Dates = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Error = styled.span`
  display: flex;
  padding-top: 0;
  padding-left: 100px;
  padding-bottom: 30px;
  width: 100%;
  color: red;
`

const Container = styled.div`
  z-index: 0;
`