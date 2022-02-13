p = {x:1, y:-2}

// interrogo le proprietà "proprie" di p
a = Object.getOwnPropertyNames(p)

// a è un array
console.log(a)

// ottengo il prototipo dell'oggetto p
b = Object.getPrototypeOf(p)
c = Object.getOwnPropertyNames(b)