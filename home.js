

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
// function moment(llll){
//     let months=["January","February","March","April","May","Juny","July","August","September","November","December"]
//     let weeks=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
//     const date=new Date()
//     console.log(weeks[`${date.getDay()}`].slice(0,3),months [`${date.getMonth()}`].slice(0,3),`${date.getDay()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} AM`);
//   }
//   moment("llll")
  
// let weeks=["Yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]
// let date = new Date();
// console.log(weeks[date.getDay()]);

// let user={name: "webbrain",age:12}
// console.log(JSON.parse(user,["name","year"]));
//=========================================================================2
const moment = (info) => {
  let date = new Date();
 let month = date.getMonth() + 1;
 let week = date.getDay();
   
  let sign;
  if(date.getHours() >= 12) sign = 'PM';
  else sign = 'AM';

  let Months = ['December','January', 'February', 'March','April', 'May','Juny','July', 'August', 'September','October','November',];
  let weeks = ['SunDay','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ];

  if(info === 'LT') return `${date.getHours()}:${date.getMinutes()} ${sign} `;
   else if (info === "LTS") return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${sign}`;
   else if (info === "L")   return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
   else if (info === 'l')   return`${date.get.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
   else if (info  === 'LL') return `${Months[month]} ${date.getDate()}, ${date.getFullYear()}`;
   else if (info === 'll')  return `${Months[month].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`;
   else if (info === 'LLL') return `${Months[month]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${sign}`;
   else if (info === 'lll') return `${Months[month].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${sign}`;
   else if (info === 'LLLL')return `${weeks[week]} ${Months[month].slice(0, 3)} ${day}, ${year} ${hours}:${min} ${sign}`;
   else if (info === 'llll')return `${weeks[week].slice(0, 3)} ${Months[month].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${sign}`;
}
console.log(moment('llll'));