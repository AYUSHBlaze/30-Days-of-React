import React, {Component} from 'react';
import WithCounter from './withCounter';

class HoverCounter extends Component{
    render(){
        const {count, incrementCount} = this.props
        return (<h4 onMouseOver={incrementCount}>Hovered {count} times.</h4>)
    }
}

export default WithCounter(HoverCounter, 10)