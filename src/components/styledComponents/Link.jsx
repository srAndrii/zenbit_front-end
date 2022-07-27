import styled from "styled-components";


const StyledLink = styled.a`
  display: inline-block;
  padding: 5px;
  cursor: pointer;
`;
const Link= props => {
    return <StyledLink href={props.path} {...props} />;
};

export default Link;