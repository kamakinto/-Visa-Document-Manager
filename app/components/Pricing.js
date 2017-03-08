var React = require('react');

class Pricing extends React.Component {

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
            <div>Pricing </div>
        )


    }
}
module.exports = Pricing;