//Write a function that calculates whether or not 2 numbers in the given array equal the given target, return true or false

function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    if (i === (array.length -1)) {
      return false
    } else {
      for (let j = 0; j < array.length; j++) {
        if (i !== j && (array[i] + array[j]) == target){
          return true
        }
      }
    } 
    
  } 

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  for num if num + loop index = target, return true


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
