import { useState } from "react";
import CardInfo from "../molecules/CardInfo";
import students from "../../data/students";
import Button from "../atoms/Button";
import "./SectionCard.css"
function SectionCard(){
    const [listaCards, setListaCards]= useState([]);
    const handlerClick = (event) =>{
        const studentsToShow = students.estudiantes.stick;
        let studentsCards = studentsToShow.map((student, index) => (
            <CardInfo key={index} info={student} />
        ));
        setListaCards(studentsCards);
    }
    return(
        <div id="sectionCards_size">
                 <div>{listaCards}</div>
        <Button text="Ver estudiantes" onClick={handlerClick}></Button>
        </div>
   
       
    )

}
export default SectionCard;