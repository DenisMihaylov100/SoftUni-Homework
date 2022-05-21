function foodDelivery(input) {

    let chickenMenuTimes = Number(input[0]);
    let fishMenuTimes = Number(input[1]);
    let vegetarianMenuTimes = Number(input[2]);

    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetarianMenuPrice = 8.15;

    let chickenMenusCost = chickenMenuTimes * chickenMenuPrice;
    let fishMenusCost = fishMenuTimes * fishMenuPrice;
    let vegetarianMenusCost = vegetarianMenuTimes * vegetarianMenuPrice;

    let menusCost = chickenMenusCost + fishMenusCost + vegetarianMenusCost;
    
    let dessertPrice = menusCost * 0.20;
    let deliveryPrice = 2.50;

    let totalCost = menusCost + dessertPrice + deliveryPrice;

    console.log(totalCost);
}
foodDelivery(["2", "4", "3"]);