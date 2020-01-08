import React, { useState, useEffect } from "react";
import Layout from "../Core/Layout";
import { Link } from "react-router-dom";
import { saveUser,fetchusers } from "../Actions/User/userAction";
import { connect } from 'react-redux';

const Singup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    errors: "",
    success: false
  });
  const { name, email, password, errors, success } = values;

  const handleChange = name => event => {
    setValues({
      ...values,
      errors: false,
      [name]: event.target.value
    });
  };
    

  const handlerSubmit = props => event => {
    event.preventDefault();
    this.props.saveUser({ name, email, password });
    console.log("suri");
   
  };
  return (
    <Layout>
      <div>
        <form onSubmit={handlerSubmit}>
          <input value={name} onChange={handleChange("name")} type="text" />
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
          />
          <input
            value={email}
            onChange={handleChange("email")}
            className="form-control"
            type="email"
          />
          <button>submit</button>
        </form>
      </div>
    </Layout>
  );
};
const mapStateToProps = state => ({
  roles: state.fechUser
});
export default connect(
  mapStateToProps,
  { saveUser,fetchusers }
)(Singup);
