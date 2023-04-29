/*------------------------------------------------fundamental------------------------------------------------*/
// console.log("I don't like pizza");
// console.log("I like hamburger");
// // window.alert("Fuck youuuuu");


// let age = 20;
// let firstName = "Duy";
// let lastName = "Thai";
// let student = false;
// console.log("Hello " + firstName + " " + lastName)
// console.log("You are now " + age + " years old");
// console.log("Enroll: " + student);


// document.getElementById("p1").innerHTML = "Hello " + firstName + " " + lastName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = student;


// let student = 20;
// let extraStudent = student % 3;
// student+=1;
// console.log("Student: " + student);
// console.log("ExtraStudent: " + extraStudent);


// let username = window.prompt("What's your name?");
// let username;
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
// }


// let age = window.prompt("How old are you?");
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log("Happy birthday! You are "+ age + " years old");


// let x,y,z;
// x = Number("3.14");
// y = String(3.14);
// z = Boolean("");
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);


// let user = window.prompt("Enter your username");
// let password = window.prompt("Enter your password");
// console.log(user);
// console.log(password);


// const PI = 3.1415926;
// let r;
// let c;
// r = window.prompt("Enter the radius of the circle: ");
// r = Number(r);
// c = 2*PI*r;
// console.log("The circumference of the circle is " + c);


// let x = 3.14;
// let y = 5;
// let z = 9;
// let max;
// let min;
// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 3);
// x = Math.sqrt(x);
// x = Math.abs(x);
// max = Math.max(x, y, z);
// max = Math.min(x, y, z);
// x = Math.PI;
// console.log(x);


// let a, b, c;
// a = window.prompt("Enter size a");
// a = Number(a);
// b = window.prompt("Enter size b");
// b = Number(b);
// c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log("size c: "+ c);


// document.getElementById("submit").onclick = function () {
//     let a, b, c;
//     a = document.getElementById("aTextBox").value; a = Number(a);
//     b = document.getElementById("bTextBox").value; b = Number(b);
//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     document.getElementById("cLabel").innerHTML = "Size c: "+ c;
// }


// let username = "        Dao Duy Thai      ";
// let phoneNumber = "079-6428-094";
// // console.log(username.length);
// // console.log(username.charAt(4));
// // console.log(username.indexOf("D", 2));
// // console.log(username.lastIndexOf("D"));
// // console.log(username.trim());
// // console.log(username.toLowerCase());
// // console.log(username.toUpperCase());
// console.log(phoneNumber.replaceAll("-","."));


// let fullName = "Dao Duy Thai";
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1);
// console.log(fullName);
// console.log(firstName);
// console.log(lastName);


// let userName = "duythai";
// let letter = userName.charAt(0).toUpperCase();
// console.log(letter);


// let age = window.prompt("You age:");
// if(age >= 18){
//     console.log("You are an adult");
// }else if(age < 0){
//     console.log("You haven been born yet");
// }


// else{
//     console.log("You are not an adult");
// }
// let online = true;
// if(online){
//     console.log("You are online");
// }else{
//     console.log("You are offline");
// }


// document.getElementById("myButton").onclick = function () {
//     const myCheckbox = document.getElementById("myCheckbox")
//     const visaBt = document.getElementById("visaBt");
//     const mastercardBt = document.getElementById("mastercardBt");
//     const paypalBt = document.getElementById("paypalBt");
//     if (myCheckbox.checked) {
//         console.log("You are subscribed");
//     } else {
//         console.log("You are not subscribed");
//     }
//     if (visaBt.checked) {
//         console.log("You are using Visa");
//     } else if (mastercardBt.checked) {
//         console.log("You are using Mastercard");
//     } else if(paypalBt.checked){
//         console.log("You are using Paypal");
//     }else{
//         console.log("You must choose a payment method");
//     }
// }


// let grade = window.prompt("Enter your grade");
// switch (true) {
//     case grade == "A":
//         window.alert("Excellent");
//         break;
//     case grade == "B":
//         window.alert("Good");
//         break;
//     case grade == "C":
//         window.alert("Average");
//         break;
//     case grade == "D":
//         window.alert("Poor");
//         break;
//     case grade == "F":
//         window.alert("Fail");
//         break;
//     default:
//         window.alert(grade + " is not appropriate!");
// }


// while(1==1){
//     console.og("Help, I am stuck in a loop!");
// }


// let username;
// do{
//     username = window.prompt("Enter your username");
//     if(username == "" || username==null){
//         window.alert("You must enter a username");
//     }
// }while(username == "" || username==null)

