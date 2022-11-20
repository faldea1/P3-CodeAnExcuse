/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#show").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

function generateExcuse() {
  let pronoun = ["The", "A", "My", "Her"];
  let subject = ["elephant", "cat", "dog", "parot", "bear", "ovni"];
  let verb = [
    "keeps stealing my",
    "break my",
    "hide my",
    "ate my",
    "crushed my"
  ];
  let thing = ["food", "honey", "ball", "money", "books"];
  let complement = [
    "on the yard",
    "in my room",
    "in the office",
    "in the party",
    "in the forest"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let thingIndex = Math.floor(Math.random() * thing.length);
  let complementIndex = Math.floor(Math.random() * complement.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    verb[verbIndex] +
    " " +
    thing[thingIndex] +
    " " +
    complement[complementIndex]
  );
}
