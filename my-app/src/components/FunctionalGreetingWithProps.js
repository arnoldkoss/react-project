import React from "react";


const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello there!! {props.name}, I see your {props.age} years old, {props.greeting}</h1>;
}

export default FunctionalGreetingWithProps;