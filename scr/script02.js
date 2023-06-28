// Конвертація у string
const bool = true;
const bboliang = String(bool);
console.log(typeof bboliang, `- ${bboliang}`);

const num = 1000;
const numm = String(num);
console.log(typeof numm, `- ${numm}`);

const nul = null;
const nuL = String(nul);
console.log(typeof nuL, `- ${nuL}`);

// Вирішив трохи скороченно, якщо так можливо і не буде помилки !
const undefiNed = undefined;
console.log(typeof String(undefiNed), `- ${undefiNed}`);

// Конвертація у number

const value1 = '123a';
console.log(typeof parseFloat(value1), `- ${value1}`);

const value2 = '1000';
console.log(typeof Number(value2), `- ${value2}`);

const value3 = null;
console.log(typeof +value3, `- ${value3}`);

const value4 = undefined;
console.log(typeof Number(value4), `- ${value4}`);

const value5 = false;
console.log(typeof +value5, `- ${value5}`);

// Конвертація у boolean

const boollean_1 = null;
const boollean_01 = Boolean(boollean_1);
console.log(typeof boollean_01, boollean_01);

const boollean_2 = undefined;
const boollean_02 = Boolean(boollean_2);
console.log(typeof boollean_02, boollean_02);

const boollean_3 = '';
const boollean_03 = Boolean(boollean_3);
console.log(typeof boollean_03, boollean_03);

const boollean_4 = 0;
const boollean_04 = Boolean(boollean_4);
console.log(typeof boollean_04, boollean_04);

const boollean_5 = ' ';
const boollean_05 = Boolean(boollean_5);
console.log(typeof boollean_05, boollean_05);

const boollean_6 = 1000;
const boollean_06 = Boolean(boollean_6);
console.log(typeof boollean_06, boollean_06);

const boollean_7 = '1200';
const boollean_07 = Boolean(boollean_7);
console.log(typeof boollean_07, boollean_07);
