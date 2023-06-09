document.querySelector('#salvar').addEventListener("click", cadastrar)

function cadastrar() {
    const titulo = document.querySelector('#titulo').value
    const descricao = document.querySelector('#descricao').value
    const categoria = document.querySelector('#categoria').value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#examploModal"))

    const tarefa ={
        titulo,
        descricao,
        categoria,
    }

    
    if(!validar(tarefa.titulo, document.querySelector("#titulo"))) return
    if(!validar(tarefa.descricao, document.querySelector("#descricao"))) return
    
    document.querySelector("#tarefas").innerHTML += createcard(tarefa)

    modar.hide()

}


function validar(valor,campo){
if(valor ==""){
    campo.classList.add("is-invalid")
    campo.classList.remove("is-valid")
    return false
}

campo.classList.remove("is-invalid")
campo.classList.add("is-valid")
return true

}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function createcard(tarefa) {
    return `
        <div class="col-lg-3 col-md-6 col-12">
                    <div class="card">
                        <div class="card-header">
                            ${tarefa.titulo}
                        </div>
                        <div class="card-body">
                            <p class="card-text">${tarefa.descricao}</p>
                            <p>
                                <span class="badge text-bg-danger">${categoria}</span>
                            </p>
                            <a href="#" class="btn btn-success" title="Marcar como concluida">
                            <i class="bi-cart-fill"></i>
                        </a>

                        </div>
                    </div> <!-- card1 -->
                </div> <!-- Col -->
                `//template
}

