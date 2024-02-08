"use client";
import VideoDetailsPage from "@/app/shared/components/video-details/page";
import { useParams, useRouter } from "next/navigation";

const WatchVideo: React.FC = () => {
  const params = useParams();

  return <>

  <h1>this is watch video page {params.playerId}2</h1>
  
  </>;
};

export default WatchVideo;
