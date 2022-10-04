import React from 'react';
import { EACHTASK } from "./eachtask";


export class EACHDAY extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
            counter: 1,
            taskList: []
        }

        this.addTask = this.addTask.bind(this);
    }

    addTask = async() => {
        console.log("before counter", this.state.counter);
        await this.setState((state, props) => ({
            counter: state.counter + 1
        }));
        console.log("after counter", this.state.counter);
        await this.setState((state, props) => ({
            taskList: [...state.taskList, state.counter ]
        }));
    }

    render() {
        let tasks = null;
        if(this.state.taskList) {
            console.log(this.state.taskList, "tasklist1");
            let tasks = this.state.taskList.map((data) => {
                return (<EACHTASK key={this.state.counter}/>)
            });
            console.log(tasks, "tasklist2");
        }

        return (
            <>
            <h1>Task List for time: {this.props.date.toLocaleTimeString()}</h1>
            <ul>
                {tasks ? tasks: null}
            </ul>
            <button onClick={this.addTask}>Click to add task</button>
            </>
            
        );
    }
}