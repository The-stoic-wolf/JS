### 📌 map() — Array Transformer

  **🔍 What it does:**
            The .map() method creates a new array by applying a function to 
            each element of the original array.

  **📚 Syntax:**  
              const result = array.map((element, index, array) => {
                // return modified element
              });

  **✅ Use case:**
          *Transforming data — e.g., squaring all numbers in an array:*
                `const nums = [1, 2, 3];`
                `const squares = nums.map(n => n * n); // [1, 4, 9]`
                `console.log(squares)`

  **⚠️ Common Mistakes:**

            1.Forgetting return in a normal function block.
            2.Thinking .map() changes the original array (it doesn’t).
            3.Using .map() when you're not using the returned array — use .forEach() instead.

  **💡 How to use it effectively:**
            Use when you need a new array where each element is derived from the original.


-------------------------------------------------------------------------------------------------
### 📌 reduce() — Array to Single Value
  **🔍 What it does:**
                  .reduce() reduces an array to a single value (like a sum, product, or object).

  **📚 Syntax:**
            `const result = array.reduce((accumulator, current, index, array) => {`
            `  return updatedAccumulator;`
            `}, initialValue);`
            **accumulator** >> as 3rd value that store **a + b = c** , then become **a** again.
                               like fibonacci series
           

  **✅ Use case:**
                Summing all numbers in an array.
                `const nums = [1, 2, 3];`
                `const total = nums.reduce((acc, curr) => acc + curr, 0); // 6`
                `console.log(total)`

  **⚠️ Common Mistakes:**
                1.Not providing the initial value — leads to bugs.
                2.Confusing accumulator and current.
                3.Thinking it returns an array — it returns a single value.

  **💡 When to use:**
        When you want to accumulate or combine all items in an array into one final result.

------------------------------------------------------------------------------------------------
### 📌 forEach() — Perform Side Effects
  **🔍 What it does:**
                  .forEach() runs a function for each item in the array — typically .
                  used for side effects (e.g., logging).

  **📚 Syntax:**
              `array.forEach((element, index, array) => {`
              `  // do something`
              `});`

  **✅ Use case:**
                Logging each element:
                                      `const fruits = ["🍎", "🍌", "🍇"];`
                                      `fruits.forEach(fruit => console.log(fruit));`

  **⚠️ Common Mistakes:**
                      1.Thinking it returns a new array (it doesn’t return anything).
                      2.Using return expecting results — use .map() for that.

  **💡 Use it for:**
                  Debugging, printing, or performing actions with each array element.

---------------------------------------------------------------------------------------------
### 📌 filter() — Filtering Arrays
  **🔍 What it does:**
                .filter() creates a new array with elements that pass a test (return true).

  **📚 Syntax:**
              `const result = array.filter((element, index, array) => {`
              `  return condition;`
              `});`

  **✅ Use case:**
                Filtering even numbers:
                        `const nums = [1, 2, 3, 4];`
                        `const evens = nums.filter(n => n % 2 === 0); // [2, 4]`
                        `console.log(evens)`

  **⚠️ Common Mistakes:**
                      1.Not returning a boolean.
                      2.Expecting original array to be modified.

  **💡 When to use:**
                  When you want to extract a subset of data based on conditions.

------------------------------------------------------------------------------------------
### 📌 for...of — Loop Over Values
  **🔍 What it does:**
                      for...of is used to loop over iterable objects like arrays, strings, etc.

  **📚 Syntax:**
              `for (const **item** of **iterable**) {`
              `  // use item`
              `}`

  **✅ Use case:**
                Looping through array values:
                                            `const colors = ["red", "green", "blue"];`
                                            `for (const **color** of **colors**) {`
                                            `  console.log(color);`
                                            `}`
  **⚠️ Common Mistakes:**
                       1.Trying to use it on objects (use for...in for that).
                       2.Confusing with for...in (which loops keys).

  **💡 When to use:**
                  When working with arrays or strings and **you care about values, not keys**.

----------------------------------------------------------------------------------------------
### 📌 for...in — Loop Over Keys
  **🔍 What it does:**
                    for...in loops over enumerable properties (keys) of an object.

  **📚 Syntax:**
              `for (const **key** in **object**) {`
              `  console.log(key, object[key]);`
              `}`

  **✅ Use case:**
                Looping through object properties:
                                                `const person = { name: "Alice", age: 25 };`
                                                `for (const **key ** in **person**) {`
                                                `  console.log(key, person[key]);`
                                                `}`

  **⚠️ Common Mistakes:**
              1.Using it on arrays — results in looping over indices, not values.
              2.Not checking if the key is the object’s own property (use hasOwnProperty).

  **💡 Use it when:**
                You want to access all property keys in an object.

------------------------------------------------------------------------------------------------
### 📌 Callback Functions — Functions as Parameters
  **🔍 What it does:**
                A callback is a function passed into another function to be called later 
                (after some work is done).

  **📚 Syntax:**
              `function greet(name, callback) {`
              `  callback(name);`
              `}`
              `greet("John", (name) => console.log("Hello " + name));`

  **✅ Use case:**
              Used in event handlers, setTimeout, Array methods, etc.
                                    `setTimeout(() => {`
                                    `  console.log("Delayed Hello");`
                                    `}, 1000);`
  **⚠️ Common Mistakes:**
              1.Forgetting to call the callback (callback()).
              2.Misunderstanding asynchronous behavior — it won’t execute immediately.

  **💡 When to use:**
                    Whenever you want a function to run after another function finishes or needs external input.

------------------------------------------------------------------------------------------------
### 📌 Arrow Functions — Short Functions 🏹
  **🔍 What it does:**
                  Arrow functions provide a shorter syntax and handle this differently than regular functions.

  **📚 Syntax:**
              `const add = (a, b) => a + b;`
  
  **✅ Use case:**
              Great for small functions, array callbacks:            
                              `const nums = [1, 2, 3];`
                              `const doubled = nums.map(n => n * 2); // [2, 4, 6]`
  **⚠️ Common Mistakes:**
                  1.Using arrow functions when you need this context (like in class methods).
                  2.Forgetting parentheses or braces when needed.

  **💡 Use it for:**
                    Concise code, especially in one-liners and array methods.

------------------------------------------------------------------------------------------------






