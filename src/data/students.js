const estudiantes={
    stick:[],
}
   
    function pushStudent(name, correo, password, matricula, date){
        estudiantes.stick.push({nombre:name, email:correo, contraseña: password, matricula:matricula, Cumpleaños:date})
    }
export default {pushStudent, estudiantes};