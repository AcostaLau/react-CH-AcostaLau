import { Container, Nav, Navbar } from "react-bootstrap"
import logo from '../img/logo.png'
import '../css/navbar.css'
import { CartWidget } from "./CartWidget"



const NavBar = () => {
    return (
        <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto containerNav">
      <Nav.Link className='cajaLogo' href="#home"><img src={logo} alt='logo'></img></Nav.Link>
      <div className='divContacto'>
        <Nav.Link href="#index" className='tamañoTexto'>Inicio</Nav.Link>
        <Nav.Link href="#productos" className='tamañoTexto'>Celulares</Nav.Link>
        <Nav.Link href="#productos" className='tamañoTexto'>Computadoras</Nav.Link>
        <Nav.Link href="#carrito" className='tamañoWidget'><CartWidget/></Nav.Link>
      </div>
    </Nav>
    </Container>
  </Navbar>
        </div> 
    )
}



export default NavBar