//Variables de las Rosas
let precioRosa = 8;
let stockRosa = 70;
let precioStockRosa = precioRosa*stockRosa;
//Variables de los Lirios
let precioLirio = 10;
let stockLirio = 50;
let precioStockLirio = precioLirio*stockLirio;
//Variables de los Tulipanes (Tulip)
let precioTulip = 2;
let stockTulip = 120;
let precioStockTulip = precioTulip*stockTulip;
//Suma del valor de todas las flores en stock
let totalPrecio = precioStockLirio + precioStockRosa + precioStockTulip;

console.log("------------------------------------------------------------------------");
console.log("Precio Rosa: " + precioRosa + "€ | Stock total: " + stockRosa + " | Valor de todo el stock de rosas: " + precioStockRosa + "€ ");
console.log("Precio Lirio: " + precioLirio + "€ | Stock total: " + stockLirio + " | Valor de todo el stock de rosas: " + precioStockLirio + "€ ");
console.log("Precio Tulip: " + precioTulip + "€ | Stock total: " + stockTulip + " | Valor de todo el stock de rosas: " + precioStockTulip + "€ ");
console.log("El valor total de las flores es: " + totalPrecio +"€")
console.log("------------------------------------------------------------------------");

alert("Precio Rosa: " + precioRosa + "€ | Stock total: " + stockRosa + " | Valor de todo el stock de rosas: " + precioStockRosa + "€" +
      "Precio Lirio: " + precioLirio + "€ | Stock total: " + stockLirio + " | Valor de todo el stock de rosas: " + precioStockLirio + "€" +
      "Precio Tulip: " + precioTulip + "€ | Stock total: " + stockTulip + " | Valor de todo el stock de rosas: " + precioStockTulip + "€" +
      "El valor total de las flores es: " + totalPrecio + "€"
     );