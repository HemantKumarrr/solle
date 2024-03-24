import GameCard from "./GameCard/GameCard"

const Hero = () => {
  return (
    <div className="w-full px-5 py-8" >
        <div className="flex flex-wrap gap-8 w-full justify-center">
            <GameCard gameName='Number Game' />
            <GameCard gameName='Color Game' />
            <GameCard gameName='Token Game' />
            <GameCard gameName='Demo Game' />
            <GameCard gameName='Number Game' />
            <GameCard gameName='Color Game' />
            <GameCard gameName='Token Game' />
            <GameCard gameName='Demo Game' />
        </div>
    </div>
  )
}

export default Hero
