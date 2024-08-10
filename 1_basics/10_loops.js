/**
 * Loops
 * 
 * 1) for (선언초기;조건식;증감식)
 * 2) while
 */
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log('-------------');
for(let i = 10; i > 0; i--){
    console.log(i);
}
console.log('-------------');
for(let i = 0; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}
console.log('-------------');
//*을 이용해서 6x6의 정사각형을 출력해라
let square = ''
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        square += '*';
    }      
    square += '\n'; 
}
    console.log(square);
console.log('-------------');

/**
 *  key:value
 * for...in
 * object 에서 사용하면 key값을 가져올 수 있고
 * array 에서 사용하면 index 값을 가져올 수 있다.
 */
const hyoJin = {
    name: '문효진',
    year: 1989, 
}
for(let key in hyoJin){
    console.log(key);
}
console.log('-------------');

const sunrinMembers = ['문효진', '장성용', '강윤구', '채락현']; 
for(let key in sunrinMembers){
    console.log(key); // index 값을 가져옴
    console.log(`${key}:${sunrinMembers[key]}`);
}
console.log('-------------');
/**
 * for...of
 * array에서 사용할 수 있다.
 */

for(let value of sunrinMembers){
    console.log(value);
}
console.log('-------------');
/**
 * while
 */
let number = 0;
while(number < 10){
    number ++;
}
console.log(number);

/**
 * do...while 안씀
 */
number = 0;
do{
    number ++;
}while(number < 10);
console.log(number);

console.log('-------------');
/**
 * break
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log('-------------');
number = 0;
while(number < 10){
    if(number === 5){
        break;
    }
    number ++;
    console.log(number);
}
console.log('-------------');
/**
 * continue
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}
number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }
    console.log(number);
}

console.log('-------------');







