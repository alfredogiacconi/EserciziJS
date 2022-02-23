// const { JSDOM } = require("jsdom")

let level = 0;
let indent = "--";

function myF(e) {
  console.log(indenta(level) + Object.prototype.toString.call(e));
}

function indenta(lv) {
  let res = "";
  for (let i = 0; i < level; i++) res += indent;
  return res;
}

function attraversa(elem, myF) {
  myF(elem);
  level++;
  for (let figlio of elem.children) {
    attraversa(figlio, myF);
  }
  level--;
}

function analizza() {
  let b = document.querySelector("body");
  attraversa(b, myF);
}

function identifica() {
  console.log(window.navigator.oscpu); //computer utente
  console.log(window.navigator.userAgent); //browser utente
}

// JSDOM.fromFile('complex.html').then(analizza)