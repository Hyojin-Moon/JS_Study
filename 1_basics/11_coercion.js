/**
 * 타입변환
 * Type Conversion               string = 문자
 * 
 * 1)명시적
 * 2)암묵적
 * 
 */
let age = 36;
//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
//암묵적
let test = age + '';
console.log(typeof test, test);
console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

console.log(98 * 2); // 헷갈리지 않게 해주자 위에는 되는걸 보여주기 위한것
/**
 * 명시적 변환 몇가지 더
 * 명시적으로 스트링으로 바꿀때는 toString 을 사용한다
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));      //정수
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));  //실수 소수
console.log(typeof + '1', +'1');
console.log('-----------------');
/**
 *  Boolean 타입으로의 변환     
 * 많이 쓰임
 * string 안에 값이 있으면 트루로 반환
 */
console.log(!!'x'); //string 안에 값이 있으면 트루로 반환
console.log(!!''); //false 인이유 // 값이 있냐 없냐

console.log(!!0); //false         0은 false다 외워라
console.log(!!'0'); //true 글자로 보니까 true
console.log(!!false);
console.log(!!'false');
console.log(!!undefined);
console.log(!!null);;


console.log(!!{});  // 오브젝트는 값이 없어도 true {}
console.log(!![]);  // array도 true
console.log('-----------------');

/**
 *  1) 아무 글자도 없는 string
 *  2) 값이 없는 경우
 *  3) 0
 * 
 * 모두 false를 반환한다
 */
