// Commento su riga

/**
 * document.getElementById
 * document.getElementsByTagName
 * document.createElement
 * 
 * ___.parentNode
 * ___.childNodes
 * ___.lastChild
 * 
 * ___.nextSibling
 * ___.previousSibling
 * 
 * ___.getAttribute
 * ___.setAttribute("..." , "...")
 * 
 * ___.appendChild
 */

 function ciao() {
    alert('Ciao!');
}

function createTable() {
    body = document.body;
    let table = document.createElement("table"); // tabella creata e allocata in memoria
    let tbody = document.createElement("tbody");
    let trow = document.createElement("trow");
    body.appendChild(table);
    table.appendChild(tbody);
    tbody.appendChild(trow);

    document.getElementsByTagName("body")[0].appendChild(table); // [0] -> prendi il primo elemento dell indice col il tag body
}