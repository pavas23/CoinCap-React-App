
import React, { useState } from "react"

export default function Card(props) {
    const [stateBackground, setColor] = useState("linear-gradient(270deg,#28313B,#485461)");
    const[txtcolor,settextcolor] = useState("green");
    // var i = 0;
    // var id = 0;
    function handleonclick(event) {
        if (stateBackground == "linear-gradient(270deg,#28313B,#485461)"){
             setColor("linear-gradient(90deg,#1a5597,#3ad093)");
             settextcolor("white");
            //  props.amtArr[i] = props.priceUsd;
            //  i++;
            //  id++;
            //  console.log(props.amtArr);
        }
        else {
            setColor("linear-gradient(270deg,#28313B,#485461)")
            settextcolor("green");
            // for(id in props.amtArr){
            //     props.amtArr[id] = 0;
            //     console.log(props.amtArr);
            // }
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
            }} >
                <div className="row g-0" style={{ width: "100%" }}>
                    <div className="col" style={{ width: "100%" }}>
                        <div className="card-body">
                            <span style={{ display: "flex", justifyContent: "flex-start" }}>
                                <span className="card-text col-1" style={{ fontSize: "1.5rem", marginRight: "1vw" }}>{props.rank}</span>
                                <span className="card-title col-11" style={{ fontSize: "1.5rem", textTransform: "capitalize", }}>{props.title}</span>
                            </span>
                            <br />
                            <span style=
                                {{
                                    display: "flex",
                                    justifyContent: "flex-start"
                                }}>
                                <span className="card-text col-4" style ={{
                                    color:`${txtcolor}`,
                                    fontWeight:"bold"
                                }}>${parseInt(props.priceUsd) + 1}</span>
                                <span className="card-text col-7">Market Cap USD<br />{parseInt(props.marketCapUsd)}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


