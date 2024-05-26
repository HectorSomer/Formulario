import styled from "styled-components"
const InputStyled = styled.input`
width: 400px;
height: 100%;
border: 1px yellow solid;
border-radius: 10px;
font-size: 20px;
color: black;
padding: 0 10px;
`
function Input(props){
    const handlerOnChange = (event) => {
        props.fnVal(event.target.value)
    }

    return(
        <InputStyled type={props.type} placeholder={props.placeholder} onChange={handlerOnChange} value={props.val}/>
    )
}
export default Input;