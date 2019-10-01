import React, { useState } from "react";

import Header from "./components/Header/Header";
import ListCharacter from "./components/ListsCharacter/ListsCharacter";

import AddModal from "./components/ModalAdd/AddModal";
import FloatButton from "./components/FloatButton/FloatButton";

import "./App.css";

const App = () => {
  const [openAddModal, setopenAddModal] = useState(false);

  const handleClickOpen = () => {
    setopenAddModal(true);
  };

  const handleClose = () => {
    setopenAddModal(false);
  };

  return (
    <div className="App">
      <Header />
      <ListCharacter />
      <AddModal open={openAddModal} close={handleClose} />
      <FloatButton onClick={handleClickOpen} />
    </div>
  );
};

export default App;
