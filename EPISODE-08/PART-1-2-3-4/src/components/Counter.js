import {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count : 0,
        }
        // console.log("inside second child constructor");
    }

    componentDidMount(){
        // console.log("inside second child componentDidMount");
    }

    render(){
        // console.log("inside second child render")

    const {count} = this.state;

    const handleClick = () =>{
        this.setState({count:count+1,});
    }
        
        return(
            <>
            <button onClick={handleClick}>Count: {count}</button>
            {/* <button onClick={handleClick}> {this.state.count}</button> */}
            </>
        )
    }
}

export default Counter;