// import React, { useCallback, useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Form,
//   Button,
//   Table,
// } from "react-bootstrap";
// import {
//   FaRegQuestionCircle,
//   FaRegEnvelope,
//   FaRegCommentDots,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { useDropzone } from "react-dropzone";

// const Login = () => {
//   const [file, setFile] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     if (acceptedFiles.length > 0) {
//       setFile(acceptedFiles[0]);
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     multiple: false,
//   });

//   const [showUploadSection, setShowUploadSection] = useState(false);

//   return (
//     <Container>
//       <Row className="g-4">
//         {/* =====================================
//                 LEFT SIDEBAR
//             ====================================== */}
//         <Col lg={3} md={4} sm={12} className="left-column">
//           <div className="sidebar-content right_side_sticky">
//             <h2 className="page-title">Academic Credential Verification</h2>

//             <p className="intro-text">
//               Please ensure that all information entered and documents uploaded
//               are accurate and complete. Submission of incorrect or inconsistent
//               details may result in delays or rejection of your application.
//             </p>

//             <div className="steps-link">
//               Steps to complete your verification for the certificate of
//               recognition process
//             </div>

//             {/* ================= STEPS CARD ================= */}
//             <Card className="steps-card rounded-3">
//               <div className="step-item active">
//                 <span className="step-number">1</span>
//                 <a href="#section_one">Education Details</a>
//               </div>

//               <div className="step-item">
//                 <span className="step-number">2</span>
//                 <a
//                   href="#section_two"
//                   onClick={(e) => {
//                     if (!showUploadSection) {
//                       e.preventDefault();
//                     }
//                   }}
//                 >
//                   Personal Information
//                 </a>
//               </div>

//               <div className={`step-item ${showUploadSection ? "active" : ""}`}>
//                 <span className="step-number">3</span>
//                 <a
//                   href="#section_three"
//                   onClick={(e) => {
//                     if (!showUploadSection) {
//                       e.preventDefault();
//                     }
//                   }}
//                 >
//                   Upload Documents
//                 </a>
//               </div>

//               {/* <div className="step-item">
//                 <span className="step-number">4</span>
//                 <a href="#section_four" onClick={(e) => e.preventDefault()}>
//                   Summary and Payment{" "}
//                 </a>
//               </div> */}
//             </Card>

//             {/* ================= VERIFICATION NOTE ================= */}
//             <p className="intro-text">
//               You will receive your degree verification document within 18 days.
//               You will then be able to apply for your Certificate of Recognition
//               from the Ministry of Higher Education and Scientific Research.
//             </p>

//             {/* ================= HELP CARD ================= */}
//             <Card className="help-card rounded-3">
//               <Card.Header>Do you need help?</Card.Header>

//               <Card.Body>
//                 <a href="#" className="help-item">
//                   <FaRegQuestionCircle className="help-icon" />
//                   <span>FAQs</span>
//                 </a>

//                 <a href="mailto:SDC@mohser.gov.ae" className="help-item">
//                   <FaRegEnvelope className="help-icon" />
//                   <span>Send us an Email</span>
//                 </a>

//                 <a href="#" className="help-item">
//                   <FaRegCommentDots className="help-icon" />
//                   <span>Chat With Us</span>
//                 </a>

//                 <a href="tel:+971000000000" className="help-item">
//                   <FaPhoneAlt className="help-icon" />
//                   <span>Click to talk</span>
//                 </a>
//               </Card.Body>
//             </Card>
//           </div>
//         </Col>

//         {/* =====================================
//                 RIGHT FORM
//             ====================================== */}
//         <Col lg={9} md={8} sm={12} className="right-column">
//           {/* My Applications */}
//           <div className="application-button-wrapper">
//             <Button className="my-applications-btn">My Applications</Button>
//           </div>

//           {/* ================= FORM CARD ================= */}
//           <Card className="education-card rounded-3">
//             <Card.Body>
//               <div className="section_one" id="section_one">
//                 <h3 className="education-heading">Education Details</h3>

//                 {/* Information */}
//                 <div className="draft-warning">
//                   To avoid creating duplicate applications, please complete any
//                   existing draft applications rather than starting a new one.
//                 </div>
//                 {/* ================= FIELD 1 ================= */}
//                 <div className="">
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Applicant's name</Form.Label>

//                     <Form.Control type="text" value="Name" disabled readOnly />
//                   </Form.Group>
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Name of the educational institution</Form.Label>

