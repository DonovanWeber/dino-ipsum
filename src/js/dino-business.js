export default class Name{
  constructor(userName) {
    this.userName = userName; 
  }

  replaceWithDino() {
    let userArray =[];
    const array = this.userName.split("");
    userArray.push(array);
    console.log(userArray);
    for(let i=0; i < userArray.length; i++) {
      userArray.push(i);
      console.log(userArray);
    }
    
  }
}