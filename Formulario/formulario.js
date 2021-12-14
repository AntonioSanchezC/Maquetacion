
            function rellenado(){

                //--------------a.Comprobacion del nombre
                        
                         if(0 == document.getElementById("nombre").value){
                            alert('Debe ingresar el nombre ');
                            return false;
                            }

       
                //--------------Comprobacion del nombre
        
                 //--------------a.Comprobacion del 1ºapellido
                        
                 if(0 == document.getElementById("ape1").value){
                     alert('Debe ingresar el primer apellido ');
                     return false;
                     }


                //--------------Comprobacion del 1ºapellido

                 //--------------a.Comprobacion del 2ºapellido
                        
                 if(0 == document.getElementById("ape2").value){
                    alert('Debe ingresar el segundo apellido ');
                    return false;
                    }


               //--------------Comprobacion del 2ºapellido


                 //--------------a.Comprobacion del DNI
                
                 let reDNI= /^[XYZ]?\d{5,8}[A-Z]$/;
                 if(!(reDNI.test(document.getElementById('dni').value))) {
                    //Si no lo hace, lo indicamos y devolvemos false, lo que impide que se envíe el correo
                    alert('El DNI esta equivoco');
                    return false;
                }


               //--------------Comprobacion del DNI


                //--------------Hacemos que sea posible seleccionar una fecha
               window.onload = function(){
                let fecha = new Date(); //Fecha actual
                let mes = fecha.getMonth()+1; //obteniendo mes
                let dia = fecha.getDate(); //obteniendo dia
                let ano = fecha.getFullYear(); //obteniendo año
                if(dia<10)
                  dia='0'+dia; //agrega cero si el menor de 10
                if(mes<10)
                  mes='0'+mes //agrega cero si el menor de 10
                document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
              }

                //--------------Hacemos que sea posible seleccionar una fecha



                //--------------Comprobacion del e-mail


               let formatoEmail  = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
     
               //Comprobamos que el email introducido cumple con el patrón establecido
               if (!(formatoEmail.test(document.getElementById('mail').value))) {
                   //Si no lo hace, lo indicamos y devolvemos false, lo que impide que se envíe el correo
                   alert('El email es incorrecto');
                   return false;
               }
           
      
                //--------------Comprobacion del e-mail
        

                //--------------b.Comprobacion del telefono de contacto
               // let teleValido=document.getElementById("teleph").value;
               let reteleph =  /^[0-9]{9}$/;

               if(reteleph.test(document.getElementById("teleph").value)){
                   } else {
                       alert("El telefono de contacto es incorrecto.");
                           return false;
                                    }
                //--------------Comprobacion del telefono de contacto

               //--------------b.Comprobacion del telefono movil
               //let movilValido=document.getElementById("movil").value;
               let removil =  /^[0-9]{9}$/;

               if (removil.test(document.getElementById("movil").value)){
                   } else {
                       alert("El telefono móvil es incorrecto.");
                           return false;
                                    }
                //--------------Comprobacion del telefono movil
         

     
                //--------------Comprobacion del password
                        //en el final {8,}no tiene maximo pero si minimo, si quiero maximo por ejemnplo 15
                        //pues seria {8,15}, esta secuencao no permite espacios
                        let repass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
                          if (!(repass.test(document.getElementById("pass").value))){
                                alert("La contraseña debe ser al menos de 8 caracteres y que cuente al menos con un dígito.");
                                return false;
                                    }
                //--------------Comprobacion del password
        
           
                //--------------Comprobacion de la repeticion de password
                         let passComproba1=document.getElementById("pass1").value;
                       
                         //poner primero la contraseña original y liuego comparar con la repiticion, en este caso
                         //el que qtiene pass y luego ya el pass1
                          if (document.getElementById("pass").value != document.getElementById("pass1").value){
                             alert("Al repetir la contraseña debe ser igual a la contraseña previa");
                             return false;
                                 }
                //--------------Comprobacion de la repeticion de password
        
        
                return true;
            }
        
                //--------------f.casilla de verificacion

                document.getElementById('casilla').addEventListener("click", function()
                {
                //Si está marcada la casilla
                if(document.getElementById('casilla').checked == true)
                {
                 //Se le da la clase active
                 document.getElementById('botonEnvio1').className = "active";
                //Y lo ponemos activo al deshabilitar disabled con false
                 document.getElementById('botonEnvio1').disabled = false;
                 //Si no lo deja activo de nuevo, por si se desmarca la casilla
                 }else{
                 document.getElementById('botonEnvio1').className = "disabled";
                 document.getElementById('botonEnvio1').disabled = true;
                }
                });
        
        

               