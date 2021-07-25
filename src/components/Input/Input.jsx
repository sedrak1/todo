import React from "react";

export default class Input extends React.Component {
    
    render(){
        const { onChange , value, onKeyPress, className} = this.props
        return <input className={className} onChange={onChange} value={value} onKeyPress={onKeyPress} type="text" placeholder="Todo" />;
    }
}
