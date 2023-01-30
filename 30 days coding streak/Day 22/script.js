const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed;
}
const sentence = ['dog', 'lazy', 'a', 'over', 'jumps','fox','brown','quick','the'];
console.log(reverseArray(sentence)) 