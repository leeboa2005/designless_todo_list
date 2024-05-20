import React from 'react';

const TodoItem = ({ todo, onDeleteHandler, onCompleteHandler }) => {
    return (
        <li>
            <div>
                <h4>{todo.title}</h4>
                <p>{todo.content}</p>
            </div>
            <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
            <button onClick={() => onCompleteHandler(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
        </li>
    );
};

export default TodoItem;
