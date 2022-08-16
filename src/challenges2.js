// Desafio 11
function getDDD(array) {
  let DDD = '';
  for (let i = 0; i <= 1; i += 1) {
    DDD += array[i];
  }
  return DDD;
}

function getFirstHalf(array) {
  let firstHalf = '';
  for (let i = 2; i <= 6; i += 1) {
    firstHalf += array[i];
  }
  return firstHalf;
}

function getSecondHalf(array) {
  let secondHalf = '';
  for (let i = 7; i <= 10; i += 1) {
    secondHalf += array[i];
  }
  return secondHalf;
}

function checkNums(array) {
  const checkSome = array.some((number) => number < 0 || number > 9);
  return checkSome;
}

function checkRepeats(array) {
  const repeats = {};
  array.forEach((value) => {
    if (value in repeats) repeats[value] += 1;
    else repeats[value] = 1;
  });
  return repeats;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkNums(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (Object.values(checkRepeats(array)).some((number) => number >= 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${getDDD(array)}) ${getFirstHalf(array)}-${getSecondHalf(array)}`;
}

// Desafio 12
function checkA(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  checkA(lineA, lineB, lineC);
  if (lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  if (lineC > (lineA + lineB) || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  const numbersFromString = string.match(/(\d+)/g);
  const sumOfNumbers = numbersFromString
    .reduce((acc, curr) => parseInt(acc, 10) + parseInt(curr, 10));
  if (parseInt(sumOfNumbers, 10) === 1) {
    return `${sumOfNumbers} copo de água`;
  }
  return `${sumOfNumbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
