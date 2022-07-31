export const convertDateToUnixTime = (date: Date | undefined) => {
    if (date) {
        return parseInt((date.getTime() / 1000).toFixed(0))
    }
    return undefined
}

export const convertUnixTimeToDate = (time: number | undefined) => {
    if (time) {
        return new Date(time * 1000);
    }
    return undefined
}
