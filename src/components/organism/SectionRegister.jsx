import Button from "../atoms/Button";
import Field from "../molecules/Field";
import Image from "../atoms/Image";
import "./SectionRegister.css"
import Title from "../atoms/Title";
import { useState } from "react";
import students from "./../../data/students.js"
import Swal from "sweetalert2";
function SectionRegister(){
    const [name, setName] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [matricula, setMatricula] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const handlerClick = (event) => {
        students.pushStudent(name,correo,password,matricula,birthdate);
        let text = "Estudiantes:\n";

        for (let i = 0; i < students.estudiantes.stick.length; i++) {
            const student = students.estudiantes.stick[i];
            text += (i+1)+".-"+`Nombre: ${student.nombre}, Email: ${student.email}, Matrícula: ${student.tultion}, Fecha de nacimiento: ${student.birhtdate}\n`;
        }
    
        Swal.fire({
            title: "Estudiantes:",
            text: text
        });
    }

    return(
       <>
       <div id="register_form">
        <Image></Image>
        <Title></Title>
        <Field type="text" placeholder="Ejemplo: Héctor Emilio Somer Velázquez" text="Nombre completo del alumno" val={name} fnVal={setName}></Field>
        <Field type="email" placeholder="ejemplo@gmail.com" text="Correo electrónico del alumno" val={correo} fnVal={setCorreo}></Field>
        <Field type="password" placeholder="Contraseña" text="Contraseña del alumno" val={password} fnVal={setPassword}></Field>
        <Field type="text" placeholder="Matrícula" text="Matrícula del alumno" val={matricula} fnVal={setMatricula}></Field>
        <Field type="datetime-local" placeholder="00/00/000" text="Fecha de nacimiento" val={birthdate} fnVal={setBirthdate}></Field>
        <Button onClick={handlerClick}></Button>
       </div>
       </> 
    )
}
export default SectionRegister;