import React from "react";
import Button from "../Button/Button";
import cn from "classnames";

const buttonClass = cn({
    "border-gray-500": true,
    "border-2": true,
    "rounded": true,
    "bg-blue-400": true,
    "text-white": true,
    "px-0.5": true,
    "m-0.5": true,
});

export default class Card extends React.Component {
    state = {
        complete: false,
    };

    render() {
        const { todos, deleteBtn, editBtn, doneBtn } = this.props;
        const cardClass = cn({
            "flex": true,
            "justify-center": true,
            "text-center": true,
        });
        return (
            <div>
                {todos.map((el) =>
                    el.text ? (
                        <div>
                            <div>
                                <div className={cardClass} key={el.id}>
                                    <input type="checkBox" />
                                    {el.text}
                                    <Button
                                        className={buttonClass}
                                        btnName={"Edit"}
                                        onclick={() => editBtn()}
                                    />
                                    <Button
                                        className={buttonClass}
                                        btnName={"Delete"}
                                        onClick={() => deleteBtn(el.id)}
                                    />
                                    
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )
                )}
            </div>
        );
    }
}
