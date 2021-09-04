import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Router from "./components/Router";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  { value: "red", label: "The Color Red" },
  { value: "green", label: "The Color Green" },
  { value: "blue", label: "The Color Blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Router path="/">
        <Accordion items={items} />
      </Router>
      <Router path="/list">
        <Search />
      </Router>
      <Router path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Router>
      <Router path="/translate">
        <Translate />
      </Router>
    </div>
  );
};

export default App;
