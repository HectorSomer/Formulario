import Button from "../atoms/Button";
import Field from "../molecules/Field";
import Image from "../atoms/Image";
import "./SectionRegister.css"
import Title from "../atoms/Title";
function SectionRegister(){
    return(
       <>
       <div id="register_form">
        <Image></Image>
        <Title></Title>
        <Field type="text" placeholder="Ejemplo: Héctor Emilio Somer Velázquez" text="Nombre completo del alumno"></Field>
        <Field type="email" placeholder="ejemplo@gmail.com" text="Correo electrónico del alumno"></Field>
        <Field type="password" placeholder="Contraseña" text="Contraseña del alumno"></Field>
        <Field type="text" placeholder="Matrícula" text="Matrícula del alumno"></Field>
        <Field type="datetime-local" placeholder="00/00/000" text="Fecha de nacimiento"></Field>
        <Button></Button>
       </div>
       </> 
    )
}
export default SectionRegister;