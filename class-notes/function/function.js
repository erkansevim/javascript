yazdir(); //hem asagidan hem yukaridan cagrilabilir.

function yazdir() {
    console.log("deneme");
}

yazdir();

//------

function adyazdir(a,b,c) {
    console.log(a,b,c);
}

adyazdir("erkan", "betül", "meryem");


//-------


function yasHesapla (isim, tarih) {
    console.log(`benim adim ${isim} ve ben ${new Date ().getFullYear()-tarih} yasindayim`);

    return new Date().getFullYear()-tarih;

}

yasHesapla("erkan", 1989);

//-----
console.log(isEvenOdd(5));
console.log(isEvenOdd(120));

function isEvenOdd(sayi) {

const sonuc= sayi %2==0 ? "cifttir" :"tektir"
return sonuc
    
}

//-----
let toplam=0;
function sumAll() {
   for (let i = 0 ; i<arguments.length ; i++){
    toplam=toplam+arguments[i];
   }

return toplam
}

alert (sumAll(22,55,48,25,1,2,3,56));

//----------