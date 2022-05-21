function projectsCreation(input) {
    let nameOfArchitect = input[0];
    let numOfProjects = Number(input[1]);
    let neededHours = numOfProjects * 3;
    console.log(`The architect ${nameOfArchitect} will need ${neededHours} hours to complete ${numOfProjects} project/s.`);
}
projectsCreation(["George", "4"]);