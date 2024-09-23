import React from "react";
import { Fouls } from "./Fouls";
import { BtnsTeam } from "./BtnsTeam";

export function Board({name,foulsRed,foulsYellow,handleAddFoulRedTeam,handleAddFoulYellowTeam,isActive,addPoints,deletePoints,score}){
    return(<>
     <div className="">

<h1>Team "{name}"</h1>
<div>
    <Fouls
        foulsRedOne={foulsRed}
        foulsYellowOne={foulsYellow}
        handleAddFoulRedTeam={handleAddFoulRedTeam}
        handleAddFoulYellowTeam={handleAddFoulYellowTeam}

    /></div>
<div className="score">
    <p className="number-score">{score} </p>

</div>
<BtnsTeam
    isActive={isActive}
    addPoints={addPoints}
    deletePoints={deletePoints}
/>
</div>
    
    
    </>

    )
}