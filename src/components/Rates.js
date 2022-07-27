
import './Rates.css';
export default function Rates(props) {

    var color = (props.rateUsd >= 1) ? "green" : "red";
    return (
        <>
            <span  style={{
                color: "white",

            }}>
                {props.symbol}<span style={{ color: "white" }}><i class="fa-solid fa-arrow-right"></i>
                </span><span style = {{color:`${color}`}}>${parseFloat(props.rateUsd).toFixed(3)}</span>&nbsp;&nbsp;
            </span>
        </>
    );
}
