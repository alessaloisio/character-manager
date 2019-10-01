import React, { useEffect, useState } from "react";

// MATERIAL-UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// COMPONENTS
import ViewModal from "../ModalView/ViewModal";

// ADDONS
import ICharactere from "../../interfaces/ICharactere";
import getCharactere from "../../function/getCharactere";
import getOneCharactere from "../../function/getOneCharactere";
import cardImage from "../../function/cardImage";

import "./ListsCharacter.css";

const ListsCharacter = () => {
  const [characteres, setCharacteres] = useState([]);
  const [charactere, setCharactere] = useState();

  // VIEW
  const [viewModal, setViewModal] = useState(false);

  // Récupère les infos une fois le composent charger
  useEffect(() => {
    const fetchData = async () => {
      setCharacteres(await getCharactere());
    };

    fetchData();
  });

  // View MODAL
  const handleViewOpen = async (id: string) => {
    // REQUEST
    setCharactere(await getOneCharactere(id));
    // SHOW MODAL
    setViewModal(true);
  };
  const handleViewClose = () => {
    // SHOW MODAL
    setViewModal(false);
  };

  return (
    <Container className="listsCharacter" maxWidth="md">
      <Grid container spacing={4}>
        {characteres.map((charactere: ICharactere) => (
          <Grid item key={charactere.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className="cardMedia"
                image={cardImage(charactere.image)}
                src="img"
                title={charactere.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {charactere.name}
                </Typography>
                <Typography>{charactere.shortDescription}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    handleViewOpen(charactere.id!);
                  }}
                  size="small"
                  color="primary"
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ViewModal
        open={viewModal}
        close={handleViewClose}
        data={charactere}
      ></ViewModal>
    </Container>
  );
};

export default ListsCharacter;
