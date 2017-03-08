/**
 * Created by everettrobinson on 2/8/17.
 */

var React = require('react');

class ChatHistory extends React.Component {

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
                <h1>Chat History</h1>
                <h3>coming soon... </h3>


            </div>
        )


    }
}
module.exports = ChatHistory;