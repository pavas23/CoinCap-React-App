import CreditCard from "./CreditCard";
import "./css/sidebar.css";

export default function Sidebar() {

    // function iconsize(){
    //     var icon = document.getElementsByClassName("fa-solid");
    //     for(val of icon){
    //         val.className = "fa-x";
    //     }
    // }

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    marginTop: "2vh",
                    color: "white",
                    marginLeft: "-4vw",
                }}
            >
                <h3 id="righthead">Latest Updates</h3>
                <br />
                <div style={{ width: "100%", height: "80%" }}>
                    <div style={{ width: "100%", height: "15%" }} id="videohead">
                        <iframe
                            width="104%"
                            height="130%"
                            style={{
                                marginLeft: "0vw", border: "2px solid white"
                                , borderRadius: "10px"
                            }}
                            src="https://www.youtube.com/embed/pUdrK16ylyg"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            id="video"
                        ></iframe>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h4 id="defhead">
                        Default Payment Card&nbsp;
                        <span style={{ color: "gold" }}>
                            <i className="fa-brands fa-bitcoin"></i>
                        </span>
                    </h4>
                    <br />
                    <h6 id="bal">Balance: $2879.56</h6>
                    <br />
                    <div id="display" style={{ height: "18%", width: "95%" }}>
                        <CreditCard />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div id="aboutus">
                        <div>
                            <i
                                className="fa-solid fa-wallet fa-2x"
                                style={{ color: "gold" }}
                            ></i>{" "}
                            &nbsp;
                            <span
                                style={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                Download Bitcoin Wallet
                            </span>
                            <br /><span className="detail">
                                Get it on PC or mobile to create,send and receive bitcoins.</span>
                        </div>
                        <br />
                        <br />
                        <div>
                            <i
                                className="fa-solid fa-bitcoin-sign fa-2x"
                                style={{ color: "gold" }}
                            ></i>{" "}
                            &nbsp;
                            <span
                                style={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                Buy/Sell with Wallet
                            </span>
                            <br /><span className="detail">
                                Enter receiver's address specify the amount and
                                <br /> send</span>
                        </div>
                        <br />
                        <br />
                        <div>
                            <i
                                className="fa-solid fa-sack-dollar fa-2x"
                                style={{ color: "gold" }}
                            ></i>{" "}
                            &nbsp;
                            <span
                                style={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                Add coins to your Wallet
                            </span>
                            <br />
                            <span className="detail">
                                Add bitcoins you've created or exchanged via <br /> credit card</span>
                        </div>
                    </div>
                    <div>
                        <i id="bitanimation" className="fa-brands fa-bitcoin fa-8x"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
