/**
 * Created by everettrobinson on 1/23/17.
 */
var React = require('react')
var TopNav = require('./Navbar')
var UserProfile = require('./UserProfile')
var Footer = require('./Footer')

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Robbie"
        }
    }

    toggleName() {

        this.setState({
            name: "Everett"
        });
    }


    render() {

        return (
        <div>
            <TopNav />
          {this.props.children}
            <Footer />


            
            

         </div>
        )









    }
}
module.exports = App ;