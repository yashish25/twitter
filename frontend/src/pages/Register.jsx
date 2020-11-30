import React from 'react';
const axios = require('axios');
// import React, { Fragment, Component } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Helmet } from 'react-helmet';
  
class Register extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
    // console.log(input) 
  }
  // func(){
  //   const username = this.state.input.username;
  //   const email = this.state.input.email;
  //   const password = this.state.input.password;
  //   // event.preventDefault();
  
  //   if(this.validate()){
  //       console.log(username);
  //   }
    


  // }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        // console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
        // console.log(this.state.input)
        
        
        let data = JSON.stringify({
                  username : this.state.input.username,
                  email: this.state.input.email,
                  password: this.state.input.password
        });
        console.log(data);
        
        // const response = axios.post(url,data,{headers:{"Content-Type" : "application/json"}});

        axios.post('http://localhost:3005/register', data,{headers:{"Content-Type" : "application/json"}})
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            });

        
    }

  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
  
      if (typeof input["username"] !== "undefined") {
        const re = /^\S*$/;
        if(input["username"].length < 6 || !re.test(input["username"])){
            isValid = false;
            errors["username"] = "Please enter valid username.";
        }
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
  

     
  render() {
    return (
      <div>
        <div className = "container">
          <h1>Register Now!</h1>
          <form onSubmit={this.handleSubmit}>
    
            <div class="form-group">
              <label for="username">Username:</label>
              <input 
                type="text" 
                name="username" 
                value={this.state.input.username}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter username" 
                id="username" />
    
                <div className="text-danger">{this.state.errors.username}</div>
            </div>
    
            <div class="form-group">
              <label for="email">Email Address:</label>
              <input 
                type="text" 
                name="email" 
                value={this.state.input.email}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter email" 
                id="email" />
    
                <div className="text-danger">{this.state.errors.email}</div>
            </div>
    
            <div class="form-group">
              <label for="password">Password:</label>
              <input 
                type="password" 
                name="password" 
                value={this.state.input.password}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter password" 
                id="password" />
    
                <div className="text-danger">{this.state.errors.password}</div>
            </div>
    
            <div class="form-group">
              <label for="password">Confirm Password:</label>
              <input 
                type="password" 
                name="confirm_password" 
                value={this.state.input.confirm_password}
                onChange={this.handleChange}
                class="form-control" 
                placeholder="Enter confirm password" 
                id="confirm_password" />
    
                <div className="text-danger">{this.state.errors.confirm_password}</div>
            </div>
              
            <input type="submit" value="Submit" class="btn btn-success" />
            
          </form>
          {/* <button type="button" class="btn btn-primary" onClick = {this.func()}>Register</button> */}
          
        
          
        </div>
      </div>
    );
  }
}
  
export default Register;