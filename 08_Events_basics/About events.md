# About 

## function(e) / e.target

### 🔹 What is function(e)?
        When you see something like:

__Code:__
        <button onclick="function(e)"> Click me </button>

__or more commonly:__

__Code:__
        button.addEventListener("click", function(e) {
        //...
        });

        
**…the function(e) is an event handler — a function that's called when the event occurs.**

        Here:

        - function(e) — is a function expression.

        -The parameter e (sometimes called event) is the event object.
                This object contains information about the event, like:

        - What kind of event it was (click, mouseover, keypress...)

        - Where it happened (coordinates)

        - Which element was clicked

        - Any modifier keys (shift, ctrl...)

        - And much more.
________________________________________________________________________________________________________

### 🔹 What is e.target?
        Inside your event handler:

__Code:__
        function(e) {
                        console.log(e.target);
                    }

**…the e.target refers to the element that originally triggered the event.**

__Code:__
        <button id="myBtn">Click Me</button>
        <script>
                document.getElementById("myBtn").addEventListener("click", function(e) {
                console.log(e.target);
                });
        </script>

**e.target == the <button> that was clicked.**

### 🔹 Difference Between e.target and this
Sometimes people confuse these:

__Code:__
        button.addEventListener("click", function(e) {
        console.log(this);
        console.log(e.target);
        });

- **this** refers to the element that the event handler is attached to — in this case, the button itself.

- **e.target** refers to the element that originally triggered the event — which might be a child element or a deep descendant in more complex structures.
___________________________________________________________________________________________________________
### 🔹 Summary:
✅ **function(e)** — event handler with event object
✅ **e** — event object
✅ **e.target** — the element that originally triggered the event
✅ **.this** — the element that the event handler is attached to
✅ Event handlers enable you to respond to user actions (clicks, keypresses, mouse moves, form submissions, etc.).
_______________________________________________________________________________________________________________


## Advanced Topic

### 🔹 1. Event Delegation:
Event delegation lets you handle events efficiently by adding a single event listener to a parent element instead of adding many handlers to each child.

**➥ How?**
When you click a child, the event bubbles up to its parent. So you can check which child was clicked in the parent’s event handler.

__Code:__
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById("itemList").addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
      console.log("You clicked.", e.target.textContent);
    }
  });
</script>

__Code End__

**✅ This lets you handle all future LI elements with just a single event handler.**

### 🔹 2. Event Propagation:
When an event happens, it moves through two phases:

1. Capturing phase (goes down from parent to children).

2. Bubbling phase (goes up from children back toward parent).

__Code:__

document.body.addEventListener("click", (e) => {
  console.log("Body captured.");
}, true);**// <- true means Capture**

document.body.addEventListener("click", (e) => {
  console.log("Body bubbled.");
},false); **// <- false or omit for Bubbling (default)**

__Code Ends__

### 🔹 3. Custom Events:
Sometimes you want to create your own events and dispatch them:

__Code:__

**// Create custom event**
const customEvent = new Event("myEvent");

document.body.addEventListener("myEvent", (e) => {
  console.log("Custom event received.");
});

**// Dispatch custom event**
document.body.dispatchEvent(customEvent);

__Code Ends__

**✅ Allows you to enable communication between components or modules in your code.**

### 🔹 4. Removing Event Handlers:
To detach a previously attached event:

__Code:__
function handleClick(e) {
  console.log("Click!", e);
}

const button = document.querySelector("button");

button.addEventListener("click", handleClick);

**// Later...**
button.removeEventListener("click", handleClick);
__Code Ends__

**✅ The handler must be the exact same function you originally attached.**

### 🔹 5. Performance Tips:

✅ **Event Delegation** — reduces number of handlers — especially helpful for large lists.
✅ Remove handlers when they’re no longer needed (like when removing elements).
✅ Consider passive event handlers when you’re adding many event handlers for events like scroll.


__________________________________________________________________________________________________________




## 🔹 Summary:
**✅ Event** — something happens in the browser.
**✅ Event Handler** — code that runs in response.
**✅ addEventListener** — a way to connect handlers to events.
**✅ Event Object** — contains details about the event (like mouse coordinates, key pressed, etc.).
_____________________________________________________________________________________________________________

## Some Extra

1. **.preventDefault()**
        stop the event 

2. **.stopPropagation()**
        stop event to go to parent or top event as said bubble propagation

3. **.remove()**
        remove an event when clicked

4. **.parentNode()**
        provide the parent node of event, which hold it

5. **console.log(e.target.tagName)**
        list tag name which clicked
