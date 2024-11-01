export type ToDoItemType = {
    completed: boolean
    id: number
    todo: string
  }
  
export let data:ToDoItemType[] = [{
    completed: false,
    id: 1,
    todo: 'Buy milk'
    },
    {
    completed: true,
    id: 2,
    todo: 'Clean the house'
    },
    {
    completed: false,
    id: 3,
    todo: 'Go to the gym'
}];

export const getToDoList = () => 
    Promise.resolve(data).then( d => d)

export const deleteToDoItem = (id: number) => 
    Promise.resolve( data = data.filter( item => item.id !== id ))

export const addToDoItem = (title: string, completed: boolean) =>
    Promise.resolve( data = [...data, { completed: completed, id: (data.length + 1), todo: title }])

export const completedToDoItem = (id: number) => 
    Promise.resolve( data = data.map( item => {
       if( item.id === id ) item.completed = !item.completed
       return item
    }))