var stockItem = (function() {
  var name = "";
  var description = "";
  var price = 0;
  var availableDate = "";
  var taxable = false;
  var quantity = 0;

  var getStockItemName = function() {
    return this.name;
  }
  var setStockItemName = function(name) {
    this.name = name;
  }
  var getStockItemDescription = function() {
    return this.description;
  }
  var setStockItemDescription = function(description) {
    this.description = description;
  }
  var getStockItemPrice = function() {
    return this.price;
  }
  var setStockItemPrice = function(price) {
    this.price = price;
  }
  var getStockItemAvailableDate = function() {
    return this.availableDate;
  }
  var setStockItemAvailableDate = function(availableDate) {
    this.availableDate = availableDate;
  }
  var getStockItemTaxable = function() {
    return this.taxable;
  }
  var setStockItemTaxable = function(taxable) {
    this.taxable = taxable;
  }
  var getStockItemQuantity = function() {
    return this.quantity;
  }
  var setStockItemQuantity = function(quantity) {
    this.quantity = quantity;
  }
  return {
    publicGetStockItemName: getStockItemName,
    publicSetStockItemName: setStockItemName,
    publicGetStockItemDescription: getStockItemDescription,
    publicSetStockItemDescription: setStockItemDescription,
    publicGetStockItemPrice: getStockItemPrice,
    publicSetStockItemPrice: setStockItemPrice,
    publicGetStockItemAvailableDate: getStockItemAvailableDate,
    publicSetStockItemAvailableDate: setStockItemAvailableDate,
    publicGetStockItemTaxable: getStockItemTaxable,
    publicSetStockItemTaxable: setStockItemTaxable,
    publicGetStockItemQuantity: getStockItemQuantity,
    publicSetStockItemQuantity: setStockItemQuantity
  };
})();