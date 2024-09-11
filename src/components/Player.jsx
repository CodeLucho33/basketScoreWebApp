import React from "react";
import { useState } from "react";

export function Player(props) {
    return (
        <>
            <div className="content">

                <div className="board-team-one">
                    <h1>Team "{props.nameTeamOne}"</h1>
                    <div className="score">
                        <p className="number-score">{props.score1}</p>
                    </div>
                    <div className="btns-for-add-points">
                        <button onClick={() => props.onClickOne(1)} className="btns">+1</button>
                        <button onClick={() => props.onClickOne(2)} className="btns">+2</button>
                        <button onClick={() => props.onClickOne(3)} className="btns">+3</button>

                    </div>

                </div>
                <div className="board-team-two">
                    <h1>Team "{props.nameTeamTwo}"</h1>
                    <div className="score">
                        <p className="number-score">{props.score2}</p>
                    </div>
                    <div className="btns-for-add-points">
                        <button onClick={() => props.onClickTwo(1)} className="btns">+1</button>
                        <button onClick={() => props.onClickTwo(2)} className="btns">+2</button>
                        <button onClick={() => props.onClickTwo(3)} className="btns">+3</button>

                    </div>
                </div>



            </div>

        </>
    )
}