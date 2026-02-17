import Image from "next/image";
import Slider from "./components/hero/Hero";
import Mission from "./mission/Mission";
import Service from "./components/service/Service";


export default function Home() {
  return (
    <>
      <Slider/>
      <Mission/>
      <Service/>
    </>
  );
}
