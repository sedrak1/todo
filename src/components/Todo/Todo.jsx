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
        console.log(this.state.tasks);
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
       

    handleDone = (id) => {
        this.setState((prevState) => {
            return { tasks: prevState.tasks.map((el) => {
                if(el.id === id ){
                    return {...el, isCompleted: !el.isCompleted}
                }
                return el
            })}

            
        });
    };
    
    render() {
        return (
            <div>
                <div>
                    <Input
                        className={this.card}
                        value={this.state.inputValue}
                        onChange={this.handleInput}
                        onKeyPress={this.handleEnter}
                    ></Input>
                    <Button btnName="add" onClick={this.handleAdd}></Button>
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
