import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  return (
    <div>
      <Zoom
        key="primary"
        in={true}
      timeout={transitionDuration} 
        style={{
          transitionDelay: `${transitionDuration.exit}ms`
        }}
        unmountOnExit
      >
        <Fab aria-label="Add" className={classes.fab} color="primary">
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
