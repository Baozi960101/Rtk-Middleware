import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addTimestamp } from "./slices/todo";
import { useGetTodoListQuery } from "./services/todoApi";

const Wrapper = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-weight: 900;
  margin-top: 2rem;
`;

const NoteInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 0.5rem;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  border: 0;
  font-weight: 900;
  margin-top: 1rem;

  :active {
    background: #000000be;
  }
`;

const Item = styled.div`
  margin-top: 1rem;

  > b {
    margin-right: 0.5rem;
  }
`;

function App() {
  const todoReducer = useSelector((state: RootState) => state.todoReducer);

  const todoList = todoReducer.todoList;
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const { data, error, isLoading } = useGetTodoListQuery("1");
  console.log(isLoading, data);

  const { userId = "", id = "", title = "", completed = "" } = data || {};

  return (
    <Wrapper>
      {isLoading && <p>讀取</p>}
      <Title>TODO LIST</Title>
      <NoteInput
        value={todoValue}
        onChange={(even: React.ChangeEvent<HTMLInputElement>) => {
          setTodoValue(even.target.value);
        }}
        type="text"
      />
      <SubmitBtn
        onClick={() => {
          dispatch(addTodo(todoValue));
        }}
      >
        Submit
      </SubmitBtn>
      <SubmitBtn
        onClick={() => {
          dispatch(addTimestamp());
        }}
      >
        Record Timestamp
      </SubmitBtn>
      <Title>List</Title>
      {todoList.map((data, index) => {
        return (
          <Item key={data}>
            <b>{index}</b>
            {data}
          </Item>
        );
      })}
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <>
          <p>{userId}</p>
          <p>{title}</p>
        </>
      )}
    </Wrapper>
  );
}

export default App;
