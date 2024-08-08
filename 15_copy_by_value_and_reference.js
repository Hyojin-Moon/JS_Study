/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

//copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);
console.log('---------------');

clone += ' 문효진 입니다.';
console.log(original);
console.log(clone);
console.log('---------------');

//copy by reference   
let originalObj = {
    name : '문효진',
    group : '선린',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '인정과'
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);
console.log('---------------');

const hyoJin1 = {
    name: '문효진',
    group: '인정과',
};
const hyoJin2 = hyoJin1;
const hyoJin3 = {
    name: '문효진',
    group: '인정과',
};

console.log(hyoJin1 === hyoJin2); //true
console.log(hyoJin1 === hyoJin3); //false
console.log(hyoJin2 === hyoJin3); //false
console.log('---------------');

/**
 *  spred Operator
 */

const hyoJin4 = {
    ...hyoJin3
};
console.log(hyoJin4);
console.log(hyoJin4 === hyoJin3);

const hyoJin5 = {
    year : 1989,
    ...hyoJin3,
};
console.log(hyoJin5);

const hyoJin6 = {
    name: '선린',
    ...hyoJin3,
    name: '선린',
};
console.log(hyoJin6);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);
