// Усічення рядка
const str = prompt('Enter your string');
const index = prompt('Enter your index number');
const lengthStr = str.slice(0, index);

if (str.length - 1 > index) {
  console.log(lengthStr);
} else {
  console.log(`${str}................`);
}
