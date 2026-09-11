import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Accordion,
  Button,
  Card,
} from "react-bootstrap";

import card from "../../assets/card.png";
import master_card from "../../assets/master_card.jpg";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const handleDash = () => {
    navigate("/dashboard");
  };
  const handleSuccess = () => {
    navigate("/success");
  };

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // smooth scroll
    });
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      {/* ✅ Main Section */}
      <div className="dash flex-shrink-0">
        <section className="dash_section">
          <Container>
            <Row>
              <Col md={12}>
                <Card className="admin_form_card p-3">
                  <div className="mb-2">
                    <h6 className="d-flex justify-content-between align-items-center">
                      <span className="text-dark">Payment Details</span>
                    </h6>
                    <p style={{ fontSize: "0.8rem" }}>
                      Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>

                  {/* ✅ Accordion */}
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="d-flex gap-2 align-items-center">
                          <h6 className="m-0">Credit or Debit Card</h6>
                          <img src={card} alt="" style={{ width: 25 }} />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={5}>
                            <Form.Label>
                              Card Number{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Control type="text" className="mb-2" />
                            <img
                              src={master_card}
                              alt=""
                              style={{ width: 75 }}
                            />
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col sm={2}>
                            <Form.Label>
                              Expiry Month{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Select>
                              <option value="">Select</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                              <option>April</option>
                              <option>May</option>
                            </Form.Select>
                          </Col>
                          <Col sm={2}>
                            <Form.Label>
                              Expiry Year{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Select>
                              <option value="">Select</option>
                              <option>2025</option>
                              <option>2026</option>
                            </Form.Select>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={5}>
                            <Form.Label>
                              Cardholder Name{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Control type="text" />
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={8}>
                            <Form.Label>
                              Security Code{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Row>
                              <Col sm={4}>
                                <Form.Control type="text" />
                              </Col>
                              <Col
                                sm={8}
                                className="d-flex gap-2 align-items-center"
                              >
                                <img src={card} alt="" style={{ width: 25 }} />
                                <span>3 Digits on back of your card</span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* Second Option */}
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="d-flex gap-2 align-items-center">
                          <h6 className="m-0">UnionPay SecurePay</h6>
                          <img src={card} alt="" style={{ width: 25 }} />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={5}>
                            <Form.Label>
                              Card Number{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Control type="text" className="mb-2" />
                            <img
                              src={master_card}
                              alt=""
                              style={{ width: 75 }}
                            />
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col sm={2}>
                            <Form.Label>
                              Expiry Month{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Select>
                              <option value="">Select</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                              <option>April</option>
                              <option>May</option>
                            </Form.Select>
                          </Col>
                          <Col sm={2}>
                            <Form.Label>
                              Expiry Year{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Select>
                              <option value="">Select</option>
                              <option>2025</option>
                              <option>2026</option>
                            </Form.Select>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={5}>
                            <Form.Label>
                              Cardholder Name{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Form.Control type="text" />
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col md={8}>
                            <Form.Label>
                              Security Code{" "}
                              <span className="star_required">*</span>
                            </Form.Label>
                            <Row>
                              <Col sm={4}>
                                <Form.Control type="text" />
                              </Col>
                              <Col
                                sm={8}
                                className="d-flex gap-2 align-items-center"
                              >
                                <img src={card} alt="" style={{ width: 25 }} />
                                <span>3 Digits on back of your card</span>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  {/* ✅ Order Details */}
                  <Card className="mt-4 p-3">
                    <h6>Order Details</h6>
                    <p>Order_16001</p>
                    <h6 className="text-end">
                      <b>Total</b> <span> XXX : </span> <b>xxx</b>
                    </h6>
                  </Card>

                  {/* ✅ Footer Buttons */}
                  <Row className="mt-3 mb-2">
                    <Col className="text-end">
                      <p style={{ fontSize: "0.8rem" }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Button variant="link" onClick={handleDash}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleSuccess}
                        className="btn-theam loging_btn"
                        style={{ fontSize: "1rem" }}
                      >
                        Pay Now
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Payment;
