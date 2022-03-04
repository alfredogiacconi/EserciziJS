// let btn = document.getElementById("bottone");
// btn.disabled = false;

function cliccato() {
  this.className = "cliccato";
  alert("Hai attivato la funzione!");
}

function nonCliccato() {
  this.className = "non_cliccato";
}

function evidenzia() {
  this.className = "evidenzia";
}

let a = document.getElementsByTagName("button");
for (let btn of a) {
  btn.addEventListener("mouseover", evidenzia);
  btn.addEventListener("mouseout", nonCliccato);
  btn.addEventListener("dblclick", cliccato);
}