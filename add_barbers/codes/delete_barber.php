<?php
// Получаем путь к файлу из запроса
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['index']) || !isset($data['filePath'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Index or file path not provided']);
    exit;
}

// Указываем путь к JSON-файлу из данных запроса
$jsonFilePath = '../' . $data['filePath'];

// Проверяем, существует ли файл
if (!file_exists($jsonFilePath)) {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'message' => 'JSON file not found']);
    exit;
}

// Читаем содержимое JSON-файла
$jsonData = json_decode(file_get_contents($jsonFilePath), true);

// Проверяем, существует ли элемент с указанным индексом
if (!isset($jsonData[$data['index']])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Barber not found']);
    exit;
}

// Удаляем элемент из массива
unset($jsonData[$data['index']]);

// Перенумеровываем массив, чтобы индексы были последовательными
$jsonData = array_values($jsonData);

// Записываем обновлённые данные обратно в JSON-файл
if (file_put_contents($jsonFilePath, json_encode($jsonData, JSON_PRETTY_PRINT))) {
    echo json_encode(['status' => 'success', 'message' => 'Barber deleted']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to save changes']);
}
?>
