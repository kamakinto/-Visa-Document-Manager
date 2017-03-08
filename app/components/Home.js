/**
 * Created by everettrobinson on 2/4/17.
 */

var React = require('react');
var transparentBg = require('../styles').transparentBg
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            apiTest: ''
        }
    }

    toggleName() {

        this.setState({
            name: "testComponent"
        });
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api').then(res => this.setState({ apiTest: res.data.message})).catch(function (err) {
            console.warn('Error in apiTest', err)
        });
        
    }


    render() {

        return (
            <div>
                <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                    <h1> Welcome </h1>
                    <p className="lead">Your Document Champion</p>
                    Your time is precious. Let us help you manage your prefecture documentation.
                    <br />
                    <br />

                    <Button bsStyle="primary">Learn More</Button>
                    <br />
                    <hr />
                    {this.state.apiTest}
                    </div>


            </div>
        )


    }
}
module.exports = Home;