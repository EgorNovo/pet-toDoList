import { FC, useState } from 'react';
import cx from 'classnames';
import TrashIcon from '../../assets/icon/TrashIcon/trash';
import styles from './index.module.scss';

type ListItemProps = {
    completed: boolean
    id: number
    title: string
    deleteItem(id:number): void
}

const ListItem: FC<ListItemProps> = ({ title, id, completed, deleteItem } : ListItemProps) => {
    const [completedState, setCompleted] = useState(completed);

    return (
        <li id={String(id)} className={styles.listItem} > 
            <span className={styles.listTitle}>{title}</span>
            <div className={styles.buttons}>
                <input className={cx(styles.completedButton, styles.button)} type='checkbox' checked={completedState} onChange={() => setCompleted(!completedState)}></input>
                <button className={cx(styles.deleteButton, styles.button)} onClick={() => deleteItem(id)}> <TrashIcon /> </button>
            </div>
        </li>
    )
}

export default ListItem;