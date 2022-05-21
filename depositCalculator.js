function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let deadlineMonths = Number(input[1]);
    let percent = Number(input[2]);

    let sum = depositSum + deadlineMonths * ((depositSum * percent / 100) / 12);

    console.log(sum);

}
depositCalculator(["200", "3", "5.7"]);