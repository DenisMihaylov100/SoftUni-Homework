function petShop(input) {
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    let dogFoodTimes = Number(input[0]);
    let catFoodTimes = Number(input[1]);
    let result = (dogFoodTimes * dogFoodPrice) + (catFoodTimes * catFoodPrice);
    console.log(`${result} lv.`);
}
petShop(["13", "9"])