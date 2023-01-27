import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

type TaskType = {
    title: string
    id: number
    checked: boolean
}

export function Task({ title }: TaskType) {


    return (
        <div className={styles.tasksList}>
            <div className={styles.finishTask}>
                
            </div>
            <div className={styles.taskListTextContent}>
                <span>{title}</span>
            </div>
            <div className={styles.deleteTask}>
                <Trash 
                    size={24} 
                    color="#808080"
                />
            </div>
        </div>
    )
}