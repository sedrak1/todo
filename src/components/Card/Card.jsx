import React from "react";
import Button from "../Button/Button";

export default class Card extends React.Component {
    render() {
        const { todos, deleteBtn, editBtn, isCompleted } = this.props;
        return (
            <div>
                {todos.map((el) =>
                    el.text ? (
                        <div>
                            <div>
                                <div key={el.id}>
                                    {el.text}
                                <Button
                                    btnName={"Edit"}
                                    onclick={() => editBtn()}
                                    />
                                <Button
                                    btnName={"Delete"}
                                    onClick={() => deleteBtn(el.id)}
                                    />
                                <Button
                                    btnName={"Done"}
                                    onClick={()=>isCompleted(el.id)}
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
