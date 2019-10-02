import React, { useState } from "react";

// MATERIAL-UI
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  CardMedia
} from "@material-ui/core";

// COMPONENTS
import ReactMarkdown from "react-markdown";
import EditModal from "../ModalEdit/EditModal";

// ADDONS
import ICharactere from "../../interfaces/ICharactere";
import cardImage from "../../function/cardImage";
import deleteOneCharactere from "../../function/deleteOneCharactere";

import "./ViewModal.css";

const ViewModal = (props: {
  open: boolean;
  close: any;
  data: ICharactere;
  update: any;
}) => {
  const charactere = props.data;

  // EDIT
  const [editModal, setEditModal] = useState(false);

  const handleBtnDelete = async () => {
    await deleteOneCharactere(charactere.id!);
    props.close(); // CLOSE the modal
  };

  const handleBtnEdit = () => {
    setEditModal(true);
  };

  const handleEditClose = () => {
    // CLOSE MODAL
    setEditModal(false);
  };

  const dialog = () => (
    <React.Fragment>
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
          <Button color="primary" onClick={handleBtnEdit}>
            Edit
          </Button>
          <Button color="secondary" onClick={handleBtnDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <EditModal
        open={editModal}
        close={handleEditClose}
        data={props.data}
        updateData={props.update}
      />
    </React.Fragment>
  );

  if (props.open) return dialog();

  return <div></div>;
};

export default ViewModal;
