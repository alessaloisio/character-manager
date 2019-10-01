import React, { useState } from "react";

// MATERIAL UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// COMPONENTS
import Dragdrop from "../DragDrop/dragdrop";

const AppModal = (props: { open: boolean; close: any }) => {
  const [inputName, setInputName] = useState("");
  const [inputShortDescription, setInputShortDescription] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputImage, setInputImage] = useState(null);

  const handleChange = (e: any) => {
    switch (e.target.getAttribute("id")) {
      case "InputName":
        setInputName(e.target.value);
        break;
      case "InputShortDescription":
        setInputShortDescription(e.target.value);
        break;
      case "InputDescription":
        setInputDescription(e.target.value);
        break;
    }
  };

  const submit = () => {
    console.log("submit");
    console.log(inputName);
    console.log(inputShortDescription);
    console.log(inputDescription);
    // console.log(inputImage![0]);

    //blob
    //     arrayBuffer: ƒ arrayBuffer()
    //     size: (...)
    // slice: ƒ slice()
    //     stream: ƒ stream()
    //     text: ƒ text()
    //     type: (...)
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Ajouté votre héro</DialogTitle>
      <DialogContent>
        <Dragdrop onchange={setInputImage} />
        <TextField
          value={inputName}
          onChange={handleChange}
          autoFocus
          margin="dense"
          id="InputName"
          label="Name"
          fullWidth
        />
        <TextField
          value={inputShortDescription}
          onChange={handleChange}
          margin="dense"
          id="InputShortDescription"
          label="Short description"
          fullWidth
        />
        <TextField
          value={inputDescription}
          onChange={handleChange}
          margin="dense"
          id="InputDescription"
          label="Description"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} color="primary">
          Cancel
        </Button>
        <Button onClick={submit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppModal;
