let kod = Math.floor(Math.random() * 10 + 90);
let uchXonalison = Math.floor(Math.random() * 1000);
let BirinchiJuftlik = Math.floor(Math.random() * 100);
let IkkinchiJuftlik = Math.floor(Math.random() * 100);

// raqamlarni baholash
let chiroyli = Math.floor(uchXonalison / 100) == Math.floor(uchXonalison / 10) % 10 || Math.floor(uchXonalison / 10) % 10 == uchXonalison % 10;
let ajoyib = Math.abs(BirinchiJuftlik - IkkinchiJuftlik) == 1 || Math.abs(uchXonalison % 100 - BirinchiJuftlik) == 1;
let zor = uchXonalison % 100 == BirinchiJuftlik || BirinchiJuftlik % 10 == Math.floor(IkkinchiJuftlik / 10);
let lux = BirinchiJuftlik == IkkinchiJuftlik;
let superRaqam = uchXonalison % 100 == BirinchiJuftlik && BirinchiJuftlik == IkkinchiJuftlik || uchXonalison % 111 == BirinchiJuftlik % 11 && BirinchiJuftlik == IkkinchiJuftlik;

if (uchXonalison < 100 && uchXonalison > 9) {
  uchXonalison = "0" + uchXonalison;
} else if (uchXonalison < 10) {
  uchXonalison = "00  " + uchXonalison;
}

if (BirinchiJuftlik < 10) {
  BirinchiJuftlik = "0" + BirinchiJuftlik;
}

if (IkkinchiJuftlik < 10) {
  IkkinchiJuftlik = "0" + IkkinchiJuftlik;
}


if (kod == 92 || kod == 96 || kod == 98) {
  console.log(`"${kod}" Uzbekistonda bunaqa kodli aloqa xizmati yo'q :(`);
} else {

  console.log(`Sizning telefon raqamingiz: +998 (${kod}) ${uchXonalison}-${BirinchiJuftlik}-${IkkinchiJuftlik}`);

  // Super raqamga tekshirish
  if (lux && zor && ajoyib && chiroyli || superRaqam || lux && chiroyli) {
    console.log("Super raqam \(^o^)/");
  } else {

    // Lux raqamga tekshirish!
    if (lux || chiroyli && zor) {
      console.log("Lux raqam :o");
    } else {

      // Zo'r raqamga tekshirish
      if (zor) {
        console.log("Zo'r raqam ^_^");
      } else {

        // Ajoyib raqamga tekshirish
        if (ajoyib) {
          console.log("Ajoyib raqam :)");
        } else {
          // Chiroyli raqamga tekshirish!
          if (chiroyli) {
            console.log("Chiroyli raqam ;)");
          }
        }
      }
    }

  }
}
