
// Js da 3 ta scope bor 1)block ,2)global,3)function

//1 function scope

function test(){
    var name="webbrain"
}
test()
console.log(name);

//2 block scope if,for while,swith,,do while

if(1){
    var name = "webbrain"
}
test()
console.log(name);

//3 global => global,this,globalThis,window

//window=javScripta dom bn ishlatilinadi 

//global=bu backendda , nodejsda ishlatilinadi

function get(){
   console.log(this,globalThis);
   
}
get()

