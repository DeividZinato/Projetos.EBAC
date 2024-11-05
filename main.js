document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageElement = document.getElementById('message');

    if (campoB > campoA) {
        messageElement.textContent = "Formulário válido! O número B é maior que o número A.";
        messageElement.className = "success";
    } else {
        messageElement.textContent = "Formulário incorreto! O número B deve ser maior que o número A.";
        messageElement.className = "error";
    }
});
