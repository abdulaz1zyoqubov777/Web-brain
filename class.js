
// class Student {
//     getname(){
//         console.log("welcome");
//     }
// }
// const st = new Student()
// st.getname()

//=========================dynamic

// class Student {
//     constructor(props){
//         console.log(props);
//     }
//     getname(){
//         console.log(`welcome ${name}`);
//     }
// }
// const st2 = new Student()
// st2.getname();

//====================================

// class Student {
//         constructor(name){
//             this.name=name;
//         }
//         getname(){
//             console.log(`welcome ${this.name}`);
//         }
//     }
//     const st2 = new Student("Academy")
//     const st1 = new Student("University")
//     st2.getname()
//     st1.getname()

//==========================getter setter

// class Student {
//     password = 2003;
//     constructor(name) {
//         this.name = name;
//     }
//    get getname() {
//         console.log(this.password);
//     }

//    set getname(value){
//         console.log(this.password = value);
//     }
// }
// const st2 = new Student()
// st2.getname=2004
// st2.getname;

//==============Inheritance

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     getName(){
//         console.log("welcome");
//     }
// }
// class Depart extends Student{
//     getInfo(){
//         console.log("Hello");
//     }
// }
// const dep=new Depart()
// dep.getName()
// dep.getInfo()


