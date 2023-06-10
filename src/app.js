/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const icons = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  const colors = ["black", "red", "black", "red"];

  const generateIcon = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  };

  const generateColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const symbol = generateIcon();
  let color = generateColor();

  if (symbol === "&spades;" || symbol === "&clubs;") {
    color = "black";
  } else color = "red";

  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");

  topSuit.innerHTML = symbol;
  bottomSuit.innerHTML = symbol;

  topSuit.style.color = color;
  bottomSuit.style.color = color;

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
