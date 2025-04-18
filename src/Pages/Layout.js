import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Layout.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import c6 from './image/logo img.png'

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">JUICYY SPOT</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/"><i className="fa-solid fa-house-user"></i>&nbsp;Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blogs"><i className="fa-brands fa-product-hunt"></i>&nbsp;Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact"><i className="fa-solid fa-phone"></i>&nbsp;Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About"><i className="fa-solid fa-user"></i>&nbsp;Login</Link>
              </li>
            </ul>
            {/* Search Bar */}
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">Search</button>
            </form>
            &nbsp;&nbsp;&nbsp;
            <Link className="nav-link" to="/Cart">
            <i className="fa-solid fa-carrot"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas - Right Side */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">JUICYY SPOT</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="offcanvas-links">
            <li>
              <Link className="nav-link" to="/">
                <i className="fa-solid fa-house-user"></i>&nbsp;Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Blogs">
                <i className="fa-brands fa-product-hunt"></i>&nbsp;Products
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Contact">
                <i className="fa-solid fa-phone"></i>&nbsp;Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/About">
                <i className="fa-solid fa-user"></i>&nbsp;Login
              </Link>
            </li>
            <li>
              <Link>
              <i className="fa-solid fa-carrot"></i>&nbsp; Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>

      
      <Outlet />
      <footer>
  <div class="footer-container">
      <div class="footer-section"><img src={c6} style={{height:"400px", width:"300px"}}/>
      </div>
     <div class="footer-section">
          <h3>ABOUT JUICYYSPOT</h3>
          <ul>
              <li><a href="">Fresh Fruits</a></li>
              <li><a href="">Fresh vegetables</a></li>
              <li><a href="">Fresh Milk</a></li>
              <li><a href="">High concentrated</a></li>
              <li><a href="">Natural Products</a></li>
          </ul>
      </div>
      <div class="footer-section">
          <h3>BRANCHES</h3>
          <ul>
              <li><a href="">Trichy</a></li>
              <li><a href="">Namakkal </a></li>
              <li><a href="">Chennai</a></li>
              <li><a href="">Karur</a></li>
              <li><a href="">Selam</a></li> 
          </ul>
      </div>
      <div class="footer-section">
         <h3>SUPPORT </h3>
          <ul>
              <li><a href=""> Online Order </a></li>
              <li><a href="">Complaints & Help</a></li>
              <li><a href="">Supplier Information</a></li>
              <li><a href=""> Careers</a></li>
          </ul>
      </div>
      </div> 
    <center>
  <div class="ficon">
  <a href=""><p><i class="fa-brands fa-square-instagram"></i></p></a>&nbsp;&nbsp;
<a href=""><i class="fa-brands fa-facebook"></i></a>&nbsp;&nbsp;
<a href=""><i class="fa-brands fa-twitter"></i></a>&nbsp;&nbsp;
<a href=""><i class="fa-solid fa-envelope"></i></a>&nbsp;&nbsp; 
<a href=""><i class="fa-brands fa-whatsapp"></i></a>&nbsp;&nbsp;
</div>
</center>
  <div class="footer-bottom">
      <p>&copy; 2025 Juicyyspot,All Rights Reserved.</p>
      <p> designed by Juicyyspot 🍹..</p>
  </div>

</footer>
    </div>
  );
};

export default Layout;
