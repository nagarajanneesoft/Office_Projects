import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import capchaImg from "../../assets/capcha.png";
import loaderGif from "../../assets/loading.gif";

function Login() {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [checked, setChecked] = useState(true);
  const [otpVisible, setOtpVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [country, setCountry] = useState("");
  const [campName, setCampName] = useState("");

  const navigate = useNavigate();

  // =========================================
  // INITIAL LOADER
  // =========================================
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // =========================================
  // COUNTRY CHANGE
  // =========================================
  const handleCountryChange = (e) => {
  const value = e.target.value;

  setCountry(value);

  // Country change / reset Camp Name
  setCampName("");

  // Show loader
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);
};

  // =========================================
  // CAMP NAME CHANGE
  // =========================================
  const handleCampChange = (e) => {
    const value = e.target.value;

    setCampName(value);

    // Show loader
    setLoading(true);

    // Example API / loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCheckbox = () => setChecked(!checked);

  const handleGetOTP = () => {
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    setOtpVisible(true);
  }, 1000);
};

const handleValidateOTP = () => {
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    navigate("/dashboard");
  }, 1000);
};

  const isFormValid =
  country !== "" &&
  campName !== "" &&
  email.trim() !== "" &&
  captcha.trim() !== "" &&
  checked;

  return (
    <>
      {/* =========================================
          LOADER
      ========================================= */}
      {loading && (
        <div className="loader-overlay">
          <img src={loaderGif} alt="Loading..." />
        </div>
      )}

      <Container className="login_card_section">
        <Row className="justify-content-center">
          <Col sm={12} md={12}>
            <div className="login_form_card">
              <Form>
                <h5 className="text-center">Camp Registration</h5>

                <Row className="mt-2">
                  {/* =========================================
                      COUNTRY TRAVELLING TO
                  ========================================= */}
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Label>
                        Country Travelling To{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>

                      <Form.Select
                        className="form-control"
                        value={country}
                        onChange={handleCountryChange}
                      >
                        <option value="">--Select--</option>
                        <option value="philippines">Philippines</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* =========================================
                      CAMP NAME
                  ========================================= */}
                  <Col lg={6}>
                    <Form.Group>
                      <Form.Label>
                        Camp Name <span className="text-danger">*</span>
                      </Form.Label>

                      <Form.Select
                        className="form-control"
                        value={campName}
                        onChange={handleCampChange}
                        disabled={!country}
                      >
                        <option value="">--Select--</option>
                        <option value="mioot">MIOOT</option>
                        <option value="test">TEST</option>
                        <option value="los-angeles">LOS ANGELES</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/* =========================================
                    EMAIL
                ========================================= */}
                <Form.Group
                  className="mb-2"
                  controlId="txtLoginEmail"
                >
                  <Form.Label>
                    Please enter the email id to receive the OTP{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {/* =========================================
                    CAPTCHA
                ========================================= */}
                <Form.Group
                  className="mb-2"
                  controlId="txtCaptcha"
                >
                  <Form.Label>
                    Enter the Captcha{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                  />

                  <img
                    src={capchaImg}
                    width="175"
                    className="mt-2"
                    alt="captcha"
                  />
                </Form.Group>

                {/* =========================================
                    PRIVACY NOTICE
                ========================================= */}
                <Form.Group className="mb-2">
                  <Form.Text>
                    Please read our{" "}
                    <a
                      href="https://www.vfsglobal.com/en/general/privacy-notice.html?from_section=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Notice
                    </a>{" "}
                    which explains how we use your personal data.
                  </Form.Text>
                </Form.Group>

                {/* =========================================
                    CONSENT CHECKBOX
                ========================================= */}
                <Form.Group
                  controlId="Chk1"
                  className="mb-3"
                >
                  <Form.Check
                    type="checkbox"
                    label={
                      <>
                        I consent to the processing of my personal data in
                        support of my visa application, as detailed in the VFS
                        Privacy Notice. This includes information necessary for
                        related services and communications.
                        <span className="text-danger">*</span>
                      </>
                    }
                    checked={checked}
                    onChange={handleCheckbox}
                    className="para-title custom-checkbox-lg d-flex gap-2 form-check align-items-center"
                  />
                </Form.Group>

                {/* =========================================
                    GET OTP
                ========================================= */}
                {!otpVisible && (
                  <Button
                    type="button"
                    className="btn loging_btn w-100 mb-3"
                    onClick={handleGetOTP}
                    disabled={!isFormValid}
                  >
                    Get One Time Password
                  </Button>
                )}

                {/* =========================================
                    OTP
                ========================================= */}
                {otpVisible && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Enter One Time Password{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>

                      <InputGroup>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter One Time Password"
                        />

                        <span
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          className="input-group-text bg-light d-block"
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ? (
                            <BsEye />
                          ) : (
                            <BsEyeSlash />
                          )}
                        </span>
                      </InputGroup>

                      <small className="time-danger">
                        Time left: 04:38
                      </small>
                    </Form.Group>

                    <Button
                      className="w-100 btn loging_btn"
                      onClick={handleValidateOTP}
                    >
                      Validate One Time Password
                    </Button>
                  </>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;