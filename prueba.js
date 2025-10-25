let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0915622729",nombre:"Rafael",apellido:"Correa",sueldo:200.0,}
]
let roles = []

let esNuevo = false;
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
mostrarEmpleados=function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table> <tr>"
    + "<th>CEDULA</th>" 
    + "<th>NOMBRE</th>"
    + "<th>APELLIDO</th>"
    + "<th>SUELDO</th>"
    +"</tr>";
    let elementoEmpleados;
    for(let i=0; i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        contenidoTabla+=
        "<tr><td>"+ elementoEmpleados.cedula +"</td>"
        + "<td>"+ elementoEmpleados.nombre + "</td>" 
        + "<td>"+ elementoEmpleados.apellido + "</td>"
        + "<td>"+ elementoEmpleados.sueldo + "</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
ejecutarNuevo=function(){
    mostrarTexto('lblErrorCedula', "");
    mostrarTexto('lblErrorNombre', "");
    mostrarTexto('lblErrorApellido', "");
    mostrarTexto('lblErrorSueldo', "");
    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")
    habilitarComponente("btnGuardar")
    esNuevo = true;
}
buscarEmpleado=function(cedula){
    let elementoEmpleados;
    for(let i=0; i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        if(elementoEmpleados.cedula == cedula){
            return elementoEmpleados;
        }
    }
    return null;
}
agregarEmpleado=function(empleado){
    let cedulaNueva = empleado.cedula
    if(buscarEmpleado(cedulaNueva) == null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }

}
guardar=function(){
    let valides = true;
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    if(esDigito(valorCedula)==false || valorCedula.length != 10){
        mostrarTexto('lblErrorCedula', "Solo se permiten 10 digitos exactos");
        valides = false;
    }
    if(esMayuscula(valorNombre)==false || valorNombre.length < 3){
        mostrarTexto('lblErrorNombre', "Solo se permiten mas de 3 mayusculas");
        valides = false;
    }
    if(esMayuscula(valorApellido)==false || valorApellido.length < 3){
        mostrarTexto('lblErrorApellido', "Solo se permiten mas de 3 mayusculas");
        valides = false;
    }
    if(valorSueldo <= 400 || valorSueldo >= 5000 || isNaN(valorSueldo)){
        mostrarTexto('lblErrorSueldo', "Solo se permiten valores entre 400 y 5000");
        valides = false;
    }
    if(valides == true){
        if(esNuevo == true){
            let empleado = {};
            empleado.cedula=valorCedula;
            empleado.nombre=valorNombre;
            empleado.apellido=valorApellido;
            empleado.sueldo=valorSueldo;
            let resultado = agregarEmpleado(empleado);
            if(resultado == true){
                alert("Empleado guardado correctamente!")
                mostrarEmpleados();
                deshabilitarCajas();
                let esNuevo = false;
            }else{
                alert("Ya existe un empleado con la cedula: "+ valorCedula);
            }
        }else{
        let valorCedulaBusqueda = recuperarTexto("txtBusquedaCedula");
        let elementoBusqueda = buscarEmpleado(valorCedulaBusqueda);
        elementoBusqueda.nombre=valorNombre;
        elementoBusqueda.apellido=valorApellido;
        elementoBusqueda.saldo=valorSueldo;
        alert("Empleado Modificado Exitosamente!")
        mostrarEmpleados();
        deshabilitarCajas();
        }
    }else{
        deshabilitarComponente('btnGuardar')
    }
}
ejecutarBusqueda=function(){
    let elementoBusqueda = buscarEmpleado(recuperarTexto("txtBusquedaCedula"));
    if (elementoBusqueda == null){
        alert("El empleado no existe!");
    }else{
        mostrarTextoEnCaja("txtCedula", elementoBusqueda.cedula);
        mostrarTextoEnCaja("txtNombre", elementoBusqueda.nombre);
        mostrarTextoEnCaja("txtApellido", elementoBusqueda.apellido);
        mostrarTextoEnCaja("txtSueldo", elementoBusqueda.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        deshabilitarComponente("txtCedula");
    }
}
limpiar=function(){
    deshabilitarCajas();
    esNuevo = false;

}
buscarPorRol=function(){
    let elementoBusqueda = buscarEmpleado(recuperarTexto("txtBusquedaCedulaRol"));
    if (elementoBusqueda == null){
        alert("El empleado no existe!");
    }else{
        mostrarTexto("infoCedula", elementoBusqueda.cedula);
        mostrarTexto("infoSueldo", elementoBusqueda.sueldo);
        mostrarTexto("infoNombre", elementoBusqueda.nombre +" "+elementoBusqueda.apellido);
    }
}
calcularAporteEmpleado=function(sueldo){
    return sueldo * 9.45 / 100;
}
calcularValorAPagar=function(sueldo, aporte, descuento){
    return sueldo - aporte - descuento;
}
calcularRol=function(){
    mostrarTexto("lblErrorDescuentos", "");
    valides = true;
    sueldo = recuperarFloatDiv('infoSueldo');
    descuento = recuperarFloat('txtDescuentos');
    if(descuento >= 0 && descuento <= sueldo){
        let aporte = calcularAporteEmpleado(sueldo)
        mostrarTexto("infoIESS", aporte);
        mostrarTexto('infoPago', calcularValorAPagar(sueldo, aporte, descuento));
        habilitarComponente('btnGuardarRol')
    }else{
        mostrarTexto("lblErrorDescuentos", "Ingresar valores desde 0 hasta "+sueldo);
    }
}
buscarRol=function(cedula){
    let elementoRoles;
    for(let i=0; i<roles.length;i++){
        elementoRoles=roles[i];
        if(elementoRoles.cedula == cedula){
            return elementoRoles;
        }
    }
    return null
}
agregarRol=function(rol){
    let cedulaNueva = rol.cedula
    if(buscarRol(cedulaNueva) == null){
        roles.push(rol);
        return true;
    }else{
        return false;
    }
}
calcularAporteEmpleador=function(sueldoEmpleado){
    return sueldoEmpleado * 11.15 / 100;
}
guardarRol=function(){
    let valorAPagar = recuperarFloatDiv('infoPago');
    let aporteIESSempleado =  recuperarFloatDiv('infoIESS');
    let nombre = recuperarTextoDiv('infoNombre');
    let cedula = recuperarTextoDiv('infoCedula');
    let sueldo = recuperarFloatDiv('infoSueldo');
    let aporteIESSempleador = calcularAporteEmpleador(sueldo);
    let rol = {};
    rol.cedula=cedula;
    rol.nombre=nombre
    rol.sueldo=sueldo;
    rol.valorAPagar=valorAPagar;
    rol.aporteEmpleado=aporteIESSempleado;
    rol.aporteEmpleador=aporteIESSempleador;
    agregarRol(rol);
    alert('Operacion Exitosa!');
    deshabilitarComponente('btnGuardarRol');
    mostrarOpcionRol();
}
mostrarRoles=function(){
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table> <tr>"
    + "<th>CEDULA</th>" 
    + "<th>NOMBRE</th>"
    + "<th>VALOR A PAGAR</th>"
    + "<th>APORTE EMPLEADO</th>"
    + "<th>APORTE EMPLEADOR</th>"
    +"</tr>";
    let elementoRoles;
    for(let i=0; i<roles.length;i++){
        elementoRoles=roles[i];
        contenidoTabla+=
        "<tr><td>"+ elementoRoles.cedula +"</td>"
        + "<td>"+ elementoRoles.nombre + "</td>" 
        + "<td>"+ elementoRoles.valorAPagar + "</td>"
        + "<td>"+ elementoRoles.aporteEmpleado + "</td>"
        + "<td>"+ elementoRoles.aporteEmpleador + "</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
mostrarTotales=function(){
    let totalEmpleado;
    let totalEmpleador;
    let totalAPagar;
    for(let i=0; i<roles.length;i++){
        elementoRoles=roles[i];
        totalEmpleado =+ elementoRoles.aporteEmpleado;
        totalEmpleador =+ elementoRoles.aporteEmpleador;
        totalAPagar =+ elementoRoles.valorAPagar;
    }
    mostrarTexto('infoTotalPago', totalAPagar);
    mostrarTexto('infoAporteEmpresa', totalEmpleador);
    mostrarTexto('infoAporteEmpleado', totalEmpleado);
}