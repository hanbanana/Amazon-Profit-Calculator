


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

    $("#supplierPrice, #orderQuantity, #shipToUsOrAmazon, #shipToAmazon, #upcCode, #upcSticker, #itemQuantityOnListing, #priceOnAmazon, #amazonFee, #fbaFee").empty();
  };




  $("#submitButton").on("click", function () {
    supplier_price = $("#supplierPrice").val();
    order_quantity = $("#orderQuantity").val();

    result_totalCostToAmazon = supplier_price + order_quantity;

    $("#result-totalCostToAmazon").text(result_totalCostToAmazon);

    console.log(result_totalCostToAmazon);
  })






})