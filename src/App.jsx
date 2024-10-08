import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormGame } from './components/FormGame'
import { Player } from './components/Player'
import { useEffect } from 'react'

export default function App() {
  const [player, setPlayer] = useState({
    nameTeamOne: '',
    nameTeamTwo: '',
    scoreOne: 0,
    scoreTwo: 0,
    hasData: false
  })


  const [timeInput, setTimeInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleResetGame() {
    setTimeLeft(timeInput);
    setPlayer(prevState => ({
      ...prevState,
      scoreOne: 0,
      scoreTwo: 0

    }));
  }
  function handleInputChange(e) {
    const reverseTimerEl = document.getElementById('reverse-timer').value
    setTimeInput(reverseTimerEl)

  }
  function handleReset() {
    setIsRunning(true)
  }

  function handleStop() {
    if (timeLeft !== 0) {
      setIsRunning(false);
    }


  }
  function deleteLastPointAddedOne(n) {

    setPlayer(prevPlayer => ({
      ...prevPlayer,
      scoreOne: prevPlayer.scoreOne - n
    }))
  }


  function deleteLastPointAddedTwo(n) {

    setPlayer(prevPlayer => ({
      ...prevPlayer,
      scoreTwo: prevPlayer.scoreTwo - n
    }))
  }

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
  function handleSubmit(e) {
    let formGameEl = document.getElementById('form-game')
    let dataGame = new FormData(formGameEl)
    let nameOne = dataGame.get('name-one')
    let nameTwo = dataGame.get('name-two')
    const timeInSeconds = parseInt(timeInput);
    if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
      setTimeLeft(timeInSeconds)
      setIsRunning(true);

    }


    setPlayer(prevPlayer => ({

      ...prevPlayer,
      hasData: true,
      nameTeamOne: nameOne,
      nameTeamTwo: nameTwo
    }))

  }
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false)
    }
  }, [timeLeft, isRunning]);

  return (
    <>
      {player.hasData === false ?
        <FormGame
          form={handleSubmit}
          valueTimer={handleInputChange}

        /> :
         <Player
          nameTeamOne={player.nameTeamOne}
          nameTeamTwo={player.nameTeamTwo}
          score1={player.scoreOne}
          score2={player.scoreTwo}
          addPointsOne={addPointsTeamOne}
          addPointsTwo={addPointsTeamTwo}
          time={timeLeft}
          isActive={isRunning}
          deletePointsOne={deleteLastPointAddedOne}
          deletePointsTwo={deleteLastPointAddedTwo}
          btnStop={handleStop}
          btnReset={handleReset}
          btnResetGame={handleResetGame}

        />
      }
    </>
  )
}
