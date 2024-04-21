document.getElementById('select').addEventListener('change', function () {
    calcularSalarioComImpostos();
});

document.getElementById('salarioInput').addEventListener('input', function () {
    calcularSalarioComImpostos();
});

function calcularSalarioComImpostos() {
    var salario = parseFloat(document.getElementById('salarioInput').value);
    var tipoSalario = document.getElementById('select').value;
    var salarioComImpostos = 0;
    var imposto = 0;

        // Realizar cálculos com base no tipo de salário selecionado
        switch (tipoSalario) {
            case 'Diário':
                // Lógica para cálculo diário
                salario = salario * 30 * 12;
                salarioComImpostos = salario;
                if (salarioComImpostos <= 75518) {
                    imposto = (salarioComImpostos * 36.93) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                } else if (salarioComImpostos > 75518) {
                    imposto = (salarioComImpostos * 49.50) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                }
                break;
            case 'Semanal':
                // Lógica para cálculo semanal
                salario = salario * 4 * 12;
                salarioComImpostos = salario;
                if (salarioComImpostos <= 75518) {
                    imposto = (salarioComImpostos * 36.93) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                } else if (salarioComImpostos > 75518) {
                    imposto = (salarioComImpostos * 49.50) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                }
                break;
            case 'Mensal':
                // Lógica para cálculo mensal
                salario = salario * 12;
                salarioComImpostos = salario;
                if (salarioComImpostos <= 75518) {
                    imposto = (salarioComImpostos * 36.93) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                } else if (salarioComImpostos > 75518) {
                    imposto = (salarioComImpostos * 49.50) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                }
                break;
            case 'Anual':
                // Lógica para cálculo anual
                salario = salario * 1;
                salarioComImpostos = salario;
                if (salarioComImpostos <= 75518) {
                    imposto = (salarioComImpostos * 36.93) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                } else if (salarioComImpostos > 75518) {
                    imposto = (salarioComImpostos * 49.50) / 100;
                    salarioComImpostos = salarioComImpostos - imposto;
                }
                break;
            default:
                console.log('Tipo de salário não reconhecido');
        }
    

    // Exibir o resultado na página
    document.getElementById('salarioComImpostos').textContent = salarioComImpostos.toFixed(2);
    

    // Mostrar os detalhes do cálculo
    document.getElementById('detalhesCalculo').classList.remove('hidden');
    document.getElementById('subtotal').querySelector('span').textContent = salario.toFixed(2);
    document.getElementById('impostos').querySelector('span').textContent = imposto.toFixed(2);
    document.getElementById('totalEstimado').querySelector('span').textContent = (salarioComImpostos).toFixed(2);
}
