export type MaxProfitInput = {
    start: number,
    end: number,
    priceLimit?: number,
}

export type MaxProfitOutput = {
    buyTime: number,
    buyPrice: number,
    sellTime: number,
    sellPrice: number,
    profit: number,
}