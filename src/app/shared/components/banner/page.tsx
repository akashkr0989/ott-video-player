"use client";
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import styles from "./banner.module.scss";
import httpService from "@/app/services/http.service";

export interface BannerProps {
  backgroundImage: string;
  description: string;
}

const BannerPage: React.FC<BannerProps> = ({
  backgroundImage,
  description,
}) => {
  const getInfo = () => {
    console.log("first");
    httpService
      .get("all")
      .then((data) => {
        console.log("API Response", data);
      })
      .catch((error: Error) => {
        console.log("API Error", error);
      });
  };

  return (
    <div
      className={styles.bannerContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container maxWidth="sm">
        <div className={styles.descriptionBox}>
          <Typography className={styles.description} variant="h4">
            {description}
          </Typography>
          <div>
            <Button
              className={styles.BannerButton}
              variant="contained"
              color="primary"
              onClick={getInfo}
            >
              Play
            </Button>
            <Button
              className={styles.bannerButton}
              variant="contained"
              color="secondary"
            >
              More Info
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerPage;
