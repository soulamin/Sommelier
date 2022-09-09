<?php

/**
 * 
 * User: ALAN LAMIN
 * Date: 03/06/2022
 * Time: 15:26
 */
require '../../fontes/conexao.php';
$tipo = $_GET['t'];
$sql_insert = "INSERT INTO dash_pergunta(tipo)
                                          VALUES (:tipo) ";

// Prepara uma senten�a para ser executada                                               
$statement = $pdo->prepare($sql_insert);
$statement->bindParam(':tipo', $tipo);
// Executa a senten�a j� com os valores
if ($statement->execute()) {
    // Definimos a mensagem de sucesso
    $cod_error = 0;
    $msg = "Cadastro Realizado com Sucesso!";
} else {
    $cod_error = 1;
    $msg = "erro no cadastro";
}
$Resultado['msg'] = $msg;
echo json_encode($Resultado);