//                     <Form.Control
//                       type="text"
//                       value="Periyar University"
//                       disabled
//                       readOnly
//                     />
//                   </Form.Group>
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Applicant's name</Form.Label>

//                     <Form.Control type="text" value="Name" disabled readOnly />
//                   </Form.Group>
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Name of the educational institution</Form.Label>

//                     <Form.Control
//                       type="text"
//                       value="Periyar University"
//                       disabled
//                       readOnly
//                     />
//                   </Form.Group>
//                   {/* Package Start */}
//                   <div className="your-package-wrapper">
//                     {/* Your Package Card */}
//                     <div className="draft-warning">
//                       <h6 className="package-title">Your Package</h6>
//                       <p className="package-description">
//                         Based on the information you entered, your approximate
//                         price for your application is as below but additional
//                         Fees might be required, like Issuing Authority Fees
//                         based on the application process.
//                       </p>
//                       <Table className="fee-table mb-0 mt-2">
//                         <tbody>
//                           <tr>
//                             <th>Service Fee</th>

//                             <td className="service-fee">AED 350.00</td>
//                           </tr>

//                           <tr>
//                             <th>Total</th>

//                             <td>AED 350</td>
//                           </tr>
//                         </tbody>
//                       </Table>
//                     </div>
//                     <div className="draft-warning m-0">
//                       <Form.Check
//                         type="checkbox"
//                         id="termsCheck"
//                         label={
//                           <>
//                             I hereby agree to the{" "}
//                             <a href="#" onClick={(e) => e.preventDefault()}>
//                               terms and conditions
//                             </a>
//                           </>
//                         }
//                       />
//                     </div>
//                     <div className="application-button-wrapper">
//                       <Button className="my-applications-btn">Proceed</Button>
//                     </div>
//                   </div>
//                   {/* Package End */}
//                 </div>
//               </div>
//               <div className="section_two" id="section_two">
//                 <h3 className="education-heading">Persona Details</h3>

//                 {/* ================= FIELD 1 ================= */}
//                 <div className="">
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Applicant's name</Form.Label>

//                     <Form.Control type="text" value="Name" disabled readOnly />
//                   </Form.Group>
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Name of the educational institution</Form.Label>

//                     <Form.Control
//                       type="text"
//                       value="Periyar University"
//                       disabled
//                       readOnly
//                     />
//                   </Form.Group>
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Applicant's name</Form.Label>

//                     <Form.Control type="text" value="Name" disabled readOnly />
//                   </Form.Group>
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Name of the educational institution</Form.Label>

//                     <Form.Control
//                       type="text"
//                       value="Periyar University"
//                       disabled
//                       readOnly
//                     />
//                   </Form.Group>
//                   <div className="application-button-wrapper">
//                     <Button className="my-applications-btn">Proceed</Button>
//                   </div>
//                 </div>
//               </div>
//               <div className="section_three mt-3" id="three">
//                 <h3 className="education-heading">Upload Document</h3>
//                 <div className="">
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Upload Passport</Form.Label>
//                     {/* Drag & Upload  Start */}
//                     <Card className="p-2 shadow-sm">
//                       <div
//                         {...getRootProps()}
//                         className={`upload-box ${isDragActive ? "active" : ""}`}
//                       >
//                         <input {...getInputProps()} />

//                         <div className="upload-content">
//                           <p className="mb-1">
//                             {isDragActive
//                               ? "Drop the file here..."
//                               : "Drag & Drop here"}
//                           </p>
//                           <p
//                             className={`mb-0 ${
//                               isDragActive
//                                 ? "opacity-0 invisible"
//                                 : "opacity-100 visible"
//                             }`}
//                           >
//                             or
//                           </p>

//                           <p
//                             className={`upload_paragraph mb-0 ${
//                               isDragActive
//                                 ? "opacity-0 invisible"
//                                 : "opacity-100 visible"
//                             }`}
//                           >
//                             Browse Files
//                           </p>
//                         </div>
//                       </div>
//                     </Card>
//                     {file && <div className="form-label mt-1">{file.name}</div>}
//                     {/* Drag & Upload End */}
//                   </Form.Group>
//                   <Form.Group className="form-group-custom">
//                     <Form.Label>Upload Your Degree Certificate</Form.Label>
//                     {/* Drag & Upload  Start */}
//                     <Card className="p-2 shadow-sm">
//                       <div
//                         {...getRootProps()}
//                         className={`upload-box ${isDragActive ? "active" : ""}`}
//                       >
//                         <input {...getInputProps()} />

