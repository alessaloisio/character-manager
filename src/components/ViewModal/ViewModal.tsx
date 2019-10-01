import React from "react";

import { Dialog } from "@material-ui/core";

import ICharactere from "../../interfaces/ICharactere";

// data: ICharactere
const ViewModal = (props: any) => (
  <Dialog open={props.open}>
    <h1>COUCOU</h1>
  </Dialog>
);

export default ViewModal;
