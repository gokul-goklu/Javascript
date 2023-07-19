let numbers = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  105,
];
const numberList = document.getElementById("numberList");
const even = [];
const odd = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] / 2 == 0) {
    even.push(numbers[i]);
  } else {
    odd.push(numbers[i]);
  }
}
