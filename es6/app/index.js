//Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.

let a = [3,62,234,7,23,74,23,76,92]

const numbers = a.filter((num) => num > 70);

console.log("Solution 1");
console.log("The numbers greater than 70 are: ",numbers);

//Q2. 
/*
a. Select all the list items on the page and convert to array.
b. Filter for only the elements that contain the word 'flexbox'
c. Map down to a list of time strings
d. Map to an array of seconds
e. Reduce to get total using .filter and .map
*/

//Open link http://localhost:3000/ques2.html
console.log("Solution 2: Open link http://localhost:3000/ques2.html");

//Q3. Create a markup template using string literal

const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
};

const markup = `
<div class="song">
    <p>
    ${song.name} — ${song.artist}
    (Featuring ${song.featuring})
    </p>
</div>
`;
console.log("Solution 3");
console.log(markup);

//Q4. Extract all keys inside address object from user object using destructuring ?

const user = {
    firstName: 'Sahil',
    lastName: 'Dua',
    Address: {
        Line1: 'address line 1',
        Line2: 'address line 2',
        State: 'Delhi',
        Pin: 110085,
        Country: 'India',
        City: 'New Delhi',
    },
    phoneNo: 9999999999
}

const {Line1, Line2, State, Pin, Country, City} = user.Address;
console.log("Solution 4");
console.log(Line1, Line2, State, Pin, Country, City);

//Q5. Filter unique array members using Set.

let sampleArray = [1,2,3,2,1,5,3,1,4,8];
let uniqueElements = new Set(sampleArray);
console.log("Solution 5");
for(let element of uniqueElements.values()){
    console.log(element);
}

//Q6. Find the possible combinations of a string and store them in a MAP? 
function combinations(string)
{
    var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var char1 = string[i];
    var char2 = string.substring(0, i) + string.substring(i + 1);
    var inner = combinations(char2);
    for (var j = 0; j < inner.length; j++) {
      results.push(char1 + inner[j]);
    }
  }
  return results;
}

console.log("Solution 6");
console.log(combinations("abc"));

//Q7. Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.

class Vehicle{
    constructor(registrationNo){
        this.registrationNo = registrationNo;
    }

    static vehicleStaticFunc(){
        return "Vehicle Static Function";
    }
}

class FourWheeler extends Vehicle{
    constructor(registrationNo,model){
        super(registrationNo);
        this.model = model;
    }

    static fourWheelerStaticFunc(){
        return "Four Wheeler Static Function";
    }
}

class Car extends FourWheeler{
    constructor(registrationNo,model,name){
        super(registrationNo,model);
        this.name = name;
    }

    static carStaticFunc(){
        return "Car Static Function";
    }
}

console.log("Solution 7");
let car = new Car("Ax749","2016","Audi Q8");
console.log(car);
console.log(Car.carStaticFunc());
console.log(Vehicle.vehicleStaticFunc());


//Q8. Write a program to implement a class having static functions

class Calculator {
    static product(a,b){
        return a*b;
    }

    static add(a,b){
        return a+b;
    }
}
console.log("Solution 8");
console.log("The Sum is : ",Calculator.add(50,50));
console.log("The Product is : ",Calculator.product(3,2));


//Q9. Import a module containing the constants 
//and method for calculating area of circle, rectangle, cylinder.


import {areaCircle,areaRectangle,areaCylinder} from './ques9'

console.log("Solution 9");
console.log("The area of circle is : ",areaCircle(5));
console.log("The area of Rectangle is : ",areaRectangle(2,3));
console.log("The area of Cylinder is : ",areaCylinder(3,2));


//Q10. Import a module for filtering unique elements in an array.

import uniqueNumbers from './ques10'

let demoArray = [1,2,4,6,5,4,3,2,1,7,2,1];
console.log("Solution 10");
console.log(uniqueNumbers(demoArray));



//Q11. Write a program to flatten a nested array to single level using arrow functions.

let sampleFlatten = [1, [2], [3, [4, [5, [6, [7]]]]]];
const flattenedArray = sampleFlatten.flat(Infinity);
console.log("Solution 11");
console.log(flattenedArray);



//Q12. Implement a singly linked list in es6 and 
//implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)

import LinkedList from './ques12'

console.log("Solution 12");
let linkedList = new LinkedList();
linkedList.addLast(2);
linkedList.addFirst(10);
linkedList.addFirst(9);
linkedList.addLast(7);
linkedList.addLast(1);
console.log("The First Element is: ",linkedList.getFirst());
console.log("The Last Element is: ",linkedList.getLast());
linkedList.getlength();
console.log("The Elements of the Linked List is: ")
linkedList.printList();


//Q13. Implement Map and Set using Es6

const demoMap = function() {
    let sampleMap = new Map();
    sampleMap.set(1,"one");
    sampleMap.set(2,"two");
    sampleMap.set(3,"three");
    sampleMap.set(4,"four");
    sampleMap.delete(2);

    for(let [key,value] of sampleMap.entries()){
        console.log(`${key} points to ${value}`);
    }
}
console.log("Solution 13");
console.log("The Sample Map is: ");
demoMap();


const demoSet = function(){
    let sampleSet = new Set();
    sampleSet.add("One");
    sampleSet.add("Two");
    sampleSet.add("Three");
    sampleSet.add("Four");
    sampleSet.delete("Three");
    console.log(sampleSet);
    console.log("The Length of the Set is: ",sampleSet.size);

}
console.log("The Sample Set is: ");
demoSet();


//Q14. Implementation of stack (using linked list)

import Stack from './ques14'

console.log("Solution 14");
let stack = new Stack();
console.log('Pushed:',stack.push(5));
console.log('Pushed:',stack.push(10));
console.log('Pushed:',stack.push(15));
console.log('Popped:',stack.pop());

console.log("The Elements of stack are: ");
stack.printStack();
stack.peek();
console.log('Pushed:',stack.push(20));
console.log('Pushed:',stack.push(25));
console.log('Popped:',stack.pop());
console.log("The Elements of stack are: ");
stack.printStack();