"use client";
import BannerPage from "@/app/shared/components/banner/page";
import CardsPage from "@/app/shared/components/cards/page";
import styled from "@emotion/styled";
import { Container, Paper } from "@mui/material";
import styles from "./home.module.scss";
import SlideCards from "@/app/shared/components/slider/page";

interface HomeProps {}

interface SliderProps {
  cards: Array<{ title: string; description: string; imageUrl: string }>;
}

const sampleSliderData: SliderProps = {
  cards: [
    {
      title: "Movie 1",
      description: "Description for Movie 1",
      imageUrl:
        "https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 2",
      description: "Description for Movie 2",
      imageUrl:
        "https://images.unsplash.com/photo-1705674806822-a2015163f275?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 3",
      description: "Description for Movie 3",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 4",
      description: "Description for Movie 4",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 5",
      description: "Description for Movie 5",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 6",
      description: "Description for Movie 6",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 7",
      description: "Description for Movie 7",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 8",
      description: "Description for Movie 8",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 9",
      description: "Description for Movie 9",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 10",
      description: "Description for Movie 10",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 11",
      description: "Description for Movie 11",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 12",
      description: "Description for Movie 12",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Movie 13",
      description: "Description for Movie 13",
      imageUrl:
        "https://images.unsplash.com/photo-1705018321223-517bb82cff32?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

const bannerUrl =
  // "https://images.unsplash.com/photo-1540126034813-121bf29033d2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // "https://images.unsplash.com/photo-1682687220866-c856f566f1bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
"https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const desc =
  "Nature is a mesmerizing tapestry of life, where vibrant ecosystems weave together to create breathtaking landscapes. From lush, emerald-green forests teeming with diverse flora and fauna to expansive, azure skies that host a ballet of birds and insects, nature is a symphony of interconnected elements.";

const HomePage: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <BannerPage backgroundImage={bannerUrl} description={desc} />
      <Container maxWidth={false} style={{ padding: "0 3rem" }}>
        <div className={styles.cardsContainer}>
          <SlideCards
            cards={sampleSliderData.cards}
            category={"Recently Watched"}
            cardsPerPage={5}
          />
        </div>
        <div className={styles.cardsContainer}>
          <SlideCards
            cards={sampleSliderData.cards}
            category={"Sci-Fi Movies"}
            cardsPerPage={5}
          />
        </div>
        <div className={styles.cardsContainer}>
          <SlideCards
            cards={sampleSliderData.cards}
            category={"Comedy Movies"}
            cardsPerPage={5}
          />
        </div>
        <div className={styles.cardsContainer}>
          <SlideCards
            cards={sampleSliderData.cards}
            category={"Thriller"}
            cardsPerPage={5}
          />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
