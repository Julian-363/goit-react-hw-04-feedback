import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100px;
  height: 50px;
  font-family: 'Poppins';
  text-transform: uppercase;
  color: black;
  background-color: #c3cef5;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-size: 100%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: background-image 0.3s ease-in-out;

  &:hover {
    background-image: linear-gradient(to left, #a7ccd1, #e09fdd, #9dd6ed);

    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;
