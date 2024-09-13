import React from "react";
import { useState } from "react";

export function FormGame({ form ,valueTimer}) {

    return (
        <>

            <form onSubmit={form} id="form-game" className='initial-form'>
                <label htmlFor="name-one">Name team ONE:</label><br />
                <input type="text" id="name-one" name="name-one" required /><br />
                <label htmlFor="name-two">Name team TWO:</label><br />
                <input type="text" id="name-two" name="name-two" required /><br />
                <label htmlFor="reverse-timer">Enter time in seconds:</label><br/>
                <input 
                required
                type="number" 
                id="reverse-timer" 
                name="reverse-timer" 
                min={1} 
                
                onChange={valueTimer}
                /><br/>
                <button type="submit" className="btn-form-initial">Start Game!</button>
            </form>

        </>

    )
}
