import styled from "styled-components";
import DecorationWrapper from "../styledComponents/DecorationWrapper";
import map from "../../assets/map.png";
import DecorationIcons from "../styledComponents/DecorationIcons";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const PageDecoration = () => {
    return (
        <>
            <DecorationWrapper
                zIndex={2}
                circle
                top="-6%"
                right="-16%"
                width="976px"
                height="976px"
                sm={{
                    top: "-3%",
                    right: "-15%",
                    width: "350px",
                    height: "350px",
                    invicible: true,
                }}
                md={{
                    top: "-3%",
                    right: "-15%",
                    width: "700px",
                    height: "700px",
                }}
            >
                <StyledImage src={map} alt="map" />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} top="10%" right="33%">
                <DecorationIcons variant="cloud" />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} top="44%" left="0%">
                <DecorationIcons variant="cloud" opacity={0.5} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} bottom="14%" left="27%">
                <DecorationIcons variant="cloud" opacity={0.5} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} bottom="14%" left="12%">
                <DecorationIcons variant="cloud" width="132px" height="99px" opacity={0.4} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} bottom="-6%" left="14%">
                <DecorationIcons variant="cloud" width="288px" height="216px" opacity={0.3} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} bottom="5%" left="51%">
                <DecorationIcons variant="cloud" width="168px" height="128px" opacity={0.4} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} top="20%" left="2%">
                <DecorationIcons variant="cloud" width="245px" height="184px" opacity={0.3} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} top="15%" right="48%">
                <DecorationIcons variant="cloud" width="138px" height="103px" opacity={0.4} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={1} top="28%" right="41%">
                <DecorationIcons variant="cloud" width="172px" height="129px" opacity={0.5} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={2} top="2%" right="46%">
                <DecorationIcons variant="sun" width="87px" height="87px" />
            </DecorationWrapper>
            <DecorationWrapper zIndex={4} top="4%" left="8%">
                <DecorationIcons variant="three" />
            </DecorationWrapper>
            <DecorationWrapper zIndex={4} top="56%" right="39%" md={{ right: "15%" }}>
                <DecorationIcons
                    variant="two"
                    md={{
                        width: "65px",
                    }}
                    sm={{
                        opacity: 0,
                    }}
                />
            </DecorationWrapper>
            <DecorationWrapper
                zIndex={3}
                top="65%"
                right="32%"
                md={{ right: "10%" }}
                sm={{ right: "2%", top: "75%" }}
            >
                <DecorationIcons
                    variant="one"
                    md={{
                        width: "118px",
                    }}
                    sm={{
                        width: "56px",
                    }}
                />
            </DecorationWrapper>

        </>
    );
};

export default PageDecoration;
