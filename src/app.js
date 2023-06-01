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
};
