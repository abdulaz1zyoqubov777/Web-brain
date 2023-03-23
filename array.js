
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

let arr = ['background-color', 'list-style-image',"-webkit-transition"];

const camelCase = (arr) => {
  let str = arr.join(' ');
  let res = ''

  for(index in str) {
    if(str[index - 1] === '-') {
       res += str[index].toUpperCase();
    } else {
        res += str[index]
    }
  }
  return res.replace(/-/g, '').split(' ')

}
console.log(camelCase(arr));