import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const LoginUpdate = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  return <div></div>;
};

export default LoginUpdate;
