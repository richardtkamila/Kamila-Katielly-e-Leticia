function calcularPrecoFinal() {
    const preco = parseFloat(document.getElementById("preco").value);
    const imposto = parseFloat(document.getElementById("imposto").value);
    const resultado = document.getElementById("resultado");

    // Validação
    if (isNaN(preco) || isNaN(imposto) || preco <= 0 || imposto < 0) {
        resultado.textContent = "Por favor, insira valores válidos!";
        resultado.style.color = "red";
        return;
    }

    // Cálculo
    const valorImposto = preco * (imposto / 100);
    const precoFinal = preco + valorImposto;

    // Formatação em moeda (R$)
    const precoFormatado = precoFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    resultado.textContent = `Preço final: ${precoFormatado}`;
    resultado.style.color = "green";
}