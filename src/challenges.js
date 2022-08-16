// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  const splits = string.split(' ');
  return splits;
}

// Desafio 4
function concatName(array) {
  const index = array.length - 1;
  return `${array[index]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins !== 0 && ties !== 0) {
    points += wins * 3 + ties;
  }
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeats = 0;
  for (let index in arrayNumbers) {
    // Aprendi o comando Math.max() no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max.
    // E a utilização com (...nomeDoArray) no site https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript.
    if (Math.max(...arrayNumbers) === arrayNumbers[index]) {
      repeats += 1;
    }
  }
  return repeats;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2 || (cat1 + cat2) / 2 === mouse) {
    return 'os gatos trombam e o rato foge';
  }
  // Aprendi o comando Math.abs() no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs.
  // Esse comando se faz necessário para que não tenhamos valores negativos; para os exemplos do avaliador do projeto, não era necessário utilizar o Math.abs(). Mas, para outros exemplos, às vezes sim.
  if (Math.abs(cat1) - mouse < Math.abs(cat2) - mouse) {
    return 'cat1';
  }
  if (Math.abs(cat2) - mouse < Math.abs(cat1) - mouse) {
    return 'cat2';
  }
}

// Desafio 8
function returnFizzBuzz(array, index, arrayPush) {
  if (array[index] % 3 === 0 && array[index] % 5 === 0) {
    arrayPush.push('fizzBuzz');
  }
}

function returnFizz(array, index, arrayPush) {
  if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
    arrayPush.push('fizz');
  }
}

function returnBuzz(array, index, arrayPush) {
  if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
    arrayPush.push('buzz');
  }
}

function returnBug(array, index, arrayPush) {
  if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
    arrayPush.push('bug!');
  }
}

function fizzBuzz(arrayNumber) {
  const arrayFizzBuzz = [];
  arrayNumber.forEach((_number, index) => {
    returnFizzBuzz(arrayNumber, index, arrayFizzBuzz);
    returnFizz(arrayNumber, index, arrayFizzBuzz);
    returnBuzz(arrayNumber, index, arrayFizzBuzz);
    returnBug(arrayNumber, index, arrayFizzBuzz);
  });
  return arrayFizzBuzz;
}

// Desafio 9
function encode(stringVowels) {
  const newNumbers = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return stringVowels.replace(/[aeiou]/g, (match) => newNumbers[match]);
}

function decode(stringNumbers) {
  const newLetters = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return stringNumbers.replace(/[12345]/g, (match) => newLetters[match]);
}

// Desafio 10
function techList(arrayLista, name) {
  let listObjects = [];

  for (let index of arrayLista) {
    listObjects.push({
      tech: index,
      name,
    });
  }
  listObjects.sort(function (a, b) {
    return a.tech < b.tech ? -1 : 1;
  });

  if (listObjects.length === 0) {
    return 'Vazio!';
  }
  return listObjects;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
