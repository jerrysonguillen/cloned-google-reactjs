import "bootstrap/dist/css/bootstrap.min.css";
import "./../css/style.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="mr-3 ml-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="text-dark header-font">Gmail</Nav.Link>
          <Nav.Link href="#link" className="text-dark header-font">Images</Nav.Link>
          <Nav.Link
            href="#link"
            className="block-icon block-display p-2 m-2 my-auto"
          ></Nav.Link>
          <button className="custom-button" href="#link">Sign In</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
