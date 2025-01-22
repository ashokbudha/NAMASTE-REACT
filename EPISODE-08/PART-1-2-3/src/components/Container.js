import {Component} from "react";

class Container extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name} = this.props;
        return(
            <h3>Hello my name is {name}</h3>
        )
    }
}


export default Container;
