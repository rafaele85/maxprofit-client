import {MaxProfitOutput} from "../types/maxProfit";

export const parseVercelResponse = (str: string): MaxProfitOutput | undefined => {
    if (!str) {
        return undefined
    }
    const arr = str.split('&')
    const res: Partial<MaxProfitOutput> = {
    }
    for (const a of arr) {
        const [key, val] = a.split('=')
        switch(key) {
            case 'buyTime':
                res.buyTime = parseInt(val)
                break
            case 'sellTime':
                res.sellTime = parseInt(val)
                break
            case 'buyPrice':
                res.buyPrice = parseFloat(val)
                break
            case 'sellPrice':
                res.sellPrice = parseFloat(val)
                break
            case 'profit':
                res.profit = parseFloat(val)
                break
        }
    }
    return {
        buyTime: res.buyTime || 0,
        sellTime: res.sellTime || 0,
        buyPrice: res.buyPrice || 0,
        sellPrice: res.sellPrice || 0,
        profit: res.profit || 0,
    }
}