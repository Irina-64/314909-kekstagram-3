// Проверяет, что длина строки не превышает максимально допустимую
const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

// Проверяет, является ли строка палиндромом (без учёта регистра и пробелов)
const isPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
};

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false

// Извлекает из строки (или числа) все цифры и возвращает их как целое положительное число
const extractNumber = (value) => {
  const string = value.toString();
  let digits = '';

  for (const character of string) {
    const digit = parseInt(character, 10);
    if (!Number.isNaN(digit)) {
      digits += digit;
    }
  }

  return digits === '' ? NaN : parseInt(digits, 10);
};

extractNumber('2023 год'); // 2023
extractNumber('ECMAScript 2022'); // 2022
extractNumber('1 кефир, 0.5 батона'); // 105
extractNumber('агент 007'); // 7
extractNumber('а я томат'); // NaN
extractNumber(2023); // 2023
extractNumber(-1); // 1
extractNumber(1.5); // 15
