/**
 * Created by everettrobinson on 2/8/17.
 */
import { Grid, Row, Thumbnail, Col, Button, MenuItem, ButtonToolbar, DropdownButton, Popover, Tooltip, Modal, OverlayTrigger,
     FormGroup,FormControl, ControlLabel} from 'react-bootstrap'
import {Table} from 'react-bootstrap';
import TextInput from '../common/TextInput';
import Comment from '../common/Comment';
import UserDetails from '../components/UserDetails'
import Form from 'grommet/components/Form'
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
var userDetailsHelpers = require('../services/UserServices');
var documentServices = require('../services/DocumentServices');
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
        this.updateDocument = this.updateDocument.bind(this);
    }

  close() {
      this.setState({showForm: false})
      }

    updateDocumentState(event){
        console.log("contents of event in updateDocumentState", event.option);
        console.log("event target value", event.target.value);
        console.log("event target name", event.target.name);



        const field = event.target.name;
        const document = this.state.editDocument;
            event.option ?
            document[field] = event.option
        :
            document[field] = event.target.value;

        return this.setState({
            editDocument: document
        })
    }


    handleDatePickerChange(value) {
        console.log("inside handleDatePickerChange", value);
        const document = this.state.editDocument;
        const field = 'due_date';
        document[field] = value;

        return this.setState({
            editDocument: document
            })
    }

    editDocument(document){
        this.setState({
            editDocument: document,
            showModal: false,
            showForm: true})
    }

    updateDocument(document){
        document.preventDefault();
        console.log('saving document', this.state.editDocument);
        documentServices.updateDocument(this.state.editDocument);
        this.close();
    }

    componentDidMount() {

    }


    render() {
        const layer = (this.state.showForm) ?
            <Layer
                closer={true}
                flush={false}
                onClose={() => {this.setState({showForm: false})}}>

                <Form pad="medium">

                    <Header>
                        <Heading>Edit Document</Heading>
                    </Header>

                    <Label>Reference ID: {this.state.editDocument._id}</Label>
                <fieldset>
                    <FormField label="Name">
                        <GromTextInput name="name" defaultValue={this.state.editDocument.name} onDOMChange={this.updateDocumentState}/>
                    </FormField>
               </fieldset>

                <fieldset>
                    <FormField label="Status">
                    <Select placeHolder='None'
                            inline={false}
                            options={['Complete', 'Uploaded', 'Processing', 'Missing']}
                            value={this.state.editDocument.status}
                            name="status"
                            onChange={this.updateDocumentState}
                             />
                        </FormField>
                  </fieldset>
                    <fieldset>

                    <FormField label="Due Date">
                        <DateTime
                            id="dueDate"
                            name="due_date"
                            value={this.state.editDocument.due_date}
                            onChange={this.handleDatePickerChange}/>
                    </FormField>
                  </fieldset>

                    <fieldset>
                        <FormField label="Condition">
                        <Select placeHolder='None'
                                inline={false}
                                name="condition"
                                options={['Excellent', 'Good', 'Poor', 're-upload']}
                                value={this.state.editDocument.condition}
                                onChange={this.updateDocumentState}
                        />
                    </FormField>
                  </fieldset>


                    <Footer pad={{"vertical": "medium"}}>

                        <GromButton label='Save'
                                primary={false}
                                secondary={false}
                                accent={false}
                                plain={false}
                                type='submit'
                                onClick={this.updateDocument}/>

                        <GromButton label='Cancel'
                                primary={false}
                                secondary={true}
                                accent={false}
                                plain={false}
                                type='button'
                                onClick={this.close}/>

                    </Footer>
                </Form>

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
                
            </div>
        )


    }
}
module.exports = UserDetailsContainer;