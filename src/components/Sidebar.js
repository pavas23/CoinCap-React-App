
import { useState } from "react";
import './sidebar.css';

export default function (props) {

    const [coins, setCoins] = useState("");
    const [amt, setAmt] = useState(0);

    function handletotal() {

    }

    return (
        <>
            <div style={{ width: "100%", height: "100%", marginTop: "2vh", color: "white", }}>
                <h3>Recent Transactions</h3>
                <div style={{ width: "100%", height: "80%" }}>
                    <div style={{ width: "100%", height: "15%" }}>
                        <img src="https://ak.picdn.net/shutterstock/videos/21354790/thumb/1.jpg?ip=x480" height="70%" width="80%" />
                    </div>
                    <h4>Coins added to cart &nbsp;<span style={{ color: "gold" }}><i class="fa-brands fa-bitcoin"></i></span></h4>
                    <br /><br />
                    <div id = "display">

                        <div>
                            Coins added :
                        </div>

                        <div>
                            Total amount : 
                        </div>

                        <div>
                        <button type="button" className="btn btn-success" onClick={handletotal}>Place Order</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

