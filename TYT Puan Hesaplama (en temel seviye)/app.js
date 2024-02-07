let turkceDogru,turkceYanlis=0,matematikDogru,matematikYanlis=0,fenDogru,fenYanlis=0,sosyalDogru,sosyalYanlis=0;
let dogruSayisi=0,yanlisSayisi=0;
const eklenti = "\r\n"
let secim = Number(prompt("1-TYT Puan Hesapla"+eklenti+"2-Cikis Yap"+eklenti))

switch(secim){
    case 1:

        okulPuani = Number(prompt("Okul puaninizi giriniz: "))

        turkceDogru = Number(prompt("Turkce Dogru Sayisi: "))
        turkceYanlis = Number(prompt("Turkce Yanlis Sayisi: "))
        
        matematikDogru = Number(prompt("Matematik Dogru Sayisi: "))
        matematikYanlis = Number(prompt("Matematik Yanlis Sayisi: "))

        fenDogru = Number(prompt("Fen Dogru Sayisi: "))
        fenYanlis = Number(prompt("Fen Yanlis Sayisi: "))

        sosyalDogru = Number(prompt("Sosyal Dogru Sayisi: "))
        sosyalYanlis = Number(prompt("Sosyal Yanlis Sayisi: "))

        dogruSayisi = turkceDogru+matematikDogru+fenDogru+sosyalDogru
        yanlisSayisi = turkceYanlis+matematikYanlis+fenYanlis+sosyalYanlis

        kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4)
        puan = 100 + okulPuani + (kalanDogruSayisi*4)

        alert("TYT PUANINIZ: " + puan)
        break

    case 2:
        alert("Uygulamadan Cikis Yapildi...")
        break

    default:
        alert("Lutfen gecerli aralikta deger giriniz")
        break

}

