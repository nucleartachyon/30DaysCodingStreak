const balancedbrackets = (str) => {
    const stack = [];
    let openers = ["{", "[", "("];
    let closers = ["}", "]", ")"];

    const dict = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (openers.includes(char)) {
            stack.push(char);
        }
        else if (closers.includes(char)) {
            if (!stack.length) {
                return false;
            }
            else if (dict[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(balancedbrackets('Lorem[ipsum{dolor(sit)amet}consectetur]adipisicing'))