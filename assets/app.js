


$(document).ready(function () {

  var supplier_price = 0;
  var order_quantity = 0;
  var ship_to_us_or_amazon = 0;
  var ship_to_amazon = 0;
  var upc_code = 0;
  var upc_sticker = 0;
  var item_quantity_on_listing = 0;
  var price_on_amazon = 0;
  var amazon_fee = 0;
  var fba_fee = 0;
  var result_totalCostToAmazon = 0;
  var result_amazonFbmFee = 0;
  var result_netProfitFromAmazon = 0;
  var result_finalPurchasingItemPrice = 0;
  var result_finalPurchasingListingPrice = 0;
  var result_shipUs = 0;
  var result_shipAmazon = 0;
  var result_shipCostEachItem = 0;


  function initializeCalculator() {
    supplier_price = "";
    order_quantity = "";
    ship_to_us_or_amazon = "";
    ship_to_amazon = "";
    upc_code = "";
    upc_sticker = "";
    item_quantity_on_listing = "";
    price_on_amazon = "";
    amazon_fee = "";
    fba_fee = "";
    result_totalCostToAmazon = "";
    result_amazonFbmFee = "";
    result_netProfitFromAmazon = "";
    result_finalPurchasingItemPrice = "";
    result_finalPurchasingListingPrice = "";
    result_finalProfit = "";
    result_shipUs = "";
    result_shipAmazon = "";
    result_shipCostEachItem = "";


    $("#supplierPrice, #orderQuantity, #shipToUsOrAmazon, #shipToAmazon, #upcCode, #upcSticker, #itemQuantityOnListing, #priceOnAmazon, #amazonFee, #fbaFee, #result-totalCostToAmazon, #result-amazonFbmFee, #result-amazonFbmFee, #result-netProfitFromAmazon, #result-finalPurchasingItemPrice, #result-finalPurchasingListingPrice, #result-finalProfit, #result_shipAmazon, #result_shipUs, #result_shipCostEachItem").empty();
  };

  function initializeShippingCost() {
    result_shipUs = "";
    result_shipAmazon = "";
    result_shipCostEachItem = "";


    $("#result_shipAmazon, #result_shipUs, #result_shipCostEachItem").empty();
  };

  function initializeResult() {
    result_totalCostToAmazon = "";
    result_amazonFbmFee = "";
    result_netProfitFromAmazon = "";
    result_finalPurchasingItemPrice = "";
    result_finalPurchasingListingPrice = "";
    result_finalProfit = "";

    $("#result-totalCostToAmazon, #result-amazonFbmFee, #result-amazonFbmFee, #result-netProfitFromAmazon, #result-finalPurchasingItemPrice, #result-finalPurchasingListingPrice, #result-finalProfit").empty();
  };




  $("#submitButton").on("click", function () {
    event.preventDefault();

    calculate();

    // supplier_price = document.getElementById("supplierPrice").value;
    // order_quantity = parseInt(document.getElementById("orderQuantity").value);
    // ship_to_us_or_amazon = parseInt(document.getElementById("shipToUsOrAmazon").value);
    // ship_to_amazon = parseInt(document.getElementById("shipToAmazon").value);
    // upc_code = parseInt(document.getElementById("upcCode").value);
    // upc_sticker = parseInt(document.getElementById("upcSticker").value);
    // item_quantity_on_listing = parseInt(document.getElementById("itemQuantityOnListing").value);
    // price_on_amazon = parseInt(document.getElementById("priceOnAmazon").value);
    // amazon_fee = parseInt(document.getElementById("amazonFee").value);
    // fba_fee = parseInt(document.getElementById("fbaFee").value);

    // result_totalCostToAmazon = (supplier_price * order_quantity) + ship_to_us_or_amazon + ship_to_amazon + upc_code + upc_sticker;
    // result_amazonFbmFee = amazon_fee + fba_fee;
    // result_netProfitFromAmazon = price_on_amazon - amazon_fee - fba_fee;
    // result_finalPurchasingItemPrice = result_totalCostToAmazon / order_quantity;
    // result_finalPurchasingListingPrice = item_quantity_on_listing * (result_totalCostToAmazon / order_quantity);
    // result_finalProfit = price_on_amazon - amazon_fee - result_finalPurchasingListingPrice;
    // result_shipUs = (supplier_price * order_quantity) * 0.6;
    // result_shipAmazon = (supplier_price * order_quantity) * 0.4;
    // result_shipCostEachItem = (ship_to_us_or_amazon + ship_to_amazon) / order_quantity;


    // $("#result-totalCostToAmazon").text(result_totalCostToAmazon.toFixed(2));
    // $("#result-amazonFbmFee").text(result_amazonFbmFee.toFixed(2));
    // $("#result-netProfitFromAmazon").text(result_netProfitFromAmazon.toFixed(2));
    // $("#result-finalPurchasingItemPrice").text(result_finalPurchasingItemPrice.toFixed(2));
    // $("#result-finalPurchasingListingPrice").text(result_finalPurchasingListingPrice.toFixed(2));
    // $("#result-finalProfit").text(result_finalProfit.toFixed(2));
    // $("#result_shipCostEachItem").text(result_shipCostEachItem.toFixed(2));

    // $("#result_shipUs").text(result_shipUs.toFixed(2));
    // $("#result_shipAmazon").text(result_shipAmazon.toFixed(2));

  })

  //   function myfunction() {
  // var val1 = $("#fbaFee").val();
  // var val2 = $("#amazonFee").val();
  //     document.getElementById("result_shipUs").innerHTML = val1 + val2;
  //   }

  function calculate() {

    var supplier_price = Number($("#supplierPrice").val());
    var order_quantity = Number($("#orderQuantity").val());
    var ship_to_us_or_amazon = Number($("#shipToUsOrAmazon").val());
    var ship_to_amazon = Number($("#shipToAmazon").val());
    var upc_code = Number($("#upcCode").val());
    var upc_sticker = Number($("#upcSticker").val());
    var item_quantity_on_listing = Number($("#itemQuantityOnListing").val());
    var price_on_amazon = Number($("#priceOnAmazon").val());
    var amazon_fee = Number($("#amazonFee").val());
    var fba_fee = Number($("#fbaFee").val());

    var result_totalCostToAmazon_var =(supplier_price * order_quantity) + ship_to_us_or_amazon + ship_to_amazon + upc_code + upc_sticker;
    var result_amazonFbmFee_var = amazon_fee + fba_fee;
    var result_netProfitFromAmazon_var = price_on_amazon - amazon_fee - fba_fee;
    var result_finalPurchasingItemPrice_var = result_totalCostToAmazon_var / order_quantity;
    var result_finalPurchasingListingPrice_var = item_quantity_on_listing * (result_totalCostToAmazon_var / order_quantity);
    var result_finalProfit_var = price_on_amazon - amazon_fee - fba_fee - result_finalPurchasingListingPrice_var;
    var result_shipCostEachItem_var = (ship_to_us_or_amazon + ship_to_amazon) / order_quantity;

    // result_totalCostToAmazon = (supplier_price * order_quantity) + ship_to_us_or_amazon + ship_to_amazon + upc_code + upc_sticker;
    // result_amazonFbmFee = amazon_fee + fba_fee;
    // result_netProfitFromAmazon = price_on_amazon - amazon_fee - fba_fee;
    // result_finalPurchasingItemPrice = result_totalCostToAmazon / order_quantity;
    // result_finalPurchasingListingPrice = item_quantity_on_listing * (result_totalCostToAmazon / order_quantity);
    // result_finalProfit = price_on_amazon - amazon_fee - fba_fee - result_finalPurchasingListingPrice;
    // result_shipUs = (supplier_price * order_quantity) * 0.6;
    // result_shipAmazon = (supplier_price * order_quantity) * 0.4;
    // result_shipCostEachItem


    document.getElementById("result-totalCostToAmazon").innerHTML = result_totalCostToAmazon_var.toFixed(2);
    document.getElementById("result_shipCostEachItem").innerHTML = result_shipCostEachItem_var.toFixed(2);
    document.getElementById("result-amazonFbmFee").innerHTML = result_amazonFbmFee_var.toFixed(2);
    document.getElementById("result-netProfitFromAmazon").innerHTML = result_netProfitFromAmazon_var.toFixed(2);
    document.getElementById("result-finalPurchasingItemPrice").innerHTML = result_finalPurchasingItemPrice_var.toFixed(2);
    document.getElementById("result-finalPurchasingListingPrice").innerHTML = result_finalPurchasingListingPrice_var.toFixed(2);
    document.getElementById("result-finalProfit").innerHTML = result_finalProfit_var.toFixed(2);

console.log(result_totalCostToAmazon_var);
  };


  $("#shippingCostButton").on("click", function () {
    event.preventDefault();


    supplier_price = document.getElementById("supplierPrice").value;
    order_quantity = document.getElementById("orderQuantity").value;
    ship_to_us_or_amazon = document.getElementById("shipToUsOrAmazon").value;
    ship_to_amazon = document.getElementById("shipToAmazon").value;

    result_shipUs = (supplier_price * order_quantity) * 0.6;
    result_shipAmazon = (supplier_price * order_quantity) * 0.4;


    $("#result_shipUs").text(result_shipUs.toFixed(2));
    $("#result_shipAmazon").text(result_shipAmazon.toFixed(2));


  })


  $("#clearAllButton").on("click", function () {
    location.reload();
    // initializeCalculator();
  })

  $("#clearInfoButton").on("click", function () {
    location.reload();
    // initializeCalculator();
  })

  $("#clearShipCostButton").on("click", function () {
    // location.reload();
    initializeShippingCost();
  })

  $("#clearResultButton").on("click", function () {
    // location.reload();
    initializeResult();
  })


  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  $('[data-toggle="tooltip"]').tooltip();   

})