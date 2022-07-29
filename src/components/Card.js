import './css/card.css';
import React, { useState } from "react";

export default function Card(props) {
    const [stateBackground, setColor] = useState("#0c3c4c");
    const[txtcolor,settextcolor] = useState("green");
    const[txtcolor2,settextcolor2] = useState("red");
    var i = props.index;
    function handleonclick(event) {
        if (stateBackground === "#0c3c4c"){
            console.log(i);
             setColor("linear-gradient(90deg,#1a5597,#3ad093)");
             settextcolor("white");
             settextcolor2("white");
             props.amtArr[i] = props.priceUsd;
             props.nameArr[i] = props.title;
             console.log(props.amtArr);
             console.log(props.nameArr);
        }
        else {
            setColor("#0c3c4c")
            settextcolor("green");
            settextcolor2("red");
            props.amtArr[i] = 0;
            props.nameArr[i] ="";
            console.log(props.amtArr);
            console.log(props.nameArr);

        }
    }

    return (
        <>
            <div className="card" onClick={handleonclick} style={{
                height: 20 + "vh",
                width: "100%",
                background:`${stateBackground}`,
                color: "white",
                transition:"all 1s"
            }} id ="bitcard">
                <div className="row g-0" style={{ width: "100%" }}>
                    <div className="col" style={{ width: "100%" }}>
                        <div className="card-body">
                            <span style={{ display: "flex", justifyContent: "flex-start" }} id = "cardtxt">
                                <span className="card-text col-1" id = "num" style={{ fontSize: "1.3rem", marginRight: "1vw" }}>{props.rank}</span>
                                <span className="card-title col-8" style={{ fontSize: "1.3rem", textTransform: "capitalize", }}>{props.title}</span>
                                <span className="card-title col-2" style={{ fontSize: "1rem", textTransform: "capitalize", }}>{props.symbol}</span>
                            </span>
                            <br />
                            <span style=
                                {{
                                    display: "flex",
                                    justifyContent: "flex-start"
                                }} id = "pricerow">
                                <span className="card-text col-4" style ={{
                                    color:`${(props.priceUsd>=0.5)?txtcolor:txtcolor2}`,
                                    fontWeight:"bold"
                                }}>${parseFloat(props.priceUsd).toFixed(3)}</span>
                                <span className="card-text col-7">Market Cap USD<br />{parseFloat(props.marketCapUsd).toFixed(3)}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


