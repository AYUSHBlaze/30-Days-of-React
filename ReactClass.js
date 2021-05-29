import React, {Component} from 'react';

class ReactClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            stri:''
        }
    }

    handleChange = (event) => {
        this.setState({
            stri: event.target.value
        })
    }

    render(){
        return(
            <div>
                const stri = {this.stri}
                <input type="text" onChange={this.handleChange}></input>
                <div>{stri}</div>
            </div>
        )
    }
}

export default ReactClass