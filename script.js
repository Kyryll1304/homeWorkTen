// Task one

function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

const out = Array.from(range(10, 21, 1));

console.log(out);

// Task two

const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
numbers.forEach(function (element, index, array) {
  array[index] = element * element;
});
console.log(numbers);

//Task three

const seven = [1, 2, 3, 4, 5, 6, 7, 8, 9];
seven.forEach(function (element, index, array) {
  array[index] = element * 7;
});
console.log(seven);

//Task four

function summary(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(summary(15));

//Task five

let array = Array.from(range(15, 36, 1));
let arrayTwo = [];

for (let i = 0; i < array.length; i++) {
  arrayTwo.push(array[i]);
}

console.log(eval(arrayTwo.join("*")));

//Task six

let arrayThird = Array.from(range(1, 501, 1));

const getAverage = (arrayThird) => {
  let sum = arrayThird.reduce((acc, number) => acc + number, 0);
  let length = arrayThird.length;
  return sum / length;
};

console.log(getAverage(arrayThird));

//Task seven

let array_1 = Array.from(range(30, 81, 1));
let array_2 = [];

for (let i = 0; i < array_1.length; i++) {
  if (array_1[i] % 2 === 0) array_2.push(array_1[i]);
  else continue;
}

console.log(array_2.reduce((partialSum, a) => partialSum + a, 0));

//Task eight

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//Task nine

let n = 6,
  div = [],
  i = 1;

while (i < n) {
  if (n % i == 0) div.push(i);

  i++;
}

console.log(div);

//Task ten

let l = 8;
let divi = [];

if (l % 2 == 0) {
  divi.push(2);

  l = Math.round(l / 2);

  let max = l / 2;

  for (let i = 2; i <= max; i++) {
    if (l % i == 0) {
      divi.push(2 * i);
    }
  }

  divi.push(2 * l);
}

console.log(divi);

//Task eleven

console.log(divi.reduce((partialSum, a) => partialSum + a, 0));

//Task twelve

let row = "";
function multiplyTable() {
  for (let a = 1; a < 11; a++) {
    for (let b = 1; b < 11; b++) {
      row += b * a + " ";
    }
    console.log(a + " x");
    console.log(row);
    row = "";
  }
}

multiplyTable();

//
