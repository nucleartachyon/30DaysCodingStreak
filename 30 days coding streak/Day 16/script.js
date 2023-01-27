repeat = function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
for(let i=1;i<=10;i++){
    console.log(repeat('aryan',i));
}