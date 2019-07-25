import React from 'react';
import validator from 'validator'
import './main.css'




  class Form extends React.Component {

    state = {
      name: '',
      nameError: '',
      emailError: '',
      userError: '',
      passwordError: '',
      confirmError: '',
      websiteError: '',
      email: '',
      user: '',
      password: '',
      confirm: '',
      website: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        
      })
    }
  
    handleSubmit = (e) => {
      let error = false 

      e.preventDefault()
      if (this.state.name === '') {
        error = true
        this.setState({
          nameError: "Must enter a name!"
        })
      } else {
          this.setState({
            nameError: ""
          })
      }
    
      if (this.state.email === '') {
        error = true
        this.setState({
          emailError: "Email Required!"
        })
      } else {
        if (validator.isEmail(this.state.email)) {
          this.setState({
            emailError: ""
          })
        } else {
          error = true
          this.setState ({
            emailError: "Please enter a valid email!"
          })
        }
        
    }

    if (this.state.user === '') {
      error = true
      this.setState({
        userError: "Username Required!"
      })
    } else {
        this.setState({
          userError: ""
        })
    }

    if (this.state.password === '') {
      error = true
      this.setState({
        passwordError: "Password cannot be empty!"
      })
    } else {
        this.setState({
          passwordError: ""
        })
    }

    if (this.state.confirm === '') {
      error = true
      this.setState({
        confirmError: "Password cannot be empty!"
      })
    } else {
        this.setState({
          confirmError: ""
        })
    }
   

    if (this.state.password !== '' && this.state.confirm !== '' && this.state.password !== this.state.confirm) {
      this.setState({
        passwordError: "Passwords do not match",
        confirmError: "Passwords do not match",
      })
    } 

    if (this.state.website === '') {
      error = true
      this.setState({
        websiteError: "Must enter a website!!"
      })
    } else {
      if (validator.isURL(this.state.website)) {
        this.setState({
          websiteError: ""
        })
      } else {
        error = true
        this.setState ({
          websiteError: "Please enter a valid url!"
        })
      }
      
  }
    


    if (!error) {
      this.props.history.push("/thankyou")
    } 
    
  }

    
  
    render() {
  return (
    <div className="container">
      <form onSubmit={this.handleSubmit}>
        
        <div className="title">Profile Form -All Fields Required!</div>

        <div>
        <p className="error">{this.state.nameError}</p>

        <input className="name" 
               type="text" 
               name="name"
               onChange={this.handleChange} 
               value={this.state.name} 
               placeholder="name"></input>
        </div>

        <div>
        <p className="error">{this.state.emailError}</p>
        <input className="email" 
               type="text"
               name="email" 
               onChange={this.handleChange}
               value={this.state.email} 
               placeholder="email"></input>
        </div>

        <div>
        <p className="error">{this.state.userError}</p>
        <input className="user" 
               type="text"
               name="user"
               onChange={this.handleChange} 
               value={this.state.user} 
               placeholder="username"></input>
        </div>

        <div>
        <p className="error">{this.state.passwordError}</p>
        <input className="password"
               type="text"
               name="password" 
               onChange={this.handleChange}
               value={this.state.password} 
               placeholder="password"></input>
        </div>

        <div>
        <p className="error">{this.state.confirmError}</p>
        <input className="confirm" 
               type="text"
               name="confirm" 
               onChange={this.handleChange}
               value={this.state.confirm} 
               placeholder="confirmpassword"></input>
        </div>

        <div>
        <p className="error">{this.state.websiteError}</p>
        <input className="website" 
               type="text" 
               name="website"
               onChange={this.handleChange}
               value={this.state.website} 
               placeholder="website"></input>
        </div>

        <div>
        <button className="submit" type="submit">Submit</button>
        </div>





      </form>
    </div>
  )
  }
  }


export default Form;
