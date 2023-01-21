function BTD(bstr) {
    return parseInt((bstr + '')
        .replace(/[^01]/gi, ''), 2);
}
console.log(BTD('110011'));
console.log(BTD('100'));