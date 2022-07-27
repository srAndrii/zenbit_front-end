import styled, { css } from "styled-components";


const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 500px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  padding: 27px 52px;

  font-family: Apercu Arabic Pro;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  color: #fff;
  background-color: #fad34f;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #F472B7;
    color: #fff;
    transform: translateY(-2px);
  }

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid #fad34f;
      color: #000;
      background-color: transparent;
    `}
`;

const Button = props => {
    return <StyledButton {...props} />;
};

export default Button;