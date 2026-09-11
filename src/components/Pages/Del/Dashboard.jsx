import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDateInput from "../CustomDateInput";

const Dashboard = () => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const minDate = new Date(2000, 0, 1); // 01/01/2000
  const maxDate = new Date(2030, 11, 31); // 31/12/2030

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <>
      <section className="dash_section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="admin_form_card">
                <div className="form_box">
                  <Form autoComplete="off">
                    <h6 className="form_title mb-3">Camp Registration : </h6>

                    <>
                      {/* Name + Contact */}
                      <Row className="mt-2">
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Chosen Mission{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Chosen Mission"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Camp Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Camp Name"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              First Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Application Reference Number{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Application Reference Number"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Passport Number{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Passport Number"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Email ID <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="abc@gmail.com"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Mobile Number{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup>
                              <InputGroup.Text className="mbfont">
                                +00
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="Mobile Number"
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Choose Appointment Date{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              customInput={<CustomDateInput />}
                              dateFormat="dd/MM/yyyy"
                              // isClearable
                              placeholderText="Choose Appointment Date"
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              scrollableYearDropdown
                              minDate={minDate}
                              maxDate={maxDate}
                              yearDropdownItemNumber={
                                maxDate.getFullYear() - 2000 + 1
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Label>
                              Choose Appointment Time{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select className="form-control">
                              <option value="">11.00 AM (1)</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="mt-3">
                        <Col lg={12}>
                          <div className="alert_card">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="form-label">Total Amount</span>
                              <span className="package_tot" id="totalAmount">
                                USD 30
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      {/* Submit */}
                      <Row className="mt-3">
                        <Col lg={12}>
                          <Button
                            type="button"
                            className="btn loging_btn w-100"
                            onClick={handleFinalSubmit}
                          >
                            Proceed to Payment
                          </Button>
                        </Col>
                      </Row>
                    </>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
