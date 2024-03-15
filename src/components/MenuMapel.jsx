import React from "react";
import math from "../assets/Math1.jpg";
import ipa from "../assets/microscope.png";
import bi from "../assets/open-book.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import gambarMMapel from "../assets/Pkn.jpg";

const MenuMapel = () => {
  return (
    <Container fluid>
      <Row>
        <div className="mapelBanner"></div>
      </Row>
      <Row className="BarisMapel">
        <div className="mataPelajaranSekolah">
          {/* card 1 */}
          <div className="cardMapel1">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gambarMMapel} />
              <Card.Body>
                <Card.Title>MATEMATIKA</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          {/* card 2 */}
          <div className="cardMapel2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gambarMMapel} />
              <Card.Body>
                <Card.Title>IPA</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          {/* card 3 */}
          <div className="cardMapel3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gambarMMapel} />
              <Card.Body>
                <Card.Title>IPS</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          {/* card 4 */}
          <div className="cardMapel4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gambarMMapel} />
              <Card.Body>
                <Card.Title>BAHASA INDONESIA</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          {/* card 5 */}
          <div className="cardMapel5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gambarMMapel} />
              <Card.Body>
                <Card.Title>PPKNM</Card.Title>
                {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default MenuMapel;
