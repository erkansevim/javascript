// Bir sayının asal olup olmadığını kontrol eden fonksiyon
function asalMi(sayi) {
    if (sayi <= 1) return false;
    if (sayi <= 3) return true;
    if (sayi % 2 === 0 || sayi % 3 === 0) return false;
    let i = 5;
    while (i * i <= sayi) {
        if (sayi % i === 0 || sayi % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// 1 ile 1000 arasındaki asal sayıları bulan fonksiyon
function bulAsalSayilar(min, max) {
    let asalSayilar = [];
    for (let i = min; i <= max; i++) {
        if (asalMi(i)) {
            asalSayilar.push(i);
        }
    }
    return asalSayilar;
}

// 1 ile 1000 arasındaki asal sayıları bulma
let minDeger = 1;
let maxDeger = 10;
let asalSayilar = bulAsalSayilar(minDeger, maxDeger);

// Bulunan asal sayıları ekrana yazdırma
console.log("1 ile 1000 arasındaki asal sayılar:");
console.log(asalSayilar.join(", "));
