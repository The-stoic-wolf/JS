// for
//for (initialize; Condition  ; increment/decrement)
  for (let i = 0 ; i < 10     ; i++                ) {
    //console.log(i)
    
}

//===============================================================================

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0){
    // console.log(`${i} is best number.`)
  }
  // console.log(i);
  
}

// ===============================================================================


for(let i = 0; i <= 10; i++){
  //console.log(`\nOuter loop value: ${i}`);
  for(let j = 0; j <= 10; j++){
    //console.log(`Inner loop value ${j} and Outer loop value: ${i}`);
  }
}

// ===================================== Table =========================================


for(let i = 0; i <= 10; i++){
  //console.log(`\nOuter loop value: ${i}`);
  for(let j = 0; j <= 10; j++){
    //console.log(i + "*" + j + "=" + i*j);
  }
}

// ========================================================================================

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element)
  
}

// ================================ Break ==============================================

for(let i = 0; i <= 20; i++){
  if(i == 5){
    console.log("Detected 5");
    break; // break keyword <<< stops the loop
  }
  console.log(`Value of i is ${i}`);
}

// ================================ continue ============================================

for(let i = 0; i <= 20; i++){
  if(i == 5){
    console.log("Detected 5");
    continue; // continue keyword <<< ignore a iteration / detect and continue loop
  }
  console.log(`Value of i is ${i}`);
}

