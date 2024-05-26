import styled from "styled-components";

const ImageStyled = styled.img`
width: 40%;
height: 22%;
border-radius: 1000px;
`;
function Image (){
    return(
        <ImageStyled src="Estuadiante.jpg"></ImageStyled>
    )
}
export default Image;