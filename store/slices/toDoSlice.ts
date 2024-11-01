import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToDoItemType, getToDoList, addToDoItem, deleteToDoItem, completedToDoItem } from "../../utils/api";

type toDoSlice = {
    list:ToDoItemType[] | [],
    loading: boolean
}

const initialState: toDoSlice= {
    list:[],
    loading: false
}

export const getToDoListThunk = createAsyncThunk('getToDo', () => {
    return getToDoList()
})

export const addToDoItemThunk = createAsyncThunk('addToDo', ({todo,completed}:Pick<ToDoItemType, "todo" | "completed">) => {
    return addToDoItem(todo, completed)
})

export const deleteToDoItemThunk = createAsyncThunk('deleteToDo', (id:number) => {
    return deleteToDoItem(id)
})

export const completedToDoItemThunk = createAsyncThunk('completedToDo', (id:number) => {
    return completedToDoItem(id)
})

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: initialState,
    reducers: {},
    selectors: {},
    extraReducers: (builder) => {
        builder
        .addCase(getToDoListThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(getToDoListThunk.pending, (state) => {
            state.loading = true;
        }) 
        .addCase(getToDoListThunk.rejected, (state, action) => {
            console.log('Error fetching ToDo List:', action.error);
            state.loading = false;
        })
        .addCase(addToDoItemThunk.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
        .addCase(addToDoItemThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteToDoItemThunk.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
        .addCase(deleteToDoItemThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(completedToDoItemThunk.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
        .addCase(completedToDoItemThunk.pending, (state) => {
            state.loading = true;
        })
    }   
})

// export const { } = toDoSlice.actions;
// export const { } = toDoSlice.selectors;
export const reducer = toDoSlice.reducer;