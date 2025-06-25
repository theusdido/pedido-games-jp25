var total_quantidade = 0;
var total_valor = 0;

function adicionar(){
    // Seleciona os elementos html
    const produto = $("#produto").val();
    const quantidade = $("#quantidade").val();
    const valor = $("#valor").val();
    const codigo = $('#lista-produto tbody tr').length + 1;

    total_quantidade += parseInt(quantidade);
    total_valor += parseFloat(valor) * quantidade;

    $("#total-quantidade").text(total_quantidade);
    $("#total-valor").text(total_valor.toFixed(2));

    // Criar uma linha da tabela de forma dinâmica
    const linha = `<tr>
        <td>${codigo}</td>
        <td>${produto}</td>
        <td>${quantidade}</td>
        <td>${valor}</td>
    </tr>`;

    // Adicionar a linha no corpo da tabela
    $('#lista-produto tbody').append(linha);

    limpar();
}
function limpar(){
    $("#produto").val("");
    $("#quantidade").val("");
    $("#valor").val("");
}