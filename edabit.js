function sumOfCubes(arr = []) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let sum = 0;
  for (let num of arr) {
    sum += num * num * num;
  }
  return sum;
}
// Examples:
console.log(sumOfCubes([1, 2, 3]));
console.log(sumOfCubes([-1, 2, -3]));
console.log(sumOfCubes([]));

function sevenBoom(arr) {
  return arr.some((num) => num.toString().includes("7"))
    ? "Boom!"
    : "there is no 7 in the array";
}
// Examples:
console.log(sevenBoom([1, 2, 3, 4, 5, 6]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86, 7]));

function isSymmetrical(num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}
// Examples:
console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(44444444));
console.log(isSymmetrical(9939));
console.log(isSymmetrical(1112111));

function convert(minutes) {
  return minutes * 60;
}
