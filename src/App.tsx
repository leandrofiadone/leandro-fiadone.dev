
import HeroCard from './HeroCard'
import Matrix from './Matrix'

import ButtonsLinks from './components/ButtonsLinks'
//import AnimationsIntro from './components/AnimationsIntro'

function App() {





  return (
    <div className='bg-black'>
      <Matrix />

      <div className="absolute inset-0 flex justify-center items-stretch bg-black bg-opacity-0">
        <div className="flex justify-center items-center">
          <HeroCard />
          {/* <AnimationsIntro/> */}

        </div>
      </div>

    </div>
  )
}

export default App
