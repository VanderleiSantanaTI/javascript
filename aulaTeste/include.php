<?php
$host = 'localhost';
$bd = 'teste';
$user = 'postgres';
$pass = '999393';
$conexao = pg_connect("host=$host dbname=$bd user=$user password=$pass");
/*$conexao = pg_connect("database = teste, host = localhost,user = postgres, password = 999393,
port = 5432");*/
$query=("INSERT INTO users(nome,documento,idade) VALUES ('$_REQUEST[nome]','$_REQUEST[documento]', '$_REQUEST[idade]')");

$consulta = pg_query($conexao, $query);
pg_close();
if ($consulta){
    echo 'Os dados foram enviados com sucesso!';
}


?>