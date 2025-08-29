<?php
// Пути для сохранения файлов
$jsonFilePath = '../staff_data_kremen.json';
$imageUploadPath = $_SERVER['DOCUMENT_ROOT'] . '/add_barber/img/';
$imageRelativePath = 'add_barber/img/';

header('Content-Type: application/json; charset=utf-8');

// Проверяем, что запрос POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем наличие всех данных
    if (!isset($_POST['name'], $_POST['position'], $_POST['description']) || !isset($_FILES['photo'])) {
        echo json_encode(['status' => 'error', 'message' => 'Отсутствуют необходимые данные']);
        exit;
    }

    $name = $_POST['name'];
    $position = $_POST['position'];
    $description = $_POST['description'];
    $photo = $_FILES['photo'];

    // Проверяем наличие ошибок при загрузке файла
    if ($photo['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['status' => 'error', 'message' => 'Ошибка загрузки фото']);
        exit;
    }

    // Создаем папку, если она не существует
    if (!is_dir($imageUploadPath)) {
        if (!mkdir($imageUploadPath, 0777, true)) {
            echo json_encode(['status' => 'error', 'message' => 'Не удалось создать папку для изображений']);
            exit;
        }
    }

    // Проверяем права доступа
    if (!is_writable($imageUploadPath)) {
        echo json_encode(['status' => 'error', 'message' => 'Папка недоступна для записи', 'path' => $imageUploadPath]);
        exit;
    }

    // Проверяем допустимые расширения
    $extension = strtolower(pathinfo($photo['name'], PATHINFO_EXTENSION));
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    if (!in_array($extension, $allowedExtensions)) {
        echo json_encode(['status' => 'error', 'message' => 'Недопустимый формат файла']);
        exit;
    }

    // Уникальное имя файла
    $fileName = uniqid() . '.' . $extension;
    $photoPath = $imageUploadPath . $fileName;

    // Перемещаем файл
    if (!move_uploaded_file($photo['tmp_name'], $photoPath)) {
        echo json_encode(['status' => 'error', 'message' => 'Не удалось сохранить фото']);
        exit;
    }

    // Читаем или создаем JSON
    $data = file_exists($jsonFilePath) ? json_decode(file_get_contents($jsonFilePath), true) : [];
    if ($data === null) {
        $data = [];
    }

    // Создаем нового сотрудника
    $newId = count($data) > 0 ? end($data)['id'] + 1 : 1;
    $newStaffMember = [
        'id' => $newId,
        'name' => $name,
        'position' => $position,
        'description' => $description,
        'photo_url' => $imageRelativePath . $fileName
    ];
    $data[] = $newStaffMember;

    // Сохраняем JSON
    if (file_put_contents($jsonFilePath, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        echo json_encode(['status' => 'success', 'message' => 'Сотрудник успешно добавлен']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Не удалось сохранить данные']);
    }
    exit;
}

echo json_encode(['status' => 'error', 'message' => 'Неверный запрос']);
exit;
?>
