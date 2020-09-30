import React, { Component } from 'react';
import './Task.css'

class Task extends Component {
    state = {
        tasks : ["Reading","Office Work","Hitting gym"],
        value: ""
    }

    handlerChange = (event) => {
        this.setState({value : event.target.value});
    }

    addTask = () => {
        var newState = this.state.tasks;
        newState.push(this.state.value);
        this.setState({tasks: newState});
        this.setState({value: ""});
    }

    deleteTask = (t) => {
        var newState = this.state.tasks;
        newState.pop(t);
        this.setState({tasks: newState});
    }

    render() {
        return (
             <div className="task">
                <ul className="taskName">
                    {this.state.tasks.map(t => { 
                        return (<li key={t} onClick={this.deleteTask.bind(this, t)}>{t}</li>)
                    })}
                </ul>
                <input className="inputTask" type="text" placeholder="Enter task" id="task" value={this.state.value} onChange={this.handlerChange} />
                <input className="inputButton" name="submit" type="submit" onClick={this.addTask} />
             </div>
        );
    }
}

export default Task;