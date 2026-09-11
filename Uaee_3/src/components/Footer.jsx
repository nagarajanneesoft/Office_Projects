import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-header" id="footer_section">
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <p className="footer_title mb-0">
                Copyright © VFS Global. All Rights Reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
