import styled from "styled-components";
import Container from "../components/styledComponents/Container";
import Wrapper from "../components/styledComponents/Wrapper";
import Form from "../components/UIElements/Form";
import PageDecoration from "../components/UIElements/PageDecoration";
import Footer from "../components/UIElements/Footer";

const Background = styled.section`
  position: relative;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Positioned = styled.div`
  position: relative;
  z-index: 100;
`;

const FeedbackPage = () => {
    return (
        <>
            <Background>
                <Container>
                    <Positioned>
                        <Wrapper
                            margin="179px 0 177px 147px"
                            sm={{
                                margin: "179px 0 177px 0"
                            }}
                        >
                            <Form/>
                        </Wrapper>
                    </Positioned>
                </Container>
                <PageDecoration/>
            </Background>
            <Footer/>
        </>
    );
};

export default FeedbackPage;
