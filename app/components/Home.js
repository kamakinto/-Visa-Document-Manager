/**
 * Created by everettrobinson on 2/4/17.
 */

var React = require('react');
var transparentBg = require('../styles').transparentBg
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import DocumentIcon from 'grommet/components/icons/base/DocumentCloud';
import GlobeIcon from 'grommet/components/icons/base/Globe';
import ComplianceIcon from 'grommet/components/icons/base/Compliance';
import DownIcon from 'grommet/components/icons/base/Down';
import Pulse from 'grommet/components/icons/Pulse'



import Footer from 'grommet/components/Footer';

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
                    <Headline size="large" strong={true}>Proper Papers</Headline>
                    <Headline size="small">Managing your documents can be a pain. Let us help you.</Headline>

                    <Box direction="row" full="horizontal" justify="center" align="center"
                         pad={{vertical: "medium"}} responsive={false} >

                        <DocumentIcon size="xlarge" colorIndex="neutral-3" />

                        <GlobeIcon size="xlarge" colorIndex="neutral-2" />

                        <ComplianceIcon size="xlarge" colorIndex="neutral-3" />
                    </Box>
</div>
                <div>
                    <Footer justify="center" align="center">
                        <Pulse icon={<DownIcon />} />

                    </Footer>

                    </div>


            </div>
        )


    }
}
module.exports = Home;