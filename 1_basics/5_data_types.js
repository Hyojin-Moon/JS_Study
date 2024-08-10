/**
 * Data Types
 * JS에는 7개의 타입이 있다
 * 여섯개의 Primitive Type
 * 한개의   Object Type
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언) T/F  0/1
 * 4) Undefined (언디파인드) 정의가 되지 않은 타입
 * 5) Null (널) 정의가 되지 않은 탕미
 * 6) Symbol (심볼) 
 * 7) Object (객체)
 *  -Function
 *  -Array
 *  -Object   
 */


//Number types
const age = 36;
const tempature = -20;
const pi = 3.14;
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-----------------');

/**
 * string Type
 */

const moon = '"문"효진';
console.log(typeof moon);
const ive = "'문효진' 장성용";
console.log(ive);
/**
 * Template Literal 생각한대로 아무거나 값을 입력 할 수 있음
 * 
 * Escaping Character 
 * 1) newline -> \n      엔터
 * 2) tap > \t
 * 3) 백슬래시를 스트링으로 표현하려면 두번 입력
 */

const sunRinMoon = '인정과\n문효진';
const sunRinJang = '인정과\t장성용';
const sunRinKang = '인정과\\강윤구';
console.log(sunRinMoon);
console.log(sunRinJang);
console.log(sunRinKang);

const sunRinMoon2 = `인정과     \\장성용\
문효진`
console.log(sunRinMoon2);
console.log(typeof sunRinMoon2);

const groupName = '인정과';
console.log(groupName + '문효진');
console.log(`${groupName}문효진`);

/**
 * Boolean Type
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 직접 undeFined로 값을 초기화 하는건 지양해야 한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null type
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용한다.
 */

let init = null;
console.log(init);
console.log(typeof init); // 오브젝트로 인식되는건 버그임 개발자피셜
console.log('----------------');
/**
 * 
 * symbol type
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용
 */

const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);
console.log('----------------');
/**
 * object type
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져 있다
 * key:value
 * 
 */
const dictionary = {
    red : '빨간색',
    black : '검정색',
    yellow : '노란색'
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary);

/**
 * array type
 *  값을 리스트로 나열 할 수 있는 타입
 */

const sunRInArray = [
    '문효진',
    '장성용',
    '강윤구',
    '채락현',
];
console.log(sunRInArray);

/**
 * index 개념
 * 0부터 시작한다. 1씩 올라간다.
 */

console.log(sunRInArray[0]);
console.log(sunRInArray[2]);
sunRInArray[0] = '남호영' 
console.log(sunRInArray[0]);
console.log(typeof sunRInArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시한다. C
 * dynamic typing -> 변수의 타입을 명시적으로 ㅅ너언하지 않고 값에 의해 타입을 '추론'한다.
 * JS - dynamic typing
 */