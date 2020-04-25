<?php 

	require '../app_lista_tarefas/Tarefa.php';
	require '../app_lista_tarefas/TarefaService.php';
	require '../app_lista_tarefas/Conexao.php';

	$acao = $_GET['acao'] ?? $acao;

	if ($acao == 'inserir') {
		$tarefa = new Tarefa();
		$tarefa->__set('tarefa', $_POST['tarefa']);

		$conexao = new Conexao();

		$tarefa_service = new TarefaService($conexao, $tarefa);
		$tarefa_service->inserir();

		header('Location: ./nova_tarefa.php?inclusao=1');
	} else if ($acao == 'recuperar') {
		echo 'Chegamos até aqui!';
	}
	