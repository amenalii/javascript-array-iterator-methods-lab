// INVENTORS
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// PEOPLE
const people = [
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// TRAVEL METHODS
const travelMethods = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// DEVS
const devs = [
  { name: "Alex", year: 1988 },
  { name: "Dani", year: 1986 },
  { name: "Matt", year: 1970 },
  { name: "Wes", year: 2015 },
];

// COMMENTS
const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE ONE
let veryOldInventors = inventors.filter((inventors) => {
  return inventors.year >= 1500 && inventors.year <= 1599;
});
console.log("Exercise 1 my result: ", veryOldInventors);

// EXERCISE TWO
let inventorNames = inventors.map((inventors) => {
  // return 'first: ' + inventors.first + " " + 'last: ' + inventors.last (This is a string not object)

  return { first: inventors.first, last: inventors.last }; // Need key value properties for object literal
});
console.log("Exercise 2 my result: ", inventorNames);

// EXERCISE THREE
let sortedByBirthYear = inventors.sort((a, b) => {
  return a.year - b.year;
});
console.log("Exercise 3 my result: ", sortedByBirthYear);

// EXERCISE FOUR
let inventorNamedAda = inventors.find((inventors) => {
  return inventors.first === "Ada";
});
console.log("Exercise 4 my result: ", inventorNamedAda);

// EXERCISE FIVE
// let peopleSplit = people.split(', ');
// console.log(splitString)

let peopleSplit = people.map((people) => people.split(", "));
console.log(peopleSplit);

let firstLast = peopleSplit.map(([last, first]) => {
  //return {first, last}; // Returning as object array
  return `${first} ${last}`;
});
console.log("Exercise 5 my result: ", firstLast);

// EXERCISE SIX
// let today = Date();
let today = 2024;
let isAdultPresent = devs.some((devs) => {
  return today - devs.year >= 18;
});
console.log("Exercise 6 my result: ", isAdultPresent);

// EXCERCISE SEVEN
let isEveryone19OrOlder = devs.every((devs) => {
  return today - devs.year >= 19;
});
console.log("Exercise 7 my result: ", isEveryone19OrOlder);

// EXCERCISE EIGHT
let commentById = comments.find((comments) => {
  return comments.id === 823423;
});
console.log("Exercise 8 my result: ", commentById);

// EXCERCISE NINE
let idx = comments.findIndex((comments) => {
  return comments.id === 123523;
});
console.log("Exercise 9 my result: ", idx);

//////////////////////////////////////////////////////////////////
/////////////////////////// LEVEL UP /////////////////////////////
//////////////////////////////////////////////////////////////////

// EXCERCISE ONE
// let totalYearsLived = inventors.reduce(function(passed, year) {
//     return inventors.passed - inventors.year
// }, 0);
// console.log('Level Up 1 my result: ', totalYearsLived);

let totalYearsLived = inventors.reduce(function (accumulator, inventors) {
  return accumulator + (inventors.passed - inventors.year);
}, 0);

console.log("Level Up 1 my result: ", totalYearsLived);

// EXCERCISE TWO
let travelMethodCounts = travelMethods.reduce(function (acc, travelMethods) {
  if (acc[travelMethods]) {
    acc[travelMethods] = acc[travelMethods] + 1;
  } else {
    acc[travelMethods] = 1;
  }
  return acc;
}, {});
console.log("Level Up 2 my result: ", travelMethodCounts);