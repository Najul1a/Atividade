const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    " <h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++)
    document.getElementById("resposta").innerHTML += `<h3>#${i}</h3>`;
  //console.log(resposta ${i});
};

//-------------------------------------------------------------------------------------------------

const exercicio2 = () => {
  document.getElementById("resultado").innerHTML = "<h2></h2>";
  for (let i = 0; i < +document.getElementById(`num`).value; i += 2)
    document.getElementById("resultado").innerHTML += `#${i}`;
};

//--------------------------------------------------------------------------------------------------------------

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Informar número válido, o numero ${num} não é positivo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true; // declarei variavel para primo

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }
    primo
      ? (result.innerText = ` O número ${num} é primo!`)
      : (result.innerText = ` O número ${num} não é primo!`);
  }
};

//------------------------------------------------------
const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Poderia colocar um numero maior`;
  } else {
    resultado.innerText = "";
    error.innerText = "";
    for (let i = 0; i <= 10; i++) {
      resultado.innerHTML += `${num} x ${i} = ${num * i} <br>`;
      error.innerText = "";
    }
  }
};

//-------------------------------------------------------------------------------------------------------

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  let contador = 0;
  resultado.innerText = " ";

  while (num >= contador) {
    if (contador % 2 !== 0) resultado.innerText += `${contador}. `;
    contador++;
  }
};
//------------------------------------------------------------------------------------------------------------

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");

  let contador = 0;
  let soma = 0;
  resultado.innerText = " ";

  while (num >= contador) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
    resultado.innerHTML = soma;
  }
};
//-----------------------------------------------------------------------------------------------------
const exercicio7 = () => {
  let cont = 10;
  let result = document.getElementById("resposta");

  while (cont > 0) {
    result.innerText += ` ${cont}`;
    cont--;
  }
};
//---------------------------------------------------------------------------------------------
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar a palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

//----------------------------------------------------------------------------------------------------
const exercicio9 = () => {
  let somar = 0;

  let result = document.getElementById("resposta");
  for (let i = 1; i <= 100; i++) {
    somar += i;
  }
  result.innerText = `${somar}`;
};

//-----------------------------------------------------------------------------------------
const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let resposta = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;
  let somar = 0;
  resposta.innerHTML = "";
  error.innerText = "";

  if (num <= 0) {
    error.innerText = "Favor informar um número positivo valido!";
  } else {
    while (contador <= num) {
      somar += contador;
      contador++;
    }

    let media = somar / num;
    resposta.innerHTML += `A soma é ${somar} <br>`;
    resposta.innerHTML += `A media é ${media}`;
  }
};

//-----------------------------------------------------------------------------------------------------
const exercicio11 = () => {
  let result = document.getElementById("resposta");
  for (let i = 0; i < 100; i++) {
    if (i % 3 == 0) result.innerHTML += `#${i}<br>`;
  }
};
//--------------------------------------------------------------------------------------------------------
const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let error = document.getElementById("erro");
  result.innerHTML = "";
  if (num < 10) {
    error.innerHTML = " Favor infomar um número de Dois Digitos ou mais";
  } else {
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num.charAt(i));
    }
  }
  result.innerText = `A soma dos dois digitos ${num} é ${soma}`;
  error.innerText = "";
};
//------------------------------------------------------------------------
const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num1;
    maior = num2;
  }
  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O número ${num1} ou o número ${num2} não é válido`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let numPrimo = menor; numPrimo <= maior; numPrimo++) {
      let primo = true;
      for (let n = 2; n < numPrimo; n++) {
        if (numPrimo % n == 0) primo = false;
      }
      primo && (result.innerText += `${numPrimo}.`);
    }
  }
};
//----------------------------------------------------------------------------------------------
const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let mult = (num1 *= num2);

  result.innerHTML = `A área do retangular é ${mult}`;
};

//--------------------------------------------------------------------------------------------------
const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let vogais = [],
    consoante = [];
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (Number(palavra)) {
    error.innerText = `Não é posivel com números apenas letras`;
  } else {
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i].toLowerCase();
      result.innerText = "";
      error.innerText = "";
      if (
        letra == `a` ||
        letra == `e` ||
        letra == `i` ||
        letra == `o` ||
        letra == `u`
      ) {
        vogais.push(letra);
      } else {
        consoante.push(letra);
      }
    }
    result.innerText = ` Vogais: ${vogais},  Consoante: ${consoante}`;
  }
};

//------------------------------------------------------------------------------------------------------
const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let pi = 3.14
  let area = pi * num1 ** 2

  if (num1 <= 0) {
    result.innerHTML = "";
    error.innerText = "Favor informar um número positivo!"
  } else {
   error.innerText = "";
   result.innerText = `A área do circulo é ${area}`
  }
};

//----------------------------------------------------------------------------------------------
const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let mult = (num1 *= num2) / 2;
  let error = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = "digite um número positivo";
    result.innerText = "";
  } else {
    result.innerHTML = `A área do retangulo é ${mult}`;
  }
};

//-----------------------------------------------------------------------------------------------------
const exercicio18 = ()=> {
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let num3 = document.getElementById("num3").value * 1;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = (num1 + num2)* num3 / 2;

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    error.innerText = "Favor informar um número positivo!"
    result.innerHTML = "";
  }else{
    error.innerText = "";
    result.innerText = `A área do trapézio é ${area}`
  }
}
