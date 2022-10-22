// Lager min-attributt som hindrer en i å få opp mulighet til å reservere før dagens dato
let idag = new Date();
let dd = idag.getDate();
let mm = idag.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
let yyyy = idag.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

idag = yyyy + "-" + mm + "-" + dd;
document.getElementById("dato").setAttribute("min", idag);

// Sjekker om datoen som er tastet inn er før nåværende tidspunkt
function isAfterToday(date) {
  return new Date().getTime() < new Date(date).getTime();
}

// Submitknapp og feedback

const button = document.querySelector("#button");
button.addEventListener("click", feedback);

function feedback() {
  const navn = document.getElementById("navn").value;
  const epost = document.getElementById("epost").value;
  const mobil = document.getElementById("mobil").value;
  const antallpersoner = document.getElementById("antall").value;
  const dato = document.getElementById("dato").value;
  const tidspunkt = document.getElementById("tidspunkt").value;
  const tidspunktInt = parseInt(tidspunkt.replace(":", ""));
  const combo = dato + "T" + tidspunkt;
  // Feilmeldinger hvis mobilnummer ikke er 8 siffer og hvis man booker før nåværende tidspunkt
  if (mobil.length !== 8) {
    alert(`Du må ha 8 siffer i telefonnummeret`);
    return;
  }
  // fikse feilmelding om man ikke taster inn hvert kvarter
  if (!isAfterToday(combo)) {
    alert(
      `Tidspunktet du har tastet inn er før nåværende tidspunkt. Tast inn på nytt.`
    );
    return;
  }
  if (tidspunktInt < 1600 || tidspunktInt > 2200) {
    alert(
      `Vi har ikke åpent på dette tidspunktet. Tast inn et tidspunkt mellom 16:00 og 22:00.`
    );
    return;
  }
  // Printer reservasjonen med inputten som er tastet inn
  alert(
    `Et bord er blitt reservert for ${navn}, for ${antallpersoner} personer den ${dato} klokken ${tidspunkt}. Bekreftelse er sendt til ${epost} og på mobil til ${mobil}.`
  );
}
