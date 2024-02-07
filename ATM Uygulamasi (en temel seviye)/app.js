
const eklenti= "\r\n"


while (true){
    let bakiye = Number(prompt("Bakiyenizi Girin: "))
    let secim = Number(prompt("1- Bakiye Goruntule"+eklenti+"2- Para Cekme"+eklenti+"3- Para yatirma"+eklenti+"4- cikis"+eklenti+"Seciminizi Giriniz: "))
    if(secim == 1){
        alert("Bakiyeniz "+bakiye+" TL")   
    }
    else if(secim==2){
        let paraCek = Number(prompt("Cekmek istediginiz tutari giriniz: "))
        if(paraCek<bakiye){
            bakiye-=paraCek
            alert("Yeni bakiyeniz "+ bakiye + " TL")
            break;
        }
        else{
            alert("yetersiz bakiye")
            break;
        }
    }
    else if(secim==3){
        let yenitutar = Number(prompt("Yatirmak istediginiz tutari giriniz: "))
        bakiye += yenitutar
        alert("Paraniz Basariyla Yatirildi")
        break;
    }
    else if(secim==4){
        confirm("Cikis Yap")
        break;
    }
    else{
        alert("Hatali tuslama yaptiniz")
        break;
    }
}