window.onload = () => {
	carregarClick()
}

function carregarClick() {
	let icone_remover = document.getElementsByClassName('remover')

	for (let i = 0; i < icone_remover.length; i++) {
		let id = icone_remover[i].id.replace('remover_', '')

		icone_remover.item(i).onclick = () => {
			remover(id)
		}
	}

	let icone_editar = document.getElementsByClassName('editar')

	for (let i = 0; i < icone_editar.length; i++) {
		let id = icone_editar[i].id.replace('editar_', '')
		let span = document.getElementById('tarefa_' + id).children[0].innerHTML

		icone_editar.item(i).onclick = () => {
			editar(id, span)
		}
	}

	let icone_atualizar = document.getElementsByClassName('atualizar')

	for (let i = 0; i < icone_atualizar.length; i++) {
		let id = icone_atualizar[i].id.replace('atualizar_', '')

		icone_atualizar.item(i).onclick = () => {
			marcarRealizada(id)
		}
	}
}

function editar(id, txt_tarefa) {
	// criar um form de edição
	let form = document.createElement('form')
	if (caminho == 'index.php') {
		form.action = `./${caminho}?pag=index&acao=atualizar`
	} else {
		form.action = `./${caminho}?acao=atualizar`
	}
	form.method = 'post'
	form.className = 'row input-group'

	// criar um input para entrada do texto
	let inputTarefa = document.createElement('input')
	inputTarefa.type = 'text'
	inputTarefa.name = 'tarefa'
	inputTarefa.className = 'col-9 form-control'
	inputTarefa.value = txt_tarefa

	// criar um input hidden para guardar o id da tarefa
	let inputId = document.createElement('input')
	inputId.type = 'hidden'
	inputId.name = 'id'
	inputId.value = id

	// criar div para encapsular botão
	let divButton = document.createElement('div')
	divButton.className = 'col-3 input-group-append pl-0'

	// criar um button para envio do form
	let button = document.createElement('button')
	button.type = 'submit'
	button.className = 'btn btn-info'
	button.innerHTML = 'Atualizar'
	divButton.appendChild(button)

	// incluir inputTarefa no form
	form.appendChild(inputTarefa)

	// incluir inputId no form
	form.appendChild(inputId)

	// incluir o divButton no form
	form.appendChild(divButton)

	console.log(form)

	// selecionar a div tarefa
	let tarefa = document.getElementById('tarefa_' + id)

	// limpar o texto da tarefa para inclusão do form
	tarefa.innerHTML  = ''

	// incluir form na página
	tarefa.insertBefore(form, tarefa[0])
}

function remover(id) {
	if (caminho == 'index.php') {
		location.href = `./${caminho}?pag=index&acao=remover&id=` + id
	} else {
		location.href = `./${caminho}?acao=remover&id=` + id
	}
}

function marcarRealizada(id) {
	if (caminho == 'index.php') {
		location.href = `./${caminho}?pag=index&acao=remover&id=` + id
	} else {
		location.href = `./${caminho}?acao=marcar_realizada&id=` + id
	}
}

let caminho = extrairArquivo(location.href)

// Função para extrair o nome do arquivo
function extrairArquivo(caminho){
	caminho	= caminho.replace("/\/g", '/')
	let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1)
	
	return arquivo
}
