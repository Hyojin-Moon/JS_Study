/**
 * Static Keyword //클래스 자체에 귀속, 인스턴스에 귀속되지 않음
 */

class SunrinMembers{
    name;
    year;

    static groupName = '선린';

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    static returnGroupName(){
        return '인정과';
    }
}

const hyoJin = new SunrinMembers('문효진', 1989);
console.log(hyoJin);
console.log(SunrinMembers.groupName);
console.log(SunrinMembers.returnGroupName());

/**
 * Factory constructor
 */
