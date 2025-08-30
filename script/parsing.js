// import puppeteer from 'puppeteer';
// import fs from 'fs';
// import fetch from 'node-fetch';

// // Функция для отображения прогресс-бара
// function displayProgressBar(current, total) {
//     const percent = (current / total) * 100;
//     const barLength = 50;
//     const block = Math.floor(barLength * percent / 100);
//     const progress = '█'.repeat(block) + '-'.repeat(barLength - block);
//     process.stdout.write(`\r[${progress}] ${percent.toFixed(2)}% (${current}/${total})`);
// }

// // Функция для получения имени и должности сотрудника
// async function getNameAndPosition(element) {
//     try {
//         const name = await element.$eval('.name.ng-star-inserted', el => el.textContent.trim());
//         const position = await element.$eval('.position-or-specialization.ng-star-inserted', el => el.textContent.trim());
//         return { name, position };
//     } catch (error) {
//         return { name: "Не найдено", position: "Не найдено" };
//     }
// }

// // Функция для получения высококачественной фотографии
// async function getHighQualityPhoto(photoUrl) {
//     try {
//         if (photoUrl.includes("masters/sm/")) {
//             const highQualityUrl = photoUrl.replace("masters/sm/", "masters/origin/");
//             const response = await fetch(highQualityUrl, { method: 'HEAD' });
//             if (response.ok) {
//                 return highQualityUrl;
//             }
//         }
//     } catch (error) {
//         console.log(`Не удалось проверить URL высокого качества для ${photoUrl}: ${error.message}`);
//     }
//     return null;  // Если фото не получено с URL высокого качества, возвращаем null
// }

// // Функция для загрузки фотографии с подробной информации с повторными попытками
// async function loadPhotoFromDetails(page) {
//     let attempts = 0;
//     let photoUrl = null;

//     while (attempts < 5 && !photoUrl) {
//         try {
//             const currentPhotoUrl = await page.$eval('img.image.ng-star-inserted', img => img.src);
//             const highQualityUrl = await getHighQualityPhoto(currentPhotoUrl);
//             photoUrl = highQualityUrl || currentPhotoUrl;
            
//             // Если фото миниатюра, пробуем снова
//             if (photoUrl && photoUrl.includes('masters/sm/')) {
//                 console.log("Фото является миниатюрой, пробуем снова.");
//                 photoUrl = null;  // Обнуляем фото, чтобы попробовать снова
//             } else {
//                 return photoUrl;  // Если фото нормальное, возвращаем его
//             }
//         } catch (error) {
//             console.log("Ошибка: не удалось получить фотографию с подробной страницы.");
//         }
        
//         attempts++;
//         if (attempts < 5) {
//             console.log(`Попытка ${attempts}/5: не удалось получить фотографию, пробуем снова...`);
//             await new Promise(resolve => setTimeout(resolve, 1000)); // Задержка 1 секунда перед повтором
//         }
//     }
//     return null;  // Если после 5 попыток фото не получено, возвращаем null
// }

// // Функция для получения данных сотрудников
// async function getStaffData() {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();

//     const url = 'https://n781010.yclients.com/company/733381/personal/select-master?o=';
//     await page.goto(url, { waitUntil: 'domcontentloaded' });

//     await page.waitForSelector('ui-kit-simple-cell', { timeout: 20000 }).catch(() => {
//         console.log("Ошибка: не удалось дождаться загрузки сотрудников.");
//         browser.close();
//         return;
//     });

//     const staffData = [];
//     let staffElements = await page.$$('ui-kit-simple-cell');
//     const totalStaff = staffElements.length;

//     console.log(`\nНайдено сотрудников: ${totalStaff}`);

//     for (let i = 0; i < totalStaff; i++) {
//         displayProgressBar(i + 1, totalStaff);

//         try {
//             // Обновляем список сотрудников после каждой итерации
//             staffElements = await page.$$('ui-kit-simple-cell');
//             const element = staffElements[i];
//             const { name, position } = await getNameAndPosition(element);

//             // Пропускаем "Любой специалист"
//             if (name === "Любой специалист") {
//                 console.log(`Пропускаем ${name}.`);
//                 continue;
//             }

//             // Проверка на класс 'staff-block disabled' у родительского элемента
//             const isDisabled = await element.evaluate((el) => {
//                 return el.classList.contains('staff-block') && el.classList.contains('disabled');
//             });

//             // Пропускаем сотрудников с классами 'staff-block' и 'disabled'
//             if (isDisabled) {
//                 console.log(`Пропускаем ${name}, так как он заблокирован.`);
//                 continue; // Пропускаем заблокированных сотрудников
//             }

//             // Нажимаем на кнопку для подробной информации
//             const infoButton = await element.$('div.info-button-container.ng-star-inserted');
//             if (infoButton) {
//                 await infoButton.click();
//                 await page.waitForSelector('img.image.ng-star-inserted', { timeout: 20000 });
//             } else {
//                 console.log(`Не удалось найти кнопку для сотрудника ${name}.`);
//                 continue;
//             }

//             let photoUrl = await loadPhotoFromDetails(page);

//             // Дополнительная проверка на фото по умолчанию
//             if (!photoUrl || photoUrl === "https://avatars.mds.yandex.net/default_image") {
//                 console.log(`Используем фото по умолчанию для ${name}`);
//                 photoUrl = null; // Убираем фото по умолчанию
//             }

//             // Добавляем данные сотрудника в список, только если он не заблокирован и имеет корректную фотографию
//             if (photoUrl) {
//                 staffData.push({
//                     id: staffData.length + 1,
//                     name: name,
//                     position: position,
//                     photo_url: photoUrl
//                 });
//             } else {
//                 console.log(`Пропускаем ${name}, так как у него стандартное фото.`);
//             }

//             // Возвращаемся на главную страницу
//             await page.goBack({ waitUntil: 'domcontentloaded' });

//             // Ожидание перезагрузки страницы
//             await new Promise(resolve => setTimeout(resolve, 3000));  // Увеличенное время ожидания

//         } catch (error) {
//             console.log(`Ошибка: не удалось получить данные для сотрудника ${i + 1}. Причина: ${error.message}`);
//         }
//     }

//     // Записываем только сотрудников, которые не заблокированы и имеют корректную фотографию
//     fs.writeFileSync('staff_data_kremen.json', JSON.stringify(staffData, null, 4), 'utf-8');
//     console.log("\n\nДанные сотрудников успешно записаны в файл 'staff_data.json'.");

//     await browser.close();
// }

// // Вызов функции
// getStaffData().catch(err => console.error(err));
