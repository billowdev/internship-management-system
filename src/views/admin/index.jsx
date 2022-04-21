import React from "react";
import Login from "./manages/Login";
import Layout from "../components/Layout";
import Controllers from "./Controllers";


function Admin() {
  return (
    <Layout>
      <Controllers />
      <Login />
    </Layout>
  );
}

export default Admin;
