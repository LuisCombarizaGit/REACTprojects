import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";

function Cards(props) {
  console.log(props);

  return (
    <div className={styles.container}>
      <h1>Cards</h1>
    </div>
  );
}

export default Cards;
