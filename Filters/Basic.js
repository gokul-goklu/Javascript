const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arrNew = arr.filter((item) => item % 3 === 0 || item % 5 === 0);
console.log("first Approach: ", arrNew);

const arrNew2 = arr.filter((item) => {
  if (item % 2 == 0) return true;
  return false;
});
console.log("second approach: ", arrNew2);
