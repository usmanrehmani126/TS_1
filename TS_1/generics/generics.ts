// console.log("Generics is here");

// interface Obj<T> {
//   name: string;
//   age: number;
//   key: T;
// }

// function getMyObj<T>(obj: Obj<T>) {
//   return console.log(obj);
// }

// console.log(
//   getMyObj<string>({
//     name: "John",
//     age: 20,
//     key: "name",
//   })
// );

class BottleMaker<T>{
    constructor(public key:T){
        console.log(key)
    }
}
let b1 = new BottleMaker<string>("name");
console.log(b1);
