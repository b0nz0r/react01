import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/* Navbar */}

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1>Contact Us</h1>

        {/* Cards */}

        <div className="card-div">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Mouse</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Gaming Mouse
              </Card.Subtitle>
              <Card.Text>
                Experience precision and speed with our advanced wireless gaming
                mouse. Perfect for gamers and creative professionals.
              </Card.Text>
              <Card.Link href="#">Mouse</Card.Link>
              <Card.Link href="#">Mouse</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Headphone</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Headphones
              </Card.Subtitle>
              <Card.Text>
                Immerse yourself in high-quality sound with our noise-canceling
                headphones. Perfect for music lovers and commuters.
              </Card.Text>
              <Card.Link href="#">Headphone</Card.Link>
              <Card.Link href="#">Headphone</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Keyboard</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Mechanical Gaming Keyboard
              </Card.Subtitle>
              <Card.Text>
                Elevate your gaming experience with our mechanical gaming
                keyboard. Responsive keys for lightning-fast gameplay.
              </Card.Text>
              <Card.Link href="#">Keyboard</Card.Link>
              <Card.Link href="#">Keyboard</Card.Link>
            </Card.Body>
          </Card>
        </div>

        {/* Form */}

        <div className="form-div">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
