function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {  
        pizza++;
    }
    return pizza;
}
// while 문은 false 일 경우 끝내기 때문에 나머지가 0인것을 표기안해도 아래와 같은 로직임.

/////////////////////////////////////////////
function solution(n) {
    var answer = 0;
    let pizza = 1;
    while(true){
        if(pizza * 6 % n === 0){
            return pizza;
        }
        pizza = pizza + 1;
    }
    return answer;
}

///
function solution(numbers) {
    let sum = 0;
    let cnt = 0;
    while(cnt < numbers.length){
    sum = sum + numbers[cnt];
        cnt = cnt + 1;
    }
    
    return sum / numbers.length;
}
//// 같은 식을 for문으로
function solution(numbers) {
    let sum = 0;
    let i = 0;
    for(i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        i = i++;
    }
    return sum / numbers.length;
}

// 최빈값 구하기
function solution(array) {
    let choibin = array[0];
    let choibinCount = 0;
    let k;
    for(let i = 0; i < array.length; i++){ 
        k = 0;
        for(let j = i; j < array.length; j++){ 
            if (array[i] === array[j]){ 
                k = k+1; // 1
            }
        }
        if (k === choibinCount){  
            choibin = -1; 
        }
        else if (k > choibinCount){ 
            choibinCount = k; 
            choibin = array[i]; 
        }
    }
    return choibin;
}

//