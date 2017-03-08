var React = require('react');
import { Grid, Row, Thumbnail, Col, Button, MenuItem, ButtonToolbar, DropdownButton, Popover, Tooltip, Modal, OverlayTrigger,
Form, FormGroup,FormControl, ControlLabel} from 'react-bootstrap'
var PropTypes = React.PropTypes;

class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        //Set initial state
        this.state = { showModal: false }

        //Bind Functions to the class
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    };




    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true })
    }




    render() {

        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
                </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow. what a tip!
                </Tooltip>
        );


        return (
            <div>
                
             <Thumbnail src="app/images/user-default.png" circle alt="171x180">
                <h3>{this.props.first_name} {this.props.last_name}</h3>
                <p>Type:{this.props.appointmentType}</p>
                 <p>Completed: {this.props.completedPercent}%</p>
                 <p>Appointment Date: {this.props.appointmentDate}</p>
                <p>
                    <ButtonToolbar>
                        <DropdownButton bsStyle="info" title="User" id="dropdown view">
                            <MenuItem eventKey="1" onClick={() => this.props.getProfile(this.props.id)}>View Profile</MenuItem>
                            <MenuItem eventKey="2">Billing</MenuItem>
                            <MenuItem eventKey="3" onClick={this.open}>Message</MenuItem>
                        </DropdownButton>
                    <Button bsStyle="danger">Delete</Button>
                    </ButtonToolbar>
                </p>
            </Thumbnail>



                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Messages</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Chat History</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <h4>Popover in a modal</h4>
                        <p> there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger></p>

                        <h4>Tooltips for the modal</h4>
                        <p>there is a <OverlayTrigger overlay={tooltip}><a href="#"></a></OverlayTrigger>here</p>

                        <hr />
                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

                    </Modal.Body>

                    <Modal.Footer>
                        <Form>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel></ControlLabel>
                                <FormControl componentClass="textarea" placeholder="write your message" />
                            </FormGroup>
                            </Form>
                        <Button onClick={this.close} bsStyle="primary">Send</Button>
                        <Button onClick={this.close}>Close</Button>

                    </Modal.Footer>

                    </Modal>
            </div>
        )


    }
}

UserProfile.propTypes = {
     
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        completedPercent: PropTypes.number.isRequired,
        appointmentDate: PropTypes.string


}
module.exports = UserProfile;