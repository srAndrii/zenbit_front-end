import styled from "styled-components";

const TextArea = styled.textarea`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px 46px;
  margin: 0;
  width: 100%;
  resize: none;

  font-family: Apercu Arabic Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  color: #2d2d2d;

  &:focus {
    outline: none;
    border: 1px solid #2d2d2d;
  }
`;
const StyledTextArea = props => {
    return <TextArea {...props} />;
};

export default StyledTextArea;