function cadastrar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("nome").value;

    if (nome === "" || senha === "" || email === "" || cpf === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    } else {
        alert("Cadastro efetuado!")
    }

}

