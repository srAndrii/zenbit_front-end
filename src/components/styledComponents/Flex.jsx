import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  margin: ${({ margin }) => margin || "0"};
  height: ${({ height }) => height || "auto"};
  background-color: ${({ background }) => background || "transparent"};
`;

const Flex = props => {
    return <StyledFlex {...props} />;
};

export default Flex;