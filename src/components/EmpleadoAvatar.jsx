import React from "react";
import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({ pic }) => {
  return (
    <div>
      <Image src={pic} />
    </div>
  );
};
export default EmpleadoAvatar;
