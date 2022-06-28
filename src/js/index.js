import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "src/css/styles.css";
import Name from "./dino-business.js";
import DinoService from "./dino-service.js";
$('form#form').submit((event) => {
  event.preventDefault();
  const userName = $('#user-input').val();
  console.log(userName);
  let user =  new Name(userName);
  console.log(user);
  let dino = user.replaceWithDino();
  
  let promise = DinoService.getDino(dino);
  promise.then((response) => {
    const body = JSON.parse(response);
    $('#output-dino').append(`<p>${body[0]}<p><br>`);
  });
//promise





//output


});
