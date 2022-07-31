import {MaxProfitInput, MaxProfitOutput} from "../types/maxProfit";
import {parseVercelResponse} from "../util/parseVercelResponse";

export const maxProfit = async (params: MaxProfitInput) => {
    const apiUrl = process.env.REACT_APP_API_URL
    const isVercel = process.env.REACT_APP_IS_VERCEL

    console.log('---isVercel=', isVercel)
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
    try {
        const response = await fetch(url,  { mode: 'no-cors'})
        if (response.ok) {
            if (isVercel) {
                const parsed = await response.text()
                const bestProfit = parseVercelResponse(parsed)
                return bestProfit
            } else {
                const bestProfit = await response.json() as MaxProfitOutput
                return bestProfit
            }
        } else {
            const text = await response.text()
            console.log('---text=', text, response.statusText )
        }
    } catch (err) {
        throw new Error('ERRRRROR '+err)
    }
    if (!error) {
        error = 'Unknown error'
    }
    throw new Error(error)
}
