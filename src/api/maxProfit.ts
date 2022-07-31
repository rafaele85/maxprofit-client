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

    const response = await fetch(url)
    if (response.ok) {
        const bestProfit = await response.json() as MaxProfitOutput
        return bestProfit
    }
    const error = await response.text()
    throw new Error(error)
}