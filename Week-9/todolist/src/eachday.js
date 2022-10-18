import React from 'react';
import { EACHTASK } from "./eachtask";


export class EACHDAY extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
    }

    deleteTask = async(id) => {
        console.log(id);
        let newList = this.state.tasks.filter((task, index) => index + 1 !== id);
        console.log("newlist", newList);
        await this.setState((state, props) => ({
            tasks: [...newList]
        }));
        
    }

    addTask = async() => {
        await this.setState((state, props) => ({
            counter: state.counter + 1
        }));

        await this.setState((state, props) => ({
            tasks: [...state.tasks, <EACHTASK key={state.counter} id={state.counter} deleteTask={this.deleteTask}/>]
        }));
    }

    render() {
        return (
            <>
            <h1>Task List for time: {this.props.date.toLocaleTimeString()}</h1>
            <button onClick={this.addTask}>Click to add task</button>
            <ul>
                {
                    this.state.tasks.map((key, value) => {
                        return key;
                    })
                }
            </ul>
            </>
            
        );
    }
}