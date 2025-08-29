import puppeteer from 'puppeteer';
import fs from 'fs';  // Используем import вместо require

async function getStaffData() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--ignore-certificate-errors'],  // Игнорирование ошибок сертификатов
    });

    const page = await browser.newPage();

    try {
        // Ожидаем, что страница будет загружена
        await page.goto('https://ваш_сайт_сотрудников', { waitUntil: 'domcontentloaded' });

        console.log('Страница загружена успешно!');
    } catch (error) {
        console.error('Ошибка загрузки страницы:', error.message);
        await browser.close();
        return;  // Выход из функции, если страница не загружена
    }

    // Получение данных сотрудников
    const staffData = [];

    // Примерный код для извлечения информации о сотрудниках (зависит от структуры страницы)
    const staffList = await page.$$('.staff-member');  // Замените на актуальный селектор

    console.log(`Найдено сотрудников: ${staffList.length}`);

    for (let i = 0; i < staffList.length; i++) {
        const staff = staffList[i];
        
        try {
            // Извлечение данных о сотруднике
            const name = await staff.$eval('.staff-name', el => el.textContent.trim());
            const photoUrl = await staff.$eval('.staff-photo img', el => el.src);

            console.log(`Извлекаем данные для сотрудника: ${name}`);

            staffData.push({
                name,
                photoUrl,
            });

        } catch (error) {
            console.error(`Ошибка: не удалось получить данные для сотрудника на позиции ${i + 1}. Причина: ${error.message}`);
        }

        // Обновление прогресса (если необходимо)
        const progress = ((i + 1) / staffList.length) * 100;
        process.stdout.write(`[${'█'.repeat(Math.floor(progress / 10))}${'-'.repeat(10 - Math.floor(progress / 10))}] ${Math.round(progress)}% (${i + 1}/${staffList.length})\r`);
    }

    // Записываем данные в файл
    fs.writeFileSync('staff_data.json', JSON.stringify(staffData, null, 2));

    console.log('\nДанные сотрудников успешно записаны в файл "staff_data.json".');
    await browser.close();
}

// Запускаем функцию
getStaffData().catch(error => console.error('Ошибка выполнения скрипта:', error));
