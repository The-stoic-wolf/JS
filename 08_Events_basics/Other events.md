## 🔹 Mouse Events:
### 1️⃣ click — when you click on something

✅ Happens when you press and release the mouse button on an element.

__Code:__
<button id="clickBtn">Click Me</button>

<script>
  document.getElementById("clickBtn").addEventListener("click", (e) => {
    console.log("Button clicked!", e);
  });
</script>
__Code Ends__

### 2️⃣ dblclick — when you double-click

✅ Happens when you click twice in a short period of time.

__Code:__

<button id="dblclickBtn">Double-Click Me</button>

<script>
  document.getElementById("dblclickBtn").addEventListener("dblclick", (e) => {
    console.log("Double clicked!", e);
  });
</script>

__Code Ends__

### 3️⃣ mousemove — when you move your mouse
✅ Happens every time you move the mouse while it's over the element.

__Code:__

<div id="mousemoveBox">Move mouse here</div>

<script>
  document.getElementById("mousemoveBox").addEventListener("mousemove", (e) => {
    console.log("Mouse is moving!", e);
  });
</script>

__Code Ends__

### 4️⃣ mouseout — when your mouse leaves an element

__Code:__

<div id="mouseoutBox">Mouse leaves me</div>

<script>
  document.getElementById("mouseoutBox").addEventListener("mouseout", (e) => {
    console.log("Mouse left.", e);
  });
</script>

__Code Ends__

### 5️⃣ mouseover — when your mouse enters an element

__Code:__

<div id="mouseoverBox">Mouse enters me</div>

<script>
  document.getElementById("mouseoverBox").addEventListener("mouseover", (e) => {
    console.log("Mouse entered.", e);
  });
</script>

__Code Ends__
_______________________________________________________________________________________________________________

## 🔹 Keyboard Events:

### 6️⃣ keydown — when a key is pressed down

__Code:__

<input id="keydownInput" />

<script>
  document.getElementById("keydownInput").addEventListener("keydown", (e) => {
    console.log("Key down!", e);
  });
</script>

__Code Ends__

### 7️⃣ keyup — when a key is released

__Code:__

<input id="keyupInput" />

<script>
  document.getElementById("keyupInput").addEventListener("keyup", (e) => {
    console.log("Key up!", e);
  });
</script>

__Code Ends__

### 8️⃣ keypress — when a character is produced (deprecated but sometimes used => [NOT RECOMMENDED])

__Code:__

<input id="keypressInput" />

<script>
  document.getElementById("keypressInput").addEventListener("keypress", (e) => {
    console.log("Keypress!", e);
  });
</script>

__Code Ends__

**Deprecated — it's recommended to use keydown instead.**

## 🔹 Form Events:

### 9️⃣ submit — when a form is submitted

__Code:__

<form id="myForm">
  <input name="email" /><button>Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted.", e);
  });
</script>

__Code Ends__

## 🔹 reset — when a form is reset:

__Code:__

<form id="resetForm">
  <input /><input /><button>Reset</button>
</form>

<script>
  document.getElementById("resetForm").addEventListener("reset", (e) => {
    console.log("Form reset.", e);
  });
</script>

__Code Ends__

### 10️⃣ input — when the input’s value is changed (with each keystroke):

__Code:__

<input id="inputField" />

<script>
  document.getElementById("inputField").addEventListener("input", (e) => {
    console.log("Input changed.", e);
  });
</script>

__Code Ends__

### 11️⃣ change — when a form field’s value is finalized (typically after losing focus):

__Code:__

<select id="selectBox">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<script>
  document.getElementById("selectBox").addEventListener("change", (e) => {
    console.log("Select changed.", e);
  });
</script>

__Code Ends__

## 🔹 Window Events:

### 12️⃣ load — when the page finishes loading

__Code:__

<script>
  window.addEventListener("load", (e) => {
    console.log("Page fully loaded.", e);
  });
</script>

__Code Ends__

### 13️⃣ resize — when the window is resized

__Code:__

<script>
  window.addEventListener("resize", (e) => {
    console.log("Window resized.", e);
  });
</script>

__Code Ends__

### 14️⃣ scroll — when you scroll the page

__Code:__

<script>
  window.addEventListener("scroll", (e) => {
    console.log("Page scrolled.", e);
  });
</script>

__Code Ends__

### 15️⃣ beforeunload — before closing or navigating away

__Code:__

<script>
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = '';
    console.log("Before unload.", e);
  });
</script>

__Code Ends__

## 🔹 Other Events:

### 16️⃣ focus — when an element gets focus

__Code:__

<input id="focusInput" />

<script>
  document.getElementById("focusInput").addEventListener("focus", (e) => {
    console.log("Input is focused.", e);
  });
</script>

__Code Ends__

### 17️⃣ blur — when it loses focus

__Code:__
<input id="blurInput" />

<script>
  document.getElementById("blurInput").addEventListener("blur", (e) => {
    console.log("Input lost focus.", e);
  });
</script>

__Code Ends__

### 18️⃣ copy — when content is copied

__Code:__

<input id="copyInput" />

<script>
  document.getElementById("copyInput").addEventListener("copy", (e) => {
    console.log("Content was copied.", e);
  });
</script>

__Code Ends__

### 19️⃣ cut — when content is cut

__Code:__

<input id="cutInput" />

<script>
  document.getElementById("cutInput").addEventListener("cut", (e) => {
    console.log("Content was cut.", e);
  });
</script>

__Code Ends__

### 20️⃣ paste — when content is pasted

__Code:__

<input id="pasteInput" />

<script>
  document.getElementById("pasteInput").addEventListener("paste", (e) => {
    console.log("Content was pasted.", e);
  });
</script>

__Code Ends__
