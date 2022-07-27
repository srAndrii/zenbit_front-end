import styled from "styled-components";
import Flex from "../styledComponents/Flex";
import PopUpContainer from "../styledComponents/PopUpContainer";




const Popup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);

  z-index: 101;
`;
const PopupContent = styled.div`
  max-width: 250px;
  background-color: #fff;
  border-radius: 20px;
  padding: 15px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  color: #2d2d2d;
`;
const PopUp = ({ isOpened, onClose, children }) => {
    if (!isOpened) {
        return null;
    }
    return (
        <PopUpContainer>
            <Popup role="dialog" onClick={onClose}>
                <Flex justify="center" align="center" height="100vh">
                    <PopupContent>{children}</PopupContent>
                </Flex>
            </Popup>
        </PopUpContainer>
    );
};

export default PopUp;