(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  //Defines max as using the parameters num1 and num2
  function max(num1, num2){ 
    if (num1 > num2){
      return num1 
  //if num one is greater, then it's value will be returned. Since num2 is the only other option, it's what will be returned.
    } else {
      return num2
    }
  }
  
  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(num1, num2, num3){
    //Math.max() takes the largest number put in the parameters. In this case it takes the largest from num1, num2, and num3.
    const maxNum = Math.max(num1, num2, num3); 
    //maxNum calls the result of Math.max() and returns the value.
    return maxNum; 
  }

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  
  //"||" (aka "or") checks each argument individually within the if statement. "===" ensures that it only check if it's the exact character.
  function isVowel(str){
    if (str === 'a' || str === 'e' || str === 'i' || str ===  'o' || str === 'u'){
      return true;
    } else {
      return false;
    }
  }
  
  //Correct:
  /*function isVowel(char) {
    return 'aeiou'.includes(char); -- Will automatically return a boolean
  } 
    */
  // }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(text) {
    //.split() will return an array of characters
    //The function will loop through each index of the text array. If the index value isn't a consonant, that index value will be a concatenation of the value, 'o', and the value again
    text = text.split(''); 
    for (let i = 0; i < text.length; i++) {
    if('bcdfghjklmnpqrstvwxyz'.includes(text[i])) {
    text[i] = text[i] + 'o' + text[i];
   }
  }
  //.join() will bring the array values together as a string
  return text.join('');
}

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  //The initial sum is 0 then the length is taken from the array and added sequentially until there are no more items to add
  
  //arr.reduce loops through the array and executes function of the accumulated (acc) value and the current index; return the accumulated value + i
  function sum(arr) {
    return arr.reduce(function(acc, i) {
      return acc + 1;
    })
  }
  


  function multiply(array){
    let multiple = multiply.reduce((a,b) => a*b)
    return multiple
  }



  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  
  // split() turns the string into an array, reverse() reverses the array values, join() brings the array together as a string.
  function reverse(str) {
    return str.split('').reverse().join('');
  }

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  //Searches through array and calculates the length of the indeces. Will update the length variable with the largest value as it goes through the array.
  function findLongestWord(arr) {
    let length = 0;
    for( let i = 0; i < arr.length; i++) {
      if(arr[i].length > length) {
        length = arr[i].length;
      }
    }
  return length;
  }
  

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

// filter() returns a new arrray that will only return array values with lengths that are shorter than the vale given to i.
function filterLongWords(arr, i) {
	arr.filter(function(word) {
		word.length > i;
	});
}



  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(str){
    const freqList = [];
    str.split('').forEach(function < char) {
      freqList[char] = freqList[char] + 1 || 1;
    };
    return freqList;
  }
  

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
