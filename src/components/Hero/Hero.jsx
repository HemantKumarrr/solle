import GameCard from "./GameCard/GameCard"

const Hero = () => {
  return (
    <div className="w-full px-5 py-8" >
        <div className="flex flex-wrap gap-8 w-full justify-center">
            <GameCard gameName='Number Game' color='green-400' />
            <GameCard gameName='Color Game' color='green-400' />
            <GameCard gameName='Token Game' color='green-400' />
            <GameCard gameName='Demo Game' color='green-400' />
            <GameCard gameName='Number Game' color='green-400' />
            <GameCard gameName='Color Game' color='green-400' />
            <GameCard gameName='Token Game' color='green-400' />
            <GameCard gameName='Demo Game' color='green-400' />
        </div>
    </div>
  )
}

export default Hero
