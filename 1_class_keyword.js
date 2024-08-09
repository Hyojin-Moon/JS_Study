/**
 * Class Keyword
 */
class SunrinMembers{
    name ;
    year ;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const hyoJin = new SunrinMembers('문효진', 1989);
console.log(hyoJin);
const seongYong = new SunrinMembers('장성용', 1988);
console.log(seongYong);

console.log(hyoJin.name);
console.log(hyoJin.year);
console.log(hyoJin.sayName());
console.log(seongYong.sayName());

console.log(typeof SunrinMembers); //class는 함수다
console.log(typeof hyoJin); // class로 생성한 인스턴스는 오브젝트다