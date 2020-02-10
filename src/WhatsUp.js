import React, { Component } from 'react';

class WhatsUp extends Component {
    render() {
        return (
            <div>
               <h4>Whats Up? {this.props.name} from {this.props.from} {this.props.happy}</h4> 
            </div>
        );
    }
}

export default WhatsUp;