import HeroSection from "../Components/HeroSection";
import ImproveSkills from "../Components/ImproveSkills";
import QuoteSection from "../Components/QuoteSection";
import ChiefsSection from "../Components/ChiefsSection";


export default function Home()
{
    return(
        <div>          
          <HeroSection />
          <ImproveSkills />
          <QuoteSection />
          <ChiefsSection />
       </div>
    )
}