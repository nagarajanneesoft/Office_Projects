import React from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import successIcon from "../../assets/success-icon.png";

function Success() {
  const referenceNumber = "763487y9848";
  return (
    <>
      <section className="dash_section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="admin_form_card">
                <Row className="mb-2">
                  <Col md={12}>
                    <h6 className="p-0 mb-2">Camp Registration :-</h6>
                  </Col>
                </Row>
                <Row className="mt-2 mb-3">
                  <Col sm={12}>
                    <div className="alert_card">
                      <div className="success_card">
                        {/* <hr class="border-top-divider my-3"></hr> */}
                        <Row>
                          <Col sm={12} className="text-center">
                            <div className="success_message">
                              <img
                                src={successIcon}
                                alt="Success"
                                className="success_logo img-fluid"
                              />
                              <p className="para-title">
                                Thank you. Your Submission is succesful.<br /> Your
                                Submission reference Number is{" "}
                                <strong>{referenceNumber}</strong>. You will be
                                contacted soon.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Success;
