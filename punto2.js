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