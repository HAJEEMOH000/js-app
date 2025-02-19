function searchForProduct(str) {
    if (str.trim().length === 0) throw new Error ('Product name is not provided')
    console.log(`${str} is searched!`)
}