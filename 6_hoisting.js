/**
 * Hoisting
 * 
 */
console.log('Hello');
console.log('World');

/**
 * hoisting 은 무엇인가?
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * 
 * let과 const를 써야하는 이유
 * 값이 초기화 되기 전에 값을 미리 가져오는 버그를 방지 var는 가져와버림
 */
//console.log(name);
//var name = '문효진';
//console.log(name);

//var name;
//console.log(name);
//name = '문효진';
//console.log(name);

console.log(sunRin); //선언은 되어있지만 할당이 안됨
let sunRin = '선린'; 

