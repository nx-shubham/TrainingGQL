import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../Apollo/query';
import { Query } from 'react-apollo';

class Permissions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // read: false,
            // write: false,
            deleteFlag: false,
        }
    }
    handleRead = () => {
        const { history } = this.props;
        console.log(".................", history);
        history.push(`/read`);
    }

    handleWrite = () => {
        const { history } = this.props;
        history.push(`/write`);
    }

    render() {
        console.log(this.props)
        const { read, write, deleteFlag } = this.state;
        const { location: { state: { email, role } } } = this.props;
        const data = { email, role };
        console.log('sadasdsadq21333333333',read, write, deleteFlag);
        return (

            <Query query={getUser} variables={{ data }}>
                {({ loading, error, data }) => {
                    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>', loading, error, typeof(error), data )
                    if (loading) return "Loading...";
                    if (error) {
                        console.log(error.message)
                        return error.message;
                    }
                    if (data) {
                        return (
                            <div style={{ height: '70vh', marginTop: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <button onClick={this.handleRead} disabled={data.getUser.read}>Read</button>
                                <button onClick={this.handleWrite} disabled={data.getUser.write}>Write</button>
                                <button disabled={deleteFlag} disabled={data.getUser.delete}>Delete</button>
                            </div>
                        )
                    }
                    return null;
                }
                }
            </Query>

        )
    }
}

export default withRouter(Permissions);
