function calcularFrete() {
    let peso = parseFloat(document.getElementById("peso").value);
    let resultado = document.getElementById("resultado");

    try {
        let frete = calcularValorFrete(peso);
        resultado.innerText = "Valor do frete: R$ " + frete.toFixed(2);
    } catch (erro) {
        resultado.innerText = erro.message;
    }
}

function calcularValorFrete(peso) {
    // Validação
    if (isNaN(peso) || peso <= 0) {
        throw new Error("Por favor, insira um peso válido.");
    }

    let frete = 0;

    // Regras de cálculo
    if (peso <= 5) {
        frete = 10;
    } else if (peso > 5 && peso <= 20) {
        frete = 20;
    } else {
        frete = 50;
    }

    return frete;
}