import "./styles.css";
import React from "react";
import { useState } from "react";
// import image1 from "./lucky-birthday.svg";

let inputDate = "";
let luckyNumber = 0;

export default function App() {
  const [result, setResult] = useState();

  function checkLucky(event) {
    // to stop refreshing the page when check button is clicked and submit is done
    event.preventDefault();
    const dateArray = inputDate.split("-");
    let sum = 0;

    dateArray.forEach((string) => {
      for (var i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });

    // now check whether the sum is divisible by lucky number or not

    if (sum % luckyNumber === 0) {
      setResult("Hurray your birth date is lucky!");
    } else {
      setResult("Oops! Your birthday is not lucky :(");
    }
  }

  return (
    <div className="App">
      {/* <div className="bg-image" style={{ background: `url(${image1})` }}> */}
      <h1 style={{ color: "#be185d" }}>Is your Birthday Lucky?</h1>
      <h3 style={{ color: "red", fontSize: "1.5rem" }}>
        {" "}
        Privacy Notice! We are not storing your data.
      </h3>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        Enter your birth date and lucky number below to find out!
        <hr />
        <form onSubmit={checkLucky}>
          <h3>Select your birth date:</h3>
          <input
            style={{ cursor: "pointer" }}
            onChange={(event) => {
              inputDate = event.target.value;
            }}
            type="date"
            required
          ></input>
          <h3>Enter your Lucky Number:</h3>
          <input
            onChange={(event) => {
              luckyNumber = event.target.value;
            }}
            type="number"
          ></input>
          <h3>Click on the button below</h3>
          <button style={{ cursor: "pointer" }} type="submit">
            Check
          </button>
        </form>
        <h2 className="result">{result}</h2>
        <hr />
      </div>
      <footer className="footer">
        <div className="footer-header">Find me on Social Media</div>

        <ul className="list-non-bullet">
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://www.linkedin.com/in/kaustubh-manglurkar-871ba0167/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://github.com/KaustubhM1997?tab=repositories"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://twitter.com/KaustubhManglu1"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://dev.to/kaustubhmanglu1/create-your-first-cli-app-4c1p"
            >
              <i class="fab fa-dev"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
