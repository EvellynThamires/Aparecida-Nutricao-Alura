var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista"; //Conteudo do texto.

var pacientes = (document.querySelectorAll(".paciente")); 

//Realizar o loop. Declara variavel, condição e contador.
for(var i = 0; i < pacientes.length; i++){

    //Executa o código.
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso"); 
    var peso = tdPeso.textContent; 

    var tdAltura = paciente.querySelector(".info-altura"); 
    var altura = tdAltura.textContent; 

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido"); //Adicionar novas classes.
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!" 
        paciente.classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc; 
    }
}

//Passa-se o parametro do que é necessário informar. Usar função para reuso de código.
function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2); //Quantas casas decimais serão exibidas.
}









                                     