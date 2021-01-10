/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
let i = 0
let last = arr[arr.length-1]
let average =  (arr[i] + last)/2
 if (arr.length < 2) {
   return null
 }
 else {
   return average
 }
}
console.log(firstAndLastAverage([1,2,0,5]))

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
let newArr = []
 for (let i = 0; i < arr.length; i++) {
   newArr.push(arr[i])
 } return newArr.concat(newArr)
}
console.log(duplicateArray([1,4,2,5]))

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
let newArr = arr.slice(3)
return newArr
 }
 console.log(removeFirstThreeElements([0,1,2,3]))


module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
