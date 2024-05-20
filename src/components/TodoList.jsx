import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
    const onDeleteHandler = (selectedId) => {
        const remainedTodos = todos.filter((todo) => {
            return todo.id !== selectedId;
        });
        setTodos(remainedTodos);
    };

    const onCompleteHandler = (selectedId) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === selectedId) {
                return { ...todo, isDone: !todo.isDone };
            } else {
                return { ...todo };
            }
        });
        setTodos(newTodos);
    };

    return (
        <div>
            <h3>KeepGoing</h3>
            <ul>
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                        return (
                            <TodoItem
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onCompleteHandler={onCompleteHandler}
                            />
                        );
                    }
                })}
            </ul>
            <h3>Done</h3>
            <ul>
                {todos.map((todo) => {
                    if (todo.isDone === true) {
                        return (
                            <TodoItem
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onCompleteHandler={onCompleteHandler}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default TodoList;
