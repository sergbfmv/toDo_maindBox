import styled from "styled-components";

const Todolist = styled.div`
  background-color: #b7b7b7;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`

const Items = styled.ul`
  padding: 0;
`

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`

export const S = {
    Todolist,
    Items,
    List,
}