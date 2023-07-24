function convertToRoman(num) {
  let romanNumeral = "";

  while (num > 0) {
    if (num < 4) {
      romanNumeral += "I";
      num -= 1;
    } else if (num == 4) {
      romanNumeral += "IV";
      num -= 4;
    } else if (num >= 5 && num < 9) {
      romanNumeral += "V";
      num -= 5;
    } else if (num == 9) {
      romanNumeral += "IX";
      num -= 9;
    } else if (num >= 10 && num < 40) {
      romanNumeral += "X";
      num -= 10;
    } else if (num >= 40 && num < 50) {
      romanNumeral += "XL";
      // 50 = L
      num -= 40;
    } else if (num >= 50 && num < 90) {
      romanNumeral += "L";
      num -= 50;
    } else if (num >= 90 && num < 100) {
      romanNumeral += "XC";
      num -= 90;
    } else if (num >= 100 && num < 400) {
      //100 = C
      romanNumeral += "C";
      num -= 100;
    } else if (num >= 400 && num < 500) {
      romanNumeral += "CD";
      num -= 400;
    } else if (num >= 500 && num < 900) {
      romanNumeral += "D";
      num -= 500;
    } else if (num >= 900 && num < 1000) {
      romanNumeral += "CM";
      num -= 900;
    } else if (num >= 1000) {
      romanNumeral += "M";
      num -= 1000;
    } else {
      num -= 1;
    }
  }

  return romanNumeral;
}

//largest roman number 3999 MMCMXCIX
console.log(convertToRoman(99));

//roman to integer
// I: 1, V:5, X:10, L:50, C:100, D:500, M:1000

let numbersAndNumerals = [
  { number: 1000, roman: "M" },
  { number: 900, roman: "CM" },
  { number: 500, roman: "D" },
  { number: 400, roman: "CD" },
  { number: 100, roman: "C" },
  { number: 90, roman: "XC" },
  { number: 50, roman: "L" },
  { number: 40, roman: "XL" },
  { number: 10, roman: "X" },
  { number: 9, roman: "IX" },
  { number: 5, roman: "V" },
  { number: 4, roman: "IV" },
  { number: 1, roman: "I" }, //12
];

function convert(intNum) {
  let romanLetter = ""; //this variable only exists in my function

  for (let i = 0; i < numbersAndNumerals.length; i++) {
    if (numbersAndNumerals[i].number <= intNum) {
      intNum = intNum - numbersAndNumerals[i].number;
      //10 -  10, 25-10 = 15
      romanLetter = romanLetter + numbersAndNumerals[i].roman;
      //                ''      + 'X';
      i--;
    }
  }
  return romanLetter;
}

console.log(convert(55));
