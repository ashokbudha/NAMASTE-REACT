import {Component} from "react";

class Container extends Component{
    constructor(props){
        super(props);
        console.log("inside first child constructor");
    }

    componentDidMount(){
        console.log("inside first child compenentDidMount");
    }

    render(){
        console.log("inside first child render");
        const {name} = this.props;
        return(
            <h3>Hello my name is {name}</h3>
        )
    }
}


export default Container;
