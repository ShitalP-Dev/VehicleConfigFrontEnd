import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="topbarandbg">
        <Container className="topBrands" >
          <h1 className="titlebrands">S4KVR Team</h1>
          <br />
          <br />
          <br />
          <Row>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }} >
                <CardImg className="box" top src="https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_960_720.jpg" alt="Card image cap" />
                <CardBody className="cardsofbrands"  >
                  <CardTitle tag="h5">Shital Phand</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.-CSE. <br></br>M.E.-CSE.</center></CardText>
                  <Button className="productbutton" color="danger">Click Here to know more</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top src="https://images.pexels.com/photos/3849554/pexels-photo-3849554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5" >Saurabh Sananse</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText> <center>B.E.-CSE. <br></br>M.E.-CSE.</center></CardText>
                  <Button className="productbutton" color="danger">Click Here to know more</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3" >
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top rounded src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" rounded />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5">Kartik Patil</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- Mechanical Engineering</center></CardText>
                  <Button className="productbutton" color="danger">Click Here to know more</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top src="https://images.pexels.com/photos/3849554/pexels-photo-3849554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5">Sanket Kamble</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- Mechanical Engineering</center></CardText>
                  <Button className="productbutton" color="danger">Click Here to know more</Button>
                </CardBody>
              </Card>
            </Col>
          </Row><Row>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }} >
                <CardImg className="box" top src="https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_960_720.jpg" alt="Card image cap" />
                <CardBody className="cardsofbrands"  >
                  <CardTitle tag="h5">Vaibhav Mulunjkar</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- Mechanical Engineering</center></CardText>
                  <Button className="productbutton" color="danger">Click Here to know more</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top src="https://images.pexels.com/photos/3849554/pexels-photo-3849554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5" >Rushikesh Patil</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- Mechanical Engineering</center></CardText>
                  <Button className="productbutton" color="danger">Click Here to know more</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3" >
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top rounded src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" rounded />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5">Suraj Rathod</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText> <center>B.E.- Computer Science and Engineering </center></CardText>
                  <Button className="productbutton" color="danger">Click Here to know more</Button>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
        <br />

      </div>
    )
  }
}
export default AboutUs;