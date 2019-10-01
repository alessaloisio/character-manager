import React from "react";

// MATERIAL-UI
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  CardMedia
} from "@material-ui/core";

// ADDONS
import ICharactere from "../../interfaces/ICharactere";
import cardImage from "../../function/cardImage";
import deleteOneCharactere from "../../function/deleteOneCharactere";
import ReactMarkdown from "react-markdown";

import "./ViewModal.css";

// data: ICharactere
const ViewModal = (props: { open: boolean; data: ICharactere; close: any }) => {
  const charactere = props.data;

  const handleDelete = async () => {
    await deleteOneCharactere(charactere.id!);
    // CLOSE the modal
    props.close();
  };

  const dialog = () => (
    <Dialog className="dialogView" open={props.open} onClose={props.close}>
      <CardMedia
        className="cardMedia"
        image={cardImage(charactere.image)}
        src="img"
        title={charactere.name}
      />
      <DialogTitle id="form-dialog-title">
        {charactere.name || "undefined"}
      </DialogTitle>
      <DialogContent>
        {<ReactMarkdown source={charactere.description} /> || "undefined"}
      </DialogContent>
      <DialogActions>
        <Button color="primary">Edit</Button>
        <Button color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );

  if (props.open) return dialog();

  return <div></div>;
};

export default ViewModal;
