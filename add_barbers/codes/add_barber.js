document.getElementById("add_barber").addEventListener("click", function () {
    const modal = document.querySelector(".modal_add_barber");
    if (modal) {
        modal.classList.add("open");
    }
});

// Закрыть модальное окно
document.getElementById("closed_add_barber").addEventListener("click", function () {
    const modal = document.querySelector(".modal_add_barber");
    if (modal) {
        modal.classList.remove("open");
    }
});

document.getElementById('add_barber_json').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const position = document.getElementById('position').value.trim();
    const description = document.getElementById('descr').value.trim();
    const photo = document.getElementById('file').files[0];

    // Проверяем заполненность полей
    if (!name || !position || !description || !photo) {
        alert('Пожалуйста, заполните все поля и добавьте фотографию.');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('position', position);
    formData.append('description', description);
    formData.append('photo', photo);

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0%';
    progressBar.style.visibility = 'visible';

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'codes/add_barber.php', true);

    // Прогресс загрузки
    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progressBar.style.width = percentComplete + '%';
            progressBar.innerText = Math.round(percentComplete) + '%';
        }
    };

    // Завершение загрузки
    xhr.onload = function () {
        progressBar.style.visibility = 'hidden';

        if (xhr.status === 200) {
            try {
                const response = JSON.parse(xhr.responseText);
                if (response.status === 'success') {
                    alert('Сотрудник успешно добавлен!');
                    location.reload();
                } else {
                    alert('Ошибка: ' + response.message);
                }
            } catch (e) {
                alert('Ошибка обработки ответа от сервера.');
                console.error('Ответ сервера:', xhr.responseText);
            }
        } else {
            alert('Ошибка: сервер вернул статус ' + xhr.status);
        }
    };

    // Обработка ошибок
    xhr.onerror = function () {
        progressBar.style.visibility = 'hidden';
        alert('Ошибка сети.');
    };

    xhr.send(formData);
});
