import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import styles from './List.module.css'

export function List() {
    const [createdTask, setCreatedTask] = useState(0)

    function handleCreateNewTask() {

    }

    return (
        <div className={styles.todoList}>
            <div className={styles.todoForm}>
                <form onSubmit>
                    <textarea
                        name='task-todo'
                        placeholder='Adicione uma nova tarefa'
                        >
                    </textarea>
                </form>
                <button className={styles.todoFormButton}>
                    <span>Criar</span>
                    <div>
                        <PlusCircle size={24}/>
                    </div>    
                </button>
            </div>
            <div className={styles.taskStatus}>
                <span className={styles.createdTask}>Tarefas Criadas{createdTask}</span>
                <span className={styles.doneTask}>Concluídas{createdTask}</span>
            </div>
        </div>
    )
}