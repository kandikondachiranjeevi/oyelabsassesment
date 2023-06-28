const array = [2, 4, 1, 3, 6, 7, 8, 9, 10 /* Missing number */];

const missingNumber = (array) => {
  const n = 100; // Total numbers in the range
  const sumOfRange = (n * (n + 1)) / 2;
  const sumOfArray = array.reduce((acc, num) => acc + num, 0);

  return sumOfRange - sumOfArray;
};

const result = missingNumber(array);
console.log(`Missing number: ${result}`);
