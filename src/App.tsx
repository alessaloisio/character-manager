import React from "react";

import Header from "./components/Header/Header";
import ListCharacter from "./components/ListsCharacter/ListsCharacter";

import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <ListCharacter />
  </div>
);

export default App;
