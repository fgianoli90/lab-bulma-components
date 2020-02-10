import React, {Component} from 'react';
import WhatsUp from './WhatsUp.js'
/*equivalent to <script src=javascript.js"></script>*/
//state components == class components
class Welcome extends Component {
    render(){
        return(
            <div>
            <h1>Helllo world {this.props.emoji}</h1>
            <WhatsUp name="Isaac" from="South Dakota" happy={this.props.emoji}/>
            </div>
        )
    }
}
export default Welcome;