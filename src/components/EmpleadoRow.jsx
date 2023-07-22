import React from "react";
import { Row, Col } from "react-bootstrap";

const EmpleadoRow = ({ fullName, title, department }) => {
  return (
    <Row>
      <p>
        <strong>{fullName}</strong>
      </p>
      <Col>
        <p>{title}</p>
      </Col>
      <Col>
        <div>
          <p className="fs-6 px-1" style={{ backgroundColor: "lightblue" }}>
            {department}
          </p>
        </div>
      </Col>
    </Row>
  );
};
export default EmpleadoRow;
