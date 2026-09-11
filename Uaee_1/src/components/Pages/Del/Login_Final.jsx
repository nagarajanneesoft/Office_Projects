import React, { useCallback, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import {
  FaRegQuestionCircle,
  FaRegEnvelope,
  FaRegCommentDots,
  FaPhoneAlt,
} from "react-icons/fa";
import { useDropzone } from "react-dropzone";

const Login = () => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });
  return (
    <Container>
      <Row className="g-4">
        {/* =====================================
                LEFT SIDEBAR
            ====================================== */}
        <Col lg={3} md={4} sm={12} className="left-column">
          <div className="sidebar-content right_side_sticky">
            <h2 className="page-title">Academic Credential Verification</h2>

            <p className="intro-text">
              Please ensure that all information entered and documents uploaded
              are accurate and complete. Submission of incorrect or inconsistent
              details may result in delays or rejection of your application.
            </p>

            <div className="steps-link">
              Steps to complete your verification for the certificate of
              recognition process
            </div>

            {/* ================= STEPS CARD ================= */}
            <Card className="steps-card rounded-3">
              <div className="step-item active">
                <span className="step-number">1</span>
                <a href="#section_one">Education Details</a>
              </div>

              <div className="step-item">
                <span className="step-number">2</span>
                <a href="#section_two">Personal Information</a>
              </div>

              <div className="step-item">
                <span className="step-number">3</span>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Upload Documents
                </a>
              </div>

              <div className="step-item">
                <span className="step-number">4</span>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Summary and Payment{" "}
                </a>
              </div>
            </Card>

            {/* ================= VERIFICATION NOTE ================= */}
            <p className="intro-text">
              You will receive your degree verification document within 18 days.
              You will then be able to apply for your Certificate of Recognition
              from the Ministry of Higher Education and Scientific Research.
            </p>

            {/* ================= HELP CARD ================= */}
            <Card className="help-card rounded-3">
              <Card.Header>Do you need help?</Card.Header>

              <Card.Body>
                <a href="#" className="help-item">
                  <FaRegQuestionCircle className="help-icon" />
                  <span>FAQs</span>
                </a>

                <a href="mailto:SDC@mohser.gov.ae" className="help-item">
                  <FaRegEnvelope className="help-icon" />
                  <span>Send us an Email</span>
                </a>

                <a href="#" className="help-item">
                  <FaRegCommentDots className="help-icon" />
                  <span>Chat With Us</span>
                </a>

                <a href="tel:+971000000000" className="help-item">
                  <FaPhoneAlt className="help-icon" />
                  <span>Click to talk</span>
                </a>
              </Card.Body>
            </Card>
          </div>
        </Col>

        {/* =====================================
                RIGHT FORM
            ====================================== */}
        <Col lg={9} md={8} sm={12} className="right-column">
          {/* My Applications */}
          <div className="application-button-wrapper">
            <Button className="my-applications-btn">My Applications</Button>
          </div>

          {/* ================= FORM CARD ================= */}
          <Card className="education-card rounded-3">
            <Card.Body>
              <div className="section_one" id="section_one">
                <h3 className="education-heading">Education Details</h3>

                {/* Information */}
                <div className="draft-warning">
                  To avoid creating duplicate applications, please complete any
                  existing draft applications rather than starting a new one.
                </div>
                {/* ================= FIELD 1 ================= */}
                <div className="">
                  <Form.Group className="form-group-custom">
                    <Form.Label>Applicant's name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Name of the educational institution</Form.Label>

                    <Form.Control
                      type="text"
                      value="Periyar University"
                      disabled
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Applicant's name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Name of the educational institution</Form.Label>

                    <Form.Control
                      type="text"
                      value="Periyar University"
                      disabled
                      readOnly
                    />
                  </Form.Group>
                  {/* Package Start */}
                  <div className="your-package-wrapper">
                    {/* Your Package Card */}
                    <div className="draft-warning">
                      <h6 className="package-title">Your Package</h6>
                      <p className="package-description">
                        Based on the information you entered, your approximate
                        price for your application is as below but additional
                        Fees might be required, like Issuing Authority Fees
                        based on the application process.
                      </p>
                      <Table className="fee-table mb-0 mt-2">
                        <tbody>
                          <tr>
                            <th>Service Fee</th>

                            <td className="service-fee">AED 350.00</td>
                          </tr>

                          <tr>
                            <th>Total</th>

                            <td>AED 350</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="draft-warning m-0">
                      <Form.Check
                        type="checkbox"
                        id="termsCheck"
                        label={
                          <>
                            I hereby agree to the{" "}
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              terms and conditions
                            </a>
                          </>
                        }
                      />
                    </div>
                    <div className="application-button-wrapper">
                      <Button className="my-applications-btn">Proceed</Button>
                    </div>
                  </div>
                  {/* Package End */}
                </div>
              </div>
              <div className="section_two mt-3" id="section_two">
                <h3 className="education-heading">Education Details</h3>
                <div className="">
                  <Form.Group className="form-group-custom">
                    <Form.Label>Upload Passport</Form.Label>
                    {/* Drag & Upload  Start */}
                    <Card className="p-2 shadow-sm">
                      <div
                        {...getRootProps()}
                        className={`upload-box ${isDragActive ? "active" : ""}`}
                      >
                        <input {...getInputProps()} />

                        <div className="upload-content">
                          <p className="mb-1">
                            {isDragActive
                              ? "Drop the file here..."
                              : "Drag & Drop here"}
                          </p>
                          <p
                            className={`mb-0 ${
                              isDragActive
                                ? "opacity-0 invisible"
                                : "opacity-100 visible"
                            }`}
                          >
                            or
                          </p>

                          <p
                            className={`upload_paragraph mb-0 ${
                              isDragActive
                                ? "opacity-0 invisible"
                                : "opacity-100 visible"
                            }`}
                          >
                            Browse Files
                          </p>
                        </div>
                      </div>
                    </Card>
                    {file && <div className="form-label mt-1">{file.name}</div>}
                    {/* Drag & Upload End */}
                  </Form.Group>
                  <Form.Group className="form-group-custom">
                    <Form.Label>Upload Your Degree Certificate</Form.Label>
                    {/* Drag & Upload  Start */}
                    <Card className="p-2 shadow-sm">
                      <div
                        {...getRootProps()}
                        className={`upload-box ${isDragActive ? "active" : ""}`}
                      >
                        <input {...getInputProps()} />

                        <div className="upload-content">
                          <p className="mb-1">
                            {isDragActive
                              ? "Drop the file here..."
                              : "Drag & Drop here"}
                          </p>
                          <p
                            className={`mb-0 ${
                              isDragActive
                                ? "opacity-0 invisible"
                                : "opacity-100 visible"
                            }`}
                          >
                            or
                          </p>

                          <p
                            className={`upload_paragraph mb-0 ${
                              isDragActive
                                ? "opacity-0 invisible"
                                : "opacity-100 visible"
                            }`}
                          >
                            Browse Files
                          </p>
                        </div>
                      </div>
                    </Card>
                    {file && <div className="form-label mt-1">{file.name}</div>}
                    {/* Drag & Upload End */}
                  </Form.Group>
                  <div className="application-button-wrapper">
                    <Button className="my-applications-btn">Proceed</Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
