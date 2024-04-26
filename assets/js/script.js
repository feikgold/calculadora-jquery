$(document).ready(function(){

    let numero1 = 0;
    let numero2 = 0;

    let resultado = 0;

    const  soloNumeros= /^\d+$/;

    $("#btnSumar").click(function(){
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        console.log(numero1);

        if(numero1 === ""){
             $("#error1").text("Debe ingresar el primer numero")
             $("#error1").css("color","red")
             return;
        }


        if(!soloNumeros.test(numero1)){            
            $("#error1").text("solo acepta numeros");
            $("#error1").css("color","red")
             return;
        }



        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero")
            $("#error2").css("color","red")
            return;
        }


        if(!soloNumeros.test(numero2)){
            $("#error2").text("solo acepta numeros");
            $("#error2").css("color","red")
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontsize","2rem")

        limpiar();

    })





    $('#btnRestar').click(function(){ 
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        console.log(numero1);

        if(numero1 === ""){
             $("#error1").text("Debe ingresar el primer numero")
             $("#error1").css("color","red")
             return;
        }


        if(!soloNumeros.test(numero1)){            
            $("#error1").text("solo acepta numeros");
            $("#error1").css("color","red")
             return;
        }



        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero")
            $("#error2").css("color","red")
            return;
        }


        if(!soloNumeros.test(numero2)){
            $("#error2").text("solo acepta numeros");
            $("#error2").css("color","red")
            return;
        }

        resultado = parseInt(numero1) - parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontsize","2rem")

        limpiar();

    })



    $('#btnMultiplicar').click(function(){ 
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        console.log(numero1);

        if(numero1 === ""){
             $("#error1").text("Debe ingresar el primer numero")
             $("#error1").css("color","red")
             return;
        }


        if(!soloNumeros.test(numero1)){            
            $("#error1").text("solo acepta numeros");
            $("#error1").css("color","red")
             return;
        }



        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero")
            $("#error2").css("color","red")
            return;
        }


        if(!soloNumeros.test(numero2)){
            $("#error2").text("solo acepta numeros");
            $("#error2").css("color","red")
            return;
        }

        resultado = parseInt(numero1) * parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontsize","2rem")

        limpiar();

    })



    $('#btnDividir').click(function(){ 
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        console.log(numero1);

        if(numero1 === ""){
             $("#error1").text("Debe ingresar el primer numero")
             $("#error1").css("color","red")
             return;
        }


        if(!soloNumeros.test(numero1)){            
            $("#error1").text("solo acepta numeros");
            $("#error1").css("color","red")
             return;
        }



        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo numero")
            $("#error2").css("color","red")
            return;
        }


        if(!soloNumeros.test(numero2)){
            $("#error2").text("solo acepta numeros");
            $("#error2").css("color","red")
            return;
        }

        resultado = parseInt(numero1) / parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontsize","2rem")

        limpiar();

    })

    $("#btnLimpiar").click(function(){
        limpiar();
        limparRsultado();

    })



    $("#btnEsconder").click(function(){

        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();

    })

    $("#btnMostrar").click(function(){

        $("#div1").show();
        $("#div2").show();
        $("#div3").show();

    })




    function limparRsultado(){
        $("#resultado").text("");
    }
    
    function limpiar(){
        $("#numero1").val("")
        $("#numero2").val("")
    }

});