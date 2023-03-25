

let users=[
    {id: 1, year: 1998, engine: 1, name: "Tico"},
    {id: 2, year: 2005, engine: 1.2, name: "Matiz"},
    {id: 3, year: 2010, engine: 1.6, name: "Jentra"},
    {id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
    {id: 5, year: 2012, engine: 2, name: "Malibu"},
    {id: 6, year: 2000, engine: 1.2, name: "Damas"},
    {id: 7, year: 2018, engine: 2.4, name: "Tracker"},
];
//let res=users.filter((value)=>value.year<2020);
//let res=users.filter((value)=>value.year<2010);
//let res=users.filter((value)=>value.year>2010);
//let res=users.sort((value)=>value.engine>=2.4);
//let res=users.sort((a,b)=>b.engine-a.engine)
//let res=users.sort((a,b)=>a.year-b.year);
//let res=users.sort((a,b)=>a.name.localeCompare(b.name));

// const setData = (data) => {
//     let res = data.map((value) => value.year < 2000 ? {...value, status: 'Eski'} : value);
//     users = res;
// }


// setData(users)
// console.log(users);

// const setData=(data)=>{
//     let res =data.map((value) => {
//         if(value.year < 2010 && value.year > 2000) return {...value, status: 'Orta'}
//         else return value
//     }) 
//     users = res;
// }
// setData(users)
// console.log(users);

const setData=(data)=>{
    let res=data.map((value)=>{
        if(value.year < 2022 && value.year > 2010) {
            return {...value, status: "yangi malumot"}}
            else{
                return value
            }
        
    })
    users=res;
}
setData(users)
console.log(users);