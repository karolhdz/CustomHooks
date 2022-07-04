import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    //useReduce    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //Guardar en el Storage
    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    //Handles para manejar el TODO
    const onAddTodo = (todo) => {
        if (todos.includes(todo)) return;
        const action = {
            type: 'ADD [TODO]',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'DELETE [TODO]',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'TOGGLE [TODO]',
            payload: id,
        }
        dispatch(action);
    }

    return {
        todos,
        onAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingtodosCount: todos.filter( todo => !todo.done ).length,
    }
}

