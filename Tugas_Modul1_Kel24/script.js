var a = 0;
var b = 0;
var q2 = ()=> {
     
    a = 10;
    b = 3;
    console.log(a - b );
}
q2();

console.log(a + b);

(a=>10) ? console.log("yay") : console.log("nooo");

var angka = [2, 3, 5];
console.log(angka);
;

const myArray = [5,10,20]
const reducer = myArray.reduce((total, jumlah)=>total + jumlah)

console.log(reducer);