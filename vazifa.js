
// const name = (str) => {
//     let res = "";
//     for (key in str) {
//       if (str[key - 1] === " " || str[key - 1] === undefined)
//         res += str[key].toUpperCase();
//       else res += str[key];
//     }
//     return res;
//   };
//   console.log(name("webbrain academy it center"));





//==Array====


// let ar=[1,2,3,"hi",true,function(){},null,undefined];

// console.log(ar[6]);//6 indexni korstadi
// console.log(ar.length);//index uzunligi
// console.log(ar[ar.length-1]);//eng ohirgi indexni korsatadi

//================================================================

// let  ar=new Array(5, 1);//element yasash un

// console.log(ar);
// console.log(ar.length);


//===============array1 homework

//   function sumAr(){
//     let Ar=[1,2,3];
//     let sum=0;
//     for(i=0;i<Ar.length;i=i+1){
//         sum=sum+Ar[i];
//     }
//     return sum;
//   }
//   console.log(sumAr());



// function compareArrays(arr1, arr2) {

    
//     if(arr1.length != arr2.length) {
//         return false;
//     } 
//     else { 
//         let result = false;
        
       
//         for(let i=0; i<arr1.length; i++) {

//             if(arr1[i] != arr2[i]) {
//                 return false;
//             }
//             else {
//                 result = true;
//             }

//         }
//         return result;
        
//   }

// }

// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 5];

// const result = compareArrays(array1, array2);

// if(result) {
//     console.log('true');
// }
// else {
//     console.log('false');
// }

//========================array1==========================================================================


// let ar1 = [1,2,3,4]
// let ar2 = [1,2,3,4]


// //splice arrayni asil holatini o`zgartiradi
// ar1.splice(0,2)
// //slice arrayni asil holatiga tasir qilmaydi
// ar2.slice(0,2)

// console.log(ar1);
// console.log(ar2);

// //==================

// let ar3=[1,2,3]
// let ar4=[4,5,6]
// console.log(ar3.concat(ar4,ar3));
//===============

// let ar=[1,2,3,"hi",true,function(){},null,undefined];

// console.log(ar[6]);//6 indexni korstadi
// console.log(ar.length);//index uzunligi
// console.log(ar[ar.length-1]);//eng ohirgi indexni korsatadi

//================================================================

// let  ar=new Array(5, 1);//element yasash un

// console.log(ar);
// console.log(ar.length);



//=====homework array1



//   function sumAr(){
//     let Ar=[1,2,3];
//     let sum=0;
//     for(i=0;i<Ar.length;i=i+1){
//         sum=sum+Ar[i];
//     }
//     return sum;
//   }
//   console.log(sumAr())
//====================================================
// let ar1 = [1,2,3,4]
//  let ar2 = [1,2,3,5]
 
// function Arr(ar1,ar2){

//     let a= ar1.toString();
//     let b=ar2.toString();
//     return a===b;
    
    
// }
// console.log(Arr(ar1,ar2));
//=======================================================
// let array = ["webbrain","academy"]


// function Arra(array){
//     let str = array.join('');
//     let count = {}

//     for(value of str) {
//        if(count[value]) {
//         count[value]++;
//        } else { 
//         count[value] = 1;
//        }
//     }
//     return count ;
// }
// let a = Arra(array);
// console.log(a);


// // -----------------------------------------------------------------------------------

// let arr = ['background-color', 'list-style-image',"-webkit-transition"];

// const camelCase = (arr) => {
//   let str = arr.join(' ');
//   let res = ''

//   for(index in str) {
//     if(str[index - 1] === '-') {
//        res += str[index].toUpperCase();
//     } else {
//         res += str[index]
//     }
//   }
//   return res.replace(/-/g, '').split(' ')

// }
// console.log(camelCase(arr));


//==========================================

// let ar=[0,1,[2,[3],4],5,6,7];
// let ar1=["apple","Orange","banana"];

//console.log(ar.findIndex((value)=>value===9));
//console.log(ar.every((value)=>value<100));
//console.log(ar.copyWithin(3,1,4));

// ar1.forEach((value,index)=>{
//     console.log(value,index);
// })
// let res=ar1.map((value,index)=>{
//     return index;
// })
// console.log(res);
//console.log(ar.flatMap((value)=>1));

// let arr=Array.from("academy",(value)=>value)
// console.log(arr);
//===========================================
let arrr=[1,2,3]
let sum=arrr.reduce((prev,value)=>{
    console.log(prev,value);
    return prev+1
},0)
console.log(sum);