//                         <div className="upload-content">
//                           <p className="mb-1">
//                             {isDragActive
//                               ? "Drop the file here..."
//                               : "Drag & Drop here"}
//                           </p>
//                           <p
//                             className={`mb-0 ${
//                               isDragActive
//                                 ? "opacity-0 invisible"
//                                 : "opacity-100 visible"
//                             }`}
//                           >
//                             or
//                           </p>

//                           <p
//                             className={`upload_paragraph mb-0 ${
//                               isDragActive
//                                 ? "opacity-0 invisible"
//                                 : "opacity-100 visible"
//                             }`}
//                           >
//                             Browse Files
//                           </p>
//                         </div>
//                       </div>
//                     </Card>
//                     {file && <div className="form-label mt-1">{file.name}</div>}
//                     {/* Drag & Upload End */}
//                   </Form.Group>
//                   <div className="application-button-wrapper">
//                     <Button className="my-applications-btn">Proceed</Button>
//                   </div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;

// 09-Sep Start

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
  /* =========================================
     SECTION STATE
     1 = Education
     2 = Personal
     3 = Upload Documents
     4 = Summary & Payment
  ========================================= */

  const [currentSection, setCurrentSection] = useState(1);

  /* =========================================
     FILE STATE
  ========================================= */

  const [passportFile, setPassportFile] = useState(null);
  const [degreeFile, setDegreeFile] = useState(null);

  /* =========================================
     PASSPORT UPLOAD
  ========================================= */

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

  /* =========================================
     DEGREE UPLOAD
  ========================================= */

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

  /* =========================================
     SCROLL FUNCTION
  ========================================= */

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

  /* =========================================
     EDUCATION PROCEED
  ========================================= */

  const handleEducationProceed = () => {
    setCurrentSection(2);

    scrollToSection("section_two");
  };

  /* =========================================
     PERSONAL PROCEED
  ========================================= */

  const handlePersonalProceed = () => {
    setCurrentSection(3);

    scrollToSection("section_three");
  };

  /* =========================================
     UPLOAD PROCEED
  ========================================= */

  const handleUploadProceed = () => {
    setCurrentSection(4);

    scrollToSection("section_four");
  };

  /* =========================================
     SIDEBAR STEP CLICK
  ========================================= */

  const handleStepClick = (sectionNumber, sectionId) => {
    // Future sections cannot be accessed
    if (sectionNumber > currentSection) {
      return;
    }

    setCurrentSection(sectionNumber);

    scrollToSection(sectionId);
  };

  return (
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
              Please ensure that all information entered and documents uploaded
              are accurate and complete. Submission of incorrect or inconsistent
              details may result in delays or rejection of your application.
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
                className={`step-item ${currentSection === 1 ? "active" : ""}`}
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
                className={`step-item ${currentSection === 2 ? "active" : ""}`}
              >
                <span className="step-number">2</span>

                <a
                  href="#section_two"
                  onClick={(e) => {
                    e.preventDefault();

                    handleStepClick(2, "section_two");
                  }}
                >
                  Personal Information
                </a>
              </div>

              {/* STEP 3 */}

              <div
                className={`step-item ${currentSection === 3 ? "active" : ""}`}
              >
                <span className="step-number">3</span>

                <a
                  href="#section_three"
                  onClick={(e) => {
                    e.preventDefault();

                    handleStepClick(3, "section_three");
                  }}
                >
                  Upload Documents
                </a>
              </div>

              {/* STEP 4 */}

              <div
                className={`step-item ${currentSection === 4 ? "active" : ""}`}
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
              You will receive your degree verification document within 18 days.
              You will then be able to apply for your Certificate of Recognition
              from the Ministry of Higher Education and Scientific Research.
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

                <a href="mailto:SDC@mohser.gov.ae" className="help-item">
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

                <a href="tel:+971000000000" className="help-item">
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
                  To avoid creating duplicate applications, please complete any
                  existing draft applications rather than starting a new one.
                </div>

                {/* FIELD 1 */}

                <Form.Group className="form-group-custom">
                  <Form.Label>Applicant's name</Form.Label>

                  <Form.Control type="text" value="Name" disabled readOnly />
                </Form.Group>

                {/* FIELD 2 */}

                <Form.Group className="form-group-custom">
                  <Form.Label>Name of the educational institution</Form.Label>

                  <Form.Control
                    type="text"
                    value="Periyar University"
                    disabled
                    readOnly
                  />
                </Form.Group>

                {/* FIELD 3 */}

                <Form.Group className="form-group-custom">
                  <Form.Label>Applicant's name</Form.Label>

                  <Form.Control type="text" value="Name" disabled readOnly />
                </Form.Group>

                {/* FIELD 4 */}

                <Form.Group className="form-group-custom">
                  <Form.Label>Name of the educational institution</Form.Label>

                  <Form.Control
                    type="text"
                    value="Periyar University"
                    disabled
                    readOnly
                  />
                </Form.Group>

                {/* =================================================
                    PACKAGE
                ================================================== */}

                <div className="your-package-wrapper">
                  {/* PACKAGE CARD */}

                  <div className="draft-warning">
                    <h6 className="package-title">Your Package</h6>

                    <p className="package-description">
                      Based on the information you entered, your approximate
                      price for your application is as below but additional Fees
                      might be required, like Issuing Authority Fees based on
                      the application process.
                    </p>

                    <Table className="fee-table mb-0 mt-2">
                      <tbody>
                        <tr>
                          <th>Service Fee</th>

                          <td>
                            <span className="package_tot">AED XXX</span>
                          </td>
                        </tr>

                        <tr>
                          <th>Total</th>

                          <td>
                            <span className="package_tot">AED XXX</span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                  {/* TERMS */}

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

                  {/* EDUCATION PROCEED */}

                  {currentSection === 1 && (
                    <div className="application-button-wrapper">
                      <Button
                        className="my-applications-btn"
                        onClick={handleEducationProceed}
                      >
                        Proceed
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* =================================================
                  SECTION TWO
              ================================================== */}

              {currentSection >= 2 && (
                <div className="section_two mt-3" id="section_two">
                  <h3 className="education-heading">Personal Details</h3>

                  {/* FIELD 1 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Applicant's name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>

                  {/* FIELD 2 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Name of the educational institution</Form.Label>

                    <Form.Control
                      type="text"
                      value="Periyar University"
                      disabled
                      readOnly
                    />
                  </Form.Group>

                  {/* FIELD 3 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Applicant's name</Form.Label>

                    <Form.Control type="text" value="Name" disabled readOnly />
                  </Form.Group>

                  {/* FIELD 4 */}

                  <Form.Group className="form-group-custom">
                    <Form.Label>Name of the educational institution</Form.Label>

                    <Form.Control
                      type="text"
                      value="Periyar University"
                      disabled
                      readOnly
                    />
                  </Form.Group>

                  {/* PERSONAL PROCEED */}

                  {currentSection === 2 && (
                    <div className="application-button-wrapper">
                      <Button
                        className="my-applications-btn"
                        onClick={handlePersonalProceed}
                      >
                        Proceed
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* =================================================
                  SECTION THREE
              ================================================== */}

              {currentSection >= 3 && (
                <div className="section_three mt-3" id="section_three">
                  <h3 className="education-heading">Upload Document</h3>

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
                      <div className="form-label mt-1">{passportFile.name}</div>
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

                  {/* UPLOAD PROCEED */}

                  {currentSection === 3 && (
                    <div className="application-button-wrapper">
                      <Button
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
                  SECTION FOUR
              ================================================== */}

              {currentSection >= 4 && (
                <div className="section_four mt-3" id="section_four">
                  <h3 className="education-heading">Summary and Payment</h3>

                  {/* APPLICATION SUMMARY */}

                  <div className="draft-warning">
                    <h6 className="package-title">Application Summary</h6>

                    <p className="package-description">
                      Based on the information you entered, your approximate
                      price for your application is as below but additional Fees
                      might be required, like Issuing Authority Fess based on
                      the application process.
                    </p>
                    <Table className="fee-table mb-0 mt-2">
                      <tbody>
                        <tr>
                          <th>Degree Verification - Masters Degree</th>

                          <td>
                            <span className="package_tot">AED XXX</span>
                          </td>
                        </tr>

                        <tr>
                          <th>Total</th>

                          <td>
                            <span className="package_tot">AED XXX</span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                  {/* PAY NOW */}

                  <div className="application-button-wrapper">
                    <Button className="my-applications-btn">Pay Now</Button>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

// 09-Sep End
