function binaryAgent(str) {

  let arr = str.split(" ");

  //console.log(arr);

  let newArr = arr.map((x) => String.fromCharCode(parseInt(x, 2)));

  //console.log(newArr);

  let newStr = newArr.join("");

  //console.log(newStr);

  return newStr;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Challenge Completed