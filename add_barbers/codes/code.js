// Загружаем данные сотрудников для указанного файла JSON
async function loadStaffData(filePath, renderFunction) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const staffData = await response.json();
        renderFunction(staffData);
    } catch (error) {
        console.error(`Error fetching staff data from ${filePath}:`, error);
    }
}

// Удаление сотрудника
async function deleteStaffMember(filePath, index) {
    try {
        const response = await fetch('codes/delete_barber.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index, filePath }) // Передаем путь к нужному файлу
        });

        if (!response.ok) {
            throw new Error('Failed to delete staff member');
        }

        console.log('Staff member deleted successfully');
        // Перезагружаем список сотрудников после удаления
        loadStaffData(filePath, filePath === 'staff_data_kremen.json' ? renderBarbersKremen : renderBarbersPark);
    } catch (error) {
        console.error(`Error deleting staff member from ${filePath}:`, error);
    }
}

// Загрузка данных для сотрудников из Kremen
function renderBarbersKremen(staffData) {
    renderStaffData(staffData, 'barbersItems', (index) => {
        showDeleteConfirmation(index, 'staff_data_kremen.json'); // Указываем путь для Kremen
    });
}

// Загрузка данных для сотрудников из Park
function renderBarbersPark(staffData) {
    renderStaffData(staffData, 'barbersItemsd', (index) => {
        showDeleteConfirmation(index, 'staff_data_park.json'); // Указываем путь для Park
    });
}

// Универсальная функция рендеринга сотрудников
function renderStaffData(staffData, containerId, deleteHandler) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }

    container.innerHTML = ''; // Очищаем перед отрисовкой

    staffData.forEach((staffMember, index) => {
        const staffItem = document.createElement('div');
        staffItem.className = 'personal';

        staffItem.innerHTML = `
            <div class="qwdjnqwdnoiqwouqdo">
                <div class="masters">
                    <div class="qwef">
                        <div class="container_picture_barber">
                            <img src="${staffMember.photo_url}" alt="${staffMember.name}">
                        </div>
                        <div class="text">
                            <div class="category"><h5>${staffMember.position}</h5></div>
                            <div class="name_of_barber"><h5>${staffMember.name}</h5></div>
                        </div>
                    </div>
                    <button class="delet_barber" data-index="${index}">x</button>
                </div>
            </div>
        `;

        container.appendChild(staffItem);
    });

    // Устанавливаем обработчики событий для кнопок удаления
    container.querySelectorAll('.delet_barber').forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            deleteHandler(index);
        });
    });
}

// Показ окна подтверждения удаления
function showDeleteConfirmation(index, filePath) {
    const modalWindow = document.getElementById('ok');
    if (modalWindow) {
        modalWindow.style.visibility = 'visible';
        modalWindow.style.position = 'fixed';

        const cancelButton = modalWindow.querySelector('.buttons button:first-child');
        const confirmButton = modalWindow.querySelector('.buttons button:last-child');

        cancelButton?.addEventListener('click', hideDeleteConfirmation);
        confirmButton?.addEventListener('click', () => {
            deleteStaffMember(filePath, index); // Передаем путь к нужному файлу
            hideDeleteConfirmation();
        });
    }
}

// Скрытие окна подтверждения удаления
function hideDeleteConfirmation() {
    const modalWindow = document.getElementById('ok');
    if (modalWindow) {
        modalWindow.style.visibility = 'hidden';
        modalWindow.style.position = 'absolute';
    }
}

// Загрузка данных с двух файлов JSON
loadStaffData('staff_data_kremen.json', renderBarbersKremen);
loadStaffData('staff_data_park.json', renderBarbersPark);

