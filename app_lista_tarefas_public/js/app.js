window.onload = () => {
	carregarClick()
}

function carregarClick() {
	let icone_editar = document.getElementsByClassName('edicao')

	for (let i = 0; i < icone_editar.length; i++) {
		let span = document.getElementById('tarefa_' + icone_editar.item(i).id).children[0].innerHTML

		icone_editar.item(i).onclick = () => {
			editar(icone_editar.item(i).id, span)
		}
	}
}

function editar(id, txt_tarefa) {
	// criar um form de edição
	let form = document.createElement('form')
	form.action = '#'
	form.method = 'post'
	form.className = 'row input-group justify-content-center'

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
