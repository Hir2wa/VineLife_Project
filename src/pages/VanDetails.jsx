import React from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const parm = useParams();
  console.log(parm);

  return <p>hello world</p>;
};

export default VanDetails;
