
export default function Carousel() {
    let myStyle = {
        height: 50 + "vh",
        width: 100 + "vw"
    }
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide col-12" data-bs-ride="carousel" data-bs-interval="5000" data-bs-onpause="hover">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://newbium.s3.amazonaws.com/584f50b818156235413.jpeg" className="d-block w-100" alt="..." style={myStyle} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpaperaccess.com/full/3648367.jpg" style={myStyle} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.infoq.com/articles/blockchain-as-a-service-get-block/en/headerimage/blockchain-node-providers-and-how-they-work-header-1614599954119.jpg" className="d-block w-100" alt="..." style={myStyle} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpaperaccess.com/full/3648487.jpg" className="d-block w-100" alt="..." style={myStyle} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ marginLeft: "0" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
}

