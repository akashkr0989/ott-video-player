import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface DetailsPageProps {
  title: string;
  description: string;
  imageUrl: string;
  videoId: any;
}

const VideoDetailsPage: React.FC<DetailsPageProps> = (
  { title, description, imageUrl, videoId },
) => {
  return <>Details Working

    <h1>Detail page id {videoId}</h1>
  </>;
};

export default VideoDetailsPage;
