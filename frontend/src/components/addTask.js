import React, { Fragment, useState } from "react"
import TaskList from './taskList';

function AddTask() {
    const [task, setTask] = useState('')
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const body = { task };
            await fetch("http://localhost:5000/task", {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "content-type": "application/json" }
            });
            window.location = "/";
        } catch (error) {
            console.log("error");
        }

        alert(task);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label>Enter the task: </label>
                <input type="text" className="textbox" placeholder="Enter Task"
                    onChange={e => setTask(e.target.value)} />
                <input type="Submit" className="button" value="Add Task" />
            </form>
            <TaskList></TaskList>
        </Fragment>
    )
}
export default AddTask;
