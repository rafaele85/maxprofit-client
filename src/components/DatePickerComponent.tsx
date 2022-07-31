import {convertDateToUnixTime, convertUnixTimeToDate} from "../util/convertDate";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import styled from "styled-components";

type Props = {
    value: number | undefined
    label: string
    onChange: (value: number | undefined) => void
}
export const DatePickerComponent = (props: Props) => {
    const {value, onChange, label} = props

    const handleChange = (value: Date | null) => {
        console.log('---value=', value, typeof value)
        let unixValue: number | undefined = undefined
        if (value) {
            unixValue = convertDateToUnixTime(value)
        }
        onChange(unixValue)
    }

    const date = convertUnixTimeToDate(value)
    console.log('---date=', date)

    return (
        <Root>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label={label}
                    value={date}
                    onChange={handleChange}
                />
            </LocalizationProvider>
        </Root>
    )
}


const Root = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`