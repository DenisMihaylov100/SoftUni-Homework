function yardGreening(input) {
    let squareMetersGreening = Number(input[0]);

    let priceOnSquareMeter = 7.61;

    let wholeYardGreeningPrice = squareMetersGreening * priceOnSquareMeter;
    let discount = 0.18 * wholeYardGreeningPrice;

    let finalPrice = wholeYardGreeningPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"])