// window.alert("Welcome " + username);

// for(let count = 100; count > 0; count--){
//     console.log(count);
// }


// let row = window.prompt("Enter the number of rows");
// let col = window.prompt("Enter the number of columns");
// for(let i = 0; i < row; i++){
//     for(let j = 0; i < col; j++){
//         document.getElementById("myRectangle").innerHTML += j;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }


// console.log("Hello world");
// function setup(){
//     let username = window.prompt("Enter your username");
//     let age = window.prompt("Enter your age");
//     happyBirthDay(username, age);
// }
// function happyBirthDay(username, age){
//     console.log("Happy birthday to "+ username);
//     console.log("You are now "+age+" years old");
// }
// setup();


// let area, width, height;
// width = window.prompt("Enter the width of the rectangle");
// height = window.prompt("Enter the height of the rectangle");
// area = getArea(width, height);
// console.log(area);
// function getArea(width, height){
//     return width*height;
// }


// let adult = checkAge(11);
// function checkAge(age){
//     return age >=18? true:false;
// }
// console.log(adult);
// checkWinner(true);
// function checkWinner(win){
//     win ? console.log("You win"):console.log("You lose");
// }


// let userName = "Thai";
// let items = 3;
// let total = 75;
// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);
// let text = 
// `Hello ${userName}
// You have ${items} items in your cart
// Your total is $${total}`
// console.log(text);
// document.getElementById("myLabel").innerHTML = text;


// let myNum = 100;
// // myNum = myNum.toLocaleString("vi-VN", {style: "currency",currency: "VND"});
// // myNum = myNum.toLocaleString("hi-IN", {style: "currency",currency: "INR"});
// // myNum = myNum.toLocaleString(undefined, {style: "percent"});
// myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "mile-per-hour" });
// console.log(myNum);


// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.push("grape");
// fruits.pop();
// fruits.unshift("coconut");
// fruits.shift();
// let length = fruits.length;
// let index = fruits.indexOf("banana");
// console.log(index);
// console.log(length);
// console.log(fruits);


// let prices = [5, 10, 15, 20, 25];
// // for(let i = prices.length - 1; i >= 0; i--){
// //     console.log(prices[i]);
// // }
// for(let i of prices){
//     console.log(i);
// }


// let fruits = ["banana", "apple", "orange", "mango"];
// // fruits = fruits.sort();
// fruits = fruits.sort().reverse();
// for(let fruit of fruits){
//     console.log(fruit);
// }


// let fruits =        ["apples",  "oranges",  "bananas"];
// let vegetables =    ["carrots", "onions",   "potatoes"];
// let meats =         ["eggs",    "chicken",  "fish"];
// let groceryList = [fruits, vegetables, meats];
// groceryList[0][2] = "pineapple";
// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }


// let username = "Thai Dep Trai";
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let maximum = Math.max(...number);
// console.log(maximum);
// let class1 = ["Thai", "Huy", "Hoa", "Hieu"];
// let class2 = ["Ngoc", "Hieu", "Hai"];
// class1.push(...class2);
// console.log(class1);


// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// console.log(sum(a, b, c, d));
// function sum(...numbers){
//     let total = 0; 
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }


// let total = sum(2, 3);
// displayDOM(total);
// function sum(...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     return total;
// }
// function sum(a, b, callback){
//     let result = a + b;
//     callback(result);
// }
// function displayDOM(output) {
//     document.getElementById("myLabel").innerHTML = output;
// }


// let students = ["thai", "duy", "dao"];
// students.forEach(capitalize);
// students.forEach(print);
// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.slice(1);
// }
// console.log(students[0]);
// function print(element){
//     console.log(element);
// }


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);
// squares.forEach(print);
// cubes.forEach(print);
// function square (element){
//     return Math.pow(element, 2);
// }
// function cube (element){
//     return Math.pow(element, 3);
// }
// function print(element){
//     console.log(element);
// }


// let ages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let adults = ages.filter(checkAge30);
// adults.forEach(print);
// function checkAge30(element) {
//     return element >= 30;
// }
// function print(element){
//     console.log(element);
// }


// let prices = [5, 10, 15, 20, 25];
// let total = prices.reduce(checkOut);
// function checkOut(total, element){
//     return total + element;
// }
// console.log(`the total is ${total}`);


