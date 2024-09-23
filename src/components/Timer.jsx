import React from "react";

export function Timer({isActive, time,btnStop,stopLogo,btnResetGame,btnReset,repeatLogo }){
    return(<>
     <div className="timer">
                    {

                        isActive ?
                            <div className="timer-stop">
                                <p className="text-time">{time}</p>

                                <button className="btn-stop" onClick={btnStop}>
                                    <img className="img-stop" src={stopLogo} alt="" />
                                </button>
                                <button onClick={btnResetGame} className="btn-reset">Reset game!</button>
                            </div>

                            :
                            <div className="timer-reverse">
                                <p className="text-time">{time}</p>

                                <button className="btn-reverse" onClick={btnReset}>
                                    <img className="img-reverse" src={repeatLogo} alt="" />
                                </button>
                                <button onClick={btnResetGame} className="btn-reset">Reset game!</button>
                            </div>
                    }
                </div>
    
    </>

    )
}