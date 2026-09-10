import { type FC } from 'react';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar as Nvb } from 'react-bootstrap';

const Navbar: FC = () => {

  return (
  <div className={styles.Navbar} data-testid="Navbar">
      <Nvb bg="primary" data-bs-theme="dark">
        <Container>
          <Nvb.Brand href="#home">Navbar</Nvb.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Nvb>
  </div>
);}

export default Navbar;
