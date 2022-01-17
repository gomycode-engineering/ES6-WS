/**
 * A function that returns a name, using switch,
 * by passing in an age
 * @param {number} age
 * @returns {string}
 */
const getName = (age) => {
    switch (age) {
        case 60:
            return 'father';
        case 59:
            return 'mother';
        case 31:
            return 'son';
        case 25:
            return 'daughter';
        case 18:
            return 'teenager';
        default:
            return 'baby';
    }
}

let name1 = getName(31);

const getName2 = (age) => ({
    60: "father",
    59: "mother",
    31: "son",
    25: "daughter",
    18: "teenager",
}[age] || 'baby');

let name2 = getName2(31);

console.log("me");

