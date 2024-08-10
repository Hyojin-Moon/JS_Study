/**
 * Object / 객체
 */
//key : value pair
let hyoJin = {
    name : '문효진',
    group : '선린',
    study : function(){
        return `${this.name}이 공부를 합니다.`;
    }
}
console.log(hyoJin);
console.log(hyoJin.name);
console.log(hyoJin['name']);

const key = 'name'
console.log(hyoJin[key]);

console.log(hyoJin.study());

const nameKey = 'name';
const nameValue = '문효진';

const groupKey = 'group';
const groupValue = '선린';

const hyoJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    study: function(){
        return `${this.name}이 공부를 합니다.`;
    }
}
console.log(hyoJin2);
console.log(hyoJin2.study());

hyoJin2['group'] = '선린';
console.log(hyoJin2);

hyoJin2['englishName'] = 'Moon Hyo Jin';
console.log(hyoJin2);

delete hyoJin2['englishName'];
console.log(hyoJin2);

/**
 *  객체의 특징
 * 1)const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2)객체 안의 프로퍼티나 매서드는 변경 할 수 있다.
 */

const sungYong = {
    name : '장성용',
    group : '선린',
}
console.log(sungYong);
//sungYong = {};     1)

sungYong['group'] = '선린';  // 2)
console.log(sungYong);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(sungYong));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(sungYong));

const name = '문효진';
const hyoJin3 = {
    //name : name,  아래랑똑같다
    name,
}
console.log(hyoJin3);
