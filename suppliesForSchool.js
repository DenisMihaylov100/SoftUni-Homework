function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let percentDecrease = Number(input[3]);

    let pensPackage = 5.80;
    let markersPackage = 7.20;
    let detergentPricePerLiter = 1.20;

    let totalCost = ((pens * pensPackage) + (markers * markersPackage) + (detergent * detergentPricePerLiter));
    let priceAfterPercentDecrease = totalCost - (totalCost * (percentDecrease / 100));

    console.log(priceAfterPercentDecrease);
}
suppliesForSchool(["2", "3", "4", "25"]);