
let str = "+998 33 576 2020";
 //console.log(str.slice(0,5));
 
 function resultate(){
  name="country:"
  name1="region:"
  name2="city:"
  name3="number:"
  res=str.slice(0,5)
  res1=str.slice(4,7)
  res2=str.slice(8,11)
  res3=str.slice(11,16)
   if (res) {
    console.log(`${name} `,res);
   }
   if(res1){
    console.log(`${name1}`,res1);
   }
   if(res2){
    console.log(`${name2}`,res2);
   }
   if(res3){
    console.log(`${name3}`,res3);
   }

 }
resultate();

 //4
 function web(){
 let title = "webbrain academy";
 let result='';
 for (value of title) {
   if(value=="a") result += value ;
   if(value=="w") result += value;
//    if(value=="b") result += value;
//    if(value=="r") result += value;
//    if(value=="i") result += value;
//    if(value=="c") result += value;
//     if(value=="d") result += value;
//     if(value=="e") result += value;
//     if(value=="m") result += value;
//     if(value=="y") result += value;

 }
 return result
}
console.log(web());

//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//  }

function test(A){
    let c=0;
    let n=0
    while(n < A.length){
      for(i=n;i<A.length;i++){
        let fragment=A.slice(n.i){
          if(fragment.lenth){
            eval((${fragment.join("+")}))
          }
        }
      }
    }
}



