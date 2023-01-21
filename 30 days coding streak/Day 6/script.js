function CountVovels(str1){
  var vowels = 'aeiouAEIOU';
  var vcn = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowels.indexOf(str1[x]) !== -1)
    {
      vcn += 1;
    }
  
  }
  return vcn;
}
console.log(CountVovels("Lorem ipsum dolor sit, amet consectetur adipisicing elit"));