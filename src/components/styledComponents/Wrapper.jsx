import styled, { css } from "styled-components";


const StyledDiv = styled.div`
    width: ${({ width }) => width || "auto"};
    max-width: ${({ maxWidth }) => maxWidth || "none"};
    height: ${({ height }) => height || "auto"};
    
    padding: ${({ padding }) => padding || "0"};
    margin: ${({ margin }) => margin || "0"};

    @media ${props => props.theme.media.phone} {
        ${({ sm }) =>
            sm &&
            css`
                width: ${sm.width};
                max-width: ${sm.maxWidth};
                height: ${sm.height};
                margin: ${sm.margin};
                padding: ${sm.padding};
        `}
    }
`;
const Wrapper = props => {
    return <StyledDiv {...props} />;
};

export default Wrapper;