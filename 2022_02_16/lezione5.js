function spostaRiga() {
    let ul = document.getElementsByTagName('ul')[0]
    let cp = ul.firstChild
        cp = cp.nextSibling
        cp = cp.nextSibling
    let r = ul.removeChild(cp) // rimuove il 3
        ul.appendChild(r);
}

function naviga(id) {
    let element = document.getElementsByTagName(id)[0],
    a = element.childNodes,
    c = 0,
    r = null;
    for (let e of a) {
        if (e.nodeType == 1) {
            c++;
            if (c == 3) {
                r = element.removeChild(e);
            }
            //alert(e.getAttribute('id'));
        }
    }
    element.appendChild(r);
}

function ordineAlfabetico() {
    let body = document.getElementsByTagName('body')[0],
	a = body.childNodes,
	b = {},
	c = [];
	for (let e of a) {
		if (e.nodeType == 1) {
			b[e.innerHTML] = e;
			c.push(e.innerHTML);
			body.removeChild(e);
		}
	}
	c.sort();
	for (let k of c) {
		body.appendChild(b[k]);
	}
	// alert(JSON.stringify(b));
	// alert(b['prima riga']);
}