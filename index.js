// ONLY ODDS

// Create a for loop to go through length of input array
// For each loop run if % 2 !=0 add to a new array
// return new array

const input = [2, 4, 6, 8, 10, 11, 12];

function onlyOdds(numArr) {
  const oddArray = [];
  for (i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 != 0) oddArray.push(numArr[i]);
  }
  console.log(oddArray);
  return oddArray;
}

// onlyOdds(input);

//
// VOWEL VERSUS CONSONANT

// Create variable word to hold string
// Create variable vowels = "aeiou"
// create variable vowelCount
// create variable consonantCount
// Create for loop to run through length of word
// If string.contains(letter.toLowerCase()) vowelCount++, else constonantCount++,
// return `${word} has ${consonantCount} consonants and ${vowelCount} vowels`

const word = "textbook";
const vowels = "aeiou";

function vowVerCons(word) {
  let vowelCount = 0;
  let consCount = 0;
  for (i = 0; i < word.length; i++) {
    vowels.includes(word[i].toLowerCase()) ? vowelCount++ : consCount++;
  }
  console.log(`${word} has ${consCount} consonants and ${vowelCount} vowels`);
  return `${word} has ${consCount} consonants and ${vowelCount} vowels`;
}

// vowVerCons(word);

//
// REVERSE ARRAY

// Create variable testArray
// create variable reverseArray
// For loop through each item, add to beginning of new list
// For length of testArray, reverseArray.unshift(letter)
// return reverse array

const testArray = [1, -1, 2, -3, 5, -8, 13];

function revArr(array) {
  reverseArrary = [];
  for (i = 0; i < array.length; i++) {
    reverseArrary.unshift(array[i]);
  }
  console.log(reverseArrary);
}

// revArr(testArray);

//
// FIZZBUZZ

// create for loop 1-100
// if % 15 = 0, console.log(FizzBuzz)
// else uf % 5 = 0, console.log(Buzz)
// else if % 3 =0, console.log(Fizz)
// else console.log(number)

function fizzBuzz() {
  for (i = 1; i <= 100; i++)
    i % 15 === 0
      ? console.log("FizzBuzz")
      : i % 5 === 0
      ? console.log("Buzz")
      : i % 3 === 0
      ? console.log("Fizz")
      : console.log(i);
}

// fizzBuzz();
