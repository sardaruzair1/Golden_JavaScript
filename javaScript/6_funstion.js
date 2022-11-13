function getcube(number) {
    alert(number * number * number);
}

// returns the values in javascript function


function getInfo() {
    return "hello javascript! How r u?";
}
document.write(getInfo());


// javascript object  constructor function

 // In JavaScript, the purpose of Function constructor is to create a new Function object. It executes the code globally. However, if we call the constructor directly, a function is created dynamically but in an unsecured way.
 
var add = new Function("num1","num2","return num1+num2");
document.writeln(add(2,5)); 

// example for object counstructor function
function student(fname,lname,age,cls){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.cls = cls;
}

let student1 = new student("sardar","uzair",18,12);
console.log(student1)


const myName = (a,b) => {
    return a+b;
}
console.log(myName(2,2))


// apply() 	    It is used to call a function contains this value and a single array of arguments.
// bind() 	   It is used to create a new function.
// call() 	   It is used to call a function contains this value and an argument list.
// toString() It returns the result in a form of a string.