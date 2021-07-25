import React from "react";
import cn from "classnames"

export default class Input extends React.Component {
    card = cn({
        "border-gray-900": false,
        "shadow-lg": true,
        "justify-center": true
    })
    render(){
        const { onChange , value, onKeyPress} = this.props
        return <input className={this.card} onChange={onChange} value={value} onKeyPress={onKeyPress} type="text" placeholder="Todo" />;
    }
}
