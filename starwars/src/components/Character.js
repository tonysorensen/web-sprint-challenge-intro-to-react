// Write your Character component here
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
const NewCard = styled.div`
  background: #3f537e;
  color: white;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CharacterCard = (props) => {
  return (
    <>
      <Container>
        <h2>{props.name}</h2>
        <NewCard>
          <ul>
            <h4>Physical Traits</h4>
            <li>Eye Color: {props.eyecolor} </li>
            <li>Gender: {props.gender}</li>
            <li>Hair Color: {props.haircolor} </li>
            <li>Height: {props.height}</li>
            <li>Mass: {props.mass}</li>
            <li>Skin Color: {props.skincolor}</li>
          </ul>
        </NewCard>
      </Container>
    </>
  );
};

export default CharacterCard;
