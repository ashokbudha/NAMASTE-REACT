import {useState,useEffect} from "react";

const About = () => {
    const [userData,setUserData] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const res = await fetch("https://api.github.com/users/ashokbudha");
        const json = await res.json();
        console.log(json);
        setUserData(json);
    }

    if(userData.length === 0){
        return(<h1>Loading....</h1>);
    }

    return(
        <h1> This is about page. Hello my name is {userData.name}</h1>
    )
}

export default About;