const array = ["aaa", "bbb", "ccc", "ddd", "eee"];

const array2 = array.map((item, index, array) => {
  return `${item} : ${array}[${index}] `;
});

console.log(array2);
