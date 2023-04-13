function cadastrar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("nome").value;

    if (nome === "" || senha === "" || email === "" || cpf === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    } 
    else if (senha.length < 6){
        alert("A senha deve conter mais de 6 caracteres")
    }
    else {
        alert("Cadastro efetuado!")
    }

}

