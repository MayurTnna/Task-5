import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/scss/Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/UserProfile");
  };
  return (
    <Navbar className=" indexz" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/product" className="text-decoration-none">
          <Navbar.Brand href="/product" className="head-section ">
            Buzzzzarrrr
            <span className="text-light px-1 ">
              <AiOutlineShoppingCart />
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  border-none"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Button href="" onClick={handleNavigate} variant="dark">
              <CgProfile className="text-info" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
