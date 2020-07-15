import React, { useState, Component, Fragment } from "react";

const TrelloButton = ({ lastCardId }) => {
  const [list, setList] = useState([]);
  const getQuote = () => {
    let aList = [...list, []];
    setList(aList);
  };

  return (
    <div className="modal-buttons">
      <button onClick={getQuote}>Add {lastCardId} to worklogs</button>
      {/*{list.map((item, key) => (*/}
      {/*  <p key={key}>v</p>*/}
      {/*))}*/}
    </div>
  );
};

export default TrelloButton;
