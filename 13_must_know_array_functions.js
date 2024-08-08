/**
 * Array Function Methods(클래스안에 귀속되는 함수)
 */
let sunrinMembers = [
    '문효진',
    '장성용',
    '강윤구',
    '채락현'
];
console.log(sunrinMembers);
console.log('------------------');
//push() 마지막값에 넣는다
sunrinMembers.push('인정과');
console.log(sunrinMembers.push('인정과'));
console.log(sunrinMembers);
console.log('------------------');
//pop()  끝에값 반환
console.log(sunrinMembers.pop());
console.log(sunrinMembers);
console.log('------------------');
//shift() 첫번쨰값 반환
console.log(sunrinMembers.shift());
console.log(sunrinMembers);
console.log('------------------');
//unshift() push랑 같으나 첫번째에 넣는다
console.log(sunrinMembers.unshift('문효진'));
console.log(sunrinMembers);
console.log('------------------');
//splice 삭제
console.log(sunrinMembers.splice(0, 3));
console.log(sunrinMembers);
console.log('------------------');

sunrinMembers = [
    '문효진',
    '장성용',
    '강윤구',
    '채락현'
];
//concat() push랑 기능은 같으나 새로운 Array를 만들어서 반환해줌 기존 Array에는 메모리공간에 추가되지는 않음.
console.log(sunrinMembers.concat('인정과'));
console.log(sunrinMembers);
console.log('------------------');
// silce() 잘라서 출력 +1 만큼해야함   마찬가지로 Array를 변경하지 않음
console.log(sunrinMembers.slice(0, 3));
console.log(sunrinMembers);
console.log('------------------');

// spread operator
let sunrinMembers2 = [
    ...sunrinMembers,
];
console.log(sunrinMembers2);

let sunrinMembers3 = [
    sunrinMembers,
];
console.log(sunrinMembers3);
console.log('------------------');

let sunrinMembers4 = sunrinMembers;
    
console.log(sunrinMembers4);
console.log(sunrinMembers4 === sunrinMembers);

console.log([
    ...sunrinMembers,
] === sunrinMembers);
console.log('------------------');

// join() 모든 값들을 string으로 엮을때
console.log(sunrinMembers.join());
console.log(sunrinMembers.join('/'));
console.log(sunrinMembers.join(', '));
console.log('------------------');

//sort() 오름차순 정렬
sunrinMembers.sort();
console.log(sunrinMembers);
//reverse() 내림차순
console.log(sunrinMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);
// a,b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
})
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);
console.log('------------------');

// map() array 전체를 돈다.
console.log(sunrinMembers.map((x) => x));
console.log(sunrinMembers.map((x) => `인정과 : ${x}`));
console.log(sunrinMembers.map((x) => {
    if(x === '문효진'){
        return `인정과 : ${x}`;
    }else{
        return x;
    }
}));

console.log(sunrinMembers);
console.log('------------------');

// filter() true 값을 전부 출력
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
console.log(numbers.filter((x) => x % 2 === 0));

// find() 가장 첫번째로 true인 값을 출력
console.log(numbers.find((x) => x % 2 === 0));

// findindex() find랑 똑같은데 index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() 리스트의 모든값들을 다 순회할때까지 반복
console.log(numbers.reduce((p, n) =>p + n, 0));

/** reduce() 함수
 *  
 */