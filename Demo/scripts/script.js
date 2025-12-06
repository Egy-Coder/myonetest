// BOM (Browser Object Model)
// - alert()
// - prompt()
// - log()


// alert("Welcome In JS");
// console.log("Welcome In JS");

// var x = prompt("Enter Your Name : ");
// alert("Welcome " + x);
// console.log("Welcome : " , x);


// =================================================================


// DOM (Document Object Model)
// - writeln()
// - getElementById()
// - querySelector()

// document.writeln("Welcome In JS");
// document.writeln("<br>");
// document.writeln("<hr>");
// document.writeln("Welcome In JS");

// document.getElementById("myh").textContent = "Welcome To Js";
// document.querySelector("#myh").textContent = "Welcome To Js";


// =================================================================


// Notes
// 1 - JS is a case sensitive
// 2 - JS Recommend camel Case at variable name
// 3 - JS lose to types
// 4 - you must end any line with semicolon ;
// 5 - ES5 lose to OOP and no need to compile



// =================================================================

// Comment Is Js

// Single Line Comment


/*

multi
line
comment

*/




// ========================= Variable Declaration ==============================



// var

// var x; // undefined
// var x = 10; //number
// x = "ahmed";// string
// x = true; // boolean
// x = 2.5;//number
// x = 'a' // string
// x = new Date();// object
//  x = new Date().toLocaleDateString();// string
// x = new Date().toLocaleTimeString();// string
// x = new Date().toLocaleString();// string
// x = () => { };  // function
// x = null; // object
// x = {} // object
// x = { Id : 10, Name : 'ahmed'}; // object
// x = [10 , 20 , 30]; // object
// x = 20; // number

// console.log(x);
// console.log(typeof(x));


// if(typeof(x) == 'number')
//     alert('is a number');



// Const


// const pi = 3.14;
// pi= 10;
// console.log(pi);



// let (varibale in scope) 

// var x =  20;

// if(true){

//     let x = 30;
//     console.log(x);
// }

//  console.log(_x);





// ========================= Casting Or Parsing (Type Convert) ================

// parseInt
// ParseFloat
// Number
// unary (+)


// var fisrtNumber = prompt('insert first number');
// var secondNumber = prompt('insert second number');


// console.log(parseInt(fisrtNumber) + parseInt(secondNumber));
// console.log(parseFloat(fisrtNumber) + parseFloat(secondNumber));
// console.log(Number(fisrtNumber) + Number(secondNumber));
// console.log(+fisrtNumber + +secondNumber);




// ========================= Operators & Priority ===========================


// Braces - Grouping  (a+b) 
// var x = 2 + (5 - 2);
// console.log(x);

// Postfix x++ , x--
// var x = 1;
// var y = 1 + x++;
// console.log(y);


// Prefix  ++x , --x
// var x = 1;
// var y = 1 + ++x;
// console.log(y);

// Power   a**b
// var x = 2;
// var y = 2;
// console.log(x**y);


// Arithmatic   *,/,%,+,-

// Comparison  >,<,<=,>=,==,===,!=,!==

// var x = 10;

// if(x !== "10")
//     console.log("aaaaaaaaaa");
// else
//     console.log("No Equal");

// Logical && || !

/*  &&  ,  &

True   -   True    ==> True
True   -   False   ==> False
False  -   True    ==> False
False  -   False   ==> False

*/

// var x = 10;
// var y = 20;
// var z = 30;

// var result = x < y & z > x;
// console.log(!result);


/*  || , |

True   -   True    ==> True
True   -   False   ==> True
False  -   True    ==> True
False  -   False   ==> False

*/

// Assignment  += , -= , *= , /= , =



// ========================= Statements ===========================


// Conditional Statements الجمل الشرطيه
// if    ,    if...else    ,   if..else if 'neasted if , cascading if'
// switch..case


// if(true){
//     // logic
// }else if(true){
//     // logic
// }else{
// }


// var x = true ? console.log("true") : console.log("false");


// var op = '+';

// switch(op){

//     case '+' : console.log(1 + 2);
//     break;

//     case '-' : console.log(2 - 1);
//     break;

//     case '*' : console.log(2 * 1);
//     break;

//     default: console.log('N/A');
//     break;
// }





// Iteration Statements الجمل التكرارية
// For   ,   While    
// do..while    


// initial value
// condition
// counter + , -


