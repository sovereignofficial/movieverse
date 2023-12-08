
const isNumber = (text:string)=>{
    const isNum = !isNaN(parseInt(text));
    return isNum
}

export {isNumber}