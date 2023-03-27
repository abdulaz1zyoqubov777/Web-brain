
//==========================================================

// function doubleChars(str) {
//     let chars = "";
//     for ( i=0; i<str.length; i++) {
//         chars = chars + str[i] + str[i];
//     }
//     return chars;
// }
// console.log(doubleChars("webbrain",2));

//============================================
// let string = "Linux123hint jg6";
// let extractNum = string.replace(/\D/g, '');
// console.log( extractNum);

//==========================================

// function validatePalin(str) {  
  
//     for (let i = 0; i < str.length ; i++) {  
//         if (str[i] !== str[str.length - 1 -i]) {  
//             alert( 'It is not a palindrome');  
//         }  
//     }  
//     alert( 'It is a palindrome');  
// }  
  
// const str = prompt('Enter a string or number: ');  
//  const value = validatePalin(str);  
// console.log(value);  

//============================================================
// function doubleChars(str) {
//     var chars = "";
//     for (var i=0; i<str.length; i++) {
//         chars = chars + str[i] + str[i];

//     }
//     return chars;
// }
// console.log(doubleChars("webbrain",2));

//====dublicate o1cirish
// const text = (str) => {
//     let res = ""
//     let count = 1
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count--
//         } else {
//             res += str[i]
//             if (count > 1) {
//                 res += count
//                 count = 1
//             }
//         }
//     }
//     console.log(res)
// }
// text("webbraaiiin")


//==================================

// function compare(wordOne, wordTwo) {
//     if (wordOne.substring() === wordTwo.substring()) {
//         return true;
//     }
//     else 
//     {
//         return false;
//     }
// }
// console.log(compare("web","web"));
//compare("house", "hell");
//===================================
function getData(str){
let res={};
for(i of str){
    if(i in res){
        res[i]++;
    }else{
        res[i]=1;
    }
}
console.log(str,res);
}
getData("webbrain academy")
//===============================
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
text("weebbbrrrraaaaaiiiiiinnnnnnn")

//=======================

 
let values = [1,2,3];
let findArithmeticMean = () => {
let result = 0;
for (var i = 0; i < values.length; i++){
result += values[i];
}
console.log(result/values.length);
}
findArithmeticMean();
// //=======================================
// //object

// let obj={title:'Webbrain', age:2}
// console.log(Object.keys(obj));
//===========================2

let obj={
    title:"Webbrain",
    age:2,
    child:{
        age:4,
        name:"Webbrain",
        child:{
            age:3
        }
    }
    
};
//console.log(obj);
// let sum=0;
//    while(obj){
//     sum=sum+obj.age;
//     person=obj.child
// }
// console.log(sum);
//=============== Arrays 
//1


let arr = [2,3,5,3,2,3,5,8,7,6];
     
    function removeDuplicates(arr) {
        let res = [];
        arr.forEach(value => {
            if (!res.includes(value)) {
                //console.log(res);
                res.push(value);
                
            }
            
        });
         return res;
    }
    console.log(removeDuplicates(arr));
    //=======================
//     let ar1=[1,2,3]
//     let ar2=[1,2,4]
//  function Arr(ar1,ar2){
//     let a=ar1.toString();
//     let b=ar2.toString();

//     return a===b;
//  }
//  console.log(Arr(ar1,ar2));

 //=====================
 
// let array = [1,64,8,27,64,1,125];
// let a = 9;
// let b = 99;

// function nume(){
//     //let res=[]
//     let res=array.filter((value)=>{
//         return value>=9 && value<=99;
//     })
//     console.log(res);
// }
// nume()
//=============
// function test(A, S) {
//     let count = 0;
//     let n = 0;
//     while (n < A.length) {
//       for(let i=n;i<=A.length;i++){
//           let fragment=A.slice(n,i)
//           if(fragment.length){
//               eval((${fragment.join("+")})/${fragment.length}) === S?count++:null;
//           }
//       }
//       n++;
//     }
//     return count;
//   }
//   console.log(test([0, 4, 3, -1], 2));

//=======================
 function getName(str){
        let res=""
        for(let i=str.length-1;i>=0; i--){
            res=res+str[i];
        }
        return res===str
    }
    console.log(getName("kiyik"));




