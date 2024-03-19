const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumarNumeros() {
  let suma = 0;

  rl.question('Ingrese un número (digite 0 para finalizar): ', (numero) => {
    const num = parseFloat(numero);

    if (num === 0) {
      console.log('Suma total:', suma);
      rl.close();
    } else if (!isNaN(num)) {
      suma += num;
      sumarNumeros(); // Llamar recursivamente para solicitar otro número
    } else {
      console.log('Debe ingresar un número válido.');
      sumarNumeros(); // Llamar recursivamente para solicitar otro número
    }
  });
}

// Iniciar el proceso de sumar números
sumarNumeros();