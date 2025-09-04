const form = document.getElementById("adatForm");
const torlesGomb = document.getElementById("torlesGomb");
const kartyaContainer = document.getElementById("kartyaContainer");

function megjelenites() {
  kartyaContainer.innerHTML = "";

  const adatokTomb = JSON.parse(localStorage.getItem("felhasznaloAdatok")) || [];

  adatokTomb.forEach(adat => {
    const kartya = document.createElement("div");
    kartya.classList.add("kartya");

    kartya.innerHTML = `
      <p><strong>Név:</strong> ${adat.nev}</p>
      <p><strong>Település:</strong> ${adat.telepules}</p>
      <p><strong>Irányítószám:</strong> ${adat.iranyitoszam}</p>
      <p><strong>Közterület:</strong> ${adat.kozterulet}</p>
      <p><strong>Házszám:</strong> ${adat.hazszam}</p>
    `;

    kartyaContainer.appendChild(kartya);
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const ujAdat = {
    nev: document.getElementById("nev").value.trim(),
    telepules: document.getElementById("telepules").value.trim(),
    iranyitoszam: document.getElementById("iranyitoszam").value.trim(),
    kozterulet: document.getElementById("kozterulet").value.trim(),
    hazszam: document.getElementById("hazszam").value.trim()
  };

  const adatokTomb = JSON.parse(localStorage.getItem("felhasznaloAdatok")) || [];
  adatokTomb.push(ujAdat);

  localStorage.setItem("felhasznaloAdatok", JSON.stringify(adatokTomb));

  megjelenites();
  form.reset();
});

torlesGomb.addEventListener("click", function() {
  localStorage.removeItem("felhasznaloAdatok");
  megjelenites();
});

window.addEventListener("load", megjelenites);
