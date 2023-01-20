<?php
include('../global/conn.php');

$data = json_decode(file_get_contents('php://input'), true);

$CUSTOMER_ID = $data['customer_id'];
$FOOD_ITEMS_ARRAY = $data['food_items'];

//content vars
$title = $data["title"];
$website = $data["website"];
$status = $data["status"];
$description = $data["description"];
$website_link = $data["website_link"];
$img_src = $data["img_src"];

//season vars
$season_current = $data["season_current"];
$season_count = $data["season_count"];
$episode_current = $data["episode_current"];
$episode_count = $data["episode_count"];

//tables id
$content_id = -1;
$season_id = -1;

//insert query
$queryInsertNewContent = "INSERT INTO `content`(`title`, `website`, `status`, `description`, `website_link`, `img_src`) VALUES"
	. "('{$title}', '{$website}', '{$status}', '{$description}', '{$website_link}', '{$img_src}')";


//execute query
$stmt_InsertNewContent = $cnn->prepare($queryInsertNewContent);
$stmt_InsertNewContent->execute();

//get the last inserted id
$content_id = $cnn->lastInsertId();


if ($content_id != -1) {
	$queryInsertNewSeason = "INSERT INTO `season`( `content_id`, `season_current`, `season_count`, `episode_current`, `episode_count`) VALUES"
		. "({$content_id},'{$season_current}','{$season_count}','{$episode_current}','{$episode_count}')";

	//execute query
	$stmt_InsertNewSeason = $cnn->prepare($queryInsertNewSeason);
	$stmt_InsertNewSeason->execute();

	//get the last inserted id
	$season_id = $cnn->lastInsertId();
}

// create jsonResponseObj
$jsonResponse = new stdClass();
$jsonResponse->content_id = $content_id;
$jsonResponse->season_id = $season_id;


echo json_encode($jsonResponse);

?>