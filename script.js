// Datos sobre las Rosas 
let precioRosa = 8;
let stockRosa = 70;
let precioStockRosa = precioRosa*stockRosa;
// Datos sobre los Lirios
let precioLirio = 10;
let stockLirio = 50;
let precioStockLirio = precioLirio*stockLirio;
// Datos sobre los Tulipanes (Tulip)
let precioTulip = 2;
let stockTulip = 120;
let precioStockTulip = precioTulip*stockTulip;
let precioTotal = precioStockLirio + precioStockRosa + precioStockTulip;
alert("Precio Rosa: " + precioRosa + "€"  + ". Stock Total: " + stockRosa + ". Valor de todo el stock: " + precioStockRosa + "€");
alert("Precio Lirio: " + precioLirio + "€"  + ". Stock Total: " + stockLirio + ". Valor de todo el stock: " + precioStockLirio + "€");
alert("Precio Tulipán: " + precioTulip + "€" + ". Stock Total: " + stockTulip + ". Valor de todo el stock: " + precioStockTulip + "€");
alert("El total del valor del stock es: " + precioTotal + "€");