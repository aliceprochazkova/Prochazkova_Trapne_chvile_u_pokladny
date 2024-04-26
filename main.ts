// Ukázkový vstup

type Mince = { typ: number, kusy: number }

type Nakup = { cena: number, mince: Array<Mince> }

const data: Nakup = {

    cena: 215,

    mince: [

        { typ: 1, kusy: 9 },

        { typ: 2, kusy: 0 },

        { typ: 5, kusy: 0 },

        { typ: 10, kusy: 0 },

        { typ: 20, kusy: 3 },

        { typ: 50, kusy: 4 }

    ]

}
console.log("cena nakupu je:");
//console.log(data.mince.length);
console.log(data.cena);
let celkemPenez: number = 0;
for (let i: number = 0; i < data.mince.length; i++) {
    let pocetKusuMince: number = data.mince[i].kusy;
    let typMince: number = data.mince[i].typ;
   // console.log("pocet kusu mince:");
   //console.log(pocetKusuMince);
   //console.log("typ mince:");
   //console.log(typMince);
    celkemPenez += (pocetKusuMince * typMince);
}
console.log("celkem penez:");
console.log(celkemPenez);
if (celkemPenez >= data.cena)
    console.log("ANO");
else
    console.log("NE");