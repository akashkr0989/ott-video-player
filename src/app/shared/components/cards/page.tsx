import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./cards.module.scss";
import { useRouter } from "next/navigation";
import { CardsContext } from "@/app/(pages)/home/page";

interface CardProps {
  key: number;
  item: any;
}

const CardsPage: React.FC<CardProps> = ({ key, item }) => {
  const router = useRouter();

  const videoPlayList = useContext(CardsContext);

  const toDetailPage = () => {
    router.push(`${"details"}/${item.contentId}`);
  };
  return (
    <>
      <Card className={styles.cardContainer} onClick={toDetailPage}>
        <CardMedia
          component="img"
          alt={item.name}
          height="140"
          image={item?.thumbnail[0]?.srcset}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description.slice(0, 100)}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardsPage;
