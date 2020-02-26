
<?php
    ob_start();
    session_start();
    require("include/config.php");

    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
    $mysqli->query("SET CHARACTER SET 'utf8'");
    $mysqli->query("SET NAMES 'utf8'");


    $sql = "SELECT * FROM contact_data";

    $result = $mysqli -> query($sql);
    $array = array();
    if (mysqli_num_rows($result) > 0){
        $data = mysqli_fetch_assoc($result);
    }
    $ret = array(
        'title' => $data['title']
    );
    header('content-type:application/json;charset=utf8');

    echo json_encode($ret);
?>
