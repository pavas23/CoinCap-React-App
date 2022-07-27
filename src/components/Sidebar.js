
import { useState } from "react";
import CreditCard from "./CreditCard";
import './sidebar.css';

export default function () {

    // const [coins, setCoins] = useState("");
    // const [amt, setAmt] = useState(0);

    // function handletotal() {

    // }

    return (
        <>
            <div style={{ width: "100%", height: "100%", marginTop: "2vh", color: "white", }}>
                <h3>Recent Transactions</h3>
                <div style={{ width: "100%", height: "80%" }}>
                    <div style={{ width: "100%", height: "15%" }}>
                        <img src="https://ak.picdn.net/shutterstock/videos/21354790/thumb/1.jpg?ip=x480" height="70%" width="80%" />
                    </div>
                    <h4>Default Payment Card&nbsp;<span style={{ color: "gold" }}><i class="fa-brands fa-bitcoin"></i></span></h4>
                    <br/>
                    <h6>Balance: $2879.56</h6>
                    <br />
                    <div id = "display" style = {{height:"18%",width:"95%"}}>
                        <CreditCard/>
                    </div><br/><br/><br/><br/>
                    <div id = "aboutus">
                        <div><i class="fa-solid fa-wallet fa-2x" style = {{color:"gold"}}></i> &nbsp;<span style ={{
                            fontSize:"1.5rem"
                        }}>Download
                        Bitcoin Wallet</span><br/>
                        Get it on PC or mobile to create,send and receive bitcoins. </div>
                        <br/><br/>
                        <div><i class="fa-solid fa-bitcoin-sign fa-2x" style = {{color:"gold"}}></i> &nbsp;<span style ={{
                            fontSize:"1.5rem"
                        }}>Buy/Sell with Wallet</span><br/>
                        Enter receiver's address specify the amount and<br/> send </div>
                        <br/><br/>
                        <div><i class="fa-solid fa-sack-dollar fa-2x" style = {{color:"gold"}}></i> &nbsp;<span style ={{
                            fontSize:"1.5rem"
                        }}>Add coins to your Wallet</span><br/>
                       Add bitcoins you've created or exchanged via <br/> credit card </div>
                    </div>
                </div>
            </div>
        </>
    );
}

