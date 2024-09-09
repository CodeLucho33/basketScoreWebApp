import React from "react";
import { ButtonsForAddPoints } from "./ButtonsForAddPoints";
import { Score } from "./Score";
import {Tittle} from "./Tittle"


export function PlayerOne() {
    return (
        <>
            <Tittle />
            <Score />
            <ButtonsForAddPoints />

        </>
    )
}