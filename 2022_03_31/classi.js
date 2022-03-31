// function utente(nome) {
//   let u = Object.create(utente.methods)
//   u.nome = nome
//   return u }
// utente.methods = {
//   toString() { return "Utente: " + this.nome }
// }
// let a = utente("Alfredo")
// console.log(a.toString())
// console.log(a)

// function utente(nome, cognome) {
//   let u = Object.create(utente.methods)
//   u.nome = nome
//   u.cognome = cognome
//   return u }
// utente.methods = {
//   toString: function() { return "Utente: " + this.nome + " " + this.cognome } , country: "Italy"
// }
// let a = utente("Alfredo", "Giacconi")
// console.log(a.toString())
// console.log(a)
// a.country

// Modalità new

// function Utente(nome, cognome) {
//   this.nome = nome
//   this.cognome = cognome
// }

// Utente.prototype = {
// toString: function() { return "Utente: " + this.nome + " " + this.cognome }  , country: "Italy"
// }

// let a = new Utente("uno", "due")
// console.log(a)

// function Utente(nome) {
//   this.nome = nome
//   }
// Utente.prototype = {
//   toString() { return "Utente: " + this.nome }
// }
// let n= new Utente ("Alfredo")
// console.log(n.toString())

// Modalità class

class Utente {
  constructor(nome) {
    this.nome = nome;
  }
  toString() {
    return "Utente: " + this.nome;
  }
}
let n = new Utente("Alfredo");
n.nome;
