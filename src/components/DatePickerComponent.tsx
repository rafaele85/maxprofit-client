import {convertDateToUnixTime, convertUnixTimeToDate} from "../util/convertDate";
import styled from "styled-components";
import DateTimePicker from 'react-datetime-picker';

type Props = {
    value: number | undefined
    label: string
    onChange: (value: number | undefined) => void
}
export const DatePickerComponent = (props: Props) => {
    const {value, onChange, label} = props

    const handleChange = (value: Date | null) => {
        let unixValue: number | undefined = undefined
        if (value) {
            unixValue = convertDateToUnixTime(value)
        }
        onChange(unixValue)
    }

    const date = convertUnixTimeToDate(value)

    return (
        <Root>
            <Label>{label}</Label>
            <DateTimePicker onChange={handleChange} value={date}  />
        </Root>
    )
}


const Root = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

const Label = styled.span`
  padding-right: 5px;
`