// let grades = [100, 50, 75, 90, 80, 85, 95, 70, 60, 65];
// grades = grades.sort(sortAsc);
// function sortDesc(x, y){
//     return y-x;
// }
// function sortAsc(x, y){
//     return x-y;
// }
// grades.forEach(print);
// function print(element){
//     console.log(element);
// }
// const greetings = function(){
//     console.log("Hello");
// }
// greetings();


// let count = 0;
// // function increase(){
// //     count++;
// //     document.getElementById("count").innerHTML = count;
// // }
// // function decrease(){
// //     count--;
// //     document.getElementById("count").innerHTML = count;
// // }
// document.getElementById("increase").onclick = function () {
//     count++;
//     document.getElementById("count").innerHTML = count;
// }
// document.getElementById("decrease").onclick = function () {
//     count--;
//     document.getElementById("count").innerHTML = count;
// }


// const greeting = (username) => console.log(`Hello ${username}`);
// const percent = (x, y) => x/y*100;
// console.log(percent(5, 10));


// let grades = [100, 50, 75, 90, 80, 85, 95, 70, 60, 65];
// grades.sort((x, y) => y-x);
// grades.forEach(print);
// // function descending(x, y){
// //     return y-x;
// // }
// // function ascending(x, y){
// //     return x-y;
// // }
// function print(element){
//     console.log(element);
// }


// shuffle
// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10","J", "Q", "K"];
// shuffle (cards);
// console.log(cards);
// cards.forEach(card => console.log(card));
// function shuffle(array){
//     let currentIndex = array.length;
//     while(currentIndex !=0){
//         let randomIndex = Math.floor(Math.random()*currentIndex);
//         currentIndex--;
//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//     return array;
// }


// const store = new Map([
//     ["T-shirt", 20],
//     ["Jeans", 30],
//     ["Socks", 10],
//     ["Shoes", 50]
// ]);
// let shoppingCart = 0;
// shoppingCart+=store.get("T-shirt");
// shoppingCart+=store.get("Jeans");
// store.set("Hat", 12);
// store.delete("Socks");
// console.log(store.has("Shoes"));
// console.log(shoppingCart);
// store.forEach((value, key) => console.log(`${key} $${value}`))




/*------------------------------------------------OOP------------------------------------------------*/

// const car1 = {
//     model: "BMW",
//     color: "black",
//     year: 2020,
//     drive: function () {
//         console.log(`You are driving this ${this.model}`);
//     },
//     brake: function () {
//         console.log("You are braking this car");
//     }
// }
// const car2 = {
//     model: "Toyota",
//     color: "red",
//     year: 2021,
//     drive: function () {
//         console.log(`You are driving this ${this.model}`);
//     },
//     brake: function () {
//         console.log("You are braking this car");
//     }
// }
// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);
// car2.drive();
// car2.brake();


//this keyword
// this.name = "myWindows"
// console.log(this);


//class =   blueprint for creating objects
// class Player{
//     score = 0;
//     pause(){
//         console.log("You pause the game");
//     }
//     exit(){
//         console.log("You exited the game")
//     }
// }


// const player1 = new Player();
// console.log(player1.score);
// player1.exit();


