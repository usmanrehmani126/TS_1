// functions like when i call it it will only  run means jab ma call kro tab hi call hona ha or ya aik asa code jisi ma jab call kro vo calll hojya
// 2nd a piece of which is use for reusebility
// function addNumber()
// //  here we can add what the function will return like is it return string,number or whatever else
//    :string {
//     return "THIS RETURNS A STRING TO ME"
//    }
// function kuchBReturnNhiKraGa():void{
//     return console.log("AM RETURNING FROM HERE")
// }
// console.log("object")
// kuchBReturnNhiKraGa()
// function takeParams(name:string,cb:(value:string)=>void){
//     cb("hello")
// }
// console.log(takeParams("Haaji Usman",(value)=>{
//     console.log("I AM CALL THE VALUE",value)
// }))
// function getPARAMS(name: string, age: number, gender?: string) {
//   console.log({
//     name: name,
//     age: age,
//     gender: gender
//   });
// }

// console.log(getPARAMS("Haji Usman",22))
function restOperator(...args:any){
   const value=args[1]
    console.log(args[2],value)
}
console.log(restOperator(1,"hello",true))
