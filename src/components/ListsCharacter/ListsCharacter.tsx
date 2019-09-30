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

import getCharactere from "../../function/getCharactere";

const ListsCharacter = () => {
  const [Charactere, setCharactere] = useState([]);

  useEffect(async () => {
    console.log("test");
  });

  return (
    <Container className="listsCharacter" maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
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
      </Grid>
    </Container>
  );
};

export default ListsCharacter;
