import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:8080/messages/add";

class Form extends Component {
  constructor(props) {
    super(props);
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
      formError: false,
      error: null
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === "" 
    ) {
      this.setState({
        formError: true
      });
      return false;
    } else {
      this.setState({
        formError: false
      });
      const obj = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };
      console.log(obj);
      axios
        .post(url, obj)
        .then(res => console.log(res.data))
        .catch(error => this.setState({ error: error.message }));

      this.setState({
        name: "",
        email: "",
        message: ""
      });
    }
  };

  // OnChange Functions to get the input values
  getName = e => {
    let name = e.target.value;
    this.setState({
      name: name
    });
    console.log(this.state.name);
  };

  getEmail = e => {
    let email = e.target.value;
    this.setState({
      email: email
    });

    console.log(this.state.email);
  };

  getMessage = e => {
    let message = e.target.value;
    this.setState({
      message: message
    });
    console.log(this.state.message);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="row">
        <div className="col-sm"></div>{" "}
        <div className="col-sm">
          <form id="contact">
            {/* I am just sending a basic error message */}
            {this.state.formError && (
              <p className="error">Fill all the input fields please.</p>
            )}
            {/* <p>Fill in the next form to send us a message</p> */}
            <div className="form-group">
              <label htmlFor="name" className="form-rounded form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder=""
                onChange={this.getName}
                value={this.state.name}
                className="form-rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-rounded form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder=""
                onChange={this.getEmail}
                value={this.state.email}
                className="form-rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-rounded form-label">
                Message
              </label>
              <textarea
                onChange={this.getMessage}
                maxLength="450"
                value={this.state.message}
                name="message"
                className="form-rounded"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="submit"
                value="Send"
                onClick={this.handleFormSubmit}
                className="form-rounded form-label"
                id="submit"
              />
            </div>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    );
  }
}

export default Form;
