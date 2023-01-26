import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState, ChangeEvent } from 'react'
import styles from './List.module.css'
import { v4 as uuidv4 } from 'uuid'

interface TasksProps {
    title: string,
    id: number,
    checked: boolean
}[]

export function TaskList() {
    const [tasks, setTasks] = useState<TasksProps[]>([])
    const [newTaskText, setNewTaskText] = useState('')
    const [completedTasks, setCompletedTasks] = useState(0)

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTasks((prev) => [
            ...prev, 
            { 
                title: newTaskText, 
                id: uuidv4(), 
                checked: false
            }
        ])
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleDeleteTask(taskToDelete: TasksProps){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete.id
        })
        setTasks(tasksWithoutDeletedOne)

        if(taskToDelete.checked){
            setCompletedTasks((prev) => prev - 1)
        }
    }

    return (
        <div>
            <form onSubmit={handleCreateNewTask}>
                <textarea
                    name='task'
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                
                />
                
                <button type='submit'>
                    Criar
                </button>
            </form>
        </div>
    )
}