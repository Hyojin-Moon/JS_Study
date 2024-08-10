
//for,if 만 가지고 오름차순, 내림차순 정렬 

let numbers = [1, 9, 7, 5, 3,];
for(let i =0; i<numbers.length; i++){      // 배열의 총 길이만큼 반복문
    for(let j =i+1; j<numbers.length; j++){ // 가장 작은수를 인덱스에 하나씩 더해가면서 반복문
        if(numbers[i] < numbers[j]){   // 앞수 뒷수 비교
            const temp = numbers[i]; // 낮은 수를 temp에 넣는다
            numbers[i] = numbers[j]; // 높은수는 앞수에 교체
            numbers[j] = temp; // 낮은수는 뒷수로 교체
        }
    }   
}

console.log(numbers);


let numbers2 = [1, 9, 7, 5, 3,];
for(let i =0; i<numbers2.length; i++){
    for(let j =i+1; j<numbers2.length; j++){
        if(numbers2[i] > numbers2[j]){
            const temp = numbers2[i];
            numbers2[i] = numbers2[j];
            numbers2[j] = temp;
        }
    }   
}

console.log(numbers2);
