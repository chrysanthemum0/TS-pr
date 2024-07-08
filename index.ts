
// 변수 타입 지정 가능 -> string, number, booleanm, null etc.. 
let name12:string = 'kim';

// array 타입 지정 
let name1:string[] = ['kim', 'park'];

// object 타입 지정 name--> ? 는 값이 들어올 수 있고 없을 수 도 있다고 옵션주는 것
let nameObject: {name? : string} = {name : 'kim'};

//Union Type string과 number 둘다 가능 
let nameKIM:string | number = 'KIM';

//Type alias : 타입은 변수에 담아 쓸 수 있음
type Name = string | number;

let nameSpace:Name = 123;

// function --> 이 함수는 파라미터로 number returnr값으로 무조건 number
function add(x: number) : number{
    return x * 2;
}

//첫 번째는 number, 둘 째는 boolean이 들어와야함 array에 쓸 수 있는 tuple  타입 
type Member = [number, boolean];
let john:Member = [123, false];

type MemberOj = {
    name : string;
    age : number;
    gender : boolean;
}

let customers: MemberOj = {
    name : 'KIM',
    age : 20,
    gender : true,
}

// class
class User {
    name;
    constructor(name: string){
        this.name = name;
    }
}