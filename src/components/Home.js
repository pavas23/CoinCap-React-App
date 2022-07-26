
import React from 'react'
import Card from './Card';

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
                <p style = {{marginLeft: "4vw",color:"whitesmoke"}}>Join the best cryptocurrency exchange...</p>
                <div className = "container"> 
                <div className="row ms-4" style={{ height: 20 + "vh", width: "100%" }}>
                    {this.state.data_arr.map(function (element) {
                        return (
                            <div className="col-5 my-2" key = {element.id}>
                                <Card title={element.name} marketCapUsd={element.marketCapUsd} priceUsd={element.priceUsd} rank={element.rank} amtArr = {[]} />
                            </div>
                        );
                    })}
                </div>
                </div>

            </>
        );
    }

}




