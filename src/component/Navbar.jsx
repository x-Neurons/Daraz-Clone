import "../App.css"
import logo from "../img/logo.png";
const Navbar = ()=>{
    return(
        <div>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    {/* <a className="navbar-brand text-light" href="#">Navbar</a> */}
    <img className="logo" src={logo}></img>
    <h1 className="site-name">Daraz</h1>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn search btn-outline-dark text-light" type="submit">Search</button>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
 
        <li className="nav-item">
          <a className="nav-link text-light" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}



export default Navbar