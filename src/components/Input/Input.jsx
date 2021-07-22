import React from "react";

export default class Input extends React.Component {
    render(){
        const { onChange , value, onKeyPress} = this.props
        return <input onChange={onChange} value={value} onKeyPress={onKeyPress} type="text" placeholder="Todo" />;
    }
}
