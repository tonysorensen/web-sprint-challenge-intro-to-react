// Write your Character component here
import React from "react";
import styled from "styled-components";

const NewCard = styled.div`
  background: #3f537e;
  color: white;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CharacterCard = (props) => {
  return (
    <NewCard>
      <h2>{props.name}</h2>
    </NewCard>
  );
};

export default CharacterCard;