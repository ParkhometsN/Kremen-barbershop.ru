<?php
$secret = 'mysecret123'; // Ваш секрет (должен совпадать с GitHub)
$input = file_get_contents('php://input');
$signature = 'sha256=' . hash_hmac('sha256', $input, $secret);
if ($signature !== $_SERVER['HTTP_X_HUB_SIGNATURE_256']) {
    file_put_contents('~/webhook.log', "Invalid signature: $signature\n", FILE_APPEND);
    http_response_code(403);
    echo 'Invalid signature';
    exit;
}
$json = json_decode($input, true);
if (isset($json['ref']) && strpos($json['ref'], 'main') !== false) {
    shell_exec('bash ~/deploy.sh >> ~/deploy.log 2>&1');
    file_put_contents('~/webhook.log', "Deploy triggered at " . date('Y-m-d H:i:s') . "\n", FILE_APPEND);
    http_response_code(200);
    echo 'OK';
} else {
    file_put_contents('~/webhook.log', "Invalid ref: " . ($json['ref'] ?? 'none') . "\n", FILE_APPEND);
    http_response_code(403);
    echo 'Forbidden';
}
?>
