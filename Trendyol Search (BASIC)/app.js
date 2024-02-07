let urun1 ={
    marka:"LENOVO IdeaPad",
    fiyat :12.999,
    kategori:"Teknoloji"
}
let urun2 ={
    marka:"HP 250 G8",
    fiyat :11.599,
    kategori:""
}
let urun3 ={
    marka:"HP Victus 16",
    fiyat :24.257,
    kategori:"Teknoloji"
}
let urun4 ={
    marka:"Monster Abra A5",
    fiyat :26.799,
    kategori:"Teknoloji"
}
let urun5 ={
    marka:"ACER Aspire3",
    fiyat :10.669,
    kategori:"Teknoloji"
}
let urun6 ={
    marka:"Casper  Nirvana",
    fiyat :14.955,
    kategori:"Teknoloji"
}
let urun7 ={
    marka:"LENOVO IdeaPad 3",
    fiyat :18.540,
    kategori:"Teknoloji"
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6,urun7]
let filtreliUrunler =[]
let kullaniciurunismi = prompt("Bir Urun Arayin: ")

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.marka.toUpperCase().includes(kullaniciurunismi.toUpperCase(),0)){
            filtreliUrunler.push(urun)
        }
    })
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("-----------------------------------")
        console.log("<" + urun.marka + "> <" + urun.fiyat + "> <" + urun.kategori + ">")
        console.log("-----------------------------------")
    })
}

filtreliUrunleriDoldur(urunler)
filtreliUrunleriYazdir(filtreliUrunler)