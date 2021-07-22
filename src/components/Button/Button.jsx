import React from "react";

export default class Button extends React.Component {
    
    render(){
        const { onClick, btnName,} = this.props
        return <button onClick={onClick}> {btnName} </button>;
    }
}
