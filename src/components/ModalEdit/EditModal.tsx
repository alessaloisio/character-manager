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

// ADDONS
import ICharactere from "../../interfaces/ICharactere";
import putCharactere from "../../function/putCharactere";
import getOneCharactere from "../../function/getOneCharactere";

const EditModal = (props: {
  open: boolean;
  close: any;
  data: ICharactere;
  updateData: any;
}) => {
  const [inputName, setInputName] = useState(props.data.name);
  const [inputShortDescription, setInputShortDescription] = useState(
    props.data.shortDescription
  );
  const [inputDescription, setInputDescription] = useState(
    props.data.description
  );
  const [inputImage, setInputImage] = useState(props.data.image);

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
    if (typeof props.data.id !== "undefined") {
      await putCharactere(props.data.id, {
        name: inputName,
        shortDescription: inputShortDescription,
        description: inputDescription,
        image: inputImage
      });

      // UPDATE DATA
      props.updateData(await getOneCharactere(props.data.id));

      // CLOSE MODAL
      props.close();
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Éditer votre héro</DialogTitle>
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
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
