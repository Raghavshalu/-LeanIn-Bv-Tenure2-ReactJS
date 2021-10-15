//1. Declare an *empty* array;
```
const arr=[]
console.log(arr)
```
//2. Declare an array with more than 5 number of elements
```
const numbers=[1,2,3,45,56,42,334,55,47238]
console.log('NUMBERS:',numbers)
```
//3. Find the length of your array
```
console.log('LENGTH OF NUMBERS:',numbers.length)
```
//4. Get the first item, the middle item and the last item of the array

//5. Declare an array called *mixedDataTypes*, put different data types in the array and find the length of the array. The array size should be greater than 5
```
const mixedDataTypes= [
    'Asabeneh',250,true,{ country: 'Finland', city: 'Helsinki' },{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },] // arr containing different data types
  console.log('length of mixeddatatypes:',mixedDataTypes)
  ```
  //6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  ```
const names=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
```
//7. Print the array using *console.log()*
```
console.log(names)
```
//8. Print the number of companies in the array
```
console.log('Number of companies:',names.length)
```
//9. Print the first company, middle and last company
```
console.log(names[0])
let midindex = names.length/2
console.log(names[midindex])
let lastIndex = names.length - 1
console.log(names[lastIndex])
```
//10. Print out each company
```
console.log(names)
```
//11. Change each company name to uppercase one by one and print them out
```
for(const name of names){
    console.log(name.toUpperCase())
}
//console.log(name.toupperCase())
```
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
```
let sentence='Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.'
console.log(sentence)
```
//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
```
let ischeck=names.indexOf('Microsoft')
ischeck?console.log('the company'):console.log('a company is not found')
```
// if(index!=-1)
// {
//     console.log('the company')
//   } else {
//     console.log('a company is not found')
//   }
//14. Create an empty object called dog
```
const dog = {}
```
//15. Print the dog object on the console
```
console.log(dog)
```
//16. Add name, legs, colour, age and bark properties for the dog object. The bark property is a method which returns *woof woof*
```
const dog1 = {
  name:'candy',
  legs:'small',
  colour:'white',
  age:'twoyear',
  brak:['woof woof']
}
```
//17. Get name, legs, colour, age and bark value from the dog object
```
console.log(dog1)
```
//18. Set new properties the dog object: breed, getDogInfo
```
dog1.breed='German Shepherd Dogs'
.dog1.getDogInfo='dangerous'
```
//19. Find the person who has many skills in the users object.

//20.Count logged in users,count users having greater than equal to 50 points from the following object.
```
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
for(var key in users){
  if(users[key]['points']===50){
    console.log(key);
  }
}
```
//21. Find people who are MERN stack developer from the users object
```
var b=users.map(users);
console.log(b)
function users(x)
{
  return x.name='shalini'
}
```
//22. Set your name in the users object without modifying the original users object
```
for(var key in users){
  console.log([key],['skills']);
  if(users[key]['skills']===MERN)
  console.log(key);
}
```
//23. Get all keys or properties of users object
```
console.log(key,user[key])
```
//24. Get all the values of users object

//29. Call your function *factorial*, it takes a whole number as a parameter and it return a factorial of the number
```
let num=5;
const fact=factorial(num);
console.log(fact);
function factorial(n){
  if (n==0) return 1;
  return n * factorial(n - 1);
}
```
// 30. Call your function *isEmpty*, it takes a parameter and it checks if it is empty or not
```
var fruit={apple,orange,mango};
var check=isempty(fruit);
console.log(check);
const isempty(v)=> !v.length? true:false
```
//32. Take a look at this -
```
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
product.forEach((product)=>{
  console.log(product['price'])
})
```
//slice
```
var a=["shalini","palak","sneha","diksha"];
var b=a.slice[2,3];
console.log(b);
```

