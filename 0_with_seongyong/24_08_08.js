console.log('반가워 장회장');
console.log('------------');

const sunrinMembers = ['문효진', '장성용', '강윤구', '채락현']; 
for(let key in sunrinMembers){
    console.log(key); // index 값을 가져옴
    console.log(`${key}:${sunrinMembers[key]}`);

``
""
''

if('a' === "a") {

}

    const a = 'hello';
    const n = 1;
    console.log(`${a}${n}`)
    console.log(key + ': ' + sunrinMembers[key]);

    // back tick (빽틱)


}

console.log('---------------');

let star = '*'
let square = '';
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        square += star;
    }      
    
}
    console.log(square);
    console.log('---------------');

    /**
     * 
     * @param {
     * } x 
     * @param {*} y 
     * @returns 
     */


    function multiply_sy(x, y) { 
        const temp = x * y;
        if(temp > 10) {
            console.log('너무크다~');
        }
        return temp; 
    }; /* === */ 

    const variable_function = (x, y) => { // arrow function, anonymous function, 익명함수 - 이름이 없는 함수;
        const temp = x * y;
        if(temp > 10) {
            console.log('너무크다~');
        }
        return temp; 
    }; /* === */ 


    const arrow_function = (x, y) => x * y; // <== 표현식(expression);

    multiply_sy(3, 4)

    const multiply2 = (x, y) => {
        return x * y;
    }
    console.log(multiply2(3, 4));
    
    const multiply3 = (x, y) => x * y;
    console.log(multiply3(4, 5));
    
    const multiply4 = x => x * 2;
    console.log(multiply4(2));
    
    const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z} `;
    console.log(multiply5(2)(5)(7));
    
    function multiply6(x){
        return function(y){
            return function(z){
                return `x: ${x} y: ${y} z: ${z} `
            }
        }
    }
    console.log(multiply6(3)(4)(5));
    
    const multiplyTwo = function(x, y){
        return x * y;
    }
    console.log(multiplyTwo(3, 4));
    
    const multiplyThree = function(x, y, z){
        console.log(arguments);
        return x * y * z;
    }
    console.log('---------------');
    console.log(multiplyThree(4, 5, 6));
    
    const multiplyAll = function(...argument){
        return Object.values(argument).reduce((a, b) => a * b, 1);
    }
    console.log(multiplyAll(3,4,5,6,7,8,9,10));
    
    // immediately invoked function 즉시실행함수
    (function(x, y){
        console.log(x * y);
    })(4, 5)
    
    console.log(typeof multiply);
    console.log(multiply instanceof Object);  // 오른쪽과 같은 타입인가를 비교할때


    //---

    /**
     * 
     */