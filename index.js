//CHALLENGE 1
//Return a string in reverse
//example reverstring ('javascript') === 'tpircsavaj'

//split turns a string into an array
//reverse reverses elements in an array
//join turns elements into a string

const reverString = (str) => {
//  const strArr = str.split('');
//  strArr.reverse();
//  return strArr.join('');
 
// return str
//  .split('')
// .reverse()
// .join('');

//Without Array.reverse
// let revString = '';
// for (let i = str.length-1; i >=0; i--) {
//     revString = revString + str[i];
// }
// return revString;

// let revString = '';
// for (let i=0; i <= str.length-1; i++) {
//     revString = str[i]+revString
// }
// return revString;

// let revString = '';
// for (let char of str) {
//     revString = char+ revString
// }
// return revString;


// let revString = '';
// str.split('').forEach(char =>  revString = char+ revString);
// return revString;

return str.split('').reduce((revString, char) =>  char + revString, '');

}



//Challenge 2 : Validate a palindrome
//Return True if it is or return false if its not
//example isPalindrome('madam') === 'true' isPalindrome('muhammed') === 'false'
 const isPalindrome = (str) => {
     const valPal = str.split('').reverse('').join('');

     return valPal === str
 }


 //Challenge 3 : Reverse an integer
 //Return an integer in reverse
 //example : Int('511') === 115

const reverseInt = (int) => {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString);

}

//Challenge 4 : Capitialize letters
//Return a string with the first lettter of every word capitalize
//example : my name is muhammed === My Name Is Muhammed.

const capitalizeLetters = (str) =>{
return str
.toLowerCase()
.split(' ')
.map(word => word[0].toUpperCase() + word.substr(1))
.join(' ');
}

//Challenge 5 : Max character
//Return the character that is most common in a string
//exampple : muhammed : max character = M

const maxCharacter = (str) =>{
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(char => charMap[char]? charMap[char]++: charMap[char]=1)

for(let char in charMap) {
  if (charMap[char] > maxNum) {
   maxNum = charMap[char];
   maxChar = char;
  }
}

return maxChar;
}

//Challenge 6 : FizzBuzz
//write a program that prints all numbers from from 1 to 100.
//for multiples of 3, instead of the number, print "fizz",
//for multiples of 5, instead of the number, print "buzz"
//for numbers which a both mutiples of 3,5 print "fizzbuzz"
 
const fizzBuzz = () =>{
    for (let i = 1; i <= 100; i++){
     if (i % 15===0) {console.log('FizzBuzz');}
     else if (i % 3 ===0) {console.log('fizz');} 
     else if (i % 5 ===0) {console.log('buzz');}
     else{console.log(i);}
        
    }
}





 const output = fizzBuzz();


console.log(output);
