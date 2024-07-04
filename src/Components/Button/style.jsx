import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 100%;
  color: #fff;
  background: #000;
  padding: 1rem 2rem;
  font-size: 1.5rem;

  border-radius: 1rem;

  margin-top: .5rem;

  cursor: pointer;

  &:focus {
    border: 1px solid red
  }
`;  