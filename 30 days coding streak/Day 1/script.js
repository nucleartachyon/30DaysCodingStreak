function SwapAdjDgts(n){
    if(n.toString().length%2!=0){
        return false;
    }
    var result = 0, x=1;
    while(n!=0){
        var dgt1 = n % 10, dgt2 = ((n-dgt1)/10)%10;
        result += x*(10*dgt1+dgt2);
        n = Math.floor(n/100);
        x*= 100; 
    }
    return result;
}
console.log(SwapAdjDgts(2348));
console.log(SwapAdjDgts(24589234));
console.log(SwapAdjDgts(349856));
console.log(SwapAdjDgts(798));
