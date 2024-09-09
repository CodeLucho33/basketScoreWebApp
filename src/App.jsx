import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PlayerOne } from './components/PlayerOne'
import { PlayerTwo } from './components/PlayerTwo'
import { InitialForm } from './components/InitialForm'

export default function App() {

  const [dataMacht, setDataMacht] = useState({
    nameTeamOne: '',
    nameTeamTwo: '',
    timeMacht: ''
  })
  

  return (
    <>
      <InitialForm/>
    </>
  )
}


