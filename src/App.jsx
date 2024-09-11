import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormGame } from './components/FormGame'
import { Player } from './components/Player'


export default function App() {
  const [player, setPlayer] = useState({
    nameTeamOne: '',
    nameTeamTwo: '',
    scoreOne: 0,
    scoreTwo: 0,
    hasData: false


  })

  function addPointsTeamTwo(n) {
    setPlayer(prevPayer => ({
      ...prevPayer,
      scoreTwo: prevPayer.scoreTwo + n
    }))
  }

  function addPointsTeamOne(n) {
    setPlayer(prevPayer => ({
      ...prevPayer,
      scoreOne: prevPayer.scoreOne + n,


    }))


  }
  function handleSubmit() {
    let formGameEl = document.getElementById('form-game')
    let dataGame = new FormData(formGameEl)
    let nameOne = dataGame.get('name-one')
    let nameTwo = dataGame.get('name-two')


    setPlayer(prevPlayer => ({

      ...prevPlayer,
      hasData: true,
      nameTeamOne: nameOne,
      nameTeamTwo: nameTwo
    }))

  }

  return (
    <>
      {player.hasData === false ? <FormGame onSubmit={handleSubmit} /> : <Player nameTeamOne={player.nameTeamOne}
        nameTeamTwo={player.nameTeamTwo}
        score1={player.scoreOne}
        score2={player.scoreTwo}
        onClickOne={addPointsTeamOne}
        onClickTwo={addPointsTeamTwo} />}
    </>
  )
}
