import { FC, useEffect } from 'react';
import styles from './index.module.scss';
import ListItem from '../ListItem';
import { useSelector, useDispatch } from '../../../store/store';
import { deleteToDoItemThunk, getToDoListThunk } from '../../../store/slices/toDoSlice';

const ToDoList: FC = () => {
    const dispatch = useDispatch();
    const items = useSelector( store => store.todo.list );

    useEffect(() => {
        dispatch(getToDoListThunk());
    })

    function deleteItem(id:number) {
        dispatch(deleteToDoItemThunk(id))
    }

    return (
    <ul className={styles.list}>
        {items && items.map( (item, index) => <ListItem 
                                                title = {item.todo} 
                                                completed = {item.completed} 
                                                id = {item.id}  
                                                key={index} 
                                                deleteItem={deleteItem}
                                                />)}
    </ul>
    )
}

export default ToDoList