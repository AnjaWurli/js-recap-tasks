function zipStrings(strA, strB) {
  let result = "";
  let length = Math.max(strA.length, strB.length);

  strA = strA.split("");
  strB = strB.split("");

  for (let i = 0; i < length; i++) {
    if (!strA[i]) {
      result += strB[i];
    } else if (!strB[i]) {
      result += strA[i];
    } else {
      result += strA[i] + strB[i];
    }
  }
  return result;
}
