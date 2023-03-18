

//=========================



 const text = (str) => {
       let res = ""
       let count = 1
       for (let i = 0; i < str.length; i++) {
           if (str[i] === str[i + 1]) {
               count++
           } else {
               res += str[i]
               if (count > 1) {
                   res += count
                   count = 1
               }
           }
       }
       console.log(res)
   }
   text("webbraaiiin")
 
 