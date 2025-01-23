import {Component} from "react";

class Container extends Component{
    constructor(props){
        super(props);
        // console.log("inside first child constructor");
        this.state ={
            name:props.name,
        }
    }

    async componentDidMount(){
        // console.log("inside first child compenentDidMount");
        const res = await fetch("https://api.github.com/users/ashokbudha");
        const json = await res.json(); 
        
        this.setState({name :json.name,})
    }

    render(){
        // console.log("inside first child render");
        const {name} = this.state;
        return(
            <h3>Hello my name is {name}</h3>
        )
    }
}


export default Container;
