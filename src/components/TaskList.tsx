import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState, ChangeEvent } from 'react'
import styles from './TaskList.module.css'
import { v4 as uuidv4 } from 'uuid'

import clipBoard from '../assets/clipBoard.svg'
import { Task } from './Task'

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

    function deleteTask(taskToDelete: TasksProps){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete.id
        })
        setTasks(tasksWithoutDeletedOne)

        if(taskToDelete.checked){
            setCompletedTasks((prev) => prev - 1)
        }
    }

    function handleCheckTask(task: TasksProps, checkTask: boolean){
        if(checkTask) {
            setCompletedTasks((prev) => prev + 1)
            task.checked = true
        } else {
            setCompletedTasks((prev) => prev - 1)
            task.checked = false
        }
    }

    const createdTasks = tasks.length

    const isTodoListEmpty = createdTasks === 0

    return (
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.todoForm}>
                <textarea
                    name='task'
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    required
                />
                
                <button type='submit' className={styles.todoFormButton}>
                    <PlusCircle size={24}/>
                    Criar
                </button>
            </form>
            <div className={styles.taskStatus}>
                <span 
                    className={styles.createdTask}>
                    Tarefas Criadas
                    <span 
                        className={styles.taskCounter}>
                        {createdTasks}
                    </span> 
                </span>
                <span 
                    className={styles.doneTask}>
                    Concluídas
                   <span 
                        className={styles.taskCounter}>
                        {completedTasks} de {createdTasks}
                    </span> 
                </span>
            </div>

            <div className={styles.taskBox}>
                {isTodoListEmpty ? (
                    <div className={styles.taskBoxEmpty}>
                        <img src={clipBoard} />
                        <div className={styles.taskBoxEmptyText}>
                            <h4>Você ainda não tem tarefas cadastradas</h4>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div>
        
                ) : (
                    tasks.map((task) => {
                        return (
                            <div className={styles.task}>
                                <Task 
                                    title={task.title} 
                                    key={task.id}
                                    id={task.id}
                                    onCheck={(event: any) => handleCheckTask(task, event.target.checked)}
                                    onDelete={() => deleteTask(task)}
                                    checked={task.checked}
                                />
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}