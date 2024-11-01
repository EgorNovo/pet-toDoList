import {FC, useRef} from 'react';
import AddIcon from '../../assets/icon/AddIcon/add';
import styles from './index.module.css'
import { useDispatch } from '../../../store/store';
import { addToDoItemThunk } from '../../../store/slices/toDoSlice';

const InputTask:FC = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    function submit(e:React.FormEvent) {
        e.preventDefault();

        if (inputRef.current) {
            dispatch(addToDoItemThunk({todo: String(inputRef.current.value), completed:false}))
            inputRef.current.value = '';
        }
    }

    return (
        <form className={styles.inputBlock} onSubmit={submit}>
            <input name="title" type='text' className={styles.input} ref={inputRef}></input>
            <button className={styles.addButton} type="submit"> <AddIcon /> </button>
        </form>
    )
}

export default InputTask;