
import HeroCard from './HeroCard'
import Matrix from './Matrix'
import ButtonsLinks from './components/ButtonsLinks'

function App() {





  return (
    <div>
      <Matrix />
      <div className="absolute inset-0 flex justify-center items-stretch">
        <div className="flex flex-col justify-center items-center">
          <HeroCard />
          <ButtonsLinks/>
        </div>
      </div>

    </div>
  )
}

export default App
