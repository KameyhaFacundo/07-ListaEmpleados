import React from "react";
import { Row, Col } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ fullName, title, department, pic }) => {
  return (
    <Row>
      <Col xs={4}>
        <EmpleadoAvatar pic={pic} />
      </Col>
      <Col xs={8}>
        <p>
          <strong>{fullName}</strong>
        </p>
        <p>{title}</p>
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
