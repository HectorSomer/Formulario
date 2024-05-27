import styled from "styled-components";

const ButtonStyled = styled.button`
width: 80%;
height: 60px;
background-color: #9B9B9B;
border-radius: 6px;
color: white;
font-size: 20px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:hover {
        background-color: gray;
    }
`;
function Button(props){
    return(
        <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
    )
}
export default Button;
