/**
 * Getter and Setter
 */

class SunrinMembers{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    /**1)데이터를 가공해서 새로운 데이터를 반환할 때
     * 2)private한 값을 반환할 때
     */
    get nameAndYer(){
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name = name;
    }
}
const hyoJin = new SunrinMembers('문효진', 1989);
console.log(hyoJin);
console.log(hyoJin.nameAndYer);

hyoJin.setName = '장성용';
console.log(hyoJin);

class SunrinMembers2{
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const hyoJin2 = new SunrinMembers2('문효진', 1989);
console.log(hyoJin2);
console.log(hyoJin2.name);

hyoJin2.name = '선린';
console.log(hyoJin2.name);