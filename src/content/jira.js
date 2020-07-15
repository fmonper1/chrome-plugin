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
      let portalContainer = document.getElementsByClassName(
        "atlaskit-portal-container"
      )[0];
      console.log("adding btn");

      let btn = document.createElement("div");
      btn.setAttribute(
        "style",
        "display: block;position: absolute; top: 0; left: 0; z-index: 999;"
      );
      btn.setAttribute("id", "added-button");
      const text = document.createTextNode("add to worklogs"); // Create a text node
      btn.appendChild(text);
      portalContainer.append(btn);
    });
  });

  // function injectApp(element) {
  //   const newDiv = document.createElement("div");
  //   newDiv.setAttribute("id", "chromeExtensionReactApp");
  //   element.appendChild(newDiv);
  //   ReactDOM.render(<TrelloButton lastCardId={lastCardId} />, newDiv);
  // }
  //
  // Append log-hours button to window view of card
  let portalParent = document.getElementsByClassName(
    "atlaskit-portal-container"
  )[0];

  // const myEfficientFn = debounce(function() {
  //   console.log("windowchange");
  //   let header = portalContainer.querySelector(".window-header");
  //   if (header !== null && lastCardId) {
  //     injectApp(header);
  //   }
  // }, 500);

  // Observe changed in the window wrapper to see if a window opened
  new MutationObserver(function(mutations, observer) {
    for (let index = 0; index < mutations.length; index++) {
      let mutation = mutations[index];

      if (mutation.type === "childList" && mutation.removedNodes.length) {
        console.log("removing btn");

        let button = document.getElementById("added-button");
        button !== null ? button.remove() : null;

        break;
      }
    }
    console.log(mutations);
    // myEfficientFn();
  }).observe(portalParent, {
    childList: true,
    subtree: false
  });
});
