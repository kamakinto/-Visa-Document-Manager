var React = require('react');
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap'
import { Link } from 'react-router'
var transparentBg = require('../styles').transparentBg;

class TopNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //element initial state goes here  https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png
        }
    }

    //functions go here


    render() {

        var styles={
            "align": "center",
           "float":"none",
          //  "display": "inline-block",
            "textAlign":"center"

        };

        return (
            <div>

                <Navbar  collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/home">Brand</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}><Link to="/about" activeStyle={{color: 'red'}}>About</Link></NavItem>
                            <NavItem eventKey={2}><Link to="/pricing" activeStyle={{color: 'red'}}>Pricing</Link></NavItem>
                            <NavItem eventKey={2}><Link to="/admin" activeStyle={{color: 'red'}}>Admin</Link></NavItem>
                            <NavItem eventKey={2}><Link to="/docs" activeStyle={{color: 'red'}}>Documentation</Link></NavItem>

                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1}><Link to="/login" activeStyle={{color: 'red'}}>Log in</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        {this.props.children}

                </div>

    )
    }
}

module.exports = TopNav;