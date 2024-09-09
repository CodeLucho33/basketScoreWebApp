import React from "react";
import { useState } from "react";

export function InitialForm() {
    const [formGame, setFormGame] = useState({
        nameTeamOne: '',
        nameTeamTwo: '',
        timeGame: ''
    });
    function handleClick(e) {

        let dataGameEl = document.getElementById('dataGame')
        let dataForGame = new FormData(dataGameEl)
        setFormGame()

    }
    return (
        <>
            <form id="dataGame" className='initial-form'>
                <label htmlFor='nameTeamOne'>Name team ONE:</label>
                <input type="text" id="nameTeamOne" htmlFor="nameTeamOne" required /><br />
                <label htmlFor='nameTeamTwo'>Name team TWO:</label>
                <input type="text" id="nameTeamTwo" htmlFor="nameTeamTwo" required /><br />
                <label htmlFor='time'>Select duration:</label>
                <select name="time" id="time">
                    <option value="15m">15m</option>
                    <option value="30m">30m</option>
                    <option value="45m">45m</option>
                    <option value="60m">60m</option>
                </select>
                <button  type="submit"className="btn-form-initial" onClick={handleClick}>Start Macht!</button>
            </form>
        </>
    )
}
