let herois = [
  { nome: "Aero", xp: 800 },
  { nome: "Lovin", xp: 1500 },
  { nome: "Spyder", xp: 4500 },
  { nome: "Sombrio", xp: 9200 },
  { nome: "Chronos", xp: 12000 },
];

for (let i = 0; i < herois.length; i++) {
  let nivel;
  let xpHeroi = herois[i].xp;

  if (xpHeroi < 1000) {
    nivel = "Ferro";
  } else if (xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  // Saída
  console.log(`O Herói de nome ${herois[i].nome} está no nível de ${nivel}`);
}
