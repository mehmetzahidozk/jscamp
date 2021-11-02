console.log("Merhaba Kodlama.io")


let dolarBugun = 9.30
let dolarDun = 9.20
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.20
//euroDun = 11//bunu yapamıyoruz
console.log(euroDun)

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")

{/* <ul>
    <li>Konut Kredisi</li>
    <li>emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)