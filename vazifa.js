


//=======================================


const name = (str) => {
    let res = "";
    for (key in str) {
      if (str[key - 1] === " " || str[key - 1] === undefined)
        res += str[key].toUpperCase();
      else res += str[key];
    }
    return res;
  };
  console.log(name("webbrain academy it center"));