// class Student {
//     constructor(name, age, gpa) {
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study() {
//         console.log(`${this.name} is studying`);
//     }
// }
// const student1 = new Student("Thai", 20, 4.0);
// student1.study();


//static
// class Car{
//     static numberOfCars = 0;
//     constructor(model){
//         this.model = model;
//         Car.numberOfCars++;
//     }
//     static startRace(){
//         console.log("3...2...1...GO!");
//     }
// }
// const car1 = new Car("BMW");
// const car2 = new Car("Toyota");
// console.log(Car.numberOfCars);
// Car.startRace();


//inheritance = a chile class can inherit all the methods and properties from another class
// class Animal {
//     alive = true;
//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal {
//     name = "rabbit";
//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal {
//     name = "fish";
//     swim() {
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal {
//     name = "hawk";
//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }


// const hawk1 = new Hawk();
// hawk1.eat();


//super class
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, fly){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }


// class Animal{
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed) {
//         super();
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//     }

// }
// const rab1 = new Rabbit("Rab1", 2, 10);


//Getter and Setter
// class Car {
//     constructor(power) {
//         this._gas = 25;
//         this._power = power;
//     }
//     get power() {
//         return `${this._power} hp`;
//     }
//     get gas() {
//         return `${this._gas} L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value) {
//         if(value > 50){
//             value = 50;
//         }else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }
// let car = new Car(400);
// car.gas = 1000000;
// console.log(car.power);
// console.log(car.gas);


// class Car{
//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     drive(){
//         console.log(`You are driving this ${this.model}`);
//     }
// }
// const car1 = new Car("BMW", 2020, "black");
// const car2 = new Car("Toyota", 2021, "red");
// const car3 = new Car("Honda", 2019, "white");
// const car4 = new Car("Ferrari", 2020, "red");
// // changeColor(car1, "blue");
// // displayInfo(car1);
// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }
// function changeColor(car, color){
//     car.color = color;
// }
// const cars = [car1, car2, car3, car4];
// console.log(cars[0].model);
// cars[0].drive();
// startRace(cars);
// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }


// class Card {
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [
//     new Card("A", "Hearts"),
//     new Card("A", "Spades"),
//     new Card("A", "Diamonds"),
//     new Card("A", "Clubs"),
//     new Card("2", "Hearts"),
//     new Card("2", "Spades"),
//     new Card("2", "Diamonds"),
//     new Card("2", "Clubs")
// ];
// // console.log(card1.value + card1.suit);
// console.log(cards[0].value + cards[0].suit);
// cards.forEach((card) => console.log(`${card.value} of ${card.suit}`))

// try {
//     let x = window.prompt("Enter a number");
//     x = Number(x);
//     if(isNaN(x)) throw "Not a number"
//     if(x == "") throw "Empty"
//     console.log(`${x} is a number`);
// }catch(error){
//     console.log(error);
// }
// finally{
//     console.log("This always executes");
// }


//setTimeout()
// let item = "cryptocurrency";
// let price = 1000;
// timer1 = setTimeout(firstMessage, 3000, item, price);
// timer2 = setTimeout(secondMessage, 6000);
// timer3 = setTimeout(thirdMessage, 9000);
// function firstMessage(item, price) {
//     alert(`Buy this ${item} course for $${price}!`);
// }
// function secondMessage() {
//     alert(`This is not a scam!`);
// }
// function thirdMessage() {
//     alert(`DO IT!`);
// }
// document.getElementById("buyBt").onclick = function () {
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert("Thank you for your purchase!");
// }


//setInterval()
// let count = 0; 
// let max = window.prompt("Count up to what #?");
// max = Number(max);
// const myTimer = setInterval(countUp, 1000);
// function countUp(){
//     count++;
//     console.log(count);
//     if(count>=max){
//         clearInterval(myTimer);
//     }
// }


//Date objects
// let date = new Date();
// let date = new Date(0);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date("January 1, 2023 00:00:00");
// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// date = date.toLocaleString();
// console.log(year);
// console.log(dayOfMonth);
// console.log(dayOfWeek);
// console.log(month);
// date.setFullYear(2024);
// date.setMonth(8);
// date.setDate(18);
// document.querySelector("#myLabel").innerHTML = `${formatDate(date)} - ${formatTime(date)}`;
// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let day = date.getDate();
//     return `${month}/${day}/${year}`
// }
// function formatTime(date){
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let amOrPm = hour >= 12 ? "pm" : "am"
//     hour = (hour % 12) || 12;
//     return `${hour}:${minute}:${second} ${amOrPm}`
// }


// //synchronous code = In an ordered sequence, Step by step linear instructions (start now, finish now)
// console.log("start");
// console.log("this step is synchronous");
// console.log("end");
// //asynchronous code = Out of sequence.
// //Eg: Access a database, fetch a file, tasks that take time (start now, finish sometime later)
// console.log("start");
// setTimeout(() => console.log("This is asynchronous"), 5000);
// console.log("end")


// //console.time() = start a timer you can use to track how lobng an operation takes
// console.time("Response time");
// alert("click me")
// setTimeout(()=>console.log("Hello"), 1000)
// console.timeEnd("Response time")


//promises = object that encapsulates the result of an asynchronous operation
//let asynchronous methods return values like synchronous methods
//"I promises to return something in the future"
//The state is 'pending' then: 'fulfilled' or 'rejected'
//The result is what can be returned
//2 parts producing & consuming
// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;
//     if (fileLoaded) {
//         resolve("File loaded");
//     } else {
//         reject("File NOT loaded");
//     }
// });
// promise.then(value => { console.log(value) })
//     .catch(error => console.log(error));
// const wait = time => new Promise(resolve =>{
//     setTimeout(resolve, time);
// })
// wait(3000).then(()=>console.log("Thanks for waiting!"));


//async = makes a function return a Promise
// async function loadFile() {
//     let fileLoaded = true;
//     if (fileLoaded) {
//         return "File loaded";
//     } else {
//         throw "File not loaded";
//     }
// }
//Or you can use
// function loadFile() {
//     let fileLoaded = false;
//     if (fileLoaded) {
//         return Promise.resolve("File loaded");
//     } else {
//         return Promise.reject("File NOT LOADED");
//     }
// }
// loadFile().then(value => console.log(value))
//     .catch(error => console.log(error));


// //await = makes a async function wait for a Promise
// async function loadFile() {
//     let fileLoaded = false;
//     if (fileLoaded) {
//         return "File loaded";
//     } else {
//         throw "File not loaded";
//     }
// }
// async function startProcess() {
//     try {
//         let message = await loadFile();
//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     }
// }
// startProcess();


// //ES6 Modules
// //The idea behind a module is that it's a file of reuseable code
// //We can import sections of pre-written code to use whenever we need it
// //Great for any general utility values and functions
// //Helps to make your code more reusable and maintainable
// //Think of modules as separate chapters of a book
// // import{PI, getArea, getCircumference} from "./math_util.js"
// import * as MathUtil from "./math_util.js"
// console.log(MathUtil.PI);
// let c = MathUtil.getCircumference(10);
// let a = MathUtil.getArea(10);
// console.log(c +" "+ a);


//DOM = Document Object Model (API)
//An interface for changing the content of a page
// console.log(document);
// console.dir(document)
// console.log(document.title);
// console.log(document.URL);
// document.title = "Title goes here"
// document.location = "https://www.google.com"
// document.body.style.backgroundColor ="skyblue";
// document.getElementById("myLabel").innerHTML = "HELLO!"
// let element = document.getElementById("myTitle");
// element.style.backgroundColor="lightgreen";
// let fruits = document.getElementsByName("fruits");
// console.log(fruits)
// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value)
//     }
// })
// let vegetables = document.getElementsByTagName("li");
// vegetables[2].style.backgroundColor = "green";
// let desserts = document.getElementsByClassName("desserts");
// desserts[1].style.backgroundColor = "blue";
// let element = document.querySelector("[for]");
// element.style.backgroundColor = "pink";
// let elements = document.querySelectorAll(".desserts");
// elements.forEach(element =>{
//     element.style.backgroundColor = "purple"
// })


// let element = document.querySelector("#fruits");
// let children = Array.from(element.children);
// // console.log(sibling);
// children.forEach(child => child.style.backgroundColor = "red")
// // children.style.backgroundColor = "red";
// // .firstElementChild
// // .lastElementChild
// // .parentElement
// // .nextElementSibling
// // .previousElementSibling
// // .children[]
// // Array.from(.children)


// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("What is your name?");
// document.body.append(nameTag);


// const myList = document.querySelector("#fruits");
// const listItem = document.createElement("li");
// listItem.textContent = "Mango";
// // myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);


// const title = document.querySelector("#myTitle");
// title.style.color = "red";


// // const element = document.getElementById("myButton");
// // element.onclick = doSomething;
// // const element = document.body;
// // element.onload = doSomething;
// // const element = document.getElementById("myInput");
// // element.onchange = doSomething;
// const element = document.getElementById("myDiv");
// // element.onmouseover = changeColor;
// // element.onmouseout = changeColorBack;
// element.onmousedown = changeColor;
// element.onmouseup = changeColorBack;
// function doSomething(){
//   window.alert("Hello");
// }
// function changeColor(){
//   element.style.backgroundColor = "red";
// }
// function changeColorBack(){
//   element.style.backgroundColor = "aqua";
// }


// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");
// // innerDiv.addEventListener("mouseover", changeRed);
// // innerDiv.addEventListener("mouseout", changeBlue);
// innerDiv.addEventListener("click", changeRed);
// outerDiv.addEventListener("click", changeRed, true);
// function changeRed(){
//   alert(`You selected ${this.id}`);
//   this.style.backgroundColor = "red";
// }
// function changeBlue(){
//   alert(`You selected ${this.id}`);
//   this.style.backgroundColor = "aqua";
// }


// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");
// myButton.addEventListener("click", () => {
//   if (myImg.style.visibility == "hidden") {
//     myImg.style.visibility = "visible";
//   }else{
//     myImg.style.visibility = "hidden";
//   }
// });


// //Keydetect
// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// window.addEventListener("keydown", (event) => console.log(event.key));
// let x = 0;
// let y = 0;
// function move(event) {
//   switch (event.key) {
//     case "ArrowDown":
//       y += 5;
//       myDiv.style.top = y + "px";
//       break;
//     case "ArrowUp":
//       y -= 5;
//       myDiv.style.top = y + "px";
//       break;
//     case "ArrowRight":
//       x += 5;
//       myDiv.style.left = x + "px";
//       break;
//     case "ArrowLeft":
//       x -= 5;
//       myDiv.style.left = x + "px";
//       break ;  
//   }
// }


// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin() {
//   // let timerId = null;
//   let x = 0;
//   let y = 0;
//   let degrees = 0;
//   let timerID = setInterval(frame,5);
//   function frame(){
//     if(degrees>=360){
//       clearInterval(timerID);
//     }else{
//       degrees++;
//       myAnimation.style.transform = "rotateX("+degrees+"deg)";
//     }
//     // if(x >= 200 || y >=200){
//     //   clearInterval(timerID);
//     // }else{
//     //   x++;
//     //   y++;
//     //   myAnimation.style.left = x + "px";
//     //   myAnimation.style.top = y + "px";
//     // }
//   }
// }


// Canvas API  = means for drawing graphics used for Animation games, data visualisation
// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.strokeStyle = "red";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);
// context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250);
// context.stroke();
// //DRAW A TRIANGLE
// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.fillStyle = "aqua";
// context.lineWidth = 10;
// context.strokeStyle = "red";
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);
// context.fill();
// context.stroke();
// //DRAW A RECTANGLE
// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// context.strokeStyle = "red";
// context.fillStyle = "aqua";
// context.strokeRect(0,0, 250, 250);
// context.fillRect(0,0, 250, 250);
// context.stroke();
// context.strokeStyle = "aqua";
// context.fillStyle = "red";
// context.strokeRect(250,250, 500, 500);
// context.fillRect(250,250, 500, 500);
// context.stroke();
// //DRAW A CIRCLE
// context.beginPath();
// context.arc(250, 250, 200, 0, 2*Math.PI);
// context.stroke();
// //DRAW TEXT
// context.font = "50px MV Boli";
// context.fillStyle = "red";
// context.textAlign = "center";
// context.fillText("FUCK YOU", canvas.width/2, canvas.height/2);


//window = interface used to talk to the web browser
// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);
// console.log(window.location.href)
// window.location.href = "https://www.facebook.com"
// console.log(window.location.hostname);
// console.log(window.location.pathname);
// const myButton = document.getElementById("myBt");
// myButton.addEventListener("click", () => window.open("https://google.com"));
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());
// window.confirm("Press OK to continue")
// let age = window.prompt("Enter your age");
// if (age < 18){
//     window.alert("You must be 18+ to visit this site")
// }


