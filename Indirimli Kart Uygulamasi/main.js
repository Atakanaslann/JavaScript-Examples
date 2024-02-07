let mesaj =
    `
Magazaya Hosgeldiniz
Indirim Kartiniz Var Mi
1-Evet
2-Hayir
`

const urunler = [
    {
        urunIsmi: "ET",
        fiyat: 220
    },
    {
        urunIsmi: "SUT",
        fiyat: 20
    },
    {
        urunIsmi: "YUMURTA",
        fiyat: 115
    }
]

let sonuc = confirm(mesaj)
let odenecekTutar;

if(sonuc){
    let isim = prompt("Isminizi Giriniz: ")
    let soyisim = prompt("Soyisminizi Giriniz: ")

    const musteri = new Musteri(isim,soyisim,sonuc,urunler)
    odenecekTutar = musteri.hesapla()

    alert(
        `
        Musteri Bilgileri: ${isim} ${soyisim}
        Odenecek Tutar: ${odenecekTutar}
        `
    )
}else{
    const musteri = new Musteri(null,null,sonuc,urunler)
    odenecekTutar = musteri.hesapla()
    alert(`Odenecek Tutar: ${odenecekTutar}`)
}





