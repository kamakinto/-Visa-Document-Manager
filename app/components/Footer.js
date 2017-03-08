/**
 * Created by everettrobinson on 2/4/17.
 */

var React = require('react');

class Footer extends React.Component {

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
                <footer>
                    <p className="text-center">A application by <a href="http://haki.io">Haki.io</a></p>
                </footer>


            </div>
        )


    }
}
module.exports = Footer;