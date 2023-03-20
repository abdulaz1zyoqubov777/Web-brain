

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
   

   //============Array============
   
let ar1 = [1,2,3,4]
let ar2 = [1,2,3,4]


//splice arrayni asil holatini o`zgartiradi
ar1.splice(0,2)
//slice arrayni asil holatiga tasir qilmaydi
ar2.slice(0,2)

console.log(ar1);
console.log(ar2);

//==================

let ar3=[1,2,3]
let ar4=[4,5,6]
console.log(ar3.concat(ar4,ar3));
 
 