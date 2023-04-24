import { dog, cat, bird, pigeon, anyAnimal } from "./animals_data";

// Part 1: Remove the errors in the function below by filling the conditions of the if statements on lines 6, 13, and 20
function classifyAnimal(animal: { [key: string]: any }) {

    if ("barks" in animal) {
        animal.barks = true;
        console.log("This is a dog");
    } else if ("coos" in animal) {
        animal.coos = true;
        console.log("This is a pigeon");
    } else if ("meows" in animal) {
        animal.meows = true;
        console.log("This is a cat");
    }

}


// Part 2: Uncomment the lines below and test the classifyAnimal function by creating dog, pigeon, and cat objects
const fido = {
    name: "Fido",
    color: "tan",
    barks: true,
    hasTail: true
}
classifyAnimal(fido) // should print 'This is a dog'

const whiskers = {
    name: "Whiskers",
    color: "black",
    meows: true,
    hasTail: true
}
classifyAnimal(whiskers) // should print 'This is a cat'

const skyrat = {
    name: "Skyrat",
    color: "grey",
    canFly: true,
    coos: true

}
classifyAnimal(skyrat) // should print 'This is a pigeon'

