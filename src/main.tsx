import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Provider} from 'react-redux'
import Todo from './Todo.tsx'
import {store} from './store.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
       <Todo />
    </Provider>
  </StrictMode>
)