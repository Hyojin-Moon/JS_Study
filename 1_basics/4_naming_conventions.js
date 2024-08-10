/**
 * Naming Conventions
 * 
 * 변수 이름 지정할 때
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자,숫자를 모두 사용할 수 있다.
 * 2) 특수기호는 언더스코어와 달러만 사용 할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다. 
 *    ex) 1name
 * 4) 키워드는 변수명으로 사용할 수 없다. 
 *    ex) let let = 'let'; 금지
 * 
 */

var moon = '문터프';
let $moon = '문효진';
const _moon = '무뇨진';
console.log(moon);
console.log($moon);
console.log(_moon);

//안됨 ↓
//let 1name = 'no';
//let const = 'MOON';

/**
 * Naming Conventions2
 * 
 * 1) camelCase - 대부분의 언어에서 사용  
 * 2) snake_Case - 파이썬?
 * 3) PascalCase - C# 마이크로소프트 계열의 언어 -쓰지말자
 */

const moonHyoJin ='문효진';
console.log(moonHyoJin);