<?php
$input = file_get_contents('php://input');
$json = json_decode($input, true);
if (isset($json['ref']) && strpos($json['ref'], 'main') !== false) {  // только для ветки main
    shell_exec('/home/youruser/deploy.sh');  // запуск скрипта
    http_response_code(200);
    echo 'OK';
} else {
    http_response_code(403);
}
?>
