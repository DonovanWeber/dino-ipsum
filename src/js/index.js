import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "src/css/styles.css";
import Name from "./dino-business.js";
import DinoService from "./dino-service.js";
$('form#form').submit((event) => {
  event.preventDefault();
  const userName = $('#user-input').val();
  
  let user =  new Name(userName);

  let userNameLetterCount = user.replaceWithDino();
  let promise = DinoService.getDino(userNameLetterCount);
  console.log(promise);
  promise.then((response) => { console.log(response);
    let body = JSON.parse(response);

  
    $('#output-dino').html(`<p>${body[0]}<p><br>`);
  });
  // for (let i=0; i < body.length; i++) {
  
  
  
  // promise.catch((error) => {
  //   console.error(error);
  // });





});
