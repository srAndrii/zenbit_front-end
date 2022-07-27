import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-weight: 400;
  font-size: 40px;
  line-height: 52px;

  color: #3e3e3e;
  text-align: ${({ align }) => align || "left"};
`;
const Title = props => {
    return <StyledTitle {...props} />;
};

export default Title;
