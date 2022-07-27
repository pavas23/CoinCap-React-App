
import React from 'react';
import './Navbar.css';
import Rates from './Rates';

export default class Navbar extends React.Component {
  style = {
    color: "white",
  }
  constructor() {
    super();
    this.state = {
      rate_arr: []
    }
  }
  async componentDidMount(){
      let url = "https://api.coincap.io/v2/rates";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ rate_arr: parsedData.data.slice(0,8),})
    }


    render(){
      return (

        <>
          <nav className="navbar navbar-expand-lg bg-dark" style={{ position: "fixed", top: "0", zIndex: "1", width: "100vw", }}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{
                color: "gold",
                fontSize: "1.5rem",
                marginLeft: "0.5vw"
              }}>
                <b>₿ Coin Cap</b>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link active ms-3"
                      aria-current="page"
                      href="#"
                      style={this.style}
                    >
                      <span>
                        <span style={{ marginRight: "0.8vw", }}>
                          <i class="fa-solid fa-house"></i>
                        </span>
                        Home
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active ms-3"
                      aria-current="page"
                      href="#"
                      style={this.style}
                    >
                      <span>
                        <span style={{ marginRight: "0.4vw", }}>
                          <i class="fa-solid fa-chart-line"></i>
                        </span>
                        Activity
                      </span>
                    </a>
                  </li>
                </ul>
                <span id = "rates" style={{
                  overflowY:"hidden",
                  overflowX:"scroll",
                }}> 
                  {this.state.rate_arr.map((ele) => {
                    return (
                      <Rates symbol={ele.symbol} rateUsd={ele.rateUsd} />
                    );
                  })}
                </span>
              </div>
            </div>
          </nav>
        </>
      );
    }
  }
