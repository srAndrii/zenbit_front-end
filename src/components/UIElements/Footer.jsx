import styled from "styled-components";

import {
    LinkenInIcon,
    TwitterIcon,
    FacebookIcon,
    PinterestIcon,
} from "./Icons";
import Container from "../styledComponents/Container";
import Flex from "../styledComponents/Flex";
import Wrapper from "../styledComponents/Wrapper";
import PageDecoration from "./PageDecoration";
import Link from "../styledComponents/Link";
import DecorationWrapper from "../styledComponents/DecorationWrapper";
import DecorationIcons from "../styledComponents/DecorationIcons";

const StyledFooter = styled.footer`
  background: #fafafa;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 106px;
`;

const SocialWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 124px;
  margin-left: 34%;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SocialWrapper>
                    <Flex justify="space-between" align="center">
                        <Link path="https://www.linkedin.com">
                            <LinkenInIcon />
                        </Link>
                        <Link path="https://twitter.com/">
                            <TwitterIcon />
                        </Link>
                        <Link path="https://www.facebook.com/">
                            <FacebookIcon />
                        </Link>
                        <Link path="https://www.pinterest.jp/">
                            <PinterestIcon />
                        </Link>
                    </Flex>
                </SocialWrapper>
            </Container>
            <DecorationWrapper zIndex={0} top="0" right="14%">
                <DecorationIcons sm={{ width: "58px" }} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={0} top="0" left="9%" sm={{ top: "15%" }}>
                <DecorationIcons variant="one" sm={{ width: "100px" }} />
            </DecorationWrapper>
            <DecorationWrapper zIndex={0} top="33%" right="6%">
                <DecorationIcons variant="three" sm={{ width: "44px" }} />
            </DecorationWrapper>
        </StyledFooter>
    );
};

export default Footer;