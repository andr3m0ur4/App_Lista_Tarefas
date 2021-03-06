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

		$tarefa = new Tarefa();
		$conexao = new Conexao();

		$tarefa_service = new TarefaService($conexao, $tarefa);
		$tarefas = $tarefa_service->recuperar();

	} else if ($acao == 'atualizar') {

		$tarefa = new Tarefa();
		$tarefa->__set('id', $_POST['id']);
		$tarefa->__set('tarefa', $_POST['tarefa']);

		$conexao = new Conexao();

		$tarefa_service = new TarefaService($conexao, $tarefa);

		if ($tarefa_service->atualizar()) {
			if (isset($_GET['pag']) && $_GET['pag'] == 'index') {
				header('Location: ./index.php');
			} else {
				header('Location: ./todas_tarefas.php');
			}
		}
	} else if ($acao == 'remover') {

		$tarefa = new Tarefa();
		$tarefa->__set('id', $_GET['id']);

		$conexao = new Conexao();

		$tarefa_service = new TarefaService($conexao, $tarefa);
		
		if ($tarefa_service->remover()) {
			if (isset($_GET['pag']) && $_GET['pag'] == 'index') {
				header('Location: ./index.php');
			} else {
				header('Location: ./todas_tarefas.php');
			}
		}
	} else if ($acao == 'marcar_realizada') {

		$tarefa = new Tarefa();
		$tarefa->__set('id', $_GET['id']);
		$tarefa->__set('id_status', 2);

		$conexao = new Conexao();

		$tarefa_service = new TarefaService($conexao, $tarefa);
		
		if ($tarefa_service->marcarRealizada()) {
			if (isset($_GET['pag']) && $_GET['pag'] == 'index') {
				header('Location: ./index.php');
			} else {
				header('Location: ./todas_tarefas.php');
			}
		}
	} else if ($acao == 'recuperar_tarefas_pendentes') {
		$tarefa = new Tarefa();
		$tarefa->__set('id_status', 1);

		$conexao = new Conexao();

		$tarefa_service = new TarefaService($conexao, $tarefa);
		$tarefas = $tarefa_service->recuperarTarefasPendentes();
	}
	