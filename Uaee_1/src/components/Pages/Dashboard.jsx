import React, { useCallback, useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
  Modal,
} from "react-bootstrap";

import {
  FaRegQuestionCircle,
  FaRegEnvelope,
  FaRegCommentDots,
  FaPhoneAlt,
} from "react-icons/fa";

import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const Dashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryOptions = [
    { value: "uae", label: "United Arab Emirates" },
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
    { value: "singapore", label: "Singapore" },
    { value: "saudi-arabia", label: "Saudi Arabia" },
  ];
  /* =========================================================
     NAVIGATION
  ========================================================== */

  const navigate = useNavigate();

  const handleFinalSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  /* =========================================================
     MODAL
  ========================================================== */

  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();

    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  /* =========================================================
     SECTION STATE

     1 = Education Details
     2 = Upload Documents
     3 = Additional Information
     4 = Summary & Payment
  ========================================================== */

  const [currentSection, setCurrentSection] = useState(1);

  /* =========================================================
     FILE STATE
  ========================================================== */

  const [passportFile, setPassportFile] = useState(null);

  const [degreeFile, setDegreeFile] = useState(null);

  const [additionalFile, setAdditionalFile] = useState(null);

  /* =========================================================
     PASSPORT UPLOAD
  ========================================================== */

  const onPassportDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setPassportFile(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getPassportRootProps,
    getInputProps: getPassportInputProps,
    isDragActive: isPassportDragActive,
  } = useDropzone({
    onDrop: onPassportDrop,
    multiple: false,
  });

  /* =========================================================
     DEGREE CERTIFICATE UPLOAD
  ========================================================== */

  const onDegreeDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setDegreeFile(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getDegreeRootProps,
    getInputProps: getDegreeInputProps,
    isDragActive: isDegreeDragActive,
  } = useDropzone({
    onDrop: onDegreeDrop,
    multiple: false,
  });

  /* =========================================================
     ADDITIONAL DOCUMENT UPLOAD
  ========================================================== */

  const onAdditionalDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setAdditionalFile(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getAdditionalRootProps,
    getInputProps: getAdditionalInputProps,
    isDragActive: isAdditionalDragActive,
  } = useDropzone({
    onDrop: onAdditionalDrop,
    multiple: false,
  });

  /* =========================================================
     SCROLL FUNCTION
  ========================================================== */

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  /* =========================================================
     SECTION 1 → SECTION 2
  ========================================================== */

  const handleEducationProceed = () => {
    setCurrentSection(2);

    scrollToSection("section_two");
  };

  /* =========================================================
     SECTION 2 → SECTION 3
  ========================================================== */

  const handleUploadProceed = () => {
    setCurrentSection(3);

    scrollToSection("section_three");
  };

  /* =========================================================
     SECTION 3 → SECTION 4
  ========================================================== */

  const handleAdditionalProceed = () => {
    setCurrentSection(4);

    scrollToSection("section_four");
  };

  /* =========================================================
     SIDEBAR STEP CLICK
  ========================================================== */

  const handleStepClick = (sectionNumber, sectionId) => {
    // Future sections cannot be accessed
    if (sectionNumber > currentSection) {
      return;
    }

    setCurrentSection(sectionNumber);

    scrollToSection(sectionId);
  };

  return (
    <>
      <Container>
        <Row className="g-4">
          {/* =====================================================
              LEFT SIDEBAR
          ====================================================== */}

          <Col lg={3} md={4} sm={12} className="left-column">
            <div className="sidebar-content right_side_sticky">
              {/* PAGE TITLE */}

              <h2 className="page-title">Academic Credential Verification</h2>

              {/* DESCRIPTION */}

              <p className="intro-text">
                Please ensure that all information entered and documents
                uploaded are accurate and complete. Submission of incorrect or
                inconsistent details may result in delays or rejection of your
                application.
              </p>

              {/* STEPS LINK */}

              <div className="steps-link">
                Steps to complete your verification for the certificate of
                recognition process
              </div>

              {/* =================================================
                  STEPS CARD
              ================================================== */}

              <Card className="steps-card rounded-3">
                {/* STEP 1 */}

                <div
                  className={`step-item ${
                    currentSection === 1 ? "active" : ""
                  }`}
                >
                  <span className="step-number">1</span>

                  <a
                    href="#section_one"
                    onClick={(e) => {
                      e.preventDefault();

                      handleStepClick(1, "section_one");
                    }}
                  >
                    Education Details
                  </a>
                </div>

                {/* STEP 2 */}

                <div
                  className={`step-item ${
                    currentSection === 2 ? "active" : ""
                  }`}
                >
                  <span className="step-number">2</span>

                  <a
                    href="#section_two"
                    onClick={(e) => {
                      e.preventDefault();

                      handleStepClick(2, "section_two");
                    }}
                  >
                    Upload Documents
                  </a>
                </div>

                {/* STEP 3 */}

                <div
                  className={`step-item ${
                    currentSection === 3 ? "active" : ""
                  }`}
                >
                  <span className="step-number">3</span>

                  <a
                    href="#section_three"
                    onClick={(e) => {
                      e.preventDefault();

                      handleStepClick(3, "section_three");
                    }}
                  >
                    Additional Information
                  </a>
                </div>

                {/* STEP 4 */}

                <div
                  className={`step-item ${
                    currentSection === 4 ? "active" : ""
                  }`}
                >
                  <span className="step-number">4</span>

                  <a
                    href="#section_four"
                    onClick={(e) => {
                      e.preventDefault();

                      handleStepClick(4, "section_four");
                    }}
                  >
                    Summary and Payment
                  </a>
                </div>
              </Card>

              {/* =================================================
                  VERIFICATION NOTE
              ================================================== */}

              <p className="intro-text">
                You will receive your degree verification document within 18
                days. You will then be able to apply for your Certificate of
                Recognition from the Ministry of Higher Education and Scientific
                Research.
              </p>

              {/* =================================================
                  HELP CARD
              ================================================== */}

              <Card className="help-card rounded-3">
                <Card.Header>Do you need help?</Card.Header>

                <Card.Body>
                  {/* FAQ */}

                  <a
                    href="#"
                    className="help-item"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaRegQuestionCircle className="help-icon" />

                    <span>FAQs</span>
                  </a>

                  {/* EMAIL */}

                  <a
                    href="#"
                    className="help-item"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaRegEnvelope className="help-icon" />

                    <span>Send us an Email</span>
                  </a>

                  {/* CHAT */}

                  <a
                    href="#"
                    className="help-item"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaRegCommentDots className="help-icon" />

                    <span>Chat With Us</span>
                  </a>

                  {/* PHONE */}

                  <a
                    href="#"
                    className="help-item"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaPhoneAlt className="help-icon" />

                    <span>Click to talk</span>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <Col lg={9} md={8} sm={12} className="right-column">
            {/* MY APPLICATIONS */}

            <div className="application-button-wrapper">
              <Button className="my-applications-btn">My Applications</Button>
            </div>

            {/* =================================================
                MAIN CARD
            ================================================== */}

            <Card className="education-card rounded-3">
              <Card.Body>
                {/* =================================================
                    SECTION ONE
                ================================================== */}

                <div className="section_one" id="section_one">
                  <h3 className="education-heading">Education Details</h3>

                  {/* INFORMATION */}

                  <div className="draft-warning">
                    To avoid creating duplicate applications, please complete
                    any existing draft applications rather than starting a new
                    one.
                  </div>

                  {/* FIELD 1 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>

                  {/* FIELD 2 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>

                  {/* FIELD 3 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>

                  {/* FIELD 4 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>

                  {/* =================================================
                      PACKAGE
                  ================================================== */}

                  <div className="your-package-wrapper">
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
                            <th width="50%">
                              <span className="package_cont">Service Fee</span>
                            </th>

                            <td width="50%">
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>

                          <tr>
                            <th>
                              <span className="package_cont">Total</span>
                            </th>

                            <td>
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    {/* TERMS */}

                    {currentSection === 1 && (
                      <>
                        <div className="draft-warning m-0">
                          <Form.Check
                            type="checkbox"
                            id="termsCheck"
                            label={
                              <>
                                I hereby agree to the{" "}
                                <a
                                  href="#"
                                  className="form-check-label"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  terms and conditions
                                </a>
                              </>
                            }
                          />
                        </div>

                        {/* PROCEED */}

                        <div className="application-button-wrapper">
                          <Button
                            type="button"
                            className="my-applications-btn"
                            onClick={handleEducationProceed}
                          >
                            Proceed
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* =================================================
                    SECTION TWO - UPLOAD DOCUMENTS
                ================================================== */}

                {currentSection >= 2 && (
                  <div className="section_two mt-3" id="section_two">
                    <h3 className="education-heading">Upload Documents</h3>

                    {/* =================================================
                        PASSPORT
                    ================================================== */}

                    <Form.Group className="form-group-custom">
                      <Form.Label>Upload Passport</Form.Label>

                      <Card className="p-2 shadow-sm">
                        <div
                          {...getPassportRootProps()}
                          className={`upload-box ${
                            isPassportDragActive ? "active" : ""
                          }`}
                        >
                          <input {...getPassportInputProps()} />

                          <div className="upload-content">
                            <p className="mb-1">
                              {isPassportDragActive
                                ? "Drop the file here..."
                                : "Drag & Drop here"}
                            </p>

                            <p
                              className={`mb-0 ${
                                isPassportDragActive
                                  ? "opacity-0 invisible"
                                  : "opacity-100 visible"
                              }`}
                            >
                              or
                            </p>

                            <p
                              className={`upload_paragraph mb-0 ${
                                isPassportDragActive
                                  ? "opacity-0 invisible"
                                  : "opacity-100 visible"
                              }`}
                            >
                              Browse Files
                            </p>
                          </div>
                        </div>
                      </Card>

                      {passportFile && (
                        <div className="form-label mt-1">
                          {passportFile.name}
                        </div>
                      )}
                    </Form.Group>

                    {/* =================================================
                        DEGREE CERTIFICATE
                    ================================================== */}

                    <Form.Group className="form-group-custom">
                      <Form.Label>Upload Your Degree Certificate</Form.Label>

                      <Card className="p-2 shadow-sm">
                        <div
                          {...getDegreeRootProps()}
                          className={`upload-box ${
                            isDegreeDragActive ? "active" : ""
                          }`}
                        >
                          <input {...getDegreeInputProps()} />

                          <div className="upload-content">
                            <p className="mb-1">
                              {isDegreeDragActive
                                ? "Drop the file here..."
                                : "Drag & Drop here"}
                            </p>

                            <p
                              className={`mb-0 ${
                                isDegreeDragActive
                                  ? "opacity-0 invisible"
                                  : "opacity-100 visible"
                              }`}
                            >
                              or
                            </p>

                            <p
                              className={`upload_paragraph mb-0 ${
                                isDegreeDragActive
                                  ? "opacity-0 invisible"
                                  : "opacity-100 visible"
                              }`}
                            >
                              Browse Files
                            </p>
                          </div>
                        </div>
                      </Card>

                      {degreeFile && (
                        <div className="form-label mt-1">{degreeFile.name}</div>
                      )}
                    </Form.Group>

                    {/* PROCEED */}

                    {currentSection === 2 && (
                      <div className="application-button-wrapper">
                        <Button
                          type="button"
                          className="my-applications-btn"
                          onClick={handleUploadProceed}
                        >
                          Proceed
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* =================================================
                    SECTION THREE - ADDITIONAL INFORMATION
                ================================================== */}

                {currentSection >= 3 && (
                  <div className="section_three mt-3" id="section_three">
                    <h3 className="education-heading">
                      Additional Information
                    </h3>

                    {/* FIELD 1 */}

                    <Form.Group className="form-group-custom">
                      <Form.Label>Name</Form.Label>

                      <Form.Control
                        type="text"
                        value="Name"
                        disabled
                        readOnly
                      />
                    </Form.Group>

                    {/* FIELD 2 */}

                    <Form.Group className="form-group-custom">
                      <Form.Label>Name</Form.Label>

                      <Select
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                        placeholder="Select"
                        isSearchable
                        className="country-select"
                        classNamePrefix="country"
                      />
                    </Form.Group>

                    {/* FIELD 3 */}

                    <Form.Group className="form-group-custom">
                      <Form.Label>Select</Form.Label>

                      <Form.Select>
                        <option>--Select--</option>

                        <option value="1">One</option>

                        <option value="2">Two</option>

                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>

                    {/* FIELD 4 - CHECKBOX */}

                    <Form.Group className="form-group-custom cus_check">
                      <Form.Label>Select</Form.Label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          Checkbox 1
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          Checkbox 2
                        </label>
                      </div>
                    </Form.Group>

                    {/* FIELD 5 - RADIO */}

                    <Form.Group className="form-group-custom cus_radio">
                      <Form.Label>Select</Form.Label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          No
                        </label>
                      </div>
                    </Form.Group>

                    {/* LETTER OF AUTHORISATION */}

                    <div className="draft-warning">
                      Please review the{" "}
                      <a href="#" className="form-label" onClick={handleShow}>
                        Letter of Authorisation
                      </a>{" "}
                      and give your digital confirmation.
                    </div>

                    {/* =================================================
                        MODAL
                    ================================================== */}

                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          <h6 className="p-0 m-0">Letter of Authorisation</h6>
                        </Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <p className="form-label">
                          I will not close if you click outside me. Do not even
                          try to press escape key.
                        </p>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button
                          type="button"
                          className="my-applications-btn"
                          onClick={handleClose}
                        >
                          Close
                        </Button>

                        <Button
                          type="button"
                          className="my-applications-btn"
                          onClick={handleClose}
                        >
                          Submit
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    {/* =================================================
                        ADDITIONAL DOCUMENT
                    ================================================== */}

                    <Form.Group className="form-group-custom">
                      <Form.Label>Additional Document</Form.Label>

                      <Card className="p-2 shadow-sm">
                        <div
                          {...getAdditionalRootProps()}
                          className={`upload-box ${
                            isAdditionalDragActive ? "active" : ""
                          }`}
                        >
                          <input {...getAdditionalInputProps()} />

                          <div className="upload-content">
                            <p className="mb-1">
                              {isAdditionalDragActive
                                ? "Drop the file here..."
                                : "Drag & Drop here"}
                            </p>

                            <p
                              className={`mb-0 ${
                                isAdditionalDragActive
                                  ? "opacity-0 invisible"
                                  : "opacity-100 visible"
                              }`}
                            >
                              or
                            </p>

                            <p
                              className={`upload_paragraph mb-0 ${
                                isAdditionalDragActive
                                  ? "opacity-0 invisible"
                                  : "opacity-100 visible"
                              }`}
                            >
                              Browse Files
                            </p>
                          </div>
                        </div>
                      </Card>

                      {additionalFile && (
                        <div className="form-label mt-1">
                          {additionalFile.name}
                        </div>
                      )}
                    </Form.Group>

                    {/* =================================================
                        PROCEED
                    ================================================== */}

                    {currentSection === 3 && (
                      <div className="application-button-wrapper">
                        <Button
                          type="button"
                          className="my-applications-btn"
                          onClick={handleAdditionalProceed}
                        >
                          Proceed
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* =================================================
                    SECTION FOUR - SUMMARY & PAYMENT
                ================================================== */}

                {currentSection >= 4 && (
                  <div className="section_four mt-3" id="section_four">
                    <h3 className="education-heading">Summary and Payment</h3>

                    {/* APPLICATION SUMMARY */}

                    <div className="draft-warning">
                      <h6 className="package-title">Application Summary</h6>

                      <p className="package-description">
                        Based on the information you entered, your approximate
                        price for your application is as below but additional
                        Fees might be required, like Issuing Authority Fees
                        based on the application process.
                      </p>

                      <Table className="fee-table mb-0 mt-2">
                        <tbody>
                          <tr>
                            <th width="50%">
                              <span className="package_cont">
                                Degree Verification - Masters Degree
                              </span>
                            </th>

                            <td width="50%">
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>

                          <tr>
                            <th>
                              <span className="package_cont">
                                Document Validation & Processing
                              </span>
                            </th>

                            <td>
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      <hr />

                      <Table className="fee-table mb-0 mt-2">
                        <tbody>
                          <tr>
                            <th width="50%">
                              <span className="package_cont">Subtotal</span>
                            </th>

                            <td width="50%">
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>

                          <tr>
                            <th>
                              <span className="package_cont">
                                University / IA Fee
                              </span>
                            </th>

                            <td>
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>

                          <tr>
                            <th>
                              <span className="package_cont">5% VAT</span>
                            </th>

                            <td>
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>

                          <tr>
                            <th>
                              <span className="package_cont">Total Due</span>
                            </th>

                            <td>
                              <span className="package_tot">AED XXX</span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    {/* PAY NOW */}

                    <div className="application-button-wrapper">
                      <Button
                        type="button"
                        className="my-applications-btn"
                        onClick={handleFinalSubmit}
                      >
                        Pay Now
                      </Button>
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
