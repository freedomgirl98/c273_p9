<?php

include "dbFunctions.php"; 

$id = $_GET['id'];


// SQL query returns multiple database records.
$query = "SELECT * FROM statistics WHERE id=$id"; 
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $statistics[] = $row;
}
mysqli_close($link);

echo json_encode($statistics);

?>