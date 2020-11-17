import React from "react";
import { useParams } from "react-router-dom";

export default function Character() {
  let { key } = useParams();

  return <div>Character ID is : {key}</div>;
}
