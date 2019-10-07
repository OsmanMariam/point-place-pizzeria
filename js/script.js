function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}



$(document).ready(function () {

  $("form#new-pizza").submit(function (event) {
    event.preventDefault();

    var crust = $("input[type=radio][name=crust]:checked").val

   
    });
  });