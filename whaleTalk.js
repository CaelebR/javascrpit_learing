let input = "hi my name is caeleb";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      //console.log(input[i]);
      resultArray.push(vowels[j]);
      if (input[i] === "e") {
        resultArray.push(vowels[j]);
      }
      if (input[i] === "u") {
        resultArray.push(vowels[j]);
      }
    }
  }
}
//console.log(resultArray)
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
