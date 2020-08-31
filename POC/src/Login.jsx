import React, { useState } from "react";
import "./Login.css";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { login } from "./actions/login";
import HeaderPage from "./Header";
import { Button } from "semantic-ui-react";

const LoginPage = ({ history, isAuthenticated, login }) => {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         fields: {
  //             username: '',
  //             password: ''
  //         },
  //         isValidForm: true
  //     }

  //     this.onSubmit = this.onSubmit.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  // }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password, history);
    //history.push("/Welcome#/dashboard");
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // onSubmit(event) {
  //     event.preventDefault();
  //     //todo, add all validation logic here before move to next page
  //     if (this.state.fields['password'] === 'admin' && this.state.fields['username'] === 'admin') {
  //         this.setState({
  //             isValidForm: true
  //         });
  //         //move to dashboard page
  //         this.props.history.push('/Welcome#/dashboard');
  //     }
  //     else {
  //         this.setState({
  //             isValidForm: false
  //         });
  //     }
  // }

  // handleChange(e) {
  //     let fields = this.state.fields;
  //     fields[e.target.name] = e.target.value;
  //     this.setState({
  //         fields
  //     });
  // }

  return (
    <div className="login-header-postion">
      <div>
        <HeaderPage />
      </div>
      <div className="login-main-section">
        {/* <div className='ui info message'>hello</div> */}
        <form onSubmit={onSubmit}>
          <div className="errorText" name="errorMsg" hidden={isAuthenticated}>
            <h3>Error: Invalid user credentials!</h3>
          </div>
          <div>
            <label className="userId-label">User ID</label>
            <Input
              className="userId-input"
              placeholder="Enter your user ID"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>

          <div className="passwordfield">
            <label className="userId-label">Password</label>
            <Input
              className="userId-input"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="login-button-field">
            {/* <Button className='login-button' onClick={this.onSubmit}>Log In</Button> */}
            <Button className="login-button" type="submit">
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});
export default connect(mapStateToProps, { login })(LoginPage);
