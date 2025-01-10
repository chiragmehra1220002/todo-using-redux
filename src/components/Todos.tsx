// // Codeium Chat

// CM

// You
// 6:34 pm, Jan 9, 2025
// Explain problem: Object literal may only specify known properties, and 'completed' does not exist in type 'Todo'. @todoSlice.ts:45:17

// Codeium
// 6:34 pm, Jan 9, 2025
// The issue "Object literal may only specify known properties, and 'completed' does not exist in type 'Todo'" is a TypeScript error that occurs when you're trying to add a property to an object that doesn't exist in its type definition.

// In this case, the error is happening because the Todo interface is defined as:

// typescript
// CopyInsert
// interface Todo {
//     id: string;  
//     text: string;
// }
// As you can see, there is no completed property in the Todo interface. However, in the checkTodo reducer, you're trying to access and modify a completed property on a Todo object:

// typescript
// CopyInsert
// todo.completed = !todo.completed;
// And also, when creating a new Todo object:

// typescript
// CopyInsert
// const newTodo: Todo = {
//     id: nanoid(),
//     text: action.payload,
//     completed: false 
// };
// To fix this error, you need to add the completed property to the Todo interface:

// typescript
// CopyInsert
// interface Todo {
//     id: string;  
//     text: string;
//     completed: boolean; // Add this line
// }
// By adding the completed property to the Todo interface, you're telling TypeScript that this property exists and can be used on Todo objects.







// 36 Sources
// CM

// You
// 6:40 pm, Jan 9, 2025
// also invoke checkboxTodo in it when click on checkbox a line through on text comes import { FC, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { editTodo, removeTodo,checkTodo } from '../features/todoSlice';

// const Todos: FC = () => {
//   const todos = useSelector((state: any) => state.todo.todos); 
//   const dispatch = useDispatch();
  
//   const [editedText, setEditedText] = useState('');
//   const [editingId, setEditingId] = useState<string | null>(null); 

//   const handleEdit = (id: string, text: string) => {
//     setEditingId(id);
//     setEditedText(text); 
//   };

//   const handleSave = (id: string) => {
//     if (editedText) {
//       dispatch(editTodo({ id, text: editedText }));
//       setEditingId(null);
//       setEditedText(''); 
//     }
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//     setEditedText('');
//   };

//   return (
//     <>
//       <ul className="ulist">
//         {todos.map((todo: any) => (
//           <li className="list" key={todo.id}>
//             <div className="div1">
//               {editingId === todo.id ? (
//                 <>
//                   {/* Show input, save, and cancel buttons when editing */}
//                   <input
//                     type="text"
//                     value={editedText}
//                     onChange={(e) => setEditedText(e.target.value)}
//                     className="edit-input"
//                   />
//                   <button 
//                     onClick={() => handleSave(todo.id)} 
//                     className="btn-save"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={handleCancel}
//                     className="btn-cancel"
//                   >
//                     Cancel
//                   </button>
//                 </>
//               ) : (
//                 // Show text when not editing
                
//                 <span>{todo.text}</span>
//               )}
//             </div>
          
            
//             {editingId !== todo.id && (
//               <>
//                 <i 
//                   className="fa-regular fa-pen-to-square edit"
//                   onClick={() => handleEdit(todo.id, todo.text)}
//                 ></i>
                
//                 <i 
//                   className="fa-solid fa-trash delete" 
//                   onClick={() => dispatch(removeTodo(todo.id))}
//                 ></i>
              
              
//               </>
            
//             )}
        
            
//           </li>
        
//         ))}
        
//       </ul>
//     </>
//   );
// };

// export default Todos;


import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, removeTodo, checkTodo } from '../features/todoSlice';

const Todos: FC = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  const [editedText, setEditedText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSave = (id: string) => {
    if (editedText) {
      dispatch(editTodo({ id, text: editedText }));
      setEditingId(null);
      setEditedText('');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedText('');
  };

  const handleToggleCompleted = (id: string) => {
    dispatch(checkTodo(id));
  };

  return (
    <>
      <ul className="ulist">
        {todos.map((todo: any) => (
          <li className="list" key={todo.id}>
            <div className="div1">
              {editingId === todo.id ? (
                <>
                  {/* Show input, save, and cancel buttons when editing */}
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    onClick={() => handleSave(todo.id)}
                    className="btn-save"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn-cancel"
                  >
                    Cancel
                  </button>
                </>
              ) : (
               
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'gray' : 'black',
                  }}
                >
                  {todo.text}
                </span>
              )}
            </div>

            {editingId !== todo.id && (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(todo.id)}
                  className="checkbox"
                />
                <i
                  className="fa-regular fa-pen-to-square edit"
                  onClick={() => handleEdit(todo.id, todo.text)}
                ></i>
                <i
                  className="fa-solid fa-trash delete"
                  onClick={() => dispatch(removeTodo(todo.id))}
                ></i>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;