import { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo: FC = () => {
    const [input, setInput] = useState<string>('');
    const dispatch = useDispatch();

    const addTodoHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(addTodo(input as any));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className="form">
            <input
                type="text"
                className="text-input"
                placeholder="Search note..."
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="btn3"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;