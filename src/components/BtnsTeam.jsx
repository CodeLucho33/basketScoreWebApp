import React from "react";
let valueBtn = 0;

export function BtnsTeam({ addPoints, deletePoints, isActive }) {
    return (<>
    {isActive?
    <div className="btns-for-add-points">
            <button id="btns" onClick={() => addPoints(valueBtn = 1)} className="btns">+1</button>
            <button id="btns" onClick={() => addPoints(valueBtn = 2)} className="btns">+2</button>
            <button id="btns" onClick={() => addPoints(valueBtn = 3)} className="btns">+3</button>
            <button onClick={() => deletePoints(valueBtn)}>Back!</button>
        </div>:
        <div className="btns-for-add-points">
        <button disabled id="btns" className="btns">+1</button>
        <button disabled id="btns" className="btns">+2</button>
        <button disabled id="btns" className="btns">+3</button>
        <button onClick={() => deletePoints(valueBtn)}>Back!</button>
    </div>

}
        

    </>

    )
}