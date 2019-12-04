
function validar(){
  var form = document.form;
    if(form.nombre.value==""){
      alert("Ingresa tu nombre");
      form.nombre.value="";
      form.nombre.focus();
      return false;
    }
      if(form.email.value==""){
        alert("Ingrese tu email");
        form.email.value="";
        form.email.focus();
        return false;
    }

      if(validarEmail(form.email.value)==false) {
        alert("El email no es valido");
        form.email.value="";
        form.email.focus();
        return false;
    }

      if(form.pais.value==""){
        alert("Seleccione tipo de contacto");
        form.pais.value="";
        form.pais.focus();
        return false;
    }

      if(form.comentario.value==""){
        alert("Ingrese su comentario");
        form.comentario.value="";
        form.comentario.focus();
        return false;
    }
  form.submit();
}

function validarEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    } else {
        return false;
    }
}
