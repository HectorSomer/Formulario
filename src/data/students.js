const estudiantes={
    stick:[],
}
   
    function pushStudent(name, correo, password, matricula, date){
        estudiantes.stick.push({nombre:name, email:correo, password: password, tultion:matricula, birhtdate:date})
    }
export default {pushStudent, estudiantes};