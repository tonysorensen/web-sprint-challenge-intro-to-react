// Write your Character component here
import React from "react";
import styled from "styled-components";

const NewCard = styled.div`
  background: rgba(255, 238, 202, 0.5);
  color: white;
  width: 400px;
  height: 350px;
  margin: 10px 100px;
  border-radius: 30px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  padding-top: 5%;
  color: #334366;
`;

const PhysicalTraits = styled.h3`
  padding-top: 0;
  color: #7d424c;
`;

const Traits = styled.ul`
  font-size: 1.25rem;
  color: #007aa6;
`;

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterCard = (props) => {
  return (
    <>
      <NewCard>
        <Headers>
          <Name>{props.name}</Name>
          <PhysicalTraits>Physical Traits</PhysicalTraits>
        </Headers>
        <Traits>
          <li>Eye Color: {props.eyecolor} </li>
          <li>Gender: {props.gender}</li>
          <li>Hair Color: {props.haircolor} </li>
          <li>Height: {props.height}</li>
          <li>Mass: {props.mass}</li>
          <li>Skin Color: {props.skincolor}</li>
        </Traits>
      </NewCard>
    </>
  );
};

export default CharacterCard;
