/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const icons = ["&spades;", "&hearts;", "&clubs;", "&diams;"];

  const generateIcon = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  };

  const symbol = generateIcon();

  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");

  topSuit.innerHTML = symbol;
  bottomSuit.innerHTML = symbol;

  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const generateNumber = () => {
    const randomIndexNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndexNumber];
  };

  const numeral = generateNumber();
  const count = document.querySelector(".number");

  count.innerHTML = numeral;
};
