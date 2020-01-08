import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
const Home = () => {
  return (
    <Layout>
      ....
      <h1>Home</h1>
      <Link to="/about">about</Link>
    </Layout>
  );
};
export default Home;
