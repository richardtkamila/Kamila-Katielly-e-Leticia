function calcular() {
    let valorCompra = parseFloat(document.getElementById("valorCompra").value);
    let valorFrete = parseFloat(document.getElementById("valorFrete").value);
    let resultado = document.getElementById("resultado");

    // Validação
    if (isNaN(valorCompra) || isNaN(valorFrete) || valorCompra < 0 || valorFrete < 0) {
        resultado.innerText = "Por favor, insira valores válidos!";
        return;
    }

    let desconto = 0;

    // Aplicação do desconto progressivo
    if (valorCompra > 500) {
        desconto = valorCompra * 0.15;
    } else if (valorCompra > 200) {
        desconto = valorCompra * 0.05;
    }

    let valorComDesconto = valorCompra - desconto;

    // Soma do frete após desconto
    let valorFinal = valorComDesconto + valorFrete;

    // Exibir resultado com 2 casas decimais
    resultado.innerText = "Valor final: R$ " + valorFinal.toFixed(2);
}