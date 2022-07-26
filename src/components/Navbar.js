
import './Navbar.css';

export default function () {
    let style = {
        color:"white",
    }
  return (
    
    <>
      <nav className="navbar navbar-expand-lg bg-dark" style={{position:"fixed",top:"0",zIndex:"1",width:"100vw",}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style = {{
            color:"gold",
            fontSize:"1.5rem",
            marginLeft:"0.5vw"
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
                  style = {style}
                >
                  <span>
                    <span style = {{marginRight: "0.8vw",}}>
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
                  style = {style}
                >
                  <span>
                    <span style = {{marginRight: "0.8vw",}}>
                    <i class="fa-solid fa-chart-line"></i>
                  </span>
                  Activity
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
