const ratioPrice = (num1, num2) => {
    let division = num1/num2
    if(String(Math.floor(division)).length > 3) return division.toFixed(1)
    return division.toFixed(3)
}

export default ratioPrice