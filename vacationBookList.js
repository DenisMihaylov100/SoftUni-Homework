function vacationBookList(input) {

    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let neededDays = Number(input[2]);

    let fullTimeNeeded = pagesCount / pagesPerHour;
    let neededHoursPerDay = fullTimeNeeded / neededDays;

    console.log(neededHoursPerDay);


}
vacationBookList(["212", "20", "2"]);