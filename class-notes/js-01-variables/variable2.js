const degisken1="js";
console.log(typeof degisken1);
const sayi=6;
console.log(typeof sayi);

var ilk ="global"
console.log(ilk);

let first="erkan" //erisilebilir
console.log(first); 

{
    first="hasan"

    let second=45
}

console.log(first);
console.log(second); //scope icinde tanimlandigi icin disaridan erisilemez