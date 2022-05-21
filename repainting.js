function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let totalForNylon = (nylon + 2) * 1.50;
    let totalForPaint = (paint * 1.1) * 14.50;
    let totalForThinner = thinner * 5;
    let bagPrice = 0.40;

    let totalForMaterials = totalForNylon + totalForPaint + totalForThinner + bagPrice;
    let totalForWorkers = (totalForMaterials * 0.30) * hours;
    let totalCost = totalForMaterials + totalForWorkers;

    console.log(totalCost);
}
repainting(["10", "11", "4", "8"]);