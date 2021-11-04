import React from 'react'

const Todo = () => {
    const [task, setTask] = React.useState('')
    const [tasks, setTasks] = React.useState([])

    const handleInputChange = event => setTask(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()

        if(task.trim()) {
            setTasks([...tasks, task])
            setTask('')
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input 
                    data-testid="form-field"
                    onChange={handleInputChange}
                    placeholder="Type a new task here"
                    type="text"
                    value={task}
                />
                <button data-testid="form-btn" type="submit">Add new Task</button>
            </form>
            <table data-testid="testing">
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t, index) => (
                        <tr key={index}>
                            <td>{t}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Todo
