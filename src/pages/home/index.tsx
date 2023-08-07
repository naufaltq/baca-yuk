import Carousel from "../../components/carousel";
import HeroSection from "../../components/heroSection";
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../../components/heroSection/data";

const Home = () => {
  return (
    <div>
      <Carousel/>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjTwo}/>
      <HeroSection {...homeObjThree}/>
      <HeroSection {...homeObjFour}/>
      <HeroSection {...homeObjFive}/>
    </div>
  )
}

export default Home;
