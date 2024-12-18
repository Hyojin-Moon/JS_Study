/**
 * Operators
 * 연산자
 */

/**
 * 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('-------------');

console.log(10 * (10+10));

//증감
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);
console.log('-----------');
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);
result = number ++;
console.log(result, number);
result = ++ number;
console.log(result, number);
// 현실에서 오퍼레이터를 앞에다 두는 경우는 거의 없다. 뒤에 두고 하자

/**
 *  숫자타입이 아닌 타입에 +,- 를 사용하면?
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '문효진';
// Nan -> not a number
console.log(+sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);
number += 10;
console.log(number);
number -= 10;
console.log(number);
number *= 10;
console.log(number);
number /= 10;
console.log(number);
number %= 10;
console.log(number);

/**
 * 비교연산자
 * 1)값의 비교 - 알고는 있어야 하지만 필요없음
 * 2)값과 타입의 비교 - 일반적으로 쓰임
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5'); //타입이 다르면 false로 보는
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
//실무에서는 === 로
console.log('--------------');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('--------------');
/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
/**
 * 삼항 조건 연산자 (ternary operator)
*/
console.log(10 < 0 ?'10이 0보다 크다': '10이 0보다 작다');
console.log('--------------');
/**
 * 논리연산자
 * 
 * 1) &&
 * 2) ||
 */
// &&조건은 모두 true 여야 true를 반환한다.
console.log(true && true)
console.log(true && false);
console.log(false && true);
console.log(false && false);

// ||는 하나만 true여도 ture를 반환.
console.log(true || true)
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(10 > 1 && 20 > 10); // true
console.log(10 > 1 && 20 > 30); // false
console.log(10 > 1 || 20 > 30); // true
console.log('--------------');
/**
 * 단축평가(short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

console.log(true && 'sunrin');
console.log(false && 'sunrin');
console.log(true || 'sunrin');
console.log(false || 'sunrin');
console.log('--------------');
console.log(true && true && 'sunrin');
console.log(true && false && 'sunrin');
console.log(true || true || 'sunrin');
console.log(true || false || 'sunrin');
console.log('--------------');

/**
 * 지수 연산자
 */
console.log(2 ** 2); //2의 2승
/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '문효진';
console.log(name);

let name2;
name2 ??= '문효진'
console.log(name2);
