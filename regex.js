'use strict'

//describe(capitalA, ()=>{
   // test("It should return true if the input has uppercase and lowercase characters (no numbers and symbols) and it should end with capital A else return false ", () => {
     //   expect(capitalA("Hello world A")).toStrictEqual(true);

       // expect(capitalA("Hello world")).toStrictEqual(false);

        //expect(capitalA("Hello world a")).toStrictEqual(false);
   // })
//});


let string = "It should return true if the input has uppercase and lowercase characters (no numbers and symbols) and it should end with capital A else return false"
let regex = /JavaScript/
let result = regex.test(string)
//let capital = /[A-Z]/
//let checkLatter = /[A-Z]/
let checkNumber = /\d/



//console.log(capital.test(string));
//console.log(checkLatter.test(string));
console.log(checkNumber.test(string));
