//問題1　回答
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);

//問題2　回答

function isleapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let year = 2020;
if (isleapyear(year)) {
  console.log('うるう年です');
} else {
  console.log('うるう年ではありません');
}

let year = 2021;
if (isleapyear(year)) {
  console.log('うるう年です');
} else {
  console.log('うるう年ではありません');
}