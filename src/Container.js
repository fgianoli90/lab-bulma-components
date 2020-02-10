import React, { Component } from 'react';
import Message from './Message'

class Container extends Component {
    render() {
        return (
            <div className="Container">
                <Message
                    class="message is-info"
                    title="Hello World"

                />
            </div>
        );
    }
}

export default Container;