
import './creditCard.css';
import chip from './Images/chip.png';
import visa from './Images/visa.png';
import map from './Images/map.png';
import pattern from './Images/pattern.png';

export default function(){
    return(
        <>
        <div className = "card" style = {{backgroundColor:"black"}}>
            <div className = "card-inner">
                <div className= "front">
                    <img src = {map} className = "map-img"/>
                    <div className="rowcard">
                        <img src = {chip} style ={{width:"60px"}}/>
                        <img src = {visa} style ={{width:"80px"}}/>
                    </div>
                    <div className ="rowcard card-no">
                        <p>5687</p>
                        <p>1209</p>
                        <p>4584</p>
                        <p>9003</p>
                    </div>
                    <div className= "rowcard card-holder">
                        <p>CARD HOLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div className= "rowcard card-date">
                        <p>PAVAS GARG</p>
                        <p>12/28</p>
                    </div>
                </div>
                <div className = "back">
                    <img src = {map} className = "map-img"/>
                    <div className= "bar"></div>
                    <div className = "rowcard cvv">
                        <div>
                            <img src = {pattern}/>
                        </div>
                        <p>734</p>
                    </div>
                    <div className= "rowcard sign">
                        <p>CUSTOMER SIGNATURE</p>
                        <img src = {visa} width ="80px"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

