import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withRouter, Redirect } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { FormWrapper } from './style';
import { getUser } from '../../Apollo/query';
import GetUser from '../Getuser/Getuser';
import * as yup from 'yup';

function Validate() {
  return yup.object().shape({
    email: yup.string().email().required(),
  });
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      role: '',
      data:'',
      error: {
        email: '',

      }
    }
  }
  handleTrainee = field => (event) => {
    this.setState({ email: event.target.value }, () => { this.handleValidate(field) });
  }

  postData = async () => {
    const { email, role } = this.state;
    const { client } = this.props;
    // const { data, error, loading } = await client.query({
    //   query: getUser,
    //   variables: {
    //     data: {
    //       email,
    //       role
    //     }
    //   }
    // })
    // console.log('>>>>>>>..', data, error)
    // if (loading) return 'LOADING...';
    // if(error) return 'Email is not valid or not present in db'
    // if(data) {
    
    // } 
    // this.setState({ data })
    const data = {email, role};
    const { history } = this.props;
    history.push(`/permissions`, data);

{/* <Redirect to={{ pathname: "/permission", state: {permission:data.getRole} }} /> */}
  }

  handleRole = (event) => {
    this.setState({ role: event.target.value });
  }
  handleFlag = () => {
    this.setState({ vflag: true })
  }
  handleArray = async (event) => {
    const { email, role, vflag } = this.state;
  }

  handleValidate = (field) => {
    const { error, email } = this.state;
    const schema = Validate();
    schema.validate({ email }, { abortEarly: false })
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
    const { email, role } = this.state;
    return (
      <>
        <FormWrapper>
          <div className="formWrapper">
            <div className="form">
              <div className="red"></div><div className="black"></div>
              <h3>Email</h3>
              <input type="email" className="input" onChange={this.handleTrainee('email')} value={email} placeholder="Enter Trainee Email" />
              <br />
              {(this.state.error.email) ? <p style={{ color: 'red' }}>Email must be valid</p> : ''}
              <br />
              <h3>Select Role</h3>
              <select className="input" onChange={this.handleRole} value={role}>
                <option>Select Role</option>
                <option>head-trainer</option>
                <option>trainee</option>
                <option>trainer</option>
              </select>
              <br /><br />
              <button className="btn" onClick={this.postData}>Submit</button>
            </div>
          </div>
        </FormWrapper>
      </>
    )
  }
}

export default withApollo(withRouter(Form));