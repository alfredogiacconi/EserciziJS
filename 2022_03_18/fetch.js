let totale = 0;

// let a = document.getElementById("button");
// a.disabled = false;

function preset(z) {
  totale = z.totale;
  let l = document.getElementById("lista");
  for (let i = 1; i <= totale; i++) {
    let o = document.createElement("option");
    o.textContent = i.toString();
    o.value = i.toString();
    console.log(o);
    l.appendChild(o);
  }
  l.addEventListener("input", provafetch);
  l.disabled = false;
}

fetch("studenti.php")
  .then((r) => r.json())
  .then((b) => preset(b)); // prima ottengo il totale

function mostra(s) {
  document.getElementById("nome").textContent = s.nome;
  document.getElementById("cognome").textContent = s.cognome;
  document.getElementById("eta").textContent = s.eta;
  document.getElementById("interessi").textContent = s.interessi;
}

function tryfetch() {
  fetch(
    "mytest.php?" +
      new URLSearchParams({ id: Math.floor(Math.random() * totale) + 1 })
  )
    .then((r) => r.json())
    .then((b) => mostra(b));
}

function provafetch(e) {
  fetch("mytest.php?" + new URLSearchParams({ id: e.target.value }))
    .then((r) => r.json())
    .then((b) => mostra(b));
}
