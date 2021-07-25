import React from "react";

export default class Button extends React.Component {
    
    render(){
        const { onClick, btnName, className} = this.props
        return <button onClick={onClick} className={className}> {btnName}</button>;
    }
}
