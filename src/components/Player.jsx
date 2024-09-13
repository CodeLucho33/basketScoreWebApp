import React from "react";
import { useState } from "react";
import stopLogo from "/stop.png";
import repeatLogo from "/repeat.png";
import { Fouls } from "./Fouls";


let valueBtnOne = 0;
let valueBtnTwo = 0;
export function Player({ nameTeamOne, nameTeamTwo, score1, score2, addPointsOne, addPointsTwo,time, isActive, deletePointsOne,deletePointsTwo, btnStop,btnReset,btnResetGame}) {
    const [foulsTeamOne, setFoulsTeamOne] = useState({
        foulsRedOne: 0,
        foulsYellowOne: 0,
        foulsRedTwo: 0,
        foulsYellowTwo: 0,
        isOne: true
    })
    function handleAddFoulRedTeamOne() {
        setFoulsTeamOne(prevState => ({
            ...prevState,
            foulsRedOne: prevState.foulsRedOne + 1
        }))
    }

    function handleAddFoulYellowTeamOne() {
        setFoulsTeamOne(prevState => ({
            ...prevState,
            foulsYellowOne: prevState.foulsYellowOne + 1
        }))
    }

    function handleAddFoulRedTeamTwo() {
        setFoulsTeamOne(prevState => ({
            ...prevState,
            foulsRedTwo: prevState.foulsRedTwo + 1

        }))
    }
    function handleAddFoulYellowTeamTwo() {
        setFoulsTeamOne(prevState => ({
            ...prevState,
            foulsYellowTwo: prevState.foulsYellowTwo + 1

        }))
    }

    return (
        <>

            <div className="content">
                {/* BOARD TEAM ONE */}
                <div className="board-team-one">

                    <h1>Team "{nameTeamOne}"</h1>
                    <div>
                        <Fouls
                            foulsRedOne={foulsTeamOne.foulsRedOne}
                            foulsYellowOne={foulsTeamOne.foulsYellowOne}
                            handleAddFoulRedTeam={handleAddFoulRedTeamOne}
                            handleAddFoulYellowTeam={handleAddFoulYellowTeamOne}

                        /></div>
                    <div className="score">
                        <p className="number-score">{score1} </p>

                    </div>
                    {

                       isActive ? <div className="btns-for-add-points">

                            <button id="btns" onClick={() => addPointsOne(valueBtnOne = 1)} className="btns">+1</button>
                            <button id="btns" onClick={() => addPointsOne(valueBtnOne = 2)} className="btns">+2</button>
                            <button id="btns" onClick={() => addPointsOne(valueBtnOne = 3)} className="btns">+3</button>

                            <button onClick={() => props.deletePointsOne(valueBtnOne)}>Back!</button>
                        </div>
                            :
                            <div className="btns-for-add-points">
                                <button disabled id="btns" className="btns">+1</button>
                                <button disabled id="btns" className="btns">+2</button>
                                <button disabled id="btns" className="btns">+3</button>
                                <button onClick={() => deletePointsOne(valueBtnOne)}>Back!</button>

                            </div>

                    }


                </div>

                {/* COUNT REVERSE */}

                <div className="timer">
                    {

                       isActive?
                            <div className="timer-stop">
                                <p className="text-time">{time}</p>

                                <button className="btn-stop" onClick={btnStop}>
                                    <img className="img-stop" src={stopLogo} alt="" />
                                </button>
                                <button onClick={btnResetGame} className="btn-reset">Reset game!</button>
                            </div>

                            :
                            <div className="timer-reverse">
                                <p className="text-time">{time}</p>

                                <button className="btn-reverse" onClick={btnReset}>
                                    <img className="img-reverse" src={repeatLogo} alt="" />
                                </button>
                                <button onClick={btnResetGame} className="btn-reset">Reset game!</button>

                            </div>


                    }

                </div>

                {/* BOARD TEAM TWO */}
                <div className="board-team-two">
                    <h1>Team "{nameTeamTwo}"</h1>
                    <div>
                        <Fouls
                            foulsRedOne={foulsTeamOne.foulsRedTwo}
                            foulsYellowOne={foulsTeamOne.foulsYellowTwo}
                            handleAddFoulRedTeam={handleAddFoulRedTeamTwo}
                            handleAddFoulYellowTeam={handleAddFoulYellowTeamTwo}

                        /></div>
                    <div className="score">
                        <p className="number-score">{score2}</p>
                    </div>

                    {
                        isActive ? <div className="btns-for-add-points">
                            <button id="btns" onClick={() => addPointsTwo(valueBtnTwo = 1)} className="btns">+1</button>
                            <button id="btns" onClick={() => addPointsTwo(valueBtnTwo = 2)} className="btns">+2</button>
                            <button id="btns" onClick={() => addPointsTwo(valueBtnTwo = 3)} className="btns">+3</button>
                            <button onClick={() => deletePointsTwo(valueBtnTwo)}>Back!</button>
                        </div>
                            :
                            <div className="btns-for-add-points">
                                <button disabled id="btns" className="btns">+1</button>
                                <button disabled id="btns" className="btns">+2</button>
                                <button disabled id="btns" className="btns">+3</button>
                                <button onClick={() => deletePointsTwo(valueBtnTwo)}>Back!</button>

                            </div>
                    }

                </div>



            </div>

        </>
    )
}