
//====================

// let menu = {
//     width:200,
//     height:600,
//     title:"my menu"
// };
// function multiplyNumeric(wrap){
//     for(let i in wrap){
//         if(typeof wrap[i] == "number"){
//             wrap[i]=wrap[i]*2;
//         }
//     }
//     console.log(wrap);
// }
// multiplyNumeric(menu);

//=========================================

// let salaries = {
//     John:100,
//     Ann:160,
//     Pete:130,
// }

// let sum=0
// while(1){
//    if(salaries){
// sum=sum+salaries.Ann
//    }
// }
// console.log(sum);

//. []
//=========================================================


    
    let ladder = { 
    step: 0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    showStep:function(){
        alert( this.step )
    }
    }
    ladder.down()
    console.log(ladder);
    //===========================
    function A(){
        return new.target;
    }
    function B(){
    return A;
    }
    let b=new A();
    let a=new B();
    console.log(a == b); 