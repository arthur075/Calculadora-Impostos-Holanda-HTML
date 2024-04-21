document.getElementById('select').addEventListener('change', function() {
    calcularSalarioComImpostos();
});

document.getElementById('salarioInput').addEventListener('input', function() {
    calcularSalarioComImpostos();
});

function calcularSalarioComImpostos() {
    var salario = parseFloat(document.getElementById('salarioInput').value);
    var tipoSalario = document.getElementById('select').value;
    var salarioComImpostos = 0;

    // Realizar cálculos com base no tipo de salário selecionado
    switch (tipoSalario) {
        case 'Diário':
            // Lógica para cálculo diário
            salarioComImpostos = salario * 365;
            if (salarioComImpostos <= 75518) {
                salarioComImpostos = (salarioComImpostos * 36.93) / 100;
            } else if (salarioComImpostos > 75518) {
                    salarioComImpostos = (salarioComImpostos * 49.50) / 100;
            }
            break;
        case 'Semanal':
            // Lógica para cálculo semanal
            salarioComImpostos = salario * 4 * 12;
            if (salarioComImpostos <= 75518) {
                salarioComImpostos = (salarioComImpostos * 36.93) / 100;
            } else if (salarioComImpostos > 75518) {
                    salarioComImpostos = (salarioComImpostos * 49.50) / 100;
            }
            break;
        case 'Mensal':
            // Lógica para cálculo mensal
            salarioComImpostos = salario * 12;
            if (salarioComImpostos <= 75518) {
                salarioComImpostos = (salarioComImpostos * 36.93) / 100;
            } else if (salarioComImpostos > 75518) {
                    salarioComImpostos = (salarioComImpostos * 49.50) / 100;
            }
            break;
        case 'Anual':
            // Lógica para cálculo anual
            salarioComImpostos = salario * 1;
            if (salarioComImpostos <= 75518) {
                salarioComImpostos = (salarioComImpostos * 36.93) / 100;
            } else if (salarioComImpostos > 75518) {
                    salarioComImpostos = (salarioComImpostos * 49.50) / 100;
            }
            break;
        default:
            console.log('Tipo de salário não reconhecido');
    }

    // Exibir o resultado na página
    document.getElementById('salarioComImpostos').textContent = salarioComImpostos.toFixed(2); // Arredondando para 2 casas decimais
}