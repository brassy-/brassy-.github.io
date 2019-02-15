import * as React from "react";
import * as ReactDOM from 'react-dom';
import { PropertyControls, ControlType } from "framer";

import "./style.css";

const style: React.CSSProperties = {
    height: "100%",
    overflow: "hidden",
    position: "relative"
};

// Define type of property
interface Props {
}

export class ControlOverlay extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    }

    render() {
        return <div id="control-overlay">{this.props.children}</div>;
    }

    componentDidMount() {
        let me = ReactDOM.findDOMNode(this);
        console.log("me!", me);
        this.props.children[0].props.children.forEach(child => {
            console.log(child.type['name'], child.props.id, me.querySelector('#' + child.props.id));

            if child.type['name'] == 'WithEventsHOC' || child.type['name'] == 'u'{
                console.log(child.type);
                child = me.querySelector('#' + child.props.id);
                if child.style.opacity {
                    child.classList.add("opacity");
                    delete child.style.opacity;
                }
                child.classList.add("control");
            }
        });
    }

}
