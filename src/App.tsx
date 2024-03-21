
import HeroCard from './HeroCard'
import Matrix from './Matrix'
import SkillsCarrousell from './components/SkillsCarrousell'

// import ButtonsLinks from './components/ButtonsLinks'
//import AnimationsIntro from './components/AnimationsIntro'

function App() {



//todo

  return (
    <div className="bg-black">
      <Matrix />

      <div className="absolute inset-0 flex flex-col justify-center items-stretch bg-black bg-opacity-0">
        <div className="flex flex-col justify-center items-center">
          <HeroCard />
          {/* <AnimationsIntro/> */}
          {/* <ButtonsLinks/> */}
        </div>
        <SkillsCarrousell />
      </div>
    </div>
  )
}

export default App
