import { createSlice, nanoid } from '@reduxjs/toolkit';

interface Todo {
    id: string;  
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [{ id: "1", text: "Hello world" , completed: false}], 
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state: TodoState, action: { payload: string }) => {  
            const todo: Todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false
                
            };
            state.todos.push(todo);
        },
        removeTodo: (state: TodoState, action: { payload: string }) => {  
            state.todos = state.todos.filter((todo: Todo) => todo.id !== action.payload);
        },
        editTodo: (state: TodoState, action: { payload: { id: string; text: string } }) => {  
            const { id, text } = action.payload;
            const todo = state.todos.find((todo: Todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
        checkTodo: (state: TodoState, action: { payload: string }) => {
            const todo = state.todos.find((todo: Todo) => todo.id === action.payload);
          
            if (todo) {
              todo.completed = !todo.completed;
            } else {
              const newTodo: Todo = {
                id: nanoid(),
                text: action.payload,
                completed: false 
              };
              state.todos.push(newTodo);
            }
          }
        }
    });

export const { addTodo, removeTodo, editTodo,checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
          
