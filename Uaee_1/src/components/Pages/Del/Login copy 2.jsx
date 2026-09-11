import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";

const AcademicCredentialVerification = () => {
  const [language, setLanguage] = useState("English");

  const isArabic = language === "Arabic";

  return (
    <div
      className={`academic-page ${isArabic ? "rtl-page" : "ltr-page"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* ================= HEADER ================= */}
      <header className="top-header">
        <div className="header-left">
          <div className="vfs-logo">
            <span>vfs.</span>
          </div>

          <div className="vfs-text">VFS.GLOBAL</div>
        </div>

        <div className="header-right">
          {/* Language */}
          <Dropdown>
            <Dropdown.Toggle variant="light" className="language-dropdown">
              {language}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setLanguage("English")}>
                English
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setLanguage("Arabic")}>
                العربية
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* User */}
          <Dropdown>
            <Dropdown.Toggle variant="link" className="user-dropdown">
              {isArabic ? "مهيدا" : "Mahida"}
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item>
                {isArabic ? "الملف الشخصي" : "Profile"}
              </Dropdown.Item>

              <Dropdown.Item>
                {isArabic ? "تسجيل الخروج" : "Logout"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="academic-main">
        <Container fluid>
          <Row className="g-4">
            {/* ================= LEFT SECTION ================= */}
            <Col lg={3} md={4} sm={12} className="left-column">
              <div className="sidebar-content">
                {/* Heading */}
                <h2 className="page-title">
                  {isArabic
                    ? "التحقق من المؤهلات الأكاديمية"
                    : "Academic Credential Verification"}
                </h2>

                {/* Description */}
                <p className="intro-text">
                  {isArabic
                    ? "يرجى التأكد من صحة جميع المعلومات التي تم إدخالها والمستندات التي تم تحميلها. قد يؤدي تقديم معلومات غير صحيحة أو غير متسقة إلى تأخير أو رفض طلبك."
                    : "Please ensure that all information entered and documents uploaded are accurate and complete. Submission of incorrect or inconsistent details may result in delays or rejection of your application."}
                </p>

                {/* Steps link */}
                <div className="steps-link">
                  {isArabic
                    ? "خطوات إكمال عملية التحقق من شهادة الاعتراف"
                    : "Steps to complete your verification for the certificate of recognition process"}
                </div>

                {/* Steps Card */}
                <Card className="steps-card">
                  <div className="step-item active">
                    <span className="step-number">1</span>
                    <span>
                      {isArabic ? "تفاصيل التعليم" : "Education Details"}
                    </span>
                  </div>

                  <div className="step-item">
                    <span className="step-number">2</span>
                    <span>
                      {isArabic ? "المعلومات الشخصية" : "Personal Information"}
                    </span>
                  </div>

                  <div className="step-item">
                    <span className="step-number">3</span>
                    <span>
                      {isArabic ? "تحميل المستندات" : "Upload Documents"}
                    </span>
                  </div>

                  <div className="step-item">
                    <span className="step-number">4</span>
                    <span>
                      {isArabic ? "الملخص والدفع" : "Summary and Payment"}
                    </span>
                  </div>
                </Card>

                {/* Information text */}
                <p className="verification-note">
                  {isArabic
                    ? "ستتلقى مستند التحقق من شهادتك خلال 18 يومًا. وبعد ذلك ستتمكن من التقدم بطلب للحصول على شهادة الاعتراف من وزارة التعليم العالي والبحث العلمي."
                    : "You will receive your degree verification document within 18 days. You will then be able to apply for your Certificate of Recognition from the Ministry of Higher Education and Scientific Research."}
                </p>

                {/* Payment Information */}
                <Card className="info-card">
                  <Card.Body>
                    <p>
                      {isArabic
                        ? "في حالة عدم اكتمال عملية الدفع بنجاح بسبب مشكلة فنية، يرجى التواصل مع فريق الدعم الفني عبر البريد الإلكتروني."
                        : "In the event that the payment process is not completed successfully due to a technical issue, please contact the technical support team via email."}
                    </p>

                    <a href="mailto:SDC@mohser.gov.ae">SDC@mohser.gov.ae</a>

                    <p className="mb-0">
                      {isArabic
                        ? "وسيتم اتخاذ الإجراءات اللازمة لحل المشكلة في أقرب وقت ممكن."
                        : "The necessary actions will be taken to resolve the issue as soon as possible."}
                    </p>
                  </Card.Body>
                </Card>

                {/* Help Card */}
                <Card className="help-card">
                  <Card.Header>
                    {isArabic ? "هل تحتاج إلى مساعدة؟" : "Do you need help?"}
                  </Card.Header>

                  <Card.Body>
                    <div className="help-item">
                      <span>ⓘ</span>
                      <span>{isArabic ? "الأسئلة الشائعة" : "FAQs"}</span>
                    </div>

                    <div className="help-item">
                      <span>✉</span>
                      <span>
                        {isArabic
                          ? "أرسل لنا بريدًا إلكترونيًا"
                          : "Send us an Email"}
                      </span>
                    </div>

                    <div className="help-item">
                      <span>☻</span>
                      <span>{isArabic ? "تحدث معنا" : "Chat With Us"}</span>
                    </div>

                    <div className="help-item">
                      <span>⌕</span>
                      <span>{isArabic ? "اضغط للتحدث" : "Click to talk"}</span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* ================= RIGHT SECTION ================= */}
            <Col lg={9} md={8} sm={12} className="right-column">
              {/* My Applications */}
              <div className="application-button-wrapper">
                <Button className="my-applications-btn">
                  {isArabic ? "طلباتي" : "My Applications"}
                </Button>
              </div>

              {/* Form Card */}
              <Card className="education-card">
                <Card.Body>
                  <h3 className="education-heading">
                    {isArabic ? "تفاصيل التعليم" : "Education Details"}
                  </h3>

                  {/* Warning / information */}
                  <div className="draft-warning">
                    {isArabic
                      ? "لتجنب إنشاء طلبات مكررة، يرجى إكمال أي طلبات مسودة موجودة بدلاً من بدء طلب جديد."
                      : "To avoid creating duplicate applications, please complete any existing draft applications rather than starting a new one."}
                  </div>

                  {/* ================= DUMMY FORM ================= */}

                  {/* Field 1 */}
                  <Form.Group className="form-group-custom">
                    <Form.Label>
                      {isArabic ? "اسم مقدم الطلب" : "Applicant's name"}
                    </Form.Label>

                    <Form.Control
                      type="text"
                      value={isArabic ? "ريفاثي" : "Revathy"}
                      disabled
                      readOnly
                    />
                  </Form.Group>

                  {/* Field 2 */}
                  <Form.Group className="form-group-custom">
                    <Form.Label>
                      {isArabic
                        ? "الدولة التي درست فيها"
                        : "Country where you studied"}
                    </Form.Label>

                    <Form.Select disabled value="India" readOnly>
                      <option value="India">
                        {isArabic ? "جمهورية الهند" : "Republic of India"}
                      </option>
                    </Form.Select>
                  </Form.Group>

                  {/* Field 3 */}
                  <Form.Group className="form-group-custom">
                    <Form.Label>
                      {isArabic
                        ? "اسم المؤسسة التعليمية"
                        : "Name of the educational institution"}
                    </Form.Label>

                    <Form.Control
                      type="text"
                      value={isArabic ? "جامعة بيريار" : "Periyar University"}
                      disabled
                      readOnly
                    />
                  </Form.Group>

                  {/* Field 4 */}
                  <Form.Group className="form-group-custom">
                    <Form.Label>
                      {isArabic ? "مستوى الدرجة العلمية" : "Degree level"}
                    </Form.Label>

                    <Form.Select disabled value="Master" readOnly>
                      <option value="Master">
                        {isArabic ? "ماجستير" : "Master"}
                      </option>
                    </Form.Select>
                  </Form.Group>

                  {/* Field 5 */}
                  <Form.Group className="form-group-custom">
                    <Form.Label>
                      {isArabic ? "عنوان الأطروحة" : "Thesis Title"}
                    </Form.Label>

                    <Form.Control
                      type="text"
                      value={isArabic ? "علوم الكمبيوتر" : "Computer Science"}
                      disabled
                      readOnly
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default AcademicCredentialVerification;
