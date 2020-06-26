import $ from 'jquery';
import {Person} from './business.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let person;
  $("#input").submit(function() {
    event.preventDefault();
    const age = $("#age").val();
    const planet = $('input:radio[name=planet]:checked').val();
    if (!age || !planet) {
      alert("please fill all fields");
    } else {
      person = new Person(age, planet);
      $("#output").text(person.age);
      $("#planet-choice").text(planet);
      $("#new-age").text(`Your age on ${planet} is: ${person.convertAge()}`);
      $("#life-expectancy").text(`Considering the life expectancy on Earth is 72.38 years, that means ${person.calcLifeExpt()}`);
    }
  });

});