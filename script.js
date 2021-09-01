// Ejercicio #1
let {admin, name} ={
    name: "John",
};

admin = name,

alert(admin);

alert(`"My name is ${admin}"`);

// Ejercicio #2
const earth = {}
let newUser = {}

// Ejercicio #3
const BIRTHDAY = '18.04.1982';
const AGE = someCode(BIRTHDAY);
// No produciría ningún error el colocarlo con mayúsculas, a no ser que se tenga otra variable con el mismo nombre, pero en minúsculas, pero no es buena práctica o lo correcto al momento de programar. //

// Ejercicio #4
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?
//El resultado son alertas "hello 1", "hello name" y "hello Ilya", respectivamente.//

//Ejercicio #5
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Ejercicio #6
function isEmpty(obj) {
    for (let key in obj) {
    return false;
    }
    return true;
  }

//Ejercicio #7
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum);

//Ejercicio #8
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }