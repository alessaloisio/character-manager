import React from "react";

import Header from "./components/Header/Header";
import ListCharacter from "./components/ListsCharacter/ListsCharacter";
import "./App.css";
import PostCharectere from "./function/postCharectere";


const App: React.FC = () => (
  <div className="App">
    <Header />
    <ListCharacter />
    <PostCharectere />
  </div>
);

export default App;
