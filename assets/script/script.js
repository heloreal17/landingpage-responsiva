document.querySelector('form .email').oninvalid = function(evt) {  
    // essa linha cancela o comportamento padrão do navegador
    evt.preventDefault();
    // faz a validação novamente
    if (!this.validity.valid) {
        //aqui eu mostro o alert
        alert("⚠️O Nome e o E-mail são itens obrigatórios, por favor, preencha esses campos antes de enviar⚠️");
    }
};
