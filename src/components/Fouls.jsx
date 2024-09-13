import React from "react";

export function Fouls({foulsRedOne,foulsYellowOne,handleAddFoulRedTeam,handleAddFoulYellowTeam}) {
    return (
        <>
            <fieldset className="fieldset">
                <legend>Fouls</legend>
                <div className="btns-fouls">
                    <button onClick={handleAddFoulRedTeam} className="foul foul-red">{foulsRedOne}</button>
                    <button onClick={handleAddFoulYellowTeam} className="foul foul-yellow">{foulsYellowOne}</button>

                </div>

            </fieldset>
        </>
    )
}