<?php 

	require '../app_lista_tarefas/Tarefa.php';
	require '../app_lista_tarefas/TarefaService.php';
	require '../app_lista_tarefas/Conexao.php';

	print_r($_POST);

	$tarefa = new Tarefa();
	$tarefa->__set('tarefa', $_POST['tarefa']);

	$conexao = new Conexao();

	$tarefa_service = new TarefaService($conexao, $tarefa);
	$tarefa_service->inserir();

	echo '<pre>';
	print_r($tarefa_service);
	