import React from "react";

export function Player(props){
    return(
        <>
<div className="board-team-one">
    <h1>Team "{props.nameTeamOne}"</h1>
</div>
<div className="board-team-two">
<h1>Team "{props.nameTeamTwo}"</h1>
</div>
        </>
    )
}