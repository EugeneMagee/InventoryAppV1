// Define the `inventoryApp` module
//var inventoryApp = angular.module('inventoryApp', []);
// Define the `PhoneListController` controller on the `phonecatApp` module
//inventoryApp.controller('InventoryAppController', function InventoryAppController($scope) {
// var stockItemList = require('./StockItemList.js');

angular.module('inventoryApp', []).controller('InventoryAppController', function($scope) {

// var stock = stockItemList.publicGetStockItemList();
//   $scope.stockItemList = stock;

  // $scope.stockItemList = stockItemList.publicGetStockItemList();
  // $scope.addNewItem = publicAddNewItem();

  $scope.stockItemList = [{
    name: 'Milk',
    description: 'Whole fat',
    price: 1.20,
    availableDate: '01/01/2017',
    taxable: true,
    quantity: 23
  }, {
    name: 'Bread',
    description: 'Brown',
    price: 0.99,
    availableDate: '01/01/2017',
    taxable: true,
    quantity: 12
  }, {
    name: 'Cheese',
    description: 'Cheddar',
    price: 1.50,
    availableDate: '01/01/2017',
    taxable: true,
    quantity: 23
  }];

  var resetNewItemFields = function() {
    $scope.newItemName = "";
    $scope.newItemDescription = "";
    $scope.newItemPrice = "";
    $scope.newItemAvailableDate = "";
    $scope.newItemTaxable = "";
    $scope.newItemQuantity = "";
  };

  $scope.addNewItem = function() {
    var newListItem = {
      name: '',
      description: '',
      price: 0,
      availableDate: '',
      taxable: true,
      quantity: 0
    }
    newListItem.name = $scope.newItemName;
    newListItem.description = $scope.newItemDescription;
    newListItem.price = $scope.newItemPrice;
    newListItem.availableDate = $scope.newItemAvailableDate;
    newListItem.taxable = $scope.newItemTaxable;
    newListItem.quantity = $scope.newItemQuantity;

    $scope.stockItemList.push(newListItem);
    //clear selections
    resetNewItemFields();
    // stockItemList.publicAddNewItem(newListItem);
  }


});