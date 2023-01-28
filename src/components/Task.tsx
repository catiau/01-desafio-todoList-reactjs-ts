import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

type TaskType = {
    title: string
    id: number
    checked: boolean
    onDelete: () => void
    onCheck: (event: any) => void
}

export function Task({ title, onDelete, onCheck, checked }: TaskType) {

    return (
        <div className={checked ? styles.completedTaskList : styles.tasksList}>
            <div className={styles.completeTask}>
                <input
                    type="checkbox" 
                    onChange={onCheck}
                />
            </div>
            <label 
                className={styles.taskListTextContent}
                style={checked ? {textDecoration: "line-through", color: "#808080" } : {textDecoration: "none"} }
            >
                <h4>{title}</h4>
            </label>
            <button className={styles.deleteTask}>
                <Trash 
                    size={24} 
                    color="#808080"
                    onClick={onDelete}
                />
            </button>
        </div>
    )
}