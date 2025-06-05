const user1 = {
  name: "James",
  class: 4,
  greet: function() {
    const now = () => {
      let userName = "James";
      console.log(`This is user_1: ${this.name}`)
    }
    now();
  } 
}
user1.greet()