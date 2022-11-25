function Submit(e) {
    const Name = document.querySelector('#name').value;
    const secondName = document.querySelector('#secondName').value;
    if(Name === "") {
        alert("Nome obrigatório");
        return e;
    } else if (secondName === "") {
        alert("Sobrenome obrigatório");
        return e;
    }

    alert("Formulário enviado com sucesso");
}

function Clear() {
    document.querySelector('#name').value = "";
    document.querySelector('#secondName').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#profission').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#sexo-m').value = "";
    document.querySelector('#sexo-f').value = "";
    return null;
}


