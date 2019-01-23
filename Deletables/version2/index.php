<?php

// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:minds.database.windows.net,1433; Database = profiles", "spoorthiusha", "Inspired@21");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "spoorthiusha@minds", "pwd" => "Inspired@21", "Database" => "profiles", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:minds.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);

if($conn){
    print("Successful");
}

?>