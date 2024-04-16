function countChar(word ,char)
{

word=word.toLowerCase();
char = char.toLowerCase();

  const totalCount   = word.split("")
  .reduce((accum , cunChar)=>{
 if(cunChar===char)
 {
    accum++
 }
 return accum

  },0)
  return totalCount


}



console.log(countChar("MissIssippi","I"));