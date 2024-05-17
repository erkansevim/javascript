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
