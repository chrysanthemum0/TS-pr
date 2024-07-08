// 변수 타입 지정 가능 -> string, number, booleanm, null etc.. 
var name12 = 'kim';
// array 타입 지정 
var name1 = ['kim', 'park'];
// object 타입 지정 name--> ? 는 값이 들어올 수 있고 없을 수 도 있다고 옵션주는 것
var nameObject = { name: 'kim' };
//Union Type string과 number 둘다 가능 
var nameKIM = 'KIM';
var nameSpace = 123;
// function --> 이 함수는 파라미터로 number returnr값으로 무조건 number
function add(x) {
    return x * 2;
}
var john = [123, false];
var customers = {
    name: 'KIM',
    age: 20,
    gender: true,
};
// class
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