// for (var i = 1; i <= 5; i++) {
//     console.log(i);
// }


// var i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);




// Jump Statements
// break ==> stop
// continue ==> skip


// for (let index = 1; index <= 4; index++) {
//     if(index == 2)
//         // continue;
//         break;
//     console.log(index);
// }







// Tasks

// Task 1 : Ask the user for their age. If age is 18 or above, show “You can vote”. 
// Otherwise, show “You are too young to vote”.


// Task 2 : Ask the user to enter a number from 1 to 3 
// and display a corresponding fruit.


// Task 3 : Print Odd numbers from 10 to 1


// Task 4 : Ask the user to enter a password until they enter "1234".




//============================== Array ==============================


// Array ==> one variable with Multi Value 


// var numbers = [ 10 , 30 ,  40 , 20 ];

// console.log(numbers[2]);

// numbers.sort();
// numbers.reverse();

// numbers.push(50);
// numbers.unshift(60);

// numbers.pop();
// numbers.shift();

// numbers.forEach((item) => {
//     console.log(item);
// });





// ===================== object ===================

// Object = multi Key With Value

// employee = { Id: 2, Name: 'ahmed', Salary: 3000 };

// console.log(employee);
// alert(JSON.stringify(employee)); // Casting

// console.log(employee.Name);
// console.log(employee);
// console.log(JSON.stringify(employee));
// alert(JSON.stringify(employee));



// ===================== Json (Data Formatting) ===================


// Json = Array Of Objects (Data Format)

// var employee = [{ Id : 2 , Name : 'ahmed' , Salary : 3000 },
//         { Id : 2 , Name : 'ahmed' , Salary : 3000 },
//         { Id : 2 , Name : 'sara' , Salary : 3000 },
//         { Id : 2 , Name : 'ahmed' , Salary : 3000 }]

// console.log(x[2].Name);

// var _db = {
//     Employees: [
//         { Id: 2, Name: 'ahmed', Salary: 3000 }, 
//         { Id: 2, Name: 'ahmed', Salary: 3000 },
//         { Id: 2, Name: 'ahmed', Salary: 3000 }
//     ],
//     Departments: [
//         { Id: 2, Name: 'ahmed', Salary: 3000 }, 
//         { Id: 2, Name: 'ahmed', Salary: 3000 },
//         { Id: 2, Name: 'ahmed', Salary: 5000 }
//     ],
//     Projects: [
//         { Id: 2, Name: 'ahmed', Salary: 3000 }, 
//         { Id: 2, Name: 'ahmed', Salary: 3000 },
//         { Id: 2, Name: 'ahmed', Salary: 3000 }
//     ]
// };


// console.log(_db.Departments[2].Salary);



// ===================== XML (Data Formatting) ===================


// <Employees>

// <id>1</id>
// <name>ahmed</name>
// <salary>2000</salary>

// <id>1</id>
// <name>ahmed</name>
// <salary>2000</salary>

// <id>1</id>
// <name>ahmed</name>
// <salary>2000</salary>

// <id>1</id>
// <name>ahmed</name>
// <salary>2000</salary>

// </Employees>



// ===================== Functions ===================


// function myFun(){
//     alert("Welcome");
// }

// myFun();


// function sum(x , y){
//     var result = x + y;
//     return result;
// }


// var x = sum(10,2);
// alert(x);

// ===================== Debugging ===================

// function display(){
//     debugger;
//     var result = sum(2 , 3);
//     console.log("the sum is : " , result);
// }

// display();



// function sum(x = 0, y = 0){
//     console.log(x + y);
// }

// sum();



// function sum(x,y){

//     if(typeof(x) == "undefined")
//         x = 0;

//     if(typeof(y) == "undefined")
//         y = 0;

//     console.log(x + y);
// }

// sum();


// ===================== Events ===================

// Mouse
//OnClick
//Ondblclick
//OnMouseenter
//OnMouseLeave

//Keyboard
//OnkeyDown
//OnKeyUp
//OnKeyPree

//OnChange ==> Dropdown
//OnFocus
//Onplur


// function Display(){
//     var name = prompt("Enter Your Name");
//     console.log('Welcome Mr : ' , name);
// }



// function display1(){
//     console.log("Key down !");
// }

// function display2(){
//     console.log("Key up !");
// }

// function display3(){
//     console.log("Key press !");
// }


// function display4(){
//     console.log("Changed !");
// }

