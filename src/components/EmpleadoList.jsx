import React from "react";
import { Card } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      {empleados.map((empleado) => (
        <Card key={empleado.id} className="my-1 " style={{ width: "40%" }}>
          <Card.Body>
            <EmpleadoRow
              fullName={empleado.fullName}
              title={empleado.title}
              department={empleado.department}
              pic={empleado.pic}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default EmpleadoList;
