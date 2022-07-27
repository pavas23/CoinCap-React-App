
import React from 'react'
import Card from './Card';
import './home.css';
export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            data_arr: [],
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

    render() {
        return (
            <>
                <h2 style={{
                    marginLeft: "4vw",
                    marginTop: "2vh",
                    color:"white"
                }}>Dashboard</h2>
                <p style = {{marginLeft: "4vw",color:"whitesmoke"}}><span id = "headline">Begin the next gen of your investments with fastest cryptocurrency exchange...</span> &nbsp;&nbsp;
                <span style={{ color: "gold" }}><i id = "icon1" class="fa-brands fa-bitcoin fa-2x" ></i></span>
                &nbsp;Vs&nbsp; <span style={{ color: "#A30774" }}><i id = "icon2"class="fa-brands fa-ethereum fa-2x"></i></span></p>
                <div className = "container"> 
                <div className="row ms-4" style={{ height: 20 + "vh", width: "100%" }}>
                    {this.state.data_arr.map(function (element) {
                        return (
                            <div className="col-5 my-2" id = "cardcurr" key = {element.id}>
                                <Card title={element.name} marketCapUsd={element.marketCapUsd} priceUsd={element.priceUsd} rank={element.rank} symbol = {element.symbol} />
                            </div>
                        );
                    })}
                </div>
                </div>

            </>
        );
    }

}




