import React, { useState, useRef } from 'react';

const TodoForm = ({ todos, setTodos }) => {
    const initialState = { id: 0, title: '', content: '', isDone: false }; //초깃값

    const [inputTodo, setInputTodo] = useState(initialState);

    const nextId = useRef(todos.length);
    const onChangeHandler = (event) => {
        const { value, name } = event.target;

        setInputTodo({ ...inputTodo, [name]: value, id: nextId.current });
        nextId.current++;
    };

    const onSubmitHandler = (event) => {
        if (!inputTodo.title || !inputTodo.content) {
            alert('제목 및 내용을 작성해주세요.');
            return;
        }
        event.preventDefault();
        setTodos([...todos, inputTodo]);
        setInputTodo(initialState);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="input_container">
                <label>제목</label>
                <input type="text" name="title" onChange={onChangeHandler} value={inputTodo.title} />
                <label>내용</label>
                <input type="text" name="content" onChange={onChangeHandler} value={inputTodo.content} />
            </div>
            <button>추가하기</button>
        </form>
    );
};
export default TodoForm;
