/**
 * Created by everettrobinson on 2/4/17.
 */

var React = require('react');

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // name: ""
        }
    }

    toggleName() {

        this.setState({
            name: "testComponent"
        });
    }


    render() {

        return (
            <div>
                Inside About Us


            </div>
        )


    }
}
module.exports = About;