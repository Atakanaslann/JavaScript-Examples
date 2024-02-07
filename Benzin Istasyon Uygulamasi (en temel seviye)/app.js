// Benzin istasyonu

/*
    1- Dizel : 24.53
    2- Benzin: 22.25
    3- LPG   : 11.1


    Gelen Musteriden alacagimiz bilgiler;
        1- Yakit Tipi
        2- Yuklenecek Yakit Litresi


*/

let dizel = 24.53 , benzin = 22.25 , LPG = 11.1
const yeniSatir = "\r\n"

const yakitMetni = "1-Dizel"+yeniSatir+"2-Benzin"+yeniSatir+"3-LPG"+yeniSatir+"Yakit Turunu Seciniz"+yeniSatir
let yakitTipi = prompt(yakitMetni)
let yakitLitresi = Number(prompt("Yakit Litresini Giriniz"))
let bakiye = Number(prompt("Bakiyenizi Giriniz"))

if(yakitTipi == "1"){
    //BENZIN
    let odenecekTutar = dizel *yakitLitresi
    if(odenecekTutar<bakiye){
        alert("Yakit Alabilirsiniz"+yeniSatir+"Odenecek tutar : "+odenecekTutar+yeniSatir+"Kalan Bakiyeniz : "+(bakiye-odenecekTutar))
        
    }
    else{
        alert("Bakiyeniz yeterli degildir"+yeniSatir+"Odenecek tutar : "+odenecekTutar+yeniSatir+"Kalan Eksik Bakiyeniz : "+(odenecekTutar - bakiye))
    }
}
else if (yakitTipi == "2"){
    //DIZEL
    let odenecekTutar = benzin *yakitLitresi
    if(odenecekTutar<bakiye){
        alert("Yakit Alabilirsiniz"+yeniSatir+"Odenecek tutar : "+odenecekTutar+yeniSatir+"Kalan Bakiyeniz : "+(bakiye-odenecekTutar))
        
    }
    else{
        alert("Bakiyeniz yeterli degildir"+yeniSatir+"Odenecek tutar : "+odenecekTutar+yeniSatir+"Kalan Eksik Bakiyeniz : "+(odenecekTutar - bakiye))
    }
}
else if (yakitTipi == "3"){
    //LPG
    let odenecekTutar = LPG *yakitLitresi
    if(odenecekTutar<bakiye){
        alert("Yakit Alabilirsiniz"+yeniSatir+"Odenecek tutar : "+odenecekTutar+yeniSatir+"Kalan Bakiyeniz : "+(bakiye-odenecekTutar))
        
    }
    else{
        alert("Bakiyeniz yeterli degildir"+yeniSatir+"Odenecek tutar : "+odenecekTutar+yeniSatir+"Kalan Eksik Bakiyeniz : "+(odenecekTutar - bakiye))
    }
}
else{
    alert("Yanlis Secim Yaptiniz")
}