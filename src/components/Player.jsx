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
                    {
                    props.isActive ? <div className="btns-for-add-points">
                        <button id="btns" onClick={() => props.onClickOne(1)} className="btns">+1</button>
                        <button id="btns" onClick={() => props.onClickOne(2)} className="btns">+2</button>
                        <button id="btns" onClick={() => props.onClickOne(3)} className="btns">+3</button>

                    </div> 
                    :
                        <div className="btns-for-add-points">
                            <button disabled id="btns" onClick={() => props.onClickOne(1)} className="btns">+1</button>
                            <button disabled id="btns" onClick={() => props.onClickOne(2)} className="btns">+2</button>
                            <button disabled id="btns" onClick={() => props.onClickOne(3)} className="btns">+3</button>

                        </div>

                    }


                </div>
                <p className="count-reverse">{props.isActive?props.time:null}</p>
                <div className="board-team-two">
                    <h1>Team "{props.nameTeamTwo}"</h1>
                    <div className="score">
                        <p className="number-score">{props.score2}</p>
                    </div>

                    {
                    props.isActive ? <div className="btns-for-add-points">
                        <button id="btns" onClick={() => props.onClickTwo(1)} className="btns">+1</button>
                        <button id="btns" onClick={() => props.onClickTwo(2)} className="btns">+2</button>
                        <button id="btns" onClick={() => props.onClickTwo(3)} className="btns">+3</button>

                    </div>
                     : 
                     <div className="btns-for-add-points">
                        <button disabled id="btns" onClick={() => props.onClickTwo(1)} className="btns">+1</button>
                        <button disabled id="btns" onClick={() => props.onClickTwo(2)} className="btns">+2</button>
                        <button disabled id="btns" onClick={() => props.onClickTwo(3)} className="btns">+3</button>

                    </div>
                    }

                </div>



            </div>

        </>
    )
}