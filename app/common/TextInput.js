/**
 * Created by everettrobinson on 3/22/17.
 */

var React = require('react');


function TextInput(props) {

    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input
                    type="text"
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange} />
            </div>

        </div>

    )


}

module.exports = TextInput;