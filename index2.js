

//=========================

function getName(str){
    let res={};
    for (i of str){
       if (i in res){
          console.log(str.slice(0,4));
          res[i]++;
       }
       else res[i]=1;
 
    }
    console.log(str,res);
 }
 getName("webbr@<>n!_2022");
 
 