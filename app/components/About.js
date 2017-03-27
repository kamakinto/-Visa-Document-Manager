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
            <div className="container">
                <h1>About Us </h1>
                <hr />
                <h3>We Know - French administration is a complicated mess! </h3>
                <div className="row">
                    <div className="col-md-3">
                       Add Picture travel_stuff.jpg here

                    </div>
                    <div className="col-md-9">

                        <p>We agree - French administration is a complicated mess! Lucky for you,
                            that mess is our expertise. We are here to guide you from the beginning to end -
                            navigating quickly and clearly through the visa process. We know that every new resident
                            of France has a unique set of circumstances that result in specific visa guidelines
                            and requirements. Our job is to provide the tailored service needed to accommodate your
                            individual profile and get your visa as quickly as possible.</p>

                    </div>

                </div>





            </div>
        )


    }
}
module.exports = About;