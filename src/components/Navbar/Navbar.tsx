import { type FC } from 'react';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar as Nvb } from 'react-bootstrap';
import {Link } from 'react-router'

const Navbar: FC = () => {

  return (
  <div className={styles.Navbar} data-testid="Navbar">
      <Nvb bg="primary" data-bs-theme="dark">
        <Container>
          <Nvb.Brand href="#home">Navbar</Nvb.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/editor'}>new</Link>
            <Link className='nav-link' to={'/thumbnail'}>thumbnail</Link>
            <Link className='nav-link' to={'/editor/3'}>edit id 3</Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Nvb>
  </div>
);}

export default Navbar;
