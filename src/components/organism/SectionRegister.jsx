import Button from "../atoms/Button";
import Field from "../molecules/Field";
import "./SectionRegister.css"
import { useState } from "react";
import students from "./../../data/students.js"
import Swal from "sweetalert2";
import TopSection from "../molecules/SectionImage.jsx";
function SectionRegister(){
    const [name, setName] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [matricula, setMatricula] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const handlerClick = (event) => {
        students.pushStudent(name,correo,password,matricula,birthdate);
    }
    return(
       <>
       <div id="register_form">
       <TopSection></TopSection>
        <Field type="text" placeholder="Ejemplo: Héctor Emilio Somer Velázquez" text="Nombre completo del alumno" val={name} fnVal={setName}></Field>
        <Field type="email" placeholder="ejemplo@gmail.com" text="Correo electrónico del alumno" val={correo} fnVal={setCorreo}></Field>
        <Field type="password" placeholder="Contraseña" text="Contraseña del alumno" val={password} fnVal={setPassword}></Field>
        <Field type="text" placeholder="Matrícula" text="Matrícula del alumno" val={matricula} fnVal={setMatricula}></Field>
        <Field type="datetime-local" placeholder="00/00/000" text="Fecha de nacimiento" val={birthdate} fnVal={setBirthdate}></Field>
        <Button onClick={handlerClick} text="Registrar"></Button>
       </div>
       </> 
    )
}
export default SectionRegister;