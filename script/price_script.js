document.addEventListener('DOMContentLoaded', function() {
    const infoBlock = document.querySelector('.infoprmatiuon_blick');
    const infoText = document.getElementById('info_text');

    const serviceInfo = {
        first: 'Страший мастер, заслуженный работник сети, годами оправдавший свои навыки, а также способности работы с клиентом на долгосрочное время.',
        second: 'Эксперт-барбер сети Kremen — это мастер с высоким уровнем профессионализма и опытом. Он отлично владеет современными техниками стрижки и бритья, использует качественные инструменты и косметику, чтобы обеспечить безупречный результат для каждого клиента.',
        third: 'Топ-эксперт сети Kremen — мастер с безупречным опытом и высоким уровнем профессионализма. Владея современными техниками стрижки и бритья, он использует лучшие инструменты и косметику, чтобы каждый клиент уходил с ощущением абсолютного совершенства.'
    };

    const serviceElements = {
        'first_information_': serviceInfo.first,
        'second_information_': serviceInfo.second,
        'tree_information_': serviceInfo.third
    };

    // Обработка наведения мыши
    for (const [id, text] of Object.entries(serviceElements)) {
        document.getElementById(id).addEventListener('mouseenter', function() {
            infoText.textContent = text;
            infoBlock.classList.add('visible');
        });
    }

    // Убираем информацию при уходе мыши
    document.querySelectorAll('.hover_serv').forEach(function(element) {
        element.addEventListener('mouseleave', function() {
            infoBlock.classList.remove('visible');
        });
    });

    // Переключение контента
    const toggleContent = (btnId, contentIdToShow, contentIdToHide) => {
        document.getElementById(contentIdToShow).style.display = 'block';
        document.getElementById(contentIdToHide).style.display = 'none';
        document.getElementById(btnId).style.opacity = '0.8';
        document.getElementById(btnId === 'btn-services' ? 'btn-additional-services' : 'btn-services').style.opacity = '1';
    };

    document.getElementById('btn-services').addEventListener('click', function() {
        toggleContent('btn-services', 'services-content', 'additional-services-content');
    });

    document.getElementById('btn-additional-services').addEventListener('click', function() {
        toggleContent('btn-additional-services', 'additional-services-content', 'services-content');
    });

    // Изначальная настройка
    document.getElementById('services-content').style.display = 'block';
    document.getElementById('additional-services-content').style.display = 'none';
    document.getElementById('btn-services').style.opacity = '0.8';
    document.getElementById('btn-additional-services').style.opacity = '1';
});
