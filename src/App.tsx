
import HeroCard from './HeroCard'
import Matrix from './Matrix'

// import ButtonsLinks from './components/ButtonsLinks'
//import AnimationsIntro from './components/AnimationsIntro'
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import ButtonsLinks from './components/ButtonsLinks'

function App() {



//todo

  return (
    <>
      <Parallax pages={2} style={{top: "0", left: "0"}}>
        <ParallaxLayer offset={0} speed={1} >
          <div className="bg-black">
            <div className="absolute inset-0 flex justify-center items-stretch bg-black bg-opacity-0">
              <div className="flex flex-col justify-center items-center">
                <HeroCard />
                {/* <AnimationsIntro/> */}
                <ButtonsLinks/>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4} >
          <div className="bg-black">
            <div className="absolute inset-0 flex justify-center items-stretch bg-black bg-opacity-0">
              <div className="flex flex-col justify-center items-center">
                <HeroCard />
                {/* <AnimationsIntro/> */}
                {/* <ButtonsLinks/> */}
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
      <Matrix />
    </>
  )
}

export default App