// function display5(){
//     console.log("Focus !");
// }

// function display6(){
//     console.log("blur !");
// }



// ===================== Tasks : DOM & BOM ===================



function getSum() {

    var input1 = document.getElementById('txt1');
    var input2 = document.getElementById('txt2');
    var input3 = document.getElementById('txt3');

    var sum = +input1.value + +input2.value;

    input3.value = sum;

    input1.value = "";
    input2.value = "";

    input1.focus();
}


function getFullName() {

    var input1 = document.getElementById('txt1');
    var input2 = document.getElementById('txt2');
    var input3 = document.getElementById('txt3');

    var fullName = input1.value + ' ' + input2.value;

    input3.value = fullName;

    input1.value = "";
    input2.value = "";

    input1.focus();

}



function getResult() {

    var input1 = document.getElementById('txt1');
    var input2 = document.getElementById('txt2');
    var input3 = document.getElementById('txt3');

    var result = +input1.value + +input2.value;

    if (isNaN(result))
        result = input1.value + ' ' + input2.value;

    input3.value = result;

    input1.value = "";
    input2.value = "";

    input1.focus();
}


function AddCourse() {

    var input = document.getElementById('txt1');
    var list = document.getElementById('mylist');

    var course = input.value;

    if (!isNaN(course))
        alert('insert valid course name');
    else {
        // <li>  </li>
        var li = document.createElement('li');

        // <li> C# </li>
        li.textContent = course;

        // <ol><li> C# </li></ol>
        list.append(li)

        input.value = "";
        input.focus();
    }
}




function AddCountry() {

    var input = document.getElementById('txt1');
    var list = document.getElementById('mylist');

    var country = input.value;

    if (!isNaN(country))
        alert('insert valid country name');
    else {
        // <option>  </option>
        var option = document.createElement('option');

        // <option> egypt </option>
        option.textContent = country;

        list.append(option)

        input.value = "";
        input.focus();
    }
}



function AddEmployee() {

    var input1 = document.getElementById('txt1');
    var input2 = document.getElementById('txt2');
    var input3 = document.getElementById('txt3');

    var table = document.querySelector('#tbl tbody');
    var list = document.getElementById('mylist');

    var id = input1.value;
    var name = input2.value;
    var salary = input3.value;
    var country = list.value;


    if (id == "" || name == "" || salary == "" || country == "--select--")
        alert('insert valid employee');
    else {

        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.textContent = id;

        var td2 = document.createElement('td');
        td2.textContent = name;

        var td3 = document.createElement('td');
        td3.textContent = salary;

        var td4 = document.createElement('td');
        td4.textContent = country;

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);

        table.append(tr);

        input1.value = "";
        input2.value = "";
        input3.value = "";
        list.value = "--select--";

        input1.focus();
    }

}


function Action() {
    alert('Clicked !');
}


function AddClick() {
    var btn = document.getElementById('btn1');
    btn.addEventListener('click', Action);
}

function RemoveClick() {
    var btn = document.getElementById('btn1');
    btn.removeEventListener('click', Action);
}


function On() {
    var img = document.getElementById('myImg');
    img.src = "imgs/pic_bulbon.gif";
}


function Off() {
    var img = document.getElementById('myImg');
    img.src = "imgs/pic_bulboff.gif";
}



function showPassword() {

    var input = document.getElementById('txt1');
    var span = document.getElementById('spn');
    var checkbox = document.getElementById('ck1');

    if (checkbox.checked == true) {

        input.setAttribute('type', 'text');
        span.setAttribute('style', 'color:red');

    } else {

        input.setAttribute('type', 'password');
        span.setAttribute('style', 'color:black');
    }
}




function visitLinks() {

    var checkbox1 = document.getElementById('ck1');
    var checkbox2 = document.getElementById('ck2');
    var checkbox3 = document.getElementById('ck3');

    var google = checkbox1.checked;
    var yt = checkbox2.checked;
    var fb = checkbox3.checked;

    if (google == false && yt == false && fb == false)
        alert('check at least one site');


    if (google == true)
        window.open('https://www.google.com', '_blank');


    if (yt == true)
        window.open('https://www.youtube.com', '_blank');


    if (fb == true)
        window.open('https://www.facebook.com', '_blank');

}





// var h1 = document.getElementById('myh1');

// setInterval(function(){

//     h1.textContent = new Date().toLocaleString();

// } , 1000 );