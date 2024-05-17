yazdir(); //hem asagidan hem yukaridan cagrilabilir.

function yazdir() {
  console.log("deneme");
}

yazdir();

//------

function adyazdir(a, b, c) {
  console.log(a, b, c);
}

adyazdir("erkan", "betül", "meryem");

//-------

function yasHesapla(isim, tarih) {
  console.log(
    `benim adim ${isim} ve ben ${new Date().getFullYear() - tarih} yasindayim`
  );

  return new Date().getFullYear() - tarih;
}

yasHesapla("erkan", 1989);

//-----
console.log(isEvenOdd(5));
console.log(isEvenOdd(120));

function isEvenOdd(sayi) {
  const sonuc = sayi % 2 == 0 ? "cifttir" : "tektir";
  return sonuc;
}

//-----
let toplam = 0;
function sumAll() {
  for (let i = 0; i < arguments.length; i++) {
    toplam = toplam + arguments[i];
  }

  return toplam;
}

alert(sumAll(22, 55, 48, 25, 1, 2, 3, 56));

//----------

//bu format üst satirlarda fonksiyonun cagrilmasini engeller
const karsila = function () {};

//--------

//biggest number
const buyukBul = function (a, b, c) {
  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else {
    enBuyuk = c;
  }

  console.log(enBuyuk);
};

buyukBul(3, 4, 5);

//---------

const enBul = function () {
  let biggest = arguments[0];
  let smallest =arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > biggest) {
      biggest = arguments[i];
    }
    if(arguments[i]<smallest){
        smallest=arguments[i];
    }
    
  }
  return `${biggest} ${smallest}`;
}
alert(enBul(35,6584,415,894,478,44,84,84,8,463,5512,8))


//-----


