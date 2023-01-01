<?php
include('../global/conn.php');


$queryAcceptedOrders = "SELECT * FROM view_content";
$queryAccepted = $cnn->query($queryAcceptedOrders)->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($queryAccepted);

?>

