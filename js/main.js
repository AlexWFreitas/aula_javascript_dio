// JavaScript Básico do Digital One Innovation

// Manipulando Elementos da Página.

    console.log(document.getElementById("agradecimento"));

    function clicou() {

        console.log(document.getElementById("agradecimento"));
        document.getElementById("agradecimento").innerHTML = '<b">Obrigado por clicar<b>';
    }

    function redirect() {
        //window.open("http://www.median-xl.com");
        window.location.href = "http://www.median-xl.com";
    }

    function trocar(elemento) {
        elemento.innerHTML = "Obrigado por passar o mouse";
    }

    function voltar(elemento) {
        elemento.innerHTML = "Passe o mouse aqui.";
    }

    function funcaoChange(elemento) {
        console.log(elemento.value);
        console.log(elemento.options[elemento.selectedIndex].text);
    }

// Funções / Métodos

    // function soma( n1, n2 ) {
    //     return n1 + n2;
    // }

    // function setReplace(frase, nome, novo_nome){
    //     return frase.replace(nome, novo_nome)
    // }

// Exemplo de Váriavel Local e Global

    // var validar = 0;

    // function validaIdade(idade){
    //     var validar;
    //     if (idade >= 18) {
    //         validar = true;
    //     }else {
    //         validar = false;
    //     }
    //     return validar;
    // }

    // Return podia estar dentro do if / else.

    // console.log(soma(3,10));
    // console.log(setReplace("Vai Japão", "Japão", "Brasil"));
    // console.log(validaIdade(20));
    // console.log(validar);


// Condicionais , Laços de Repetição, Date

// Date

    // var d = new Date();
    // console.log(d);
    // console.log(d.getDay());
    // console.log(d.getHours());
    // console.log(d.getMonth());
    // console.log(d.getFullYear());
    // console.log(d.getYear());
    // console.log(d.getDate());


// For Loop

    // var count;
    // for(count=0; count <= 5; count++) {
    //     alert(count);
    // }


// While Loop

    // var count = 0;
    // while ( count <= 5) {
    //     console.log(count);
    //     count++;
    // }


// If

    // var idade = prompt("Qual sua idade");
    // if (idade >= 18) {
    //     alert("Maior de Idade") 
    //     }   
    //     else {
    //         alert("Menor de Idade");
    //     };


// Array and Dict 

//Dict

    // var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
    // console.log(frutas);
    // alert(frutas[1].nome);


    // Arrays:

    // var lista = ["maça", "pêra", "laranja"];
    // console.log(lista[1]);
    // lista.push("uva");
    // console.log(lista);
    // lista.pop()
    // console.log(lista);
    // console.log(lista.length);
    // console.log(lista.reverse());
    // console.log(lista.toString());
    // console.log(lista.join(" | "));


// Vars, console.log, Alert, Expressões Matemáticas e Concatenação de String

    // var nome = "Alex Wong de Freitas";
    // var idade = 32;
    // var idade2 = 10;
    // var frase = "Japão é o melhor time do mundo";
    // //alert(nome + " tem " + idade + " anos");
    // //alert(idade + idade2);

    // console.log(nome + " tem " + idade + " anos");
    // console.log(idade * idade2);
    // console.log(frase);
    // alert(frase.replace("Japão", "Brasil"));

