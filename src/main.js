import $ from 'jquery';
import {Person} from './business.js';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  let person;
  $("#input").submit(function() {
    event.preventDefault();
    const age = $("#age").val();
    person = new Person(age);
    $("#output").text(person.age);
  });

});