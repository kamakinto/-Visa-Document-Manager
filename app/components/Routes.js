/**
 * Created by everettrobinson on 2/4/17.
 */

var React = require('react')
import App from './App'
import Pricing from './Pricing'
import About from './About'
import Admin from './Admin'
import Home from './Home'
import Documentation from './Documentation'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

class Routes extends React.Component {

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
            <Router history={hashHistory}>
                <Route path="/" component={App} >
                    <IndexRoute component={Home} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/about" component={About} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/docs" component={Documentation} />
                    <Route path="/home" component={Home} />
                </Route>
            </Router>
        )


    }
}
module.exports = Routes;