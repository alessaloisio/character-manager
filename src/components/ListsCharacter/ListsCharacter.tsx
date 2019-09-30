import React, { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./ListsCharacter.css";

import ICharactere from "../../interfaces/ICharactere";
import getCharactere from "../../function/getCharactere";

const ListsCharacter = () => {
  const [Characteres, setCharacteres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCharacteres(await getCharactere());
    };

    fetchData();
  });

  const cardImage = (image: string) => {
    if (typeof image !== "undefined") return `data:image/gif;base64,${image}`;

    return "https://source.unsplash.com/random";
  };

  return (
    <Container className="listsCharacter" maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {Characteres.map((charactere: ICharactere) => (
          <Grid item key={charactere.id} xs={12} sm={6} md={4}>
            <Card>
              {}
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
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListsCharacter;
