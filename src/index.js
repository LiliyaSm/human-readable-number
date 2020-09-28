module.exports = function toReadable (number) {
    let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let secondTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let result = ""
    if (number === 0 ){
        return "zero"
    }
    let toRead = number.toString().split("")

  for (let iteration = 1; iteration <= toRead.length; iteration++) {
      //take the one number from the end and every iteration moving by one to beginning
      let currNumber = toRead[toRead.length - iteration];

      //first iteration, the last number
      if (iteration == 1) {
          result = ones[currNumber];
      }
      
      //second iteration, the second from the end
      if (iteration == 2 && currNumber == 0) {
          continue;
      }

      if (iteration == 2 && currNumber == 1) {
          //rewrite result by result of the last number
          result = secondTen[toRead[toRead.length - 1]];
          continue;
      }

      if (iteration == 2) {
          result = tens[currNumber] + " " + result;
      }

      //3nd iteration
      if (iteration == 3 && currNumber == 0) {
          continue;
      }

      if (iteration == 3) {
          result = ones[currNumber] + " hundred " + result;
      }
  }
  return result.trim()
}
