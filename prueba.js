mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCajas();

}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
    mostrarTotales();
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol")
    ocultarComponente("divEmpleado");
}


//PUNTO 1
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


//PUNTO 2
let estudiantes = [
{ID:111213231, NOMBRE: "ALEX",ESTADO:"Presente"},
{ID:342423432, NOMBRE: "JUAN",ESTADO:"Presente"},
{ID:847547676, NOMBRE: "PEDRO", ESTADO:"Presente"}
]
mostrarEstudiantes=function(){
    document.getElementById("lblErrorCampo").style.display="none"
     document.getElementById("lblErrorCampo2").style.display="none"
    console.log("Se ejecuto")
    document.getElementById("tableContent").innerHTML= estudiantes.map(est=>`
        <tr>
                    <td>${est.ID}</td>
                    <td>${est.NOMBRE}</td>
                    <td>${est.ESTADO}</td>
                </tr>
        `).join(" ");
}
presente=function(){
    let ID = recuperarTexto("txtId");
    let valor = "Presente"
    if(ID){
        document.getElementById("lblErrorCampo").style.display="none"
        agregarId(valor);
    }
    else{
        document.getElementById("lblErrorCampo").style.display="block"
    }
}
ausente=function(){
    let valor2 = "Ausente"
    let ID = recuperarTexto("txtId");
    if(ID){
        document.getElementById("lblErrorCampo").style.display="none"
        agregarId(valor2);
    }else{
        document.getElementById("lblErrorCampo").style.display="block"
    }
}
agregarId=function(valor){
    let ID = document.getElementById("txtId").value
    for(i=0;i<estudiantes.length;i++){
        if(ID == estudiantes[i].ID){
            estudiantes[i].ESTADO = valor;
        }
    }
    mostrarEstudiantes();
}
agregar=function(){
    let ID = recuperarTexto("txtId");
    let nombre = recuperarTexto("txtNombre");
    if(ID){
        document.getElementById("lblErrorCampo").style.display="none"
        estudiantes.push({
            ID:ID,
            NOMBRE:nombre,
            ESTADO: "",
        })
    }
    else{
        document.getElementById("lblErrorCampo").style.display="block"
    }
    mostrarEstudiantes();
}