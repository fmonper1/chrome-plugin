import { debounce } from "../js/utils";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import TrelloButton from "./TrelloButton";

window.addEventListener("load", () => {
  if (document.body.id !== "jira") return;
  console.log("jira.js loaded");
  // the id number of the last card that was clicked
  let lastCardId = null;

  // Show id of cards in Trello board
  let cards = document.getElementsByClassName("ghx-newcard");
  [...cards].forEach(card => {
    card.addEventListener("click", () => {
      // lastCardId = shortId.innerHTML;
      alert(window.location.href);
    });
  });

  // function injectApp(element) {
  //   const newDiv = document.createElement("div");
  //   newDiv.setAttribute("id", "chromeExtensionReactApp");
  //   element.appendChild(newDiv);
  //   ReactDOM.render(<TrelloButton lastCardId={lastCardId} />, newDiv);
  // }
  //
  // // Append log-hours button to window view of card
  // let windowWrapper = document.querySelector(".window-wrapper");
  // const myEfficientFn = debounce(function() {
  //   console.log("windowchange");
  //   let header = windowWrapper.querySelector(".window-header");
  //   if (header !== null && lastCardId) {
  //     injectApp(header);
  //   }
  // }, 500);
  //
  // // Observe changed in the window wrapper to see if a window opened
  // new MutationObserver(function(mutations, observer) {
  //   myEfficientFn();
  // }).observe(windowWrapper, {
  //   childList: true,
  //   subtree: false
  // });
});
