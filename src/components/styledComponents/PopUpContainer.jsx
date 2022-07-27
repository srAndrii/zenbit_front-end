import ReactDOM from "react-dom";
import {useEffect, useState} from "react";

const PopUpContainer = ({ children }) => {
    const [container] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, []);

    return ReactDOM.createPortal(children, container);
};

export default PopUpContainer;