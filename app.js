


$(document).ready(function () {

  var supplier_price = 0;
  var order_quantity = 0;
  var ship_to_us_or_amazon = 0;
  var ship_to_amazon = 0;
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

    supplier_price = parseInt(document.getElementById("supplierPrice").value);
    order_quantity = parseInt(document.getElementById("orderQuantity").value);
    ship_to_us_or_amazon = parseInt(document.getElementById("shipToUsOrAmazon").value);
    ship_to_amazon = parseInt(document.getElementById("shipToAmazon").value);
    upc_code = parseInt(document.getElementById("upcCode").value);
    upc_sticker = parseInt(document.getElementById("upcSticker").value);
    item_quantity_on_listing = parseInt(document.getElementById("itemQuantityOnListing").value);
    price_on_amazon = parseInt(document.getElementById("priceOnAmazon").value);
    amazon_fee = parseInt(document.getElementById("amazonFee").value);
    fba_fee = parseInt(document.getElementById("fbaFee").value);

    result_totalCostToAmazon = (supplier_price * order_quantity) + ship_to_us_or_amazon + ship_to_amazon + upc_code + upc_sticker;
    result_amazonFbmFee = amazon_fee + fba_fee;
    result_netProfitFromAmazon = price_on_amazon - amazon_fee - fba_fee;
    result_finalPurchasingItemPrice = result_totalCostToAmazon / order_quantity;
    result_finalPurchasingListingPrice = item_quantity_on_listing * (result_totalCostToAmazon / order_quantity);
    result_finalProfit = price_on_amazon - amazon_fee - result_finalPurchasingListingPrice;
    result_shipUs = (supplier_price * order_quantity) * 0.6;
    result_shipAmazon = (supplier_price * order_quantity) * 0.4;
    result_shipCostEachItem = (ship_to_us_or_amazon + ship_to_amazon) / order_quantity;


    $("#result-totalCostToAmazon").text(result_totalCostToAmazon.toFixed(2));
    $("#result-amazonFbmFee").text(result_amazonFbmFee.toFixed(2));
    $("#result-netProfitFromAmazon").text(result_netProfitFromAmazon.toFixed(2));
    $("#result-finalPurchasingItemPrice").text(result_finalPurchasingItemPrice.toFixed(2));
    $("#result-finalPurchasingListingPrice").text(result_finalPurchasingListingPrice.toFixed(2));
    $("#result-finalProfit").text(result_finalProfit.toFixed(2));
    // $("#result_shipUs").text(result_shipUs.toFixed(2));
    // $("#result_shipAmazon").text(result_shipAmazon.toFixed(2));
    $("#result_shipCostEachItem").text(result_shipCostEachItem.toFixed(2));
  

  })
  
  $("#shippingCostButton").on("click", function () {
    event.preventDefault();

    supplier_price = parseInt(document.getElementById("supplierPrice").value);
    order_quantity = parseInt(document.getElementById("orderQuantity").value);
    ship_to_us_or_amazon = parseInt(document.getElementById("shipToUsOrAmazon").value);
    ship_to_amazon = parseInt(document.getElementById("shipToAmazon").value);

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


})