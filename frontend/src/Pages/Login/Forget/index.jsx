import React from "react";
import { withRouter } from "react-router";
import '../index.css';
import '../../../assets/style.css';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal
} from "react-bootstrap";
import ApiUtil from '../../../Utils/ApiUtils';
import HttpUtil from '../../../Utils/HttpUtils';

class Forget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    var values = { email: this.state.email };
    event.preventDefault();
    HttpUtil.post(ApiUtil.API_ForgetPassword_Post, values)
      .then(
        response => {
          console.log(response);
          this.props.history.push('/', null)
        }
      )
      .catch(error => {
        //message.error(error.message);
      });
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.type;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <>
        <div class="main">
          <Container fluid>
            <div className="login-form">
              <Modal.Dialog size="lg" centered>
                <Modal.Body>
                  <Row className="justify-content-center">
                    <Col>
                      <h2 className="banner text-center"> Welcome Back! </h2>
                    </Col>
                  </Row>
                  <Form>
                    <Row className="mb-3 justify-content-center">
                      <Col xs={9}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control className="inputbar" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" autoFocus />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3 mt-5 justify-content-center">
                      <Col xs={8}>
                        <Button className="btn-submit" onClick={this.handleClick}>
                          Send me the link
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Modal.Body>
              </Modal.Dialog>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(Forget)