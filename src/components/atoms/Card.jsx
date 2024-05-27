import styled from "styled-components";

const DivStyled = styled.div`
width: 100%;
height: 30%;
padding: 0 2px;
border: 1px;
background-color: beige;
border-color: black;
`;
function Card(props){
    return <DivStyled>{
        <>  
          <p>Nombre={props.info.nombre}</p>
          <p>Correo={props.info.email}</p>
          <p>Contraseña={props.info.password}</p>
          <p>Matricula={props.info.tultion}</p>
          <p>Fecha de nacimiento={props.info.birhtdate}</p>
        </>
      
        }</DivStyled>
}
export default Card;