function createTable(source) {
    //estraggo il contenuto scritto nella textarea
    let input = document.querySelector(source).value,
    //divido il contenuto in righe e le inserisco in un array
    lines = input.split(/\n/),
    //creiamo la tabella che riempiremo con le righe
    table = document.createElement('table'),
    tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i = 0; i < lines.length; i++) {
        let row = document.createElement('tr');
        //numero riga
        let td1 = document.createElement('td');
        let lineNumber = document.createTextNode(i + 1);
        td1.appendChild(lineNumber);
        //contenuto riga
        let td2 = document.createElement('td');
        let lineContent = document.createTextNode(lines[i]);
        td2.appendChild(lineContent);
        //inseriamo i <td> nella riga <tr>
        row.appendChild(td1);
        row.appendChild(td2);
        //aggiungiamo lo stile di colore alternato
        if (i % 2 == 0) { row.setAttribute("class", "pari"); }
        else { row.setAttribute("class", "dispari"); }
        //inseriamo l'intera riga nella nostra tabella
        tbody.appendChild(row);
    }
    //document.getElementsByTagName("body")[0].appendChild(table);
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(table);
}