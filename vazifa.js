function getName(){
    this.name="university"
    console.log(this);
}
console.log(new getName().name);

//constractor funksiya bn ocilganligi yoki ocholmaganligini bilish

function getName(name){
    console.log(new.target);
}
new getName("hello")