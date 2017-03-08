/**
 * Created by everettrobinson on 2/4/17.
 */

var React = require('react');
import {Grid, Row, Col } from 'react-bootstrap'
import UserProfile from './UserProfile'
import UserDetailsContainer from '../containers/UserDetailsContainer'
import ChatHistory from "./ChatHistory"
var axios = require('axios');
var UserServices = require('../services/UserServices');

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: [],
            currentUserID: '',
            currentUser: '',
            userDocs: ''

        }

        this.getProfile = this.getProfile.bind(this);
        this.findUser = this.findUser.bind(this);
    }

    findUser(id) {
        for (var i = 0; i < this.state.userData.length; i++ ) {
            if (this.state.userData[i]._id == id) return this.state.userData[i];
        }
    }
     getProfile(id) {
         var selectedUser = this.findUser(id);
         UserServices.getUserDocuments(selectedUser)
             .then(function (documents) {
                 this.setState({
                     currentUserID: id,
                     currentUser:selectedUser,
                     userDocs:documents
                 })
             }.bind(this));
        }

    componentDidMount() {

        /**
         * TODO:Move this into Service Layer once it is refactored
         */
        axios.get('http://localhost:3000/api/users')
            .then((res) => {
                this.state.userData= res.data
            }).catch(function (err) {
            console.warn('Error in apiTest', err)
        });
 }

    render() {
        const users = this.state.userData.map((user) => {
            return <Col xs={6} md={4} key={user._id}>
                <UserProfile
                key={user._id}
                id={user._id}
                appointmentType={user.visa_type}
                first_name={user.first_name}
                last_name={user.last_name}
                completedPercent={0}
                appointmentDate={user.appointment_date}
            getProfile={this.getProfile}/>

            </Col>
        });

        return (
            <div>
                <div className="container">
                    {this.state.apiTest}
                    <Grid>
                        <Row>
                            {users}

                        </Row>
                        <Row>
                           <hr />
                            <UserDetailsContainer user = {this.state.currentUser} documents = {this.state.userDocs}/>
                        </Row>
                        <Row>

                        </Row>
                    </Grid>

            </div>
                </div>
        )


    }
}


module.exports = Admin;