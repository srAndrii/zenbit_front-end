import styled from "styled-components";
import Wrapper from "../styledComponents/Wrapper";
import Title from "./Title";
import {useState} from "react";
import Button from "./Button";
import StyledInput from "../styledComponents/StyledInput";
import StyledTextArea from "../styledComponents/StyledTextArea";
import {saveFeedback} from "../../redux/reducer";
import {useDispatch} from "react-redux";
import PopUp from "./PopUp";




const StyledForm = styled.form`
  display: block;
  max-width: 557px;
  position: relative;
  z-index: 1;
`;


const Form = props => {
    const [isOpen, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const feedbackData={
        name: name,
        email:email,
        message:message
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveFeedback(feedbackData))
        setOpen(position => !position)
        setName('')
        setEmail('')
        setMessage('')
    }





    // const onSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     const dataS={
    //         name: name,
    //         email:email,
    //         message:message
    //     }
    //     try {
    //         await axios.post("http://localhost:3000/feedbacks", dataS).then(function (response) {
    //             console.log(response);
    //         })
    //         // setOpen(prev => !prev);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <>
            <StyledForm onSubmit={onSubmitHandler}>
                <Wrapper margin="30px 0">
                    <Title>Reach out to us!</Title>
                </Wrapper>

                <Wrapper margin="0 0 8px 0">
                    <StyledInput
                        required
                        type="text"
                        placeholder="Your name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Wrapper>

                <Wrapper margin="0 0 8px 0">
                    <StyledInput
                        required
                        type="email"
                        placeholder="Your email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Wrapper>

                <Wrapper>
                    <StyledTextArea
                        required
                        rows={4}
                        value={message}
                        placeholder='Your message*'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Wrapper>


                <Wrapper margin="23px 0">
                    <Button type="submit">send message</Button>
                </Wrapper>
                {isOpen && (
                    <PopUp isOpened={isOpen} onClose={() => setOpen(prev => !prev)}>
                        <Title align="center">Thank you!</Title>
                        <p>We will contact you as soon as possible.</p>
                    </PopUp>
                )}


            </StyledForm>
        </>
    );
};

export default Form;