//cookie = a small text file stored on your computer 
// used to remember information about the user 
// saved in name = value pair
// document.cookie = "firstName=Thai; expires=Sun, 1 Aug 2023 12:00:00 UTC; path=/";
// document.cookie = "lastName=Dao; expires=Sun, 1 Aug 2023 12:00:00 UTC; path=/";
// console.log(document.cookie)
// setCookie("Thai dep trai", "Email",1);
// deleteCookie("Thai dep trai");
// setCookie("email", "dduythai.ddt@gmail.com", 1);
// setCookie("password", "fuckyou", 1);
// console.log(getCookie("email"))
// deleteCookie("Thai dep trai");
// deleteCookie("email");
// deleteCookie("password");
// console.log(document.cookie)
// function setCookie(name, value, daysToLive) {
//     const date = new Date();
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//     let expired = "expired=" + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expired}; path=/`;
// }
// function deleteCookie(name) {
//     setCookie(name, "", -1);
// }
// function getCookie(name) {
//     const cDecoded = decodeURIComponent(document.cookie);
//     // console.log(cDecoded);
//     let result = null;
//     const cArray = cDecoded.split("; ");
//     cArray.forEach((element) => {
//         if (element.indexOf(name) == 0) {
//             result = element.substring(name.length + 1)
//         }
//     })
//     return result;
// }
// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBt = document.querySelector("#submitBt");
// const cookieBt = document.querySelector("#cookieBt");
// submitBt.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 1);
//     setCookie("lastName", lastText.value, 1);
// })
// // deleteCookie("firstName");
// // deleteCookie("lastName");
// cookieBt.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");
// })
// console.log(getCookie("firstName"));

