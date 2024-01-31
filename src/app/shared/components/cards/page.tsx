import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './cards.module.scss'

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardsPage: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <>
    <Card className={styles.cardContainer}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default CardsPage;
