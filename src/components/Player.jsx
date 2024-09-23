import React from "react";
import { useState } from "react";
import stopLogo from "/stop.png";
import repeatLogo from "/repeat.png";
import { Timer } from "./Timer";
import { Board } from "./Board";
export function Player({ nameTeamOne, nameTeamTwo, score1, score2, addPointsOne, addPointsTwo, time, isActive, deletePointsOne, deletePointsTwo, btnStop, btnReset, btnResetGame }) {
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
    return (<>
        <div className="content">
            <Board
                name={nameTeamOne}
                foulsRed={foulsTeamOne.foulsRedOne}
                foulsYellow={foulsTeamOne.foulsYellowOne}
                handleAddFoulRedTeam={handleAddFoulRedTeamOne}
                handleAddFoulYellowTeam={handleAddFoulYellowTeamOne}
                isActive={isActive}
                addPoints={addPointsOne}
                deletePoints={deletePointsOne}
                score={score1}
            />
            <Timer
                isActive={isActive}
                time={time}
                btnStop={btnStop}
                stopLogo={stopLogo}
                btnResetGame={btnResetGame}
                btnReset={btnReset}
                repeatLogo={repeatLogo}
            />
            <Board
                name={nameTeamTwo}
                foulsRed={foulsTeamOne.foulsRedTwo}
                foulsYellow={foulsTeamOne.foulsYellowTwo}
                handleAddFoulRedTeam={handleAddFoulRedTeamTwo}
                handleAddFoulYellowTeam={handleAddFoulYellowTeamTwo}
                isActive={isActive}
                addPoints={addPointsTwo}
                deletePoints={deletePointsTwo}
                score={score2}
            />
        </div>
    </>
    )
}