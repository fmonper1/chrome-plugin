import React, { useState, useEffect, Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const App = () => {
  const [list, setList] = useState([]);
  const [date, setDate] = useState("--:--");

  useEffect(() => {
    setInterval(() => {
      let curr = new Date();
      let hours = curr
        .getHours()
        .toString()
        .padStart(2, "0");
      let mins = curr
        .getMinutes()
        .toString()
        .padStart(2, "0");
      let secs = curr
        .getSeconds()
        .toString()
        .padStart(2, "0");
      setDate(`${hours}:${mins}:${secs}`);
      console.log("hello");
    }, 1000);
  }, []);

  const getQuote = () => {
    let aList = [...list, []];
    setList(aList);
  };

  return (
    <Container maxWidth={"xl"} style={{ margin: "0 auto" }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <form
            method="GET"
            action="https://www.google.com/search"
            target="_blank"
          >
            <TextField
              id="outlined-basic"
              focused
              name="q"
              label="Google search"
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={12}>
          <div>{date}</div>
        </Grid>
        <Grid item></Grid>
      </Grid>
      {list.map((item, key) => (
        <p key={key}>lkdsjlkfjlksdj</p>
      ))}
    </Container>
  );
};

export default App;
