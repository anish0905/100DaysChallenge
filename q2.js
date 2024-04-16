
function generateHash(str) {
    if (str.length > 288 || str.trim() === 0) {
        return false;
    }
              let newArr =  str.split(" ");
           newArr  = newArr.map((newArr)=>{
             return   newArr.replace(newArr[0],newArr[0].toUpperCase());
            
            }  
        )
        console.log(newArr);
              
  
}
console.log(generateHash("my name is anish kumar"));
