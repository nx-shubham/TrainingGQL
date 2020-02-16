import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { FormWrapper } from './style';
import * as yup from 'yup';


const addUser = gql`
  mutation addUser($email: String, $role: String) {
    addUser(email: $email, role: $role){
      email,
      role
    }
  }
`;

function Validate() {
  return yup.object().shape({
    email: yup.string().email().required('Email is Reqired'),
    role: yup.string().required('Role is required'),
  });
}

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      role: '',
      error: {
        email: '',

      },
      touched : {
        email: false,
        role: false,  
    },
    }
  }
  handleTrainee = field => (event) => {
    const { touched } = this.state;
    this.setState({ email: event.target.value, touched: {...touched, [field]: true}}, () => { this.handleValidate(field) });
  }

  handleRole = field => (event) => {
    const { touched } = this.state;
    this.setState({ role: event.target.value, touched: {...touched, [field]: true}}, () => { this.handleValidate(field) });
  }
  handleArray = async (addUser) => {
    const { email, role } = this.state;
    const { history } = this.props;
    addUser({ variables: { email, role } })
    history.push(`/read`);
  }
  onBlur = (value) => {
    this.handleValidate(value);
}

hasTouched = () => {
  const { touched } = this.state;
  let touchCheck = 0;
  Object.keys(touched).forEach((a) => {
      if(touched[a] === true) touchCheck = touchCheck + 1;
  });
  if (touchCheck === 2) return true;
  return false;
}

  handleValidate = (field) => {
    const { error, email, role } = this.state;
    const schema = Validate();
    schema.validate({ email, role }, { abortEarly: false })
      .then(() => {
        this.setState({ error: { ...error, [field]: '' } })
      }).catch((err) => {
        err.inner.forEach((errors) => {
          if (errors.path === field) {
            this.setState({ error: { ...error, [field]: errors.message } })
          }
        });
        if (!(err.inner.some(err => err.path === field))) {
          this.setState({
            error: { ...error, [field]: '' },
          });
        }
      });
  }

  render() {
    const { email, role, error } = this.state;
    return (
      <>
        <Mutation mutation={addUser}>
          {(addUser, { error, loading }) => {
            return (
              <FormWrapper>
                <div className="formWrapper">
                  <div className="form">
                    <h1>Add User from here..........</h1>
                    <div className="red"></div><div className="black"></div>
                    <h3>Email</h3>
                    <input type="email" className="input" onBlur={() => this.onBlur('email')} onChange={this.handleTrainee('email')} value={email} placeholder="Enter Trainee Email" />
                    <br />
                    {(this.state.error.email) ? <p style={{ color: 'red' }}>Email must be valid</p> : ''}
                    <br />
                    <h3>Select Role</h3>
                    <select className="input" onChange={this.handleRole('role')} value={role} onBlur={() => this.onBlur('role')}>
                      <option>Select Role</option>
                      <option>Head-Trainee</option>
                      <option>Trainee</option> 
                      <option>Reviewer</option>
                    </select>
                    <br /><br />
                    {(this.state.error.role) ? <p style={{ color: 'red' }}>role is required</p> : ''}
                    
                    {this.hasTouched() ?    <button onClick={() => this.handleArray(addUser)}>Submit</button> :
                <button disabled>Submit</button> }
                    {/* <button className="btn" >Submit</button> */}

                  </div>
                </div>
              </FormWrapper>
            )
          }}
        </Mutation>
      </>
    )
  }
}

export default withRouter(AddUser);