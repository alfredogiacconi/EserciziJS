const myId = "ondemand";

function clickButtonA() {
  if (document.getElementById(myId) == null) {
    let s = document.createElement("script");
    s.src = "esercizio7a.js";
    s.id = myId;
    document.head.append(s);
  } else {
    alert('script "ondemand" già caricato');
    document.getElementById(myId).remove()
  }
}

function clickButtonB() {
  if (document.getElementById(myId) == null) {
    let s = document.createElement("script");
    s.src = "esercizio7b.js";
    s.id = myId;
    document.head.append(s);
  } else {
    alert('script "ondemand" già caricato');
    document.getElementById(myId).remove()
  }
}

let sels = document.getElementsByTagName("select");
for (let sel of sels) {
    sel.disabled = false
    sel.value = ""
}

function scegliOpzione(id) {
    let sels = document.getElementsByTagName("select");
    let v1 = sels[0].value
    let v2 = sels[1].value
    console.log(`La select (${sels[0].id}) ha scelto: ${v1}`)
    console.log(`La select (${sels[1].id}) ha scelto: ${v2}`)
}

function tabellina(id) {
    let sels = document.getElementsByTagName("select");
    let v1 = sels[0].value
    let v2 = sels[1].value
    console.log(`La select (${sels[0].id}) ha scelto: ${v1}`)
    console.log(`La select (${sels[1].id}) ha scelto: ${v2}`)
    // alert(v1 + v2) il + non converte
    alert(v1 * v2)
}