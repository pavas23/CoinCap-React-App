
import React from 'react'
import Card from './Card';
import './home.css';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            data_arr: [],
            amt_arr: new Array(18).fill(0),
            name_arr: [],
            ans: 0,
        }
    }

    async componentDidMount() {
        let url = "https://api.coincap.io/v2/assets";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            data_arr: parsedData.data.slice(0, 18),
        })

    }
    total = 0;
    handletotal = () => {
        for (let val of this.state.amt_arr) {
            this.total += parseFloat(val);
        }
        this.setState(
            {
                ans: parseFloat(this.total.toFixed(3)),
            })
        this.total = 0;
        console.log(this.state.ans);
    }
    render() {
        return (
            <>
                <h2 style={{
                    marginLeft: "4vw",
                    marginTop: "2vh",
                    color: "white"
                }} >Dashboard</h2>

                <p style={{ marginLeft: "4vw", color: "whitesmoke" }}><span id="headline">Begin the next gen of your investments with fastest cryptocurrency exchange...</span> &nbsp;&nbsp;
                    <span style={{ color: "gold" }}><i id="icon1" className="fa-brands fa-bitcoin fa-2x" ></i></span>
                    &nbsp;Vs&nbsp; <span style={{ color: "#A30774" }}><i id="icon2" className="fa-brands fa-ethereum fa-2x"></i></span></p>
                <div className="container">
                    <div className="row ms-4" style={{ height: 20 + "vh", width: "100%" }}>
                        {this.state.data_arr.map((element) => {
                            return (
                                <div className="col-5 my-2" id="cardcurr" key={element.id}>
                                    <Card title={element.name} marketCapUsd={element.marketCapUsd} priceUsd={element.priceUsd} rank={element.rank} symbol={element.symbol} amtArr={this.state.amt_arr}
                                        index={element.rank - 1} nameArr={this.state.name_arr} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="row ms-4" style={{ marginTop: "65vh", marginLeft: "66vw", zIndex: "5" }}>
                        <div className="col-12" style={{ marginLeft: "62vw" }} >
                            <h3 style={{ color: "white" }}>
                                <img src="https://img.icons8.com/color/48/000000/shopping-cart-loaded.png" />
                                Coins added to cart:</h3>
                        </div><br />
                        <div className="col-12" style={{
                            marginLeft: "62vw", zIndex: "0",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                            <button type="button" className="btn btn-dark ms-0 me-4" onClick={this.handletotal}>
                                <span style={{ color: "white" }}>Total Amount</span></button>&nbsp;&nbsp;
                            <span style={{ color: "white", fontSize: "1.8rem", }}>${this.state.ans}</span>
                        </div><br /><br />

                    </div>
                </div>

            </>
        );
    }


}





