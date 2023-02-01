const twoSum = (array, goal) => {
    let mapOfNumbers = {};
    let twoIndexes = [];
    for (let i = 0; i < array.length; i++) {
        mapOfNumbers[array[i]] = i;
    }
    for (let i = 0; i < array.length; i++) {
        let target = goal - array[i];
        if (mapOfNumbers[target] !== null && mapOfNumbers[target] !== i && twoIndexes.length<2) {
            twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[target]);
        }
    }
    return twoIndexes;
};
let a = [1,3,10,11,14];

let res = twoSum(a,13)
console.log(res);
console.log(a.length);