export default class Name{
  constructor(userName) {
    this.userName = userName; 
  }
  //replace input string with an array
  // arrayTheName() {
  //   const array = this.userName.split("");
  //   return array;
  // }
  // jim ["j", "i", "m"]
  // replace each array index with a dinosaur name
  replaceWithDino()  {
    const userArray = [];
    let userName = this.userName;
    const array = userName.split("");
    for(let i=0; i < array.length; i++) {
      userArray.push(i);
    }
    return userArray.length;
  }
    
}
// constructor(userName) {
//   this.userName = userName; 
// }

// replaceWithDino() {
//   let userArray =[];
//   const array = this.userName.split("");
//   userArray.push(array);
//   console.log(userArray);
//   for(let i=0; i < userArray.length; i++) {
//     userArray.push(i);
//     console.log(userArray);
//   }
  
// }
// }
// const user = new Name('jim');

// $('.dinoDiv') .append('<p>${letterArray[i]}</p>');
//https://dinoipsum.com/api/?format=json&paragraphs=1&words=${userNameLetterCount}