function basketballEquipment(input) {

    let yearPrice = Number(input[0]);
    
    let sneakersPrice = yearPrice - yearPrice * 0.40;
    let jerseyPrice = sneakersPrice - sneakersPrice * 0.20;
    let ballPrice = jerseyPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalCost = yearPrice + sneakersPrice + jerseyPrice + ballPrice + accessoriesPrice;

    console.log(totalCost);

}
basketballEquipment(["365"]);