let asistencias = [
    {nombreCurso: "curso 1", nombreDocente: "Alberto", estudiantes:"Becker", estado: "presente"},
    {nombreCurso: "curso 2", nombreDocente: "Filberto", estudiantes:"Toni", estado: "ausente"},
]

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
    mostrarTexto("lblResumen","Este dia hubo: "+ i+ " estudiantes.")
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

let sumarAsitencias = function(){
    let cmp;

}
let sumarAusencias = function(){
    let cmp;
}