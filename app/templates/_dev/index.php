<?php

$tmp=explode('/',$_SERVER['REQUEST_URI']);
$REQUEST_URI = array();
$i=count($tmp);
for($n=0;$n<$i;$n++){
    if($tmp[$n]){
        $REQUEST_URI[$n]=$tmp[$n];
    }
}

switch (@$REQUEST_URI[1]) {

    case "logout":
        // header("Location: ".$server_url."logout.php?logout");
        break;

    default:
        include_once ('home.php');
        break;
}

?>