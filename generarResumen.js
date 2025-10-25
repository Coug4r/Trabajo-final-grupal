let asistencias = [
    {nombreCurso: "curso 1", nombreDocente: "Alberto", estudiantes:"Becker", estado: "Presente"},
    {nombreCurso: "curso 2", nombreDocente: "Filberto", estudiantes:"Toni", estado: "Ausente"},
]


let sumarAsitencias = function(){
    let cmp;
    let cantidadPresentes = 0;
    for(let i = 0; i<asistencias.length;i++){
        cmp = asistencias[i];
        if(cmp.estado=="Presente"){
            cantidadPresentes++;
        }
    }
    return cantidadPresentes;
}
let sumarAusencias = function(){
    let cmp;
    let cantidadAusentes = 0;
    for(let i = 0; i<asistencias.length;i++){
        cmp = asistencias[i];
        if(cmp.estado=="Ausente"){
            cantidadAusentes++;
        }
    }
    return cantidadAusentes;
}

mostrarResumen = function () {
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr><th>NOMBRE DEL CURSO</th><th>DOCENTE RESPONSABLE</th>" +
        "<th>Estudiantes</th><th>ASISTENCIA</th>";
    for (i = 0; i < asistencias.length; i++) {
        let elementoAsistencias = asistencias[i];
        contenidoTabla += "<tr><td>" + elementoAsistencias.nombreCurso + "</td>" +
            "<td>" + elementoAsistencias.nombreDocente + "</td>" +
            "<td>" + elementoAsistencias.estudiantes + "</td>" +
            "<td>" + elementoAsistencias.estado + "</td>"
            ;
            
    }
    
    
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    let presentes = sumarAsitencias();
    let ausentes = sumarAusencias();
    mostrarTexto("lblResumen","Este dia hubo: "+ i+ " estudiantes.");
    mostrarTexto("lblPresentes","Este dia hubo: "+ presentes+ " estudiantes presentes.");
    mostrarTexto("lblAusentes","Este dia hubo: "+ ausentes+ " estudiantes ausentes.");
}

