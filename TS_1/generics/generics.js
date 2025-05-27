console.log("Generics is here");
interface Obj<T> {
  name: string;
  age: number;
  key: T;
}
function getMyObj<T>(obj: Obj<T>) {
  return console.log(obj);
}
console.log(
  getMyObj<string>({
    name: "John",
    age: 20,
    key: "name",
  })
);
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
        console.log(key);
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("name");
console.log(b1);
