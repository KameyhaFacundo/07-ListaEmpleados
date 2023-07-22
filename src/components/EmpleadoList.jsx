import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";
import EmpleadoRow from "./EmpleadoRow";
import { Card, Row, Col } from "react-bootstrap";

const EmpleadoList = ({ empleados }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      {empleados.map((empleado) => (
        <Card key={empleado.id} className="my-1 " style={{ width: "40%" }}>
          <Card.Body>
            <Row>
              <Col xs={4}>
                <EmpleadoAvatar pic={empleado.pic} />
              </Col>
              <Col xs={8}>
                <EmpleadoRow
                  fullName={empleado.fullName}
                  title={empleado.title}
                  department={empleado.department}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default EmpleadoList;
