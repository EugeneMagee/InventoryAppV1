var stockItemList = (function() {
//populated from remote server but using dummy data
var stockItemList = [
{name:'Milk',description:'Whole fat',price:1.20,availableDate:'01/01/2017',taxable:true,quantity:23},
{name:'Bread',description:'Brown',price:0.99,availableDate:'01/01/2017',taxable:true,quantity:12},
{name:'Cheese',description:'Cheddar',price:1.50,availableDate:'01/01/2017',taxable:true,quantity:23},
{name:'Tomatoes',description:'Cherry',price:2.20,availableDate:'01/01/2017',taxable:true,quantity:4},
{name:'Banana',description:'Fairtrade',price:1.05,availableDate:'01/01/2017',taxable:false,quantity:30}
];
var getStockItemList =function(){
return this.stockItemList;
}
var addNewItem = function(newItem) {
this.stockItemList.push(newItem);
}

return {
publicAddNewItem: addNewItem,
publicGetStockItemList:getStockItemList,
};
})();
