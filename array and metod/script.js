// 1. Cümlənin bütün hərflərini böyük hərflərə çevirmək
function convertToUpper(sentence) {
    return sentence.toUpperCase();
}
console.log(convertToUpper("Hello World")); // "HELLO WORLD"

// 2. Cümlənin sözlərinin sırasını əksinə çevirmək
function reverseWordOrder(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWordOrder("javascript öyrənmək maraqlıdır")); // "maraqlıdır öyrənmək javascript"

// 3. Cümlədəki ən uzun sözü tapmaq
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';
    
    words.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    
    return longest;
}
console.log(findLongestWord("javascript oyrenirik çox maraqlıdır")); // "maraqlıdır"

// 4. Bir hərfi başqası ilə əvəzləyib, nəticəni lowercase şəkildə qaytarmaq
function replaceCharacter(sentence, oldChar, newChar) {
    return sentence.split(oldChar).join(newChar).toLowerCase();
}
console.log(replaceCharacter("Salam", "a", "o")); // "solom"


// ARRAY METHODS

// 1. Shopping cart əməliyyatları
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}


if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}


const indexHoney = shoppingCart.indexOf('Honey');
if (indexHoney !== -1) {
    shoppingCart.splice(indexHoney, 1);
}


const indexTea = shoppingCart.indexOf('Tea');
if (indexTea !== -1) {
    shoppingCart[indexTea] = 'Green Tea';
}

console.log(shoppingCart); // ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']


// 2. Countries array əməliyyatları
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

// Reverse countries array
const reversedCountries = countries.reverse();
console.log(reversedCountries);

// Remove "Canada" and "Denmark", and add "Azerbaijan"
const indexCanada = countries.indexOf('Canada');
const indexDenmark = countries.indexOf('Denmark');
countries.splice(indexCanada, 1);
countries.splice(indexDenmark, 1);
countries.push('Azerbaijan');
console.log(countries);


// 3. Concatenate `frontEnd` və `backEnd` array-lərini
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack); // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


// 4. IT Companies array əməliyyatları
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Slice out the first 3 companies
const firstThree = itCompanies.slice(0, 3);
console.log(firstThree); // ["Facebook", "Google", "Microsoft"]

// Slice out the last 3 companies
const lastThree = itCompanies.slice(-3);
console.log(lastThree); // ["IBM", "Oracle", "Amazon"]

// Slice out the middle IT company
const middle = itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2) + 1);
console.log(middle); // ["Microsoft"]

// Sort companies array
const sortedCompanies = itCompanies.sort();
console.log(sortedCompanies);

// Change each company name to uppercase
itCompanies.forEach(company => {
    console.log(company.toUpperCase());
});

// Check if "Google" exists in itCompanies
const googleIndex = itCompanies.indexOf('Google');
if (googleIndex !== -1) {
    console.log('Google is found');
} else {
    console.log('Google is not found');
}

// Filter companies with more than one 'o' (without filter method)
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let char of itCompanies[i]) {
        if (char === 'o') count++;
    }
    if (count > 1) {
        console.log(itCompanies[i]);
    }
}


// 5. İki array və bir char daxil edən funksiya
function mergeArraysWithChar(arr1, arr2, char) {
    return [...arr1, ...arr2].join(char);
}
console.log(mergeArraysWithChar([1, 2], [3, 4], '*')); // "1*2*3*4"