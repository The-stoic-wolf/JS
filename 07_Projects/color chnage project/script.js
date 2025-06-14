const button  = document.querySelectorAll('.buttons')
const body = document.querySelector("body")

button.forEach( function(button) {
  console.log(button)
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
    if(e.target == 'grey'){
      //body.style.backgroundColor = "grey"
      body.style.backgroundColor = e.targert.id
    }
    
    if(e.target == 'white'){
      //body.style.backgroundColor = "grey"
      body.style.backgroundColor = e.targert.id
    }

    if(e.target == 'blue'){
      //body.style.backgroundColor = "grey"
      body.style.backgroundColor = e.targert.id
    }

    if(e.target == 'yellow'){
      //body.style.backgroundColor = "grey"
      body.style.backgroundColor = e.targert.id
    }
  })
})





























