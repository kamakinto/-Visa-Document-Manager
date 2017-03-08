/**
 * Created by everettrobinson on 2/4/17.
 */

var React = require('react');
var Scrollspy = require('react-scrollspy').Scrollspy
var Sidebar = require('react-sidebar').default

class Documentation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        }
    }

    onSetSidebarOpen() {

        this.setState({
            sidebarOpen: open
        });
    }


    render() {
        var sidebarContent = <b>Sidebar content</b>;

        return (
            <div>
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen}>
                <div>
                    <section id="section-1">
                      <h1>  section 1 </h1>
                    </section>
                    <section id="section-2">
                        section 2
                    </section>
                    <section id="section-3">
                        section 3
                    </section>
                </div>

                <Scrollspy items= { ['section-1', 'section-2','section-3']} currentClassName="is-current">
                    <li><a href="#section-1">section 1</a></li>
                    <li><a href="#section-2">section 2</a></li>
                    <li><a href="#section-3">section 3</a></li>
                    </Scrollspy>
</Sidebar>

            </div>
        )


    }
}
module.exports = Documentation;