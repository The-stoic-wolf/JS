function doSomethingAsync(callback) {
  setTimeout(function(){
    console.log("Done!");
    callback();
  }, 1000);
}

doSomethingAsync(function(){
  console.log("Callback called.");
});

// Prints:
// Done!
// Callback called.
