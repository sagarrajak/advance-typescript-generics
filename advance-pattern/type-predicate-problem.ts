const numbers = [1, undefined, 15, 345, undefined];

const onlyNumber = numbers.filter((num): num is number => Boolean(num));
