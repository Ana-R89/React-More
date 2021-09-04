import React, { useState, useEffect } from "react"

const Todos = () => {
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState("")
    const [completedTasks, setCompletedTasks] = useState([])

    //porder ejecutar a penas se monta el componente

    useEffect(() => {
        if (!localStorage.getItem("localTasks")) return
        setTasks([...JSON.parse(localStorage.getItem("localTasks"))])
    }, [])

    //ejecutar cuando cambia el state

    useEffect(() => localStorage.setItem("localTasks", JSON.stringify(tasks)), [tasks])


    //ejecutar cuando cambia el state

    useEffect(() => localStorage.setItem("localComplitedTasks", JSON.stringify(completedTasks)), [completedTasks])

    //Captura el dato en el input

    const onChangeHandler = ({ target: { value } }) => setNewTasks(value)

    const addTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, newTasks])
    }

    //indice buscar elemento y borrarlo 
    //copiar el arreglo completo sin elementos
    //TODO: eliminar con slice no es el deber ser 

    const removeTask = (key) => {
        // actualizacion de variable
        tasks.splice(key, 1)
        const newTasksArray = [...tasks]
        setTasks(newTasksArray)
    }

    return (
        <div>
            <div>
                {tasks.map((task, key) => {
                    if (completedTasks.includes(task)) {
                        return (
                            <div key={key}>
                                <s >{task}</s>
                            </div>
                        )
                    }
                    return (
                        <div key={key}>
                            <p>{task}</p>
                            <input onChange={() => setCompletedTasks([...completedTasks, task])} type="checkbox" />
                            <button onClick={() => removeTask(key)}>Delete Task</button>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={addTask}>
                <div>
                    <input onChange={onChangeHandler} type="text" />
                </div>
                <div>
                    <input type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    )

}

export default Todos