import {MaxProfitOutput} from "../types/maxProfit";
import styled from "styled-components";
import {convertUnixTimeToDateString} from "../util/convertDate";

type Props = { bestProfit: MaxProfitOutput }

export const BestProfit = (props: Props) => {
    const {buyTime, sellTime, buyPrice, sellPrice, profit} = props.bestProfit
    const buyDate = convertUnixTimeToDateString(buyTime)
    const sellDate = convertUnixTimeToDateString(sellTime)
    return (
        <Root>
            <Dates>
                <Row>
                    <Container>
                        <Label>Buy at: </Label>
                        <Value>{buyDate}</Value>
                    </Container>
                    <Container>
                        <Label>Buy price: </Label>
                        <Value>{buyPrice}</Value>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Label>Sell at: </Label>
                        <Value>{sellDate}</Value>
                    </Container>
                    <Container>
                        <Label>Sell price: </Label>
                        <Value>{sellPrice}</Value>
                    </Container>
                </Row>
            </Dates>
            <Container>
                <Label>Profit:</Label>
                <Value>{profit}</Value>
            </Container>
        </Root>
    )
}

const Root = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px;
`
const Dates = styled.div`
  display: flex;
  flex-direction: row;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`
const Label = styled.span`
  padding-right: 10px;    
`
const Value = styled.span`
  font-weight: bold;    
`




