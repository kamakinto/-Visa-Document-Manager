/**
 * Created by everettrobinson on 2/8/17.
 */
import { Grid, Row, Thumbnail, Col, Button, MenuItem, ButtonToolbar, DropdownButton, Popover, Tooltip, Modal, OverlayTrigger,
    Form, FormGroup,FormControl, ControlLabel} from 'react-bootstrap'
import {Table} from 'react-bootstrap';
import TextInput from '../common/TextInput';
import Comment from '../common/Comment';
import UserDetails from '../components/UserDetails'
import GForm from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import GromTextInput from 'grommet/components/TextInput'
import DateTime from 'grommet/components/DateTime';
import Layer from 'grommet/components/Layer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Label from 'grommet/components/Label';
import Select from 'grommet/components/Select';
import GromButton from 'grommet/components/Button';




var React = require('react');
var axios = require('axios');
var userDetailsHelpers = require('../services/UserServices')
var moment = require('moment');



class UserDetailsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            currentUser: {},
            showModal: false,
            showForm: false,
            editDocument:'',
            document_due_date: null,
            doc_comments: [
                {
                    author_id:null,
                    timestamp: null,
                    comment: null,
                    photo_url: null
                },
                {
                    author_id:null,
                    timestamp: null,
                    comment: null,
                    photo_url: null
                },
                {
                    author_id:null,
                    timestamp: null,
                    comment: null,
                    photo_url: null
                }
            ]
        }
        this.close = this.close.bind(this);
        this.updateDocumentState = this.updateDocumentState.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
        this.editDocument = this.editDocument.bind(this);
        this.saveDocument = this.saveDocument.bind(this);
        this.getDocumentState = this.getDocumentState(this);

    }

  close() {
      this.setState({showModal: false})
      }

    updateDocumentState(event){
        event.preventDefault();
        console.log('updating document state', event.target.name);
        const field = event.target.name;
        const document = this.state.editDocument;
        document[field] = event.target.value;
        return this.setState({
            editDocument: document
        })
    }

    getDocumentState() {
        return this.state.editDocument;
    }

    handleDatePickerChange(value) {
        console.log("inside handleDatePickerChange", value);
        const document = this.state.editDocument;

        this.setState({
            document_due_date: value

        })
    }

    editDocument(document){
        console.log('document ID', document)
        this.setState({
            editDocument: document,
            showModal: false,
            showForm: true})
    }

    saveDocument(document){
        console.log('saving document', document);
    }

    componentDidMount() {

    }


    render() {
        const layer = (this.state.showForm) ?
            <Layer
                closer={true}
                flush={false}
                onClose={() => {this.setState({showForm: false})}}>

                <GForm pad="medium">
                    <Header>
                        <Heading>Edit Document</Heading>
                    </Header>

                    <Label>Reference ID: {this.state.editDocument._id}</Label>

                    <FormField label="Name">
                        <GromTextInput defaultValue={this.state.editDocument.name} onDOMChange={this.updateDocumentState}/>
                    </FormField>
                    <FormField label="Status">
                    <Select placeHolder='None'
                            inline={false}
                            options={['Complete', 'Uploaded', 'Processing', 'Missing']}
                            value={this.state.editDocument.status}
                             />
                        </FormField>

                    <FormField label="Due Date">
                        <DateTime
                            id="dueDate"
                            name="dueDate"/>
                    </FormField>

                    <FormField label="Condition">
                        <Select placeHolder='None'
                                inline={false}
                                options={['Excellent', 'Good', 'Poor', 're-upload']}
                                value={this.state.editDocument.condition}
                        />
                    </FormField>


                    <Footer pad={{"vertical": "medium"}}>
                        <GromButton label='Save'
                                href='#'
                                primary={false}
                                secondary={false}
                                accent={false}
                                plain={false}
                                type='submit' />

                        <GromButton label='Cancel'
                                href='#'
                                primary={false}
                                secondary={true}
                                accent={false}
                                plain={false}
                                type='submit' />
                    </Footer>

                </GForm>

                </Layer>
            : null;


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
                {layer}

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Document</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <form>
                                <label>Reference ID: {this.state.editDocument._id}</label>


                            <TextInput
                                name="name"
                                label="Name"
                                value={this.state.editDocument.name}
                                onChange={this.updateDocumentState}
                                />



                                <div className="form-group">
                                    <label htmlFor={this.state.editDocument.status}>Status</label>
                                    <select className="form-control" id={this.state.editDocument.status} onChange="">
                                        <option selected disabled>{this.state.editDocument.status}</option>
                                        <option>complete</option>
                                        <option>uploaded</option>
                                        <option>processing</option>
                                        <option>missing</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor={this.state.editDocument.due_date}>Due Date</label>

                                </div>

                                <div className="form-group">
                                    <label htmlFor={this.state.editDocument.condition}>Condition</label>
                                    <select className="form-control" id={this.state.editDocument.condition} onChange="">
                                        <option selected disabled>{this.state.editDocument.condition}</option>
                                        <option>excellent</option>
                                        <option>good</option>
                                        <option>poor</option>
                                        <option>re-upload</option>
                                    </select>
                                </div>

                                <div>
                                    <Comment comments = {this.state.doc_comments}/>

                                </div>
                                </form>
                            </div>




                        <table className="table">
                            <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr>
                                <td>Comments</td>
                                <td>{this.state.editDocument.comments}</td>

                            </tr>

                            </tbody>
                        </table>




                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={() => this.saveDocument(document)}>Save</Button>
                        <Button onClick={this.close}>Cancel</Button>
                    </Modal.Footer>



                </Modal>



            </div>
        )


    }
}
module.exports = UserDetailsContainer;