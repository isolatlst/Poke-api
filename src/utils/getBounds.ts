export const getBounds = (limit: number, offset: number, count: number) => {
    let start = (offset * limit + 1)
    let end = (limit * (offset + 1))
    if (limit * (offset + 1) > count && count) {
        end = count
    }
    return {start, end}
}