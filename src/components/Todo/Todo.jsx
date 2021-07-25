import React from "react";
import "./Todo.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";
import cn from "classnames"

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            tasks: [],
            id: 0,
            isCompleted: false,
        };
    }

    idGenerator = () => {
        this.setState((prevState) => {
            return { id: prevState.id + 1 };
        });
    };

    handleAdd = () => {
        this.idGenerator();
        let newTask = {
            id: this.state.id,
            text: this.state.inputValue,
            isCompleted: false,
        };
        this.setState((prevState) => {
            return {
                tasks: [...prevState.tasks, newTask],
                inputValue: "",
            };
        });
    };

    handleEnter = (e) => {
        if (e.key === "Enter") {
            this.handleAdd();
        }
    };

    handleInput = (e) => {
        this.setState(() => {
            let target = e.target.value;
            e.target.value = "";
            return { inputValue: target };
        });
    };

    handleDelete = (id) => {
        this.setState((prevState) => {
            return { tasks: prevState.tasks.filter((el) => el.id !== id) };
        });
    };

    handleEdit = () => {}
    inputClass = cn({
        "text-center": true,
        "border-gray-900": true,
        "shadow-lg": true,
        "justify-center": true
    })
    btnCLass= cn({
        "text-center": true,
        "border-black-900": true,
        "shadow-lg": true,
        "justify-center": true,
        "text-gray-500": true,
        "border-2": true,
        "border-t-0": true 
    })
    render() {
        return (
            <div>
                <div className={this.inputClass}>
                    <Input
                        className={this.inputClass}
                        value={this.state.inputValue}
                        onChange={this.handleInput}
                        onKeyPress={this.handleEnter}
                    ></Input>
                    <Button className={this.btnCLass} btnName="add" onClick={this.handleAdd}></Button>
                    <Card
                        todos={this.state.tasks}
                        deleteBtn={this.handleDelete}
                        editBtn={this.handleEdit}
                        doneBtn={this.handleDone}
                        isCompleted={this.state.isCompleted}
                    ></Card>
                </div>
            </div>
        );
    }
}
