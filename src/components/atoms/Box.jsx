import styled from "styled-components";

const SpanStyled = styled.span`
width: auto;
background-color: beige;
height: auto;
border-color: black;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
`
function Box(props){
    return (<SpanStyled></SpanStyled>);
}
export default Box;