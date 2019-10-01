import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dragdrop from "../DragDrop/dragdrop";

const AppModal = (props: { open: boolean; close: any }) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouté votre héro</DialogTitle>
        <DialogContent>
          <Dragdrop />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="name"
            fullWidth
          />
          <TextField
            margin="dense"
            id="short-description"
            label="short-description"
            type="description"
            fullWidth
          />
          <TextField
            margin="dense"
            id="description"
            label="description"
            type="description"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.close} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AppModal;
