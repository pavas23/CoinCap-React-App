import { useState } from "react";
import CreditCard from "./CreditCard";
import "./sidebar.css";

export default function () {
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
                <h3>Latest Updates</h3>
                <br />
                <div style={{ width: "100%", height: "80%" }}>
                    <div style={{ width: "100%", height: "15%" }}>
                        <iframe
                            width="104%"
                            height="130%"
                            style={{
                                marginLeft: "0vw", border: "2px solid white"
                                , borderRadius: "10px"
                            }}
                            src="https://www.youtube.com/embed/pUdrK16ylyg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h4>
                        Default Payment Card&nbsp;
                        <span style={{ color: "gold" }}>
                            <i className="fa-brands fa-bitcoin"></i>
                        </span>
                    </h4>
                    <br />
                    <h6>Balance: $2879.56</h6>
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
                            <br />
                            Get it on PC or mobile to create,send and receive bitcoins.{" "}
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
                            <br />
                            Enter receiver's address specify the amount and
                            <br /> send{" "}
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
                            Add bitcoins you've created or exchanged via <br /> credit card{" "}
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
