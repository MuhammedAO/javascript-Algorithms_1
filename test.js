const reverseArray = (revArr) =>{
// return revArr
// .split('')
// .reverse()
// .join('');


// let toConv = '';
// revArr.split('').forEach(manne => toConv = manne + toConv);
// return toConv;

// let toConv = '';
// for (let i =0; i <=revArr.length-1; i++) {
//  toConv = revArr[i] + toConv
// }

// return toConv;

// const tobeRev = revArr.split('');
// tobeRev.reverse();
// return tobeRev.join('');

// let toConv = '';

// return revArr.split('').reduce((toCong, mannep) => mannep + toCong, '');






}

// const revString = (str) =>{
// const reverseString = str.split('').reverse().join('');
// return reverseString
// }

const isPalindrome = (str) => {
   const revString = str.split('').reverse().join('');

   return revString === str ;
}

const capitalizeLetters = (str) =>{
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

const reverseInt = (str) =>{
   revString = str.toString().split('').reverse().join('');
   return parseInt(revString)

}



const output = reverseInt (1234567);
console.log(output);