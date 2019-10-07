console.log('osman');
console.log('mariam');
console.log(69);

$(document).ready(function() {

  $(".whatwedo p").hide();

  $('.whatwedo img.one').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });
  $('.whatwedo p.one').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });
  $('.whatwedo img.two').click(function() {
    $(".whatwedo img.two").toggle();
    $(".whatwedo p.two").toggle();
  });
  $('.whatwedo p.two').click(function() {
    $(".whatwedo img.two").toggle();
    $(".whatwedo p.two").toggle();
  });
  $('.whatwedo img.three').click(function() {
    $(".whatwedo img.three").toggle();
    $(".whatwedo p.three").toggle();
  });
  $('.whatwedo p.three').click(function() {
    $(".whatwedo img.three").toggle();
    $(".whatwedo p.three").toggle();
  });

  $('.whatwedo h3').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });
  $('.whatwedo h3').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });

  $("table").hide();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h4").hide();

  $('.btn.order').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

    $("table").show();
    $(".additional-buttons").show();
    $(".btn.order").hide();

    $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
    $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
    $("#total").html(total);












  });

});
