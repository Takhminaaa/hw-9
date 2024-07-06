import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
  const [todo, setTodo] = useState([]);
  console.log("todo", todo);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <StyledContainerUsers>
      {todo.map((item) => (
        <StyledWrapper>
          <StyledText key={item.id}>{item.name}</StyledText>
          <Fragment>
            <p>
              <span>Email:</span>
              {item.email}
            </p>
            <p>
              <span>Website:</span>
              {item.website}
            </p>
          </Fragment>
        </StyledWrapper>
      ))}
    </StyledContainerUsers>
  );
};

export default Users;

const StyledContainerUsers = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  width: 250px;
  height: 115px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  text-align: left;
  padding-left: 10px;
  span {
    font-weight: bold;
  }
`;
const StyledText = styled.p`
  font-size: 19px;
`;
