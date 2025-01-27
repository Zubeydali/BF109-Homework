// 1Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)



function power(base, exponent) {
    return Math.pow(base, exponent);
}


let base = parseFloat(prompt("Birinci ədədi daxil edin (əsas ədəd):"));
let exponent = parseFloat(prompt("İkinci ədədi daxil edin (qüvvət):"));

let result = power(base, exponent);
alert("Nəticə: " + result);


// 22.Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
function move(array, fromIndex, toIndex) {
  
    let element = array[fromIndex];
    
  
    array.splice(fromIndex, 1);
    
  
    array.splice(toIndex, 0, element);
    
    return array;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

// 3
function deleteRepeate(arr) {
    return [...new Set(arr)];
}

console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5])); 
console.log(deleteRepeate([1, 2, 3, 4, 5])); 
console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5])); 

// 4
function sentenceCapitalization(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(sentenceCapitalization("a short sentence"));


// 5
function concatArray(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9])); 

// 6

function wordCount(sentence) {
    return sentence.split(' ').length;
}

console.log(wordCount("a short sentence")); 

// 7
function median(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 !== 0) {
        return arr[mid];
    } else {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
}

console.log(median([1, 2, 3, 4, 5])); 
console.log(median([1, 2, 3, 4])); 


// 8
function clearDuplicate(arr) {
    return [...new Set(arr)];
}

console.log(clearDuplicate([1, 2, 1, 2, 3])); 
console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); 

// 9
function charIndexSum(str, char) {
    let sum = 0;
    let found = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            sum += i;
            found = true;
        }
    }

    return found ? sum : -1;
}

console.log(charIndexSum("salam", 'a'));

// 10
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
function getFirstThreeLetters(arr) {
    return arr.map(country => country.slice(0, 3).toUpperCase());
}

console.log(getFirstThreeLetters(countries)); 


// 11
function convert(str) {
    return str.split('').map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
}

console.log(convert('saLamNecesen'));


// 12
function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); // true
console.log(isEqual([1, 2, 3, 4], [1, 2 , 3, 4, 5])); // false
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])); // false
console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));