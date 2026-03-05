import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript-qa',
  standalone: true,
  imports: [],
  templateUrl: './javascript-qa.component.html',
  styleUrl: './javascript-qa.component.css'
})
export class JavascriptQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    { category: 'JavaScript', question: 'What is JavaScript?', answer: `JavaScript is a scripting language used to create dynamic and interactive web pages.` },
    { category: 'JavaScript', question: 'What is a JavaScript engine?', answer: `A JavaScript engine executes JavaScript code. Example: V8 engine used in Chrome.` },

    { category: 'JavaScript', question: 'How does JavaScript work internally?', answer: `JavaScript uses a call stack, memory heap, Web APIs, callback queue and event loop to execute synchronous and asynchronous code.` },

    { category: 'JavaScript', question: 'What are JavaScript data types?', answer: `Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt. Non-primitive: Object, Array, Function.` },

    { category: 'JavaScript', question: 'What is the difference between primitive and reference types?', answer: `Primitive values are stored directly while reference types store references to memory locations.` },

    { category: 'JavaScript', question: 'What is var?', answer: `var is a function scoped variable and supports hoisting.` },

    { category: 'JavaScript', question: 'What is let?', answer: `let is block scoped and cannot be redeclared in the same scope.` },

    { category: 'JavaScript', question: 'What is const?', answer: `const is block scoped and its value cannot be reassigned.` },

    { category: 'JavaScript', question: 'What is hoisting?', answer: `Hoisting moves variable and function declarations to the top of their scope during compilation.` },

    { category: 'JavaScript', question: 'What is scope in JavaScript?', answer: `Scope determines where variables are accessible. Types: Global, Function, and Block scope.` },

    { category: 'JavaScript', question: 'What is closure?', answer: `A closure is when a function remembers variables from its outer scope even after execution.` },

    { category: 'JavaScript', question: 'What is the call stack?', answer: `Call stack keeps track of function calls using LIFO order.` },

    { category: 'JavaScript', question: 'What is the event loop?', answer: `Event loop manages asynchronous callbacks by pushing them from queue to call stack.` },
    { category: 'JavaScript', question: 'What is the difference between Macro and Micro tasks?', answer: `**Macro tasks** are tasks executed by the event loop one at a time (like setTimeout, setInterval), while **Micro tasks** run immediately after the current task before the next macro task (like Promise, MutationObserver).` },
    {
      category: 'JavaScript', question: 'What is Pop(), Push(), Shift(), Unshift()?', answer: `push() – Adds an element to the end of an array.
pop() – Removes the last element from an array.
shift() – Removes the first element from an array.
unshift() – Adds an element to the beginning of an array.`},
    { category: 'JavaScript', question: 'How many ways can you pass arguments to a function?', answer: `Arguments can be passed by value (primitives), by reference (objects/arrays), or using arguments/rest parameters (...args).` },
    { category: 'JavaScript', question: 'How do you clone or copy an objet?', answer: `How do you clone or copy an objet?` },

    { category: 'JavaScript', question: 'What is callback queue?', answer: `It stores asynchronous callbacks waiting for execution.` },

    { category: 'JavaScript', question: 'What is a callback function?', answer: `A function passed as argument to another function and executed later.` },

    { category: 'JavaScript', question: 'What is a Promise?', answer: `A Promise represents the result of an asynchronous operation.` },

    { category: 'JavaScript', question: 'What are Promise states(type)?', answer: `Pending, Fulfilled, Rejected.` },
    {
      category: 'JavaScript', question: 'What are the types of Promise? if Promise get failed what need to do?', answer: `Pending – Initial state, not fulfilled or rejected.
      Fulfilled – Operation completed successfully.
      Rejected – Operation failed.
      If a Promise fails:
      Use .catch() or try...catch (with async/await) to handle the error.
      Optionally, implement fallback logic or retry the operation.
` },

    { category: 'JavaScript', question: 'What is Promise chaining?', answer: `Promise chaining allows executing asynchronous tasks sequentially using .then().` },

    { category: 'JavaScript', question: 'What is Promise.all()?', answer: `Promise.all() runs multiple promises in parallel and returns results when all resolve.` },

    { category: 'JavaScript', question: 'What is Promise.race()?', answer: `Promise.race() takes multiple promises and returns a single promise that resolves or rejects as soon as the first promise settles (either resolved or rejected).` },
    {
      category: 'JavaScript', question: 'Difference between Promise.all(), Promise.race(), Promise.allsettled() and Promise.any() function?', answer: `
      Promise.all() resolves when all promises resolve (fails if any rejects), Promise.race() returns the first settled promise, Promise.allSettled() returns results of all promises regardless of success or failure, and Promise.any() resolves when the first promise fulfills.` },

    { category: 'JavaScript', question: 'What is async/await?', answer: `Async/await simplifies working with promises and asynchronous code.` },

    { category: 'JavaScript', question: 'What is synchronous JavaScript?', answer: `Code executed line by line blocking further execution.` },

    { category: 'JavaScript', question: 'What is asynchronous JavaScript?', answer: `Code executed without blocking the main thread.` },

    { category: 'JavaScript', question: 'What is arrow function?', answer: `Arrow functions provide shorter syntax and do not have their own 'this'.` },

    { category: 'JavaScript', question: 'Difference between normal and arrow function?', answer: `Arrow functions don't bind their own this, arguments, or prototype.` },

    { category: 'JavaScript', question: 'What is a rest parameter?', answer: `Rest parameter (...) collects multiple arguments into an array.` },

    { category: 'JavaScript', question: 'What is spread operator?', answer: `Spread operator expands array or object elements.` },

    { category: 'JavaScript', question: 'What is template literal?', answer: `Template literals allow string interpolation using backticks and $ {}.` },

    { category: 'JavaScript', question: 'What is IIFE?', answer: `Immediately Invoked Function Expression runs immediately after definition.` },

    { category: 'JavaScript', question: 'What is map()?', answer: `map() transforms each array element and returns a new array.` },

    { category: 'JavaScript', question: 'What is forEach()?', answer: `forEach() loops through array elements without returning a new array.` },

    { category: 'JavaScript', question: 'Difference between map() and forEach()?', answer: `map returns a new array, forEach does not.` },

    { category: 'JavaScript', question: 'What is filter()?', answer: `filter() returns elements that match a condition.` },
    { category: 'JavaScript', question: 'Difference between find() and filter()?', answer: `find() returns the first matching element, while filter() returns all matching elements as an array.` },
    { category: 'JavaScript', question: 'Difference between push() and concat()?', answer: `push() adds elements to an array and changes the original array, while concat() returns a new array without modifying the original.` },
    { category: 'JavaScript', question: 'How many ways you can concate strings?', answer: `**Ways to concatenate strings in JS:** Using ` + `, concat() method, or template literals ($ {}).` },

    { category: 'JavaScript', question: 'What is reduce()?', answer: `reduce() converts array values into a single result.` },

    { category: 'JavaScript', question: 'What is slice()?', answer: `slice() returns a portion of array without modifying original.` },

    { category: 'JavaScript', question: 'What is splice()?', answer: `splice() modifies the original array.` },

    { category: 'JavaScript', question: 'Difference between slice() and splice()? ', answer: `slice does not modify original array while splice modifies it.` },

    { category: 'JavaScript', question: 'What is DOM?', answer: `DOM represents HTML elements as objects so JavaScript can manipulate them.` },

    { category: 'JavaScript', question: 'Common DOM methods?', answer: `getElementById, querySelector, querySelectorAll, getElementsByClassName.` },

    { category: 'JavaScript', question: 'What is event bubbling?', answer: `Event propagation from child element to parent.` },

    { category: 'JavaScript', question: 'What is event capturing?', answer: `Event propagation from parent to child.` },

    { category: 'JavaScript', question: 'What is event propagation?', answer: `Event propagation is the process by which an event travels through the DOM in two phases: capturing (top-down) and bubbling (bottom-up).` },
    { category: 'JavaScript', question: 'What is event delegation?', answer: `Event delegation is a technique where a parent element handles events for its child elements using a single event listener.` },
    { category: 'JavaScript', question: 'What is event preventDefault?', answer: `preventDefault() is used to stop the default behavior of an HTML element during an event.` },
    {
      category: 'JavaScript', question: 'What is difference between preventDefault vs stoppropagation vs stopimmediatepropagation?', answer: `  answer: preventDefault() stops the default browser action, stopPropagation() stops event bubbling/capturing, and stopImmediatePropagation() stops propagation and prevents other handlers on the same element. 
` },

    { category: 'JavaScript', question: 'What is error propagation?', answer: `Error propagation in JavaScript is when an error moves up the call stack until it’s caught by a try...catch block or stops the program.` },

    { category: 'JavaScript', question: 'What is debouncing?', answer: `Debouncing delays function execution until a delay passes.` },

    { category: 'JavaScript', question: 'What is throttling?', answer: `Throttling limits how frequently a function executes.` },

    { category: 'JavaScript', question: 'What is this keyword?', answer: `this refers to the object calling the function.` },

    { category: 'JavaScript', question: 'What are call(), apply(), bind()? ', answer: `They control the value of 'this'.` },

    { category: 'JavaScript', question: 'What is prototype?', answer: `Prototype allows objects to inherit properties.` },
    { category: 'JavaScript', question: 'What is prototype Chaining?', answer: `Prototype chaining is a mechanism in JavaScript where objects inherit properties and methods from other objects through the prototype chain.` },
    { category: 'JavaScript', question: 'What is difference between proto and prototype?', answer: `prototype is a property of constructor functions used for inheritance, while __proto__ is a reference to the object’s prototype.` },

    { category: 'JavaScript', question: 'What is prototypal inheritance?', answer: `Objects inherit properties from other objects.` },

    { category: 'JavaScript', question: 'What is class?', answer: `Class is a template used to create objects.` },

    { category: 'JavaScript', question: 'What is constructor?', answer: `Constructor initializes object properties.` },

    { category: 'JavaScript', question: 'What is encapsulation?', answer: `Bundling data and methods together.` },

    { category: 'JavaScript', question: 'What is inheritance?', answer: `One class acquiring properties of another.` },

    { category: 'JavaScript', question: 'What is polymorphism?', answer: `Ability of methods to behave differently.` },

    { category: 'JavaScript', question: 'What is NaN?', answer: `NaN stands for Not a Number.` },

    { category: 'JavaScript', question: 'What is type coercion?', answer: `Automatic conversion between data types.` },

    { category: 'JavaScript', question: 'Difference between == and ===?', answer: `== compares value only, === compares value and type.` },

    { category: 'JavaScript', question: 'Difference between null and undefined?', answer: `undefined means variable declared but not assigned, null is intentional empty value.` },

    { category: 'JavaScript', question: 'What is JSON?', answer: `JSON is a lightweight data format used for data exchange.` },

    { category: 'JavaScript', question: 'What is JSON.stringify()? ', answer: `Converts object into JSON string.` },

    { category: 'JavaScript', question: 'What is JSON.parse()?', answer: `Converts JSON string into object.` },
    { category: 'JavaScript', question: 'What is the advantages of using CSS?', answer: `CSS allows you to separate design from content, making websites easier to maintain, faster, and visually consistent.` },

    { category: 'JavaScript', question: 'What is localStorage?', answer: `Stores data permanently in browser.` },

    { category: 'JavaScript', question: 'What is sessionStorage?', answer: `Stores data only for session.` },

    { category: 'JavaScript', question: 'What are cookies?', answer: `Small data stored in browser for server communication.` },
    { category: 'JavaScript', question: 'What are browser APIs in JS?', answer: `Browser APIs are built-in interfaces provided by the browser that allow JavaScript to interact with browser features like DOM, fetch, storage, and geolocation.` },
    { category: 'JavaScript', question: 'What is eval() function in JS?', answer: `eval() in JavaScript is used to execute a string as JavaScript code.` },

    { category: 'JavaScript', question: 'What is strict mode?', answer: `'use strict' enforces stricter parsing and error handling.` },
    { category: 'JavaScript', question: 'What is the use of TypeOf operator?', answer: `'The typeof operator is used to check the data type of a variable in JavaScript.` },

    { category: 'JavaScript', question: 'How to handle errors in JavaScript?', answer: `Using try, catch, finally blocks.` },
    { category: 'JavaScript', question: 'What is the role of finally block in JS?', answer: `The finally block in JS** is used to **execute code after try/catch, regardless of success or error.` },
    { category: 'JavaScript', question: 'What is the role of Throw statement in JS?', answer: `The throw statement in JS is used to manually generate an error that can be caught by try...catch.` },
    {
      category: 'JavaScript', question: 'What are different type of errors?', answer: `Syntax Error → Code structure mistake.
Runtime Error → Error during execution.
Logical Error → Wrong output due to logic mistake.`},

    { category: 'JavaScript', question: 'What is try...catch?', answer: `Handles runtime errors safely.` },

    { category: 'JavaScript', question: 'What is Temporal Dead Zone?', answer: `Period where let/const variables cannot be accessed before declaration.` },

    { category: 'JavaScript', question: 'What is short circuit evaluation?', answer: `Logical operators stop evaluation once result is determined.` },

    { category: 'JavaScript', question: 'What is higher order function?', answer: `Function that accepts another function as argument.` },

    { category: 'JavaScript', question: 'What is currying?', answer: `Transforming function with multiple arguments into nested functions.` },

    { category: 'JavaScript', question: 'What is memoization?', answer: `Optimization storing previous results.` },

    { category: 'JavaScript', question: 'What is shallow copy?', answer: `Copies only first level of object.` },

    { category: 'JavaScript', question: 'What is deep copy?', answer: `Copies all nested objects.` },
    { category: 'JavaScript', question: 'What are different types of operators in JavaScript?', answer: `JavaScript operators: Arithmetic, Assignment, Comparison, Logical, Bitwise, String, Ternary, Type (typeof, instanceof), Unary, and Comma.` },
    { category: 'JavaScript', question: 'What are different types of Conditions in JavaScript?', answer: `JavaScript conditions: if, if...else, else if, ternary (? :), and switch.` },
    {
      category: 'JavaScript',
      question: 'What are different types of objects in JavaScript?',
      answer: `JavaScript objects can be categorized into several types:-
1. Built-in Objects – Objects provided by JavaScript like Object, Array, Date, Math, String, Number.
2. User-defined Objects – Objects created by developers using object literals or constructors.
3. DOM Objects – Objects provided by the browser to interact with HTML elements like document, window.
4. Host Objects – Objects provided by the environment (browser or Node.js). Example: console, navigator.`
    },

    {
      category: 'JavaScript',
      question: 'What is pure and impure function in js?',
      answer: `Pure Function: Same input → same output, no side effects.
Impure Function: May change external state or give different results.`
    },
    {
      category: 'JavaScript',
      question: 'What is the difference between function declaration and function expression?',
      answer: `Function declaration is hoisted and can be called before definition.
Function expression is not hoisted and must be defined before calling.`
    },
    {
      category: 'JavaScript',
      question: 'What is the difference between arguments and parameters?',
      answer: `Parameters – Variables defined in a function to receive values.
Arguments – Actual values passed to the function when calling it.`
    },
    {
      category: 'JavaScript',
      question: 'What is the difference between Client-side and Server-side JavaScript?',
      answer: `Client-side JavaScript runs in the user's browser and is mainly used for UI interactions, form validation, and DOM manipulation.
Server-side JavaScript runs on the server using environments like Node.js and is used for database operations, authentication, and server logic.
Example:
Client-side → Browser (Chrome, Firefox).
Server-side → Node.js server`
    },
    {
      category: 'JavaScript',
      question: 'What is lexical scope?',
      answer: `Lexical scope means a function can access variables defined in its outer scope based on where it is written in the code.`
    },

    {
      category: 'JavaScript',
      question: 'What is the difference between undefined and not defined?',
      answer: `Undefined means a variable is declared but not assigned.
Not defined means the variable was never declared.`
    },

    {
      category: 'JavaScript',
      question: 'What is Object.freeze()?',
      answer: `Object.freeze() prevents modification of existing properties and prevents adding or removing properties.`
    },

    {
      category: 'JavaScript',
      question: 'What is Object.seal()?',
      answer: `Object.seal() prevents adding or deleting properties but allows modifying existing properties.`
    },

    {
      category: 'JavaScript',
      question: 'What is Object.assign()?',
      answer: `Object.assign() copies properties from one or more source objects into a target object.`
    },
    {
      category: 'JavaScript',
      question: 'What are array-like objects?',
      answer: `Array-like objects are objects that look like arrays (have indexed elements and a length property) but don’t have array methods like push, pop, or map.`
    },
    {
      category: 'JavaScript',
      question: 'What is the difference between shallow copy and deep copy in arrays?',
      answer: `Shallow copy copies references of nested objects.
Deep copy duplicates all nested objects completely.`
    },

    {
      category: 'JavaScript',
      question: 'What is the difference between setTimeout() and setImmediate()?',
      answer: `setTimeout executes code after a specified delay while setImmediate executes immediately after current execution cycle.`
    },

    {
      category: 'JavaScript',
      question: 'What is optional chaining?',
      answer: `Optional chaining (?.) allows accessing nested object properties without causing errors if a property is undefined.`
    },

    {
      category: 'JavaScript',
      question: 'What is nullish coalescing operator?',
      answer: `The ?? operator returns the right-hand value only if the left-hand value is null or undefined.`
    },

    {
      category: 'JavaScript',
      question: 'What is WeakMap?',
      answer: `WeakMap is a collection of key-value pairs where keys must be objects and references are weakly held.`
    },

    {
      category: 'JavaScript',
      question: 'What is WeakSet?',
      answer: `WeakSet is a collection of unique objects where references are weak and cannot be enumerated.`
    },
    {
      category: 'JavaScript',
      question: 'What is the difference between PUT and PATCH?',
      answer: `PUT: Send all fields to update the whole user object.
PATCH: Send only the field you want to change, like email.`
    },
    {
      category: 'JavaScript',
      question: 'What is the difference between Map and Object?',
      answer: `Map allows keys of any type and maintains insertion order.
Objects only allow string or symbol keys.`
    },

    {
      category: 'JavaScript',
      question: 'What is Set in JavaScript?',
      answer: `Set is a collection of unique values with no duplicates.`
    },

    {
      category: 'JavaScript',
      question: 'What is the difference between synchronous iteration and asynchronous iteration?',
      answer: `Synchronous iteration processes elements immediately while asynchronous iteration handles promises or async operations.`
    },

    {
      category: 'JavaScript',
      question: 'What is module in JavaScript?',
      answer: `Modules allow splitting code into separate reusable files using import and export.`
    },

    {
      category: 'JavaScript',
      question: 'What is default export?',
      answer: `Default export allows exporting one main value from a module.`
    },

    {
      category: 'JavaScript',
      question: 'What is named export?',
      answer: `Named exports allow exporting multiple values from a module using their names.`
    },

    {
      category: 'JavaScript',
      question: 'What is dynamic import?',
      answer: `Dynamic import allows loading modules asynchronously using import().`
    },

    {
      category: 'JavaScript',
      question: 'What is garbage collection in JavaScript?',
      answer: `Garbage collection automatically frees memory by removing objects that are no longer reachable.`
    },

    {
      category: 'JavaScript',
      question: 'What is tail call optimization?',
      answer: `Tail call optimization allows recursive functions to reuse stack frames and prevent stack overflow.`
    },

    {
      category: 'JavaScript',
      question: 'What is the difference between deep equality and shallow equality?',
      answer: `Shallow equality checks only first level properties.
Deep equality checks nested objects recursively.`
    },

    {
      category: 'JavaScript',
      question: 'What is the difference between mutable and immutable objects?',
      answer: `Mutable objects can be modified after creation while immutable objects cannot be changed.`
    },

    {
      category: 'JavaScript',
      question: 'What is Destructuring?',
      answer: `Destructuring is a JavaScript feature that allows you to extract values from arrays or objects into separate variables in a concise way.
      Ex- const arr = [1, 2, 3];
      const [a, b] = arr; // a = 1, b = 2
`
    },
    {
      category: 'JavaScript',
      question: 'How to make api call using JS?',
      answer: `You can make an API call in JavaScript using fetch or XMLHttpRequest. The modern way is fetch.`
    },
    {
      category: 'JavaScript',
      question: 'Difference Between Break and Continue Statement?',
      answer: `break – Exits the entire loop immediately.
              continue – Skips the current iteration and moves to the next one.`
    },

    {
      category: 'JavaScript',
      question: 'What is requestAnimationFrame()?',
      answer: `requestAnimationFrame is used to perform animations efficiently by syncing with browser repaint cycles.`
    },

    {
      category: 'JavaScript',
      question: 'What is Web Worker?',
      answer: `Web Workers allow running JavaScript in background threads without blocking the main UI thread.`
    },

    {
      category: 'JavaScript',
      question: 'What is service worker?',
      answer: `Service workers run in the background and enable features like offline support and caching.`
    },
    {
      category: 'JavaScript',
      question: 'What are ES6 features in JavaScript?',
      answer: `Important ES6 features include:
1. let and const
2. Arrow Functions
3. Template Literals
4. Default Parameters
5. Destructuring
6. Spread Operator (...)
7. Rest Parameters
8. Classes
9. Modules (import/export)
10. Promises
11. Enhanced Object Literals
12. for...of Loop
13. Map and Set
14. Symbol Data Type`
    },
    {
      category: 'JavaScript',
      question: 'What is the difference between innerHTML and textContent?',
      answer: `innerHTML parses HTML content while textContent returns plain text.`
    },

    {
      category: 'JavaScript',
      question: 'What is MutationObserver?',
      answer: `MutationObserver watches for changes in DOM elements and triggers callbacks when changes occur.`
    },

    {
      category: 'JavaScript',
      question: 'What is IntersectionObserver?',
      answer: `IntersectionObserver detects when an element enters or leaves the viewport.`
    },

    {
      category: 'JavaScript',
      question: 'What is lazy loading?',
      answer: `Lazy loading delays loading of resources until they are needed to improve performance.`
    },
    {
      category: 'JavaScript',
      question: 'What is Default Parameter?',
      answer: `A default parameter is a function parameter that has a preset value if no argument is passed.
      like-
      function greet(name = "Guest") {
        console.log("Hello " + name);
      }

      greet();       // Hello Guest
      greet("John"); // Hello John `
    },
    {
      category: 'JavaScript',
      question: 'What is the user of Event Handling in JS?',
      answer: `Event handling in JavaScript is used to respond to user actions like clicks, key presses, or mouse movements on web pages.`
    },
    {
      category: 'JavaScript',
      question: 'What is function curring in JS?',
      answer: `Function currying in JavaScript is a technique where a function with multiple arguments is broken into a series of functions each taking one argument.
      like -
      function add(a) {
      return function(b) {
        return a + b;
      }
    }
    console.log(add(2)(3)); // 5
`
    },

  ];



  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}






