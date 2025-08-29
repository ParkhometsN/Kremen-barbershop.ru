document.getElementById('open').addEventListener("click", function() {
    const navigation = document.getElementById('navigation');
    const navigationLinks = document.querySelector('.navigation_links');
    const navigationLinksSec = document.querySelector('.sale');
    const buttonmagic = document.querySelector('.active_button')

    // Проверяем текущее состояние высоты
    if (navigation.offsetHeight === 0) {
        navigation.classList.add("open");
        navigationLinks.classList.add("visible");
        navigationLinksSec.classList.add("visible");
        buttonmagic.classList.add("visibility")
    } else {
        navigation.classList.remove("open"); 
        navigationLinks.classList.remove("visible"); 
        navigationLinksSec.classList.remove("visible");
        buttonmagic.classList.remove("visibility")
    }
});
// window.onload = function() {
//     document.getElementById('services-content').style.display = 'block';
//     document.getElementById('additional-services-content').style.display = 'none';
//     document.getElementById('btn-services').style.opacity = '0.8';
//     document.getElementById('btn-additional-services').style.opacity = '1';
// };
    document.getElementById('btn-services').addEventListener('click', function() {
    document.getElementById('services-content').style.display = 'block';
    document.getElementById('additional-services-content').style.display = 'none';
    
    document.getElementById('btn-services').style.opacity = '0.8';
    document.getElementById('btn-additional-services').style.opacity = '1';
});
    document.getElementById('btn-additional-services').addEventListener('click', function() {
    document.getElementById('services-content').style.display = 'none';
    document.getElementById('additional-services-content').style.display = 'block';
    
    document.getElementById('btn-services').style.opacity = '1';
    document.getElementById('btn-additional-services').style.opacity = '0.8';
});
document.getElementById('first_information_').addEventListener('mouseenter', function() {
    document.querySelector('.infoprmatiuon_blick').style.visibility = 'visible';
});
document.addEventListener('DOMContentLoaded', function() {
    const infoBlock = document.querySelector('.infoprmatiuon_blick');
    const infoText = document.getElementById('info_text');
    const infoElements = document.querySelectorAll('.hover_serv');

    // Функция для показа информации
    function showInfo(text) {
        infoText.textContent = text;
        infoBlock.classList.add('visible');
    }

    // Функция для скрытия информации
    function hideInfo() {
        infoBlock.classList.remove('visible');
    }

    // Обработчики событий для элементов
    document.getElementById('first_information_').addEventListener('mouseenter', function() {
        showInfo('Страший мастер, заслуженный работник сети, годами оправдавший свои навыки, а также способности работы с клиентом на долгосрочное время.');
    });

    document.getElementById('second_information_').addEventListener('mouseenter', function() {
        showInfo('Эксперт-барбер сети Kremen — это мастер с высоким уровнем профессионализма и опытом. Он отлично владеет современными техниками стрижки и бритья, использует качественные инструменты и косметику, чтобы обеспечить безупречный результат для каждого клиента.');
    });
    document.getElementById('tree_information_').addEventListener('mouseenter', function() {
        infoText.textContent = 'Топ-эксперт сети Kremen — мастер с безупречным опытом и высоким уровнем профессионализма. Владея современными техниками стрижки и бритья, он использует лучшие инструменты и косметику, чтобы каждый клиент уходил с ощущением абсолютного совершенства.';
        infoBlock.classList.add('visible'); 
    });

    // Обработчик mouseleave для скрытия информации на десктопах
    infoElements.forEach(function(element) {
        element.addEventListener('mouseleave', hideInfo);
    });

    // Поддержка для мобильных устройств
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        infoElements.forEach(function(element) {
            element.addEventListener('touchstart', function() {
                showInfo(this.getAttribute('data-info')); // Показываем информацию
            });
        });

        // Скрываем блок информации при касании вне элемента
        document.addEventListener('touchstart', function(event) {
            if (!event.target.closest('.hover_serv') && !event.target.closest('.infoprmatiuon_blick')) {
                hideInfo();
            }
        });
    }
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    let index = 0;

    setInterval(() => {
        index++;
        if (index === totalSlides) {
        index = 0; 
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 5000); 






