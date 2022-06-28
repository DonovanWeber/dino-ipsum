# Dino Ipsum

#### (Brief Description of Application)

#### By Donovan Weber and Tyler Emmerson

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

## Setup/Installation Requirements

* Navigate to https://github.com/DonovanWeber/dino-ipsum
* Click on the green "Code" button and copy the repository URL or click on the copy button
* Open the terminal on your desktop
* Once in the terminal, use it to navigate to your desktop folder
* Once inside your desktop folder, use the command `git clone https://github.com/DonovanWeber/dino-ipsum.git`
* After cloning the project, navigate into it using the command `cd dino-ipsum`
* Use the command `git remote` to confirm the creation of the new local repository
* Open the project with the code editor of your choice
* run *npm install
* run *run build
* run *run start

## Known Bugs

* _Answer is being given back as an array within an array_


## License

## Contact Information

## TESTS

test 1 :constructor(userName) {
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
expectation : if a const user = new Name('Jim');
our input name will be slipt and pushed into userArray
OUTCOME : Returns ["j","i","m"] within another array not just by itself

test 2 : class Name{
  constructor(userName) {
    this.userName = userName; 
  }
//replace input string with an array
  arrayTheName() {
    const array = this.userName.split("");
    return array;
  }
expectation : to have jim in an array on it's own
OUTCOME : Returns ["j","i","m"] in an array on it's own.

test 3 : getting the array length of the user input[]

test 4 : taking the array length and inserting it into our API length
expectation: wanting the letters in a users input to total how many dinos will be given back.

test 5 : class Name{
  constructor(userName) {
    this.userName = userName; 
  }
  replaceWithDino()  {
    const userArray = [];
    let userName = this.userName;
    // userName.toString();
    console.log(userName);
    const array = userName.split("");
    for(let i=0; i < array.length; i++) {
      userArray.push(i);
    }
    return userArray.length;
  }
}
OUTCOME: inputted jim for the user input and returned 3 different dinosaurs but in an array inside a array.
