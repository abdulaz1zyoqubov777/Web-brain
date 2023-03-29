

// 2 - Masala:
// Ojbect ichidagi agelar yigindisini toping ?

let obj2 = {
    title: "Webbrain",
    age: 2,
    child: {
      age: 4,
      name: "Webbrain",
      child: {
        age: 23,
      },
    },
  };
  
  const getObjAgeTotal = (obj) => {
    let res = 0;
  
    while (obj) {
      res += obj.age;
      obj = obj.child;
    }
  
    return res;
  };
   console.log(getObjAgeTotal(obj2));

   // 3 - Masala:
// Object ichidagi Boolean tipidagi malumotlarni chiqaring keylari bilan birga?

let obj3 = {
    id: 1,
    name: "webbrain",
    offline: true,
    online: true,
    individual: false,
  };
  
  const getBoolean = (obj) => {
    let res = {};
    for (key in obj) {
      if (typeof obj[key] === "boolean") res[key] = obj[key];
    }
    return res;
  };
   console.log(getBoolean(obj3));
  //=========

  let obj={title:'Webbrain', age:2}
  console.log(Object.keys(obj));
  

  