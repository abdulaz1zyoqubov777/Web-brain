







//do while
let res = 2;
while (res) {
    console.log(res);
    res--;

}

let j = 1;
do {
    console.log(j);
    j--
} while (j);


//console.log(new Date().getDay());

let time = new Date().getDay();
switch (time) {
    case  0:
        console.log("yakshanba");
        break;
    case  1:
        console.log("dushanba");
        break;
    case  2:
        console.log("seshanba");
        break;
    case  3:
        console.log("chorshanba");
        break
    case  4:
        console.log("payshanba");
        break
    case  5:
        console.log("juma");
        break
    case  6:
        console.log("shanba");
        break


    default:console.log(404);

}