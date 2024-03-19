function numerosEntre(num1, num2) {
    if (num1 >= num2) {
        console.log("El primer número debe ser menor que el segundo número.");
        return;
    }

    console.log("Números entre", num1, "y", num2, "en secuencia ascendente:");
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
}

// Ejemplo de uso
numerosEntre(5, 10);