import React from "react";

import { Dialog } from "@material-ui/core";

import ICharactere from "../../interfaces/ICharactere";

// data: ICharactere
const ViewModal = (props: { open: boolean; data: ICharactere }) => {
  console.log(props);
  return (
    <Dialog open={props.open}>
      <h1>COUCOU</h1>
    </Dialog>
  );
};

export default ViewModal;
