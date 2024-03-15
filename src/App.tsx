
import HeroCard from './HeroCard'
import Matrix from './Matrix'

function App() {





  return (
    <div>
      <Matrix />
      <div className="absolute inset-0 flex justify-center items-stretch">
        <div className="flex justify-center items-center">
          <HeroCard />
        </div>
      </div>

    </div>
  )
}

export default App
