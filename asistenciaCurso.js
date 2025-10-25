let asistencia = [
    { curso: "", docente: "" }
];

crearAsistencia = function () {
    let valorCurso = recuperarTexto("txtNomCurso");
    let valorDocente = recuperarTexto("txtNomDocente");
    if (valorCurso != "") {
        if (valorDocente != "") {
            let nuevaAsistencia = {};
            nuevaAsistencia.curso = valorCurso;
            nuevaAsistencia.docente = valorDocente;
            asistencia.push(nuevaAsistencia);
            mostrarTexto("lblMensaje", "ASISTENCIA DEL CURSO" + " " + nuevaAsistencia.curso + ", PASADA POR" + " " + nuevaAsistencia.docente);
            limpiar();
        }
        else {
            mostrarTexto("lblError1", "*CAMPO OBLIGATORIO*");
        }
    }
    else {
        mostrarTexto("lblError", "*CAMPO OBLIGATORIO*");
    }

}

limpiar = function () {
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError", "");
}
