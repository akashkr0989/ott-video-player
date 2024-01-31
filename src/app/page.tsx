import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./(pages)/home/page";
import { redirect } from "next/navigation";
import HomeLayout from "./(pages)/layout";

export default function Home() {
  // return (
  //   <HomeLayout children/>
  //   );
    redirect("/home");
}
