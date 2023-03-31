

//   function moment(LT){
//     const date=new Date();
    
//       return ` ${date.getHours()}:${date.getMinutes()} AM `
//       // ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`
//   }
//   console.log(moment('LT'));
//===============================================================================
//   function moment(){
//     const time=new Date()
//     return ` ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`
//   }
  //console.log(moment('LTS'));
  //===================================================================
//   function moment(L){
//     const date=new Date()
//     return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} `
//   }
//   console.log(moment('L'))
//====================================================================================
//   function moment(LL){
//     let months=["January","February","March","April","May","Juny","July","August","September","November","December"]
//     const date=new Date()
//     console.log(months [`${date.getMonth()}`],`${date.getDay()},${date.getFullYear()}`);
//   }
//   moment("LL")
  //======================================================================================================

//   function moment(ll){
//     let months=["January","February","March","April","May","Juny","July","August","September","November","December"]
//     const date=new Date()
//     console.log(months [`${date.getMonth()}`].slice(0,3),`${date.getDay()},${date.getFullYear()}`);
//   }
//   moment("ll")

//===================================================================================================================
//   function moment(LLL){
//     let months=["January","February","March","April","May","Juny","July","August","September","November","December"]
//     const date=new Date()
//     console.log(months [`${date.getMonth()}`],`${date.getDay()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} AM`);
//   }
//   moment("LLL")
//============================================================================================
//   function moment(LLL){
//     let months=["January","February","March","April","May","Juny","July","August","September","November","December"]
//     const date=new Date()
//     console.log(months [`${date.getMonth()}`].slice(0,3),`${date.getDay()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} AM`);
//   }
//   moment("LLL")
//==================================================================================================================
// function moment(LLLL){
//     let months=["January","February","March","April","May","Juny","July","August","September","November","December"]
//     let weeks=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
//     const date=new Date()
//     console.log(weeks[`${date.getDay()}`],months [`${date.getMonth()}`],`${date.getDay()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} AM`);
//   }
//   moment("LLLL")
  //=======================================================================================
function moment(llll){
    let months=["January","February","March","April","May","Juny","July","August","September","November","December"]
    let weeks=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const date=new Date()
    console.log(weeks[`${date.getDay()}`].slice(0,3),months [`${date.getMonth()}`].slice(0,3),`${date.getDay()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} AM`);
  }
  moment("llll")
  