import React from "react";

// MATERIAL-UI
import { Dialog, CardMedia } from "@material-ui/core";

// ADDONS
import ICharactere from "../../interfaces/ICharactere";
import cardImage from "../../function/cardImage";
import "./ViewModal.css";

// data: ICharactere
const ViewModal = (props: { open: boolean; data: ICharactere; close: any }) => {
  const charactere = props.data;

  const dialog = () => (
    <Dialog className="dialogView" open={props.open} onClose={props.close}>
      <CardMedia
        className="cardMedia"
        image={cardImage(charactere.image)}
        src="img"
        title={charactere.name}
      />
      <h1>{charactere.name}</h1>
    </Dialog>
  );

  if (props.open) return dialog();

  return <div></div>;
};

export default ViewModal;
