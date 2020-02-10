import React, { Component } from 'react';
import Ciao from './Ciao'

class GoodBye extends Component {
    render() {
        return (
            <div>
                <h1>GoodBye!</h1>
                <Ciao 
                    name="Francesca"
                    from="Gianoli"
                    sad={this.props.emoji}

                />
            </div>
        );
    }
}

export default GoodBye;