function uppercase(str){
  var Array1 = str.split(' ');
  var NewArray1 = [];
    
  for(var x = 0; x < Array1.length; x++){
      NewArray1.push(Array1[x].charAt(0).toUpperCase()+Array1[x].slice(1));
  }
  return NewArray1.join(' ');
}
console.log(uppercase("Lorem ipsum dolor sit, amet consectetur adipisicing elit"));