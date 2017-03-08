/**
 * Created by everettrobinson on 2/8/17.
 */
import { Grid, Row, Thumbnail, Col, Button, MenuItem, ButtonToolbar, DropdownButton, Popover, Tooltip, Modal, OverlayTrigger,
    Form, FormGroup,FormControl, ControlLabel} from 'react-bootstrap'
var React = require('react');
var axios = require('axios');

import UserDetails from '../components/UserDetails'
var userDetailsHelpers = require('../services/UserServices')

class UserDetailsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            currentUser: {},
            showModal: false,
            editDocument:''
        }
        this.close = this.close.bind(this);
        this.editDocument = this.editDocument.bind(this);

    }

  close() {
      this.setState({showModal: false})
      }

    editDocument(document){
        console.log('document ID', document)
        this.setState({
            editDocument: document,
            showModal: true})
    }

    saveDocument(document){
        console.log('saving document', document);
    }

    componentDidMount() {

    }


    render() {
        if(this.props.documents !== ""){
             var documents = this.props.documents.map((document) => {
                return <tr key={document._id}>
                    <td>{document._id}</td>
                    <td>{document.name}</td>
                    <td>{document.status}</td>
                    <td>{document.due_date}</td>
                    <td>{document.condition}</td>
                    <td>{document.comments}</td>
                    <td><button className="btn btn-primary" onClick={() => this.editDocument(document)}>Edit Document</button></td>
                    <td><button className="btn btn-primary">View Document</button></td>
                </tr>
            })
        } else {
            return <div></div>
        }
        return (
            <div>

                <UserDetails user = {this.props.user}  documents = {documents} />

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Document</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        


                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary">Save</Button>
                        <Button onClick={this.close}>Cancel</Button>
                    </Modal.Footer>



                </Modal>



            </div>
        )


    }
}
module.exports = UserDetailsContainer;