/**
 * Created by everettrobinson on 2/8/17.
 * TODO: REFACTOR so User Details looks nice with all the data. user a table to display
 * the data, then an edit button
 */

var React = require('react');
import {Doughnut} from 'react-chartjs-2'
import {Table} from 'react-bootstrap'

function DocumentItems (props) {

return ( props.user.documents === false ?
        <div> No documents to display</div> :

            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                    <div className="panel-title">
                        {props.user.first_name}'s Documents
                    </div>
                        </div>
                    <div className="panel-body">
                <Table responsive hover>
                <thead>
                <tr>
                    <th>Reference ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Condition</th>
                    <th>Agent Comments</th>
                </tr>
                </thead>
                <tbody>
                {props.documents}

                </tbody>
            </Table>
                        </div>

            </div>

            </div>

    )
}

function NoUserDetails (props) {
    return <div></div>
}



function UserDetails(props) {

    return (
        props.user === '' ?
            <NoUserDetails /> :
        <div className="container">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{props.user.first_name} {props.user.last_name} </h3>
                    </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 "> <img alt="User Pic" src="app/images/user-default.png" className="img-circle img-responsive" /> </div>
                        <div className="col-md-3 col-lg-3"> <button className="btn btn-primary">Edit</button> </div>
                    </div>

                    <div className="col-md9 col-lg-9">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Appointment Date: </td>
                                    <td>{props.user.appointment_date}</td>
                                </tr>
                                <tr>
                                    <td>Visa Type: </td>
                                    <td>{props.user.visa_type}</td>
                                </tr>
                                <tr>
                                    <td>DOB: </td>
                                    <td>{props.user.dob}</td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>{props.user.email}</td>
                                </tr>
                                <tr>
                                    <td>Gender: </td>
                                    <td>{props.user.gender}</td>
                                </tr>
                                <tr>
                                    <td>Phone Number: </td>
                                    <td>{props.user.phone_number}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>


                </div>
                </div>

            </div>

            <DocumentItems user = {props.user} documents = {props.documents}/>

        </div>

)


}

module.exports = UserDetails;