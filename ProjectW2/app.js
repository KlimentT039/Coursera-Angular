(function () {
  'use strict'

angular.module("ProjectW2",[])

.controller("ShoppingListBuying",ShoppingListBuying)
.controller("ShoppingListBought",ShoppingListBought)
.service("ShoppingListService",ShoppingListService);

ShoppingListBuying.$inject = ['ShoppingListService'];

function ShoppingListBuying(ShoppingListService){

  var itemAdder = this;
  itemAdder.itemName ="Eggs";
  itemAdder.itemQuantity = "10";


  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
  }

  itemAdder.items = ShoppingListService.toBuyItems();

  itemAdder.removeItem = function(itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  }



}

ShoppingListBought.$inject = ['ShoppingListService'];

function ShoppingListBought(ShoppingListService){

  var boughtItems = this;

  boughtItems.items=ShoppingListService.getBoughtItems();

}




function ShoppingListService () {
  var service = this;

  var itemsToBuy = [];
  var itemsBought = [];

  service.addItem = function (itemName,itemQuantity){

    var item = {
      name : itemName,
      quantity : itemQuantity
    };
    itemsToBuy.push(item);
  };

  service.getBoughtItems = function() {
    return itemsBought;
  };

  service.toBuyItems = function () {
    return itemsToBuy;
  };


  service.removeItem = function (itemIndex){
    itemsBought.push(itemsToBuy[itemIndex])
    itemsToBuy.splice(itemIndex,1);
  }

}



})();
