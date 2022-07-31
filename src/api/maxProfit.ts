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

    let response
    try {
        response = await fetch(url, { mode: 'no-cors'})
        if (response.ok) {
            const bestProfit = await response.json() as MaxProfitOutput
            return bestProfit
        }
    } catch (err) {
        throw new Error('ERRRRROR '+err)
    }
    console.log('----response.statusText', response.statusText, response.status)
    let error
    if (response) {
        try {
            error = await response.json()
        } catch(err) {
            throw new Error('ERRRRROR2 '+err)
        }
    }
    if (!error) {
        error = 'unknown error'
    }
    throw new Error(error)
}
