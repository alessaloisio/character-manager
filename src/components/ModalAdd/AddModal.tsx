import React, { useState } from "react";

// MATERIAL UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// COMPONENTS
import FileUpload from "../FileUpload/FileUpload";
import postCharactere from "../../function/postCharactere";

const AppModal = (props: { open: boolean; close: any }) => {
  const [inputName, setInputName] = useState("");
  const [inputShortDescription, setInputShortDescription] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputImage, setInputImage] = useState("");

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

  const submit = async () => {
    await postCharactere({
      name: inputName,
      shortDescription: inputShortDescription,
      description: inputDescription,
      image: inputImage
    });

    // RESET ALL INPUT
    setInputName("");
    setInputShortDescription("");
    setInputDescription("");
    setInputImage("");

    // CLOSE MODAL
    props.close();
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Ajouté votre héro</DialogTitle>
      <DialogContent>
        <FileUpload onchange={setInputImage} />
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
          type="text"
          fullWidth
          multiline
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
