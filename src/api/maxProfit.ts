import axios from "axios";
import {MaxProfitInput, MaxProfitOutput} from "../types/maxProfit";

export const maxProfit = async (params: MaxProfitInput) => {
    const apiUrl = process.env.REACT_APP_API_URL

    if (!apiUrl) {
        throw new Error('API URL is not specified in env variables')
    }
    const paramsArray: string[] = []
    for(const [key, value] of Object.entries(params)) {
        if (value !== null && value !== undefined) {
            paramsArray.push(`${key}=${value}`)
        }
    }
    const url = `${apiUrl}/maxprofit?${paramsArray.join('&')}`

    let error
    let response
    try {
        response = await axios.get(url)
        if (response.status === 200) {
            const bestProfit = await response.data as MaxProfitOutput
            return bestProfit
        } else {
            const text = await response.data
            console.log('---text=', text, response.statusText )
        }
    } catch (err) {
        console.log(response)
        console.dir(response)
        console.dir(err)
        console.dir((err as any).response)
        if ((err as any)?.response?.data) {
            error = (err as any).response.data
        } else {
            console.error(err)
            error = '' + err
        }
    }
    if (!error) {
        error = 'Unknown error'
    }
    throw new Error(error)
}
