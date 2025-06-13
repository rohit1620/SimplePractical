
// Form and Local Storage 
let local=JSON.parse(localStorage.getItem("user"))||[];

let myFun=()=>{
    event.preventDefault()
  
   let image=document.getElementById("user_pic").value
   let name=document.getElementById("user_name").value
   let email=document.getElementById("user_email").value
   let country=document.getElementById("user_country").value
   let data={image,name,email,country};
   console.log(data)
   localStorage.setItem("user",JSON.stringify(data));
   document.getElementById("user_pic").value=null;
   document.getElementById("user_name").value=null;
   document.getElementById("user_email").value=null;
   document.getElementById("user_country").value=null;

}

document.querySelector("form").addEventListener("submit",myFun)

// constructor Technique

function Mobile(brand,name,price,image){
    this.brand=brand
    this.name=name;
    this.price=price;
    this.image=image;
}
 let p=new Mobile(brand,name,price,image)

// Api fetch
let getData=async()=>{
    let query=document.getElementById("search_box").value
   let url=`https://masai-mock-api-2.herokuapp.com/news?q=${query}`;
   let res=await fetch(url);
   let data=await res.json();
   document.getElementById("search_box").value=null;
   console.log(data.articles)
   append(data.articles)
}


// append Data
let append=(data)=>{
    document.getElementById("news_result").innerHTML=null;
    data.forEach((el)=>{
        let img=document.createElement("img");
        let h3=document.createElement("h3");
        let p=document.createElement("p");
        let div1=document.createElement("div");
        let div2=document.createElement("div");

        img.src=el.urlToImage 
        h3.innerText=el.title 
        p.innerText=el.author 
        div.append(img,h3,p);
        div1.addEventListener("click",()=>{
            addData(el)
        })
         div2.addEventListener("click",()=>{
            remove(el)
        })
        document.getElementById("news_result").append(div)
})
}

// add and remove data
let addData=(el)=>{
    localStorage.setItem("movie",JSON.stringify(el))
     window.location.href="checkout.html";
}

let remove=(el,index)=>{
    data.splice(index,1);
    localStorage.setItem("mobile_data",JSON.stringify(data))
    window.location.reload();
}


// sort and filter
let lth=()=>{
    data.sort((a,b)=>{
       return a.price-b.price;
    })
    append(data)
    
}

let htl=()=>{
    data.sort((a,b)=>{
       return b.price-a.price;
    })
    append(data)
    
}

let filter=()=>{
    let filter=data.filter((el)=>{
        if(el.brand=="apple"){
            
            return el;
        }
        else if(el.brand=="nokia"){
        
            return el;
        }
        else if (el.brand=="oneplus"){
        
           return el;
        }
    })
    
    append(filter);
}


// 🔷 ARRAY METHODS
// 1. push()
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]

// 2. pop()
let arr2 = [1, 2, 3];
let x = arr2.pop();
console.log(x); // 3

// 3. shift()
let arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // [2, 3]

// 4. unshift()
let arr4 = [2, 3];
arr4.unshift(1);
console.log(arr4); // [1, 2, 3]

// 5. slice(start, end)
let arr5 = [1, 2, 3, 4];
console.log(arr5.slice(1, 3)); // [2, 3]

// 6. splice(start, deleteCount)
let arr6 = [1, 2, 3, 4];
arr6.splice(1, 2);
console.log(arr6); // [1, 4]

// 7. forEach()
[1, 2, 3].forEach(x => console.log(x * 2)); // 2, 4, 6


// 8. map()
let doubled = [1, 2, 3].map(x => x * 2);
console.log(doubled); // [2, 4, 6]

// 9. filter()
let even = [1, 2, 3, 4].filter(x => x % 2 === 0);
console.log(even); // [2, 4]

// 10. reduce()
let sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
console.log(sum); // 6

// 11. includes()
let arr11 = [1, 2, 3];
console.log(arr11.includes(2)); // true

// 12. indexOf()
let arr12 = [1, 2, 3];
console.log(arr12.indexOf(2)); // 1

// 🔷 STRING METHODS
// 1. charAt(index)
let str = "Rohit";
console.log(str.charAt(2)); // h

// 2. substring(start, end)
let str2 = "JavaScript";
console.log(str.substring(0, 4)); // Java

// 3. toLowerCase() / toUpperCase()
let str3 = "Hello";
console.log(str3.toUpperCase()); // HELLO

// 4. split()
let str4 = "a,b,c";
console.log(str4.split(",")); // ['a', 'b', 'c']

// 5. trim()
let str5 = "  Hello  ";
console.log(str5.trim()); // "Hello"

// 6. includes()
let str6 = "hello world";
console.log(str6.includes("world")); // true

// 🔷 OBJECT METHODS
// 1. Object.keys()
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ['a', 'b']

// 2. Object.values()
const obj2 = { a: 1, b: 2 };
console.log(Object.values(obj2)); // [1, 2]

// 3. Object.entries()
const obj3 = { a: 1, b: 2 };
console.log(Object.entries(obj3)); // [['a', 1], ['b', 2]]

// 4. hasOwnProperty()
const obj4 = { a: 1 };
console.log(obj4.hasOwnProperty("a")); // true

// 🔷 MATH METHODS
// 1. Math.max() / Math.min()
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1

// 2. Math.floor() / Math.ceil() / Math.round()
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.round(4.5)); // 5

// 3. Math.random()
console.log(Math.floor(Math.random() * 10)); // Random number 0–9

// 🌟 🌟🌟🌟🌟🌟🌟🌟ECMAScript 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 🔹 ES5 (2009) – Basic Features
// 1. strict mode
"use strict";
x = 10; // Error: x is not declared

// 2. Array.forEach()
const fruits = ["apple", "banana"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 🔹 ES6 (2015) – Major Update
// 1. let and const
let age = 25;
const name = "John";

// 2. Arrow Functions (=>)
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// 3. Template Literals
let name2 = "Rohit";
console.log(`Hello, ${name2}!`);

// 4. Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest

// 5. Destructuring
const person = { name3: "Rohit", age3: 24 };
const { name3, age3 } = person;
console.log(name3); // Rohit

// 6. Spread and Rest Operators (...)
// Spread
const nums = [1, 2, 3];
const newNums = [...nums, 4];

// Rest
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6

// 7. Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

// 8. Promises
const promise = new Promise((resolve, reject) => {
  resolve("Success!");
});
promise.then(result => console.log(result));

// 9. ** Exponentiation
console.log(2 ** 3); // 8

// 🔹 ES9 (2018)
// 1. Rest/Spread in Objects
const person1 = { name: "Rohit", age: 24 };
const clone = { ...person1 };

// 2. Promise.finally()
fetch("url")
  .then(res => res.json())
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));










