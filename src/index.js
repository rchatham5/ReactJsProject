import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

const App = () => {
//function App() {
  return (
    <div>
      <Header />
      <h1>Hello React World</h1>
      <h1>Second line test</h1>
    </div>
  );
}
/* let React=require('react');
let ReactDOM=require('react-dom'); 

function App() {
        return (
                <h1>Hello React World ES5</h1>
        )
} */

ReactDOM.render(<App />, document.getElementById("root"));
