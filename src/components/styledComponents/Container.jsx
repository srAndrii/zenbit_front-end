import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Container = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
};

export default Container;