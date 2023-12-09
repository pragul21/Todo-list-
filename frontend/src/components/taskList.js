
import { useEffect, useState } from "react";
function TaskList() {
    const [task, setTask] = useState([]);
    //retreving stored data
    const getData = async () => {
        try {
            const resp = await fetch('http://localhost:5000/list');
            const data = await resp.json();
            setTask(data);
            console.log(data)
        } catch (error) {
            console.log("error");
        }
    }
    //printing stored data
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div>
                {task.map((item, index) => {
                    return (<p className="list" key={index}>
                        <span>{item.task}</span>
                    </p>)
                })}
            </div >
        </div >
    )
}
export default TaskList;